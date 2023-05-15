import type { CollectionEntry } from 'astro:content';

export const SITE_TITLE = `KC's Blog`;
export const SITE_DESCRIPTION = `Some thoughts on the things I like, especially on Web Dev`;

export type SeoMetaData = Partial<CollectionEntry<'blog'>['data']> & {
  type?: 'article' | 'profile';
  canonicalUrl?: string;
  socialHandles?: {
    twitter?: string;
  };
  keywords?: string[];
};

const defaultMetaData = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  name: "KC's Blog",
  image: '/images/kc-img.jpg',
  type: 'profile',
  canonical: 'https://kcnk.me',
  socialHandles: {
    twitter: '@kchancnk',
  },
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
    title: meta?.title || defaultMetaData.title,
    description: meta?.summary || defaultMetaData.description,
    name: meta?.title || defaultMetaData.name,
    image: meta?.image?.url || defaultMetaData.image,
    type: meta?.type || defaultMetaData.type,
    canonical: meta?.canonicalUrl || defaultMetaData.canonical,
    socialHandles: meta?.socialHandles || defaultMetaData.socialHandles,
    keywords: meta?.keywords || defaultMetaData.keywords,
  };
};

export default {
  ...defaultMetaData,
};
