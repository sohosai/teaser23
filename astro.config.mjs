import { defineConfig } from "astro/config";
import i18n from "./src/utils/i18n";
import { filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "ja";
const locales = {
  ja: "ja-JP",
  // en: "en-US",
};
const POSIXlocalesMap = {
  ja: "ja_JP",
  // en: "en_US",
};

// https://astro.build/config
export default defineConfig({
  site: "https://sohosai.com",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use 'sass:color';@import "src/styles/variables.scss";`,
        },
      },
    },
  },
  integrations: [
    i18n({
      defaultLocale,
      POSIXlocalesMap,
      locales,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
});
