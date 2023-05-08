import { z } from 'astro:content';

export default z.object({
  title: z.string(),
  publishedAt: z.string(),
  summary: z.string(),
  excerpt: z.string(),
  hero_image: z.string(),
  hero_image_desc: z.string(),
  hero_image_credited_name: z.string(),
  hero_image_credited_link: z.string(),
  tags: z.array(z.string()).optional(),
});
