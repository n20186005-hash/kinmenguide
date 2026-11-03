import { test, expect } from '@playwright/test';

test('Zhaishan detail pilot preserves semantic order and original integrations', async ({ page }) => {
  await page.goto('/attractions/zhaishan-tunnel/');
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('[data-attraction-detail="v1"]')).toHaveCount(1);
  const headings = await page.locator('article.article-body h2').allTextContents();
  expect(headings.slice(0, 9)).toEqual([
    '探索翟山坑道', '關於翟山坑道', '基本資料', '交通方式', '路線地圖',
    '人文生態', '景點相冊', '遊客資訊與常見問答', '周邊景點與順路行程'
  ]);
  await expect(page.locator('[data-trip-add="zhaishan-tunnel"]')).toBeEnabled();
  await expect(page.locator('figcaption')).toContainText('jason199567 / CC BY-SA 2.0');
  await expect(page.locator('a[href="/credits/#zhaishan"]').first()).toBeVisible();
  await expect(page.locator('.prose')).toContainText('6A不繞翟山坑道');
  await expect(page.locator('details summary').filter({ hasText: '翟山坑道要留多久？' })).toHaveCount(1);
  const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  const graph = schemas.flatMap(text => JSON.parse(text)['@graph'] ?? []);
  expect(graph.some(node => node['@type'] === 'TouristAttraction')).toBe(true);
  expect(graph.find(node => node['@type'] === 'FAQPage').mainEntity).toHaveLength(2);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('detail pilot does not opt other collections or attractions in', async ({ page }) => {
  for (const url of ['/attractions/shuitou-village/', '/food/kincheng-food/', '/transport/airport/']) {
    const response = await page.goto(url);
    expect(response?.status()).toBe(200);
    await expect(page.locator('[data-attraction-detail]')).toHaveCount(0);
  }
});
