import { test, expect } from '@playwright/test';

test('home navigation, image loading and viewport',async({page},info)=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');await expect(page.locator('h1')).toContainText('在金門');
 await expect(page.locator('.hero-photo img')).toBeVisible();
 expect(await page.locator('.hero-photo img').evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBeTruthy();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 if(info.project.name==='mobile'){await page.getByRole('button',{name:'開啟導覽'}).click();await expect(page.locator('#mobile-nav')).toBeVisible();await page.keyboard.press('Escape');await expect(page.locator('#mobile-nav')).toBeHidden();}
 await page.getByRole('link',{name:'探索三天兩夜行程',exact:true}).click();await expect(page.locator('h1')).toHaveText('金門三天兩夜');
 expect(errors).toEqual([]);
});

test('catalog filters, zero results, and reset',async({page})=>{
 await page.goto('/attractions/');await expect(page.locator('[data-card]:visible')).toHaveCount(12);
 await page.getByRole('button',{name:'烈嶼',exact:true}).click();await expect(page.locator('[data-card]:visible')).toHaveCount(1);await expect(page.locator('[data-card]:visible h3')).toHaveText('九宮坑道');
 await page.locator('[data-query]').fill('不存在的景點xyz');await expect(page.locator('[data-empty]')).toBeVisible();await page.getByRole('button',{name:'清除篩選'}).click();await expect(page.locator('[data-card]:visible')).toHaveCount(12);
});

test('search accepts simplified queries and empty state',async({page})=>{
 await page.goto('/search/');await page.getByLabel('搜尋關鍵字').fill('水头');await expect(page.locator('.search-result:visible')).not.toHaveCount(0);await expect(page.locator('.search-result:visible').filter({hasText:'水頭聚落'}).first()).toBeVisible();
 await page.getByLabel('搜尋關鍵字').fill('xyzzy-nothing');await expect(page.locator('#search-empty')).toBeVisible();await page.getByRole('button',{name:'顯示全部指南'}).click();await expect(page.locator('.search-result:visible')).toHaveCount(55);
});

test('planner respects days and transport',async({page})=>{
 await page.goto('/');await page.locator('[name=days]').selectOption('4');await page.locator('[name=mode]').selectOption('transit');await page.getByRole('button',{name:'找到我的路線'}).click();await expect(page.locator('#plan-note')).toContainText('4 天');await expect(page.locator('#plan-link')).toHaveAttribute('href','/itineraries/kinmen-without-car/');
 await page.locator('[name=days]').selectOption('2');await page.locator('[name=mode]').selectOption('scooter');await page.getByRole('button',{name:'更新行程建議'}).click();await expect(page.locator('#plan-link')).toHaveAttribute('href','/itineraries/kinmen-two-days-one-night/');await expect(page.locator('#plan-transport')).toHaveAttribute('href','/car-rental/scooter/');
});

test('map loads only on request and filters by area',async({page})=>{
 await page.route('https://www.openstreetmap.org/**',route=>route.fulfill({body:'<html><body>Test map surface</body></html>',contentType:'text/html'}));
 await page.goto('/map/');await expect(page.locator('#kinmen-map')).not.toHaveAttribute('src',/.+/);await page.getByRole('button',{name:'烈嶼',exact:true}).click();await expect(page.locator('.map-point:visible')).toHaveCount(1);await page.getByRole('button',{name:'圖上查看',exact:true}).last().click();await expect(page.locator('#kinmen-map')).toHaveAttribute('src',/marker=24/);await expect(page.locator('#map-consent')).toBeHidden();
});

test('FAQ and honest contact draft download',async({page})=>{
 await page.goto('/faq/');await page.getByText('不會騎機車，也能去金門嗎？',{exact:true}).click();await expect(page.locator('details[open]')).toContainText('可以');
 await page.goto('/contact/');await page.getByLabel('說明與資料來源').fill('景點開放時間已更新，請核對官方最新公告與頁面資料。');const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'下載聯絡草稿'}).click();const d=await downloadPromise;expect(d.suggestedFilename()).toBe('kinmenguide-contact-draft.txt');await expect(page.locator('#draft-status')).toContainText('資料尚未寄出');
});

test('representative pages have no horizontal overflow or broken images',async({page})=>{
 for(const route of ['/attractions/zhaishan-tunnel/','/itineraries/kinmen-three-days-two-nights/','/hotels/kincheng/','/areas/lieyu/','/credits/','/404.html']){
  await page.goto(route);await expect(page.locator('h1')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route).toBeTruthy();
  const eager=page.locator('img[loading=eager]');for(const img of await eager.all())expect(await img.evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0),route).toBeTruthy();
 }
});
