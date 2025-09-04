import EventDetails from "@/components/pages/EventDetails/EventDetails";
import config from "@/config";
import { eventsDataType } from "@/types/dataTypes";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  const event: eventsDataType = await fetch(
    `${config.BASE}/api/events/${id}`
  ).then((res) => res.json());

  return {
    title: event.title || "Event Details",
  };
}

const page = ({ params }: PageProps) => {
  return <EventDetails eventId={params.id} />;
};

export default page;
