import { audienceOptions } from "@/const/static";

export type AboutFeaturesType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}[];

export type SocialLinksType = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}[];

export type SelectOptionsType = {
  label: string;
  value: string;
}[];

type AudienceType = (typeof audienceOptions)[number]["value"];

export type eventsDataType = {
  _id: number | undefined;
  title: string;
  description: string;
  group: {
    organization: string;
    mode: string;
    category: "conference" | "workshop" | "meetup";
    audience: AudienceType;
    helpline: string;
  };
  location: string;
  date: string;
  time: string;
  status: "ongoing" | "upcoming" | "completed";
  interested_people: number;
  createdByMe?: boolean;
};

export type EventsContextType = {
  events: eventsDataType[];
  addEvent: (event: Omit<eventsDataType, "_id">) => void;
  setEvents: React.Dispatch<React.SetStateAction<eventsDataType[]>>;
  deleteEvent: (_id: number) => void;
  editEvent: (
    _id: number,
    updatedData: Partial<Omit<eventsDataType, "_id">>
  ) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
