# 建功嶼 v1.2 本地遷移證據

2026-11-05 UTC。子代理單頁實作，主代理另作獨立QA。已讀AGENTS/relay Skill/template；只改本頁MD、registry自身key、新測試/證據，不動CSV/進度，不提交推送部署。

## 原文與照片

原四題「金門摩西分海，就是這條潮汐步道」「退潮之後，海中出現一條路」「先查可登島時段，再安排前後兩站」「拍照與金城順遊」於FAQ後H3保留。原潮汐與回程/不涉水/不踩泥灘/防滑鞋/親子/輪椅與替代行程、莒光樓/水頭/金城原連結都在；原導航改先核本島允許入口，加入日間限制及清晨夜間預報不等於可登島，岸邊替代也須安全允許。

原jiangong主圖、alt建功嶼退潮步道與小島景觀、Miklcct、CC BY-SA 4.0、Commons來源/original及WebP裁切聲明不變，一張主圖不設空相冊。

## 官方核對

https://kinmen.travel/zh-tw/guide/jiangongyu-islet-tidal 子代理直接可讀每日乾潮與建議上島時間、氣象開放平台來源及現地調整提醒。頁內也有清晨/夜間預報，不能自動等同准入；正文不硬存本日時間，要求出發當日查並另符合日間、安全路面及現場允許。

https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=6ECE61C9535B16D7&sms=BF7D6D478B935644 直接web只得縣府外框，官方域搜尋可讀題名與完整安全段：僅限日間退潮，其餘禁止上島，並記有漲潮不聽勸阻受困救援。正文以日間退潮限制優先，未由景點24小時欄位推全天或夜間開放。

https://www.kinmen.gov.tw/News_Content2.aspx?Create=1&n=98E3CA7358C89100&s=0D7E3AF233B5ADBD&sms=BF7D6D478B935644 直接open不可訪，官方域搜尋可讀近期環境設施修繕與觀光處提醒、時段性景點/未退乾勿涉水。只支持觀光處設施改善及安全提醒角色，不作全島產權或全部日常管理維護證據，也不將未來日夜觀光規劃當現已夜間可登島。

https://kinmen.travel/zh-tw/travel/attraction/1390 官方搜尋可讀一般免費、24小時、公廁/停車/步道，這些是欄位記載，非安全窗口、當日設施可用性或無障礙保證。免費不等於可任意走；沒有捏造潮位閾值/步行時間/救生服務。

Google全名直接查詢不可讀具名POI；島嶼與本島入口各有導航語義，不能以島點當車輛目的地。設pending且無coordinates/googleMapsUrl；原24.42746,118.30005僅存本證據，無schema address/geo/hasMap及/map導航/marker。位置描述另列。

## 待核與測試

全島產權/管理分工、當日步道/設施、停車位置/費用、公車近站、無障礙與Google具名入口待核。新tests/attraction-detail-jiangong.spec.ts驗單H1/canonical、次序/4原題、主圖信用/無相冊、6FAQ逐字同步、日間限制/預報非許可、管理待核、無Maps鏈/geo/address/hasMap、全島圖無導航/marker、行程加入移除、手機不溢出。待允許構建後補結果。

主代理補充6ECE安全提醒為2021公告：正文FAQ、查核段與pilot about已明記年份，按此作保守行程建議，但不假定公告至今未變；現時現場公告優先，未核到新條件前不擴張夜間或非退潮可登島。測試加入「不假定舊公告至今未變」斷言。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,762 internal references、1,884 image instances、4,118 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-jiangong.spec.ts：desktop/mobile 2 passed（1.1s），4339已結束。logs：/tmp/jiangong-validate.log、/tmp/jiangong-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。

獨立QA可選修辭已採納：frontmatter admission改「官方景點頁列免費；個別活動另查」，移除沒有場內店家證據的消費泛稱。此為單欄位文字修正；按主代理要求暫不構建，等待批次回歸。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,772 internal references、1,884 image instances、4,119 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-jieshou.spec.ts tests/attraction-detail-jiangong.spec.ts：兩頁desktop/mobile共4 passed（2.4s），4339已結束。logs：/tmp/jieshou-validate.log、/tmp/jieshou-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。


