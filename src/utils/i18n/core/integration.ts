import type { AstroIntegration } from "astro";

export default function i18n(defaultLocale: string): AstroIntegration {
  return {
    name: "teaser23/i18n",
    hooks: {
      "astro:config:setup": (options) => {
        console.log(options.config);
      },
    },
  };
}
