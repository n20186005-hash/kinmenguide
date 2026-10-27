import { test, expect, type Page } from '@playwright/test';
import fs from 'node:fs/promises';
import sharp from 'sharp';
import { parseTrip, TRIP_KEY } from '../src/lib/trip-store';
import type { Place } from '../src/lib/trip-image';
import { canPlanBusiness, canShowBusinessReference, governmentRegistrationUrl } from '../src/lib/business-eligibility';

test('source-reported operation and generic government pages cannot authorize lodging planning', () => {
  const lodging = { kind: 'hotel', status: { state: 'operating' }, facts: {
    actualOperationStatus: { value: 'unverified' }, registrationStatus: { value: 'government-listed' },
  } };
  expect(canPlanBusiness(lodging)).toBeFalsy();
  expect(canShowBusinessReference(lodging)).toBeTruthy();
  const historical = { ...lodging, facts: { ...lodging.facts, registrationStatus: { value: 'historical-only' } } };
  expect(canPlanBusiness(historical)).toBeFalsy();
  expect(canShowBusinessReference(historical)).toBeFalsy();
  expect(canPlanBusiness({ ...lodging, facts: { ...lodging.facts, actualOperationStatus: { value: 'operating' } } })).toBeTruthy();
  expect(canPlanBusiness({ kind: 'food', status: { state: 'operating' } })).toBeTruthy();
  expect(governmentRegistrationUrl('https://www.taiwanstay.net.tw/TSA/web_page/TSA020200.jsp?hohi_id=19980')).toBeTruthy();
  for (const value of ['https://kmtd.kinmen.gov.tw/', 'https://www.kinmen.gov.tw/News_Content.aspx?s=anything', 'https://kinmen.travel/zh-tw/accommodation/details/1464', 'https://www.taiwanstay.net.tw/TSA/web_page/TSA010100.jsp', 'https://www.taiwanstay.net.tw/TSA/web_page/TSA020200.jsp']) expect(governmentRegistrationUrl(value)).toBeFalsy();
});

async function merchantCatalog(page: Page) {
  const catalog = await page.locator('#trip-catalog').evaluate(element => JSON.parse(element.textContent!) as Place[]);
  const food = catalog.find(place => place.kind === 'food');
  const hotel = catalog.find(place => place.kind === 'hotel');
  expect(food, 'public food businesses must be available in the trip catalog').toBeTruthy();
  expect(hotel, 'public hotels must be available in the trip catalog').toBeTruthy();
  return { catalog, food: food!, hotel: hotel! };
}

test('trip parser migrates legacy attractions and keeps distinct namespaced identities', () => {
  const legacy = parseTrip(JSON.stringify({ version: 1, title: '原有行程', days: 3, stops: [
    { id: 'shared-place', day: 2, time: '10:30', note: '保留舊備註' },
    { id: 'food:shared-place', day: 1 }, { id: 'hotel:shared-place', day: 1 },
  ] }));
  expect(legacy.version).toBe(2);
  expect(legacy.stops).toEqual([{ id: 'shared-place', day: 2, time: '10:30', note: '保留舊備註' }]);
  const migrated = parseTrip(JSON.stringify({ ...legacy, stops: [...legacy.stops,
    { id: 'food:shared-place', day: 1 }, { id: 'hotel:shared-place', day: 3 },
    { id: 'food:shared-place', day: 2 }, { id: 'unknown:shared-place', day: 1 },
    { id: 'food:shared-place:extra', day: 1 },
  ] }));
  expect(migrated.stops.map(stop => stop.id)).toEqual(['shared-place', 'food:shared-place', 'hotel:shared-place']);
  expect(migrated.stops[0]).toEqual(legacy.stops[0]);
});

test('legacy saved attractions and accommodation survive while unverified stays cannot be newly added', async ({ page }) => {
  await page.addInitScript(key => {
    if (!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify({ version: 1, title: '原有的金門假期', days: 4,
      stops: [{ id: 'juguang-tower', day: 3, time: '10:30', note: '舊的備註' }] }));
  }, TRIP_KEY);
  await page.goto('/trip/');
  const { food, hotel } = await merchantCatalog(page);
  await expect(page.locator('[data-stop="juguang-tower"] [data-field="note"]')).toHaveValue('舊的備註');
  // Reading the legacy record must not replace it before the first edit.
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key)!).version, TRIP_KEY)).toBe(1);
  await page.goto('/food/');
  await page.locator(`[data-trip-add="${food.id}"]`).click();
  await page.goto('/hotels/');
  await expect(page.locator(`[data-trip-add="${hotel.id}"]`)).toHaveCount(0);
  await page.evaluate(({ key, id }) => {
    const prior = JSON.parse(localStorage.getItem(key)!);
    prior.stops.push({ id, day: 2, time: '18:00', note: '先前收藏的住宿' });
    localStorage.setItem(key, JSON.stringify(prior));
  }, { key: TRIP_KEY, id: hotel.id });
  await page.goto('/trip/');
  await expect(page.locator('.trip-stop')).toHaveCount(3);
  await expect(page.locator('#trip-title')).toHaveValue('原有的金門假期');
  await expect(page.locator('#trip-days')).toHaveValue('4');
  await expect(page.locator('[data-day="3"] [data-stop="juguang-tower"] [data-field="time"]')).toHaveValue('10:30');
  await expect(page.locator(`[data-stop="${food.id}"]`)).toContainText('餐飲');
  await expect(page.locator(`[data-stop="${hotel.id}"]`)).toContainText('住宿');
  await expect(page.locator(`[data-stop="${hotel.id}"]`)).toContainText('待確認');
  await expect(page.locator(`[data-stop="${hotel.id}"] [data-field="note"]`)).toHaveValue('先前收藏的住宿');
  await expect(page.locator(`[data-stop="${hotel.id}"]`)).toContainText('不代表完成訂房');
  const saved = await page.evaluate(key => JSON.parse(localStorage.getItem(key)!), TRIP_KEY);
  expect(saved.version).toBe(2);
  expect(saved.stops.map((stop: { id: string }) => stop.id)).toEqual(['juguang-tower', food.id, hotel.id]);
  await page.reload();
  await expect(page.locator('.trip-stop')).toHaveCount(3);
});

