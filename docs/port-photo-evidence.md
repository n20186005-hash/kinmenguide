# 金門港旅運中心獨立補圖候選

基線main896e52159d8d97377754a602de7f74300304f3d9 treefdeb15957e9f62d6072b6090062e773459aaf987，從release-sixteenth-integrated乾淨HEAD建立release-port-photo，不含虎堡/#195其他候選。原圖photo_audit一次取得/tmp/photo-candidate-kinmen-port-aerial.jpg，SHA2567c85836c263dabdd328fb989199c2269b794a82b1802d165352f586aa1b8035d核一致。JPEG1024×576，原名1024x768並非實際解像度，原字節不改。

來源 https://www.kinmen.travel/zh-tw/travel/attraction/2169 ，官方本條目影像「空拍4」；原圖 https://kinmen.travel/attractions/45690/1024x768_attractions-image-gbjt-iogykystxovbwbjkw.jpg 。提供方金門縣政府觀光處／金門觀光旅遊網，原頁未列個人攝影者，credits如實標示而不補姓名。網站資料開放宣告 https://kinmen.travel/zh-tw/gwoia ，要求出處並保留特別聲明例外；photo_audit未見該圖特別限制，不虛構CC。詳細公開來源取證交接於kinmenguide/work/photo-candidate-handoff-2026-11-06.md。

目視大型白色屋頂、外側支撐、港邊水域與道路，為新金門港旅運中心，不是西海路原旅客服務中心或水頭聚落。拍攝日期未列，畫面有施工/管制元素但不推目前工程/營運/准入狀態，caption明示未知日期與狀態限制。原正文新舊站區分完整保留。

只六文件：原圖、registry單筆、頁面兩封面欄、pending只移kinmen-port-terminal、新專項、本證據。所有舊JPEG逐字節不變，所有原registry及非目標pending新reason/順序字段完全保留。無共享組件或正文遷移。

validate exit0；4414雙端照片及site回歸40/40通過（14.3s）。首輪2失敗因測試預期不存在的「舊水頭」短語，改為原文實際「和西海路一段的原旅客服務中心是不同大樓」，不修改產品正文。日誌/tmp/port-photo-validate.log、/tmp/port-photo-browser.log、/tmp/port-photo-browser-final.log；截圖/tmp/port-photo-{desktop,mobile}-credits.png。臨時配置/依賴移除，未提交推送，凍結供獨立QA，最新main變動需再對齊。

## #196最新main整合候選
GitHub main merge #196 `e9dfe25b7f33e128d18b39458addee4243b14f27` 已核對 tree `e9f8c72f011228f84b2abcd751c0ca7b958dfc1f`。本地因無遠端 commit object，以該精確 tree 建立隔離臨時等價基線（不是遠端 SHA）；港站目標頁/原始圖、port photo registry key、測試和來源證據按文件合入，registry 按 key 增加港站並保留 `place-tiger-fort`，pending 按 slug 僅移除 `kinmen-port-terminal`；虎堡保持已移除且不復入待辦。全部既有圖片和registry鍵值保留。

候選相對 #196 基線仍限六文件：本證據、原圖、港站頁兩封面欄、港站registry一項、新專項測試及pending一項移除。整合後照片registry共138項（含虎堡與港站），pending 38項（兩個目標均不在待辦）。本候選執行 validate 成功；Astro建置556頁、49259內部引用、4162 schema nodes、138張可解碼署名資產、38項明確pending。完整桌機/手機Playwright回歸440 passed (2.3m)，包含虎堡與港圖專項。本次隔離測試日誌 `/tmp/port-on-tiger-validate.log`、`/tmp/port-on-tiger-browser.log`；先前 `/tmp/port-current-*` 438通過屬 #195 基線，不作本候選結果。最終 tree 由當前候選index計算，見整合驗收記錄。臨時依賴連結及Playwright設定測後移除，未提交推送。
