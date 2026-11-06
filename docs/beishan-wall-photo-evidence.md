# 北山播音牆補圖候選

基線實際main3f7e82c187236855079adc0149f38b002a041b56、tree4ac28756bad03adda415d6cd2f24b0bb5b825f62，GitHub API /tmp/wall-current-main.json確認與release-thirteenth乾淨HEAD一致。獨立release-beishan-wall-photo未帶其他工作樹修改，本地placeholder不可推送。

復用恢復副本既有新增候選JPEG，不重複下載。125858 bytes，SHA256 bdc8bfd3169c2f4e7a09f82f7f68bc37b7e273d026df3627dab324cecec04913。原圖 https://kinmen.travel/attractions/9528/1024x768_attractions-image-ogyiajhaheswoq6shy5uta.jpg ；來源 https://kinmen.travel/zh-tw/media/album/746 ，官方北山播音牆相冊，9528題為48組揚聲器方陣。已由原圖目視與獨立QA確認同對象48孔牆體、植被及北山播音牆路牌，不以馬山播音站或附近海岸替代。

提供方金門縣政府觀光處／金門觀光旅遊網，無單獨攝影者欄，不虛構攝影者。來源資料開放宣告 https://kinmen.travel/zh-tw/gwoia ，保留出處與該宣告鏈接；來源頁未見此圖另列個別限制。使用者已明確指示補圖不以許可調查阻擋，仍如實保留可取得資料，不推定Google/第三方照片為CC。Caption明記歷史影像不代表目前開放或可入內。

原JPEG原樣新增；所有舊JPEG逐位元組比對HEAD不變，所有既有registry鍵值不變；pending只有beishan-broadcasting-wall移除，其他順序/理由不改。若#189先合併，須在新reason清單依slug僅移除本項再驗，不覆蓋整舊檔。正文僅兩個封面欄，舊專項僅替換無圖斷言為真實解碼與caption/credits，其他內容安全斷言保留。新增credits專項。

npm run validate exit0。隔離4407端口雙端頁面/credits4/4通過（4.7s）。首次credits測試2失敗因未捲入lazy圖便即時檢查，已改為捲入後poll實際解碼，原失敗日誌/tmp/wall-photo-browser.log保留，最終/tmp/wall-photo-browser-final.log。validate日誌/tmp/wall-photo-validate.log；截圖/tmp/wall-photo-{desktop,mobile}-credits.png。臨時配置/依賴移除，未提交推送，凍結待獨立QA與最新main對齊。

## #189合併後精確重疊
API當前main fdea0d75b6f00912d0e564896e738f4b9e31c61a tree9ff07ce0c94061fd7829b5f4f0a32ef0ecfdb2ac（/tmp/wall-latest-main.json）。新目錄release-beishan-wall-current以舊main完整樹加#189已合併pending構造，git write-tree精確相等後獨立初始化本地placeholder。其上僅重疊七文件；pending按slug僅移除beishan-broadcasting-wall，其他所有新reason/順序/字段逐項核不變；registry全部原鍵值和全部舊JPEG逐字節保留。

validate exit0；單次4408隔離端口完整雙端回歸416 passed (2.0m)、exit0。日誌/tmp/wall-current-validate.log、/tmp/wall-current-full-browser.log。舊獨立QA416/416結果保留；此為新main重新驗收，非重複啟動舊任務。臨時配置/依賴移除，未提交推送，凍結待最終main核對。

## #188合併後最終集成
GitHub exact commit bc25dbea1f2c6e6ad5eefbf2575c3c91e36527d4 treefb0801048bed2fb4ba2d7c7d21760058f2506eb4（/tmp/bc25-main.json）。release-thirteenth暫存tree29fbed252db3907339f92e190a645a8e0ff6def7加#189 pending構成精確同樹後，獨立初始化release-beishan-wall-bc25。本候選只按鍵新增牆registry；全部原鍵值（含#188北風爺alt）不變；pending只按slug刪牆，其他全部新reason/順序/字段原樣；所有既有JPEG逐位元組不變。其他共同修改文件先核基線一致再帶入，無整舊registry覆蓋。

validate exit0；隔離4409單次完整雙端420 passed (1.9m)、exit0。日誌/tmp/wall-bc25-validate.log、/tmp/wall-bc25-full-browser.log；未重複啟動其他測試。臨時配置及依賴移除，七文件未提交推送，凍結待最終QA。
