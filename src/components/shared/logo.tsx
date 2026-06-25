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
    <span className={cn("relative block aspect-[1304/248] w-[190px] overflow-hidden", imageClassName)}>
      <Image
        src={assetPaths.logo}
        alt={`${siteConfig.displayName} logo`}
        fill
        sizes="(max-width: 640px) 230px, 520px"
        priority={priority}
        className="select-none object-cover object-center"
      />
    </span>
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
