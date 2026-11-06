# 后麟模擬靶場 v1.2 本地遷移證據

2026-11-05 UTC。本子代理實作，主代理安排Luna官方核查與獨立QA。已讀在庫AGENTS/relay Skill/template；未修改CSV及本地進度，不提交推送部署。

## 原文與照片

原四題「舊營區裡的模擬體驗」「年齡、預約與報到」「票價與場次以當期公告為準」「附近怎麼安排」原文搬為FAQ後H3；保留約40分鐘、12歲、預約電話、報到/陪同/證明、維護與夜間矛盾、不同身分票別須確認、不代收證件費用及所有順遊連結。新增特定比賽費用區別，不套為一般門票。

原圖place-houlin-shooting-simulator、alt后麟步槍模擬射擊館實景、金門縣政府觀光處署名、政府網站資料開放宣告、原始1531來源及WebP裁切說明不變。原圖original：https://kinmen.travel/attractions/10436/1024x768_attractions-image-_xm39t-rn0uslbl4b2pika.jpg 。一張主圖，無空相冊。

## 來源及查核界限

https://kinmen.travel/zh-tw/travel/attraction/1531 ：Luna初步核對官方預約082-363455及分梯。本子代理web直接open僅定位點，官方搜尋摘錄可讀電話、全套約40分鐘、上午梯次及夜間梯次字段。不假稱完整頁面成功載入；原頁既有12歲、08:00–17:30與夜間表矛盾保留並要求再確認，未承諾當日有位或晚間開放。

https://lieyu.kinmen.gov.tw/travel/News_Content.aspx?Create=1&n=38E9BB303B0471DA&s=3B6D84D310BC5FAF&sms=3F98C9AF4C693214 ：Luna提供2026特定比賽200元證據。本子直接open timeout，官方域搜尋可核比賽題名及入口旅遊網收費摘錄，每人每次200元並另依門票基準購票。僅用作特定活動費用範圍，不能作現行一般票價或今天仍辦活動的證據。

Google地圖本子代理以完整館名查詢並直接開啟Google Maps搜尋均無可讀具名POI，沒有可核地址與入口，不把搜尋URL當已核POI。本頁googleMapsVerificationPending；刪除原coordinates，未輸出googleMapsUrl；schema不輸出address/hasMap/geo、全島地圖沒有導航及marker。原坐標24.4390525,118.2586598僅存本證據，原門牌金門縣烈嶼鄉后頭村1號獨立存位置描述且註明待複核，不當Google地址。

現行經營/管理/維護/所有權分工、一般票價、當期資格、夜間及維護日、入口/停車/公車/無障礙待核。不由觀光網發布者或比賽主辦機關推定今日經營者，不編造直達或通行路線。

## 測試

新增tests/attraction-detail-houlin.spec.ts驗單H1/canonical、完整模組順序與4原題、照片信用、6 FAQ逐字同步、特定活動不是一般票價、電話、管理待核、無Maps連結/geo/address/hasMap、/map無本頁導航與marker、行程加入移除及手機溢出。實際結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints，556 pages、48,694 internal references、1,884 image instances、4,111 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-houlin.spec.ts：desktop/mobile 2 passed（1.7s），4339已結束。首次測試事件票價斷言使用未在正文逐字出現的詞組而失敗，改驗實際明列「2026特定比賽200元不是一般門票」後全部通過，內容未因測試改寫。logs：/tmp/houlin-validate.log、/tmp/houlin-browser.log。全套回歸與獨立QA交主代理，未宣稱live接受。

本子任務只修改src/content/attractions/houlin-shooting-simulator.md、registry自身key、新tests/attraction-detail-houlin.spec.ts、本證據檔；CSV/進度與其他集合未改，未提交推送。
