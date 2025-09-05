import Banner from "@/components/common/Banner";
import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import MyEvents from "@/components/pages/Events/MyEvents";

const Page = async () => {
  return (
    <>
      <Section className="py-0">
        <div className="border-x text-center">
          <h1 className="py-2 text-xl border-b text-foreground/80">
            My Created Events
          </h1>
          <span className="p-4 border-x text-sm block max-w-3xl mx-auto text-neutral-400">
            Manage the events you’ve created or joined. Keep track of details,
            update information, and stay connected with your audience.
          </span>
        </div>
      </Section>
      <SectionGap />
      <Section className="p-0">
        <Banner src="/assets/my-events.jpg" />
      </Section>
      <SectionGap />
      <Section className="p-0">
        <MyEvents />
      </Section>
    </>
  );
};

export default Page;
