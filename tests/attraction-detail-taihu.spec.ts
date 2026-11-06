import {test,expect} from '@playwright/test';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync('src/content/attractions/taihu-lake.md','utf8').split('---')[1]);
test('Taihu bounds reservoir roles and lakeshore access',async({page})=>{
 await page.goto('/attractions/taihu-lake/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('article.article-body a[href="https://www.google.com/maps/place/Tai+Lake/@24.4398059,118.426292,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a4efbc390609:0x1da62af1653c1a76!8m2!3d24.4398059!4d118.426292!16s%2Fg%2F1trpndp1"]')).toBeVisible();
 await expect(page.locator('article.article-body')).toContainText('具名點位身份已核');
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://kinmenguide.com/attractions/taihu-lake/');
 await expect(page.locator('[data-attraction-detail]')).toHaveCount(1);
 await expect(page.locator('.article-cover img')).toHaveCount(1);
 await expect(page.locator('.article-cover')).toContainText('rheins');
 await expect(page.locator('.article-cover')).toContainText('CC BY 3.0');

 const hs=await page.locator('article.article-body h2').allTextContents();
 expect(hs).not.toContain('景點相冊');
 expect(hs.slice(0,10)).toEqual(['探索太湖與湖畔散步','關於太湖與湖畔散步','基本資料','交通方式','路線地圖','水庫職責與湖畔生態','遊客資訊與常見問答','行前規劃與深度遊覽','周邊景點與順路行程','查核日期與參觀提醒']);
 for(const title of ['金湖的水源，也是一段日常風景','不一定要繞完整圈','看見動物，是加分而不是保證','金湖半日搭配','中正公園彩繪與山外甜點','太湖與太湖遊憩區怎麼分','湖畔半天，先選一岸'])await expect(page.getByRole('heading',{name:title,exact:true})).toHaveCount(1);
 await expect(page.locator('.attraction-manager')).toContainText('水庫操作、維護及運用');
 await expect(page.locator('.article-body')).toContainText('2025年8月4日');
 await expect(page.locator('.article-body')).toContainText('不等全游憩區');
 await expect(page.locator('.article-body')).toContainText('不是水域活動許可');
 expect(data.image).toBe('taihu');
 await expect(page.getByRole('link',{name:'查看位置',exact:true})).toHaveCount(0);
 const visible=await page.locator('article.article-body details').evaluateAll(ds=>ds.map(d=>({question:d.querySelector('summary')?.textContent,answer:d.querySelector('p')?.textContent})));
 expect(visible).toEqual(data.faq);
 const graph=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(t=>JSON.parse(t)['@graph']??[]);
 expect(graph.find(n=>n['@type']==='FAQPage').mainEntity.map((q:any)=>({question:q.name,answer:q.acceptedAnswer.text}))).toEqual(data.faq);
 const place=graph.find(n=>n['@type']==='TouristAttraction');expect(place.address).toBeUndefined();expect(place.hasMap).toBeUndefined();expect(place.geo).toBeUndefined();expect(data.coordinates).toBeUndefined();
 await expect(page.locator('article a[href*="maps.app.goo.gl"]')).toHaveCount(0);
 await expect(page.locator('article a[href*="google.com/maps"]:not(:text-is("Google 地圖景點參考點"))')).toHaveCount(0);
 await page.locator('[data-trip-add="taihu-lake"]').click();await page.goto('/trip/');await expect(page.locator('[data-stop="taihu-lake"]')).toBeVisible();await page.locator('[data-stop="taihu-lake"] [data-action="remove"]').click();await expect(page.locator('[data-stop="taihu-lake"]')).toHaveCount(0);
 await page.goto('/attractions/taihu-lake/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.goto('/map/');await expect(page.locator('#map-point-attraction-taihu-lake [data-map-location-link]')).toHaveCount(0);
 await expect(page.locator('#map-point-attraction-taihu-lake [data-pin]')).toHaveCount(0);

});
