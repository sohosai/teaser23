import { defineConfig } from "astro/config";
import { i18n as i18nAut } from "astro-i18n-aut";
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
    i18nAut({
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
