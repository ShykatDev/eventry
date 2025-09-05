"use client";
import SearchModal from "@/components/common/Search";
import SectionGap from "@/components/common/SectionGap";
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
      <div className="mt-[52px]">
        <SectionGap />
        {children}
      </div>
      <Footer />
      <SearchModal />
      <Toaster richColors />
    </EventsProvider>
  );
}
