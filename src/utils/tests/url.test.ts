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
		it('return true when url is blog related', () => {
			expect(isBlogRelatedUrl(blogPostUrl)).toBe(true);
			expect(isBlogRelatedUrl(tagsUrl)).toBe(true);
		});
	});

	describe('isBlogUrl', () => {
		it('return true when url is blog post url', () => {
			expect(isBlogUrl(blogPostUrl)).toBe(true);
		});
		it('return false when url is not blog post url', () => {
			expect(isBlogUrl(tagsUrl)).toBe(false);
		});
	});
});
