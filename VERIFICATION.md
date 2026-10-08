# 交付驗證紀錄

最後驗證：2026-10-08。交付範圍為完整原始碼與本地靜態網站，未部署、未修改 DNS，未建立 Cloudflare 資源。

## 已通過

| 檢查 | 結果 |
| --- | --- |
| `astro check` | 35 個檔案；0 errors、0 warnings、0 hints |
| `astro build` | 74 個 HTML 頁面；99 個最佳化圖片輸出 |
| `node scripts/verify-build.mjs` | 74 頁、4,227 個站內引用、260 個圖片實例、400 個結構化資料節點 |
| 內容 | 9 個集合、55 篇 Markdown、12 個核心景點、5 個鄉鎮 |
| 圖片來源 | 15 張本地金門實景；附作者、來源、授權及修改說明 |
| 版本 | 直接依賴全部精確固定；`pnpm@10.32.1`；TypeScript 6.0.3 在 `@astrojs/check@0.9.10` 的 peer 支援範圍內 |
| 鎖定檔 | `pnpm install --frozen-lockfile --offline` 成功，無鎖定檔變更 |

產物檢查涵蓋獨立 title / description、canonical、H1、語言、OG、JSON-LD、站內連結、錨點、圖片 alt / 尺寸、sitemap、robots 與版本固定。完整檢查輸出保留在 `verification/check-and-build.txt`。

## 內置瀏覽器實際操作

桌面以 1440 × 1000、手機以 390 × 844 檢查本地正式建置預覽。

- 首頁主視覺正常載入；桌面及手機首頁沒有橫向溢出。
- 手機導覽可開啟，Escape 可關閉，首頁路線按鈕到達三天兩夜文章。
- 景點欄目有 12 筆；篩選烈嶼只顯示九宮坑道；無結果提示與清除篩選正常。
- 搜尋「水头」可匹配「水頭」內容；無結果狀態正常；重設顯示 55 篇。手機搜尋及篩選同樣可用。
- 4 天、公車步行推薦不租車路線；2 天、機車推薦兩天一夜並連至機車租賃指南。
- 景點地圖初始沒有 iframe `src`；選擇烈嶼並點「圖上查看」後才載入對應九宮坑道座標。外部底圖的持續可用性不屬於本地驗證保證。
- FAQ 可展開。聯絡草稿按鈕觸發本地下載流程並顯示「資料尚未寄出」；內置瀏覽器未回傳下載完成事件，因此沒有確認實際落盤的文字檔案。
- 手機抽查翟山坑道、三天兩夜、金城住宿、烈嶼、美食總覽、公車指南、照片授權及 404；未發現橫向溢出或首屏圖片缺失。這批操作的瀏覽器錯誤紀錄為空。

## 未完成的環境驗證

已附 Playwright 的 7 項測試、桌面與手機兩種設定（共 14 項）。此環境中的獨立 Chrome 測試進程在啟動時遭遇 `SIGABRT` / `EPERM`，未能執行頁面斷言；**不能視為 14 項自動測試通過**。內置瀏覽器的上述實際檢查是另行完成的驗證。可在一般開發環境或隨附 GitHub Actions 執行完整測試。

Wrangler 本地 `--dry-run` 在讀取明確指定的 `wrangler.jsonc`、識別靜態資產後沒有完成回應，已停止等待；**Cloudflare 本地預檢尚未確認成功**。配置採用 Workers Static Assets，正式上線前仍需在可正常執行 Wrangler 的環境完成預檢，並實測 `_headers`、301、404 和 HTTPS。沒有執行實際部署。

## 營運設定

站方尚未提供聯絡信箱與合作商家。`PUBLIC_CONTACT_EMAIL` 和 `src/data/partners.ts` 保留真實設定入口；目前提供本地聯絡草稿與官方名錄連結，不會假裝寄送、預訂或收款。內容中的營業狀態、交通與活動公告應在發布前重新核對。

## 重現命令

```sh
corepack pnpm install --frozen-lockfile
ASTRO_TELEMETRY_DISABLED=1 corepack pnpm validate
corepack pnpm exec playwright install chromium
ASTRO_TELEMETRY_DISABLED=1 corepack pnpm test:browser
corepack pnpm cf:dry-run
```

以上不包含正式部署命令。
