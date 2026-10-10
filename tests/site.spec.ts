import { test, expect } from '@playwright/test';

test('Jincheng requested names and aliases resolve without duplicate Moses pages',async({page})=>{
 await page.goto('/search/');
 const places=[
  ['文台宝塔','wentai-pagoda'],['金门城西门','kinmen-city-west-gate'],['金门城东门','kinmen-city-east-gate'],['金门城北门','kinmen-city-north-gate'],
  ['明遗老街','mingyi-old-street'],['珠山聚落','zhushan-village'],['金门港水头港区旅客服务中心','shuitou-passenger-service-center'],['金门港旅运中心','kinmen-port-terminal'],
  ['金门港水头港渔港垂钓区','shuitou-port-fishing-area'],['延平郡王祠','yanping-prince-shrine'],['夏墅风狮爷','xiashu-wind-lion'],['丰莲山牧马武侯祠','muma-hou-shrine'],
  ['金门县立体育馆','kinmen-sports-hall'],['燕南书院','yannan-academy'],['得月楼','deyue-tower'],['侨乡文化展示馆','overseas-chinese-museum'],
  ['金水学校展示馆','jinshui-school'],['风狮爷文化坊','wind-lion-cultural-shop'],['黄延参三落大厝(古厝小铺)','huang-tingcan-house'],['古厝小铺','huang-tingcan-house'],
  ['莒光楼','juguang-tower'],['莒光共融公园','juguang-inclusive-park'],['莒光湖','juguang-lake'],['建功屿','jiangong-islet'],['金门摩西分海','jiangong-islet'],
  ['后埔16艺文特区','houpu-16-art-zone'],['清金门镇总兵署（浯江新庄）','kinmen-military-headquarters'],['金城民防坑道','kincheng-civil-defense-tunnel'],['金城老街','kincheng-old-streets'],
  ['金门海滨休闲公园','kincheng-seaside-park'],['雄狮堡','xiongshi-fort'],['东洲风狮爷','dongzhou-wind-lion'],['同安渡船头','tongan-ferry-pier']
 ];
 for(const [query,slug] of places){
  await page.getByLabel('搜尋關鍵字').fill(query);
  await expect(page.locator(`.search-result:visible a[href="/attractions/${slug}/"]`),query).toBeVisible();
 }
 await page.goto('/attractions/');await page.locator('[data-query]').fill('摩西分海');
 await expect(page.locator('[data-card]:visible')).toHaveCount(1);
 await expect(page.locator('[data-card]:visible a').first()).toHaveAttribute('href','/attractions/jiangong-islet/');
});

test('Jincheng navigation separates port buildings, museums and township boundaries',async({page})=>{
 await page.goto('/');await page.getByRole('link',{name:'查看金城全部景點',exact:true}).click();
 await expect(page.getByRole('button',{name:'金城',exact:true})).toHaveAttribute('aria-pressed','true');
 await expect(page.locator('[data-card]:visible')).toHaveCount(36);
 await expect(page.locator('[data-card]:visible').filter({hasText:'東洲風獅爺'})).toHaveCount(0);
 await page.getByRole('button',{name:'金寧',exact:true}).click();
 await expect(page.locator('[data-card]:visible').filter({hasText:'東洲風獅爺'})).toBeVisible();
 await page.goto('/attractions/kinmen-port-terminal/');
 await expect(page.locator('.facts-grid')).toContainText('金豐路300號');
 await expect(page.locator('.prose')).toContainText('三樓離港區');
 await expect(page.getByRole('link',{name:'在 Google 地圖查看位置',exact:true})).toHaveAttribute('href','https://www.google.com/maps/search/?api=1&query=24.41787,118.2916');
 await page.goto('/attractions/shuitou-passenger-service-center/');
 await expect(page.locator('[data-visit-notice]')).toContainText('新旅運中心');
 await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href','https://kinmenguide.com/attractions/shuitou-passenger-service-center/');
 await page.goto('/attractions/overseas-chinese-museum/');await expect(page.locator('.facts-grid')).toContainText('前水頭39號');
 await page.goto('/map/');const fish=page.locator('.map-point').filter({hasText:'水頭港垂釣區'});
 await expect(fish.locator('[data-visit-notice]')).toContainText('資格');await expect(fish.getByRole('button',{name:'圖上查看'})).toHaveCount(0);
 await page.goto('/areas/kincheng/');await expect(page.locator('.prose')).toContainText('金門城與明遺老街');
 await page.goto('/itineraries/kincheng-south-day/');await expect(page.locator('.timeline-day')).toHaveCount(1);
 await expect(page.locator('.timeline a[href="/attractions/zhushan-village/"]').first()).toBeVisible();
 await expect(page.locator('.alert-note').first()).not.toContainText('翟山');
});

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
 await page.goto('/attractions/');await expect(page.locator('[data-card]:visible')).toHaveCount(91);
 await page.getByRole('button',{name:'烈嶼',exact:true}).click();await expect(page.locator('[data-card]:visible')).toHaveCount(34);await expect(page.locator('[data-card]:visible h3').filter({hasText:'九宮坑道'})).toBeVisible();
 await page.locator('[data-query]').fill('不存在的景點xyz');await expect(page.locator('[data-empty]')).toBeVisible();await page.getByRole('button',{name:'清除篩選'}).click();await expect(page.locator('[data-card]:visible')).toHaveCount(91);
});

