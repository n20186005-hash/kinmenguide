import {test,expect} from '@playwright/test';
test('Wall credits preserve official source and photograph',async({page})=>{
 await page.goto('/credits/#place-beishan-broadcasting-wall');const row=page.locator('#place-beishan-broadcasting-wall');
 await expect(row).toContainText('金門縣政府觀光處／金門觀光旅遊網');
 await expect(row.getByRole('link',{name:'來源頁',exact:true})).toHaveAttribute('href','https://kinmen.travel/zh-tw/media/album/746');
 await expect(row.getByRole('link',{name:'授權條款',exact:true})).toHaveAttribute('href','https://kinmen.travel/zh-tw/gwoia');
 await row.scrollIntoViewIfNeeded();
 await expect.poll(()=>row.locator('img').evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBe(true);
 await row.screenshot({path:`/tmp/wall-photo-${test.info().project.name}-credits.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
