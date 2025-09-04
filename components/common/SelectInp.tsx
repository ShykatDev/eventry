"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectOptionsType } from "@/types/dataTypes";

const SelectInp = ({
  options,
  placeholder,
  name,
  value,
  onChange,
}: {
  options: SelectOptionsType;
  placeholder?: string;
  name: string;
  value: string;
  onChange?: (val: string) => void;
}) => {
  return (
    <>
      {/* Hidden input for FormData submission */}
      <input type="hidden" name={name} value={value} />

      <Select
        value={value}
        onValueChange={(val) => {
          onChange?.(val); // Call Formik's setFieldValue
        }}
      >
        <SelectTrigger className="w-full inputBox">
          <SelectValue placeholder={placeholder ?? "Select"} />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={item.label + index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectInp;
