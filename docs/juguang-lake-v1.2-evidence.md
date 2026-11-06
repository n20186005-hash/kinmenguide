# 莒光湖 v1.2 本地遷移證據

2026-11-05 UTC。子代理獨立核查/單頁實作，主代理另作QA。已讀AGENTS/relay Skill/template，僅本頁MD、registry自身key、新測試/證據；另依明確授權更新pilot回歸的未遷移樣本為金城老街，不改CSV/進度、不提交推送部署。

## 原文與照片

原三題「市區南邊的一段留白」「季節與光線各有表情」「與親子遊戲分開選」逐字保留於FAQ後H3；湖名/木棉/慢步、花況夕照不保證/不近水餵鳥、親子長輩/熱天縮短與原湖樓公園連結保留。原frontmatter自由走訪改准入待核，原登樓/室內時間移除混用，湖樓公園各別看。

原place-juguang-lake、alt莒光湖實景、金門縣政府觀光處、政府網站資料開放宣告、source514及WebP裁切聲明不變。original：https://kinmen.travel/attractions/2006/1024x768_image_636361798232519640.jpg 。一張主圖不另設空相冊，照片不證明當日路面/水域開放。

## 獨立核查

https://kinmen.travel/zh-tw/travel/attraction/514 子代理直接open只有定位點，官方搜尋摘錄可核2025-05-28介紹金城鎮南門里、鄰莒光樓得名及湖畔木棉/夕陽景觀。本輪未核固定票價或開放字段，不由戶外空間推全天免費。

https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=20770E1DC5D16FCE&sms=BF7D6D478B935644 官方域搜尋可讀消防局在莒光湖救溺演練與防溺宣導，僅作安全背景；不是遊客可下水許可、當日水質安全、救生員駐點或今日開放證明。救援角色不作湖區整體管理證據。

另搜尋現行管理/水域/2026資料，多是節慶、巡邏、救援演練、都市計畫或歷史公園文章，未取得可明確認定此湖現任管理、土地權屬及日常維護的直接依據。未挪用共融公園活動承辦、莒光樓管理或模糊規劃表格；管理、准入及費用待核。

Google全名Maps直接查詢不可讀具名POI，入口未核。設googleMapsVerificationPending，去coordinates，原24.42739,118.31647只留本證據；無schema address/geo/hasMap、/map導航或marker。原西海路三段記錄另存位置描述，非Google門牌。湖岸照明/護欄/廁所、連續無障礙、停車公車與水域活動許可均未核。

## 回歸與測試

主代理授權將tests/attraction-detail-pilot.spec.ts未opt-in樣本莒光湖改為尚未遷移金城老街（kincheng-old-streets），保持其他集合守衛與未遷移景點不受影響的意圖。下次遷移該樣本時須再調整；沒有改其內容。

新增tests/attraction-detail-lake.spec.ts驗單H1/canonical、次序/3原題、照片信用/無相冊、6FAQ HTML/frontmatter/schema逐字一致、岸上非水域開放/救援非准入、管理待核、無Maps鏈/geo/address/hasMap、/map無導航/marker、行程加入移除及手機不溢出。結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints；556 pages、48,813 internal references、1,884 image instances、4,122 schema nodes。莒光湖及未opt-in回歸desktop/mobile共4 passed（2.5s），4339已結束。logs：/tmp/lake-validate.log、/tmp/lake-browser.log。待主代理全套與獨立QA，非live驗收，未提交推送。

獨立複核補記（2026-11-05）：縣府救溺演練報導可直接讀取，頁載 2023-06-04，記消防人員模擬溺水救援，並非水域開放公告。https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=20770E1DC5D16FCE&sms=BF7D6D478B935644

## 2026-11-06 named Google reference point
Independent QA directly checked the named Place in Google Maps UI and supplied this exact URL: https://www.google.com/maps/place/Ju+Guang+Lake/data=!4m7!3m6!1s0x3414a214f0d944ef:0xb6360d796a3e1ee5!8m2!3d24.4273874!4d118.3164672!16s%2Fg%2F1v41y1yq. Added only a visible body reference, expressly not a verified entrance, admission, parking, accessibility or private/water access grant. Google pending fields, address, coordinates, hasMap/schema and whole-site map remain unchanged; original image preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: current management, access, facilities and water safety; named Google POI. Original image preserved; not VERIFIED and not a production acceptance claim.
