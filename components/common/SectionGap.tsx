import { cn } from "@/lib/utils";

const SectionGap = ({ className }: { className?: string }) => {
  return (
    <div className={cn("", className)}>
      <div className="hidden sm:flex overflow-hidden h-8 w-full border-b items-center justify-between">
        {[...Array(110)].map((_, index) => (
          <div
            key={index}
            className="h-14 w-[1px] bg-border rotate-45 origin-left -mt-2"
          ></div>
        ))}
      </div>

      <div className="sm:hidden overflow-hidden h-8 w-full border-b flex items-center justify-between">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="h-14 w-[1px] bg-border origin-left -mt-2"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SectionGap;
