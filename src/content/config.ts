import { z, defineCollection } from "astro:content";

const locales = defineCollection({
  type: "data",
});

export const collections = {
  locales: locales,
};
