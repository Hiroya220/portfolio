import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white py-4 text-black sm:py-5">
      <Container className="flex items-center justify-between">
        <Logo />
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-[11px] uppercase tracking-[0.16em] sm:gap-8 sm:text-xs">
            {links.map((link) => (
              <li key={link.href}>
                <a className="link-line py-2 text-black/65 transition-colors hover:text-black" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
