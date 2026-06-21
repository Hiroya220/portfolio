# Portfolio

Next.js / React / Tailwind CSS / shadcn/uiで構築したポートフォリオです。

## 起動

```bash
npm install
npm run dev
```

## 基本情報を変更する

- 名前・メール・SNS：`src/content/site-config.ts`
- トップページの文章：`src/content/home.ts`
- ロゴ画像：`public/logo/hiroya-kohrita.png`
- ロゴの表示サイズ：`src/components/shared/logo.tsx`

## 制作物を追加する

1. `src/content/projects/`にあるMDXファイルを複製します。
2. ファイル名をURLに使いたい名前へ変更します。例：`new-project.mdx`
3. ファイル上部の情報と本文を編集します。
4. 画像は`public/images/projects/new-project/`へ保存します。

ファイル名がそのまま`/works/new-project`のURLになります。一覧、詳細ページ、SEO、サイトマップは自動生成されます。

### 主な設定

- `featured`: トップページに表示するか
- `order`: 表示順
- `published`: 公開するか
- `accent`: 仮ビジュアルの色
- `visual`: `orb` / `grid` / `type`
- `cover`: 実画像を使う場合のパス（省略可能）

```yaml
cover: "/images/projects/new-project/cover.webp"
```

MDXの設定に誤りがある場合はビルド時にエラーとして検出されます。

## Vercel

GitリポジトリをVercelへ接続すれば標準設定でデプロイできます。本番環境では`NEXT_PUBLIC_SITE_URL`に公開URLを設定してください。
