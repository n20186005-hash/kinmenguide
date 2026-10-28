import { test, expect } from '@playwright/test';
import { ctripHotels } from '../src/data/ctrip-hotels';
import { canOfferCtrip } from '../src/lib/ctrip';
import { businessLinks } from '../src/data/business-links';
import fs from 'node:fs';
const registry = JSON.parse(fs.readFileSync('src/data/businesses.json', 'utf8')) as { records: Array<{ id: string; kind: string; name: string; publication: { href?: string } }> };

test('closed lodging cannot receive a booking link', () => {
  expect(canOfferCtrip('unverified', 'unverified')).toBeTruthy();
  for (const closed of ['temporary_closed', 'permanently_closed']) {
    expect(canOfferCtrip(closed, 'unverified')).toBeFalsy();
    expect(canOfferCtrip('unverified', closed)).toBeFalsy();
  }
});

test('each matched lodging opens its own article and exposes its checked Ctrip URL', async ({ page }) => {
  test.setTimeout(90_000);
  for (const [id, hotel] of Object.entries(ctripHotels)) {
    const business = registry.records.find(b => b.id === id && b.kind === 'hotel');
    expect(business).toBeTruthy();
    const href = business!.publication.href || businessLinks[`hotel:${id}`];
    expect(href).toBeTruthy();
    await page.goto(href);
    await expect(page.locator('h1')).toHaveText(business!.name);
    const link = page.locator(`[data-ctrip-business="${id}"]`).first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', hotel.affiliate?.url || hotel.url);
    await expect(link).toHaveAttribute('rel', hotel.affiliate ? 'sponsored noopener noreferrer' : 'noopener noreferrer');
    await expect(link).toContainText('查看房型');
    await expect(link).toContainText('預訂房間');
    if (hotel.affiliate) {
      await expect(link.locator('..')).not.toContainText('可能獲得佣金');
      await expect(page.locator('footer [data-affiliate-disclosure]')).toContainText('可能獲得佣金');
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  }
});

test('directory only presents a Ctrip URL for the matched hotel and keeps disputed hotels unlinked', async ({ page }) => {
  await page.goto('/hotels/');
  const root = page.locator('[data-business-directory]');
  await root.getByLabel('店名或地址').fill('麥麥');
  const card = root.locator('#business-lodging-451c01345513');
  await expect(card).toBeVisible();
  await expect(card.locator('a[href="/hotels/maimai-hotel/"]')).not.toHaveCount(0);
  await expect(card.locator('[data-ctrip-business]')).toHaveAttribute('href', ctripHotels['lodging-451c01345513'].affiliate?.url || ctripHotels['lodging-451c01345513'].url);
  await expect(root.locator('[data-affiliate-disclosure]')).toContainText('可能獲得佣金');
  await expect(card.locator('[data-business-actual-operation="unverified"]')).toHaveCount(0);
  for (const id of ['lodging-fd9dfbb1c47c', 'lodging-59130f8e4118', 'lodging-487ad012e43d']) {
    await expect(root.locator(`#business-${id} [data-ctrip-business]`)).toHaveCount(0);
  }
  for (const id of ['registered-homestay-159', 'registered-homestay-383', 'lodging-4a02c5dcb85c']) {
    await expect(root.locator(`#business-${id} [data-ctrip-business]`)).toHaveCount(0);
  }
});

test('lodging booking pages disclose material child and identity-document restrictions', async ({ page }) => {
  await page.goto('/hotels/');
  for (const id of ['lodging-26429c655acd', 'lodging-78a582adea97']) {
    await expect(page.locator(`#business-${id} .alert-note`)).toContainText('不可攜帶兒童');
  }
  await expect(page.locator('#business-registered-homestay-466 .alert-note')).toContainText('中國內地簽發有效居民身分證');
  for (const id of ['lodging-9207a178c46b', 'lodging-5536aadfcf02']) {
    await expect(page.locator(`#business-${id} .alert-note`)).toContainText('中國內地簽發有效居民身分證');
    await expect(page.locator(`#business-${id} .alert-note`)).toContainText('不能代替金門入境資格');
  }
  await expect(page.locator('#business-lodging-9cbc06319012 .alert-note')).toContainText('1歲及以上');
  await expect(page.locator('#business-lodging-e259cd855d70 .alert-note')).toContainText('12至99歲');
  await expect(page.locator('#business-lodging-aa230061fe7e .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-lodging-705fe929edbc .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-lodging-3fabbd2783ad .alert-note')).toContainText('18至65歲');
  await expect(page.locator('#business-lodging-166e6b5be87b .alert-note')).toContainText('年滿18歲');
  for (const id of ['lodging-f79bccd0efdc', 'lodging-9441dacddb61', 'lodging-a632d757026e', 'jindian-bnb-2', 'lodging-451c7cf48d05']) {
    await expect(page.locator(`#business-${id} .alert-note`)).toContainText('不可攜帶兒童');
  }
  await expect(page.locator('#business-beishan-old-house .alert-note')).toContainText('6歲及以上');
  await expect(page.locator('#business-lodging-a632d757026e .alert-note')).toContainText('12歲');
  for (const path of ['/hotels/zhen-shan-mei/', '/hotels/xiaochen-gucuo/']) {
    await page.goto(path);
    await expect(page.locator('main')).toContainText('不可攜帶兒童');
    await expect(page.locator('[data-ctrip-business]').first()).toBeVisible();
  }
  await page.goto('/hotels/tomato-red-classical/');
  await expect(page.locator('main')).toContainText('僅接待持有中國內地簽發有效居民身分證');
  await expect(page.locator('main')).toContainText('年滿20歲');
  await expect(page.locator('main')).toContainText('不能代替金門入境規定');
  await expect(page.locator('main')).toContainText('目前國家合法旅宿登記尚未匹配');
});
