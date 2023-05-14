import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    excerpt: z.string(),
    image: z
      .object({
        url: z.string().optional(),
        alt: z.string().optional(),
        credit: z.string().optional(),
        creditLink: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
