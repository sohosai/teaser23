[日本語](./CONTRIBUTING.md) | [English](./docs/CONTRIBUTING.en.md)

# 貢献の仕方

コントリビューターの皆様、本プロジェクトにご参加いただきありがとうございます！
どんなサイズの貢献も、どんなスキルレベルのコントリビューターも歓迎します。

本ウェブサイトの開発に参加してくださる方に対して、参加方法をお伝えします。

## クイックガイド

### 推奨環境

```
node: "^>=20.8.0"
npm: "^>=10.1.0"
```

### ローカルリポジトリのセットアップ

```bash
git clone && cd ...
npm install
npm run build
```

### 開発方法

```bash
# ローカル開発サーバを localhost:4321 で起動します
npm run dev
# プロダクションサイトをビルドします
npm run build
```

## プロジェクトの構成

```bash
/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── icons/
│   ├── layouts/
│   ├── middleware/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   └── consts.ts
├── public/
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

- `src/*` - プロジェクトソースコード（コンポーネント、ページ、スタイルなど）
  - `src/assets/*` - 画像ファイル、[astro:assets](https://docs.astro.build/ja/guides/images/) で使用されます
  - `src/components/*` - ページのための再利用可能なコードユニット
  - `src/content/*` - コンテンツデータやマークダウンファイル
  - `src/icons/*` - アイコン関連のファイル、[astro-icons](https://github.com/natemoo-re/astro-icon) で使用されます
  - `src/layouts/*` - 1 つまたは複数のページで共有される UI 構造
  - `src/middleware/*` - アプリケーションの中間層（middleware）に関連するコード
  - `src/pages/*` - 各ページのコード
  - `src/styles/*` - スタイル関連のファイル
  - `src/types/*` - TypeScript の型定義ファイル
  - `src/utils/*` - ユーティリティ関数やヘルパー関数
  - `src/consts.ts` - 定数が定義されたファイル
- `public/*` - コード以外の処理不要のアセット（フォント、アイコンなど）
- `package.json` - プロジェクトマニフェスト
- `astro.config.mjs` - Astro の設定ファイル
- `tsconfig.json` - TypeScript の設定ファイル

## ブランチ

このセクションでは開発の際に使用されるブランチについて説明します

### `production`

実際に公開されるサイトに反映されます。このブランチは一定間隔で行われる特別な Pull Request により `develop` ブランチの変更が取り込まれます。

https://teaser23.pages.dev にデプロイされます。(雙峰祭準備期間中は https://sohosai.com に公開されます)

### `develop` (デフォルトブランチ)

teaser23 のアクティブな開発は `develop` ブランチで行われています。`develop` ブランチは常に最新のコードを反映しています。

新しい機能を追加したい場合や、バグの修正をしたい場合、`develop` ブランチからブランチを切ってください。また、Pull Request はこのブランチにマージされます。

https://develop.teaser23.pages.dev にデプロイされます。
