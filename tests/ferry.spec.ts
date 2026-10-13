import { test, expect } from '@playwright/test';
import { createHash } from 'node:crypto';
const route = '/transport/xiamen-kinmen-ferry-november-2026/';

test('mainland visitors can select departure date and ferry direction', async ({ page }) => {
  await page.goto('/transport/from-mainland-china/');
  await page.getByRole('link', { name: '查詢11月廈金小三通船班表', exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`${route}$`));
  await expect(page.locator('[data-ferry-status]')).toContainText('2026/11/01（週日） · 廈門五通 → 金門 · 共 12 班');
  await expect(page.locator('[data-ferry-rows] tr')).toHaveCount(12);
  await expect(page.locator('[data-ferry-rows] tr').first()).toHaveText('08:30和平新星');
  await page.getByLabel('搭船日期', { exact: true }).selectOption('2026-11-03');
  await expect(page.locator('[data-ferry-rows] tr').nth(3)).toHaveText('10:30迅安');
  await page.getByLabel('搭船日期', { exact: true }).selectOption('2026-11-18');
  await expect(page.locator('[data-ferry-rows] tr').nth(3)).toHaveText('10:30和平新星');
  await page.getByLabel('航行方向', { exact: true }).selectOption('toWutong');
  await page.getByLabel('搭船日期', { exact: true }).selectOption('2026-11-30');
  await expect(page.locator('[data-ferry-status]')).toContainText('2026/11/30（週一） · 金門 → 廈門五通');
  await expect(page.locator('[data-ferry-rows] tr').first()).toHaveText('08:30马可波罗1号');
  await expect(page.locator('[data-ferry-rows] tr').nth(9)).toHaveText('16:15新东方');
  await expect(page.locator('[data-ferry-rows] tr').last()).toHaveText('17:30和平新星');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  await page.goto(`${route}?date=2026-11-31&direction=bad`);
  await expect(page.locator('[data-ferry-status]')).toContainText('2026/11/01');
  await page.goto(`${route}?date=2026-11-22&direction=toWutong`);
  await expect(page.locator('[data-ferry-status]')).toContainText('2026/11/22（週日） · 金門 → 廈門五通');
});

test('full month includes every sailing and the unchanged source PDF', async ({ page, request }) => {
  await page.goto(route);
  await page.getByText('查看完整11月月表（雙向720班）', { exact: true }).click();
  await expect(page.locator('[data-ferry-full] tbody tr')).toHaveCount(60);
  await expect(page.locator('[data-ferry-full] tbody td')).toHaveCount(720);
  await expect(page.locator('[data-ferry-full="toKinmen"] [data-ferry-day="2026-11-22"] td').last()).toHaveText('金星6号');
  await expect(page.locator('[data-ferry-full="toKinmen"] [data-ferry-day="2026-11-23"] td').last()).toHaveText('马可波罗1号');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  const link = page.getByRole('link', { name: '下載11月原始PDF', exact: true });
  const response = await request.get((await link.getAttribute('href'))!);
  expect(response.ok()).toBeTruthy();
  expect(createHash('sha256').update(await response.body()).digest('hex')).toBe('82aff3960ec82755c3dd14ba729fb96891cfaebb2f667eb942e0feee106d24ad');
});

test('without JavaScript the complete two-way timetable remains available', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4321${route}`);
  await expect(page.locator('[data-ferry-picker]')).toBeHidden();
  await expect(page.locator('[data-ferry-month]')).toHaveAttribute('open', '');
  await expect(page.locator('[data-ferry-full="toKinmen"] tbody tr')).toHaveCount(30);
  await expect(page.locator('[data-ferry-full="toWutong"] tbody tr')).toHaveCount(30);
  await expect(page.getByRole('link', { name: '下載11月原始PDF', exact: true })).toBeVisible();
  await context.close();
});
