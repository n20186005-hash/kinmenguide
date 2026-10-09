# Kinmen Guide

金門全島繁體中文旅遊攻略網站。涵蓋金城、金湖、金沙、金寧與烈嶼；**這次交付只有程式碼與本地驗證，沒有部署或綁定網域**。

## 技術與版本

| 項目 | 精確版本 |
| --- | --- |
| Astro | 7.3.5 |
| Tailwind CSS / Vite 插件 | 4.3.3 |
| TypeScript | 6.0.3 |
| @astrojs/check | 0.9.10 |
| @astrojs/sitemap | 3.7.4 |
| sharp | 0.35.4 |
| pnpm | 10.32.1 |
| Wrangler | 4.144.0 |
| Playwright | 1.63.0 |
| Cheerio（產物驗證） | 1.2.0 |

使用 Node.js 22.12 或以上、25 以下，建議依 `.node-version` 使用 24.21.0。`@astrojs/check@0.9.10` 支援 TypeScript `^5.0.0 || ^6.0.0`，因此固定 6.0.3，沒有誤用不在支援範圍的 TypeScript 7。直接依賴皆為精確穩定版本，`packageManager` 與 `pnpm-lock.yaml` 隨附。

## 本地啟動

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

開啟終端顯示的本地網址，通常為 `http://127.0.0.1:4321/`。如果系統尚未提供 Corepack，可先依 pnpm 官方指引安裝 **pnpm 10.32.1**，再使用下列命令。

```sh
pnpm check
pnpm build
pnpm test
pnpm preview
```

一次驗證：`pnpm validate`。受限環境若不允許 Astro 寫入使用者偏好目錄，可設定 `ASTRO_TELEMETRY_DISABLED=1` 再執行命令。乾淨安裝不可略過 optional dependencies：圖片轉換需要 sharp 對應平台的原生套件。

## 瀏覽器驗證

```sh
pnpm exec playwright install chromium
pnpm test:browser
```

測試包含桌面與手機尺寸的導覽、搜尋、繁簡常用地名匹配、欄目篩選、空狀態、行程推薦、FAQ、聯絡草稿下載與地圖載入；另測試五地交通入口、新景點簡體搜尋，以及旅行清單的篩選、保存、文字下載、清空、列印、禁用儲存和無 JavaScript 退化行為，共 26 項。地圖測試攔截外部地圖回應，以驗證交互且避免把外部網路可用性誤當成本地功能測試。也可設定 `PLAYWRIGHT_EXECUTABLE_PATH` 使用已安裝的 Chrome 執行檔。

`pnpm test` 檢查正式建置產物的唯一 title / description、canonical、JSON-LD、所有站內連結與錨點、圖片 alt 與尺寸、sitemap / robots，以及 package.json 精確版本。CI 僅檢查與構建，不含部署工作。

## 已完成的內容

96 篇內容、9 個欄目頁、首頁、搜尋、行程建議、景點地圖、FAQ、About、Contact、Privacy、照片授權及 404，共 115 個 HTML 頁面。

| 內容集合 | 篇數 | 覆蓋 |
| --- | ---: | --- |
| attractions | 32 | 翟山、總兵署、莒光樓、山后、水頭、得月樓、獅山、馬山、模範街、太武山、古寧頭、九宮、大橋、陳景蘭洋樓、金水國小、歐厝戰車、太湖、馬山播音站、金門酒廠、畜產試驗所；新增建功嶼、古崗樓、浯江書院、小徑公車亭、山外街區、高洞、天坑、福寓宮旁彩繪、新湖漁港、中正公園、慈湖三角堡、湖下海堤 |
| itineraries | 8 | 1–4 天、機車、不租車、金城、烈嶼 |
| areas | 5 | 金城、金湖、金沙、金寧、烈嶼 |
| food | 18 | 綜合、金城、金湖、早餐、廣東粥、牛肉、蚵料理、中興路146巷奶茶街，以及聯成、永春、雨川、品其林、甜水厝、艋舺、阿亮、炸雞棺材板、談天樓、麥斯 |
| transport | 13 | 機場、機場到金城、公車、計程車、機車、汽機車比較、小三通、烈嶼，以及台灣本島、海外、香港、澳門、中國大陸五種出發地 |
| hotels | 4 | 金城、金湖、機場附近、家庭 |
| car-rental | 3 | 機車、汽車、機場取還車 |
| tours | 4 | 古厝、戰地歷史、包車、總兵署後浦夜遊 |
| guides | 9 | 初訪、天數、季節、天氣、行李、入境證件、禁限帶物品、旅行清單、水獺路標 |

路線表中的時間是**編輯建議**，並非班次、預約或承諾。各文章附官方、店家或具名實訪來源；2026 年秋季的坑道閉館和砲陣地施工公告已標註。日後更新內容時請重新核對。住宿、租車、體驗為商業承接指南，沒有虛構商家、價格、評分或假預訂按鈕。

