import { audienceOptions, categoryOptions } from "@/const/static";

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

type CategoryType = (typeof categoryOptions)[number]["value"];
type AudienceType = (typeof audienceOptions)[number]["value"];

export type eventsDataType = {
  _id: number;
  title: string;
  description: string;
  group: {
    organization: string;
    mode: string;
    category: CategoryType;
    audience: AudienceType;
    helpline: number;
  };
  location: string;
  date: string;
  time: string;
  status: "ongoing" | "upcoming" | "completed";
  interested_people: number;
};
