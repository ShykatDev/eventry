import Logo from "../common/Logo";
import Section from "../common/Section";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Section>
      <footer className="flex justify-between w-full">
        <Logo />
        <div className="">
          <span className="text-xs text-neutral-400">
            © {year} Eventry. All rights reserved
          </span>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
