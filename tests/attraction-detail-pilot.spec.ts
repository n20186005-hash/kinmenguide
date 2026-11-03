import { test, expect } from '@playwright/test';

// playwright.config.ts runs each case in desktop (1440px) and mobile (iPhone 13)
// projects, including the viewport/layout assertions below.
test('Zhaishan detail pilot preserves semantic order and original integrations', async ({ page }, testInfo) => {
  await page.goto('/attractions/zhaishan-tunnel/');
  const viewport = page.viewportSize();
  expect(viewport).not.toBeNull();
  expect(testInfo.project.name === 'mobile' ? viewport!.width < 600 : viewport!.width >= 1000).toBe(true);
  const noHorizontalOverflow = async () => {
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  };
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('.article-header')).toBeVisible();
  await expect(page.locator('.article-header h1')).toHaveText('翟山坑道');
  const cover = page.locator('.article-cover img');
  await expect(cover).toBeVisible();
  await expect(cover).toHaveAttribute('alt', '翟山坑道內的花崗岩岩壁與水道');
  await expect.poll(() => cover.evaluate(image => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0)).toBe(true);
  await noHorizontalOverflow();
  await expect(page.locator('[data-attraction-detail="v1"]')).toHaveCount(1);
  const headings = await page.locator('article.article-body h2').allTextContents();
  expect(headings.slice(0, 9)).toEqual([
    '探索翟山坑道', '關於翟山坑道', '基本資料', '交通方式', '路線地圖',
    '人文生態', '遊客資訊與常見問答', '行前規劃與深度遊覽',
    '周邊景點與順路行程'
  ]);
  // No empty gallery placeholder: hero and credit remain, but the section must not exist.
  expect(headings).not.toContain('景點相冊');
  await expect(page.getByRole('heading', { name: '景點相冊' })).toHaveCount(0);
  const allSectionHeadings = await page.locator('article.article-body h2, article.article-body h3').allTextContents();
  const supplementsStart = allSectionHeadings.indexOf('行前規劃與深度遊覽');
  expect(supplementsStart).toBeGreaterThan(allSectionHeadings.indexOf('遊客資訊與常見問答'));
  expect(allSectionHeadings.slice(supplementsStart + 1, supplementsStart + 7)).toEqual([
    '出發前怎麼查開放？', '值得停下來看的風景', '怎麼排進一天',
    '拍照、親子與雨天', '從戰時運補，看見坑道的尺度', '已結束的活動公告'
  ]);
  expect(allSectionHeadings[supplementsStart + 7]).toBe('周邊景點與順路行程');
  expect(allSectionHeadings.indexOf('遊客資訊與常見問答') + 1).toBe(supplementsStart);
  const about = page.locator('#about-attraction');
  const basic = page.locator('#basic-info');
  await about.scrollIntoViewIfNeeded();
  await expect(about).toBeVisible();
  const management = page.locator('section[aria-labelledby="about-attraction"] .attraction-manager');
  await expect(management).toContainText('目前管理單位：');
  await expect(management).toContainText('內政部國家公園署金門國家公園管理處');
  await expect(management.locator('a')).toHaveAttribute('href', 'https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/40');
  await expect(page.locator('.attraction-basic')).toContainText('目前管理單位');
  // A postal address is not a free-form landscape/location description.
  await expect(page.locator('.attraction-basic')).toContainText('景點地址（Google 地圖）');
  await expect(page.locator('.attraction-basic')).toContainText('893金門縣金城鎮90號');
  await expect(page.locator('.attraction-basic')).toContainText('所在地／位置描述');
  await expect(page.locator('.attraction-basic')).toContainText('金門縣金城鎮古崗湖東南方翟山腹');
  const mapsPoiUrl = 'https://maps.app.goo.gl/aQ2NqLzgZ3mATHpYA';
  await expect(page.getByRole('link', { name: '查看位置', exact: true })).toHaveAttribute('href', mapsPoiUrl);
  await expect(page.getByRole('link', { name: '查看位置與導航' })).toHaveAttribute('href', mapsPoiUrl);
  await expect(page.getByRole('link', { name: '開啟翟山坑道位置地圖' })).toHaveAttribute('href', mapsPoiUrl);
  await expect(page.locator('[data-attraction-detail] > section:last-child h2')).toHaveAttribute('id', 'about-attraction');
  expect(await page.locator('[data-attraction-detail]').evaluate(element =>
    element.nextElementSibling?.querySelector('h2')?.id)).toBe('basic-info');
  const aboutBox = await about.boundingBox();
  const basicBox = await basic.boundingBox();
  expect(aboutBox).not.toBeNull();
  expect(basicBox).not.toBeNull();
  expect(basicBox!.y).toBeGreaterThan(aboutBox!.y + aboutBox!.height);
  await basic.scrollIntoViewIfNeeded();
  await expect(basic).toBeVisible();
  await noHorizontalOverflow();
  await expect(page.locator('[data-trip-add="zhaishan-tunnel"]')).toBeEnabled();
  await expect(page.locator('figcaption')).toContainText('jason199567 / CC BY-SA 2.0');
  await expect(page.locator('a[href="/credits/#zhaishan"]').first()).toHaveAttribute('href', '/credits/#zhaishan');
  await expect(page.locator('article.article-body')).toContainText('6A不繞翟山坑道');

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://kinmenguide.com/attractions/zhaishan-tunnel/');
  await expect(page).toHaveTitle('翟山坑道｜金門旅遊實用攻略 | Kinmen Guide');
  const description = '走入金門山腹，探索戰時運補水道與A字形地下工程。整理翟山坑道的參觀建議、基本資料、交通與地景，搭配金城南線安排行程。';
  await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', description);
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', description);
  const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  const graph = schemas.flatMap(text => JSON.parse(text)['@graph'] ?? []);
  expect(graph.some(node => node['@type'] === 'TouristAttraction')).toBe(true);
  const placeSchema = graph.find(node => node['@type'] === 'TouristAttraction');
  expect(placeSchema.address.streetAddress).toBe('893金門縣金城鎮90號');
  expect(placeSchema.hasMap).toBe(mapsPoiUrl);
  const faqSchema = graph.filter(node => node['@type'] === 'FAQPage');
  expect(faqSchema).toHaveLength(1);
  const visibleFaq = await page.locator('article.article-body details').evaluateAll(details =>
    details.map(detail => ({
      question: detail.querySelector('summary')?.textContent?.trim(),
      answer: detail.querySelector('p')?.textContent?.trim()
    })));
  expect(visibleFaq).toHaveLength(10);
  expect(visibleFaq.map(f => f.question)).toEqual([
    '翟山坑道要留多久？', '可以與得月樓同一天嗎？',
    '翟山坑道一般參觀需要門票嗎？', '翟山坑道的開放時間是幾點？',
    '從金城車站可以搭公車到翟山坑道嗎？',
    '自駕前往翟山坑道有停車場嗎？',
    '輪椅或嬰兒推車能走完整個坑道嗎？',
    '雨天還可以參觀翟山坑道嗎？',
    '翟山坑道有現場解說服務嗎？',
    '翟山坑道有廁所嗎？遇到問題可以打哪支電話？'
  ]);
  expect(faqSchema[0].mainEntity.map((item: { name: string; acceptedAnswer: { text: string } }) =>
    ({ question: item.name, answer: item.acceptedAnswer.text }))).toEqual(visibleFaq);
  for (const detail of await page.locator('article.article-body details').all()) {
    await detail.locator('summary').click();
    await expect(detail.locator('p')).toBeVisible();
  }
  await noHorizontalOverflow();

  // Full-island map must also navigate to the named Google Maps landmark, not its raw coordinates.
  const mapResponse = await page.goto('/map/');
  expect(mapResponse?.status()).toBe(200);
  const mapPlace = page.locator('#map-point-attraction-zhaishan-tunnel');
  await expect(mapPlace).toContainText('893金門縣金城鎮90號');
  await expect(mapPlace.locator('[data-map-location-link]')).toHaveAttribute('href', mapsPoiUrl);
  await expect(mapPlace.locator('[data-map-location-link]')).toHaveText('Google 地圖景點導航');
  await noHorizontalOverflow();

  const creditsResponse = await page.goto('/credits/#zhaishan');
  expect(creditsResponse?.status()).toBe(200);
  await expect(page.locator('#zhaishan')).toHaveCount(1);
  await expect(page.locator('#zhaishan')).toBeVisible();
});

test('detail pilot does not opt other collections or attractions in', async ({ page }) => {
  // All fixtures correspond to existing Markdown entries, not inferred routes.
  for (const url of [
    '/attractions/jiugong-tunnel/',
    '/attractions/deyue-tower/',
    '/areas/kincheng/',
    '/hotels/family/',
    '/itineraries/kinmen-three-days-two-nights/',
    '/tours/houpu-night-walk/',
    '/food/kincheng-food/',
    '/transport/kinmen-airport/'
  ]) {
    const response = await page.goto(url);
    expect(response?.status(), url).toBe(200);
    await expect(page.locator('h1'), url).toHaveCount(1);
    await expect(page.locator('[data-attraction-detail]'), url).toHaveCount(0);
  }
});
