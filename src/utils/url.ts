import { kebabCaseToText } from './format';

export const isBlogRelatedUrl = (pathname: string) => {
  return pathname.match(/\/blog\//g);
};

export const isTagsPage = (pathname: string) => {
  return pathname.match(/\/tags\//g);
};

export const getTagName = (
  url: string,
  defaultReturnString: string = 'All'
) => {
  const name = url.split('/').slice(-2)[0];
  if (!isBlogRelatedUrl(url)) {
    return '';
  }
  return kebabCaseToText(name) || defaultReturnString;
};
