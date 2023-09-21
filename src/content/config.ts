import { z, defineCollection } from "astro:content";

const locales = defineCollection({
  type: "data",
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
  }),
});

export const collections = {
  locales: locales,
  news: news,
};
