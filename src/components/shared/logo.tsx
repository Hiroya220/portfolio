import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} — Home`} className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/logo/hiroya-kohrita.png"
        alt="Hiroya Kohrita"
        width={1304}
        height={248}
        priority
        className="h-auto w-[142px] sm:w-[174px]"
      />
    </Link>
  );
}