test('search accepts simplified queries and empty state',async({page})=>{
 await page.goto('/search/');await page.getByLabel('搜尋關鍵字').fill('水头');await expect(page.locator('.search-result:visible')).not.toHaveCount(0);await expect(page.locator('.search-result:visible').filter({hasText:'水頭聚落'}).first()).toBeVisible();
 await page.getByLabel('搜尋關鍵字').fill('xyzzy-nothing');await expect(page.locator('#search-empty')).toBeVisible();await page.getByRole('button',{name:'顯示全部指南'}).click();await expect(page.locator('.search-result:visible')).toHaveCount(157);
});

test('planner respects days and transport',async({page})=>{
 await page.goto('/');await page.locator('[name=days]').selectOption('4');await page.locator('[name=mode]').selectOption('transit');await page.getByRole('button',{name:'找到我的路線'}).click();await expect(page.locator('#plan-note')).toContainText('4 天');await expect(page.locator('#plan-link')).toHaveAttribute('href','/itineraries/kinmen-without-car/');
 await page.locator('[name=days]').selectOption('2');await page.locator('[name=mode]').selectOption('scooter');await page.getByRole('button',{name:'更新行程建議'}).click();await expect(page.locator('#plan-link')).toHaveAttribute('href','/itineraries/kinmen-two-days-one-night/');await expect(page.locator('#plan-transport')).toHaveAttribute('href','/car-rental/scooter/');
});

test('map loads only on request and filters by area',async({page})=>{
 await page.route('https://www.openstreetmap.org/**',route=>route.fulfill({body:'<html><body>Test map surface</body></html>',contentType:'text/html'}));
 await page.goto('/map/');await expect(page.locator('#kinmen-map')).not.toHaveAttribute('src',/.+/);await page.getByRole('button',{name:'烈嶼',exact:true}).click();await expect(page.locator('.map-point:visible')).toHaveCount(34);await page.locator('.map-point:visible').filter({hasText:'九宮坑道'}).getByRole('button',{name:'圖上查看',exact:true}).click();await expect(page.locator('#kinmen-map')).toHaveAttribute('src',/marker=24/);await expect(page.locator('#map-consent')).toBeHidden();
});

test('FAQ and honest contact draft download',async({page})=>{
 await page.goto('/faq/');await page.getByText('不會騎機車，也能去金門嗎？',{exact:true}).click();await expect(page.locator('details[open]')).toContainText('可以');
 await page.goto('/contact/');await page.getByLabel('說明與資料來源').fill('景點開放時間已更新，請核對官方最新公告與頁面資料。');const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'下載聯絡草稿'}).click();const d=await downloadPromise;expect(d.suggestedFilename()).toBe('kinmenguide-contact-draft.txt');await expect(page.locator('#draft-status')).toContainText('資料尚未寄出');
});

