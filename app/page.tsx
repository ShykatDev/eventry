import SectionGap from "@/components/common/SectionGap";
import Clients from "@/components/pages/Home/Clients";
import Hero from "@/components/pages/Home/Hero";
import UpcomingEvents from "@/components/pages/Home/UpcomingEvents";
import WhatWeAre from "@/components/pages/Home/WhatWeAre";

export default function Page() {
  return (
    <>
      <Hero />
      <SectionGap />
      <UpcomingEvents />
      <Clients />
      <WhatWeAre />
    </>
  );
}
