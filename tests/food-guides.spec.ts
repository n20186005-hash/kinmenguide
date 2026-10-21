import { test, expect } from '@playwright/test';

test('food discovery connects regional guides and keeps the afternoon snack after lunch', async ({ page }) => {
  await page.goto('/food/');
  await page.getByRole('link', { name: /小金門午餐與芋頭冰/ }).click();
  await expect(page).toHaveURL(/\/food\/lieyu-food\/$/);
  await expect(page.locator('.prose')).toContainText('東林街148號');
  await expect(page.locator('.prose')).toContainText('黃厝23之1號');
  await page.getByRole('link', { name: '烈嶼一日遊', exact: true }).first().click();
  await expect(page.locator('.timeline a[href="/food/lieyu-food/"]')).toBeVisible();
  await page.goto('/itineraries/kinmen-food-trail/');
  const snack = page.locator('.timeline li').filter({ has: page.locator('a[href="/food/oyster-fritter-house/"]') });
  await expect(snack.locator('.time')).toContainText('14:30');
  await expect(page.locator('.timeline a[href="/food/kincheng-food/"]')).toBeVisible();
});
