import Image from "next/image";
import { assetPaths } from "@/content/assets";
import { cn } from "@/lib/utils";

type WalkingRabbitProps = {
  className?: string;
};

export function WalkingRabbit({ className }: WalkingRabbitProps) {
  return (
    <div className={cn("walking-rabbit", className)} aria-hidden="true">
      <Image
        src={assetPaths.walkingRabbitOpen}
        alt=""
        width={2000}
        height={2000}
        sizes="(max-width: 767px) 84px, 108px"
        loading="eager"
        className="walking-rabbit-frame walking-rabbit-frame-open"
      />
      <Image
        src={assetPaths.walkingRabbitClosed}
        alt=""
        width={2000}
        height={2000}
        sizes="(max-width: 767px) 84px, 108px"
        loading="eager"
        className="walking-rabbit-frame walking-rabbit-frame-closed"
      />
    </div>
  );
}
