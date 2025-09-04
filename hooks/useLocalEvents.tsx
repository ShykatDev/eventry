import { eventsDataType } from "@/types/dataTypes";
import { useEffect, useState } from "react";

export const useLocalEvents = (initialEvents: eventsDataType[]) => {
  const [events, setEvents] = useState<eventsDataType[]>([]);

  // Load events from localStorage + initialEvents
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    const locals: eventsDataType[] = storedEvents
      ? JSON.parse(storedEvents)
      : [];

    setEvents([...initialEvents, ...locals]);
  }, [initialEvents]);

  // Function to add a new event locally
  const addEvent = (event: Omit<eventsDataType, "_id">) => {
    const newEvent = { ...event, _id: Date.now() }; // unique ID
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const updatedEvents = [...storedEvents, newEvent];

    // Save to localStorage
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    // Update state
    setEvents([...initialEvents, ...updatedEvents]);
  };

  // Delete an event by _id
  const deleteEvent = (_id: number) => {
    const storedEvents: eventsDataType[] = JSON.parse(
      localStorage.getItem("events") || "[]"
    );
    const updatedEvents = storedEvents.filter((e) => e._id !== _id);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    const newList = [...initialEvents, ...updatedEvents];

    setEvents(newList);
  };

  // Edit an existing event by _id
  const editEvent = (
    _id: number,
    updatedData: Partial<Omit<eventsDataType, "_id">>
  ) => {
    const storedEvents: eventsDataType[] = JSON.parse(
      localStorage.getItem("events") || "[]"
    );
    const updatedEvents = storedEvents.map((e) =>
      e._id === _id ? { ...e, ...updatedData } : e
    );

    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEvents([...initialEvents, ...updatedEvents]);
  };

  return { events, addEvent, setEvents, deleteEvent, editEvent };
};
