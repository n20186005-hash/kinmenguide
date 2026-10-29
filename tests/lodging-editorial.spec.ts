import { test, expect } from '@playwright/test';

const guides = [
  { path: '/hotels/family/', stays: [['/hotels/823-hotel/', 'https://t.ctrip.cn/8imKMdT'], ['/hotels/shanhou-65-bnb/', 'https://t.ctrip.cn/5Wkvp8w'], ['/hotels/haifu-garden-hotel/', 'https://t.ctrip.cn/y6qog33']] },
  { path: '/hotels/near-airport/', stays: [['/hotels/823-hotel/', 'https://t.ctrip.cn/8imKMdT'], ['/hotels/summer-inn/', 'https://t.ctrip.cn/01DpKwL'], ['/hotels/cicada-greece/', 'https://t.ctrip.cn/vMUXr9h']] },
  { path: '/hotels/kinmen-traditional-house-room-choice/', stays: [['/hotels/first-floor-hostel/', 'https://t.ctrip.cn/y1csOVP'], ['/hotels/shanhou-65-bnb/', 'https://t.ctrip.cn/5Wkvp8w']] },
];

for (const guide of guides) {
  test(`${guide.path} retains reviewed accommodation and booking links`, async ({ page }) => {
    await page.goto(guide.path);
    const article = page.locator('.article-body');
    for (const [detail, affiliate] of guide.stays) {
      await expect(article.locator(`a[href="${detail}"]`).first()).toBeVisible();
      const links = article.locator(`a[href="${affiliate}"]`);
      await expect(links.first()).toBeVisible();
      for (const link of await links.all()) await expect(link).toHaveAttribute('rel', /sponsored/);
    }
    const actualAffiliateLinks = await article.locator('a[href^="https://t.ctrip.cn/"]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute('href')))].sort());
    expect(actualAffiliateLinks).toEqual(guide.stays.map(([, affiliate]) => affiliate).sort());
    await expect(article.locator('.area-connections')).toHaveCount(0);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://kinmenguide.com${guide.path}`);
    const width = await page.evaluate(() => ({ document: document.documentElement.scrollWidth, viewport: window.innerWidth }));
    expect(width.document).toBeLessThanOrEqual(width.viewport + 1);
  });
}
