export const homeContent = {
  hero: {
    eyebrow: "Hiroya Kohrita / Portfolio",
    lines: ["Profile", "Works", "Contact"],
    introduction: "白背景と水色のナビゲーションを基調にしたポートフォリオサイトです。",
  },
  about: {
    label: "About",
    heading: "あとから編集しやすい構成で、プロフィールと制作物を整理します。",
    body: [
      "ページの文章は src/content 配下で管理します。",
      "制作物は src/content/projects に MDX ファイルを追加するだけで増やせます。",
    ],
  },
  capabilities: [
    { number: "01", title: "Profile", items: ["Biography", "Details"] },
    { number: "02", title: "Works", items: ["授業", "趣味", "研究"] },
    { number: "03", title: "Contact", items: ["X DM", "Google Forms"] },
  ],
} as const;

