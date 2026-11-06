import {test,expect} from '@playwright/test';
test('Qionglin historical photograph renders with traceable attribution',async({page})=>{
 await page.goto('/attractions/qionglin-battle-tunnel/');
 const image=page.locator('.article-cover img');
 await expect(image).toHaveCount(1);
 await expect(image).toHaveAttribute('alt','2018年瓊林地道內的石砌拱頂、照明與狹窄轉彎走道');
 expect(await image.evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBe(true);
 await expect(page.locator('.article-cover figcaption')).toContainText('照片不代表目前開放或可入內');
 await page.locator('.article-cover a').click();
 const credit=page.locator('#place-qionglin-battle-tunnel');
 await expect(credit).toContainText('P95521708');await expect(credit).toContainText('CC BY-SA 4.0');
 await expect(credit.getByRole('link',{name:'來源頁',exact:true})).toHaveAttribute('href','https://commons.wikimedia.org/wiki/File:Qionglin_tunnel_DSC_3296.jpg');
 await expect(credit.getByRole('link',{name:'授權條款',exact:true})).toHaveAttribute('href','https://creativecommons.org/licenses/by-sa/4.0/');
 await expect(credit).toContainText('衍生圖片沿用CC BY-SA 4.0');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
