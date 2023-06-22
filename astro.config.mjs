import { defineConfig } from "astro/config";
import i18n from "astro-i18n-aut";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "ja";
const locales = {
  ja: "ja-JP",
  en: "en-US",
};

// https://astro.build/config
export default defineConfig({
  site: "https://sohosai.com",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
    }),
  ],
});
