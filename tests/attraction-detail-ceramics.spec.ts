import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('src/content/attractions/kinmen-ceramics.md','utf8').split('---')[1]);
test('Ceramics keeps shop DIY and factory access separate and discloses conflicting hours',async({page})=>{
 await page.goto('/attractions/kinmen-ceramics/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('article.article-body a[href="https://www.google.com/maps/place/Kinmen+Official+Kiln/data=!4m7!3m6!1s0x3414a48ecddb25f3:0xa8584aa4555e848b!8m2!3d24.4356168!4d118.4066282!16s%2Fg%2F1tf0n7gn"]')).toBeVisible();
 await expect(page.locator('article.article-body')).toContainText('也不證明准入、停車或無障礙條件');
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://kinmenguide.com/attractions/kinmen-ceramics/');
 await expect(page.locator('[data-attraction-detail]')).toHaveCount(1);
 await expect(page.locator('.article-cover img')).toBeVisible();
 await expect(page.locator('figcaption')).toContainText('金門縣政府觀光處 / 政府網站資料開放宣告');
 const hs=await page.locator('article.article-body h2').allTextContents();
 expect(hs).not.toContain('景點相冊');
 expect(hs.slice(0,10)).toEqual(['探索金門縣陶瓷廠','關於金門縣陶瓷廠','基本資料','交通方式','路線地圖','人文與工藝','遊客資訊與常見問答','行前規劃與深度遊覽','周邊景點與順路行程','查核日期與參觀提醒']);
 for(const title of ['這裡值得看什麼','怎麼安排參觀','把下一站排在附近'])await expect(page.getByRole('heading',{name:title,exact:true})).toHaveCount(1);
 await expect(page.locator('.attraction-manager')).toContainText('金門縣陶瓷廠');

 await expect(page.locator('.article-body')).toContainText('兩頁不一致');
 await expect(page.locator('.article-body')).toContainText('不是生產區自由進入許可');



 await expect(page.locator('.article-body')).toContainText('手捏陶暫停');
 await expect(page.locator('.article-body')).toContainText('082-332857');
 await expect(page.locator('.attraction-manager a')).toHaveAttribute('href','https://kmcf.kinmen.gov.tw/cp.aspx?n=3294424713DDCCFE');
 await expect(page.getByRole('link',{name:'查看位置',exact:true})).toHaveCount(0);
 const visible=await page.locator('article.article-body details').evaluateAll(ds=>ds.map(d=>({question:d.querySelector('summary')?.textContent,answer:d.querySelector('p')?.textContent})));
 expect(visible).toEqual(data.faq);
 const graph=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(t=>JSON.parse(t)['@graph']??[]);
 expect(graph.find(n=>n['@type']==='FAQPage').mainEntity.map((q:any)=>({question:q.name,answer:q.acceptedAnswer.text}))).toEqual(data.faq);
 const place=graph.find(n=>n['@type']==='TouristAttraction');expect(place.address).toBeUndefined();expect(place.hasMap).toBeUndefined();expect(place.geo).toBeUndefined();expect(data.coordinates).toBeUndefined();
 await expect(page.locator('article a[href*="maps.app.goo.gl"]')).toHaveCount(0);
 await expect(page.locator('article a[href*="google.com/maps"]:not(:text-is("Google 地圖景點參考點"))')).toHaveCount(0);
 await page.locator('[data-trip-add="kinmen-ceramics"]').click();await page.goto('/trip/');await expect(page.locator('[data-stop="kinmen-ceramics"]')).toBeVisible();await page.locator('[data-stop="kinmen-ceramics"] [data-action="remove"]').click();await expect(page.locator('[data-stop="kinmen-ceramics"]')).toHaveCount(0);
 await page.goto('/attractions/kinmen-ceramics/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/map/');await expect(page.locator('#map-point-attraction-kinmen-ceramics [data-map-location-link]')).toHaveCount(0);
 await expect(page.locator('#map-point-attraction-kinmen-ceramics [data-pin]')).toHaveCount(0);

});
