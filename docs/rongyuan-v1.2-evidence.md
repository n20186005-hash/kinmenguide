# 榕園與慰廬 v1.2 本地證據

2026-11-05查核；未提交推送部署，CSV/進度由主代理維護。

## 官方來源與範圍

- https://kinmen.travel/zh-tw/travel/attraction/498 ：官方全文索引可讀（直接頁僅定位點），列太湖北岸、榕樹氣根、慰廬一落四櫸頭及洪受故居題材，時段每日08:30–17:00、免費、停車場/公廁，山外23路幹訓所後步行。來源一般欄位不當室內/設施當日狀態或停車免費保證。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=F17722DD6CF43202&sms=BF7D6D478B935644 ：官方索引可讀2024-02-20報導（直接頁回網站框架，未回文章正文）金管處已完成周邊鋪面、無障礙及停車場聯外步道改善，僅採工程範圍與年代；不推當期全域管理權屬或連續無障礙。
- https://kinhu.kinmen.gov.tw/cp.aspx?n=E97974EFCDCD059E ：官方索引可讀、直接抓取超時的鎮公所榕園慰廬沿革，1967整修命名及思親亭，洪受/西洪記憶。文化/紀念題材不當現行室內開放或誤作中山紀念林蔣經國紀念館。
- https://forestry.kinmen.gov.tw/Content_List.aspx?n=34E60A642C7AE768 ：直接可讀林務所KM010園內受保護榕樹資料，不由單株尺寸/年代推全園或樹木現時健康；列冊非整園管理證明。

## 保留與未核

原三專題、原place-rongyuan照片作者許可與站內連結保持，單圖不設空相冊。原座標24.44393,118.43201未獨立核Google具名POI/入口，撤導航/marker/schema geo。觀光網安民1之6號另列官方來源地址而非Google地址。

位於太湖而非海岸，無潮汐下灘行程；不攀樹氣根踩根系、不下水、強風雷雨避樹下。現行完整管理/權屬、各館舍准入、設施現況、停車費/公車班次及連續無障礙待核。

僅本頁/registry自身/專項測試/證據及pilot fixture換rushan-fort（確認存在未opt-in），不改其他集合、CSV或進度，不提交。未額外派遣子代理，主代理安排獨立QA。

## 驗證

主代理通知擎天/麒麟全套410 passed後執行：validate通過，0 errors/0 warnings；556頁、49170內鏈參照、1884圖片實例、4158 schema nodes。榕園及pilot隔離用例桌面/手機4 passed（2.6秒），涵蓋原三專題/照片署名、H1/canonical/標題順序、管理角色及室內/設施准入、FAQ/schema逐項全等、未核導航/geo缺席、行程增刪、手機無溢出。日誌`/tmp/rongyuan-validate.log`、`/tmp/rongyuan-browser.log`；4339服務正常結束。

LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA/完整回歸，非部署或VERIFIED。


## QA來源日期補正

官方觀光頁時段與免費為2025-05-26更新版本；frontmatter、FAQ可見與schema、registry一般資訊就近標來源版本日期，明示非今日確認。與乳山聯合重驗。


## 乳山與榕園日期補正聯合驗證

主代理通知榕園上一版全套412 passed後執行：validate通過，0 errors/0 warnings；556頁、49180內鏈參照、1884圖片實例、4159 schema nodes。桌面/手機乳山、榕園及pilot隔離用例6 passed（2.9秒），涵蓋原專題/照片署名、FAQ/schema全等、榕園2025-05-26來源就近歸因、乳山工事/地下與鄰館區分、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/rushan-rongyuan-validate.log`、`/tmp/rushan-rongyuan-browser.log`；4339服務正常結束。LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA/完整回歸，非部署或VERIFIED。

## 2026-11-06 named map-reference clarification
Independent Maps UI QA supplied exact named reference: https://www.google.com/maps/place/Banyan+Park/@24.4439357,118.4294338,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a4e41d9d4eab:0x13c1fa7864f04e55!8m2!3d24.4439308!4d118.4320141!16s%2Fg%2F1tjmb8r8. Identity checked; display address, precise visitor entrance and daily access remain unverified. Visible reference only, no Google fields, coordinates, hasMap/schema, marker/navigation enabled. Private-house/interior/tower/water/work-area restrictions and original image preserved. Earlier named-POI-unverified statements are historical for identity only. Await independent release review.
