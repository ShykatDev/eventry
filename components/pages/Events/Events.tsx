import Banner from "@/components/common/Banner";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import EventsFilter from "@/components/pages/Events/EventsFilter";
import config from "@/config";
import { eventsDataType } from "@/types/dataTypes";

type Props = {
  searchParams?: { title?: string; category?: string };
};

export default async function EventsPage({ searchParams }: Props) {
  // Build query parameters for API fetch
  const params = new URLSearchParams();
  if (searchParams?.title) params.append("title", searchParams.title);
  if (searchParams?.category) params.append("category", searchParams.category);

  const res = await fetch(`${config.BASE}/api/events?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch events");

  const events: eventsDataType[] = await res.json();

  return (
    <>
      <SectionGap />
      <Section className="p-0">
        <Banner />
      </Section>
      <SectionGap />
      <Section className="p-0">
        <EventsFilter events={events} currentFilters={searchParams} />
      </Section>
    </>
  );
}
