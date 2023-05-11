import path from 'path';

export const kebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const isBlogPage = (pathname: string) => {
  return pathname.match(/\/blog\//g);
};

export const createSlug = (tag: string) => {
  return `/blog/tags/${kebabCase(tag)}`;
};

// TODO: to refactor this workaround
export const dynamicViteAssetImport = (
  imageFileName: string,
  config?: { raw: boolean } | undefined
) => {
  const filename = path.parse(imageFileName);
  const name = filename.name;
  const ext = filename.ext;
  const raw = config?.raw;
  switch (ext) {
    case '.webp':
      return import(`../assets/${name}.webp`);
    case '.jpg':
      return import(`../assets/${name}.jpg`);
    case '.png':
      return import(`../assets/${name}.png`);
    case '.svg':
      if (raw) {
        return import(`../assets/${name}.svg?raw`);
      }
      return import(`../assets/${name}.svg`);
    case '.gif':
      return import(`../assets/${name}.gif`);
    case '.avif':
      return import(`../assets/${name}.avif`);
    case '.jpeg':
      return import(`../assets/${name}.jpeg`);
    default:
      return import(`../assets/${name}.jpg`);
  }
};
