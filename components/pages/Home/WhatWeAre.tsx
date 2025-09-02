import Section from "@/components/common/Section";

const WhatWeAre = () => {
  return (
    <Section className="p-0">
      <span className="block text-xl p-4">What we are</span>

      <div className="grid grid-cols-3 gap-2 p-2 border-t bg-border/30">
        <div className="p-4 col-span-2 border rounded-lg bg-background">
          about
        </div>
        <div className="p-4 border-t border rounded-lg bg-background">
          proof
        </div>
        <div className="p-4 border-t border rounded-lg bg-background">-</div>
        <div className="p-4 col-span-2 border-t border rounded-lg bg-background">
          Contact Form
        </div>
        <div className="p-4 border-t border rounded-lg bg-background">Team</div>
        <div className="p-4 border-t border rounded-lg bg-background">-</div>
        <div className="p-4 border-t border rounded-lg bg-background">
          Socials
        </div>
      </div>
    </Section>
  );
};

export default WhatWeAre;
