import Logo from "../common/Logo";
import Section from "../common/Section";
import SectionGap from "../common/SectionGap";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <SectionGap />
      <Section>
        <footer className="flex items-center flex-col sm:flex-row justify-between w-full">
          <Logo />
          <div className="">
            <span className="text-xs text-neutral-400">
              © {year} Eventry. All rights reserved
            </span>
          </div>
        </footer>
      </Section>
    </>
  );
};

export default Footer;
