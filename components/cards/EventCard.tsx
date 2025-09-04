import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowUpRightIcon,
  BookmarkIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "border-x bg-background first:border-l-0 last:border-r-0",
        className
      )}
    >
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
            src={"/assets/card.jpg"}
            width={1080}
            height={340}
            alt="hero-image"
            className="h-32 w-full object-cover object-center "
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
      <div className="px-4 border-b text-sm text-neutral-400 flex justify-between items-center">
        <span className="pl-4 border-l py-2">Interested People</span>
        <span className="px-4 border-x py-2 bg-white/10">42</span>
      </div>
      <div className="flex items-center justify-between text-sm bg-border/30">
        <Button variant="link">
          Book now
          <BookmarkIcon className="size-4" />
        </Button>
        <Link href={"/events/1"}>
          <Button variant="link" className="">
            View details
            <ArrowUpRightIcon className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
