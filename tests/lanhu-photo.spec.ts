import {test,expect} from '@playwright/test';
test('Lanhu historical photo preserves orientation and attribution',async({page})=>{
 await page.goto('/attractions/lan-lake/');
 const img=page.locator('.article-cover img');await expect(img).toHaveCount(1);
 await expect(img).toHaveAttribute('alt','2014年金門蘭湖的湖面、裸露湖岸與岸邊涼亭');
 const size=await img.evaluate((i:HTMLImageElement)=>({width:i.naturalWidth,height:i.naturalHeight,complete:i.complete}));
 expect(size.complete).toBe(true);expect(size.width).toBeGreaterThan(size.height);
 await expect(page.locator('.article-cover figcaption')).toContainText('照片不代表目前水位、設施或開放狀態');
 await page.screenshot({path:`/tmp/lanhu-photo-${test.info().project.name}-detail.png`,fullPage:true});
 await page.locator('.article-cover a').click();const row=page.locator('#place-lan-lake');
 await expect(row).toContainText('rheins');await expect(row).toContainText('CC BY 3.0');
 await expect(row.getByRole('link',{name:'來源頁',exact:true})).toHaveAttribute('href','https://commons.wikimedia.org/wiki/File:兰湖_-_Lanhu_Lake_-_2014.05_-_panoramio.jpg');
 await expect(row.getByRole('link',{name:'授權條款',exact:true})).toHaveAttribute('href','https://creativecommons.org/licenses/by/3.0/');
 expect(await row.locator('img').evaluate((i:HTMLImageElement)=>i.naturalWidth>i.naturalHeight&&i.complete)).toBe(true);
 await row.screenshot({path:`/tmp/lanhu-photo-${test.info().project.name}-credits.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
