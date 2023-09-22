import i18nAdapter from "./state";

export function l(route: string, locale = i18nAdapter.locale, routeLangCode = ""): string {
  const { locales, defaultLocale } = i18nAdapter;
  const segments = route.replace(/^\/+|\/+$/g, "").split("/");
  if (locales.includes(segments[0])) {
    segments.shift();
  }
  const inputLangCode = routeLangCode || locale || defaultLocale;
  let result = segments.join("/");
  if (inputLangCode !== defaultLocale) {
    result = `${inputLangCode}/${result}`;
  }
  if (!result.endsWith("/")) {
    result += "/";
  }
  if (!result.startsWith("/")) {
    result = "/" + result;
  }
  return result;
}
