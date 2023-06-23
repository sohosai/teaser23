import LocaleJa from "../../content/locales/ja/translation.json";
import LocaleEn from "../../content/locales/en/translation.json";

import { i18n as i18nAut } from "astro-i18n-aut";
import i18nPlus from "./core/integration";

export default function i18n(defaultLocale: string, locales: Record<string, string>) {
  return [
    i18nAut({
      locales,
      defaultLocale,
    }),
    i18nPlus(defaultLocale),
  ];
}

export const defaultLang = "ja";

const ui = {
  ja: LocaleJa,
  en: LocaleEn,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export { default as i18nAdapter } from "./core/state";
