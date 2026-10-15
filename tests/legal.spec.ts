import { test, expect } from '@playwright/test';

test('legal pages are reachable and cookie settings clear only the selected local data', async ({ page }) => {
  await page.goto('/privacy/');
  await expect(page.locator('h1')).toHaveText('隱私政策');
  const legal = page.getByRole('navigation', { name: '法律與資料設定' });
  await expect(legal.getByRole('link', { name: '隱私政策' })).toBeVisible();
  await legal.getByRole('link', { name: '使用條款' }).click();
  await expect(page.locator('h1')).toHaveText('使用條款');
  await expect(page.locator('.prose')).toContainText('以主管機關、交通業者或場館當期公告為準');
  await page.getByRole('navigation', { name: '法律與資料設定' }).getByRole('link', { name: 'Cookie 設定' }).click();
  await expect(page.locator('h1')).toHaveText('Cookie 設定');
  await expect(page.locator('.prose').first()).toContainText('localStorage');

  await page.evaluate(() => {
    localStorage.setItem('kinmenguide-trip-v1', JSON.stringify({ version: 1, title: '測試行程', days: 1, stops: [{ id: 'juguang-tower', day: 1, time: '', note: '' }] }));
    localStorage.setItem('kinmenguide-checklist-v1', JSON.stringify({ version: 1, origin: 'taiwan', checked: ['passport'] }));
    localStorage.setItem('unrelated-test-key', 'keep');
  });
  await page.reload();
  await expect(page.locator('#storage-overview')).toContainText('我的行程、旅行清單進度');
  await expect(page.locator('[data-trip-count]').first()).toHaveText('1');

  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: '刪除旅行清單進度' }).click();
  await expect(page.locator('#storage-action-status')).toContainText('已刪除旅行清單進度');
  expect(await page.evaluate(() => localStorage.getItem('kinmenguide-checklist-v1'))).toBeNull();
  expect(await page.evaluate(() => localStorage.getItem('kinmenguide-trip-v1'))).not.toBeNull();

  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: '刪除我的行程' }).click();
  await expect(page.locator('#storage-overview')).toContainText('目前沒有保存');
  await expect(page.locator('[data-trip-count]').first()).toHaveText('0');
  expect(await page.evaluate(() => localStorage.getItem('kinmenguide-trip-v1'))).toBeNull();
  expect(await page.evaluate(() => localStorage.getItem('unrelated-test-key'))).toBe('keep');
});
