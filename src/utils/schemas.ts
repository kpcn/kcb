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

// EXAMPLE: example YAML snippet for frontmatter
// title: 'Post 01'
// publishedAt: '2022-09-12'
// summary: 'Eu sint esse aute eiusmod officia eu ut sit dolor.'
// excerpt: 'Ad sit irure voluptate culpa ea exercitation do pariatur commodo qui amet cillum minim.Esse est commodo fugiat esse cupidatat excepteur consequat excepteur fugiat velit sint mollit...'
// image:
//   - provider: 'unsplash'
//     config:
//       photoId: 'cYUMaCqMYvI'
//   - provider: 'local'
//     config:
//       url: '/images/opposite-of-upward-arrows.webp'
//       alt: 'Upward arrows (Opposite directions)'
//       credit: 'Jungwoo Hong'
//       creditLink: 'https://unsplash.com/photos/cYUMaCqMYvI'
// tags:
//   - Resource Hints
//   - WPO
//   - React
