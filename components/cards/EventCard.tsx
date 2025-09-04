import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEvents } from "@/hooks/useEvents";
import { cn } from "@/lib/utils";
import { eventsDataType } from "@/types/dataTypes";
import {
  ArrowUpRightIcon,
  BookmarkIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const EventCard = ({
  className,
  event,
}: {
  className?: string;
  event: eventsDataType;
}) => {
  const [alert, setAlert] = useState(false);
  const { deleteEvent } = useEvents();
  return (
    <div
      className={cn(
        "h-full border-x bg-background first:border-l-0 last:border-r-0",
        className
      )}
    >
      <div>
        <div className="border-b flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 justify-between">
            <div className="text-xs p-1 bg-foreground text-background font-medium px-2 capitalize rounded-none h-full">
              {event.group.category}
            </div>
            {event?.createdByMe && (
              <div className="size-2 rounded-full bg-lime-500"></div>
            )}
          </div>

          {event?.createdByMe && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-2 border-l py-1">
                  <EllipsisVerticalIcon className="size-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit">
                <DropdownMenuLabel className="text-xs font-normal">
                  Action
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-xs">Edit</DropdownMenuItem>
                {/* <DropdownMenuItem onClick={() => deleteEvent(event._id)}>
                  Delete
                </DropdownMenuItem> */}
                <Dialog>
                  <DialogTrigger className="w-full hover:bg-border rounded py-1 text-start">
                    <span className="text-xs px-2">Delete</span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button size="sm" variant="outline">
                          Cancel
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button
                          size="sm"
                          type="submit"
                          variant="destructive"
                          onClick={() => {
                            deleteEvent(event._id);
                            toast.success("Event deleted successfully!");
                          }}
                        >
                          Delete
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <div>
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

          <div className="py-4">
            <div className="border-y px-4">
              <h4 className="border-x px-4">{event.title}</h4>
            </div>
            <div className="px-4 border-b">
              <p className="px-4 border-x text-sm text-neutral-400 line-clamp-3">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 border-y text-sm text-neutral-400 flex justify-between items-center">
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
    </div>
  );
};

export default EventCard;
