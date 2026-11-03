---
name: kinmenguide-attraction-relay
description: 單站改版 Kinmen Guide 金門景點詳頁：遵照 v1.1 固定順序、管理機關查核、舊版專題保留、Sol/Luna 分工、CI、線上驗收及交接記錄。
---

# Kinmen Guide 景點接力優化 Skill v1.1

使用前先閱讀倉庫 `docs/attraction-detail-template-v1.1.md`；該文件為此 Skill 的內容和順序標準。初次改版須查 `src/content/attractions/` 和 `docs/attraction-template-migration.csv`，以單一 slug 為範圍。

## 必做流程

1. 對照舊頁存檔：逐個登記所有既有 H2/H3、段落、照片授權、FAQ、站內外連結及行程功能；不可因套模板而丟失原有專題。
2. 從政府／國家公園／交通主管資料核實開放、票價、路線、經緯度與**目前管理／維護單位**，寫原始 URL 和日期，區分舊公告與現況。
3. 排列頁面：H1＋短描述 → 實景主圖 → 探索 → 遊覽建議 → 景區特色 → 關於（含「目前管理單位」和來源連結）→ 基本資料 → 交通方式 → 路線地圖 → 人文生態 → 景點相冊 → 遊客資訊與常見問答 → **行前規劃與深度遊覽**（保留原有各專題，H3）→ 周邊景點與順路行程 → 查核提醒與來源。
4. 若該頁有原本的出發前查開放、風景觀察、行程安排、親子攝影、歷史工程等專題，放在 FAQ **後面**、周邊推薦 **前面**，不能只搬摘要。
5. 在單獨 feature branch 更新，明確 opt-in，避免同步污染未改版景點；保留 SEO schema、行程清單、圖片來源及內鏈。
6. Sol 負責 Astro/TS、測試與複雜修復；Luna 負責官方來源及獨立 QA。需要記錄模型和產出；無可用子代理時自行核對並坦白記錄未派遣，不假稱。
7. 執行 `pnpm validate` 和 `pnpm test:browser`；核驗唯一 H1、H2/H3 順序、FAQ schema、manager 來源連結、手機無溢出、舊專題全部保留。
8. CI 通過、審閱同意、合併部署後**再次檢查公開頁面**；未核實到 live 更新不得記 VERIFIED。更新接力 CSV 及下一站任務包。

## 翟山坑道 v1.1 驗收鎖點

- 管理單位：內政部國家公園署金門國家公園管理處；管理依據 https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/40 。
- FAQ 後至少要依序存在：「出發前怎麼查開放？」「值得停下來看的風景」「怎麼排進一天」「拍照、親子與雨天」「從戰時運補，看見坑道的尺度」。
- 可以另保留「已結束的活動公告」，必須註明是歷史紀錄。
- 此段**不得排在基本資料或遊客 FAQ 之前**。
- 正文與 FAQ JSON-LD 一致，原實景及 CC BY-SA 2.0 署名不可變動。

## 接力交接格式

```yaml
site: kinmenguide.com
template_version: v1.1
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

**發布節奏：** 僅完成一站後，生成新的對話接力指令，由使用者在新對話發起；不擅自聲稱可背景無人值守改完整站。
