"use client";
import BackButton from "@/components/common/BackButton";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { audienceOptions } from "@/const/static";
import { useEvents } from "@/hooks/useEvents";
import { cn } from "@/lib/utils";
import {
  BookmarkIcon,
  CalendarIcon,
  CheckBadgeIcon,
  FireIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { CircleDotDashed } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const EventDetails = ({ eventId }: { eventId?: string }) => {
  const [isJoined, setIsJoined] = useState(false);
  const { events, editEvent } = useEvents();
  const event = events.find((item) => String(item._id) === eventId);

  const checkJoined = () => {
    if (!event?._id) return false;
    const joined: number[] = JSON.parse(localStorage.getItem("joined") || "[]");
    return joined.includes(event._id);
  };

  useEffect(() => {
    setIsJoined(checkJoined());

    const handleStorageChange = () => setIsJoined(checkJoined());
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [event?._id]);

  const handleJoin = () => {
    if (!event?._id) return;

    const joined: number[] = JSON.parse(localStorage.getItem("joined") || "[]");
    if (!joined.includes(event._id)) {
      joined.push(event._id);
      localStorage.setItem("joined", JSON.stringify(joined));
      setIsJoined(true);

      editEvent(event._id, {
        interested_people: event.interested_people + 1,
      });
    }
  };

  if (!event) return <Section>loading...</Section>;
  return (
    <>
      <SectionGap />
      <Section className="p-0">
        <div className="">
          <BackButton className="py-2 text-sm cursor-pointer flex items-center gap-2 px-4 border-r w-fit" />
          <div className="border-y flex flex-col md:flex-row gap-4">
            <div className="bg-border/30 py-4 md:w-1/3 shrink-0 min-h-[400px] flex flex-col gap-4 items-center justify-center border-r">
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
                    <div className="flex items-center justify-between border-b last:border-b-0 bg-accent">
                      <div className="text-neutral-400 flex items-center gap-2 border-r px-2 sm:px-4 py-2 w-1/2 shrink-0">
                        <CircleDotDashed className="size-5 shrink-0 animate-spin" />
                        <span className="text-sm text-foreground/80 capitalize">
                          Status
                        </span>
                      </div>
                      <span className="text-sm text-foreground/80 px-2 sm:px-4 py-2 text-end capitalize">
                        {event.status}
                      </span>
                    </div>
                    {Object.entries(event.group).map(([key, val], index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-stretch justify-between border-b last:border-b-0"
                        >
                          <div className="text-neutral-400 flex items-center gap-2 border-r px-2 sm:px-4 py-2 w-1/2 shrink-0">
                            <FireIcon className="size-5 shrink-0" />
                            <span className="text-sm capitalize text-neutral-400">
                              {key}
                            </span>
                          </div>
                          <span className="text-sm text-neutral-400 px-2 sm:px-4 py-2 text-end capitalize">
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
                <div className="px-4 border-b flex flex-col-reverse md:flex-row justify-between items-stretch gap-4">
                  <h1 className="px-4 border-l flex items-center text-foreground/80 font-medium text-xl border-t border-r md:border-t-0 md:border-r-0">
                    {event.title}
                  </h1>
                  <div className="flex shrink-0 border-b md:border-b-0">
                    <button
                      onClick={handleJoin}
                      disabled={isJoined}
                      className={cn(
                        "p-4 w-1/2 sm:w-fit border-l text-sm bg-foreground text-background flex gap-2 justify-center disabled:opacity-65",
                        isJoined && "bg-amber-200"
                      )}
                    >
                      <CheckBadgeIcon className="size-5" />
                      {isJoined ? "Joined" : "Join event"}
                    </button>
                    <button className="w-1/2 sm:w-fit p-4 border-x flex gap-2 text-sm bg-border/30 justify-center">
                      <BookmarkIcon className="size-5" />
                      Save event
                    </button>
                  </div>
                </div>

                <div className="border-b flex justify-between items-stretch px-4 mt-4 border-t ">
                  <div className=" flex items-center gap-2 px-4 border-l py-2">
                    <CalendarIcon className="size-5 shrink-0" />
                    <span className="text-sm">
                      {event.date} - {event.time}
                    </span>
                  </div>

                  <button
                    disabled
                    className="px-4 border-x text-xs inline-flex items-center gap-2 text-neutral-400 disabled:opacity-50 cursor-not-allowed"
                  >
                    <Image
                      src="/assets/icons/google-calendar.png"
                      alt="google-calendar"
                      width={20}
                      height={20}
                    />
                    Add to calendar
                  </button>
                </div>

                <div className="mt-4 border-y py-4 bg-border/30 px-4 flex flex-col md:flex-row items-center">
                  <div className="border bg-background md:w-2/3 text-neutral-400">
                    <span className="px-4 py-4 border-b w-full inline-flex gap-2 items-center">
                      <MapPinIcon className="size-5 shrink-0" />
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
                  <div className="md:w-1/3 relative hidden md:block">
                    <iframe
                      src="https://www.google.com/maps/embed"
                      className="w-full h-full opacity-30 transition-all duration-300"
                      allowFullScreen={false}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-4 border-y flex px-4 justify-between items-stretch">
                  <span className="px-4 py-2 border-l text-sm inline-flex items-center text-neutral-400">
                    {event.interested_people} peopre are going
                  </span>
                  <div className="border-x flex flex-wrap divide-x">
                    {[
                      ...Array(
                        event.interested_people < 10
                          ? event.interested_people
                          : 10
                      ),
                    ].map((_, index) => (
                      <div key={index} className="p-2 border-b md:border-b-0">
                        <Avatar className="rounded-none">
                          <AvatarImage src="https://github.com/shadcn.png" />
                        </Avatar>
                      </div>
                    ))}
                    {event.interested_people > 10 && (
                      <span className="py-2 px-3 bg-border text-sm inline-flex items-center">
                        {event.interested_people - 10}+
                      </span>
                    )}
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
      <Section className="p-0">
        <div className=" py-4">
          <div className="px-4 border-y">
            <div className="p-4 border-x space-y-4">
              <div className="">
                <p className="text-foreground/80 font-medium">
                  Important information from us
                </p>
              </div>
              <span className="block text-neutral-400 text-sm sm:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus iure, saepe expedita labore molestiae autem officiis
                excepturi ratione quod voluptatem voluptatibus ipsum voluptate!
                Velit, veniam! Suscipit ipsam iure, harum accusantium dicta
                nihil eligendi sit nisi unde iste, deleniti quos perspiciatis
                aperiam, neque debitis adipisci ducimus possimus molestiae
                expedita aut aliquid quaerat nam ex doloremque? Exercitationem
                soluta veritatis laudantium commodi temporibus harum culpa
                expedita qui consectetur, voluptatibus possimus pariatur ratione
                similique sunt. Quaerat consequuntur atque totam laudantium, in
                nemo itaque rerum mollitia doloremque rem hic, maxime incidunt.
                Vero aperiam aliquid fuga ipsum hic beatae, delectus sequi nemo
                placeat voluptatum ratione libero.
              </span>

              <span className="block text-neutral-400 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                placeat dolorum quas architecto voluptas eaque dignissimos
                quisquam, illo nesciunt nemo veniam quos totam hic quasi fugiat
                voluptate impedit? Voluptatum placeat, distinctio obcaecati iure
                error rem ex quod aspernatur cumque similique consectetur non
                esse iusto, molestiae et dolores fuga. Ratione, iure aut eveniet
                sunt quaerat totam praesentium quasi reiciendis eaque cumque
                inventore omnis laudantium placeat tempora culpa dolore officia
                distinctio autem magni dignissimos. Fugit incidunt expedita
                dignissimos qui hic eligendi consequuntur rerum quam. Doloremque
                eos veniam temporibus velit minima deleniti commodi ratione
                tenetur praesentium ducimus obcaecati porro quaerat laudantium
                rem placeat, nihil quas esse? Fugiat laudantium veritatis ipsum
                reprehenderit consectetur facilis quidem repudiandae obcaecati,
                earum nulla? Alias consectetur quis maxime amet! Cum odit atque
                totam aperiam incidunt, consequuntur repellendus et ipsa,
                provident sapiente voluptatum quisquam molestias quam aliquid
                dicta expedita? Necessitatibus sint omnis, esse officia velit
                quos quae porro mollitia dignissimos atque quas voluptatibus
                obcaecati nesciunt neque praesentium autem ullam reiciendis,
                explicabo in asperiores distinctio. Quos doloribus harum rem
                illo alias quae sapiente, a tempore natus eveniet distinctio
                eos, magnam eaque rerum inventore quam delectus aperiam ipsum?
                Iste possimus assumenda molestiae minima repudiandae quos.
                Consectetur temporibus neque esse quas nesciunt enim.
              </span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default EventDetails;
