"use client";

import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  name,
  value,
  onChange,
}: {
  name: string;
  value?: Date;
  onChange?: (date: Date) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-3">
      {/* Hidden input for FormData */}
      <input
        type="hidden"
        name={name}
        value={value ? format(value, "yyyy-MM-dd") : ""}
      />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={name}
            className="w-full justify-between font-normal inputBox"
          >
            {value ? (
              value.toLocaleDateString()
            ) : (
              <span className="text-neutral-600">Select date</span>
            )}
            <ChevronDownIcon className="text-neutral-600" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            onSelect={(d) => {
              if (d) {
                onChange?.(d);
                setOpen(false);
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
