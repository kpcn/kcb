export const kebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const kebabCaseToText = (str: string) => str.split('-').join(' ');

export const createSlug = (tag: string) => {
  return `/blog/tags/${kebabCase(tag)}`;
};

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
