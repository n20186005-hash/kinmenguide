# 介壽亭與介壽公園 v1.2 本地遷移證據

2026-11-05 UTC。子代理單頁實作，主代理另作獨立QA。已讀AGENTS/relay Skill/template；本頁MD、registry自身key、新測試/證據為本次範圍，不改CSV/進度、不提交推送部署。另依主代理授權窄修上一頁建功admission「官方景點頁列免費；個別活動另查」，並補該頁證據。

## 原文與照片

原四題「龍蟠山腰的六角亭」「一段短程散步」「雨後注意階梯」「附近怎麼安排」逐字保留至FAQ後H3。原山腰/六角亭/軍民史、不把不同園區當平坦相通、入口指示、雨後階梯/飲水/不保證服務及麒麟山/后頭/烈嶼/兩天所有連結均在。

原圖place-jieshou-pavilion、alt烈嶼介壽公園入口與園內介壽亭、烈嶼鄉公所、政府網站資料開放宣告、官方source與原Download.ashx original、WebP裁切說明未改。一張主圖不設空相冊，照片不證明今日步道/設施可用。

## 官方核對與年代界限

https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=E9904C4AEF4C0B73 子代理直接open timeout，官方搜尋摘錄可核龍蟠山左側/半山腰、亭1970-10-31、公園1971-05-16由虎軍部隊興建。兩個營建事件分列，不推成同年或今日管理角色；未採來源可疑園區面積字段填配額。

https://research.kinmen.gov.tw/Upload/RelFile/Research/Etext/1438/637413827958158988.pdf 早期初查將2018報告句子解讀為鄉公所管理介壽，獨立QA指出對象上下文未核准，此解讀已撤回。本子直接open timeout；官方搜尋可核107年研究報告存在，但未重新讀到該管理表格，未假稱獨立完整逐頁核對。不能確認該句對象，已從正文、FAQ、registry及可點擊來源移除，不作歷史或現行管理證據。

Google：本子直接以烈嶼介壽亭全名開Maps查詢不可讀，具名地址/入口未核。原頁無coordinates，保持無座標，googleMapsVerificationPending且不填googleMapsUrl；沒有schema address/geo/hasMap、/map導航與marker。鄉公所龍蟠山位置另列locationDescription，非Google門牌。

固定時間、費用、現行准入、專用停車、公車近站、步道現況/相通關係、連續無障礙及服務未核。不以涼亭推全天免費、不把歷史營建/管理當現任與所有權、不編造步道里程或實走時長。

## 檢查

新增tests/attraction-detail-jieshou.spec.ts驗單H1/canonical、模組次序/4原題、原照片信用/無相冊、6FAQ逐字同步、2018管理與產權待核、管理待核、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除、手機不溢出。與修辭後建功頁一起驗證，結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,772 internal references、1,884 image instances、4,119 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-jieshou.spec.ts tests/attraction-detail-jiangong.spec.ts：兩頁desktop/mobile共4 passed（2.4s），4339已結束。logs：/tmp/jieshou-validate.log、/tmp/jieshou-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。


## 獨立QA撤回對象未明的管理解讀

2018 PDF未直接核准上下文，不能確認管理句指介壽。已移除「2018報告曾記鄉公所管理介壽亭」及其變體，不再作歷史管理事實。移除frontmatter/正文/manager的PDF連結，manager僅連鄉公所景點歷史介紹且不把名稱變成已核管理機關。FAQ、基本資料、about與提醒均明記管理/維修/產權/准入待核；原四個專題保持。此撤回優先於此前記錄與測試結果。

測試已改驗沒有該管理斷言、沒有research域可點擊來源，以及介紹發布者不等於已證實管理者/所有者。按照主代理要求暫不構建，等待正在跑的全套結束後重驗。

## 原圖許可連結疑點（只記錄，不改原授權）

原photo metadata署名烈嶼鄉公所，source為鄉公所旅遊頁，licenseUrl卻連金門觀光旅遊網 https://kinmen.travel/zh-tw/gwoia 。本子直接讀該宣告，可讀一般縣府暨所屬機關網站資料利用及出處要求，亦有特別聲明與第三人權利例外；但原鄉公所來源頁本輪仍timeout，未核到該張圖片的個別聲明/攝影權利。不能僅憑別站宣告斷定這張圖全部權利已核清；記待確認。依指示保留原照片、署名、license字串、licenseUrl與original不變，未自行改掛新授權，也未聲稱授權已重新證實。

撤回2018管理解讀後最終重驗：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,782 internal references、1,884 image instances、4,120 schema nodes。介壽desktop/mobile專項2 passed（1.2s），包含PDF管理證據連結缺席、未證實管理者及FAQ同步；4339已結束。最新logs：/tmp/jieshou-validate.log、/tmp/jieshou-browser.log。原圖許可疑點保持待核，未改metadata；待主代理獨立QA/全套回歸。


## 2026-11-06 本次有界候選補核

歷史本地QA/測試是當時記錄。主代理提供獨立Maps UI同對象點 https://www.google.com/maps/place/Jie+Shou+Ting/@24.4316714,118.2550378,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x341498d850e007bd:0x4a5700b20ccb1a12!8m2!3d24.4316714!4d118.2550378!16s%2Fg%2F1v3kf39_ 。具名身份已核，Google顯示地址與實地入口/當日准入未核，不啟用geo/hasMap/導航marker。

縣府2025-01-02實際健走活動經過介壽公園，僅支持當次公眾步行背景，不證明今日入口、全園、管理權屬或固定開放。 來源：https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=D802DCD8C4BBB0BA&sms=BF7D6D478B935644 。不推管理、產權、停車或全區安全；無已確認可公開通行且安全停留範圍時不進入。原圖/照片metadata/署名/許可全保留，依用户指示不重新審核或刪減既有圖片。

當時本次validate/獨立QA/全量待完成（歷史準備狀態，以末段結果為準）；未提交推送部署。#192與峰上Google照片候選保持暫停，未帶入本批。

## 本次最終本地驗證與獨立QA

精確main bc17144d5fc2cae1f852ffcaaa7c861aa57a8e03 / tree8d61da2927837efed625308092736d5d1f918d56，僅clone release-fuji-photo乾淨HEAD，未取其暫存/工作樹峰上候選。

validate PASS；兩頁桌面/手機4專項 passed (2.1s)；最終單次完整430 passed (1.9m)。日誌 /tmp/fifteenth-final-validate.log、/tmp/fifteenth-focused.log、/tmp/fifteenth-full.log。CSV共174資料行，僅本批兩slug改，其餘172行不變；照片metadata、pending及所有二進位保持。

全量結束後僅補本段/CSV測試欄，未改已測頁面與測試。臨時配置/依賴鏈接清理。主代理已回報獨立QA通過；不宣稱部署或VERIFIED，不提交推送，#192與峰上Google照片公開提交保持暫停。

### 獨立QA最終結果
2026-11-06主代理回報獨立QA通過：兩個Maps均為同對象，官方活動/路線僅支持有日期的公眾使用背景；岸段、軍界及當日條件式安全觀察限制保留，照片、FAQ/schema及CSV範圍無阻斷。來源現況、管理/產權、實地入口與當日准入仍有未核項；未部署、非VERIFIED。本次只修QA證據/CSV紀錄，不改已通過validate、4專項及完整430 passed (1.9m)的產品/測試。
