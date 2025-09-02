import { Button } from "@/components/ui/button";
import {
  ArrowUpRightIcon,
  BookmarkIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const EventCard = () => {
  return (
    <div className="border-x bg-background first:border-l-0 last:border-r-0">
      <div className="border-b flex px-4 items-center justify-between">
        <span className="rounded-sm text-sm">Category</span>
        <span className="text-sm text-neutral-400 w-1/2 py-2 space-x-2 h-full text-end border-l">
          <CalendarIcon className="size-4 inline-block -mt-0.5" />
          <span>25 Sept, 2025</span>
        </span>
      </div>
      <div className="border-b">
        <div className=" border-b bg-border/30">
          <Image
            src={"/assets/event-header.jpg"}
            width={1080}
            height={340}
            alt="hero-image"
            className="h-24 w-full object-cover object-center "
          />
        </div>
        <div className="p-4">
          <h4>{`Event Title - An Exciting Event That You Shouldn't Miss!`}</h4>
          <span className="text-sm text-neutral-400 mt-2 block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium rem veniam corporis corrupti culpa a, ex atque
            perspiciatis saepe error nostrum, dolore, ad assumenda illum.
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm bg-border/30">
        <Button variant="link">
          Book now
          <BookmarkIcon className="size-4" />
        </Button>
        <Button variant="link" className="">
          View details
          <ArrowUpRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
