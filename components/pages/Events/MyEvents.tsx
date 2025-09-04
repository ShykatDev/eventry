"use client";

import EventCard from "@/components/cards/EventCard";
import { useEvents } from "@/hooks/useEvents";
import { NoSymbolIcon } from "@heroicons/react/24/outline";

const MyEvents = () => {
  const { events } = useEvents();
  const myEvents = events.filter((item) => item?.createdByMe);

  return (
    <>
      {myEvents.length === 0 ? (
        <div className="w-full flex items-center justify-center">
          <p className="p-4 text-center text-neutral-400 text-sm flex items-center justify-center gap-2 border-x w-fit">
            <NoSymbolIcon className="size-5 text-amber-200" />{" "}
            <span>No events found for your filters.</span>
          </p>
        </div>
      ) : (
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t px-2 gap-y-4 items-stretch">
          {myEvents.map((event, index) => (
            <div key={index} className="border-y px-4 -mx-2 last:border-r">
              <div className="border-x px-0 h-full">
                <EventCard
                  event={event}
                  className="p-0 border-y-0 bg-border/30 flex flex-col justify-between"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyEvents;
