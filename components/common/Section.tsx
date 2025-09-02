import { cn } from "@/lib/utils";
import React from "react";

const Section = ({
  children,
  className,
  parentClassName,
}: {
  children: React.ReactNode;
  className?: string;
  parentClassName?: string;
}) => {
  return (
    <div className={cn("border-b px-4", parentClassName)}>
      <div className={cn("mx-auto max-w-7xl border-x py-2 px-4", className)}>
        {children}
      </div>
    </div>
  );
};

export default Section;
