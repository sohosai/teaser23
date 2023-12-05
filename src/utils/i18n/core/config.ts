import type { i18nAdapterConfig } from "../types";

const defaultConfig: i18nAdapterConfig = {
  defaultLocale: "en",
  supportedLocales: [],
  supportedPOSIXLocalesMap: {},
};

export function getDefaultConfig() {
  return { ...defaultConfig };
}
