import { describe, it, expect } from 'vitest';
import { urlFragmentFromTagName } from '@utils/content';

describe('utils:content functions', () => {
	it('return url fragment from tag name', () => {
		const tagName = 'tag-name';
		expect(urlFragmentFromTagName(tagName)).toBe(`tags/${tagName}`);
	});

	describe('getPostsByTag', () => {
		it.todo('return posts by tag');
	});

	describe('getAllTags', () => {
		it.todo('return all tags');
	});
});
