# 交付驗證紀錄

最後本地驗證：2026-10-10（America/Los_Angeles）。交付為程式碼及本地靜態網站，未部署、未修改DNS或建立Cloudflare資源。

## 已通過

| 檢查 | 結果 |
| --- | --- |
| Astro檢查 | 40個檔案；0 errors、0 warnings、0 hints |
| Astro建置 | 244個HTML頁面，202個最佳化圖片輸出 |
| 產物檢查 | 16,037個站內引用、590個圖片實例、1,393個結構化資料節點 |
| 內容 | 9個集合、225篇Markdown、153個景點、12條路線 |
| 照片 | 30張本地金門實景，各附作者、來源、授權和修改說明 |
| 精確版本 | 依賴未變更，pnpm@10.32.1、TypeScript6.0.3符合check支援範圍 |
| 鎖定檔 | 凍結鎖定檔離線安裝成功，無鎖定檔變更 |

完整產物檢查輸出在verification/check-and-build.txt，涵蓋title、description、canonical、H1、OG、JSON-LD、站內連結、錨點、圖片alt與尺寸、sitemap、robots及版本固定。

## 本輪內容與互動驗收

84個指定名稱對應78個內容頁：新增62個景點、4個配套指南，並補全原有12個指定頁面；另外新增2條一日路線，更新地區和相關頁。名稱清單獨立保存在tests/fixtures/east-places.json。

全站景點按金城41、金湖47、金沙19、金寧12、烈嶼34歸類。尚義公園與園內風獅爺合併；金湖料羅媽祖公園與烈嶼羅厝區分。太武山主頁串聯登山點，申請制營區、未確認開放的龍堡及營運異動另提示。

內置瀏覽器在390×844下核對金湖47個篩選結果、金湖分區表與八二三照片無橫向溢出；首圖載入正常。人工驗證Dao Ying Ta、良金牧場、嘯天風獅爺、警光會館、羅浮碑和水頭碼頭查詢均可到達正確頁面，警光會館停業提示可見。

Playwright共23個案例、桌面和手機兩種設定，46項。涵蓋原有旅行清單、導航、搜尋、地圖、FAQ、下載與本次84個名稱，以及場所用途、行政區、開放限制和新路線；最終結果以GitHub Actions對應提交的工作流程為準。

本機獨立Chrome先前啟動遇SIGABRT／EPERM，未進頁面斷言，本輪使用內置瀏覽器與GitHub CI，不把本地獨立Chrome列為通過。

## 尚待正式部署環境確認

既有Wrangler本地dry-run未確認成功：曾辨識靜態資產後無完成回應，已停止等待。配置採Workers Static Assets；正式上線前需完成預檢，並測試headers、301、404與HTTPS。沒有執行部署。

聯絡信箱及合作商家尚待站方設定，目前提供真實官方名錄和本地聯絡草稿，沒有假送信、預訂或收款。交通、場館及活動資訊在正式發布前應重查。

## 重現

```sh
corepack pnpm install --frozen-lockfile
ASTRO_TELEMETRY_DISABLED=1 corepack pnpm validate
corepack pnpm exec playwright install chromium
ASTRO_TELEMETRY_DISABLED=1 corepack pnpm test:browser
```
