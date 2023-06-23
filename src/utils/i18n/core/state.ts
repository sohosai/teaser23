import type { i18nAdapterConfig } from "../types";

class i18nAdapter implements i18nAdapterConfig {
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
