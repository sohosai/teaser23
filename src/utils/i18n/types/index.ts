import type { UserI18nConfig } from "astro-i18n-aut";

export type i18nAdapterConfig = {
  defaultLocale: string;
  supportedLocales: string[];
  supportedPOSIXLocalesMap: { [key in string]: string };
};

export type i18nProps = UserI18nConfig & {
  POSIXlocalesMap: Record<string, string>;
};
