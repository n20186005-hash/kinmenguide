import {test,expect} from '@playwright/test';
test('Beishan mansion historical photo preserves orientation and attribution',async({page})=>{
 await page.goto('/attractions/beishan-old-mansion/');
 const img=page.locator('.article-cover img');await expect(img).toHaveCount(1);
 await expect(img).toHaveAttribute('alt','2019年北山古洋樓的雙層殘牆、彈痕與相連閩式建築');
 const size=await img.evaluate((i:HTMLImageElement)=>({width:i.naturalWidth,height:i.naturalHeight,complete:i.complete}));
 expect(size.complete).toBe(true);expect(size.width).toBeGreaterThan(size.height);
 await expect(page.locator('.article-cover figcaption')).toContainText('不代表目前住宿空間、入內範圍或開放狀態');
 await page.screenshot({path:`/tmp/mansion-photo-${test.info().project.name}-detail.png`,fullPage:true});
 await page.locator('.article-cover a').click();const row=page.locator('#place-beishan-old-mansion');
 await expect(row).toContainText('Rueichung');await expect(row).toContainText('CC BY-SA 4.0');
 await expect(row.getByRole('link',{name:'來源頁',exact:true})).toHaveAttribute('href','https://commons.wikimedia.org/wiki/File:北山古洋樓_01.jpg');
 await expect(row.getByRole('link',{name:'授權條款',exact:true})).toHaveAttribute('href','https://creativecommons.org/licenses/by-sa/4.0/');
 expect(await row.locator('img').evaluate((i:HTMLImageElement)=>i.naturalWidth>i.naturalHeight&&i.complete)).toBe(true);
 await row.screenshot({path:`/tmp/mansion-photo-${test.info().project.name}-credits.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
