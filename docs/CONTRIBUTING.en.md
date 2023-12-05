[日本語](./../CONTRIBUTING.md) | [English](./CONTRIBUTING.en.md)

# Contribution Guide

Dear Contributor, Thank you for participating in this project!
We welcome contributions of any size and contributors of any skill level.

For those of you who are interested in participating in the development of this website, we will provide you with instructions on how to participate.

## Quick Guide

### Prerequisites

```
node: "^>=20.8.0"
npm: "^>=10.1.0"
```

### Setting up your local repo

```bash
git clone && cd ...
npm install
npm run build
```

### Development

```bash
# starts local dev server at localhost:4321
npm run dev
# build a production site
npm run build
```

## Project Structure

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

- `src/*` - Project source code (components, pages, styles, etc.)
  - `src/assets/*` - Image files, used in [astro:assets](https://docs.astro.build/en/guides/images/)
  - `src/components/*` - Reusable units of code for pages
  - `src/content/*` - Contains content data and markdown files
  - `src/icons/*` - Icon-related files, used in [astro-icons](https://github.com/natemoo-re/astro-icon)
  - `src/layouts/*` - The UI structure shared by one or more pages
  - `src/middleware/*` - Code related to application middleware
  - `src/pages/*` - Code for each page
  - `src/styles/*` - Style-related files
  - `src/types/*` - TypeScript type definition files
  - `src/utils/*` - Utility functions and helper functions
  - `src/consts.ts` - File where constants are defined
- `public/*` - Non-code, unprocessed assets (fonts, icons, etc.)
- `package.json` - A project manifest
- `astro.config.mjs` - An Astro configuration file
- `tsconfig.json` - A TypeScript configuration file

## Branches

In this section, we will explain the branches used during development.

### `production`

It will be deployed to https://teaser23.pages.dev. (During the Sohosai preparation period, it will be accessible at https://sohosai.com.)

### `develop` (default branch)

It will be reflected on the actual published site. Changes from the `develop` branch are incorporated into this branch through special Pull Requests that occur at regular intervals.

Active teaser23 development happens on the `develop` branch. `develop` always reflects the latest code.

If you want to add a new feature or fix a bug, please create a branch from the `develop` branch. Additionally, Pull Requests will be merged into this branch.

It will be deployed to https://develop.teaser23.pages.dev.
