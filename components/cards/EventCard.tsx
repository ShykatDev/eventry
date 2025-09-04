import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { eventsDataType } from "@/types/dataTypes";
import {
  ArrowUpRightIcon,
  BookmarkIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

const EventCard = ({
  className,
  event,
}: {
  className?: string;
  event: eventsDataType;
}) => {
  return (
    <div
      className={cn(
        "border-x bg-background first:border-l-0 last:border-r-0",
        className
      )}
    >
      <div className="border-b flex px-4 items-center justify-between">
        <Badge className="rounded-sm text-xs capitalize">
          {event.group.category}
        </Badge>
        <span className="text-sm text-neutral-400 w-1/2 py-2 space-x-2 h-full text-end border-l">
          <CalendarIcon className="size-4 inline-block -mt-0.5" />
          <span>{event.date}</span>
        </span>
      </div>
      <div className="border-b">
        <div className=" border-b bg-border/30">
          <Image
            src={"/assets/card.jpg"}
            width={1080}
            height={340}
            alt="hero-image"
            priority
            className="h-32 w-full object-cover object-center "
          />
        </div>
        <div className="p-4">
          <h4>{event.title}</h4>
          <span className="text-sm text-neutral-400 mt-2 block">
            {event.description}
          </span>
        </div>
      </div>
      <div className="px-4 border-b text-sm text-neutral-400 flex justify-between items-center">
        <span className="pl-4 border-l py-2">Interested People</span>
        <span className="px-4 border-x py-2 bg-white/10">
          {event.interested_people}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm bg-border/30">
        <Button variant="link">
          Book now
          <BookmarkIcon className="size-4" />
        </Button>
        <Link href={`/events/${event._id}`}>
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
