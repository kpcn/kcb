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
