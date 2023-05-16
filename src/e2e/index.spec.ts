import { test, expect } from '@playwright/test';

test('meta title is correct', async ({ page }) => {
  const defaultTitle = "KC's Blog";
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(defaultTitle);
});
