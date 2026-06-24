import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function ProjectVisual({
  title,
  label,
  accent = "#d8ff56",
  visual = "type",
  cover,
  detail = false,
}: {
  title?: string;
  label?: string;
  accent?: string;
  visual?: "orb" | "grid" | "type";
  cover?: string;
  detail?: boolean;
}) {
  if (cover) {
    return <Image src={cover} alt="" fill sizes="(max-width: 768px) 100vw, 90vw" className="object-cover" />;
  }

  return (
    <div className={cn("project-visual relative isolate h-full min-h-full overflow-hidden", detail && "min-h-[55vw] lg:min-h-[760px]")} style={{ "--project-accent": accent } as CSSProperties}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#171717,#0b0b0b)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      {visual === "orb" && <div className="visual-orb absolute left-1/2 top-1/2 aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full" />}
      {visual === "grid" && (
        <div className="absolute inset-[15%] grid rotate-[-8deg] grid-cols-3 gap-2 sm:gap-4">
          {Array.from({ length: 9 }).map((_, index) => <span key={index} className="border border-white/20 bg-white/[0.03]" style={{ transform: `translateY(${(index % 3) * 8}px)` }} />)}
        </div>
      )}
      {visual === "type" && <p className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] text-center text-[clamp(5rem,18vw,18rem)] font-semibold leading-none tracking-[-0.09em] text-[var(--project-accent)]">S</p>}
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-[10px] uppercase tracking-[0.2em] text-white/60 sm:inset-x-8 sm:bottom-8 sm:text-xs">
        <span>{label ?? title}</span><span>Selected work</span>
      </div>
    </div>
  );
}
