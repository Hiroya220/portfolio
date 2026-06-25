"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type DetailItem = {
  label: string;
  value: string;
};

type ProfileDetailAccordionProps = {
  openLabel: string;
  closeLabel: string;
  items: readonly DetailItem[];
};

export function ProfileDetailAccordion({ openLabel, closeLabel, items }: ProfileDetailAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="mt-12 border-y border-black/35 sm:mt-16">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between py-4 text-left text-base tracking-[0.04em] transition-colors hover:text-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-lg"
      >
        <span>{open ? closeLabel : openLabel}</span>
        <ChevronDown className={cn("size-5 transition-transform duration-500", open && "rotate-180")} strokeWidth={1.6} />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <dl className="pb-5 sm:pb-7">
            {items.map((item) => (
              <div key={item.label} className="grid gap-1 border-t border-black/15 py-2.5 text-sm sm:grid-cols-[180px_1fr] sm:gap-6 sm:text-base">
                <dt className="font-medium">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
