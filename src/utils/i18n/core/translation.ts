import i18nAdapter from "./state";
import LocaleJa from "../../../content/locales/ja/translation.json";
import LocaleEn from "../../../content/locales/en/translation.json";

const ui = {
  ja: LocaleJa,
  en: LocaleEn,
} as any;

export function t(key: string, locale = i18nAdapter.locale) {
  return ui[locale][key] || ui[i18nAdapter.defaultLocale][key];
}
