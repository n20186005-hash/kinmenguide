import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('src/content/attractions/qionglin-three-chastity-arch.md','utf8').split('---')[1]);
test('Qionglin arch separates heritage roles and road safety',async({page})=>{
 await page.goto('/attractions/qionglin-three-chastity-arch/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://kinmenguide.com/attractions/qionglin-three-chastity-arch/');
 await expect(page.locator('[data-attraction-detail]')).toHaveCount(1);
 await expect(page.locator('.article-cover img')).toHaveCount(1);
 await expect(page.locator('.article-cover img')).toHaveAttribute('alt','2018年瓊林一門三節坊的石造牌坊與村路');
 await expect(page.locator('.article-cover figcaption')).toContainText('歷史照片不代表目前設施或准入狀態');

 const hs=await page.locator('article.article-body h2').allTextContents();
 expect(hs).not.toContain('景點相冊');
 expect(hs.slice(0,10)).toEqual(['探索一門三節坊','關於一門三節坊','基本資料','交通方式','路線地圖','清代牌坊與保存紀錄','遊客資訊與常見問答','行前規劃與深度遊覽','周邊景點與順路行程','查核日期與參觀提醒']);
 for(const title of ['認識一門三節坊','參觀時留意','怎麼安排'])await expect(page.getByRole('heading',{name:title,exact:true})).toHaveCount(1);
 await expect(page.locator('.attraction-manager')).toContainText('瓊林蔡氏十七郎公裔孫基金會');
 for(const text of ['1831年','一座牌坊','字段更新日期未明','不為拍完整牌坊退入車流']) await expect(page.locator('.article-body')).toContainText(text);
 expect(data.image).toBe('place-qionglin-three-chastity-arch');
 await expect(page.getByRole('link',{name:'查看位置',exact:true})).toHaveCount(0);
 const visible=await page.locator('article.article-body details').evaluateAll(ds=>ds.map(d=>({question:d.querySelector('summary')?.textContent,answer:d.querySelector('p')?.textContent})));
 expect(visible).toEqual(data.faq);
 const graph=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(t=>JSON.parse(t)['@graph']??[]);
 expect(graph.find(n=>n['@type']==='FAQPage').mainEntity.map((q:any)=>({question:q.name,answer:q.acceptedAnswer.text}))).toEqual(data.faq);
 const place=graph.find(n=>n['@type']==='TouristAttraction');expect(place.address).toBeUndefined();expect(place.hasMap).toBeUndefined();expect(place.geo).toBeUndefined();
 await expect(page.locator('article a[href*="google.com/maps/place/"]')).toHaveCount(1);
 await expect(page.locator('.article-body')).toContainText('不是入口、准入、停車或無障礙證明');
 await page.locator('[data-trip-add="qionglin-three-chastity-arch"]').click();await page.goto('/trip/');await expect(page.locator('[data-stop="qionglin-three-chastity-arch"]')).toBeVisible();await page.locator('[data-stop="qionglin-three-chastity-arch"] [data-action="remove"]').click();await expect(page.locator('[data-stop="qionglin-three-chastity-arch"]')).toHaveCount(0);
 await page.goto('/attractions/qionglin-three-chastity-arch/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/map/');await expect(page.locator('#map-point-attraction-qionglin-three-chastity-arch [data-map-location-link]')).toHaveCount(0);
 await expect(page.locator('#map-point-attraction-qionglin-three-chastity-arch [data-pin]')).toHaveCount(0);

});
