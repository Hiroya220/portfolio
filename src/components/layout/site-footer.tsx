import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/content/site-config";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-white/15 bg-[#080808] pb-8 pt-24 text-white sm:pt-36">
      <Container>
        <p className="mb-6 text-xs uppercase tracking-[0.22em] text-white/45">Have a project in mind?</p>
        <a href={`mailto:${siteConfig.email}`} className="group flex items-end justify-between border-b border-white/20 pb-8">
          <span className="text-[clamp(2.8rem,9vw,9rem)] font-medium leading-[0.85] tracking-[-0.065em]">Let&apos;s talk.</span>
          <ArrowUpRight className="mb-1 size-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 sm:mb-3 sm:size-14" strokeWidth={1} />
        </a>
        <div className="mt-16 grid gap-10 text-xs uppercase tracking-[0.14em] text-white/55 sm:mt-24 sm:grid-cols-3">
          <div><p className="mb-2 text-white/30">Location</p><p>{siteConfig.location}</p></div>
          <div className="flex gap-6 sm:justify-center">
            {Object.entries(siteConfig.socialLinks).map(([name, href]) => (
              <a className="link-line hover:text-white" href={href} target="_blank" rel="noreferrer" key={name}>{name}</a>
            ))}
          </div>
          <div className="flex items-end justify-between sm:justify-end sm:gap-8"><span>© {new Date().getFullYear()}</span><Logo className="[&>span:last-child]:hidden" /></div>
        </div>
      </Container>
    </footer>
  );
}

