export const siteConfig = {
  name: "Hiroya Kohrita",
  displayName: "Hiroya KOHRITA",
  initials: "HK",
  role: "Designer / Student",
  description: "Hiroya Kohrita のプロフィール、制作物、お問い合わせをまとめたポートフォリオサイトです。",
  location: "Kanagawa, Japan",
  availability: "Open to conversations",
  email: "hello@example.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  socials: [
    { label: "X", href: "https://x.com/Hiroya220" },
  ],
} as const;

