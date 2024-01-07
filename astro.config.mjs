import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercelStatic from '@astrojs/vercel/static';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	site: 'https://kcnk.me',
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		preact({
			compat: true,
		}),
		mdx({}),
		sitemap(),
	],
	output: 'static',
	adapter: vercelStatic(),
});
