import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BannerCTA = () => {
  return (
    <Section className="p-0 bg-border/30">
      <div className="py-32">
        <div className="border-y relative bg-background flex items-stretch">
          <div className="w-3/5">
            <div className="h-4 border-r" />
            <div className="pt-4 border-t border-r">
              <p className="text-9xl text-border px-4">
                Have any <span className="text-neutral-400">project</span> in
                mind?
              </p>
              <p className="text-neutral-400 border-y p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur alias, quam ipsum molestias esse libero velit quas
                quo iusto?
              </p>
              <div className="px-4">
                <Button
                  className="rounded-none border-y-0 border-border"
                  variant="outline"
                  size="lg"
                >
                  Contact Us
                </Button>
              </div>
              <div className="h-4 border-r-0 border-t" />
            </div>
          </div>
          <div className="py-4 w-2/5 ">
            <div className="border-y h-full">
              <Image
                src={"/assets/cta.jpg"}
                width={1080}
                height={1000}
                alt="hero-image"
                className="h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BannerCTA;
