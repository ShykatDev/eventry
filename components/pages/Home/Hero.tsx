import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Section className="p-0">
        <div className="px-4 py-16 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-white bg-amber-200/10 border border-amber-50/10 w-fit mx-auto px-4 py-1 rounded-2xl  mb-4">
            <SparklesIcon className="size-4 text-white" />
            <span className="text-xs">
              Turning Every Occasion into a Spark of Unforgettable Memories.
            </span>
          </div>
          <h1 className="text-5xl text-amber-200 font-medium">
            <span className="underline">Eventry</span>
            <span className="ml-4 text-neutral-300">
              Where Every Event Finds Its Spark{" "}
            </span>
          </h1>
          <p className="text-neutral-400 mt-4 font-light">
            Discover, create, and celebrate unforgettable moments. Eventry
            brings your events to life, making every celebration unique and
            memorable.
          </p>

          <div className="mt-8 space-x-4">
            <Button variant="outline" className="">
              View Events
              <ArrowUpRightIcon className="size-4" />
            </Button>

            <Button>
              Get Started
              <ArrowUpRightIcon className="size-4" />
            </Button>
          </div>
        </div>

        <div className="p-4 bg-border/50">
          <Image
            src={"/assets/hero.jpg"}
            width={1080}
            height={340}
            alt="hero-image"
            className=" w-full rounded-xl object-cover object-center"
          />
        </div>
      </Section>
    </>
  );
};

export default Hero;
