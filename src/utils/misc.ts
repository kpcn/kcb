import { parse } from 'node-html-parser';

export const getSVG = (name: string) => {
	// TODO: might need to find diffrent strategy to get icons from assets
	const filepath = `../assets/icons/${name}.svg`;
	const files = import.meta.glob<string>('../assets/icons/**/*.svg', {
		as: 'raw',
		eager: true,
	});

	if (!(filepath in files)) {
		throw new Error(`${filepath} not found`);
	}

	const root = parse(files[filepath]);
	const svg = root.querySelector('svg');
	return {
		attributes: svg?.attributes,
		innerHTML: svg?.innerHTML,
	};
};

// TODO: refactor this to be more generic but specific to the use case, need to give the hint which item can be picked
export const pick = <T>(obj: T | undefined, keys: Array<keyof T>) => {
	if (!obj) return {};
	return keys.reduce((acc, key) => {
		if (obj[key]) {
			acc[key] = obj[key];
		}
		return acc;
	}, {} as T);
};
