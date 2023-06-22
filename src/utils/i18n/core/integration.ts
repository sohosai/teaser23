import type { AstroIntegration } from "astro";

export function i18n(defaultLocale: string): AstroIntegration {
  return {
    name: "teaser23/i18n",
    hooks: {},
  };
}
