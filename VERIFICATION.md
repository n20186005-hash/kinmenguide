# 交付驗證紀錄

最後驗證：2026-10-09。交付範圍為完整原始碼與本地靜態網站，未部署、未修改 DNS，未建立 Cloudflare 資源。

## 已通過

| 檢查 | 結果 |
| --- | --- |
| `astro check` | 39 個檔案；0 errors、0 warnings、0 hints |
| `astro build` | 176 個 HTML 頁面；188 個最佳化圖片輸出，另有品牌社群封面 |
| `node scripts/verify-build.mjs` | 176 頁、11,555 個站內引用、491 個圖片實例、991 個結構化資料節點 |
| 內容 | 9 個集合、157 篇 Markdown、91 個景點（其中34個烈嶼）、5 個鄉鎮 |
| 圖片來源 | 28 張本地金門實景；附作者、來源、授權及修改說明 |
| 版本 | 直接依賴全部精確固定；`pnpm@10.32.1`；TypeScript 6.0.3 在 `@astrojs/check@0.9.10` 的 peer 支援範圍內 |
| 鎖定檔 | `pnpm install --frozen-lockfile --offline` 成功，無鎖定檔變更 |

產物檢查涵蓋獨立 title / description、canonical、H1、語言、OG、JSON-LD、站內連結、錨點、圖片 alt / 尺寸、sitemap、robots 與版本固定。完整檢查輸出保留在 `verification/check-and-build.txt`。

## 瀏覽器驗證

內置瀏覽器在手機 390 × 844 下確認新增清單無橫向溢出、首圖載入正常；中國大陸路線顯示 18 項，勾選後重新載入仍保留路線與完成狀態。切換台灣本島顯示 13 項並隱藏境外專用材料，清空按鈕同時清除其他路線的勾選。首頁的五種出發地與三個準備指南連結已接通。

Playwright 現有 17 個案例、桌面與手機兩種設定，共 34 項，包含搜尋、地圖、路線推薦、聯絡下載，以及新旅行清單的篩選、保存、下載內容、清空、列印、禁用儲存、無 JavaScript 退化行為。新增案例包含奶茶街位置、店名／簡體別名、無照片文字封面，以及未確認座標的地名查詢退化。本輪增加33個烈嶼地名的搜尋回歸，以及青岐南岸海濱公園精確定位、烈嶼篩選入口、虎堡開放提醒和一日／兩日路線測試。內置瀏覽器另核對390×844手機下的海濱公園和烈嶼34列分區表，沒有橫向溢出；首頁地區入口直接篩出34篇景點。

先前本機的獨立 Chrome 進程在啟動時遇到 `SIGABRT` / `EPERM`，未進入頁面斷言；本輪沿用內置瀏覽器檢查與GitHub CI，不把受限的本地獨立Chrome執行列為通過。完整自動驗證由倉庫的 [Verify site 工作流程](https://github.com/n20186005-hash/kinmenguide/actions) 執行；以對應提交的結果為準。

本輪金城新增32個名稱／同地別名覆蓋測試、新舊旅運中心辨認、東洲鄉鎮歸屬、摩西分海單一景點、展示館門牌和受限垂釣資訊檢查。內置瀏覽器確認390×844下金城四區表、新旅運中心、文臺寶塔與南線一日遊無橫向溢出，首圖載入正常；金城篩選顯示36個景點，常見簡體別名可搜尋。

## 尚待正式部署環境確認

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
