# 金城老街（後浦小鎮）v1.2 本地遷移證據

2026-11-05 UTC。子代理獨立查核/實作，主代理另作QA。已讀AGENTS/relay Skill/template，僅本頁MD/registry自身key/新測試/證據，另按主代理指示將pilot未opt-in fixture改金城海濱休閒公園。不改CSV/進度、不提交推送部署。

## 原文與照片

原四題「這裡是後浦，不是金門城北門」「用三個節點組成散步圈」「白天逛店，夜晚聽故事」「金城住宿如何銜接」逐字保留FAQ後H3。總兵署/後浦16/模範街/美食/夜遊、三個住宿與所有原連結保留；原住宿與飲食僅供另查，不把保留名稱當今日營業/房態已核。原並非正式單一路名與明遺老街區別保留。

原place-kincheng-old-streets、alt後浦小鎮商圈實景、金門縣政府觀光處、政府網站資料開放宣告、source1639、original https://kinmen.travel/attractions/36416/1024x768_attractions-image-ff6hbqjmyua4zdehb-zisa.jpg 及裁切轉WebP不變。一張主圖不設空相冊，照片非現行進駐名單或各店營業證據。

## 官方範圍與現況界限

https://kinmen.travel/zh-tw/travel/attraction/1639 子代理直接open只有定位點，官方搜尋可讀2026-04-08介紹文化節點、一般免費與24小時。這是商圈欄位，非每店/每館全天開放或服務全免費，也不是地籍法定邊界。

https://kinmen.travel/zh-tw/discover/commercial-district 官方搜尋可讀後浦節點含總兵署、節孝坊、浯江書院、模範街、後浦16與城隍廟，未採全頁其他商圈資料混入本頁。這些是文化遊覽範圍，不推統一管理/產權，不照抄舊店單保證現行營業。

https://kinmen.travel/zh-tw/discover/tour/22 子代理直接可讀2026-01-15更新，莒光路、珠浦南路、光前路一帶文化介紹，夜遊19:30總兵署現場報名/免費與082-371717。本文只列來源記錄，當晚仍要核成團與調整，未完整複製遊程當實測GPX。

獨立搜金城鎮公所商圈管理資料主要是網站目錄、個別場館或後浦16的歷史委託案，未取得全街區統一管理或整體產權證據，不把個館/歷史標案套後浦全區。公共道路、文化資產、民宅與商家分工待核，發布旅遊或導覽不等於全部管理。

Google後浦小鎮商圈全名Maps直接查詢不可讀具名POI，設pending無coordinates/googleMapsUrl；原24.43206,118.31551只存本證據，無schema address/geo/hasMap及/map導航/marker。旅遊街巷描述另存locationDescription，不填統一門牌。當日店家、住宿接待、停車、公車班次與連續無障礙未逐一查。

## 測試與fixture

按主代理授權，tests/attraction-detail-pilot.spec.ts未opt-in樣本由金城老街改尚未遷移kincheng-seaside-park，保留其他集合及未遷移不受影響守衛；後續遷移該樣本須再調整，不修改其內容。

新tests/attraction-detail-oldstreets.spec.ts驗單H1/canonical、次序/4原題（含住宿）、照片信用/無相冊、6FAQ逐字同步、旅遊範圍非法定邊界/店家未逐家核、管理待核、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除、手機不溢出。待主代理通知後構建測試。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,833 internal references、1,884 image instances、4,124 schema nodes。老街及未opt-in fixture回歸desktop/mobile共4 passed（2.5s），4339已結束。logs：/tmp/oldstreets-validate.log、/tmp/oldstreets-browser.log。待主代理獨立QA/全套回歸，非live驗收，未提交推送。

## 2026-11-06 named Google reference point
Independent QA directly checked the named Place in Google Maps UI and supplied this exact URL: https://www.google.com/maps/place/Jincheng+Old+Street/data=!4m7!3m6!1s0x3414a26bbbfaa4e5:0x11a890f39eb67e27!8m2!3d24.4310026!4d118.318837!16s%2Fg%2F1tf384vp. Added only a visible body reference, expressly not a verified entrance, admission, parking, accessibility or private/water access grant. Google pending fields, address, coordinates, hasMap/schema and whole-site map remain unchanged; original image preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current management, ownership and shop hours; named Google POI. Original image preserved; not VERIFIED and not a production acceptance claim.
