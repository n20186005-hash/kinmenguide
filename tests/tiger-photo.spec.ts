import {test,expect} from '@playwright/test';
test('Tiger fortress photograph identifies photographer and unresolved license honestly',async({page})=>{
 await page.goto('/attractions/tiger-fort/');const image=page.locator('.article-cover img');await expect(image).toHaveCount(1);
 await expect.poll(()=>image.evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBe(true);
 await expect(page.locator('.article-cover figcaption')).toContainText('2020年12月');
 await expect(page.locator('.article-cover figcaption')).toContainText('bio810 Chang');
 await expect(page.locator('article.article-body')).toContainText('勿自行進入營區');
 await expect(page.locator('article.article-body')).toContainText('不要跨越');
 await page.locator('.article-cover a').click();const row=page.locator('#place-tiger-fort');
 await expect(row).toContainText('來源未標示再利用許可');await expect(row).toContainText('不代表攝影者授予再利用許可');
 await expect(row.getByRole('link',{name:'來源頁',exact:true})).toHaveAttribute('href',/CIHM0ogKEICAgIDiob2AeQ/);
 await row.scrollIntoViewIfNeeded();await expect.poll(()=>row.locator('img').evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBe(true);
 await row.screenshot({path:`/tmp/tiger-photo-${test.info().project.name}-credits.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
