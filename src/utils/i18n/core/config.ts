import type { i18nAdapterConfig } from "../types";

const defaultConfig: i18nAdapterConfig = {
  defaultLocale: "en",
  supportedLocales: [],
};

export function getDefaultConfig() {
  return { ...defaultConfig };
}
