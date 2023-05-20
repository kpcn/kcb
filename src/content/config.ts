import { defineCollection } from 'astro:content';
import { blogSchema } from '@utils/schemas';

const blogCollection = defineCollection({
	schema: blogSchema,
});

export const collections = {
	blog: blogCollection,
};
