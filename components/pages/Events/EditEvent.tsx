"use client";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";

import { validationSchema } from "@/const/schema";
import { useEvents } from "@/hooks/useEvents";
import { eventsDataType } from "@/types/dataTypes";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Form from "./Form";

const EditEvent = ({ id }: { id: string }) => {
  const router = useRouter();
  const { events, editEvent } = useEvents();

  const event: eventsDataType | undefined = events.find(
    (item) => String(item._id) === id
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: event?.title || "",
      description: event?.description || "",
      organization: event?.group.organization || "",
      mode: event?.group.mode || "",
      category: event?.group.category || "",
      audience: event?.group.audience || "",
      location: event?.location || "",
      date: event?.date || "",
      time: event?.time || "00:00:00",
      helpline: event?.group.helpline || "",
      createdByMe: event?.createdByMe ?? true,
      status: event?.status || "upcoming",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const newEvent: eventsDataType = {
          _id: event?._id,
          interested_people: event?.interested_people ?? 0,
          status: values.status,
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
          loading: "Saving event...",
          success: () => "Event updated successfully!",
          error: "Error",
        });

        if (event?._id) editEvent(event._id, newEvent);
        await promise;

        router.push("/my-events");
      } catch (error) {
        console.error(error);
        toast.error("Event could not be saved. Try again.");
      }
      setSubmitting(false);
    },
  });

  return (
    <div>
      <SectionGap />
      <Section className="py-0">
        <div className="border-x text-center">
          <h1 className="py-2 text-xl border-b text-foreground/80">
            Edit Your Event
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
            <Form formik={formik} />
          </div>
        </Section>
      </Section>
    </div>
  );
};

export default EditEvent;
