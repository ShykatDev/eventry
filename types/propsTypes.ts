export type BaseBoxLayoutProps = {
  children?: React.ReactNode;
  baseClassName?: string;
  className?: string;
  title?: string;
};

export type PageProps = {
  params: {
    id: string;
  };
};

export type EventFormValues = {
  title: string;
  description: string;
  organization: string;
  mode: string;
  category: string;
  audience: string;
  location: string;
  date: string;
  time: string;
  helpline: string;
  createdByMe: boolean;
  status: "upcoming" | "ongoing" | "completed";
};
