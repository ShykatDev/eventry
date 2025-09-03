import EventCard from "@/components/cards/EventCard";
import Banner from "@/components/common/Banner";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Events = () => {
  return (
    <>
      <SectionGap />
      <Section className="p-0">
        <div>
          <Banner />
          <div className=" border-t divide-y">
            <h1 className="text-2xl py-2 px-4 text-center border-x border-b-0 w-fit mx-auto">
              Events
            </h1>
            <p className="text-sm text-neutral-400 px-4 py-2 text-center border-t">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              consectetur eos quia voluptatum recusandae nisi labore inventore
              corrupti nesciunt nostrum?
            </p>
          </div>
        </div>
        <div></div>
      </Section>
      <SectionGap />
      <Section className="p-0">
        <div className="flex justify-between items-center px-4">
          <div className="border-x pl-4 flex items-center space-x-4 text-sm">
            <span className="py-4 pr-4 border-r">Filter by category</span>
            <button className="p-4 cursor-pointer bg-border/30 border-l border-r">
              Conference
            </button>
            <button className="p-4 cursor-pointer bg-border/30 border-l border-r">
              Workshop
            </button>
            <button className="p-4 cursor-pointer bg-border/30 border-l">
              Meetup
            </button>
          </div>
          <div className="w-1/3 flex items-center bg-border/30 border-x border-border/50 focus-within:border-border transition duration-300 px-4 py-2">
            <Input
              placeholder="Search events..."
              className="border-0 !bg-transparent focus-visible:ring-0 px-0"
            />
            <MagnifyingGlassIcon className="size-4" />
          </div>
        </div>

        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t px-2 gap-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-y px-4 -mx-2 last:border-r">
              <div className="border-x px-0">
                <EventCard className="p-0 border-y-0 bg-border/30" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Events;
