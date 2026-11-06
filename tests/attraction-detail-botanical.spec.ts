import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('src/content/attractions/kinmen-botanical-garden.md','utf8').split('---')[1]);
test('Botanical garden dates service records and keeps Monday and species status conditional',async({page})=>{
 await page.goto('/attractions/kinmen-botanical-garden/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('article.article-body a[href="https://www.google.com/maps/place/Kinmen+Plant+Yuan/data=!4m7!3m6!1s0x3414a49f5c3eca61:0xd66a0aef735dbacf!8m2!3d24.4542599!4d118.3974914!16s%2Fg%2F1tlcythh"]')).toBeVisible();
 await expect(page.locator('article.article-body')).toContainText('也不證明准入、停車或無障礙條件');
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://kinmenguide.com/attractions/kinmen-botanical-garden/');
 await expect(page.locator('[data-attraction-detail]')).toHaveCount(1);
 await expect(page.locator('.article-cover img')).toBeVisible();
 await expect(page.locator('figcaption')).toContainText('金門縣政府觀光處 / 政府網站資料開放宣告');
 const hs=await page.locator('article.article-body h2').allTextContents();
 expect(hs).not.toContain('景點相冊');
 expect(hs.slice(0,10)).toEqual(['探索金門植物園','關於金門植物園','基本資料','交通方式','路線地圖','人文生態','遊客資訊與常見問答','行前規劃與深度遊覽','周邊景點與順路行程','查核日期與參觀提醒']);
 for(const title of ['這裡值得看什麼','怎麼安排參觀','把下一站排在附近'])await expect(page.getByRole('heading',{name:title,exact:true})).toHaveCount(1);
 await expect(page.locator('.attraction-manager')).toContainText('金門縣林務所');

 await expect(page.locator('.article-body')).toContainText('不保證週一仍可入園');
 await expect(page.locator('.article-body')).toContainText('不是今日逐株或物種可見清單');
 await expect(page.locator('.article-body')).toContainText('不保證各區均可走到');
 await expect(page.locator('.article-body')).not.toContainText('步行中能看見不同環境');

 await expect(page.locator('.article-body')).toContainText('2020公告曾明稱林務所轄管植物園');
 await expect(page.locator('.article-body')).toContainText('082-333280');
 await expect(page.locator('.attraction-manager a')).toHaveAttribute('href','https://forestry.kinmen.gov.tw/cp.aspx?n=CA0F812BA01A08DA');
 await expect(page.getByRole('link',{name:'查看位置',exact:true})).toHaveCount(0);
 const visible=await page.locator('article.article-body details').evaluateAll(ds=>ds.map(d=>({question:d.querySelector('summary')?.textContent,answer:d.querySelector('p')?.textContent})));
 expect(visible).toEqual(data.faq);
 const graph=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(t=>JSON.parse(t)['@graph']??[]);
 expect(graph.find(n=>n['@type']==='FAQPage').mainEntity.map((q:any)=>({question:q.name,answer:q.acceptedAnswer.text}))).toEqual(data.faq);
 const place=graph.find(n=>n['@type']==='TouristAttraction');expect(place.address).toBeUndefined();expect(place.hasMap).toBeUndefined();expect(place.geo).toBeUndefined();expect(data.coordinates).toBeUndefined();
 await expect(page.locator('article a[href*="maps.app.goo.gl"]')).toHaveCount(0);
 await expect(page.locator('article a[href*="google.com/maps"]:not(:text-is("Google 地圖景點參考點"))')).toHaveCount(0);
 await page.locator('[data-trip-add="kinmen-botanical-garden"]').click();await page.goto('/trip/');await expect(page.locator('[data-stop="kinmen-botanical-garden"]')).toBeVisible();await page.locator('[data-stop="kinmen-botanical-garden"] [data-action="remove"]').click();await expect(page.locator('[data-stop="kinmen-botanical-garden"]')).toHaveCount(0);
 await page.goto('/attractions/kinmen-botanical-garden/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/map/');await expect(page.locator('#map-point-attraction-kinmen-botanical-garden [data-map-location-link]')).toHaveCount(0);
 await expect(page.locator('#map-point-attraction-kinmen-botanical-garden [data-pin]')).toHaveCount(0);

});
