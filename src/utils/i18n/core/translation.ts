import i18nAdapter from "./state";

export function t(key: string, locale = i18nAdapter.locale) {
  const translate = i18nAdapter.translates[locale][key] || i18nAdapter.translates[i18nAdapter.defaultLocale][key];
  if (Array.isArray(translate)) {
    return translate.join("\n");
  } else {
    return translate;
  }
}
