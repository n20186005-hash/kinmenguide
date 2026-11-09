import {test,expect} from '@playwright/test';
test('New port terminal photograph keeps identity and unknown date clear',async({page})=>{
 await page.goto('/attractions/kinmen-port-terminal/');const img=page.locator('.article-cover img');await expect(img).toHaveCount(1);
 await expect.poll(()=>img.evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBe(true);
 await expect(page.locator('.article-cover figcaption')).toContainText('拍攝日期未標示');
 await expect(page.locator('.article-cover figcaption')).toContainText('不代表目前施工、營運或准入狀態');
 await expect(page.locator('article.article-body')).toContainText('和西海路一段的原旅客服務中心是不同大樓');
 await page.locator('.article-cover a').click();const row=page.locator('#place-kinmen-port-terminal');
 await expect(row).toContainText('原頁未列個人攝影者');await expect(row).toContainText('金門縣政府觀光處');
 await expect(row.getByRole('link',{name:'來源頁',exact:true})).toHaveAttribute('href','https://www.kinmen.travel/zh-tw/travel/attraction/2169');
 await expect(row.getByRole('link',{name:'授權條款',exact:true})).toHaveAttribute('href','https://kinmen.travel/zh-tw/gwoia');
 await row.scrollIntoViewIfNeeded();await expect.poll(()=>row.locator('img').evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>i.naturalHeight)).toBe(true);
 await row.screenshot({path:`/tmp/port-photo-${test.info().project.name}-credits.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
