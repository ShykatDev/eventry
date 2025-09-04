import Section from "@/components/common/Section";
import Events from "@/components/pages/Events/Events";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<Section>Loading events...</Section>}>
      <Events />
    </Suspense>
  );
};

export default Page;
