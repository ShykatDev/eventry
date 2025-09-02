import { HomeIcon, ServerStackIcon } from "@heroicons/react/24/outline";

type NavbarItem = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}[];

const navbarData: NavbarItem = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "My Events", href: "/my-events", icon: ServerStackIcon },
];

export { navbarData };
