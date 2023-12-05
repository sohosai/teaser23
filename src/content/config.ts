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

const committee = defineCollection({
  type: "data",
  schema: z
    .object({
      name: z.string(),
      slogan: z.string(),
      description: z.string(),
    })
    .array(),
});

export const collections = {
  locales: locales,
  news: news,
  committee: committee,
};
