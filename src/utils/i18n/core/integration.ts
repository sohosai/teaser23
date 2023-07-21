import fs from "fs";

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
          [
            `import { getCollection } from "astro:content";`,
            `const localeJSONs = await getCollection("locales");`,
            `let translates = {};`,
            `await Promise.all([...localeJSONs].map(async (entry) => {`,
            `  translates[entry.id.split("/")[0]] = entry.data;`,
            `}));`,
            ``,
            `import { i18nAdapter } from "src/utils/i18n";`,
            `i18nAdapter.internals().init(${stringifiedConfig}, translates);`,
          ].join("")
        );
      },

      "astro:build:done": async ({ dir }) => {
        const config: i18nAdapterConfig = {
          defaultLocale: defaultLocale,
          supportedLocales: Object.keys(locales),
        };

        config.supportedLocales
          .filter((i) => i !== defaultLocale)
          .forEach((locale) => {
            const locale_dir = dir.pathname + locale;
            fs.rename(`${locale_dir}/404/index.html`, `${locale_dir}/404.html`, (err) => {
              if (err) {
                console.log("Failed to rename path of 404 files");
                throw err;
              }
            });

            fs.rmdir(`${locale_dir}/404`, (err) => {
              if (err) {
                console.log("Failed to rename path of 404 files");
                throw err;
              }
            });
          });
      },
    },
  };
}
