"use client";
import { eventsData } from "@/const/events";
import { EventsProvider } from "./EventProvider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <EventsProvider initialEvents={eventsData}>{children}</EventsProvider>;
}
