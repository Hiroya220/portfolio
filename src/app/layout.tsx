import type { Metadata } from "next";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

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
    <html lang="ja">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

