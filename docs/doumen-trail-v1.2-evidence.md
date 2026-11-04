# 斗門古道 v1.2 證據與交接

資料核對2026-11-03（使用者America/Los_Angeles），完成時刻另記UTC。Sol實作、authority/Luna獨立來源/Google GUI/照片及稿件審閱；未commit/push、未production驗收。

## 基線與原文盤點

work/doumen-ready從42f53d3覆蓋actual GitHub main 2e90c62e432a968a95dabf2b4248ce0b7807174e的102變更，849 remote blobs逐一Git hash一致；舊HEAD tracked paths沒有remote已刪除而殘留的檔案。CLI fallback沿用父代理既有授權。覆蓋是基線，不納入舊批次變更。

原三H2「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」保留為FAQ後H3，三段全文與太武山/倒影塔links保留。約1公里、陡升/花崗岩、與玉章路不同、體力天候/往返接駁及不把終點當入口的原意不刪。第二段「正式登山口進入」改為先向公園確認山下入口及當日開放，原「雨後/幼兒改選玉章短段」保留作原建議說明但加施工確認，避免未核實復開仍無條件推薦。title/nameEn/SEO/description/aliases/area/tag/duration/order/image/related不變。原未有經緯度，本批增加已核實的具名路線點，明示非入口/停車/車行目的地；父代理確認此窄修及相應existing test更新在授權範圍。9FAQ同組生成data與可見HTML，不製空相冊。

## 官方來源與管理範圍

- https://kinmen.travel/zh-tw/travel/attraction/467 ：兩方繁中GUI讀2025-05-29更新、全天、官方地址斗門古道，介紹入口在斗門山腳、終點觀兵奕棋處、約1公里、陡坡與鑿岩階；服務設施僅步道/登山道、建議1–2小時，未列票價/停車。官方pin24.46352,118.41015近Maps路線點，不是山下入口定位證明。全天非當期可通行/夜行安全保證。
- https://media.taiwan.net.tw/zh-tw/portal/travel/details/attraction_371020000a_000467 ：實作者直接web讀古道約1公里/陡坡，Luna補核同日更新、組織/時段/停車/費用空，不由欄空推免費或全面通行。昔日軍管作歷史背景，不推今日整線軍管/自由進出。
- https://www.kmnp.gov.tw/ch/roadinfo/trail-information/8 ：實作者直接web與Luna獨核官方步道說明，北麓登山口至倒影塔/觀兵奕棋處、金管處整修岩階，介紹花崗片麻岩及木麻黃/馬尾松/相思樹等。支持路線整修與自然主題，不代表入口精確門牌或當期全程開放，不推每天必見名錄物種。頁面未有本次可用更新日期，不捏造年份。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/1195 ：直接web讀官方安全公告，斗門等三條公告路線有定期維護與標示，支持金管處限步道維護/遊憩安全；實作者web頁未顯示年份；Luna後續官方GUI核發布2025-03-27、更新2026-11-03，更新內容仍有定期維護及指引/里程標。稱最新更新資訊，不將原公告誤稱2026首次發布。管理卡限定公告步道範圍，當期細項/委外/產權未核，不推整座太武山或軍事設施權管。
- https://www.taiwan.nps.gov.tw/home/zh-tw/news/26417.html ：2025-05-09更新，金管處安全與救援提醒列斗門登山古道、禁止擅離既有步道/未開放區，作較近安全旁證，不當今天開放保證。
- https://www.nlma.gov.tw/filesys/file/EMMA/a1120424-4.pdf ：2023步道系統表139，金管處、斗門登山停車場至太武山鄭成功觀兵奕棋處，1.394公里、<0.5天、2級，陡坡雨滑提醒。這與旅遊約1公里起迄/量測口徑不同，頁面並列不自行定論；表提停車場不是今日入口精確點、車位/收費/服務證明。原本站2–3小時建議保留，官方旅遊1–2小時另列，均不保證完成時間。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/4069 ：2026春節淨山/玉章前山工程公告，3/5前暫停施工、3/6後再封，預計115年7月完工、日期另公告；本輪未找到後續正式復開證據。不把預計日期已過當復開，不把前山封閉轉成斗門古道全線封閉，也不能建議古道繞工區或無條件接玉章下山。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/3877 ：Luna核2025-12-29較早前山工程時序；本頁採4069較後公告，避免較早3/4預定時序壓過後來3/6安排。
- https://www.kmnp.gov.tw/ch/titlelist/latest-news/548 ：Luna後續官方GUI直接核發布114-10-01（2025-10-01）、更新115-11-03（2026-11-03）。實作者web讀三條公告路線及公墓停車工程，但未顯示日期，採LunaGUI時點佐證補sources與正文。更新後仍列斗門為公告開放路線，不當今日每段路況或夜行承諾；同頁公墓工程/太武電場臨時停車不能套為斗門停車場或古道閉道。本頁維護直接依據仍採1195，548正文沒有定期維護句，不錯引。

