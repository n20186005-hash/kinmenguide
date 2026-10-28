import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import { BUSINESS_PAGE_SIZE } from '../src/lib/business-directory';
const records = JSON.parse(fs.readFileSync('src/data/businesses.json', 'utf8')).records;
const group = (kind: string) => records.filter((b: any) => b.kind === kind);
const firstPageCount = (items: any[]) => Math.min(items.length, BUSINESS_PAGE_SIZE);

test('lodging selection combines town, class and verified facilities without merging branches', async ({ page }) => {
  await page.goto('/hotels/');
  const directory = page.locator('[data-business-directory]');
  await expect(directory.locator('[data-business-card]')).toHaveCount(group('hotel').length);
  await directory.getByLabel('所在地區').selectOption('lieyu');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(group('hotel').filter((b: any) => b.area === 'lieyu')));
  await expect(directory.locator('#business-jindian-bnb')).toContainText('278號');
  await expect(directory.locator('#business-jindian-bnb-2')).toContainText('723號');
  await directory.getByLabel('電梯', { exact: true }).check();
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(group('hotel').filter((b: any) => b.area === 'lieyu' && b.filterFacts?.includes('elevator'))));
  await expect(directory.locator('#business-jindian-bnb-2')).toBeVisible();
  await expect(directory.locator('#business-jindian-bnb-2')).toContainText('未推定所有房間或衛浴均無障礙');
  await directory.getByLabel('政府登記類別').selectOption('homestay');
  await directory.getByLabel('店名或地址').fill('35-7');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(1);
  await expect(directory.locator('#business-jindian-bnb-2')).toBeVisible();
  await directory.locator('[data-business-reset]').first().click();
  await expect(directory.locator('[data-business-facility]:checked')).toHaveCount(0);
  await directory.getByLabel('政府登記類別').selectOption('hotel');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(group('hotel').filter((b: any) => b.lodgingClass === 'hotel')));
  for (const input of await directory.locator('[data-business-facility]').all()) {
    const fact = await input.getAttribute('value');
    expect(group('hotel').some((b: any) => b.filterFacts?.includes(fact))).toBeTruthy();
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});

test('food discovery combines category and town, handles no results and omits conflicted phone', async ({ page }) => {
  await page.goto('/food/');
  const directory = page.locator('[data-business-directory]');
  await expect(directory.locator('[data-business-card]')).toHaveCount(group('food').length);
  await directory.getByLabel('所在地區').selectOption('jinsha');
  await directory.getByLabel('餐飲類型').selectOption('dessert');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(group('food').filter((b: any) => b.area === 'jinsha' && b.category === 'dessert')));
  await expect(directory.locator('#business-xishangmei-ice')).toBeVisible();
  await expect(directory.locator('#business-xishangmei-ice a[href^="tel:"]')).toHaveCount(0);
  await directory.getByLabel('店名或地址').fill('this-place-does-not-exist');
  await expect(directory.locator('[data-business-empty]')).toBeVisible();
  await directory.locator('[data-business-empty] button').click();
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(group('food')));
  await directory.getByLabel('店名或地址').fill('良金');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(group('food').filter((b: any) => [b.name, ...(b.aliases || []), b.address].join(' ').includes('良金'))));
  await expect(directory.locator('#business-liangjin-factory a[href="/food/liangjin-ranch/"]')).toHaveCount(2);
  await expect(directory.locator('#business-liangjin-paifang a[href="/food/liangjin-paifang/"]')).toHaveCount(2);
});

