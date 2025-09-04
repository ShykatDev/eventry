"use client";

import Section from "@/components/common/Section";
import SectionGap from "@/components/common/SectionGap";
import { Button } from "@/components/ui/button";
import { BugAntIcon } from "@heroicons/react/24/outline";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="dark">
        <SectionGap />
        <Section className="text-center p-8 h-[80vh] flex items-center justify-center">
          <div>
            <BugAntIcon className="size-20 mx-auto mb-4 text-neutral-900" />
            <h2 className="text-2xl text-neutral-200">Something went wrong!</h2>
            <p className="mt-2 text-neutral-400">{error.message}</p>

            <Button
              onClick={() => reset()}
              className="mt-4 !bg-red-950"
              variant="outline"
            >
              Try again
            </Button>
          </div>
        </Section>
      </body>
    </html>
  );
}
