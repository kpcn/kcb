export const kebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const isBlogPage = (pathname: string) => {
  return pathname.match(/\/blog\//g);
};

export const createSlug = (tag: string) => {
  return `/blog/tags/${kebabCase(tag)}/`;
};
