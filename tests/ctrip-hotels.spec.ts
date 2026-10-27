import { test, expect } from '@playwright/test';
import { ctripHotels } from '../src/data/ctrip-hotels';
import { businessLinks } from '../src/data/business-links';
import fs from 'node:fs';
const registry = JSON.parse(fs.readFileSync('src/data/businesses.json', 'utf8')) as { records: Array<{ id: string; kind: string; name: string; publication: { href?: string } }> };

test('each matched lodging opens its own article and exposes the verified ordinary Ctrip URL', async ({ page }) => {
  for (const [id, hotel] of Object.entries(ctripHotels)) {
    const business = registry.records.find(b => b.id === id && b.kind === 'hotel');
    expect(business).toBeTruthy();
    const href = business!.publication.href || businessLinks[`hotel:${id}`];
    expect(href).toBeTruthy();
    await page.goto(href);
    await expect(page.locator('h1')).toHaveText(business!.name);
    const link = page.locator(`[data-ctrip-business="${id}"]`).first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', hotel.url);
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(page.locator('body')).toContainText('實際營業');
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
  await expect(card.locator('[data-ctrip-business]')).toHaveAttribute('href', 'https://hotels.ctrip.com/hotels/133042110.html');
  for (const id of ['lodging-fd9dfbb1c47c', 'lodging-59130f8e4118']) {
    await expect(root.locator(`#business-${id} [data-ctrip-business]`)).toHaveCount(0);
  }
});
