import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} — Home`} className={cn("group inline-flex items-center gap-3", className)}>
      <span className="grid size-9 place-items-center border border-white/30 text-[10px] font-semibold tracking-[-0.03em] transition-colors duration-500 group-hover:bg-white group-hover:text-black">
        {siteConfig.initials}
      </span>
      <span className="hidden text-xs font-medium uppercase tracking-[0.18em] sm:block">{siteConfig.name}</span>
    </Link>
  );
}

