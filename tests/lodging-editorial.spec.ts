import { test, expect } from '@playwright/test';

const guides = [
  { path: '/hotels/kinmen-pet-friendly-stay/', stays: [['/hotels/lishe-homestay/', 'https://t.ctrip.cn/uxIXpUy'], ['/hotels/xiang-pin-yuan/', 'https://t.ctrip.cn/nNJKQXY']] },
  { path: '/hotels/kinmen-laundry-long-stay/', stays: [['/hotels/tipsy-hotel/', 'https://t.ctrip.cn/yVESf7h'], ['/hotels/wagui-bnb/', 'https://t.ctrip.cn/8YPNVvg']] },
  { path: '/hotels/kinmen-flight-cancel-stay-plan/', stays: [['/hotels/823-hotel/', 'https://t.ctrip.cn/8imKMdT'], ['/hotels/haifu-business-hotel/', 'https://t.ctrip.cn/7683ieU']] },
  { path: '/hotels/kinmen-whole-house-booking/', stays: [['/hotels/yuntian-bnb/', 'https://t.ctrip.cn/l1wPDLu'], ['/hotels/happy-house-bnb/', 'https://t.ctrip.cn/9LlcLjN']] },
  { path: '/hotels/kinmen-senior-stay-stairs/', stays: [['/hotels/jinlu-second/', 'https://t.ctrip.cn/6fWK8GO'], ['/hotels/shanhou-65-bnb/', 'https://t.ctrip.cn/5Wkvp8w']] },
  { path: '/hotels/kinmen-late-ferry-stay/', stays: [['/hotels/haifu-business-hotel/', 'https://t.ctrip.cn/7683ieU'], ['/hotels/chang-hong-hotel/', 'https://t.ctrip.cn/bJZAJeC'], ['/hotels/shuitou-ancient-water-tower/', 'https://t.ctrip.cn/0D2Ypf5']] },
  { path: '/hotels/kinmen-no-car-stay/', stays: [['/hotels/haifu-business-hotel/', 'https://t.ctrip.cn/7683ieU']] },
  { path: '/hotels/kinmen-five-townships-stay-comparison/', stays: [['/hotels/haifu-business-hotel/', 'https://t.ctrip.cn/7683ieU'], ['/hotels/823-hotel/', 'https://t.ctrip.cn/8imKMdT'], ['/hotels/shanhou-65-bnb/', 'https://t.ctrip.cn/5Wkvp8w'], ['/hotels/cicada-greece/', 'https://t.ctrip.cn/vMUXr9h'], ['/hotels/jindian-bnb/', 'https://t.ctrip.cn/uFzh6IY']] },
  { path: '/hotels/kinmen-ferry-shuitou-jincheng/', stays: [['/hotels/shuitou-ancient-water-tower/', 'https://t.ctrip.cn/0D2Ypf5'], ['/hotels/haifu-business-hotel/', 'https://t.ctrip.cn/7683ieU']] },
  { path: '/hotels/kinmen-breakfast-stay-choice/', stays: [['/hotels/golden-lake-hotel/', 'https://t.ctrip.cn/yAdrsGO'], ['/hotels/beishan-hostel/', 'https://t.ctrip.cn/hIR0IuE']] },
  { path: '/hotels/guningtou-overnight/', stays: [['/hotels/beishan-hostel/', 'https://t.ctrip.cn/hIR0IuE']] },
  { path: '/hotels/lieyu-overnight-comparison/', stays: [['/hotels/jindian-bnb/', 'https://t.ctrip.cn/uFzh6IY']] },
  { path: '/hotels/family/', stays: [['/hotels/823-hotel/', 'https://t.ctrip.cn/8imKMdT'], ['/hotels/shanhou-65-bnb/', 'https://t.ctrip.cn/5Wkvp8w'], ['/hotels/haifu-garden-hotel/', 'https://t.ctrip.cn/y6qog33'], ['/hotels/haifu-business-hotel/', 'https://t.ctrip.cn/7683ieU']] },
  { path: '/hotels/near-airport/', stays: [['/hotels/823-hotel/', 'https://t.ctrip.cn/8imKMdT'], ['/hotels/summer-inn/', 'https://t.ctrip.cn/01DpKwL'], ['/hotels/cicada-greece/', 'https://t.ctrip.cn/vMUXr9h']] },
  { path: '/hotels/kinmen-traditional-house-room-choice/', stays: [['/hotels/first-floor-hostel/', 'https://t.ctrip.cn/y1csOVP'], ['/hotels/shanhou-65-bnb/', 'https://t.ctrip.cn/5Wkvp8w'], ['/hotels/golden-lake-hotel/', 'https://t.ctrip.cn/yAdrsGO']] },
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
