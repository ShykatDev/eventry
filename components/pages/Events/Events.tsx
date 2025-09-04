import Banner from "@/components/common/Banner";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import EventsFilter from "@/components/pages/Events/EventsFilter";

export default async function EventsPage() {
  return (
    <>
      <Section className="py-0">
        <div className="border-x text-center">
          <h1 className="py-2 text-xl border-b text-neutral-200">
            Discover Upcoming Events
          </h1>
          <span className="p-4 border-x text-sm block max-w-3xl mx-auto text-neutral-400">
            Explore conferences, workshops, and meetups happening near you. Stay
            updated, connect with communities, and never miss an opportunity to
            learn and network.
          </span>
        </div>
      </Section>
      <SectionGap />
      <Section className="p-0">
        <Banner />
      </Section>
      <SectionGap />
      <Section className="p-0">
        <EventsFilter />
      </Section>
    </>
  );
}
