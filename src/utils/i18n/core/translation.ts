import i18nAdapter from "./state";

export function t(key: string, locale = i18nAdapter.locale) {
  return i18nAdapter.translates[locale][key] || i18nAdapter.translates[i18nAdapter.defaultLocale][key];
}
