"use client";

import EventCard from "@/components/cards/EventCard";
import { Input } from "@/components/ui/input";
import { categoryOptions } from "@/const/static";
import { useEvents } from "@/hooks/useEvents";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon, NoSymbolIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EventsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);

  const { events: initialEvents } = useEvents();
  const [events, setEvents] = useState(initialEvents);

  const title = searchParams.get("title") || "";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    setLoading(true);

    let filteredEvents = [...initialEvents];

    if (title) {
      filteredEvents = filteredEvents.filter((e) =>
        e.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (category) {
      filteredEvents = filteredEvents.filter(
        (e) => e.group.category === category
      );
    }

    setEvents(filteredEvents);
    setLoading(false);
  }, [title, category, initialEvents]);

  const handleFilterChange = (newCategory?: string, newTitle?: string) => {
    const params = new URLSearchParams();
    if (newCategory) params.set("category", newCategory);
    if (newTitle !== undefined && newTitle !== "")
      params.set("title", newTitle);
    router.push(`/events?${params.toString()}`);
  };

  console.log(events, initialEvents);

  return (
    <>
      {/* Filters */}
      <div className="flex justify-between items-center px-4">
        <div className="border-x pl-4 flex items-center space-x-4 text-sm">
          <span className="py-4 pr-4 border-r">Filter by category</span>
          <button
            onClick={() => handleFilterChange(undefined, title)}
            className={cn(
              "p-4 cursor-pointer border-l border-r bg-border/30",
              category === "" && "bg-foreground text-background"
            )}
          >
            All
          </button>
          {categoryOptions.map((item) => (
            <button
              key={item.value}
              onClick={() => handleFilterChange(item.value, title)}
              className={cn(
                "p-4 cursor-pointer border-l border-r",
                category === item.value
                  ? "bg-foreground text-background"
                  : "bg-border/30"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="w-1/3 flex items-center bg-border/30 border-x border-border/50 focus-within:border-border transition duration-300 px-4 py-2">
          <Input
            placeholder="Search events..."
            className="border-0 !bg-transparent focus-visible:ring-0 px-0"
            defaultValue={title}
            onChange={(e) => handleFilterChange(category, e.target.value)}
          />
          <MagnifyingGlassIcon className="w-5 h-5" />
        </div>
      </div>

      {/* Event cards */}
      {loading ? (
        <p className="p-4 text-center">Loading...</p>
      ) : events.length === 0 ? (
        <div className="w-full flex items-center justify-center border-t">
          <p className="p-4 text-center text-neutral-400 text-sm flex items-center justify-center gap-2 border-x w-fit">
            <NoSymbolIcon className="size-5 text-amber-200" />{" "}
            <span>No events found for your filters.</span>
          </p>
        </div>
      ) : (
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t px-2 gap-y-4 items-stretch">
          {events.map((event, index) => (
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
}
