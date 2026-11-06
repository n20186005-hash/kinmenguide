import {test,expect} from '@playwright/test';
test('Cai shrine photo preserves orientation and attribution',async({page})=>{
 await page.goto('/attractions/qionglin-cai-ancestral-hall/');
 const img=page.locator('.article-cover img');await expect(img).toHaveCount(1);
 await expect(img).toHaveAttribute('alt','2019年瓊林13號蔡氏十一世宗祠正立面、燕尾屋脊與燈籠');
 const size=await img.evaluate((i:HTMLImageElement)=>({width:i.naturalWidth,height:i.naturalHeight,complete:i.complete}));
 expect(size.complete).toBe(true);expect(size.width).toBeGreaterThan(size.height);
 await expect(page.locator('.article-cover figcaption')).toContainText('歷史照片不代表目前開放或可入內');
 await page.screenshot({path:`/tmp/cai-photo-${test.info().project.name}-detail.png`,fullPage:true});
 await page.locator('.article-cover a').click();const row=page.locator('#place-qionglin-cai-ancestral-hall');
 await expect(row).toContainText('Koala0090');await expect(row).toContainText('CC BY-SA 4.0');
 await expect(row.getByRole('link',{name:'來源頁',exact:true})).toHaveAttribute('href','https://commons.wikimedia.org/wiki/File:瓊林蔡氏家廟_01.jpg');
 await expect(row.getByRole('link',{name:'授權條款',exact:true})).toHaveAttribute('href','https://creativecommons.org/licenses/by-sa/4.0/');
 expect(await row.locator('img').evaluate((i:HTMLImageElement)=>i.naturalWidth>i.naturalHeight&&i.complete)).toBe(true);
 await row.screenshot({path:`/tmp/cai-photo-${test.info().project.name}-credits.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
