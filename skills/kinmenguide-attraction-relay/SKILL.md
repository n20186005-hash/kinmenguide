---
name: kinmenguide-attraction-relay
description: Kinmen Guide 金門景點接力 Skill v1.2：統一景點詳頁、移除無內容相冊、真實 FAQ 與 JSON-LD 同步、現行管理單位、保留原專題、Sol/Luna 分工和驗收交接。
---

# Kinmen Guide 景點接力優化 Skill v1.2

使用前先閱讀倉庫 `docs/attraction-detail-template-v1.2.md`；該文件為此 Skill 的內容和順序標準。初次改版須查 `src/content/attractions/` 和 `docs/attraction-template-migration.csv`，以單一 slug 為範圍。

## 必做流程

1. 對照舊頁存檔：逐個登記所有既有 H2/H3、段落、照片授權、FAQ、站內外連結及行程功能；不可因套模板而丟失原有專題。
2. 從政府／國家公園／交通主管資料核實開放、票價、路線、經緯度與**目前管理／維護單位**，寫原始 URL 和日期，區分舊公告與現況。
2a. **Google 地圖地址與導航強制規則（v1.2 補充）**：景點詳頁「景點地址」必須以**該景點 Google 地圖具名地標（POI）顯示的地址原文**為準，郵遞區號、門牌照原樣保留，不得以縣府/管理機關的「古崗湖東南方」等地理描述冒充門牌。不同來源的地理位置說明另存 `locationDescription`，在「所在地／位置描述」單獨列示。地址、描述、經緯度、Google 地圖連結是四個不同欄位。
2b. **導航直達景點地標**：每站提供經人工核對、屬於**同一個景點**的 `googleMapsUrl`（可使用實際 Google Maps `maps.app.goo.gl` 短連結），「查看位置」「查看位置與導航」「路線地圖」及全島 `/map/` 導航按鈕全部優先使用它，不能用經緯度搜尋網址、地區關鍵字、其他同名地標或地址文字搜尋替代。只把已核對的 Google Maps POI 顯示地址輸出至 `TouristAttraction.address.streetAddress`，`hasMap` 設成同一 URL。原經緯度僅用於已核實的地圖示意點，不能代替導航目的地。暫無可核對 POI 連結應登記待查，不得宣稱導航已核對。

3. 排列頁面：H1＋短描述 → **有授權的實景主圖及署名** → 探索 → 遊覽建議 → 景區特色 → 關於（含「目前管理單位」和來源連結）→ 基本資料 → 交通方式 → 路線地圖 → 人文生態 → **遊客資訊與常見問答** → **行前規劃與深度遊覽**（保留原有各專題，H3）→ 周邊景點與順路行程 → 查核提醒與來源。**不再預設輸出相冊 H2。**
4. **刪除空白相冊**：若只有已用作主圖的一張照片、重複主圖、授權說明或缺少實景，**不渲染「景點相冊」標題與空容器**；主圖、alt、來源、作者和 CC 授權不能刪。只有至少兩張不同且可合法展示的景點實景圖，才可評估獨立相冊。此規則適用所有既有和未來新增的景點。
5. **擴充有根據的 FAQ**：先讀官方資料與遊客需求，再增加票價、時間、交通、停車、設施、無障礙、雨天與解說等真實問答；沒有來源不補湊數。**凡可見 FAQ，須同步更新內容 frontmatter 的 faq[]，使 HTML <details> 與 FAQPage JSON-LD 的問題、答案、順序完全一致**。測試逐項比較，不只數量。
6. 若該頁有原本的出發前查開放、風景觀察、行程安排、親子攝影、歷史工程等專題，放在 FAQ **後面**、周邊推薦 **前面**，不能只搬摘要。
7. 在單獨 feature branch 更新，明確 opt-in，避免同步污染未改版景點；保留 SEO schema、行程清單、圖片來源及內鏈。
8. Sol 負責 Astro/TS、測試與複雜修復；Luna 負責官方來源及獨立 QA。需要記錄模型和產出；無可用子代理時自行核對並坦白記錄未派遣，不假稱。
9. 執行 `pnpm validate` 和 `pnpm test:browser`；核驗唯一 H1、H2/H3 順序、**Google 地圖門牌與地址描述分離、具名 POI 導航連結一致（詳頁、全島地圖、JSON-LD）**、無內容相冊 H2 不存在、原主圖/授權保留、FAQ 資料與 HTML/JSON-LD 共用且完整對應、manager 來源連結、手機無溢出、舊專題全部保留。
10. CI 通過、審閱同意、合併部署後**再次檢查公開頁面**；未核實到 live 更新不得記 VERIFIED。更新接力 CSV 及下一站任務包。

## 翟山坑道 v1.2 驗收鎖點

- **Google 地圖地址和 POI 導航（本次同步）**：Google 地圖顯示地址 `893金門縣金城鎮90號`；使用者提供的「翟山坑道」具名地標連結 `https://maps.app.goo.gl/aQ2NqLzgZ3mATHpYA`。原官方地理說明 `金門縣金城鎮古崗湖東南方翟山腹` 另列為「所在地／位置描述」，不可再當門牌地址。詳頁三處地圖連結及全島地圖導航均使用同一 POI URL，JSON-LD `streetAddress` 和 `hasMap` 同步檢查。此為使用者提供的地圖地址及連結；上線後仍須以 Google Maps 具名地標進行點開確認。


- **景點相冊 H2 不得出現**：目前僅有一張已授權主圖；重複它或單獨寫「目前只有一張照片」沒有實質內容。主圖的 alt、figcaption、原作者署名及 /credits/#zhaishan 保持完整。
- **FAQ 增為 10 題**：兩題舊內容加八題有根據的問題（一般門票、一般開放時間、金城公車、停車、輪椅推車、雨天、解說服務、廁所/電話）。頁面有十組 details，faq[] 有十筆，FAQPage.mainEntity 有十筆；其問答內容依序一致，沒有重複、隱藏或虛構資訊。官方事實參照 https://kinmen.travel/zh-tw/travel/attraction/1337 及 https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=1337&type=Attractions。

- 管理單位：內政部國家公園署金門國家公園管理處；管理依據 https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/40 。
- FAQ 後至少要依序存在：「出發前怎麼查開放？」「值得停下來看的風景」「怎麼排進一天」「拍照、親子與雨天」「從戰時運補，看見坑道的尺度」。
- 可以另保留「已結束的活動公告」，必須註明是歷史紀錄。
- 此段**不得排在基本資料或遊客 FAQ 之前**。
- 正文與 FAQ JSON-LD 一致，原實景及 CC BY-SA 2.0 署名不可變動。

## 接力交接格式

```yaml
site: kinmenguide.com
template_version: v1.2
completed_slug: "{{上一站}}"
live_url: "{{已驗收網址}}"
pr_url: "{{PR連結}}"
merged_sha: "{{commit}}"
ci_validation: "{{run id, result}}"
independent_review: "{{角色、來源與結果}}"
production_checked_at: "{{UTC時刻}}"
next_slug: "{{接力景點}}"
unresolved: []
```

**後續新增景點頁面也套用 v1.2**，不可沿用 v1.1 的固定相冊預留區。現行門票、開放時段、可達性、交通資料需逐站查官方來源；不以翟山案例直接複製到其他點位。

**發布節奏：** 僅完成一站後，生成新的對話接力指令，由使用者在新對話發起；不擅自聲稱可背景無人值守改完整站。
