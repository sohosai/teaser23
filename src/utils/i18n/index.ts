import { i18n as i18nAut } from "astro-i18n-aut";
import i18nPlus from "./core/integration";
import type { i18nProps } from "./types";

export default function i18n({
  include = ["pages/**/*"],
  exclude = ["pages/api/**/*"],
  locales,
  defaultLocale,
}: i18nProps) {
  return [
    i18nAut({
      include,
      exclude,
      locales,
      defaultLocale,
    }),
    i18nPlus({
      locales,
      defaultLocale,
    }),
  ];
}

export { default as i18nAdapter } from "./core/state";

export { t } from "./core/translation";

export { l } from "./core/routing";
