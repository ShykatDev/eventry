import BackButton from "@/components/common/BackButton";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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

const EventDetails = () => {
  return (
    <>
      <SectionGap />
      <Section className="p-0">
        <div className="">
          <BackButton className="py-2 text-sm cursor-pointer flex items-center gap-2 px-4 border-r w-fit" />
          <div className="border-y flex gap-4">
            <div className="bg-border/30 p-4 w-1/3 shrink-0 min-h-[400px] flex items-center justify-center border-r">
              <div className="w-full h-full rounded-2xl overflow-hidden border bg-background">
                Image of event
              </div>
            </div>
            <div className="border-l py-4 grow">
              <div className="border-y">
                <div className="px-4 border-b flex justify-between items-stretch gap-4">
                  <h1 className="px-4 border-l flex items-center text-neutral-200">
                    TEDx Istanbul I Ideas worth spreading Inspiring talks
                    spreading Inspiring talks spreading
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
                      20 September, 10.00 AM - 20 September, 8.00 PM
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
                      Sheraton Hotel & Resrurant
                    </span>
                    <p className="text-sm px-4 py-2 w-1/2">
                      Banani 11, Block F, Level 9, Dhaka 1201, Bangladesh
                    </p>

                    <button className="px-4 py-2 w-full text-start text-sm border-t flex gap-2">
                      <PaperAirplaneIcon className="size-5" />
                      Get direction
                    </button>
                  </div>
                  <div className="w-1/3 relative">
                    <div className="w-full h-full bg-black/50 absolute top-0 left-0" />
                    <iframe
                      src="https://www.google.com/maps/embed"
                      className="w-full h-full"
                      allowFullScreen={false}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-4 border-y flex px-4 justify-between items-stretch">
                  <span className="px-4 py-2 border-l text-sm inline-flex items-center text-neutral-400">
                    89 peopre are going
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

                <div className="mt-4 border-t">
                  <div className="px-4">
                    <p className="p-4 border-x px-4 text-neutral-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, ex quos aperiam sapiente incidunt atque accusamus
                      nihil ipsum inventore velit aut repellendus laudantium
                      corrupti dolorum fugit necessitatibus a quo in eius quidem
                      voluptate optio quod et aspernatur. Eius quo ratione
                      reprehenderit distinctio animi id aliquam, mollitia rem
                      quasi eum odio. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. A nam est asperiores amet nemo
                      voluptate! Repudiandae aliquid at consequatur iusto eos
                      expedita dolorum recusandae voluptate ea. Iusto sequi
                      repudiandae amet. Eos quidem quisquam veniam in ad saepe
                      nihil, fuga soluta. Voluptas ea, incidunt possimus
                      similique est ratione sed assumenda illo qui consectetur
                      laborum natus. Molestias temporibus quos velit inventore
                      facere?
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
