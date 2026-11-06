# 金門縣陶瓷廠 v1.2 本地遷移證據

2026-11-05 UTC。子代理獨立核查/實作，主代理另作QA。已讀AGENTS/relay Skill/template；僅本頁MD/registry自身key/新測試/證據、授權pilot fixture移金門城東門，另修大橋QA正面通行描述並同批驗證。不改CSV/進度、不提交推送部署。

## 原文照片

原三題「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」置FAQ後H3保留。1963/酒瓶工藝/注漿修坯燒製彩繪、導覽DIY預約/不進生產區、良金漁村160號與太湖/成功沙灘原內容連結保留；工藝可看改依館舍/預約確認，原分段時段加新DIY頁與FAQ衝突，不保證照舊開門。

原place-kinmen-ceramics、alt金門縣陶瓷廠實景、金門縣政府觀光處、政府網站資料開放宣告、source664、original https://kinmen.travel/attractions/15793/1024x768_attractions-image-dzrgbbnmkewolswza_ifta.jpg 及WebP裁切聲明不變。一張主圖不設空相冊。

## 官方核對

https://kinmen.travel/zh-tw/travel/attraction/664 官方搜尋可核一般免費、可預約參觀酒瓶製作與332857。預約製程介紹不作生產區自由准入或當日全流程可見證明；一般免費不包含DIY/商品全部服務。

https://kmcf.kinmen.gov.tw/cp.aspx?n=3294424713DDCCFE 官方搜尋可讀2023-11-17組織表，廠長/生產研發課/行政課等明列廠務、生產與營銷職掌。加上官方門市DIY與FAQ權責單位，支持金門縣陶瓷廠服務經營角色；未據此擴稱所有土地權屬或個別委外全數已核。

https://kmcf.kinmen.gov.tw/cp.aspx?n=7E3268FD5EF74DFD 子代理直接open timeout，官方搜尋完整摘錄可讀2026-04-15、更新2026-09-02：門市週一至日08:00–17:30、手拉坏500/彩繪390、手捏陶暫停/手拉坏不定期開課、提前來電預約、含代燒/快遞另計。頁面明寫以門市現場價格為準，本頁標來源時點與電話再核，不保證天天開課或當日取成品，未照抄匯款帳號。

https://kmcf.kinmen.gov.tw/News_Content.aspx?n=F24CF5A591E86D17&s=E6A0E9B8720B4EAA&sms=B675900615BB79BF 直接open timeout，官方搜尋可讀週一至五分段/週六不同/週日休、權責金門縣陶瓷廠行政課門市部與332857。與DIY時間不同，逐來源並列，不能任選其中作今日開門保證。

2020親子嘉年華官方文章曾記博物館/生產線參觀及300元DIY；2026觀光夏季課程1069–1071則列不同人數/年齡/價格。均為項目/季節記錄，不能混為常態價格或現在生產線必開。本文只用歷史活動作不可沿用的說明，沒有新增保證目前可參加。

Google全名Maps直接查詢不可讀POI，pending無coordinates/googleMapsUrl；原24.43562,118.40662只留本證據，無schema address/geo/hasMap及/map導航/marker。官方漁村14號獨立存位置描述，不當Google門牌/生產區入口。現行館舍/導覽/項目/交期、停車公車/無障礙及土地/委外細節待核。

## 測試

新tests/attraction-detail-ceramics.spec.ts驗單H1/canonical、次序/3原題、主圖信用/無相冊、6FAQ逐字同步、時間衝突/生產區非自由入/停辦項目、官方組織來源、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除與手機不溢出。fixture按主代理指示移尚未遷移kinmen-city-east-gate，下次遷移該頁須再換。與大橋QA修正一併驗證，結果下方補記。

本次實際結果：validate0 errors/warnings/hints，556 pages、48,872 internal references、1,884 image instances、4,128 schema nodes；大橋正面規則修正/陶瓷專項及pilot fixture桌機手機共6 passed（2.7s），4339已結束。logs：/tmp/ceramics-validate.log、/tmp/ceramics-browser.log。待主代理獨立QA與全套回歸，非live驗收，未提交推送。

## 2026-11-06 named Google reference point
Independent QA directly checked the named Place in Google Maps UI and supplied this exact URL: https://www.google.com/maps/place/Kinmen+Official+Kiln/data=!4m7!3m6!1s0x3414a48ecddb25f3:0xa8584aa4555e848b!8m2!3d24.4356168!4d118.4066282!16s%2Fg%2F1tf0n7gn. Added only a visible body reference, expressly not a verified entrance, admission, parking, accessibility or private/water access grant. Google pending fields, address, coordinates, hasMap/schema and whole-site map remain unchanged; original image preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: conflicting opening hours and current booking; named Google POI. Original image preserved; not VERIFIED and not a production acceptance claim.
