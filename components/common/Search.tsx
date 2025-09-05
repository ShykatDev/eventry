"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEvents } from "@/hooks/useEvents";
import { eventsDataType } from "@/types/dataTypes";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Section from "./Section";

const SearchModal = () => {
  const [searchText, setSearchText] = useState("");
  const [searchEvents, setSearchEvents] = useState<eventsDataType[]>([]);
  const { events, isOpen, setIsOpen } = useEvents();

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!searchText) {
      setSearchEvents([]);
      return;
    }
    const filtered = events.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchEvents(filtered);
  }, [searchText, events]);

  const handleClose = () => {
    setIsOpen(false);
    setSearchText("");
    setSearchEvents([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg w-full p-0" showCloseButton={false}>
        <Section className="w-full p-0">
          <div className="py-4">
            <div className="border-y px-4 flex justify-between items-stretch">
              <div className="px-4 py-2 border-x">
                <DialogHeader>
                  <DialogTitle className="text-sm">Search Events</DialogTitle>
                </DialogHeader>
              </div>
              <button
                className="px-2 border-x py-2 bg-border/30 hover:bg-border/80"
                onClick={handleClose}
              >
                <XMarkIcon className="size-4" />
              </button>
            </div>
          </div>

          <div className="mb-4">
            <div className="border-y px-4">
              <div className="border-x">
                <Input
                  placeholder="e.g. Tech Innovators Summit 2025"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="rounded-none"
                  autoFocus
                />
              </div>
            </div>
          </div>

          {/* Display search results */}
          <div className="max-h-64 overflow-y-auto">
            {searchEvents.length > 0 ? (
              searchEvents.map((event) => (
                <Link
                  href={`/events/${event._id}`}
                  onClick={handleClose}
                  key={event._id}
                  className="mb-4"
                >
                  <div className="border-y px-4">
                    <div className="border-x">
                      <div className="px-4 py-2 cursor-pointer hover:bg-border/30 rounded text-xs flex items-center justify-between">
                        {event.title}
                        <SquareArrowOutUpRightIcon className="size-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : searchText ? (
              <p className="text-sm text-gray-500 pb-4 px-4">No events found</p>
            ) : null}
          </div>
        </Section>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
