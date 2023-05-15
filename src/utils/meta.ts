import type { CollectionEntry } from 'astro:content';

export const SITE_TITLE = `KC's Blog`;
export const SITE_DESCRIPTION = `Some thoughts on the things I like, especially on Web Dev`;

export type SeoMetaData = Partial<CollectionEntry<'blog'>['data']>;

const defaultMetaData = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  name: "KC's Blog",
  ogimage: '/images/og-image.png',
  type: 'profile',
  url: 'https://kcnk.me',
  twname: '@kchancnk',
  keywords: [
    'web',
    'development',
    'blog',
    'astro',
    'svelte',
    'react',
    'javascript',
    'typescript',
  ],
};

export const getMetaData = (meta?: SeoMetaData) => {
  return {
    ...defaultMetaData,
    ...meta,
  };
};

export default {
  ...defaultMetaData,
};
