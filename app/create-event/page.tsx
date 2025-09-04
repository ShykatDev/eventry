import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import SelectInp from "@/components/common/SelectInp";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { audienceOptions, categoryOptions, modeOptions } from "@/const/static";
import { cn } from "@/lib/utils";

const BaseInputBox = ({
  children,
  className,
  label,
  id,
  error,
}: {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  id?: string;
  error?: boolean;
}) => {
  return (
    <div className="py-0 w-full">
      <div className="border-y px-0">
        <div className="border-x-0">
          <div className={cn("text-sm px-4 border-b", className)}>
            <label htmlFor={id} className="px-3 py-2 block border-x">
              {label ?? "Label"}
            </label>
          </div>
          <div className={cn("px-4", className)}>
            {children}
            {error && (
              <span className="text-rose-500 text-xs block px-4 border-x py-1">
                This field is required
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="">
      <SectionGap />
      <Section className="py-0">
        <div className="border-x text-center">
          <h1 className="py-2 text-xl border-b text-neutral-200">
            Create Your Event
          </h1>

          <span className="p-4 border-x text-sm block max-w-3xl mx-auto text-neutral-400">
            Fill out the details below to create your event. Once submitted,
            your event will be live for attendees to explore and join. Don’t
            worry—you can always edit later.
          </span>
        </div>
      </Section>
      <SectionGap />
      <Section className="p-0 bg-border/30">
        <Section
          className="p-0 bg-border/30 max-w-3xl"
          parentClassName="border-b-0"
        >
          <div className="py-4">
            <div className="border-y px-0">
              <div className="bg-background">
                <form action="" className="space-y-4 py-4">
                  <BaseInputBox label="Event Title">
                    <Input
                      placeholder="e.g. TEDx Istanbul I Ideas worth spreading Inspiring talks"
                      className="inputBox"
                    />
                  </BaseInputBox>

                  <BaseInputBox label="Event Description">
                    <Textarea
                      placeholder="TEDx Istanbul I Ideas worth spreading Inspiring talks..."
                      className="inputBox"
                    />
                  </BaseInputBox>

                  <div className="flex items-center">
                    <BaseInputBox className="pr-2" label="Organization">
                      <Input
                        placeholder="e.g. Belman Ford"
                        className="inputBox"
                      />
                    </BaseInputBox>

                    <BaseInputBox className="pl-2" label="Mode">
                      <SelectInp
                        placeholder="Select mode"
                        options={modeOptions}
                      />
                    </BaseInputBox>
                  </div>

                  <div className="flex items-center">
                    <BaseInputBox className="pr-2" label="Category">
                      <SelectInp
                        placeholder="Select category"
                        options={categoryOptions}
                      />
                    </BaseInputBox>
                    <BaseInputBox className="pl-2" label="Audience">
                      <SelectInp
                        placeholder="Select audience"
                        options={audienceOptions}
                      />
                    </BaseInputBox>
                  </div>

                  <div className="flex items-center">
                    <BaseInputBox className="pr-2" label="Location">
                      <Input
                        placeholder="e.g. Shoinik Club, Banani"
                        className="inputBox"
                      />
                    </BaseInputBox>

                    <BaseInputBox className="pl-2" label="Date">
                      <DatePicker />
                    </BaseInputBox>
                  </div>
                  <div className="flex items-center">
                    <BaseInputBox className="pr-2" label="Time">
                      <Input
                        type="time"
                        id="time-picker"
                        step="1"
                        defaultValue="00:00:00"
                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none inputBox"
                      />
                    </BaseInputBox>
                    <BaseInputBox className="pl-2" label="Helpline">
                      <Input
                        placeholder="e.g. +880 18799866202"
                        className="inputBox"
                      />
                    </BaseInputBox>
                  </div>

                  <div className="mt-4 border-y px-4">
                    <div className="border-x flex justify-end items-center">
                      <Button className="border-border rounded-none">
                        Create event
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </Section>
    </div>
  );
};

export default Page;
