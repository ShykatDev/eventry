import { EventsContext } from "@/context";
import { useLocalEvents } from "@/hooks/useLocalEvents";
import { useSearchModal } from "@/hooks/useSearchModal";
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

  const { isOpen, setIsOpen } = useSearchModal();

  return (
    <EventsContext.Provider
      value={{
        events,
        addEvent,
        setEvents,
        deleteEvent,
        editEvent,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