test('mixed PNG export labels every kind, uses conditional duration and invalidates on edits', async ({ page }) => {
  await page.addInitScript(() => {
    const original = CanvasRenderingContext2D.prototype.fillText;
    (window as any).tripDrawn = [];
    CanvasRenderingContext2D.prototype.fillText = function(text, x, y, maxWidth) {
      (window as any).tripDrawn.push(text);
      if (maxWidth === undefined) original.call(this, text, x, y);
      else original.call(this, text, x, y, maxWidth);
    };
  });
  await page.goto('/trip/');
  const { catalog, food, hotel } = await merchantCatalog(page);
  const attraction = catalog.find(place => place.id === 'juguang-tower')!;
  await page.evaluate(({ key, ids }) => {
    localStorage.setItem(key, JSON.stringify({ version: 2, title: '住吃玩金門', days: 3,
      stops: ids.map((id, index) => ({ id, day: index + 1, time: '12:00', note: '' })) }));
  }, { key: TRIP_KEY, ids: [attraction.id, food.id, hotel.id] });
  await page.reload();
  await expect(page.locator('.trip-stop')).toHaveCount(3);
  await expect(page.locator(`[data-stop="${food.id}"]`)).not.toContainText('建議停留');
  await expect(page.locator(`[data-stop="${hotel.id}"]`)).not.toContainText('建議停留');
  await page.locator('#trip-export').click();
  await expect(page.locator('#trip-image-list img')).toHaveCount(1);
  const drawn: string[] = await page.evaluate(() => (window as any).tripDrawn);
  expect(drawn).toContain('kinmenguide.com');
  expect(drawn).toContain(`景點 · ${attraction.area} · 建議停留 ${attraction.duration}`);
  expect(drawn).toContain(`餐飲 · ${food.area}`);
  expect(drawn).toContain(`住宿 · ${hotel.area}${hotel.canPlan === false ? ' · 待確認' : ''}`);
  expect(drawn.some(text => text.includes('3 個站點'))).toBeTruthy();
  expect(drawn.some(text => /undefined|null/.test(text))).toBeFalsy();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: '下載第 1 張 PNG' }).click();
  const download = await downloadPromise;
  const metadata = await sharp(await fs.readFile((await download.path())!)).metadata();
  expect(metadata.format).toBe('png');
  expect(metadata.width).toBe(1080);
  expect(metadata.height).toBe(1340);
  await page.locator(`[data-stop="${food.id}"] [data-field="note"]`).fill('<img src=x onerror=alert(1)>');
  await expect(page.locator('#trip-images')).toBeHidden();
  await expect(page.locator('#trip-image-list img')).toHaveCount(0);
  await page.locator('#trip-export').click();
  await expect(page.locator('#trip-images')).toBeVisible();
  await page.locator(`[data-stop="${hotel.id}"] [data-field="day"]`).selectOption('1');
  await expect(page.locator('#trip-images')).toBeHidden();
  await expect(page.locator('#trip-day-list img')).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});

test('mixed stops support reorder, undo, pending saved IDs and cross-tab preview invalidation', async ({ page, context }) => {
  await page.goto('/trip/');
  const { food, hotel } = await merchantCatalog(page);
  await page.evaluate(({ key, ids }) => localStorage.setItem(key, JSON.stringify({ version: 2, title: '混合站點', days: 2,
    stops: ids.map(id => ({ id, day: 1, time: '', note: '' })) })), {
    key: TRIP_KEY, ids: ['juguang-tower', food.id, hotel.id, 'food:removed-business', food.id],
  });
  await page.reload();
  await expect(page.locator('.trip-stop')).toHaveCount(4);
  await expect(page.locator('[data-stop="food:removed-business"]')).toContainText('原有收藏資料待確認');
  await page.locator(`[data-stop="${hotel.id}"] [data-action="up"]`).click();
  await expect(page.locator('.trip-stop').nth(1)).toHaveAttribute('data-stop', hotel.id);
  await page.locator(`[data-stop="${food.id}"] [data-action="remove"]`).click();
  await expect(page.locator('.trip-stop')).toHaveCount(3);
  await page.locator('#trip-undo').click();
  await expect(page.locator('.trip-stop')).toHaveCount(4);
  await page.locator('#trip-export').click();
  await expect(page.locator('#trip-images')).toBeVisible();
  const other = await context.newPage();
  await other.goto('/trip/');
  await other.locator(`[data-stop="${hotel.id}"] [data-field="note"]`).fill('確認入住時間');
  await expect(page.locator(`[data-stop="${hotel.id}"] [data-field="note"]`)).toHaveValue('確認入住時間');
  await expect(page.locator('#trip-images')).toBeHidden();
  await other.close();
});