## 2026-11-06 本次有界候選補核

歷史本地QA/測試是當時記錄。主代理提供獨立Maps UI同對象點 https://www.google.com/maps/place/Jiangongyu+Islet/@24.4274351,118.300075,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a20a71ed3573:0xf5d9a7ab8b21dc03!8m2!3d24.4274351!4d118.300075!16s%2Fm%2F012gbr33 。具名身份已核；坊點Google地址僅行政區891，非實地入口，島點顯示地址與兩頁實地入口/當日准入仍待核，不啟用geo/hasMap/導航marker。

2026-11-06直接重讀官方潮汐，頁明示氣象平台預報及現地調整，包含清晨時段但不是夜間准入；不保存每日時間、不涉水。 來源：https://kinmen.travel/zh-tw/guide/jiangongyu-islet-tidal 。不推管理、產權、停車或全區安全；無已確認可公開通行且安全停留範圍時不進入。原圖/照片metadata/署名/許可全保留，依用户指示不重新審核或刪減既有圖片。

本次validate/獨立QA/全量待完成；未提交推送部署。#192與峰上Google照片候選保持暫停，未帶入本批。

## 本次最終本地驗證／歷史記錄更新

基線真實main bc17144d5fc2cae1f852ffcaaa7c861aa57a8e03，精確tree8d61da2927837efed625308092736d5d1f918d56，僅clone乾淨HEAD，未帶#192、峰上或虎堡未授權候選。舊無圖/短鏈全部導航記錄是先前階段，已由#187照片及本次有界參考替代：坊現保留已上線2018照片與image/caption精確main值，無‘目前無圖’宣稱。本次兩頁可見完整Maps只作身份參考，不輸出未核實地入口geo/hasMap/marker；坊已核地址僅行政區891，不冒稱門牌。

最終validate PASS；兩頁桌面/手機4專項 passed (2.8s)；單次完整430 passed (2.0m)。日誌 /tmp/sixteenth-final-validate.log、/tmp/sixteenth-focused.log、/tmp/sixteenth-full.log。CSV174資料行僅兩目標變、其餘172保持；photos.json/pending及原圖二進位完全未改。

全量結束後只追加證據/CSV測試欄，不改已測產品/測試。獨立QA已由主代理回報通過，不宣稱部署；來源現況/實地入口/管理/道路與構件安全仍按正文限制。臨時config及依賴鏈接清理，未提交推送。

### 本次獨立QA最終結果
2026-11-06主代理回報兩頁獨立QA通過：地圖只作身份參考；建功嶼日間退潮、現場許可、不涉水及預報非安全保證界線正確；牌坊基金會管理/使用角色依文資欄位，該欄位更新日期未知，不得寫為2011已核。舊照片/署名保持；最終validate、4專項與單次430 passed (2.0m)對應產品/測試未變。來源現況、實地入口/路權與當日安全仍未核；NOT_DEPLOYED，非VERIFIED。本次僅QA紀錄修正，未提交推送。

## #195最新main集成最終記錄

真實main896e52159d8d97377754a602de7f74300304f3d9由GitHub GET獨立核實，精確基線tree fdeb15957e9f62d6072b6090062e773459aaf987；本地占位e798400僅用測試，不能推送。兩目標頁原基線blob相同，按slug/key合入，保留#193兩頁及#194已合併單張照片/registry/pending，未帶#192或其他未授權照片候選。

集成validate PASS；最終單次完整436 passed (2.0m)，session52514 exit0，日誌/tmp/sixteenth-integrated-validate.log與/tmp/sixteenth-integrated-full.log。舊430屬舊基線歷史結果；兩頁產品與專項程式碼逐字節保持獨立QA通過版本，來源現況/入口/路權/安全未核限制不變。CSV174只目標2行改、其餘172行不變，舊圖完全保留。

本段及CSV集成驗證記錄於全量後追加，非產品行為修改；清理本輪config/node_modules鏈接，未提交推送，NOT_DEPLOYED。
