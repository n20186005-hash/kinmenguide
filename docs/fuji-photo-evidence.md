# 峰上孚濟宮Google Maps實拍候選

精確main bc17144d5fc2cae1f852ffcaaa7c861aa57a8e03 tree8d61da2927837efed625308092736d5d1f918d56，API/tmp/fuji-main.json確認。由fourteenth-integrated staged tree2fcfda2dae38b589355e64ec28b6340e9f8e1f71加#191七文件，write-tree完全一致後獨立初始化release-fuji-photo；不可推送placeholder。

來源 https://www.google.com/maps/place/%E5%B3%B0%E4%B8%8A%E5%AD%9A%E6%BF%9F%E5%AE%AE/@24.4284796,118.4581019,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBv7F56mYrZKxnzGsyVV8ZG!2e10!3e12!4m7!3m6!1s0x3414a50c318190d1:0xb77fadbcac5b2369
作者TONY YAN，Maps標示2026-01。photo_audit透過pageAssets.bundle正常一次取得，無新審批；非重試其他downloadMedia。檔/var/folders/k7/b1fmv42j04v4nxxvq834hzv40000gn/T/browser-use/assets/b1ab898c-c65d-4362-a4ac-8353b982ce44/1330a2e15c3c969e，SHA25691babd37bbda275696ae6d1feca9cc14e92a4510c4a8f95d83eb1e151e8deaaf，JPEG1024×768；複製原字節，不改取得JPEG。目視匾額「孚濟宮」、正殿香爐、石獅與右側廂房，為fengshang-fuji-temple而非同村天后宮。

來源未標示再利用許可，如實寫入license，未稱CC或政府開放；licenseUrl連Google Maps條款，處理欄明示條款不代表攝影者授予再利用許可。validator原本可表達非空未知狀態，未改或繞過。原始CDN鏈未在交接提供，original使用可追溯的同一單圖來源，不虛構CDN。caption僅Maps日期記錄，不證今日開放/准入。用戶已明確指示Google Maps同對象實拍可作補圖，不以許可調查阻擋；不外推全局權限或繞過訪問控制。

僅七文件：新增圖、registry單項、正文兩封面欄、pending僅移目標、既有專項兩個無圖斷言更新、新專項、本證據。所有舊照片逐字節、所有既有registry鍵值與非目標pending新reason完全保留。

validate exit0；4410雙端頁面與credits4/4通過（4.8s）。首輪失敗因舊figcaption無圖斷言及將responsive naturalWidth硬寫1024，已僅修正照片相關斷言，其他安全內容保留。日誌/tmp/fuji-photo-validate.log、/tmp/fuji-photo-browser.log（保留失敗）、/tmp/fuji-photo-browser-final.log。截圖/tmp/fuji-photo-{desktop,mobile}-credits.png。臨時依賴/配置移除，未提交推送，凍結供獨立QA，發布前再核最新main。

## 獨立QA文案修正與最終全量
刪除來源提醒末段舊「尚未收錄/無主圖」敘述，精確改為已收錄Maps2026-01、TONY YAN正殿歷史照片且不證今日開放，其餘正文保留；新增三項保護測試防矛盾復發。revised validate exit0。首輪全量因並行QA清理候選node_modules symlink而中斷，151 passed、其餘Cannot find package @playwright/test；此環境失敗日誌/tmp/fuji-photo-revised-full-browser.log保留，不稱產品斷言通過。另複製最終候選至獨立/tmp/fuji-final-regression、獨立依賴連結/4412端口重跑，**428 passed (2.2m)**、exit0；日誌/tmp/fuji-photo-isolated-full-browser.log。候選臨時配置/依賴已移除；虎堡候選完全分離，未推送。