test('business map switches layers and keeps unverified coordinates out of markers', async ({ page }) => {
  await page.goto('/map/');
  await expect(page.locator('#map-count')).toHaveText('162 個景點');
  await page.getByRole('button', { name: '住宿', exact: true }).click();
  await expect(page.locator('.map-point:visible')).toHaveCount(group('hotel').length);
  await expect(page.locator('#map-pin-count')).toContainText('沒有可確認及復用的坐標');
  await expect(page.locator('[data-map-marker][data-kind="hotel"]')).toHaveCount(0);
  await expect(page.locator('.map-point:visible [data-pin]')).toHaveCount(0);
  await expect(page.locator('#kinmen-map')).not.toHaveAttribute('src', /.+/);
  await page.getByRole('button', { name: '烈嶼', exact: true }).click();
  await expect(page.locator('.map-point:visible')).toHaveCount(group('hotel').filter((b: any) => b.area === 'lieyu').length);
  await page.getByRole('button', { name: '餐飲', exact: true }).click();
  await expect(page.locator('.map-point:visible')).toHaveCount(group('food').filter((b: any) => b.area === 'lieyu').length);
  await expect(page.locator('.map-point:visible [data-map-location-link]').first()).toHaveAttribute('href', /query=/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});

test('public directories are readable without JavaScript and cross-links reach the correct branch', async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: testInfo.project.use.viewport });
  const page = await context.newPage();
  await page.goto('/hotels/');
  await expect(page.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(group('hotel')));
  await expect(page.locator('#business-golden-lake-hotel')).toContainText('金門縣旅館034號');
  await expect(page.locator('#business-golden-lake-hotel').getByRole('link', { name: records.find((b: any) => b.id === 'golden-lake-hotel').facts?.websiteSource ? '政府資料所列網站' : '業者網站', exact: true })).toHaveAttribute('href', 'https://www.goldenlakehotel.com/');
  await page.goto('/food/');
  await expect(page.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(group('food')));
  await expect(page.locator('[data-business-form]')).toBeHidden();
  const batches = page.locator('[data-business-batch]');
  if (group('food').length > BUSINESS_PAGE_SIZE) {
    await batches.nth(1).locator(':scope > summary').click();
    await expect(page.locator('[data-business-card]:visible')).toHaveCount(Math.min(group('food').length, BUSINESS_PAGE_SIZE * 2));
  }
  await expect(page.locator('#business-yuchuan-canteen a[href="/food/yuchuan-canteen/"]').first()).toBeVisible();
  await page.goto('/hotels/jindian-bnb-2/');
  await expect(page.locator('.prose')).toContainText('不同登記字號');
  await expect(page.locator('[aria-label="同區住吃玩安排"] a[href="/food/#business-carnival-ice"]')).toBeVisible();
  await context.close();
});


test('directory pages stay bounded and filtering or reset returns to the first page', async ({ page }) => {
  await page.goto('/food/');
  const directory = page.locator('[data-business-directory]');
  const food = group('food');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(food));
  await expect(directory.locator('[data-business-count]')).toContainText(`找到 ${food.length} 家`);
  if (food.length > BUSINESS_PAGE_SIZE) {
    await directory.getByRole('button', { name: '下一頁', exact: true }).click();
    const expected = food.slice(BUSINESS_PAGE_SIZE, BUSINESS_PAGE_SIZE * 2).map((b: any) => `food:${b.id}`);
    expect(await directory.locator('[data-business-card]:visible').evaluateAll(cards => cards.map(card => (card as HTMLElement).dataset.businessKey))).toEqual(expected);
    await expect(directory.locator('[data-business-count]')).toContainText(`目前顯示 ${BUSINESS_PAGE_SIZE + 1}–${Math.min(BUSINESS_PAGE_SIZE * 2, food.length)} 家`);
    await directory.getByRole('button', { name: '上一頁', exact: true }).click();
    await expect(directory.locator('[data-business-card]:visible').first()).toHaveAttribute('data-business-key', `food:${food[0].id}`);
    await directory.getByRole('button', { name: '下一頁', exact: true }).click();
  }
  await directory.getByLabel('店名或地址').fill('no-business-matches-this-query');
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(0);
  await expect(directory.locator('[data-business-count]')).toContainText('目前顯示 0–0 家');
  await expect(directory.locator('[data-business-pagination]')).toBeHidden();
  await directory.locator('[data-business-empty] button').click();
  await expect(directory.locator('[data-business-card]:visible').first()).toHaveAttribute('data-business-key', `food:${food[0].id}`);
  await expect(directory.getByLabel('所在地區')).toHaveValue('all');
  await expect(directory.getByLabel('餐飲類型')).toHaveValue('all');
  await expect(directory.getByLabel('店名或地址')).toHaveValue('');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});

test('late directory anchors reveal their page, override conflicting filters and retain trip controls', async ({ page }) => {
  const food = group('food');
  const target = food[food.length - 1];
  const conflictingArea = target.area === 'lieyu' ? 'kincheng' : 'lieyu';
  await page.goto(`/food/?area=${conflictingArea}#business-${target.id}`);
  const directory = page.locator('[data-business-directory]');
  const card = directory.locator(`#business-${target.id}`);
  await expect(card).toBeVisible();
  await expect(card).toBeFocused();
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(food.length % BUSINESS_PAGE_SIZE || BUSINESS_PAGE_SIZE);
  if (target.status.state === 'operating') await expect(card.locator('[data-trip-add]')).toHaveAttribute('data-trip-add', `food:${target.id}`);
  await directory.getByLabel('店名或地址').fill('no-business-matches-this-query');
  const other = food[Math.max(0, food.length - 2)];
  await page.evaluate(id => { location.hash = `business-${id}`; }, other.id);
  await expect(directory.locator(`#business-${other.id}`)).toBeVisible();
  await expect(directory.getByLabel('店名或地址')).toHaveValue('');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  if (other.status.state === 'operating') {
    await directory.locator(`#business-${other.id} [data-trip-add]`).click();
    await page.goto('/trip/');
    await expect(page.locator(`[data-stop="food:${other.id}"]`)).toBeVisible();
  }
});

