import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('src/content/attractions/mofan-street.md','utf8').split('---')[1]);
test('Mofan preserves private premises and street environment roles',async({page})=>{
 await page.goto('/attractions/mofan-street/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('article.article-body a[href="https://www.google.com/maps/place/Kinmen+Mofan+Street/@24.4317899,118.3165755,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a26bc5884475:0xa2e03e3948f1882e!8m2!3d24.431785!4d118.3191558!16s%2Fg%2F11bbt711cz"]')).toBeVisible();
 await expect(page.locator('article.article-body')).toContainText('具名點位身份已核');
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://kinmenguide.com/attractions/mofan-street/');
 await expect(page.locator('[data-attraction-detail]')).toHaveCount(1);
 await expect(page.locator('.article-cover img')).toHaveCount(1);
 await expect(page.locator('.article-cover')).toContainText('Cpc3711');
 await expect(page.locator('.article-cover')).toContainText('CC BY-SA 4.0');

 const hs=await page.locator('article.article-body h2').allTextContents();
 expect(hs).not.toContain('景點相冊');
 expect(hs.slice(0,10)).toEqual(['探索模範街','關於模範街','基本資料','交通方式','路線地圖','街屋分工與後浦游程','遊客資訊與常見問答','行前規劃與深度遊覽','周邊景點與順路行程','查核日期與參觀提醒']);
 for(const title of ['看街屋，也看今天的生活','一段很好銜接的散步','拍照與停車'])await expect(page.getByRole('heading',{name:title,exact:true})).toHaveCount(1);
 await expect(page.locator('.attraction-manager')).toContainText('金城鎮公所');
 await expect(page.locator('.attraction-manager')).toContainText('金門縣文化局（文資主管聯絡機關）');
 await expect(page.locator('.article-body')).toContainText('文資主管角色與日常維護不同');
 await expect(page.locator('.article-body')).toContainText('各戶店家、住戶自行管理維護');
 await expect(page.locator('.article-body')).toContainText('不等每戶室內開放');
 expect(data.faq.slice(0,2).map((x:any)=>x.question)).toEqual(['晚上還能逛模範街嗎？','適合下雨時散步嗎？']);
 expect(data.image).toBe('mofan');
 await expect(page.getByRole('link',{name:'查看位置',exact:true})).toHaveCount(0);
 const visible=await page.locator('article.article-body details').evaluateAll(ds=>ds.map(d=>({question:d.querySelector('summary')?.textContent,answer:d.querySelector('p')?.textContent})));
 expect(visible).toEqual(data.faq);
 const graph=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(t=>JSON.parse(t)['@graph']??[]);
 expect(graph.find(n=>n['@type']==='FAQPage').mainEntity.map((q:any)=>({question:q.name,answer:q.acceptedAnswer.text}))).toEqual(data.faq);
 const place=graph.find(n=>n['@type']==='TouristAttraction');expect(place.address).toBeUndefined();expect(place.hasMap).toBeUndefined();expect(place.geo).toBeUndefined();expect(data.coordinates).toBeUndefined();
 await expect(page.locator('article a[href*="maps.app.goo.gl"]')).toHaveCount(0);
 await expect(page.locator('article a[href*="google.com/maps"]:not(:text-is("Google 地圖景點參考點"))')).toHaveCount(0);
 await page.locator('[data-trip-add="mofan-street"]').click();await page.goto('/trip/');await expect(page.locator('[data-stop="mofan-street"]')).toBeVisible();await page.locator('[data-stop="mofan-street"] [data-action="remove"]').click();await expect(page.locator('[data-stop="mofan-street"]')).toHaveCount(0);
 await page.goto('/attractions/mofan-street/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/map/');await expect(page.locator('#map-point-attraction-mofan-street [data-map-location-link]')).toHaveCount(0);
 await expect(page.locator('#map-point-attraction-mofan-street [data-pin]')).toHaveCount(0);

});
