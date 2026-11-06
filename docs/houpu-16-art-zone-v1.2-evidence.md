# 後浦16藝文特區 v1.2 本地遷移證據

2026-11-05 UTC。本子代理單頁實作，主代理另作獨立QA。此前已讀AGENTS、relay Skill與template；未動CSV/進度、不提交推送部署。只改本頁MD、registry自身key、新專項測試與本證據。

## 原文與照片保存

原三題「正式名稱是後浦16」「老屋裡看新的手作」「放進後浦步行圈」逐字搬為FAQ後深度H3；保留正字/搜尋寫法、十六店屋、花磚巷、品牌更動提醒、總兵署/模範街/奶茶街所有原連結與內容。related保留金城指南。

原圖place-houpu-16-art-zone、alt後浦16藝文特區實景、金門縣政府觀光處署名、政府網站資料開放宣告、來源1454及裁切轉WebP說明不變。original：https://kinmen.travel/attractions/36413/1024x768_attractions-image-t9hymahyf0uzxfzp1v5ena.jpg 。一張主圖不設空相冊。

## 官方核對與界限

https://kinmen.travel/zh-tw/travel/attraction/1454 本子代理web直接open只有定位點；官方域搜尋摘錄可讀免費與每日24小時字段，與主代理初查一致。只解釋景點一般參觀字段，不能當店家/室內空間24小時營業、夜間安全或所有活動免費保證。

https://www.taiwan.net.tw/m1.aspx?id=A12-00628&sNo=0001016 本子代理直接可讀完整正文：產權為社團法人福建省金門縣潁川堂陳氏宗親會；2011年起「本所」與民間合作活化。依主代理官方核查，此合作指鎮公所與民間；本頁保持產權、合作背景及現行營運三層區別，未將觀光署發布者/鎮公所/宗親會直接冒充完整現任經營管理者。現行管理契約、進駐店家、營業與活動細節待核。

同頁提供莒光路112號與電話082-325057，以及西門里公所、中正國小、金城站近站；屬直線距離，未實走，正文不列步行分鐘或保證通行。只連公車動態查詢，不編造班次。專用停車與無障礙未核。

Google地圖：本子代理獨立搜尋完整名稱；官方交通部頁address點擊實際只導向daddr=24.432966,118.31689坐標，web無法顯示Google具名POI。本頁不以官方坐標導航當具名地址核實，googleMapsVerificationPending且無googleMapsUrl/coordinates，因此不輸出schema address/geo/hasMap，也無/map導航與marker。原站坐標24.43278,118.31701僅保存在本證據；官方地址另列locationDescription，避免冒充Google顯示地址。

## 檢查

新增tests/attraction-detail-houpu.spec.ts驗唯一H1/canonical、模組順序/3原題、原照片信用/無相冊、6FAQ與JSON-LD逐字同步、產權/24小時不等於店家營業/管理待核、無Maps連結/geo/address/hasMap、/map無本點導航/marker、行程加入移除及手機溢出。實際結果下方補記。

實際結果：corepack pnpm validate 通過0 errors/warnings/hints，556 pages、48,704 internal references、1,884 image instances、4,112 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-houpu.spec.ts：desktop/mobile 2 passed（1.7s），4339已結束。logs：/tmp/houpu-validate.log、/tmp/houpu-browser.log。待主代理全套與獨立QA，不是live驗收，未提交推送。
