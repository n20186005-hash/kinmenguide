import { test, expect } from '@playwright/test';
import fs from 'node:fs/promises';
import sharp from 'sharp';
const key = 'kinmenguide-trip-v1';
const ids = ['juguang-tower','zhaishan-tunnel','shuitou-village','deyue-tower','wentai-pagoda','zhushan-village','kinmen-bridge'];

test('attraction cart persists across pages, arranges days, reorders and undoes removal', async ({page}) => {
  await page.goto('/attractions/');
  await page.locator('[data-trip-add="juguang-tower"]').click();
  await expect(page.locator('[data-trip-count]')).toHaveText('1');
  await page.goto('/attractions/zhaishan-tunnel/');
  await page.locator('.trip-article-action [data-trip-add]').click();
  await page.goto('/attractions/juguang-tower/');
  await expect(page.locator('.trip-article-action [data-trip-add]')).toContainText('已加入');
  await page.locator('.trip-article-action [data-trip-add]').click();
  await expect(page).toHaveURL(/\/trip\//);
  await expect(page.locator('.trip-stop')).toHaveCount(2);
  await page.locator('[data-stop="zhaishan-tunnel"] [data-action="up"]').click();
  await expect(page.locator('.trip-stop').first()).toHaveAttribute('data-stop','zhaishan-tunnel');
  await page.locator('[data-stop="juguang-tower"] [data-field="day"]').selectOption('3');
  await page.locator('[data-stop="juguang-tower"] [data-field="note"]').fill('慢慢逛，記得喝水');
  await page.locator('[data-stop="juguang-tower"] [data-field="time"]').fill('10:30');
  await page.reload();
  await expect(page.locator('[data-day="3"] [data-stop="juguang-tower"]')).toBeVisible();
  await expect(page.locator('[data-stop="juguang-tower"] [data-field="note"]')).toHaveValue('慢慢逛，記得喝水');
  await expect(page.locator('[data-stop="juguang-tower"] [data-field="time"]')).toHaveValue('10:30');
  await page.locator('#trip-days').selectOption('2');
  await expect(page.locator('[data-day="2"] [data-stop="juguang-tower"]')).toBeVisible();
  await page.locator('[data-stop="juguang-tower"] [data-action="remove"]').click();
  await expect(page.locator('.trip-stop')).toHaveCount(1);
  await page.locator('#trip-undo').click();
  await expect(page.locator('.trip-stop')).toHaveCount(2);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  page.once('dialog', d=>d.accept()); await page.locator('#trip-clear').click();
  await expect(page.locator('#trip-empty')).toBeVisible();
  await expect(page.locator('#trip-export')).toBeDisabled();
  await page.reload(); await expect(page.locator('[data-trip-count]')).toHaveText('0');
});

test('PNG export paginates, brands every image and invalidates after editing', async ({page}) => {
  await page.addInitScript(({key,ids})=>{
    localStorage.setItem(key,JSON.stringify({version:1,title:'一起去金門',days:3,stops:ids.map((id,i)=>({id,day:i<4?1:2,time:'09:00',note:'準備相機'}))}));
    const original=CanvasRenderingContext2D.prototype.fillText;
    (window as any).drawn=[];
    CanvasRenderingContext2D.prototype.fillText=function(text,x,y,maxWidth){(window as any).drawn.push(text);if(maxWidth!==undefined)original.call(this,text,x,y,maxWidth);else original.call(this,text,x,y);};
  },{key,ids});
  await page.goto('/trip/'); await expect(page.locator('.trip-stop')).toHaveCount(7);
  await page.locator('#trip-export').click();
  await expect(page.locator('#trip-image-list img')).toHaveCount(2);
  expect(await page.evaluate(()=>(window as any).drawn.filter((s:string)=>s==='kinmenguide.com').length)).toBe(2);
  expect(await page.evaluate(()=>(window as any).drawn.includes('一起去金門'))).toBeTruthy();
  const promise=page.waitForEvent('download'); await page.getByRole('link',{name:'下載第 1 張 PNG'}).click();
  const download=await promise; expect(download.suggestedFilename()).toBe('kinmenguide-trip-1.png');
  const path=await download.path(); const data=await fs.readFile(path!);const meta=await sharp(data).metadata();
  expect(meta.format).toBe('png');expect(meta.width).toBe(1080);expect(meta.height).toBe(2240);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
  await page.locator('#trip-title').fill('重新安排'); await expect(page.locator('#trip-images')).toBeHidden();
});

test('unavailable storage warns without falsely claiming persistent additions', async ({page}) => {
  await page.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('blocked','SecurityError');};});
  await page.goto('/trip/');
  await page.goto('/attractions/juguang-tower/');await page.locator('.trip-article-action [data-trip-add]').click();
  await expect(page.locator('#trip-toast')).toContainText('無法保存');
  await expect(page.locator('[data-trip-count]')).toHaveText('1');
  await page.goto('/trip/');await expect(page.locator('#trip-empty')).toBeVisible();
});

test('corrupted data recovers and stale or duplicate IDs do not become itinerary entries', async ({page}) => {
  await page.goto('/trip/');await page.evaluate(key=>localStorage.setItem(key,'{broken'),key);await page.reload();
  await expect(page.locator('#trip-empty')).toBeVisible();await expect(page.locator('#trip-storage')).toContainText('無法讀取');
  await page.evaluate(key=>localStorage.setItem(key,JSON.stringify({version:1,title:'<img src=x onerror=alert(1)>',days:2,stops:[{id:'juguang-tower',day:999,time:'99:00',note:'hello'},{id:'juguang-tower',day:1},{id:'removed-place',day:1}]})),key);
  await page.reload();await expect(page.locator('.trip-stop')).toHaveCount(1);await expect(page.locator('[data-day="2"] .trip-stop')).toHaveCount(1);
  await expect(page.locator('[data-field="time"]')).toHaveValue('');await expect(page.locator('[data-trip-count]')).toHaveText('1');
  await expect(page.locator('#trip-title')).toHaveValue('<img src=x onerror=alert(1)>');
});

test('cart stays synchronized across tabs', async ({page,context}) => {
  await page.goto('/trip/'); const other=await context.newPage();await other.goto('/attractions/juguang-tower/');
  await other.locator('.trip-article-action [data-trip-add]').click();
  await expect(page.locator('.trip-stop')).toHaveCount(1);
  await page.locator('[data-action="remove"]').click();
  await expect(other.locator('[data-trip-count]')).toHaveText('0');await other.close();
});
