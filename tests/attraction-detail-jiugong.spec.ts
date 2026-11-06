import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('src/content/attractions/jiugong-tunnel.md','utf8').split('---')[1]);
test('Jiugong separates dated closures and reopening from current partial access',async({page})=>{
 await page.goto('/attractions/jiugong-tunnel/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('article.article-body a[href="https://www.google.com/maps/place/Jiugong+Tunnels/@24.4237958,118.2600386,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414993e88ea9337:0xe8d581d98a2584ab!8m2!3d24.4237909!4d118.2626189!16s%2Fg%2F1tf4bnkp"]')).toBeVisible();
 await expect(page.locator('article.article-body')).toContainText('具名點位身份已核');
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://kinmenguide.com/attractions/jiugong-tunnel/');
 await expect(page.locator('[data-attraction-detail]')).toHaveCount(1);
 await expect(page.locator('.article-cover img')).toBeVisible();
 await expect(page.locator('figcaption')).toContainText('人人生來平等 / CC BY-SA 4.0');
 const hs=await page.locator('article.article-body h2').allTextContents();
 expect(hs).not.toContain('景點相冊');
 expect(hs.slice(0,10)).toEqual(['探索九宮坑道','關於九宮坑道','基本資料','交通方式','路線地圖','人文生態','遊客資訊與常見問答','行前規劃與深度遊覽','周邊景點與順路行程','查核日期與參觀提醒']);
 for(const title of ['地下水道裡的運補記憶','先走坑道，再安排九宮周邊','坑道步行與無障礙需求','從金門本島過來'])await expect(page.getByRole('heading',{name:title,exact:true})).toHaveCount(1);
 await expect(page.locator('.attraction-manager')).toContainText('內政部國家公園署金門國家公園管理處');

 await expect(page.locator('.article-body')).toContainText('不能以任一舊公告斷言今日全館關閉或全區可走');
 await expect(page.locator('.article-body')).toContainText('羅厝端入口不開放，從九宮碼頭端進入並於管制點原路折返');

 await expect(page.locator('.article-body')).toContainText('2025年11月階段重開');
 await expect(page.locator('.article-body')).toContainText('082-364405');
 await expect(page.locator('.attraction-manager a')).toHaveAttribute('href','https://www.kmnp.gov.tw/ch/titlelist/latest-news/1212');
 await expect(page.getByRole('link',{name:'查看位置',exact:true})).toHaveCount(0);
 const visible=await page.locator('article.article-body details').evaluateAll(ds=>ds.map(d=>({question:d.querySelector('summary')?.textContent,answer:d.querySelector('p')?.textContent})));
 expect(visible).toEqual(data.faq);
 const graph=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(t=>JSON.parse(t)['@graph']??[]);
 expect(graph.find(n=>n['@type']==='FAQPage').mainEntity.map((q:any)=>({question:q.name,answer:q.acceptedAnswer.text}))).toEqual(data.faq);
 const place=graph.find(n=>n['@type']==='TouristAttraction');expect(place.address).toBeUndefined();expect(place.hasMap).toBeUndefined();expect(place.geo).toBeUndefined();expect(data.coordinates).toBeUndefined();
 await expect(page.locator('article a[href*="maps.app.goo.gl"]')).toHaveCount(0);
 await expect(page.locator('article a[href*="google.com/maps"]:not(:text-is("Google 地圖景點參考點"))')).toHaveCount(0);
 await page.locator('[data-trip-add="jiugong-tunnel"]').click();await page.goto('/trip/');await expect(page.locator('[data-stop="jiugong-tunnel"]')).toBeVisible();await page.locator('[data-stop="jiugong-tunnel"] [data-action="remove"]').click();await expect(page.locator('[data-stop="jiugong-tunnel"]')).toHaveCount(0);
 await page.goto('/attractions/jiugong-tunnel/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/map/');await expect(page.locator('#map-point-attraction-jiugong-tunnel [data-map-location-link]')).toHaveCount(0);
 await expect(page.locator('#map-point-attraction-jiugong-tunnel [data-pin]')).toHaveCount(0);

});