test('without JavaScript a late fragment opens its native directory batch', async ({ browser }, testInfo) => {
  const target = group('food').at(-1);
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: testInfo.project.use.viewport });
  const page = await context.newPage();
  await page.goto(`/food/#business-${target.id}`);
  await expect(page.locator(`#business-${target.id}`)).toBeVisible();
  await expect(page.locator(`#business-${target.id} a[href*="maps/search"]`)).toBeVisible();
  await context.close();
});


test('lodging registration, actual operation and map identity remain separate', async ({ page }) => {
  await page.goto('/hotels/');
  const snapshot = await page.locator('[data-business-card]').evaluateAll(cards => cards.map(card => ({
    id: card.id, text: card.textContent || '',
    registration: card.querySelector('[data-business-registration-status]')?.getAttribute('data-business-registration-status'),
    operation: card.querySelector('[data-business-actual-operation]')?.getAttribute('data-business-actual-operation'),
    canPlan: Boolean(card.querySelector('[data-trip-add]')),
    mapUrl: card.querySelector('[data-business-verified-map]')?.getAttribute('href'),
    searchUrl: card.querySelector('[data-business-address-search]')?.getAttribute('href'),
  })));
  const byId = new Map(snapshot.map(card => [card.id, card]));
  for (const record of group('hotel')) {
    const card = byId.get(`business-${record.id}`)!;
    expect(card.registration).toBe(record.facts?.registrationStatus?.historical ? 'historical-only' : record.facts?.registrationStatus?.value || 'pending');
    if (card.registration === 'historical-only') expect(card.text).toContain('目前登記狀態待核實（僅有歷史底冊）');
    const operation = record.facts?.actualOperationStatus?.historical ? 'unverified' : record.facts?.actualOperationStatus?.value || 'unverified';
    expect(card.operation).toBe(operation === 'unverified' ? undefined : operation);
    const canPlan = record.facts?.actualOperationStatus?.value === 'operating' && !record.facts.actualOperationStatus.historical && record.facts?.registrationStatus?.value === 'government-listed' && !record.facts.registrationStatus.historical;
    expect(card.canPlan).toBe(Boolean(canPlan));
    const mapCid = record.facts?.verifiedMapCid;
    expect(card.mapUrl).toBe(mapCid?.value && !mapCid.historical ? `https://www.google.com/maps?cid=${mapCid.value}` : undefined);
    expect(card.searchUrl).toMatch(/maps\/search\/\?api=1&query=/);
  }
});

test('evidenced lodging form filters independently of government class and clears on reset', async ({ page }) => {
  await page.goto('/hotels/');
  const directory = page.locator('[data-business-directory]');
  const evidenced = group('hotel').filter((b: any) => typeof b.facts?.lodgingStyle?.value === 'string' && !b.facts.lodgingStyle.historical);
  if (!evidenced.length) {
    await expect(directory.locator('[data-business-style]')).toHaveCount(0);
    return;
  }
  const form = evidenced[0].facts.lodgingStyle.value;
  const expected = evidenced.filter((b: any) => b.facts.lodgingStyle.value === form);
  await directory.getByLabel('住宿形式', { exact: true }).selectOption(form);
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(expected));
  const category = expected[0].lodgingClass;
  await directory.getByLabel('政府登記類別').selectOption(category);
  await expect(directory.locator('[data-business-card]:visible')).toHaveCount(firstPageCount(expected.filter((b: any) => b.lodgingClass === category)));
  await directory.locator('[data-business-reset]').first().click();
  await expect(directory.getByLabel('住宿形式', { exact: true })).toHaveValue('all');
  await expect(directory.getByLabel('政府登記類別')).toHaveValue('all');
});

test('attraction links retain current lodging references without presenting unknown operation as plannable', async ({ page }) => {
  await page.goto('/attractions/chen-jinglan-house/');
  const references = page.locator('[data-lodging-reference]');
  expect(await references.count()).toBeGreaterThan(0);
  await expect(references.first()).toContainText('入住服務待確認');
  await expect(references.locator('[data-trip-add]')).toHaveCount(0);
  for (const key of await references.evaluateAll(items => items.map(item => item.getAttribute('data-lodging-reference')))) {
    const record = group('hotel').find((b: any) => `hotel:${b.id}` === key);
    expect(record, `Reference must identify a real public lodging record: ${key}`).toBeTruthy();
    expect(record.facts?.registrationStatus?.value).toBe('government-listed');
  }
});
