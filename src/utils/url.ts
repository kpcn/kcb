import { kebabCaseToText } from './format';

export const isBlogRelatedUrl = (pathname: string) => {
	return pathname.match(/\/blog\//g);
};

export const isTagsPage = (pathname: string) => {
	return pathname.match(/\/blog\/tags\//g);
};

export const isBlogUrl = (pathname: string) => {
	const regexRule = /\/blog\/+(?!tags)[a-zA-Z0-9]/g;
	return regexRule.test(pathname);
};

export const getTagName = (url: string, defaultReturnString = 'All') => {
	const name = url.split('/').slice(-2)[0];
	if (!isBlogRelatedUrl(url)) {
		return '';
	}
	return kebabCaseToText(name) || defaultReturnString;
};
