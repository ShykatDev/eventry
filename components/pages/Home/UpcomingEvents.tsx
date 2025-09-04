import EventCard from "@/components/cards/EventCard";
import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import config from "@/config";
import { cn } from "@/lib/utils";
import { eventsDataType } from "@/types/dataTypes";
import { ServerStackIcon } from "@heroicons/react/24/outline";

const UpcomingEvents = async () => {
  const res = await fetch(`${config.BASE}/api/events`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch events");

  const events: eventsDataType[] = await res.json();

  const upcomingEvent = events.filter((item) => item.status === "upcoming");

  return (
    <>
      {upcomingEvent.length === 0 ? null : (
        <Section className="p-0">
          <span className="block text-xl p-4">Upcoming Events</span>

          <div className="grid grid-cols-4 gap-4 border-y bg-border/30">
            {upcomingEvent.map((event, index) => (
              <EventCard
                event={event}
                key={index}
                className={cn(index < 4 && "last:border-r")}
              />
            ))}
          </div>

          <div className="flex justify-center py-8">
            <Button variant="outline" className="">
              <ServerStackIcon className="size-5" />
              View all events
            </Button>
          </div>
        </Section>
      )}
    </>
  );
};

export default UpcomingEvents;
