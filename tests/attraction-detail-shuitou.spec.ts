import { test, expect } from '@playwright/test';

const shuitouUrl = '/attractions/shuitou-village/';
const googlePoi = 'https://www.google.com/maps/search/?api=1&query=%E6%B0%B4%E9%A0%AD%E8%81%9A%E8%90%BD&query_place_id=ChIJGe8RAgCiFDQRVx_ede7YnmI';
const legacyTopics = [
  '把時間留給巷弄', '得月樓、學校與民居', '留宿還是半日走訪',
  '第一次來，照這個步行順序走', '把水頭五個空間分清楚',
  '住水頭時先確認不同館別', '在水頭過夜，先分館別再看取匙'
];

test('Shuitou v1.2 content order, management, map POI, FAQ/schema and original guide remain intact', async ({ page }) => {
  const response = await page.goto(shuitouUrl);
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('h1')).toHaveText('水頭聚落');
  await expect(page.locator('[data-attraction-detail="v1"]')).toHaveCount(1);
  await expect(page.locator('.article-cover img')).toBeVisible();
  await expect(page.locator('figcaption')).toContainText('lienyuan lee / CC BY 3.0');

  const headings = await page.locator('article.article-body h2').allTextContents();
  expect(headings.slice(0, 9)).toEqual([
    '探索水頭聚落', '關於水頭聚落', '基本資料', '交通方式',
    '路線地圖', '人文生態', '遊客資訊與常見問答',
    '行前規劃與深度遊覽', '周邊景點與順路行程'
  ]);
  expect(headings).not.toContain('景點相冊');
  await expect(page.locator('[data-attraction-detail] > section:last-child h2')).toHaveAttribute('id', 'about-attraction');
  const nextSectionId = await page.locator('[data-attraction-detail]').evaluate(node =>
    node.nextElementSibling?.querySelector('h2')?.id);
  expect(nextSectionId).toBe('basic-info');
  await expect(page.locator('section[aria-labelledby="about-attraction"] .attraction-manager'))
    .toContainText('金門縣文化局（文化資產主管機關）');
  await expect(page.locator('section[aria-labelledby="about-attraction"] .attraction-manager'))
    .toContainText('金門國家公園管理處（部分公共展示場域）');
  await expect(page.locator('section[aria-labelledby="about-attraction"] .attraction-manager a'))
    .toHaveAttribute('href', 'https://nchdb.boch.gov.tw/city/cabkc.kinmen/assets/overview/historicalBuilding/20030331000016/');

  const facts = page.locator('.attraction-basic');
  await expect(facts).toContainText('景點地址（Google 地圖）');
  await expect(facts).toContainText('893 金門縣金城鎮');
  await expect(facts).toContainText('所在地／位置描述');
  await expect(facts).toContainText('金門縣金城鎮西南方');
  // The generic township POI address must not be replaced with a sub-attraction's house number.
  await expect(facts).not.toContainText('前水頭45號');

  await expect(page.getByRole('link', { name: '查看位置', exact: true })).toHaveAttribute('href', googlePoi);
  await expect(page.getByRole('link', { name: 'Google 地圖・水頭聚落（具名景點）' })).toHaveAttribute('href', googlePoi);
  await expect(page.getByRole('link', { name: '查看水頭聚落 Google 地圖地標' })).toHaveAttribute('href', googlePoi);

  const visibleFaq = await page.locator('article.article-body details').evaluateAll(details =>
    details.map(d => ({
      question: d.querySelector('summary')?.textContent?.trim(),
      answer: d.querySelector('p')?.textContent?.trim()
    })));
  expect(visibleFaq).toHaveLength(10);
  const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  const graph = schemas.flatMap(content => JSON.parse(content)['@graph'] ?? []);
  const placeSchema = graph.find(node => node['@type'] === 'TouristAttraction');
  expect(placeSchema).toBeDefined();
  expect(placeSchema.address.streetAddress).toBe('893 金門縣金城鎮');
  expect(placeSchema.hasMap).toBe(googlePoi);
  const faqSchema = graph.filter(node => node['@type'] === 'FAQPage');
  expect(faqSchema).toHaveLength(1);
  expect(faqSchema[0].mainEntity.map((item: { name: string; acceptedAnswer: { text: string } }) =>
    ({question: item.name, answer: item.acceptedAnswer.text}))).toEqual(visibleFaq);

  const both = await page.locator('article.article-body h2, article.article-body h3').allTextContents();
  const faqIndex = both.indexOf('遊客資訊與常見問答');
  const deepIndex = both.indexOf('行前規劃與深度遊覽');
  const nearIndex = both.indexOf('周邊景點與順路行程');
  expect(deepIndex).toBe(faqIndex + 1);
  expect(both.slice(deepIndex + 1, nearIndex)).toEqual(legacyTopics);
  await expect(page.locator('[data-trip-add="shuitou-village"]')).toBeEnabled();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

  const mapResponse = await page.goto('/map/');
  expect(mapResponse?.status()).toBe(200);
  const entry = page.locator('#map-point-attraction-shuitou-village');
  await expect(entry).toContainText('893 金門縣金城鎮');
  await expect(entry.locator('[data-map-location-link]')).toHaveAttribute('href', googlePoi);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('Shuitou v1.2 does not enable detail template for unrelated collections', async ({page}) => {
  for(const route of ['/food/kincheng-food/', '/hotels/family/', '/guides/kinmen-village-architecture/']){
    const resp=await page.goto(route);
    expect(resp?.status(),route).toBe(200);
    await expect(page.locator('[data-attraction-detail]')).toHaveCount(0);
  }
});
