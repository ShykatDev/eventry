"use client";
import { navbarData } from "@/const/navbar-data";
import { useEvents } from "@/hooks/useEvents";
import { cn } from "@/lib/utils";
import {
  MagnifyingGlassIcon,
  MoonIcon,
  SquaresPlusIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../common/Logo";
import Section from "../common/Section";
import { Button } from "../ui/button";

const Header = () => {
  const pathName = usePathname();
  const { setIsOpen } = useEvents();

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="fixed top-0 w-full bg-background/10 z-50 backdrop-blur-3xl">
      <Section className="py-2 ">
        <nav className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4 hidden">
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

            <Link href="/create-event">
              <Button>
                <SquaresPlusIcon className="size-5" />
                Create Event
              </Button>
            </Link>

            <Button variant="outline" size="icon" onClick={handleToggle}>
              {isDark ? (
                <SunIcon className="size-5" />
              ) : (
                <MoonIcon className="size-5" />
              )}
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(true)}>
              <MagnifyingGlassIcon className="size-5" />
              <span className="text-xs">ctrl+k</span>
            </Button>
          </div>
        </nav>
      </Section>
    </div>
  );
};

export default Header;