旅行清單使用 `src/data/travel.ts` 定義路線與 22 個準備項目，只在本機 `localStorage` 保存出發地及勾選 ID，不收集姓名或證件資料。可下載文字版、列印；停用 JavaScript 時仍能閱讀及手動勾選。

出發地和旅客身分分開說明。入境、檢疫與航空限制附官方來源與核對日期；涉及申辦資格時不得把一般路線指南當成個案核准。奶茶一條街依站方提供位置及公開門店資料修正為金城車站旁中興路146巷。山外巴士目前按已核實的懷舊公車彩繪介紹，尚未把未定位的實體舊巴士標在地圖。

## 內容維護

```text
src/content/                 # 九類 Markdown（JSON 格式 frontmatter 為有效 YAML）
src/content.config.ts        # Zod schema 與 glob loader
src/data/site.ts             # 品牌、網域、欄目、地區、聯絡設定
src/data/partners.ts         # 真實合作商家與外部預訂連結
src/data/photos.json         # 照片授權、作者與原始來源
src/assets/photos/          # 24 張本地真實金門照片
src/layouts/Base.astro       # 全站 SEO、結構化資料、頁首頁尾
src/pages/[collection]/     # 靜態生成的欄目和內容頁
src/components/              # 圖片、卡片、住宿/租車/體驗承接元件
scripts/verify-build.mjs     # 全站產物完整性檢查
public/_headers              # Cloudflare 安全與快取回應標頭
public/_redirects            # 舊版 /guide/ 等 URL 301 對應
```

新增文章：在對應集合新增 `.md`，沿用相鄰文章的欄位，使用穩定的小寫英文檔名作為 URL。新增景點需有經核對的地址、開放說明與來源；只有確認的座標才能寫入 coordinates，未確認時提供地名查詢，不輸出虛構地圖釘或 GeoCoordinates。新增路線需填 `days` 與每站的站內連結。首頁精選在 `src/pages/index.astro` 配置。新頁面自動進入搜尋與 sitemap。

新增照片：保留可使用的授權，將本地 JPEG 放入 `src/assets/photos/`，在 `photos.json` 加入同名 key 與署名。圖片元件產出不同寬度的 WebP；OG 圖片在構建時生成。未取得對應授權照片的文章可省略 image，卡片使用文字封面，社群預覽使用品牌封面；不得將其他景點或其他菜色照片冒充該地。請同時更新 `PHOTO-CREDITS.md`。

## 聯絡與合作設定

目前未提供站方的真實信箱或合作商家，所以預設不捏造收件人或販售服務。

- 將 `.env.example` 複製為 `.env`，設定經確認的 `PUBLIC_CONTACT_EMAIL` 後重新構建；Contact 會顯示信箱與開啟郵件程式的按鈕。沒有設定時，頁面清楚說明尚未公布信箱，仍可下載本地聯絡草稿，**不會假裝送出**。
- 在 `src/data/partners.ts` 加入經確認的商家、地區、服務類型與真實 URL。`sponsored: true` 自動標示合作及佣金說明並加上 `rel="sponsored"`。
- 沒有合作資料時，承接元件連到官方住宿、交通與遊程資訊；站內不處理付款或訂單。

此站不需要資料庫、登入、CMS、伺服器 API 或私密金鑰。聯絡草稿、搜尋、篩選與推薦都在瀏覽器內完成。地圖只有點選後才向 OpenStreetMap 連線；隱私頁明確說明外部服務與主機連線資訊。

## SEO 與 URL

正式網域在 `astro.config.mjs` 和 `src/data/site.ts` 固定為 `https://kinmenguide.com`。每頁有獨立 title / description、canonical、OG / Twitter image、可見麵包屑與 BreadcrumbList。內容有 Article，景點另加 TouristAttraction；FAQ 標記只對應頁上可見問答。無虛構 Review、AggregateRating、Offer。

所有正式內容以尾斜線為 canonical。`/plan/` 為使用者選項建議頁，設 noindex 並排除 sitemap；404 同樣 noindex。只有真實繁中內容，未輸出不存在的英文 / 日文頁面或誤導的 hreflang；擴充語言時可新增實際翻譯路由和對應關聯。

## Cloudflare 準備狀態

`wrangler.jsonc` 已配置 Workers Static Assets 指向 `dist`，使用 `force-trailing-slash` 與 `404-page`。本站全部預先生成 HTML，**不需要 SSR adapter 或 Worker 執行端資料庫**。Cloudflare Pages 也可將 `dist` 作為輸出目錄。

本次未執行部署、登入 Cloudflare、修改 DNS 或綁定網域。`pnpm cf:dry-run` 只在本地檢查資產配置；`pnpm cf:dev` 可在本地模擬 Worker。將來明確要求發布後，再配置 Cloudflare 帳號、正式域名與 HTTPS，並在線驗證 canonical、重導向、404 與 sitemap。

## 授權與交付

程式與原創內容交付專案委託方使用；圖片依個別 Creative Commons 授權。見 `LICENSE`、`PHOTO-CREDITS.md` 與站內 `/credits/`。正式交付紀錄與本地檢查結果見 `VERIFICATION.md`。
