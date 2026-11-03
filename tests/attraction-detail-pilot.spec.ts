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
  expect(headings.slice(0, 10)).toEqual([
    '探索翟山坑道', '關於翟山坑道', '基本資料', '交通方式', '路線地圖',
    '人文生態', '景點相冊', '遊客資訊與常見問答',
    '現地遊覽與行程延伸', '周邊景點與順路行程'
  ]);
  const about = page.locator('#about-attraction');
  const basic = page.locator('#basic-info');
  await about.scrollIntoViewIfNeeded();
  await expect(about).toBeVisible();
  const manager = page.locator('section[aria-labelledby="about-attraction"] .attraction-operator a');
  await expect(manager).toHaveText('內政部國家公園署金門國家公園管理處');
  await expect(manager).toHaveAttribute('href', 'https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/40');
  await expect(page.locator('.attraction-basic')).toContainText('管理單位');
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
  // Preserve the original editorial topics AFTER the FAQ and BEFORE nearby attractions.
  const restoredTopics = [
    '出發前怎麼查開放？', '值得停下來看的風景', '怎麼排進一天',
    '拍照、親子與雨天', '從戰時運補，看見坑道的尺度', '已結束的活動公告'
  ];
  const extendedHeadings = await page.locator('article.article-body h2, article.article-body h3').allTextContents();
  const faqIndex = extendedHeadings.indexOf('遊客資訊與常見問答');
  const nextSectionIndex = extendedHeadings.indexOf('現地遊覽與行程延伸');
  const nearIndex = extendedHeadings.indexOf('周邊景點與順路行程');
  expect(faqIndex).toBeGreaterThan(-1);
  expect(nextSectionIndex).toBe(faqIndex + 1);
  expect(nearIndex).toBe(nextSectionIndex + restoredTopics.length + 1);
  expect(extendedHeadings.slice(nextSectionIndex + 1, nearIndex)).toEqual(restoredTopics);
  expect(extendedHeadings.filter(text => text === '遊客資訊與常見問答')).toHaveLength(1);
  await expect(page.locator('article.article-body')).toContainText('1960年代');
  await expect(page.locator('article.article-body')).toContainText('金門國家公園管理處的最新公告');
  await noHorizontalOverflow();

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://kinmenguide.com/attractions/zhaishan-tunnel/');
  await expect(page).toHaveTitle('翟山坑道｜金門旅遊實用攻略 | Kinmen Guide');
  const description = '走入金門山腹，探索戰時運補水道與A字形地下工程。整理翟山坑道的參觀建議、基本資料、交通與地景，搭配金城南線安排行程。';
  await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', description);
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', description);
  const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  const graph = schemas.flatMap(text => JSON.parse(text)['@graph'] ?? []);
  expect(graph.some(node => node['@type'] === 'TouristAttraction')).toBe(true);
  const faqSchema = graph.filter(node => node['@type'] === 'FAQPage');
  expect(faqSchema).toHaveLength(1);
  const visibleFaq = await page.locator('article.article-body details').evaluateAll(details =>
    details.map(detail => ({
      question: detail.querySelector('summary')?.textContent?.trim(),
      answer: detail.querySelector('p')?.textContent?.trim()
    })));
  expect(visibleFaq).toHaveLength(2);
  expect(faqSchema[0].mainEntity.map((item: { name: string; acceptedAnswer: { text: string } }) =>
    ({ question: item.name, answer: item.acceptedAnswer.text }))).toEqual(visibleFaq);
  for (const detail of await page.locator('article.article-body details').all()) {
    await detail.locator('summary').click();
    await expect(detail.locator('p')).toBeVisible();
  }
  await noHorizontalOverflow();

  const creditsResponse = await page.goto('/credits/#zhaishan');
  expect(creditsResponse?.status()).toBe(200);
  await expect(page.locator('#zhaishan')).toHaveCount(1);
  await expect(page.locator('#zhaishan')).toBeVisible();
});

test('detail pilot does not opt other collections or attractions in', async ({ page }) => {
  // All fixtures correspond to existing Markdown entries, not inferred routes.
  for (const url of [
    '/attractions/shuitou-village/',
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
