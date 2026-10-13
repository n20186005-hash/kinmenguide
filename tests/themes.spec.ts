import { test, expect } from '@playwright/test';
import { travelThemes } from '../src/data/travel-themes';

test('traveller routes are discoverable and have useful day plans', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-travel-theme]')).toHaveCount(6);
  for (const theme of travelThemes) {
    await expect(page.locator(`[data-travel-theme="${theme.id}"]`)).toHaveAttribute('href', `/itineraries/${theme.route}/`);
  }
  await page.goto('/attractions/');
  await expect(page.locator('[data-travel-theme]')).toHaveCount(6);
  for (const theme of travelThemes) {
    await page.locator(`[data-travel-theme="${theme.id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`/itineraries/${theme.route}/$`));
    await expect(page.locator('.timeline-day')).toHaveCount(theme.id === 'solo' ? 1 : 2);
    await expect(page.getByRole('navigation', { name: '行程主題' }).getByRole('link', { name: `${theme.label}行程` })).toHaveAttribute('href', `/itineraries/?theme=${theme.id}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    await page.goto('/attractions/');
  }
});

test('theme filters compose with area and text and reset the empty state', async ({ page }) => {
  await page.goto('/itineraries/?theme=kids');
  await expect(page.locator('[data-card]:visible')).toHaveCount(1);
  await expect(page.locator('[data-card]:visible h3')).toContainText('親子');
  await page.getByRole('button', { name: '個人行', exact: true }).click();
  await expect(page.locator('[data-card]:visible h3')).toContainText('個人');
  await page.locator('[data-filter="jinhu"]').click();
  await expect(page.locator('[data-empty]')).toBeVisible();
  await page.getByRole('button', { name: '清除篩選' }).click();
  await expect(page.locator('[data-card]:visible')).toHaveCount(19);
  await expect(page.getByRole('button', { name: '全部主題', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await page.locator('[data-query]').fill('情侣游');
  await expect(page.locator('[data-card]:visible')).toHaveCount(1);
  await expect(page.locator('[data-card]:visible h3')).toContainText('情侶');
  await page.goto('/itineraries/?theme=unknown');
  await expect(page.locator('[data-card]:visible')).toHaveCount(19);
});

test('theme route discovery works without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/itineraries/');
  await expect(page.locator('[data-card]:visible')).toHaveCount(19);
  await page.locator('[data-travel-theme="family"]').click();
  await expect(page.locator('h1')).toContainText('家庭');
  await expect(page.locator('.timeline-day')).toHaveCount(2);
  await context.close();
});
