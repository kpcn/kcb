import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

import sitemap from '@astrojs/sitemap';

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
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx({}),
    sitemap(),
  ],
});
