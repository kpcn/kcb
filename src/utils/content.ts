import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { kebabCase } from './format';

export const urlFragmentFromTagName = (tag: string = '') =>
  `tags/${kebabCase(tag)}`;

export const getPostsByTag = (tag?: string) => {
  return getCollection('blog', (posts) => {
    return posts?.data?.tags?.some(
      (val) => urlFragmentFromTagName(val) === tag
    );
  });
};

export const getAllTags = async () => {
  const blogEntries = await getCollection('blog');
  return Array.from(
    new Set(
      blogEntries
        .map((entry) => {
          return entry.data.tags;
        })
        .flat()
    )
  );
};
