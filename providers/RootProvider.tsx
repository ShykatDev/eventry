"use client";
import SearchModal from "@/components/common/Search";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Toaster } from "@/components/ui/sonner";
import { eventsData } from "@/const/events";
import { EventsProvider } from "./EventProvider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EventsProvider initialEvents={eventsData}>
      <Header />
      <div className="mt-10 sm:mt-[52px]">{children}</div>
      <Footer />
      <SearchModal />
      <Toaster richColors />
    </EventsProvider>
  );
}
