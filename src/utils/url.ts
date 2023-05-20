import { kebabCaseToText } from './format';

export const isBlogRelatedUrl = (pathname: string) => {
	const regexRule = /\/blog\//g;
	return regexRule.test(pathname);
};

export const isTagsUrl = (pathname: string) => {
	const regexRule = /\/blog\/tags\//g;
	return regexRule.test(pathname);
};

export const isBlogUrl = (pathname: string) => {
	const regexRule = /\/blog\/+(?!tags)[a-zA-Z0-9]/g;
	return regexRule.test(pathname);
};

export const getTagName = (url: string, defaultReturnString = 'All') => {
	const name = url.split('/').slice(-2)[0];
	if (!isTagsUrl(url)) return defaultReturnString;
	return kebabCaseToText(name) || defaultReturnString;
};
