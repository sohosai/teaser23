import { getDefaultConfig } from "./config";
import type { i18nAdapterConfig } from "../types";

class I18nAdapter implements i18nAdapterConfig {
  defaultLocale: string;
  supportedLocales: string[];
  translates: any;
  #locale: string;

  constructor() {
    const defaultConfig = getDefaultConfig();
    this.defaultLocale = defaultConfig.defaultLocale;
    this.supportedLocales = defaultConfig.supportedLocales;
    this.#locale = this.defaultLocale;
  }

  get locales() {
    return [...this.supportedLocales];
  }

  get locale() {
    return this.#locale;
  }

  set locale(locale: string) {
    if (!this.locales.includes(locale)) {
      throw new Error(
        `Cannot set locale to "${locale}". "${locale}" is not supported, did you add it to the astro.config.mjs?`
      );
    }
    this.#locale = locale;
  }

  getLocaleFromUrl(url: URL): string {
    const [, locale] = url.pathname.split("/");
    return this.supportedLocales.includes(locale) ? locale : this.defaultLocale;
  }

  internals() {
    return {
      init: this.#init.bind(this),
    };
  }

  init(Astro: { url: URL }) {
    let locale = this.getLocaleFromUrl(Astro.url);
    this.locale = locale || this.defaultLocale;
  }

  #init(config: i18nAdapterConfig, translates: any) {
    this.defaultLocale = config.defaultLocale;
    this.supportedLocales = config.supportedLocales;
    this.translates = translates;
  }
}

const i18nAdapter = new I18nAdapter();

export default i18nAdapter;
