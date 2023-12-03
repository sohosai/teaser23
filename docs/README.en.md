[日本語](./../README.md) | [English](./README.en.md)

# teaser23

This is the teaser site for the University of Tsukuba's campus festival, known as the "Sohosai" (雙峰祭). It is also referred to as the "Preparation Period Web."

https://teaser23.pages.dev

## Project Structure

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

## Development

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                             |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Installs dependencies                              |
| `npm run dev`             | Starts local dev server at `localhost:4321`        |
| `npm run build`           | Build a production site to `./dist/`               |
| `npm run preview`         | Preview a build locally, before deploying          |
| `npm run prettier:check`  | Check the code is properly formatted with Prettier |
| `npm run prettier:format` | Format the code with Prettier                      |
