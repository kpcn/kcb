import { describe, it, expect, beforeEach } from 'vitest';
import { isBlogRelatedUrl } from '@utils/url';
import { canonical } from '@src/meta.json';

describe('utils:url functions', () => {
	let blogPostUrl: string, tagsUrl: string, tag: string, slug: string;
	beforeEach(() => {
		tag = 'tag-name';
		slug = 'post-name';
		blogPostUrl = `${canonical}/blog/${slug}`;
		tagsUrl = `${canonical}/blog/tags/${tag}`;
	});
	describe('isBlogRelatedUrl', () => {
		it('return truthy state when url is blog related', () => {
			expect(isBlogRelatedUrl(blogPostUrl)).toBeTruthy();
			expect(isBlogRelatedUrl(tagsUrl)).toBeTruthy();
		});
	});
});
