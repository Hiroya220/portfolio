import Image from "next/image";
import Link from "next/link";
import { assetPaths } from "@/content/assets";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  linked?: boolean;
};

export function Logo({ className, imageClassName, priority = false, linked = true }: LogoProps) {
  const image = (
    <Image
      src={assetPaths.logo}
      alt={`${siteConfig.displayName} logo`}
      width={1304}
      height={248}
      priority={priority}
      className={cn("h-auto w-[150px] select-none sm:w-[184px]", imageClassName)}
    />
  );

  if (!linked) {
    return <div className={cn("inline-flex shrink-0 items-center", className)}>{image}</div>;
  }

  return (
    <Link href="/" aria-label={`${siteConfig.displayName} Home`} className={cn("inline-flex shrink-0 items-center", className)}>
      {image}
    </Link>
  );
}

