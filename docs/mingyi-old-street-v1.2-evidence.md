# 明遺老街 v1.2 本地證據

查核日期：2026-11-05。僅本地準備，未提交、推送、部署或公開驗收。CSV及進度檔由主代理維護。

## 來源與採納界線

- https://kinmen.travel/zh-tw/travel/attraction/458 ：官方老街介紹，位置為舊金門城北門外，歷史市集、生活器物及故事館。一般整體時段不能證明個別私宅、故事館或商店當日開放；未核現住戶、每館營運者、固定時段和各項費用。
- https://nchdb.boch.gov.tw/city/cabkc.kinmen/assets/overview/historicalBuilding/20041216000015/ ：官方索引列「金門城北門外明遺古街」歷史建築。直接頁面需JavaScript，未直接核完整公告圖、地籍與維護管理上下文，故不推整街每戶、北門皆同一法定古蹟，也不把主管機關視為全街房屋營運者。
- https://nchdb.boch.gov.tw/assets/overview/historicSite/20220401000002 ：「明清金門城遺跡」為另一史蹟個案，不合併法定範圍。
- https://kinmen.travel/zh-tw/nearby/ebus?placeId=458&type=Attractions ：官方鄰站包含明遺古蹟、北門、金門城等；不是直達承諾或實走/無障礙路線。
- Google具名地標本輪未獨立核定；舊座標24.4035936,118.308746不採納導航、marker或schema geo，未捏造POI地址/Place ID。位置描述與地址分欄。

## 原內容及範圍

保留原「北門外的老市集」「街屋與故事館」「古城散步的起點」三專題及站內連結。原place-mingyi-old-street主圖、觀光處署名、政府網站資料開放宣告及credits錨點保留；不新增圖片、不改授權。一張主圖不另設空相冊。

僅本頁、registry自身項、專項測試與本證據；pilot未改造樣本依授權移至muma-hou-shrine：實際檔名不是提議的mu-ma-hou-shrine，已確認前者存在且registry未opt-in。未變更其他集合。

## 待核與驗證

未核完整文資地籍範圍、現居住戶/所有權、各館管理和准入、當期時間/費用、停車、連續無障礙、Google地址/入口。文資身分不代表室內公開。未派遣額外子代理；獨立QA由主代理協調。

## 本地驗證結果

- `corepack pnpm validate` 通過：Astro check 0 errors / 0 warnings；556頁、49093內部參照、1884圖片實例、4150 schema nodes。
- `CI=1 corepack pnpm test:browser --config playwright.takeover.config.ts tests/attraction-detail-mingyi.spec.ts tests/attraction-detail-pilot.spec.ts --grep 'Mingyi|detail pilot does not opt'`：桌面及手機共4 passed（2.5秒）。驗證唯一H1、canonical、十段順序、原三專題/圖片署名、管理及私宅准入界線、FAQ/schema逐項一致、未核導航/座標不輸出、行程增刪、手機無溢出，以及muma-hou-shrine未opt-in。
- 日誌：`/tmp/mingyi-validate.log`、`/tmp/mingyi-browser.log`。4339測試伺服器已隨測試正常結束。

狀態：LOCAL_READY_AWAITING_BATCH_RELEASE，待主代理獨立QA與完整回歸；非部署或VERIFIED。

## 2026-11-06 named-reference identity update
Independent Google Maps UI QA supplied exact named reference: https://www.google.com/maps/place/Mingyi+Old+Street/@24.4035936,118.308746,862m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3414a1f99e56753d:0x960960f9c9f82f57!2sMingyi+Old+Street!8m2!3d24.4035936!4d118.308746!10e5!16s%2Fg%2F1tdggwsl!3m5!1s0x3414a1f99e56753d:0x960960f9c9f82f57!8m2!3d24.4035936!4d118.308746!16s%2Fg%2F1tdggwsl. Identity is checked, not display address, precise visitor entrance, daily admission, parking or accessibility. 街區點不是私宅或故事館入口，法定歷史建築範圍與每戶權屬分開確認。 No Google address/coordinates/schema hasMap/marker enabled. Current-main image and caption preserved, including newly released Peace historical photo; prior no-photo notes are historical. Earlier named-point-unverified notes are superseded for identity only. Await independent release acceptance.
