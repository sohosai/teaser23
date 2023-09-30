import { defineConfig } from "astro/config";
import i18n from "./src/utils/i18n";
import googleFontsSubsetter from "./src/utils/google-fonts-subsetter";
import { defaultLocaleSitemapFilter } from "astro-i18n-aut";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "ja";
const locales = {
  ja: "ja-JP",
  en: "en-US",
};

const googleFonts = [{ fonts: "", url: "" }];

// https://astro.build/config
export default defineConfig({
  site: "https://sohosai.com",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  vite: {
    //plugins: [googleFontsSubsetter([{name:"Mulish", url:"https://example.com" }])],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/variables.scss";`,
        },
      },
    },
  },
  integrations: [
    i18n({
      defaultLocale,
      locales,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: defaultLocaleSitemapFilter({ defaultLocale }),
    }),
    googleFontsSubsetter(googleFonts),
  ],
});
