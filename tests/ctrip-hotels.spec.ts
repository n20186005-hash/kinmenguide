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
  await root.getByLabel('店名或地址').fill('里舍民宿');
  await expect(root.locator('#business-lodging-3a2dd3d5ac9f')).toBeVisible();
  await expect(card.locator('[data-business-actual-operation="unverified"]')).toHaveCount(0);
  for (const id of ['lodging-fd9dfbb1c47c', 'lodging-1e91f275984b', 'lodging-47adb41f91ad']) {
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
  await expect(page.locator('#business-county-1181 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-shanchun .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-county-3915 .alert-note')).toContainText('4歲及以上');
  await expect(page.locator('#business-county-1166 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-jinsha-lakeside-hotel .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-a47d6396d342 .alert-note')).toContainText('2歲及以上');
  await expect(page.locator('#business-golden-sands-resort .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-county-3960 .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-maogongshi .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-maogongshi .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-59130f8e4118 .alert-note')).toContainText('提前1天');
  await expect(page.locator('#business-lodging-c72f26124873 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-7f8e8a9e089f .alert-note')).toContainText('電話不同');
  await expect(page.locator('#business-lodging-35866da3b082 .alert-note')).toContainText('沒有電梯');
  await expect(page.locator('#business-lodging-f771fb8c92a7 .alert-note')).toContainText('提前1天');
  await expect(page.locator('#business-lodging-a88d5c9388f5 .alert-note')).toContainText('兒童入住資格');
  await expect(page.locator('#business-lodging-42e7086cbfc7 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-2a253d2393a5 .alert-note')).toContainText('共用衛浴');
  await expect(page.locator('#business-lodging-67dfc15ac51c .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-03d385c33de4 .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-lodging-c95a08510a41 .alert-note')).toContainText('提前1天');
  await expect(page.locator('#business-lodging-2b20a2b6e926 .alert-note')).toContainText('年滿12歲');
  await expect(page.locator('#business-lodging-6700d9c439b9 .alert-note')).toContainText('不供早餐');
  await expect(page.locator('#business-lodging-224b9284ecf4 .alert-note')).toContainText('2歲及以上');
  await expect(page.locator('#business-lodging-bccb107817c6 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-a1ffbac64549 .alert-note')).toContainText('提前1天');
  await expect(page.locator('#business-lodging-2a0e4f4fb571 .alert-note')).toContainText('電話不同');
  await expect(page.locator('#business-lodging-13d1dc50055f .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-487ad012e43d .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-shan-shi .alert-note')).toContainText('提前一天');
  await expect(page.locator('#business-wugui .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-lodging-60b96ae8f6fb .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-lodging-24343c071d4d .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-ae01a6dccded .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-180056dc5a8f .alert-note')).toContainText('年滿12歲');
  await expect(page.locator('#business-lodging-b5ecaaf75b3d .alert-note')).toContainText('年滿12歲');
  await expect(page.locator('#business-lodging-0b6e8dfd0ad2 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-3a2dd3d5ac9f .alert-note')).toContainText('5歲及以上');
  await expect(page.locator('#business-lodging-bce0a671404d .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-40273257f304 .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-lodging-e2892303e852 .alert-note')).toContainText('提前一天');
  await expect(page.locator('#business-lodging-d33d6565cbc5 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-1e20aeb094a7 .alert-note')).toContainText('提前三天');
  await expect(page.locator('#business-lodging-d425ee0f685d .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-837b023d7fec .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-lodging-8ecf12146482 .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-lodging-42bd46329304 .alert-note')).toContainText('提前一天');
  await expect(page.locator('#business-lodging-dc86078bd4a1 .alert-note')).toContainText('提前一天');
  await expect(page.locator('#business-lodging-363f38c2b862 .alert-note')).toContainText('7歲及以上');
  await expect(page.locator('#business-lodging-7ed24eef9397 .alert-note')).toContainText('前水頭33號');
  await expect(page.locator('#business-lodging-e6fd42440541 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-1597bdd6c6b1 .alert-note')).toContainText('不供早餐');
  await expect(page.locator('#business-lodging-5ed9c993ad7e .alert-note')).toContainText('前水頭121號');
  await expect(page.locator('#business-lodging-74458e599b23 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-edf6bdc45d5a .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-db098c415aec .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-5fc0fe5e6af7 .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-lodging-6cbac6a2a5e6 .alert-note')).toContainText('館別');
  await expect(page.locator('#business-lodging-3ab6505d9c02 .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-lodging-12dec8214b06 .alert-note')).toContainText('提前一天');
  await expect(page.locator('#business-lodging-1f8f40d39b24 .alert-note')).toContainText('提前三天');
  await expect(page.locator('#business-lodging-c2ea4a22eb13 .alert-note')).toContainText('7歲及以上');
  await expect(page.locator('#business-lodging-368160bd74cb .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-1cad03205776 .alert-note')).toContainText('提前一天');
  await expect(page.locator('#business-lodging-2dc00d77e2d4 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-46c67121dc69 .alert-note')).toContainText('僅限18歲');
  await expect(page.locator('#business-lodging-05c5ba905e5c .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-jindian-bnb .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-lodging-5080619d45a4 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-b1b5b10ba5ea .alert-note')).toContainText('年滿12歲');
  await expect(page.locator('#business-county-3746 .alert-note')).toContainText('年滿12歲');
  await expect(page.locator('#business-lodging-51617dbf4223 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-6c1b7465bde1 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-58efbf0063ae .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-lodging-d1ca7e5b7ee9 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-2e2d77cae7b4 .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-lodging-fbc30a953465 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-8819381196c9 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-ca4e3f26083b .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-3209f5284f72 .alert-note')).toContainText('不可攜帶兒童');
  await expect(page.locator('#business-lodging-7fcc85a2e454 .alert-note')).toContainText('年滿18歲');
  await expect(page.locator('#business-summer-inn .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-ba7fbe91351d .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-d404f3ff7368 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-2afbfc8b9f44 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-68982155956e .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-7959747c13f4 .alert-note')).toContainText('年滿20歲');
  await expect(page.locator('#business-lodging-804cf18cdc30 .alert-note')).toContainText('年滿20歲');
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

test('material booking restrictions appear before the detail booking button', async ({ page }) => {
  for (const [path, text] of [['/hotels/jindian-bnb/', '不可攜帶兒童'], ['/hotels/xiang-pin-yuan/', '年滿20歲'], ['/hotels/old-min-house-3/', '年滿12歲']]) {
    await page.goto(path);
    const notice = page.locator('.ctrip-booking [data-booking-notice]');
    await expect(notice).toContainText(text);
    await expect(page.locator('.ctrip-booking [data-booking-notice] + [data-ctrip-business]')).toHaveCount(1);
  }
});
