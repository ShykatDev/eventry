import Section from "@/components/common/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { aboutFeatures, socialLinks } from "@/const/static";
import { cn } from "@/lib/utils";
import type { BaseBoxLayoutProps } from "@/types/propsTypes";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BaseBoxLayout: FC<BaseBoxLayoutProps> = ({
  children,
  className,
  baseClassName,
  title,
}) => {
  return (
    <div className={cn("border rounded-lg bg-background", baseClassName)}>
      <div className="px-4">
        <div className="px-4 border-x h-4"></div>
      </div>

      <div className="px-4 border-t ">
        <div className={cn("border-x min-h-54", className)}>
          {title && <h3 className="text-base border-b px-4 py-2">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
};

const WhatWeAre = () => {
  return (
    <Section className="p-0">
      <span className="block text-xl p-4 ">What we are</span>

      <div className="grid grid-cols-3 gap-2 p-2 border-t bg-border/30">
        <BaseBoxLayout baseClassName="col-span-2" title="About">
          <div className="space-y-4">
            <div className="border-b p-4">
              <span className="text-sm text-neutral-400">
                We provide end-to-end delivery management solutions tailored for
                e-commerce businesses. From real-time order tracking to
                efficient last-mile delivery, we ensure your projects are
                delivered with speed, accuracy, and reliability.
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4 border-t">
              {aboutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-2 border-x first:border-l-0 last:border-r-0 p-4"
                >
                  <feature.icon className="w-6 h-6 text-neutral-300" />
                  <span className="text-sm text-neutral-400">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BaseBoxLayout>
        <BaseBoxLayout baseClassName="" className="px-4">
          <div className="w-full min-h-60.5 flex items-center justify-center border-x">
            <div className="border-y w-full py-4">
              <div className="border-y flex gap-4">
                <div className="border-r p-4">
                  <Image
                    alt="google"
                    src="/assets/icons/google.png"
                    width={40}
                    height={40}
                  />
                </div>

                <div className="border-l flex flex-col divide-y divide-border w-full">
                  <span className="py-1 px-4 text-foreground/70 flex items-center gap-2">
                    4.7 rating out of 5
                    <Image
                      alt="google"
                      src="/assets/icons/star.png"
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                  </span>
                  <span className="py-1 px-4 text-sm text-neutral-400">
                    People just love to work with us.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </BaseBoxLayout>
        <BaseBoxLayout baseClassName="" className="p-0 relative min-h-54">
          <Image
            alt="dot"
            src="/assets/dot.png"
            fill
            className="w-full object-cover"
          />
        </BaseBoxLayout>
        <BaseBoxLayout baseClassName=" col-span-2" title="Contact Form">
          <div className="border-y mt-4 w-full  bg-border/30 p-2 space-y-2">
            <div className="flex gap-2">
              <Input
                className="border-border rounded-sm placeholder:text-neutral-600 !bg-background"
                placeholder="Enter full name"
              />
              <Input
                className="border-border rounded-sm placeholder:text-neutral-600 !bg-background"
                placeholder="Enter email address"
              />
            </div>
            <Textarea
              className="border-border !bg-background resize-none placeholder:text-neutral-600"
              placeholder="Enter message here..."
            />
          </div>
          <div className="flex items-center h-full justify-center">
            <button className="px-10 bg-border/30 hover:bg-border/20 cursor-pointer border-x py-2 text-foreground text-sm">
              Submit
            </button>
          </div>
        </BaseBoxLayout>
        <BaseBoxLayout baseClassName="" className="flex items-center min-h-56">
          <div className="w-full flex items-center justify-center">
            <div className="border-y w-full py-4">
              <div className="border-y flex justify-center gap-4 divide-x">
                {socialLinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="hover:text-neutral-200 text-neutral-400 p-4 border-l last:border-r"
                  >
                    <link.icon className="size-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </BaseBoxLayout>
        <BaseBoxLayout baseClassName="" className="p-0 relative min-h-56">
          <Image
            alt="dot"
            src="/assets/dot.png"
            fill
            className="w-full object-cover"
          />
        </BaseBoxLayout>
        <BaseBoxLayout baseClassName="" title="Our Team">
          <div className="border-b p-4">
            <span className="text-sm text-neutral-400">
              Behind every successful delivery is a dedicated team. Our
              professionals bring expertise, passion, and innovation to ensure
              seamless solutions for our clients.
            </span>
          </div>
          <div className="flex items-center justify-between h-full text-neutral-400">
            <div className="px-4">
              <UserGroupIcon className="size-6" />
            </div>
            <p className="py-4 px-4 border-x text-center grow">
              Total Team members
            </p>
            <p className="px-4 text-center text-primary">50+</p>
          </div>
        </BaseBoxLayout>
      </div>
    </Section>
  );
};

export default WhatWeAre;
