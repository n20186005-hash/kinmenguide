import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('src/content/attractions/qionglin-cai-ancestral-hall.md','utf8').split('---')[1]);
test('Qionglin Cai separates thirteen-number hall and grouped heritage',async({page})=>{
 await page.goto('/attractions/qionglin-cai-ancestral-hall/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('article.article-body a[href="https://www.google.com/maps/place/Qionglin+Cai+Family+Temple/@24.4543452,118.3713746,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a36c2ae27d1f:0xcdae599eebc57cfa!8m2!3d24.4543403!4d118.3739549!16s%2Fg%2F11f69_k00j"]')).toBeVisible();
 await expect(page.locator('article.article-body')).toContainText('具名身份已由地圖UI核對');
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://kinmenguide.com/attractions/qionglin-cai-ancestral-hall/');
 await expect(page.locator('[data-attraction-detail]')).toHaveCount(1);
 await expect(page.locator('.article-cover img')).toBeVisible();

 const hs=await page.locator('article.article-body h2').allTextContents();
 expect(hs).not.toContain('景點相冊');
 expect(hs.slice(0,10)).toEqual(['探索瓊林蔡氏祠堂','關於瓊林蔡氏祠堂','基本資料','交通方式','路線地圖','宗族建築與文資範圍','遊客資訊與常見問答','行前規劃與深度遊覽','周邊景點與順路行程','查核日期與參觀提醒']);
 for(const title of ['認識瓊林蔡氏祠堂','參觀時留意','怎麼安排'])await expect(page.getByRole('heading',{name:title,exact:true})).toHaveCount(1);
 await expect(page.locator('.attraction-manager')).toContainText('本棟日常經營與准入待核');
 for(const text of ['1840年','十一世榮生宗祠','不能推為現任人員','文化局2025-07-21','不推整棟當前經營或准入','欄位日期未明']) await expect(page.locator('.article-body')).toContainText(text);
 expect(data.image).toBe('place-qionglin-cai-ancestral-hall');
 await expect(page.getByRole('link',{name:'查看位置',exact:true})).toHaveCount(0);
 const visible=await page.locator('article.article-body details').evaluateAll(ds=>ds.map(d=>({question:d.querySelector('summary')?.textContent,answer:d.querySelector('p')?.textContent})));
 expect(visible).toEqual(data.faq);
 const graph=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(t=>JSON.parse(t)['@graph']??[]);
 expect(graph.find(n=>n['@type']==='FAQPage').mainEntity.map((q:any)=>({question:q.name,answer:q.acceptedAnswer.text}))).toEqual(data.faq);
 const place=graph.find(n=>n['@type']==='TouristAttraction');expect(place.address).toBeUndefined();expect(place.hasMap).toBeUndefined();expect(place.geo).toBeUndefined();
 await page.locator('[data-trip-add="qionglin-cai-ancestral-hall"]').click();await page.goto('/trip/');await expect(page.locator('[data-stop="qionglin-cai-ancestral-hall"]')).toBeVisible();await page.locator('[data-stop="qionglin-cai-ancestral-hall"] [data-action="remove"]').click();await expect(page.locator('[data-stop="qionglin-cai-ancestral-hall"]')).toHaveCount(0);
 await page.goto('/attractions/qionglin-cai-ancestral-hall/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/map/');await expect(page.locator('#map-point-attraction-qionglin-cai-ancestral-hall [data-map-location-link]')).toHaveCount(0);
 await expect(page.locator('#map-point-attraction-qionglin-cai-ancestral-hall [data-pin]')).toHaveCount(0);

});
