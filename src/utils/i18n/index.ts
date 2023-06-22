import LocaleJa from "../../content/locales/ja/translation.json";
import LocaleEn from "../../content/locales/en/translation.json";

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
