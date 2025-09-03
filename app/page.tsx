import SectionGap from "@/components/common/SectionGap";
import BannerCTA from "@/components/pages/Home/BannerCTA";
import Clients from "@/components/pages/Home/Clients";
import Hero from "@/components/pages/Home/Hero";
import UpcomingEvents from "@/components/pages/Home/UpcomingEvents";
import WhatWeAre from "@/components/pages/Home/WhatWeAre";

export default function Page() {
  return (
    <>
      <Hero />
      <SectionGap />
      <Clients />
      <UpcomingEvents />
      <WhatWeAre />
      <SectionGap />
      <BannerCTA />
    </>
  );
}
