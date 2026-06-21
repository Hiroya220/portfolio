import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site-config";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#080808] py-24 text-white sm:py-40 lg:py-56">
      <Container>
        <Reveal><p className="mb-12 text-xs uppercase tracking-[0.2em] text-white/40">({homeContent.about.label})</p></Reveal>
        <Reveal>
          <h2 className="max-w-6xl whitespace-pre-line text-[clamp(2.6rem,7vw,7.5rem)] font-medium leading-[0.96] tracking-[-0.06em]">{homeContent.about.heading}</h2>
        </Reveal>
        <div className="mt-20 grid gap-12 border-t border-white/15 pt-8 sm:mt-32 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-xs uppercase leading-relaxed tracking-[0.16em] text-white/45"><p>{siteConfig.role}</p><p>{siteConfig.location}</p></div>
          <div className="space-y-6 text-sm leading-7 text-white/60 sm:text-base lg:col-span-2 lg:max-w-2xl">
            {homeContent.about.body.map((paragraph) => <Reveal key={paragraph}><p>{paragraph}</p></Reveal>)}
          </div>
        </div>
        <div className="mt-28 sm:mt-44">
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-white/40">Capabilities</p>
          {homeContent.capabilities.map((item) => (
            <Reveal key={item.number}>
              <div className="grid gap-4 border-t border-white/15 py-7 sm:grid-cols-[80px_1fr_1fr] sm:items-center sm:py-9">
                <span className="text-xs text-white/35">{item.number}</span><h3 className="text-2xl tracking-[-0.03em] sm:text-4xl">{item.title}</h3><p className="text-sm text-white/45 sm:text-right">{item.items.join(" · ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

