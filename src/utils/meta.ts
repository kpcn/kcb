import type { CollectionEntry } from 'astro:content';
import meta from '@src/meta.json';

export const SITE_TITLE = meta.title;
export const SITE_DESCRIPTION = meta.description;

export type SeoMetaData = Partial<CollectionEntry<'blog'>['data']> & {
  type?: 'article' | 'profile';
  canonicalUrl?: string;
  socialHandles?: {
    twitter?: string;
  };
  keywords?: string[];
};

const defaultMetaData = {
  ...meta,
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
