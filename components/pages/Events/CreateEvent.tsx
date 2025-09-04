"use client";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import SelectInp from "@/components/common/SelectInp";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { audienceOptions, categoryOptions, modeOptions } from "@/const/static";
import { useEvents } from "@/hooks/useEvents";
import { cn } from "@/lib/utils";
import { eventsDataType } from "@/types/dataTypes";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as Yup from "yup";

const BaseInputBox = ({
  children,
  className,
  label,
  error,
}: {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  error?: string;
}) => {
  return (
    <div className="py-0 w-full">
      <div className="border-y px-0">
        <div className="border-x-0">
          <div
            className={cn("text-sm px-4 border-b flex items-center", className)}
          >
            <label className="px-3 py-2 block border-x">
              {label ?? "Label"}
            </label>
            {error && (
              <span className="text-rose-500 text-xs block px-4 border-r py-1">
                {error}
              </span>
            )}
          </div>
          <div className={cn("px-4", className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string()
    .min(50, "Minimum 50 character required")
    .required("Description is required"),
  organization: Yup.string().required("Organization is required"),
  mode: Yup.string().required("Mode is required"),
  category: Yup.string().required("Category is required"),
  audience: Yup.string().required("Audience is required"),
  location: Yup.string().required("Location is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  helpline: Yup.string().required("Helpline is required"),
});

const CreateEvent = () => {
  const router = useRouter();
  const { addEvent } = useEvents();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      organization: "",
      mode: "",
      category: "",
      audience: "",
      location: "",
      date: "",
      time: "00:00:00",
      helpline: "",
      createdByMe: true,
      status: "upcoming",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const newEvent: eventsDataType = {
          _id: Date.now(),
          interested_people: 0,
          status: "upcoming",
          date: values.date,
          time: values.time,
          description: values.description,
          title: values.title,
          location: values.location,
          group: {
            audience: values.audience,
            category: values.category as "conference" | "workshop" | "meetup",
            helpline: values.helpline,
            mode: values.mode,
            organization: values.organization,
          },
          createdByMe: values.createdByMe,
        };

        const promise = new Promise((resolve) => setTimeout(resolve, 2000));
        toast.promise(promise, {
          loading: "Creating event...",
          success: () => {
            return `Event created successfully!`;
          },
          error: "Error",
        });
        addEvent(newEvent);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        router.push("/my-events");
      } catch (error) {
        console.error(error);
        toast.error("Event could not be created. Try again.");
      }
      setSubmitting(false);
    },
  });

  return (
    <div>
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
          <div className="py-4 border-y px-0 bg-background">
            <form onSubmit={formik.handleSubmit} className="space-y-4 py-4">
              <BaseInputBox
                label="Event Title"
                error={formik.touched.title ? formik.errors.title : ""}
              >
                <Input
                  name="title"
                  placeholder="e.g. TEDx Istanbul I Ideas worth spreading Inspiring talks"
                  className="inputBox"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </BaseInputBox>

              <BaseInputBox
                label="Event Description"
                error={
                  formik.touched.description ? formik.errors.description : ""
                }
              >
                <Textarea
                  name="description"
                  placeholder="TEDx Istanbul I Ideas worth spreading Inspiring talks..."
                  className="inputBox"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </BaseInputBox>

              <div className="flex items-center">
                <BaseInputBox
                  className="pr-2"
                  label="Organization"
                  error={
                    formik.touched.organization
                      ? formik.errors.organization
                      : ""
                  }
                >
                  <Input
                    name="organization"
                    placeholder="e.g. Belman Ford"
                    className="inputBox"
                    value={formik.values.organization}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </BaseInputBox>

                <BaseInputBox
                  className="pl-2"
                  label="Mode"
                  error={formik.touched.mode ? formik.errors.mode : ""}
                >
                  <SelectInp
                    name="mode"
                    placeholder="Select mode"
                    options={modeOptions}
                    value={formik.values.mode}
                    onChange={(val: string) =>
                      formik.setFieldValue("mode", val)
                    }
                  />
                </BaseInputBox>
              </div>

              <div className="flex items-center">
                <BaseInputBox
                  className="pr-2"
                  label="Category"
                  error={formik.touched.category ? formik.errors.category : ""}
                >
                  <SelectInp
                    name="category"
                    placeholder="Select category"
                    options={categoryOptions}
                    value={formik.values.category}
                    onChange={(val: string) =>
                      formik.setFieldValue("category", val)
                    }
                  />
                </BaseInputBox>

                <BaseInputBox
                  className="pl-2"
                  label="Audience"
                  error={formik.touched.audience ? formik.errors.audience : ""}
                >
                  <SelectInp
                    name="audience"
                    placeholder="Select audience"
                    options={audienceOptions}
                    value={formik.values.audience}
                    onChange={(val: string) =>
                      formik.setFieldValue("audience", val)
                    }
                  />
                </BaseInputBox>
              </div>

              <div className="flex items-center">
                <BaseInputBox
                  className="pr-2"
                  label="Location"
                  error={formik.touched.location ? formik.errors.location : ""}
                >
                  <Input
                    name="location"
                    placeholder="e.g. Shoinik Club, Banani"
                    className="inputBox"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </BaseInputBox>

                <BaseInputBox
                  className="pl-2"
                  label="Date"
                  error={formik.touched.date ? formik.errors.date : ""}
                >
                  <DatePicker
                    name="date"
                    value={
                      formik.values.date
                        ? new Date(formik.values.date)
                        : undefined
                    }
                    onChange={(d) =>
                      formik.setFieldValue(
                        "date",
                        d?.toISOString().split("T")[0]
                      )
                    }
                  />
                </BaseInputBox>
              </div>

              <div className="flex items-center">
                <BaseInputBox
                  className="pr-2"
                  label="Time"
                  error={formik.touched.time ? formik.errors.time : ""}
                >
                  <Input
                    type="time"
                    name="time"
                    step="1"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none inputBox"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </BaseInputBox>

                <BaseInputBox
                  className="pl-2"
                  label="Helpline"
                  error={formik.touched.helpline ? formik.errors.helpline : ""}
                >
                  <Input
                    name="helpline"
                    placeholder="e.g. +880 18799866202"
                    className="inputBox"
                    value={formik.values.helpline}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </BaseInputBox>
              </div>

              <div className="mt-4 border-y px-4">
                <div className="border-x flex justify-end items-center">
                  <Button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="border-border rounded-none"
                  >
                    Create event
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Section>
      </Section>
    </div>
  );
};

export default CreateEvent;
