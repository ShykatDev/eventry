import EventCard from "@/components/cards/EventCard";
import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ServerStackIcon } from "@heroicons/react/24/outline";

const UpcomingEvents = () => {
  return (
    <Section className="p-0">
      <span className="block text-xl p-4">Upcoming Events</span>

      <div className="grid grid-cols-4 gap-4 border-y bg-border/30">
        {[...Array(4)].map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>

      <div className="flex justify-center py-8">
        <Button variant="outline" className="">
          <ServerStackIcon className="size-5" />
          View all events
        </Button>
      </div>
    </Section>
  );
};

export default UpcomingEvents;
