import { Motion } from "@/components/common/Motion";
import Section from "@/components/common/Section";

const clientLogos = [
  "circle",
  "square",
  "triangle",
  "star",
  "hexagon",
  "pentagon",
  "octagon",
  "diamond",
];

const Clients = () => {
  return (
    <Section className="p-0 ">
      <span className="block text-xl p-4">Our Clients</span>

      <div className="relative overflow-hidden border-t">
        <Motion
          className="flex gap-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="w-40 h-18 bg-border/30 border-x shrink-0 flex items-center justify-center text-neutral-400 first:border-l-0 last:border-r-0 capitalize"
            >
              {client}
            </div>
          ))}
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="w-40 h-18 bg-border/30 border-x shrink-0 flex items-center justify-center text-neutral-400 first:border-l-0 last:border-r-0 capitalize"
            >
              {client}
            </div>
          ))}
        </Motion>
      </div>
    </Section>
  );
};

export default Clients;
