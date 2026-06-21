import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — ${siteConfig.role}`, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: { title: `${siteConfig.name} — ${siteConfig.role}`, description: siteConfig.description, type: "website", locale: "ja_JP" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body><SmoothScroll />{children}</body>
    </html>
  );
}