test('representative pages have no horizontal overflow or broken images',async({page})=>{
 for(const route of ['/areas/kincheng/','/attractions/wentai-pagoda/','/attractions/zhushan-village/','/attractions/kinmen-port-terminal/','/attractions/shuitou-passenger-service-center/','/attractions/deyue-tower/','/itineraries/kincheng-south-day/','/attractions/zhaishan-tunnel/','/itineraries/kinmen-three-days-two-nights/','/hotels/kincheng/','/areas/lieyu/','/itineraries/lieyu-two-days/','/attractions/lieyu-culture-museum/','/attractions/hujingtou-war-museum/','/attractions/lieyu-seaside-park/','/attractions/tiger-fort/','/credits/','/transport/from-mainland-china/','/guides/entry-documents/','/guides/restricted-items/','/guides/travel-checklist/','/attractions/chen-jinglan-house/','/food/kincheng-tea-walk/','/food/aliang-fried-chicken/','/attractions/jiangong-islet/','/attractions/xiaojing-bus-stop/','/tours/houpu-night-walk/','/404.html']){
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


test('new place aliases lead to the corrected street and real guides',async({page})=>{
 await page.goto('/search/');
 for(const [query,href] of [['奶茶一条街','/food/kincheng-tea-walk/'],['品其林','/food/pinchilin-croissants/'],['水濑路标','/guides/otter-road-signs/'],['小径车站','/attractions/xiaojing-bus-stop/']]){
  await page.getByLabel('搜尋關鍵字').fill(query);await expect(page.locator(`.search-result:visible a[href="${href}"]`)).toBeVisible();
 }
 await page.goto('/food/kincheng-tea-walk/');await expect(page.locator('h1')).toContainText('中興路146巷');await expect(page.locator('.prose')).toContainText('金城車站旁');await expect(page.locator('.article-cover')).toHaveCount(0);
 await page.goto('/food/');await page.locator('[data-query]').fill('品其林');await expect(page.locator('[data-card]:visible')).toHaveCount(1);await expect(page.locator('[data-card]:visible .guide-cover')).toBeVisible();
});

test('map distinguishes verified coordinates from place search',async({page})=>{
 await page.goto('/map/');await expect(page.locator('#map-count')).toHaveText('91 個景點');
 const stop=page.locator('.map-point').filter({hasText:'小徑公車亭'});await expect(stop.getByRole('link',{name:'Google 地圖'})).toHaveAttribute('href',/query=/);await expect(stop.getByRole('button',{name:'圖上查看'})).toHaveCount(0);
 await page.getByRole('button',{name:'金湖',exact:true}).click();await expect(stop).toBeVisible();await expect(page.locator('.map-point:visible')).toHaveCount(10);
});


test('all requested Lieyu names resolve to their individual guides',async({page})=>{
 await page.goto('/search/');
 const places = [
  ['沙溪堡','shaxi-fort'],['三民主义万岁墙','sanmin-wall'],['烈屿乡海滨公园','lieyu-seaside-park'],
  ['青岐码头','qingqi-harbor'],['烈屿上林将军庙','shanglin-general-temple'],['L26据点','l26-outpost'],
  ['双口海边','shuangkou-beach'],['红土沟一营区','hongtugou-first-camp'],['湖井頭戰史館','hujingtou-war-museum'],
  ['国姓井','guoxing-well'],['北风爷','north-wind-lord'],['烈屿乡文化馆','lieyu-culture-museum'],
  ['八达楼子','bada-tower'],['烈屿东林宋代东井','donglin-east-well'],['烈屿习山湖公园','xishan-lake-park'],
  ['烈屿人文风鸡','lieyu-wind-rooster'],['九宮坑道','jiugong-tunnel'],['四维七营区','siwei-seventh-camp'],
  ['麒麟山森林公园','qilin-mountain-park'],['红土沟三营区','hongtugou-third-camp'],
  ['猫公石滨海休憩区','maogongshi-coast'],['猫公石眺景平台','maogongshi-viewpoint'],
  ['地雷主题馆','landmine-museum'],['铁汉堡','tiehan-fort'],['仿雷区公园','simulated-minefield-park'],
  ['后麟模拟靶场','houlin-shooting-simulator'],['后頭風獅爺','houtou-wind-lions'],['虎堡','tiger-fort'],
  ['金门烈屿将军堡','general-fort'],['L56据点','l56-outpost'],['诚实亭','chengshi-pavilion'],
  ['介寿亭','jieshou-pavilion'],['妈祖公园','luocuo-mazu-park']
 ];
 for(const [query,slug] of places){
  await page.getByLabel('搜尋關鍵字').fill(query);
  await expect(page.locator(`.search-result:visible a[href="/attractions/${slug}/"]`),query).toBeVisible();
 }
});

test('Lieyu entry points preserve exact park identity and access notices',async({page})=>{
 await page.goto('/');await page.getByRole('link',{name:'查看烈嶼全部景點',exact:true}).click();
 await expect(page.locator('[data-card]:visible')).toHaveCount(34);
 await expect(page.getByRole('button',{name:'烈嶼',exact:true})).toHaveAttribute('aria-pressed','true');
 await page.goto('/attractions/lieyu-seaside-park/');
 await expect(page.locator('.facts-grid')).toContainText('C66F+6M');
 await expect(page.getByRole('link',{name:'在 Google 地圖查看位置',exact:true})).toHaveAttribute('href','https://www.google.com/maps/search/?api=1&query=24.4105791,118.2241265');
 await expect(page.locator('.prose')).toContainText('不是東林海濱公園');
 await page.goto('/map/');const restricted=page.locator('.map-point').filter({hasText:'虎堡'});
 await expect(restricted.locator('[data-visit-notice]')).toContainText('尚未確認常態開放');
 await expect(restricted.getByRole('button',{name:'圖上查看'})).toHaveCount(0);
 await page.goto('/attractions/tiger-fort/');await expect(page.locator('[data-visit-notice]')).toContainText('未列入本站推薦參觀路線');
 for(const route of ['lieyu-one-day','lieyu-two-days']){
  await page.goto(`/itineraries/${route}/`);
  await expect(page.locator('.timeline a[href="/attractions/tiger-fort/"]')).toHaveCount(0);
  await expect(page.locator('.timeline-day')).toHaveCount(route==='lieyu-one-day'?1:2);
  await expect(page.locator('.alert-note').first()).not.toContainText('翟山');
 }
});
