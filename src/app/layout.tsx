import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { WalkingRabbit } from "@/components/shared/walking-rabbit";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.displayName} | Portfolio`,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.displayName} | Portfolio`,
    description: siteConfig.description,
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${plusJakartaSans.variable} ${notoSansJp.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll />
        {children}
        <WalkingRabbit className="walking-rabbit-global" />
      </body>
    </html>
  );
}
