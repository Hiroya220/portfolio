# Hiroya KOHRITA Portfolio

Next.js / React / Tailwind CSS / shadcn/ui で作成したポートフォリオサイトです。

## 起動

```bash
npm install
npm run dev
```

## よく編集する場所

- 基本情報: `src/content/site-config.ts`
- ナビゲーション: `src/content/navigation.ts`
- 使用画像パス: `src/content/assets.ts`
- Profile本文・詳細表: `src/content/profile.ts`
- Contact文言・リンク: `src/content/contact.ts`
- Works作品データ: `src/content/projects/*.mdx`

## 画像

現在の参照先は以下です。

- ロゴ: `public/logo/hiroya-kohrita.png`
- 宣材写真: `public/images/宣材写真.png`
- ひろやうさぎ: `public/images/ひろやうさぎ透過素材.png`

宣材写真とうさぎ画像が未配置の場合は、ページ上にフォールバック表示が出ます。上記ファイル名で配置すれば、そのまま本画像に切り替わります。

## Profileを編集する

`src/content/profile.ts` を編集します。詳細表は `details` 配列に項目を追加・削除できます。

```ts
details: [
  { label: "名前", value: "郡田 寛也（こおりた ひろや）" },
]
```

## Worksを追加する

`src/content/projects/` に `.mdx` ファイルを追加します。ファイル名がURLになります。

例: `src/content/projects/my-work.mdx` → `/works/my-work`

```mdx
---
title: "作品タイトル"
description: "一覧と詳細ページに出る短い説明"
year: "2026"
category: "授業"
client: "Class Work"
role:
  - "Design"
technologies:
  - "Next.js"
featured: true
order: 4
published: true
accent: "#C5E3FF"
visual: "type"
---

## Overview

ここに本文を書きます。
```

`category` は一旦 `授業` / `趣味` / `研究` のいずれかです。

## Vercel

Vercelでは標準設定でデプロイできます。本番URLが決まったら、環境変数 `NEXT_PUBLIC_SITE_URL` に公開URLを設定してください。

