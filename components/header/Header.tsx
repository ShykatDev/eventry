"use client";
import { navbarData } from "@/const/navbar-data";
import { cn } from "@/lib/utils";
import {
  MagnifyingGlassIcon,
  SquaresPlusIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../common/Logo";
import Section from "../common/Section";
import { Button } from "../ui/button";

const Header = () => {
  const pathName = usePathname();

  return (
    <Section>
      <div className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          {navbarData.map((item, index) => (
            <Link
              key={`nav-item-${index}`}
              href={item.href}
              className={cn(
                "flex items-center gap-2 hover:opacity-80 duration-300 text-sm",
                pathName === item.href ? "text-primary" : "text-neutral-400"
              )}
            >
              {<item.icon className="size-5" />}
              {item.label}
            </Link>
          ))}

          <Button>
            <SquaresPlusIcon className="size-5" />
            Create Event
          </Button>

          <Button variant="outline" size="icon">
            <SunIcon className="size-5" />
          </Button>
          <Button variant="outline">
            <MagnifyingGlassIcon className="size-5" />
            <span className="text-xs">ctrl+k</span>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Header;
