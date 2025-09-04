import BackButton from "@/components/common/BackButton";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import config from "@/config";
import { audienceOptions } from "@/const/static";
import { eventsDataType } from "@/types/dataTypes";
import {
  BookmarkIcon,
  CalendarIcon,
  CheckBadgeIcon,
  FireIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const EventDetails = async ({ eventId }: { eventId?: string }) => {
  const res = await fetch(`${config.BASE}/api/events/${eventId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const event: eventsDataType = await res.json();

  return (
    <>
      <SectionGap />
      <Section className="p-0">
        <div className="">
          <BackButton className="py-2 text-sm cursor-pointer flex items-center gap-2 px-4 border-r w-fit" />
          <div className="border-y flex gap-4">
            <div className="bg-border/30 py-4 w-1/3 shrink-0 min-h-[400px] flex flex-col gap-4 items-center justify-center border-r">
              <div className="px-4 w-full grow">
                <div className="w-full h-full rounded-xl overflow-hidden border bg-background">
                  <Image
                    src={"/assets/details.jpg"}
                    width={1000}
                    height={1000}
                    alt="hero-image"
                    priority
                    className="h-full rounded-xl object-cover object-center"
                  />
                </div>
              </div>
              <div className="w-full h-auto border-y">
                <div className="px-4 h-full">
                  <div className="border-x h-full">
                    {Object.entries(event.group).map(([key, val], index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b last:border-b-0"
                        >
                          <div className="text-neutral-400 flex items-center gap-2 border-r px-4 py-2 w-1/2 shrink-0">
                            <FireIcon className="size-5 shrink-0" />
                            <span className="text-sm capitalize">{key}</span>
                          </div>
                          <span className="text-sm text-neutral-300 px-4 py-2 text-end capitalize">
                            {key === "audience"
                              ? audienceOptions.find(
                                  (item) => item.value === val
                                )?.label
                              : val}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l py-4 grow">
              <div className="border-y">
                <div className="px-4 border-b flex justify-between items-stretch gap-4">
                  <h1 className="px-4 border-l flex items-center text-neutral-200">
                    {event.title}
                  </h1>
                  <div className="flex shrink-0">
                    <button className="p-4 border-l text-sm bg-border/30 flex gap-2">
                      <CheckBadgeIcon className="size-5" />
                      Join event
                    </button>
                    <button className="p-4 border-x flex gap-2 text-sm bg-border/30">
                      <BookmarkIcon className="size-5" />
                      Save event
                    </button>
                  </div>
                </div>

                <div className="border-b flex justify-between items-stretch px-4 mt-4 border-t">
                  <div className=" flex items-center gap-2 px-4 border-l py-2">
                    <CalendarIcon className="size-5" />
                    <span className="text-sm">
                      {event.date} - {event.time}
                    </span>
                  </div>

                  <button className="px-4 border-x text-xs inline-flex items-center gap-2 text-neutral-400">
                    <Image
                      src="/assets/icons/google-calendar.png"
                      alt="google-calendar"
                      width={20}
                      height={20}
                    />
                    Add to calendar
                  </button>
                </div>

                <div className="mt-4 border-y py-4 bg-border/30 px-4 flex items-center">
                  <div className="border bg-background w-2/3 text-neutral-400">
                    <span className="px-4 py-4 border-b w-full inline-flex gap-2 items-center">
                      <MapPinIcon className="size-5" />
                      {event.location}
                    </span>
                    <p className="text-sm px-4 py-2 w-2/3">
                      Please bring the invitation card which you will get after
                      registration.
                    </p>

                    <button className="px-4 py-2 w-full text-start text-sm border-t flex gap-2">
                      <PaperAirplaneIcon className="size-5" />
                      Get direction
                    </button>
                  </div>
                  <div className="w-1/3 relative">
                    <iframe
                      src="https://www.google.com/maps/embed"
                      className="w-full h-full opacity-30 hover:opacity-80 transition-all duration-300"
                      allowFullScreen={false}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-4 border-y flex px-4 justify-between items-stretch">
                  <span className="px-4 py-2 border-l text-sm inline-flex items-center text-neutral-400">
                    {event.interested_people} peopre are going
                  </span>
                  <div className="border-x flex divide-x">
                    {[...Array(10)].map((_, index) => (
                      <div key={index} className="p-2 ">
                        <Avatar className="rounded-none">
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                      </div>
                    ))}
                    <span className="py-2 px-3 bg-border text-sm inline-flex items-center">
                      82+
                    </span>
                  </div>
                </div>

                <div className="mt-4 border-y">
                  <div className="px-4">
                    <p className="p-4 border-x px-4 text-neutral-400">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-y px-4">
                  <div className="px-4 border-x flex justify-center gap-4">
                    <Button
                      variant="outline"
                      className="px-4 py-2 border-y-0 rounded-none border-x"
                    >
                      <FireIcon className="size-5" />
                      Follow Organization
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 py-2 border-y-0 rounded-none border-x"
                    >
                      <ShareIcon className="size-5" />
                      Share event
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default EventDetails;