## Maps與入口區分

兩方Google Maps繁中GUI獨立核「斗門步道」，地址原文 **890金門縣金沙鎮**，CID 0x3414a4b0ac30d3a1:0x2879a30166d3dca5，24.4635105,118.410171，g/11xcwpym2，Plus Code FC76+C3。外鏈是健行筆記detail1484，不能冒稱官方外鏈；具名路線點與官方pin近合，但沒有確證為山下入口。Google24h與無障礙欄是第三方列表，不推夜間通行/安全或可車達。

直鏈 https://www.google.com/maps/place/%E6%96%97%E9%96%80%E6%AD%A5%E9%81%93/@24.4635105,118.410171,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a4b0ac30d3a1:0x2879a30166d3dca5!8m2!3d24.4635105!4d118.410171!16s%2Fg%2F11xcwpym2?hl=zh-TW 。詳頁三導航、/map及hasMap同鏈、streetAddress原字不拼門牌；基本資料/地圖/FAQ/visitNotice均說路線點非入口/停車目的地，官方北麓山腳描述另列locationDescription。入口與當日通行未核，不以山上終點或路線pin反推入口，無實測GPX。

公車 https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=467&type=Attractions 是官方以景點點位為基準的清單，實作者web本次無法讀取，不捏造路線/站距；正文只提供查詢入口與 https://ebus.kinmen.gov.tw/ 當期確認，站到山下入口、班距與實走未核。異地接送不是保證出口可通，先確認集合與開放。

## 圖片與未知

原place-doumen-trail/alt與photos.json、PHOTO-CREDITS金門縣政府觀光處、政府網站資料開放宣告及縮放WebP/裁切註記保留。官方原圖 https://kinmen.travel/attractions/1858/1024x768_image_636361782494534382.jpg 與本地JPG均81011bytes、SHA256 ef2150c53e917573cf298e6ed712ae6313ce9d5e0fd7d1bf02b6629b9b0718b4。實作者視覺核斜裸岩鑿階/林木/山腳遠景，Luna確認官方467原圖池含同檔。https://kinmen.travel/zh-tw/gwoia 可再用縣府來源素材並署名，個別特標與第三人權利例外仍成立，未見本圖特別限制，不稱已查明個別攝影師。照片不代表今天路面/繩索/護欄安全，不新增他人圖或複製主圖製相冊。

官方11/3更新仍列公告開放路線；即時全段路況、山腳入口定位/玉章接續復開、產權/委外細項、單點票價、停車位置空位收費、補水/廁所/照明/無障礙未核。陡坡岩階不推薦雨後、幼兒/推車或無經驗者輕鬆走；建議白天結伴、不離線、先定回程，不借此推薦未核野徑/自設繩索/O型縱走。

## 本地驗證

Final stable rebuild: pnpm validate passed, 0 errors/0 warnings/0 hints; 556 pages, 48,497 internal references, 1,884 images and 4,093 schema nodes verified. Full desktop 1440x1000 and iPhone13 mobile suite **272 passed (1.2m)**. Focused checks cover unique H1/canonical, ten ordered H2 sections and three preserved H3 topics, original photo credit/no empty gallery, scoped park maintenance/source CTA, current official open-route signal plus no inferred Yuzhang reopening, nine exact FAQ answers across data/HTML/JSON-LD, Google original address/CID/coordinates/hasMap and route-point-not-entrance distinction in detail and /map, test-only trip add/remove, and mobile overflow.

Six files relative to actual main: four existing (target MD, registry, CSV, and only Doumen assertions in tests/east.spec.ts) and two additions (focused test and this evidence). Removing the Doumen registry block reproduces baseline exactly; other CSV rows and all other remote blobs match. No non-attraction collection changes. The existing regression test now verifies the newly confirmed route marker and named POI plus explicit non-entrance notice instead of the former missing-coordinate/search fallback. git diff --check passed. Temporary config, node_modules symlink and work scratch removed. No commit or push.CSV AWAITING_LIVE_CHECK，不標VERIFIED，PR/commit/deploy留空。下一slug由CSV為fengshang-fuji-temple。

Luna終稿複核要求首屏明示最新官方開放訊號：已在statusNotice/開放facts/FAQ列2026-11-03更新仍列公告開放路線，與即時路況、山腳入口及玉章接續待核分開，避免只呈未知而漏掉近期公告。修後重新validate與完整suite，不沿用前兩輪結果作最終。

Verification correction: the intermediate suite used the previous built HTML while revised source FAQ data had already been saved; one mobile equality assertion correctly failed on those old/new answers (271 passed, 1 failed). The source was rebuilt and the complete suite rerun against the stable final revision; only that final result is used for handoff.

Final checks recorded at 2026-11-04T06:09:41Z (UTC).
