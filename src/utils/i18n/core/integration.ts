import type { AstroIntegration } from "astro";

export default function i18nPlus(defaultLocale: string): AstroIntegration {
  return {
    name: "astro-i18n-plus",
    hooks: {
      "astro:config:setup": (options) => {
        options.injectScript("page-ssr", ["import { i18nAdapter } from 'src/utils/i18n'", ""].join(";"));
      },
    },
  };
}
