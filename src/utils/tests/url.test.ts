import { describe, it, expect, beforeEach } from 'vitest';
import { isBlogRelatedUrl, isBlogUrl } from '@utils/url';
import { canonical } from '@src/meta.json';

describe('utils:url functions', () => {
	let blogPostUrl: string, tagsUrl: string, tag: string, slug: string;
	beforeEach(() => {
		tag = 'tag-name-01';
		slug = 'post-name';
		blogPostUrl = `${canonical}/blog/${slug}`;
		tagsUrl = `${canonical}/blog/tags/${tag}`;
	});
	describe('isBlogRelatedUrl', () => {
		it.skip('return truthy state when url is blog related', () => {
			expect(isBlogRelatedUrl(blogPostUrl)).toBeTruthy();
			expect(isBlogRelatedUrl(tagsUrl)).toBeTruthy();
		});
	});

	describe('isBlogUrl', () => {
		it('return truthy state when url is blog post url', () => {
			expect(isBlogUrl(blogPostUrl)).toBe(true);
		});
		it('return falsy state when url is not blog post url', () => {
			expect(isBlogUrl(tagsUrl)).toBe(false);
		});
	});
});
