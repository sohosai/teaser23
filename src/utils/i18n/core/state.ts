import type { i18nAdapterConfig } from "../types";

class I18nAdapter implements i18nAdapterConfig {
  defaultLocale: string;
  #locale: string;
  constructor() {
    this.defaultLocale = "ja";
    this.#locale = this.defaultLocale;
  }
  init(Astro: { url: URL }) {
    let locale = Astro.url.pathname;
  }
}

const i18nAdapter = new I18nAdapter();

export default i18nAdapter;
