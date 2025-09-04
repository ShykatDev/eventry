import { EventsContext } from "@/context";
import { useLocalEvents } from "@/hooks/useLocalEvents";
import { eventsDataType } from "@/types/dataTypes";
import { ReactNode } from "react";

export const EventsProvider = ({
  children,
  initialEvents,
}: {
  children: ReactNode;
  initialEvents: eventsDataType[];
}) => {
  const { events, addEvent, setEvents, deleteEvent, editEvent } =
    useLocalEvents(initialEvents);

  return (
    <EventsContext.Provider
      value={{ events, addEvent, setEvents, deleteEvent, editEvent }}
    >
      {children}
    </EventsContext.Provider>
  );
};
