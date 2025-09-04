import { eventsDataType } from "@/types/dataTypes";
import React, { createContext } from "react";

type EventsContextType = {
  events: eventsDataType[];
  addEvent: (event: Omit<eventsDataType, "_id">) => void;
  setEvents: React.Dispatch<React.SetStateAction<eventsDataType[]>>;
  deleteEvent: (_id: number) => void;
  editEvent: (
    _id: number,
    updatedData: Partial<Omit<eventsDataType, "_id">>
  ) => void;
};

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);
