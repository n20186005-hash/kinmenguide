import {test,expect} from '@playwright/test';
test('Fuji photograph identifies photographer and unresolved license honestly',async({page})=>{
 await page.goto('/attractions/fengshang-fuji-temple/');const image=page.locator('.article-cover img');await expect(image).toHaveCount(1);
 await expect.poll(()=>image.evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBe(true);
 await expect(page.locator('.article-cover figcaption')).toContainText('2026年1月');
 await expect(page.locator('.article-cover figcaption')).toContainText('TONY YAN');
 await expect(page.locator('article.article-body')).toContainText('本站已收錄Google Maps標示2026年1月、TONY YAN提供的本廟正殿歷史照片');
 await expect(page.locator('article.article-body')).toContainText('影像不證明今日開放或准入');
 await expect(page.locator('article.article-body')).not.toContainText('維持原無主圖狀態');
 await page.locator('.article-cover a').click();const row=page.locator('#place-fengshang-fuji-temple');
 await expect(row).toContainText('來源未標示再利用許可');await expect(row).toContainText('不代表攝影者授予再利用許可');
 await expect(row.getByRole('link',{name:'來源頁',exact:true})).toHaveAttribute('href',/CIABIhBv7F56mYrZKxnzGsyVV8ZG/);
 await row.scrollIntoViewIfNeeded();await expect.poll(()=>row.locator('img').evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBe(true);
 await row.screenshot({path:`/tmp/fuji-photo-${test.info().project.name}-credits.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
