import Link from "next/link";
import { primaryNavigation } from "@/content/navigation";
import { Logo } from "@/components/shared/logo";
import { WalkingRabbit } from "@/components/shared/walking-rabbit";

export function IntroNavigation() {
  return (
    <main className="top-stage min-h-dvh overflow-hidden bg-white text-black">
      <div className="top-logo" aria-hidden="true">
        <Logo linked={false} priority imageClassName="w-[300px] sm:w-[400px] lg:w-[480px]" />
      </div>

      <nav className="top-panel" aria-label="Top navigation">
        {primaryNavigation.map((item) => (
          <Link key={item.href} href={item.href} className="top-panel-link">
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <WalkingRabbit className="walking-rabbit-home" />
    </main>
  );
}
