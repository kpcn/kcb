import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { kebabCase } from './format';

export const urlFragmentFromTagName = (tag: string = '') =>
  `tags/${kebabCase(tag)}`;

export const getPostsByTag = (tag?: string) => {
  return getCollection('blog', (posts: CollectionEntry<'blog'>) => {
    return posts.data.tags?.some((val) => urlFragmentFromTagName(val) === tag);
  });
};

export const getAllTags = async () => {
  const blogEntries = await getCollection('blog');
  const tags = blogEntries.reduce(
    (acc: string[], entry: CollectionEntry<'blog'>) => {
      return [...acc, ...(entry.data.tags || [])];
    },
    []
  );
  return [...new Set(tags)];
};
