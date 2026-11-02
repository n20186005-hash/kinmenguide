import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const requestedPlaces: [string, string][] = JSON.parse(readFileSync(new URL('./fixtures/east-places.json', import.meta.url), 'utf8'));

// User-supplied names are an independent acceptance list, including deliberate duplicates.
for (let group=0;group<3;group++) {
 test(`east expansion: requested names ${group*28+1}–${(group+1)*28} resolve`,async({page})=>{
  await page.goto('/search/');
  for(const [query,href] of requestedPlaces.slice(group*28,(group+1)*28)){
   await page.getByLabel('搜尋關鍵字').fill(query);
   await expect(page.locator(`.search-result:visible a[href="${href}"]`),query).toBeVisible();
  }
 });
}

test('east navigation keeps geography and facility purposes distinct',async({page})=>{
 await page.goto('/');
 await page.getByRole('link',{name:'查看金湖全部景點',exact:true}).click();
 await expect(page.getByRole('button',{name:'金湖',exact:true})).toHaveAttribute('aria-pressed','true');
 await expect(page.locator('[data-card]:visible')).toHaveCount(57);
 await page.locator('[data-query]').fill('尚义');
 await expect(page.locator('[data-card]:visible')).toHaveCount(1);
 await page.goto('/attractions/liaoluo-mazu-park/');
 await expect(page.locator('.facts-grid')).toContainText('金湖');
 await expect(page.locator('.prose')).toContainText('烈嶼羅厝');
 await page.goto('/food/liangjin-ranch/');
 await expect(page.locator('.facts-grid')).toContainText('漁村160號');
 await expect(page.locator('.prose')).toContainText('畜產試驗所');
 await page.goto('/transport/shanwai-station/');
 await expect(page.locator('.facts-grid')).toContainText('黃海路90號');
 await page.goto('/attractions/rover-moot-monument/');
 await expect(page.locator('.facts-grid')).toContainText('金沙');
 await expect(page.locator('.prose')).toContainText('不同地方');
});

test('restricted and closing facilities show notices and stay out of ordinary routes',async({page})=>{
 await page.goto('/hotels/kinmen-police-hostel/');
 await expect(page.locator('[data-visit-notice]')).toContainText('2026-12-31');
 await expect(page.locator('.facts-grid')).toContainText('斗門段1號');
 await page.goto('/attractions/golden-lion-cinema/');
 await expect(page.locator('[data-visit-notice]')).toContainText('2026-10-31');
 await page.goto('/attractions/mingde-park/');
 await expect(page.locator('[data-visit-notice]')).toContainText('申請');
 await page.goto('/attractions/shishan-howitzer-front/');
 await expect(page.locator('[data-visit-notice]')).toContainText('每週一、四');
 for(const route of ['jinhu-one-day','jinsha-one-day']){
  await page.goto(`/itineraries/${route}/`);
  await expect(page.locator('.timeline-day')).toHaveCount(1);
  await expect(page.locator('.timeline a[href="/attractions/longbao-third-camp/"]')).toHaveCount(0);
  await expect(page.locator('.timeline a[href="/attractions/mingde-park/"]')).toHaveCount(0);
  await expect(page.locator('.alert-note').first()).not.toContainText('翟山');
 }
 await page.goto('/map/');
 const doumen=page.locator('.map-point').filter({has:page.locator('a[href="/attractions/doumen-trail/"]')});
 await expect(doumen).toHaveCount(1);
 await expect(doumen.getByRole('button',{name:'圖上查看'})).toHaveCount(0);
 await expect(doumen.locator('[data-map-location-link]')).toHaveAttribute('href',/maps\/search/);
 const sky=page.locator('.map-point').filter({has:page.locator('a[href="/attractions/sky-castle-e094/"]')});
 await expect(sky).toHaveCount(1);
 await expect(sky.locator('[data-visit-notice]')).toContainText('掏空');
});

test('new long tables, notices and photo pages fit desktop and mobile',async({page})=>{
 for(const route of ['/areas/jinhu/','/areas/jinsha/','/attractions/taiwu-mountain/','/attractions/august-23-battle-museum/','/attractions/chenggong-beach/','/attractions/kinmen-county-museum/','/attractions/guanao-wind-lions/','/attractions/zhongzheng-park-3d/','/hotels/kinmen-police-hostel/','/itineraries/jinhu-one-day/','/itineraries/jinsha-one-day/']){
  await page.goto(route);
  await expect(page.locator('h1')).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route).toBeTruthy();
  for(const img of await page.locator('img[loading=eager]').all()){
   expect(await img.evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0),route).toBeTruthy();
  }
 }
});
