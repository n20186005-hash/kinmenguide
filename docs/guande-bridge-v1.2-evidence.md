# 觀德橋 v1.2 證據

查核2026-11-04（美國洛杉磯），最後UTC結果另列；未提交／推送／部署，CSV待正式站。

## 基底與原文

GitHub main `a2c50e2e078718704101a9f47449627c70941dca` 完整tree867 blobs逐一git blob SHA校驗；local42f53d3上132項覆蓋為主線基線，不納本批。AGENTS／relay SKILL／模板與前批已讀版本逐位元一致，Issue59及CSV本輪重取。

原3個H2「認識觀德橋／參觀時留意／怎麼安排」移至FAQ後H3；3段原文逐字保留，原Google短鏈、原縣府連結、金沙指南及相關博物館不丟失。原無image及照片credit，pending資料維持無圖；不借Google或新聞照片、不設空相冊。

## 具名 Maps

原[短連結](https://maps.app.goo.gl/1Lvf2kcmepbQmeva6)已實際GUI點開：同一「觀德橋」POI，CID `0x3414a357bfb5d0fb:0xf02592c0a9d3b163`，24.4683418,118.3913269，g/155r0qzp，Plus Code F99R+8G。實作者初次英語GUI列Jinsha Township, Kinmen County, 890，再切同CID繁中核原址 `890金門縣金沙鎮`；authority獨立繁中同核。GUI無營業時間、電話、網站，不推全天或服務。Google類目紀念建築物不當法定古蹟分類依據。

採原短鏈作googleMapsUrl，保留原深讀段落鏈；詳情header／路線圖／導航、schema streetAddress及hasMap、/map同點，沒有文字或經緯搜尋替代。URL地圖中心不等於3d/4d POI座標，採後者精確值；Google鎮級地址、官方高坑及地籍位置另分欄，不當車行入口或農地通行證明。

## 官方來源與查核限制

- [《金門縣文資據點開放參觀資訊》](https://cabkc.kinmen.gov.tw/uploads/files/202506/915db977-c140-4d94-8288-8f2c009778c8.pdf)，2025目錄版本。authority實際打開PDF全文，L288–292列觀德橋、全區、全天、高坑劃測段629、636-1地號；實作者primary搜尋表格同讀，但直接web及標準HTTPS下載均被轉回文化局首頁，回傳HTML非PDF，沒有假稱自身下載完整文件。以獨立全文核對支撐有日期來源範圍，不當即時橋面、夜間照明或所有周邊道路可走保證。
- [113年度文資防護報告](https://cabkc.kinmen.gov.tw/uploads/files/202508/ebbaa3c0-f653-41bd-a962-4a6c549a260b.pdf)，113年度為2024年調查／2025目錄發布。authority全文L1369–1373核縣古沙08觀德橋，使用狀態開放空間、管理人／單位金門縣文化局、B尚可，橋、石碑、告示牌及構件有植生；實作者primary索引同讀。此是當時管維紀錄，不把植生或分級寫成今天狀況／閉道，也不推最新完整委外分工。
- [2021-09-11文資審議紀錄](https://cabkc.kinmen.gov.tw/uploads/files/202110/a7373afb-676d-43de-9fb8-903f3ce05a82.pdf)：authority全文及實作者primary索引核土地所有權屬金門縣、管理人金門縣政府，範圍629及636-1部分土地。土地管理與文資管維對象不同，不當兩機關權責矛盾或整片田地公眾通行依據；最新範圍另核。
- 原[縣府9112E7BAEAC6C482](https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=9112E7BAEAC6C482&sms=BF7D6D478B935644)為2020施工會勘歷史紀錄，文化局召集、金沙鎮公所為當年工程承辦；不把承辦推為現行管理，也不推今天仍封閉／工程完成。直接web逾時，authority核其範圍；原來源保留並明標歷史。
- [金沙鎮何斗里](https://kinsha.kinmen.gov.tw/cp.aspx?n=287E95A259BF529F)官方介紹明分觀瀾橋及觀德橋兩古石橋；不因雙語詞彙並列當作別名同地標。古官道歷史不是現今連通步道或可走農地路線。
- [早期古蹟清冊](https://cabkc.kinmen.gov.tw/uploads/files/202109/7a845acd-4e8a-4d8a-9aaf-cdcdd3184aef.pdf)索引僅列636-1，與後2021範圍及2025清冊時間不同；採後版本為位置描述，不自行推測地籍變動。此較早清冊不作當期地籍定論。

開放清冊沒有證明票價、免費範圍、售票／活動服務、專用停車、廁所、飲水、遮雨、連續無障礙、橋面當日狀況或步行站距；均明列未核。公車只提供縣府動態查詢，不編造直達橋頭路線／班次。橋體、農作出入口、土地及溪溝不得因圖點或古官道故事推為可穿越。

## 驗證

本地完成時間：2026-11-04 10:15:05 UTC。`pnpm validate` 通過：0 errors、0 warnings、0 hints；556 pages、48,573 internal references、1,884 images、4,102 schema records。完整 Playwright 桌機與手機套件 290 passed（1.2m），含本頁 FAQ 可見文字／frontmatter／FAQPage 逐字一致、單一 H1 與標題層級、canonical、無圖基線、同一 Maps 地址／座標／hasMap／/map、行程加入及移除自身測試項、窄螢幕無橫向溢出。

原三個主題與三段原文逐字保留檢查通過。以 remote main 完整 blob tree 比對，既有追蹤檔只改本景點 MD、pilot registry 與 CSV；新檔僅本頁測試及本證據，共五檔。registry 移除本頁新增區塊後與基線逐字一致；CSV 除本列外其餘列均一致。`git diff --check` 通過。

獨立 authority 內容複核無阻斷。正式站未驗收，CSV 維持 `AWAITING_LIVE_CHECK`；無提交或推送。下一站 `guanli-wind-lion`。
