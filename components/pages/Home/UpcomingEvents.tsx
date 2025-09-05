"use client";
import EventCard from "@/components/cards/EventCard";
import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { useEvents } from "@/hooks/useEvents";
import { cn } from "@/lib/utils";
import { ServerStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const UpcomingEvents = () => {
  const { events } = useEvents();

  const upcomingEvent = events
    .filter((item) => item.status === "upcoming")
    .slice(0, 4);

  console.log(events);

  return (
    <>
      {upcomingEvent.length === 0 ? null : (
        <Section className="p-0">
          <span className="block text-xl p-4">Upcoming Events</span>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 border-y bg-border/30">
            {upcomingEvent.map((event, index) => (
              <EventCard
                event={event}
                key={index}
                className={cn(index < 3 && "last:border-r")}
              />
            ))}
          </div>

          <div className="flex justify-center py-4 sm:py-8">
            <Link href="/events">
              <Button variant="outline" className="">
                <ServerStackIcon className="size-5" />
                View all events
              </Button>
            </Link>
          </div>
        </Section>
      )}
    </>
  );
};

export default UpcomingEvents;
