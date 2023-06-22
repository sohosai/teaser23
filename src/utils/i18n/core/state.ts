class astrI18n {
  defaultLocale: string;
  #locale: String;
  constructor() {
    this.defaultLocale = "ja";
    this.#locale = this.defaultLocale;
  }
  init(Astro: { url: URL }) {}
}
