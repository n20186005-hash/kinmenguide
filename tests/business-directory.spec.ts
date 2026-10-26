import { test, expect } from '@playwright/test';

test('lodging selection combines town, class and verified facilities without merging branches', async ({ page }) => {
  await page.goto('/hotels/');
  const directory = page.locator('[data-business-directory]');
  await expect(directory.locator('[data-business-card]')).toHaveCount(7);
  await directory.getByLabel('所在地區').selectOption('lieyu');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(2);
  await expect(directory.locator('#business-jindian-bnb')).toContainText('278號');
  await expect(directory.locator('#business-jindian-bnb-2')).toContainText('723號');
  await directory.getByLabel('電梯', { exact: true }).check();
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(1);
  await expect(directory.locator('#business-jindian-bnb-2')).toBeVisible();
  await expect(directory.locator('#business-jindian-bnb-2')).toContainText('未推定所有房間或衛浴均無障礙');
  await directory.locator('[data-business-reset]').first().click();
  await directory.getByLabel('住宿類型').selectOption('hotel');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(3);
  await expect(directory.locator('[data-business-facility][value="breakfast"]')).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});

test('food discovery combines category and town, handles no results and omits conflicted phone', async ({ page }) => {
  await page.goto('/food/');
  const directory = page.locator('[data-business-directory]');
  await expect(directory.locator('[data-business-card]')).toHaveCount(15);
  await directory.getByLabel('所在地區').selectOption('jinsha');
  await directory.getByLabel('餐飲類型').selectOption('dessert');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(1);
  await expect(directory.locator('#business-xishangmei-ice')).toBeVisible();
  await expect(directory.locator('#business-xishangmei-ice a[href^="tel:"]')).toHaveCount(0);
  await directory.getByLabel('店名或地址').fill('this-place-does-not-exist');
  await expect(directory.locator('[data-business-empty]')).toBeVisible();
  await directory.locator('[data-business-empty] button').click();
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(15);
  await directory.getByLabel('店名或地址').fill('良金');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(2);
  await expect(directory.locator('#business-liangjin-factory a[href="/food/liangjin-ranch/"]')).toHaveCount(2);
  await expect(directory.locator('#business-liangjin-paifang a[href="/food/liangjin-paifang/"]')).toHaveCount(2);
});

test('business map switches layers and keeps unverified coordinates out of markers', async ({ page }) => {
  await page.goto('/map/');
  await expect(page.locator('#map-count')).toHaveText('162 個景點');
  await page.getByRole('button', { name: '住宿', exact: true }).click();
  await expect(page.locator('.map-point:visible')).toHaveCount(7);
  await expect(page.locator('#map-pin-count')).toContainText('沒有可確認及復用的坐標');
  await expect(page.locator('[data-map-marker][data-kind="hotel"]')).toHaveCount(0);
  await expect(page.locator('.map-point:visible [data-pin]')).toHaveCount(0);
  await expect(page.locator('#kinmen-map')).not.toHaveAttribute('src', /.+/);
  await page.getByRole('button', { name: '烈嶼', exact: true }).click();
  await expect(page.locator('.map-point:visible')).toHaveCount(2);
  await page.getByRole('button', { name: '餐飲', exact: true }).click();
  await expect(page.locator('.map-point:visible')).toHaveCount(2);
  await expect(page.locator('.map-point:visible a').filter({ hasText: 'Google 地圖' }).first()).toHaveAttribute('href', /query=/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});

test('public directories are readable without JavaScript and cross-links reach the correct branch', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/hotels/');
  await expect(page.locator('[data-business-card]:visible')).toHaveCount(7);
  await expect(page.locator('#business-golden-lake-hotel')).toContainText('金門縣旅館034號');
  await expect(page.locator('#business-golden-lake-hotel').getByRole('link', { name: '業者網站', exact: true })).toHaveAttribute('href', 'https://www.goldenlakehotel.com/');
  await page.goto('/food/');
  await expect(page.locator('[data-business-card]:visible')).toHaveCount(15);
  await expect(page.locator('#business-yuchuan-canteen a[href="/food/yuchuan-canteen/"]').first()).toBeVisible();
  await page.goto('/hotels/jindian-bnb-2/');
  await expect(page.locator('.prose')).toContainText('不同登記字號');
  await expect(page.locator('[aria-label="同區住吃玩安排"] a[href="/food/#business-carnival-ice"]')).toBeVisible();
  await context.close();
});
