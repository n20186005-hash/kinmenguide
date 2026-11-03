---
name: kinmenguide-attraction-detail
description: >
  Maintain and migrate Kinmen Guide attraction detail pages. Use for /attractions/
  edits, new attraction creation, preservation of original deep-dive sections,
  verified current operator, SEO integrity, testing and handoff.
---

# Kinmen Guide 單景點詳頁執行 Skill v1.1

本倉庫的唯一完整規格：[`docs/attraction-detail-template-v1.1.md`](../../../docs/attraction-detail-template-v1.1.md)。先閱讀該文、欲修改的景點 Markdown、`src/components/AttractionOverview.astro`、`src/data/attraction-detail-pilots.ts`，再處理。不得僅按節數擴頁或刪減原有內容。

## 觸發範圍

- 使用者要求優化、更新、增補 `/attractions/{slug}/` 頁面。
- 調整統一模板、加入新景點、從既有內容搬移到新版格式。
- 每個景點的發布驗收與跨對話接力。

## 固定執行順序

1. **鎖定一站**：確認 GitHub `main`、目標 slug、原文所有 H2/H3、圖片、來源、加入行程、內鏈和當前部署版本。比對 `docs/attraction-template-migration.csv`；避免雙人同時編輯同一站。
2. **Sol／Luna 任務分工**：由主 Agent 將 Astro 編碼、TypeScript、CI/E2E 交給 Sol；把官方事實、管理方、授權、正文保留、時效狀態檢核交給 Luna。簡單編輯可由主 Agent 直接做；若未實際調用子 Agent，絕對不可宣稱已通過 Sol/Luna 複核。
3. **建立搬移核對表**：逐條列舊文的小標題、核心段落、照片署名與連結，標注新位置。特別注意 FAQ 後的深度文章，並列為不可刪除區。
4. **查核現行管理單位**：必須找得到直接官方證據，寫到 `operator.name` 與 `operator.url`，頁面「關於景點」內用「目前管理單位」可點擊顯示，基本資料亦重複標示。權責不明時不發布無根據的官方聲明。
5. **依模板重排**：H1/主圖 → 探索／遊覽建議／景區特色 → **關於+目前管理單位** → **基本資料** → 交通方式 → 路線地圖 → 人文生態 → 景點相冊 → **遊客資訊與常見問答** → **現地遊覽與行程延伸（保留原文獨立標題）** → 周邊景點與順路行程 → 查核/來源 → 共用功能。
6. **專題保留**：對翟山坑道，FAQ 之後的 H3 順序為「出發前怎麼查開放？／值得停下來看的風景／怎麼排進一天／拍照、親子與雨天／從戰時運補，看見坑道的尺度／已結束的活動公告」。其他景點自訂有意義的深度內容，不能套出空段落。
7. **建立測試**：針對新站驗證唯一 H1、`關於` 與 `基本資料` 直接相連、管理單位連結、FAQ → 深度內容 → 周邊、內容與 schema 一致、原攝影授權、AddToTrip、所有內鏈、桌面/手機無溢出。舊站迴歸不受影響。
8. **發布前驗證**：`pnpm validate`、`pnpm test:browser` 完全通過才合併；發布至 Cloudflare 主站後重新檢查正式 URL，不能用 CI 通過冒充已上線。
9. **記錄與接力**：更新 `docs/attraction-template-migration.csv` 的 slug、PR、SHA、測試、查核日、發布日及下一個 slug；在下一個對話重讀這份 CSV 和模板，不依賴對話殘留。

## 不可違反

- 不編造評分、照片、GPX、動植物、即時開放與班次、第一人稱到訪。
- 原有 SEO title/canonical、FAQ、相關連結、行程功能和圖片署名不能因模板更新而消失。
- 歷史年份有歧異則註明或使用保守表述；不得刪掉主題來避開查核。
- 第三方獨立指南不得自稱景點官方網站或管理單位。
- 動態時效資訊應標明查核日期；只有已驗證的來源才能成為發佈數據。

## 首站例子與佐證

- `/attractions/zhaishan-tunnel/`
- 現行管理單位：內政部國家公園署金門國家公園管理處
- 直接證據：https://www.kmnp.gov.tw/ch/touristInfo/recreation-sites/40
- 管理機關公告：https://www.kmnp.gov.tw/ch/titlelist/latest-news/4596
- 已授權照片署名：`jason199567 / CC BY-SA 2.0`

本 Skill 是 GitHub 倉庫內的版本化規格；更新它不等於已同步任何 ChatGPT 個人已安裝技能。若另有個人技能，需透過該技能自身的可編輯來源另行同步。
