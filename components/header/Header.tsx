"use client";
import { navbarData } from "@/const/navbar-data";
import { useEvents } from "@/hooks/useEvents";
import { cn } from "@/lib/utils";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  MoonIcon,
  SquaresPlusIcon,
  SunIcon,
  XMarkIcon,
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

  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-background/10 z-50 backdrop-blur-3xl">
        <Section className="py-2">
          <nav className="flex items-center justify-between">
            <Logo />

            <div className="hidden sm:flex items-center gap-4">
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

            {mobileNav ? (
              <XMarkIcon
                className="size-5 sm:hidden"
                onClick={() => setMobileNav(!mobileNav)}
              />
            ) : (
              <Bars3Icon
                className="size-5 sm:hidden"
                onClick={() => setMobileNav(!mobileNav)}
              />
            )}
          </nav>
        </Section>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "w-full fixed bg-background/60 translate-x-full transition-all duration-300 ease-in-out top-10 backdrop-blur-2xl z-50 border-t px-4 h-[calc(100vh-40px)]",
          mobileNav && "translate-x-0"
        )}
      >
        <div className="border-x h-full py-4">
          <div className="">
            <div className="flex px-4 gap-2 justify-between grow pb-4 border-b">
              <Link
                href="/create-event"
                className="w-full"
                onClick={() => setMobileNav(false)}
              >
                <Button className="w-full rounded-none">
                  <SquaresPlusIcon className="size-5 " />
                  Create Event
                </Button>
              </Link>

              <div className="shrink-0 flex gap-2 items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleToggle}
                  className="rounded-none"
                >
                  {isDark ? (
                    <SunIcon className="size-5" />
                  ) : (
                    <MoonIcon className="size-5" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(true)}
                  className="rounded-none"
                >
                  <MagnifyingGlassIcon className="size-5" />
                  <span className="text-xs">ctrl+k</span>
                </Button>
              </div>
            </div>
            <div className="border-b divide-y px-4">
              {navbarData.map((item, index) => (
                <Link
                  key={`nav-item-${index}`}
                  href={item.href}
                  onClick={() => setMobileNav(false)}
                  className={cn(
                    "flex items-center border-x gap-2 hover:opacity-80 duration-300 text-sm w-full px-4 ",
                    pathName === item.href ? "text-primary" : "text-neutral-400"
                  )}
                >
                  <div className=" py-4 flex items-center justify-center w-full border-b last:border-b-0 gap-2">
                    {<item.icon className="size-5" />}
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
