# 古寧頭戰史館 v1.2 證據

2026-11-04 UTC核查，Sol實作、authority獨立來源與內容審閱。基底main `76f67316e124f53109ca0ad00db6e5229612eabc`，完整875個blob逐一git hash驗證一致，144個overlay為基線非本批diff。AGENTS/skill v1.2/template與已讀版逐byte一致；最新CSV本頁NOT_STARTED、下一guningtou-village，Issue59已取讀。

## 原頁盤點保留

三題「從展覽開始理解古寧頭」「把聚落與展館放在一起」「金寧半日怎麼留白」及三段原文逐字保留至FAQ後H3。原FAQ兩題「適合帶孩子參觀嗎？」「能否與烈嶼排在同一個離島日？」及原答覆逐字作新FAQ前兩題，另加8題，共10題與可見details及FAQPage同源逐字一致。原related五個連結均保留並可見新增周邊段，沒有改動其內容集合；原533來源保留。60–90分鐘為編輯建議不當官方承諾。

## Google具名POI

實作者Maps繁中GUI直接查具名「古寧頭戰史館」，地址欄原文 `892金門縣金寧鄉‎456號`（鄉與456間含U+200E方向排版符，原樣保留），CID `0x3414a49d94387a31:0x54f1a840d0492372`，24.4829757,118.3209361，GIDm/02pz2yl，PlusCodeF8MC+59；連kmnp.gov.tw舊站URL、電話082-313274。Google營業字段非即時狀態保證。

[同具名POI長鏈](https://www.google.com/maps/place/%E5%8F%A4%E5%AF%A7%E9%A0%AD%E6%88%B0%E5%8F%B2%E9%A4%A8/@24.4829757,118.3209361,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a49d94387a31:0x54f1a840d0492372!8m2!3d24.4829757!4d118.3209361!16s%2Fm%2F02pz2yl?hl=zh-TW)統一詳頁所有導航、hasMap與/map。官方北山村456另作locationDescription，不補進Google原址；館點不是停車入口、聚落或海岸准入權。無GPX捏造。

## 官方直接來源及限制

- [KMNP館頁39](https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/39)直接可讀軍方移交後公園管理、2001重新開館、2024劇場更新；支持展館管理角色，不推土地建物所有權或現行個別承包商。其他季刊有2000移交/新聞2001接管的不同時點口徑，本稿只採共同的2001重新開館，不精斷移交日。
- [觀光網533](https://kinmen.travel/zh-tw/travel/attraction/533)實作者GUI讀2025-05-08更新、每日08:30–17、免費、082-313274、公廁/停車場/室內展覽/無障礙廁所及坡道。導覽6場為預約（09、10、11、14、15、16時），劇場14場、首08:40末16:30；不當今天仍保證場次/隨到隨講。官方提醒劇場無座椅與聲光久站不適者謹慎參與，並非每個年齡必玩。正文13幅與舊圖說/社群12幅不同，記差異不將數量當完整即時陳展證明。
- [NPS21008](https://www.taiwan.nps.gov.tw/home/zh-tw/attractions/21008.html)直接讀08:30–17、除夕休、082-313274及影片約10分鐘。一般參觀、活動與導覽服務安排分開，不推特殊活動均免費。
- [KMNP2026慈湖工程4494](https://www.kmnp.gov.tw/ch/titlelist/latest-news/4494)明列周邊本館照常營運，屬該公告時點的營運資訊；不把慈湖平台整修說成本館封館，也不反過來從本館一般開放推平台/海岸/營區皆可進。未找到本輪新的全館封閉公告不等於實時現場查核。
- [縣府動態](https://ebus.kinmen.gov.tw/)及[533近站查詢](https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=533&type=Attractions)只作查詢入口，未實走站牌路徑、不捏造步行分鐘/直達班次，也不把官方nearby卡片看似極近距離作連走依據。

## 原照片與最小描述更正

原圖 `src/assets/photos/guningtou.jpg` 實作者直接view_image，門額清楚可讀古寧頭戰史館、正面入口及兩側浮雕，畫面沒有坦克。故僅此圖photos.json alt及PHOTO-CREDITS內容由「入口與展示坦克」改「入口與正面浮雕」；P95521708、CC BY-SA4.0、原source/original、裁切WebP聲明及圖片二進位皆保留。

[Commons原檔](https://commons.wikimedia.org/wiki/File:Guningtou_Battle_Museum_DSC_3248.jpg)直接讀作者P95521708、own work、2018-06-05、CC BY-SA4.0；頁面中文描述誤寫「金門823行館」，但實際本地圖上館名與正式外觀可辨，不因描述誤字借用另一館圖；檔名指古寧頭。記錄此metadata疑點，不改外部Commons。圖為2018舊外觀，不代表2024展示更新後現貌；不新增相冊。

## 驗證及交接

本地完成2026-11-04 12:46:20 UTC。pnpm validate通過0 errors/warnings/hints，556頁、48,614 internal references、1,884 images、4,105 schema nodes。完整桌機手機298 passed（1.3m），含本頁單H1/順序、原3題與2原FAQ、10題可見/frontmatter/FAQPage逐字一致、CC署名及修正alt、canonical、Google原址（含排版符）/coords/hasMap/詳頁及/map同POI、行程加入後移除自身項、手機無溢出。

完整remote blob比對僅5既有檔異動（本MD、pilot registry、CSV、目標photo alt及PHOTO-CREDITS描述），新測試與本證據，共7檔。registry其餘區塊及CSV其他列完全相同；兩圖描述反向換回後photos.json及PHOTO-CREDITS與baseline完全相同；圖片二進位及其他內容集合均不變。原3標題/3段與2FAQ問答逐字保留檢查通過，git diff --check通過。

CSV AWAITING_LIVE_CHECK，未正式站驗收，不提交推送。下一guningtou-village。

authority獨立內容與照片複核完成，無內容阻斷：原圖為館舍入口與浮雕，Commons文字誤稱其他場所；作者及CC BY-SA 4.0保留。正式站仍待驗收。

## 2026-11-05 museum follow-up

National park facility page https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/39 and reopening notice https://www.kmnp.gov.tw/ch/titlelist/latest-news/1156 support the national park's museum operation role following transfer, not ownership of all land/buildings. https://www.taiwan.nps.gov.tw/home/zh-tw/attractions/21008.html lists regular 08:30–17:00 and Lunar New Year's Eve closure; verify actual day. Notice https://www.kmnp.gov.tw/ch/titlelist/latest-news/4494 published 2026-08-13 said the museum operated normally at that time during Cihu platform works. Notice https://www.kmnp.gov.tw/ch/titlelist/latest-news/1188 describes entrance accessibility works beginning 2025-03-01 while the museum remained open then; neither actual completion nor current works were established. Tourism JSON https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_000533 has null free field and empty fee, not proof of either charge or free admission. Current services and facilities remain unresolved; AWAITING_SOURCE_CHECK remains.

Independent QA accepted the national park's bounded museum operation and dated notices; whole-workspace validate and complete desktop/mobile regression passed (552). Current services, entrance facilities and ownership remain unresolved. LOCAL_READY_AWAITING_BATCH_RELEASE is local only and does not assert a new deployment.
