export const siteConfig = {
  name: "Your Name",
  initials: "YN",
  role: "Designer & Developer",
  description:
    "デザインとテクノロジーの間から、静かで記憶に残るデジタル体験をつくります。",
  location: "Tokyo, Japan",
  availability: "Available for selected projects",
  email: "hello@example.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  socialLinks: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

