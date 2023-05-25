import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
	test('default meta data are correct', async ({ page }) => {
		const defaultTitle = "KC's Blog";
		await page.goto('/');
		const metaDescription = page.locator('meta[name="description"]');
		await expect(page).toHaveTitle(defaultTitle);
		await expect(metaDescription).toHaveAttribute(
			'content',
			'Some thoughts on the things I like, especially on Web Dev'
		);
	});

	test('avatar source is correct', async ({ page }) => {
		await page.goto('/');
		const avatar = page.locator('img[alt="KC"]');
		await expect(avatar).toHaveAttribute('src', /avatar.png/);
	});

	test('links are presented in contentinfo', async ({ page }) => {
		await page.goto('/');
		const links = page.getByRole('contentinfo').locator('a');
		await expect(links).toHaveCount(2);
	});

	test('home navigation link is visible in right navigation', async ({
		page,
	}) => {
		await page.goto('/');
		const homeLink = page.getByRole('navigation', { name: 'Home' });
		expect(homeLink).toBeTruthy();
	});

	test('blog posts are rendered', async ({ page }) => {
		await page.goto('/');
		const postCount = await page.getByRole('listitem').count();
		expect(postCount).toBeGreaterThan(0);
	});

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	test.fixme('blog posts are sorted by date', () => {});
});
