import Section from "@/components/common/Section";

const Clients = () => {
  return (
    <Section className="p-0 ">
      <span className="block text-xl p-4">Our Clients</span>

      <div className="flex items-center overflow-x-hidden gap-4 border-t">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-40 h-18 bg-border/30 border-x shrink-0 flex items-center justify-center text-neutral-400 first:border-l-0 last:border-r-0"
          >
            Logo
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Clients;
