import Image from "next/image";
import { cn } from "@/lib/utils";
import { publicAssetExists } from "@/lib/public-assets";

type OptionalImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  fallbackLabel: string;
  priority?: boolean;
};

export function OptionalImage({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  fallbackClassName,
  fallbackLabel,
  priority = false,
}: OptionalImageProps) {
  if (!publicAssetExists(src)) {
    return (
      <div className={cn("grid place-items-center border border-dashed border-black/25 bg-black/[0.03] p-6 text-center text-sm text-black/50", className, fallbackClassName)}>
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-full object-cover", className, imageClassName)}
    />
  );
}
