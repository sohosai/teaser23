import type { AstroIntegration } from "astro";
import type { FontsConfig } from "./types";
import { getStyleSheet, parseStyleSheet } from "./lib/style";

export default function googleFontsSubsetter(fonts: FontsConfig): AstroIntegration {
  console.log(fonts);
  return {
    name: "google-fonts-subsetter-for-astro",
    hooks: {
      "astro:build:done": (options) => {
        console.log(options);
        for (const page of options.routes) {
          console.log(page);
          page.distURL?.pathname;
          /*const styles = page.styles;
          const fontsList = fonts.map((font) => font.name);

          styles.map((style) => {
            const styleSheet = getStyleSheet(style.sheet);
            return parseStyleSheet(styleSheet ?? "");
          });
          */
        }
      },
    },
  };
}
