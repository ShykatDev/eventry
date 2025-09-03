"use client";

import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  const handleGoBack = () => router.back();

  return (
    <button onClick={handleGoBack} className={cn(className)}>
      <ArrowLeftIcon className="size-4" />
      Back
    </button>
  );
};

export default BackButton;
