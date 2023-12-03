[日本語](./README.md) | [English](./docs/README.en.md)

# teaser23

筑波大学学園祭「雙峰祭」のティザーサイトです。
またの名を「準備期間 Web」と言います。

https://teaser23.pages.dev

## 構成

```sh
/
├── public/
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
└── package.json
```

## 開発方法

すべてのコマンドはプロジェクトのルートから、ターミナルで実行します：

| コマンド                  | 説明                                                    |
| :------------------------ | :------------------------------------------------------ |
| `npm install`             | 依存関係をインストールします                            |
| `npm run dev`             | ローカル開発サーバを `localhost:4321` で起動します。    |
| `npm run build`           | プロダクションサイトを `./dist/` にビルドします         |
| `npm run preview`         | ビルドをローカルでプレビューします                      |
| `npm run prettier:check`  | Prettier を使用し、コードが整形されているかを確認します |
| `npm run prettier:format` | Prettier を使用し、コードを整形します                   |
