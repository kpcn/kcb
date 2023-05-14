import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import { astroImageTools } from 'astro-imagetools';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), astroImageTools, image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), mdx({})]
});