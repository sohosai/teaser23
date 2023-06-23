import type { AstroIntegration } from "astro";
import type { i18nProps } from "../types";
import type { i18nAdapterConfig } from "../types";

export default function i18nPlus({ locales, defaultLocale }: i18nProps): AstroIntegration {
  return {
    name: "astro-i18n-plus",
    hooks: {
      "astro:config:setup": (options) => {
        const config: i18nAdapterConfig = {
          defaultLocale: defaultLocale,
          supportedLocales: Object.keys(locales),
        };

        const stringifiedConfig = JSON.stringify(config);
        options.injectScript(
          "page-ssr",
          [`import { i18nAdapter } from "src/utils/i18n"`, `i18nAdapter.internals().init(${stringifiedConfig})`].join(
            ";"
          )
        );
      },
    },
  };
}
