# 金門港旅運中心獨立補圖候選

基線main896e52159d8d97377754a602de7f74300304f3d9 treefdeb15957e9f62d6072b6090062e773459aaf987，從release-sixteenth-integrated乾淨HEAD建立release-port-photo，不含虎堡/#195其他候選。原圖photo_audit一次取得/tmp/photo-candidate-kinmen-port-aerial.jpg，SHA2567c85836c263dabdd328fb989199c2269b794a82b1802d165352f586aa1b8035d核一致。JPEG1024×576，原名1024x768並非實際解像度，原字節不改。

來源 https://www.kinmen.travel/zh-tw/travel/attraction/2169 ，官方本條目影像「空拍4」；原圖 https://kinmen.travel/attractions/45690/1024x768_attractions-image-gbjt-iogykystxovbwbjkw.jpg 。提供方金門縣政府觀光處／金門觀光旅遊網，原頁未列個人攝影者，credits如實標示而不補姓名。網站資料開放宣告 https://kinmen.travel/zh-tw/gwoia ，要求出處並保留特別聲明例外；photo_audit未見該圖特別限制，不虛構CC。詳細公開來源取證交接於kinmenguide/work/photo-candidate-handoff-2026-11-06.md。

目視大型白色屋頂、外側支撐、港邊水域與道路，為新金門港旅運中心，不是西海路原旅客服務中心或水頭聚落。拍攝日期未列，畫面有施工/管制元素但不推目前工程/營運/准入狀態，caption明示未知日期與狀態限制。原正文新舊站區分完整保留。

只六文件：原圖、registry單筆、頁面兩封面欄、pending只移kinmen-port-terminal、新專項、本證據。所有舊JPEG逐字節不變，所有原registry及非目標pending新reason/順序字段完全保留。無共享組件或正文遷移。

validate exit0；4414雙端照片及site回歸40/40通過（14.3s）。首輪2失敗因測試預期不存在的「舊水頭」短語，改為原文實際「和西海路一段的原旅客服務中心是不同大樓」，不修改產品正文。日誌/tmp/port-photo-validate.log、/tmp/port-photo-browser.log、/tmp/port-photo-browser-final.log；截圖/tmp/port-photo-{desktop,mobile}-credits.png。臨時配置/依賴移除，未提交推送，凍結供獨立QA，最新main變動需再對齊。

## #195最新main完整集成
API實際main0cced7df90e02bb275ee62d640fb910c982ec931 treee61f55db16df22e36777481c92e98081dddcbd6e（/tmp/port-latest-main.json）與release-tiger-integrated-local乾淨HEAD精確一致，建立獨立release-port-current；只叠港圖六文件。此基線不含尚未合併#196虎堡新圖，已確認place-tiger-fort不在registry，未宣稱已集成虎堡照片；若#196先合併需再對齊。全部舊JPEG逐字節、全部原registry鍵值及非目標pending新reason保持不變。

validate exit0；4415隔離端口完整全站桌機/手機438 passed (2.8m)、exit0，這是完整回歸，不是舊40項專項。日誌/tmp/port-current-validate.log、/tmp/port-current-full-browser.log。臨時配置/依賴移除，六文件未提交推送，凍結待最終QA與main更新核對。
