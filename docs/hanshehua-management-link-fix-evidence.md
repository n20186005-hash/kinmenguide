# 寒舍花管理待核連結窄修

基底 `8901d077a567c0e583bbbff1f503ca4b5b7207f1`（指定main8901d077），獨立工作區hanshehua-manager-ready。完整883個GitHub tree blob逐一重算git hash一致；156個overlay為基線，沒有將既有使用者工作區變更帶入本批。

正式QA發現「目前管理單位：待確認」名稱連向金管處地質解說，容易被讀為管理依據。本修正不增加新來源或管理判定，只將寒舍花 `management.linkName=false` 明確指定不連結名稱；AttractionOverview只有該flag為false時顯示純文字span，未設flag者仍輸出原有管理連結。

地質頁用途不變：首部CTA仍顯示「查看國家公園地質解說」並連同一地質URL；資料來源區同樣保留。管理待核和基本資料內容不變，其他景點、圖片、FAQ、地圖、行程及其他內容集合均無修改。

更動4檔：
- src/components/AttractionOverview.astro（限定flag的名稱顯示guard）
- src/data/attraction-detail-pilots.ts（型別及寒舍花唯一opt-out）
- tests/attraction-detail-hanshehua.spec.ts（管理純文字/地質CTA及翟山既有管理連結回歸）
- 本證據文檔

## 驗證

2026-11-04 15:47:22 UTC本地完成。pnpm validate通過，0 errors/warnings/hints；556頁、48,645 internal references、1,884 images、4,107 schema nodes。完整桌機手機304 passed（1.2m），含寒舍花管理名稱無錨點/地質CTA保留及翟山管理連結默認不變、FAQ/schema、圖片、導航與行程等既有回歸。

完整remote blob scope僅上述三個既有檔及本新證據，其他CSV/registry項目/內容集合/圖片來源/二進位不變；registry反向移除型別新增與唯一false設定後逐byte等於基底。git diff --check通過。獨立authority已復讀最終guard、資料與測試，確認無阻斷。

沒有提交或推送；正式站仍需獨立驗收。
