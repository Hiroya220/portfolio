import { ArrowDown } from "lucide-react";
import { Container } from "@/components/shared/container";
import { homeContent } from "@/content/home";

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-[#080808] pb-8 pt-32 text-white sm:pb-12">
      <div className="pointer-events-none absolute left-[58%] top-[18%] size-[45vw] max-h-[650px] max-w-[650px] rounded-full bg-[#d8ff56] opacity-[0.06] blur-[100px]" />
      <Container>
        <p className="hero-enter mb-8 text-[10px] uppercase tracking-[0.2em] text-white/45 sm:mb-12 sm:text-xs">{homeContent.hero.eyebrow}</p>
        <h1 className="text-[clamp(4.1rem,14.2vw,14rem)] font-medium leading-[0.76] tracking-[-0.075em]">
          {homeContent.hero.lines.map((line, index) => (
            <span key={line} className="block overflow-hidden"><span className="hero-line block" style={{ animationDelay: `${0.12 + index * 0.1}s` }}>{line}</span></span>
          ))}
        </h1>
        <div className="mt-10 grid items-end gap-8 sm:mt-14 sm:grid-cols-2">
          <p className="hero-enter max-w-md text-sm leading-relaxed text-white/55 sm:col-start-2 sm:text-base" style={{ animationDelay: ".55s" }}>{homeContent.hero.introduction}</p>
          <a href="#work" className="hero-enter flex size-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-black sm:row-start-1" style={{ animationDelay: ".65s" }} aria-label="制作実績へ移動"><ArrowDown className="size-4" /></a>
        </div>
      </Container>
    </section>
  );
}

