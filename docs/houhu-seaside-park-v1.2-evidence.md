# 后湖海濱公園 v1.2 本地遷移證據

2026-11-05 UTC；本子代理負責單頁實作，主代理另行獨立驗收及紀錄進度。未提交、推送、部署，未修改 CSV 或本地進度檔。已讀 AGENTS、在庫 relay skill、v1.2 template、CSV。本環境 gh 無 git repository，GitHub Issue #59 公開讀取404，已回報主代理，不聲稱完成遠端讀取。

## 原文與圖片盤點

原三個 H2「在料羅灣西岸看海」「怎麼到、停留多久」「海岸與戲水提醒」完整搬至 FAQ 後的「行前規劃與深度遊覽」H3，原四段實質內容保留，僅將座標導航斷言改為先核對實際入口、原地圖點位改成未核短鏈說明。金城/烈嶼海濱公園、金寧指南、成功沙灘、官方近站及原短鏈全部保留。原 frontmatter related 與來源保留，新增2019歷史公告。

原圖 place-houhu-seaside-park 未動，metadata 的2014年入口/步道/海景 alt、rheins、CC BY 3.0、Commons來源及WebP裁切聲明未動。只有一張主圖，不設相冊。

## 來源及限制

- https://www.kinmen.travel/zh-tw/Travel/Attraction/480 ：主代理已提供官方列停車與無障礙項目的初步證據。本子代理直接web讀大寫路徑失敗、小寫路徑僅返回定位點，未假稱重新讀得完整正文；正文限定為官方資料記載，設施現行可用性與可達範圍未核。
- https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=480&type=Attractions ：本子代理直接讀得后湖村莊550–551公尺、8繞金城市區、3往山外及不繞民航站分支；頁面明示僅供站牌參考。未編造班次、實走距離、步行時間。
- https://www.kinmen.travel/zh-tw/news/details/2362 ：本子代理直接讀得2019-07-12公告，當年專區、縣府救生與大學協助屬2019歷史安排。正文不沿用歷史開放日期、時段、服務為現況，不從發布者推斷公園/水域當前管養及產權。
- https://maps.app.goo.gl/QRtPb3bPH8cNUR5x8 ：本子代理web無法讀取，沒有核到具名POI或顯示地址；保留原來源但設googleMapsVerificationPending，不輸出導航、schema address或hasMap。原站座標保留為待複核位置參考，不稱入口已核。地址欄明記待核，位置描述另列。

現行管理/維護/土地所有權/水域責任分工、一般門票、當季水域及救生、設施使用、具名POI地址/連結與座標來源仍待核。不因資料不足虛構事實，不標VERIFIED。

## 驗證

新增 tests/attraction-detail-houhu.spec.ts，覆蓋桌機/手機唯一H1、canonical、模組次序、3原題、照片信用、6 FAQ逐字對照HTML/frontmatter/FAQPage、管理待核與不連假管理者、未核POI schema省略及全島地圖不提供導航、行程加入/移除、無橫向溢出。實際執行結果由下方補記。

實際結果：corepack pnpm validate 通過，0 errors / warnings / hints，556 pages、48,677 internal references、1,884 image instances、4,109 schema nodes（詳 /tmp/houhu-validate.log）。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-houhu.spec.ts：桌機、手機 2 passed（1.6s），詳 /tmp/houhu-browser.log。首次沙箱 localhost 4339 監聽 EPERM，授權執行後可啟動；首次測試發現既有頁尾自動來源區導致測試預期過嚴，移除正文重複來源H2並以主要模組次序驗證，再完整validate及專項測試通過。未跑全套browser，交主代理批次總驗收。

本子任務只寫：src/content/attractions/houhu-seaside-park.md、src/data/attraction-detail-pilots.ts 的 houhu-seaside-park key、tests/attraction-detail-houhu.spec.ts、本證據檔。未改照片、其他景點、其他集合、CSV/本地進度。來源未核事項使本頁不得宣稱正式live驗收，待主代理獨立審查。

## 獨立 QA 後修正（2026-11-05）

主代理獨立 QA 指出，未核座標即使關閉導航，仍可能被共用renderer輸出為 /map marker 及 TouristAttraction.geo。已移除本頁 coordinates 欄位，原值 `24.4158999, 118.346068` 僅在本證據作歷史存檔；不輸出標記、圖上查看按鈕及結構化geo。pilot基本資料改成座標待核說明，不再展示數值作指引。

原未核短鏈 `https://maps.app.goo.gl/QRtPb3bPH8cNUR5x8` 從 frontmatter sources 可點擊清單移除；正文改為inline-code純文字歷史紀錄，保留證據但不提供可點擊Maps連結。原文「定位」說法同步修正。此段優先於上述保留座標及原鏈描述。

專項測試補驗本頁geo不存在、coordinates缺席、article沒有Google Maps/短鏈超連結、全島地圖本卡沒有data-pin及原坐標data-pin。等待主代理完整套件結束後再構建與重跑，以免干擾並行驗收。

最終 QA 修正後驗證：主代理全套308 passed、2 failed定位到 tests/site.spec.ts 舊后湖用例要求未核坐標導航；僅更新該用例，保留原金寧列表/照片/區域指南驗證，加入未核導航連結缺席與geo/hasMap缺席斷言。未改其他用例。

再次 corepack pnpm validate 通過：0 errors/warnings/hints；556 pages、48,676 internal references、1,884 image instances、4,109 schema nodes。CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-houhu.spec.ts tests/site.spec.ts --grep Houhu：桌機/手機共4 passed（2.4s），已覆蓋移除座標及短鏈後的實際輸出。logs：/tmp/houhu-validate.log、/tmp/houhu-browser.log。新增本批變更範圍 tests/site.spec.ts 的后湖單一用例；沒有共用renderer變更。
