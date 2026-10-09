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
 await page.goto('/attractions/');await expect(page.locator('[data-card]:visible')).toHaveCount(20);
 await page.getByRole('button',{name:'烈嶼',exact:true}).click();await expect(page.locator('[data-card]:visible')).toHaveCount(1);await expect(page.locator('[data-card]:visible h3')).toHaveText('九宮坑道');
 await page.locator('[data-query]').fill('不存在的景點xyz');await expect(page.locator('[data-empty]')).toBeVisible();await page.getByRole('button',{name:'清除篩選'}).click();await expect(page.locator('[data-card]:visible')).toHaveCount(20);
});

test('search accepts simplified queries and empty state',async({page})=>{
 await page.goto('/search/');await page.getByLabel('搜尋關鍵字').fill('水头');await expect(page.locator('.search-result:visible')).not.toHaveCount(0);await expect(page.locator('.search-result:visible').filter({hasText:'水頭聚落'}).first()).toBeVisible();
 await page.getByLabel('搜尋關鍵字').fill('xyzzy-nothing');await expect(page.locator('#search-empty')).toBeVisible();await page.getByRole('button',{name:'顯示全部指南'}).click();await expect(page.locator('.search-result:visible')).toHaveCount(72);
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
 for(const route of ['/attractions/zhaishan-tunnel/','/itineraries/kinmen-three-days-two-nights/','/hotels/kincheng/','/areas/lieyu/','/credits/','/transport/from-mainland-china/','/guides/entry-documents/','/guides/restricted-items/','/guides/travel-checklist/','/attractions/chen-jinglan-house/','/404.html']){
  await page.goto(route);await expect(page.locator('h1')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route).toBeTruthy();
  const eager=page.locator('img[loading=eager]');for(const img of await eager.all())expect(await img.evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0),route).toBeTruthy();
 }
});

test('arrival guides connect origins, documents and new attractions',async({page})=>{
 await page.goto('/transport/');await expect(page.locator('.origin-card')).toHaveCount(5);
 await page.locator('.origin-card[href="/transport/from-mainland-china/"]').click();await expect(page.locator('h1')).toContainText('中國大陸');await expect(page.locator('.prose')).toContainText('有效');
 await page.goto('/search/');await page.getByLabel('搜尋關鍵字').fill('陈景兰');await expect(page.getByRole('link',{name:'陳景蘭洋樓',exact:true})).toBeVisible();await expect(page.getByRole('link',{name:'陳景蘭洋樓',exact:true})).toHaveAttribute('href','/attractions/chen-jinglan-house/');
 await page.getByLabel('搜尋關鍵字').fill('高粱酒厂');await expect(page.getByRole('link',{name:'金門酒廠：金寧廠參訪',exact:true})).toBeVisible();
});

test('travel checklist filters, persists, downloads and clears every route',async({page})=>{
 await page.goto('/guides/travel-checklist/');const origin=page.locator('#checklist-origin');await origin.selectOption('mainland-china');
 await page.locator('[name=mainland-permit]').check();await page.locator('[name=identity]').check();await page.reload();await expect(origin).toHaveValue('mainland-china');await expect(page.locator('[data-checklist-progress]')).toContainText('已完成 2 項');
 await origin.selectOption('taiwan');await expect(page.locator('[name=mainland-permit]')).toBeHidden();await expect(page.locator('[name=domestic-id]')).toBeVisible();
 const pending=page.waitForEvent('download');await page.getByRole('button',{name:'下載文字清單'}).click();const download=await pending;expect(download.suggestedFilename()).toBe('kinmen-travel-checklist.txt');const stream=await download.createReadStream();expect(stream).not.toBeNull();const parts:Buffer[]=[];for await(const part of stream!)parts.push(Buffer.from(part));const downloaded=Buffer.concat(parts).toString('utf8');expect(downloaded).toContain('出發地：台灣本島');expect(downloaded).toContain('[x] 已按每位旅客的身分核對旅行資格');expect(downloaded).not.toContain('大通證、有效赴金簽注與入出境許可都已確認');
 await page.getByRole('button',{name:'清空全部勾選'}).click();await origin.selectOption('mainland-china');await expect(page.locator('[name=mainland-permit]')).not.toBeChecked();await expect(page.locator('[data-checklist-progress]')).toContainText('已完成 0 項');
 await page.emulateMedia({media:'print'});await expect(page.locator('.article-cover')).toBeHidden();await expect(page.locator('[name=mainland-permit]')).toBeVisible();await expect(page.locator('[name=domestic-id]')).toBeHidden();
});

test('travel checklist remains usable when browser storage is unavailable',async({page})=>{
 await page.addInitScript(()=>{Storage.prototype.getItem=()=>{throw new Error('Storage unavailable')};Storage.prototype.setItem=()=>{throw new Error('Storage unavailable')};});
 await page.goto('/guides/travel-checklist/');await expect(page.locator('[data-save-status]')).toContainText('未允許保存');await page.locator('#checklist-origin').selectOption('hong-kong');await page.locator('[name=hk-permit]').check();await expect(page.locator('[data-checklist-progress]')).toContainText('已完成 1 項');
});

test('travel checklist has a printable no-JavaScript fallback',async({browser,baseURL})=>{
 const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();await page.goto(`${baseURL}/guides/travel-checklist/`);await expect(page.locator('[data-check-item]:visible')).toHaveCount(22);await expect(page.getByRole('button',{name:'下載文字清單'})).toBeHidden();await expect(page.locator('noscript p')).toBeVisible();await expect(page.locator('noscript p')).toContainText('目前顯示全部項目');await context.close();
});
