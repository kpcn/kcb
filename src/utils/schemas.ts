import { z } from 'astro:content';

export const imageProvider = z.object({
	provider: z.enum(['unsplash', 'local']).default('local'),
	config: z.record(z.string()).optional(),
});

export const blogSchema = z.object({
	title: z.string(),
	publishedAt: z.string(),
	summary: z.string(),
	excerpt: z.string().optional(),
	image: imageProvider.optional(),
	tags: z.array(z.string()).optional(),
	relatedPosts: z.array(z.string()).optional(),
});

