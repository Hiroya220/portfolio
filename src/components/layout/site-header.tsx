import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6 text-white sm:py-8">
      <Container className="flex items-center justify-between">
        <Logo />
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-[11px] uppercase tracking-[0.16em] sm:gap-8 sm:text-xs">
            {links.map((link) => (
              <li key={link.href}>
                <a className="link-line py-2 text-white/70 transition-colors hover:text-white" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

