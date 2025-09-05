import { EventsContextType } from "@/types/dataTypes";
import { createContext } from "react";

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

export const ModalContext = createContext<undefined>(undefined);
