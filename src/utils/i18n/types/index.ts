export type i18nAdapterConfig = {
  defaultLocale: string;
  supportedLocales: string[];
  supportedPOSIXLocalesMap: { [key in string]: string };
};

export type { UserI18nConfig as i18nProps } from "astro-i18n-aut";
