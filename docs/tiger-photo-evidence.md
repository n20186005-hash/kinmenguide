# 虎堡歷史照片獨立候選

main bc17144d5fc2cae1f852ffcaaa7c861aa57a8e03 tree8d61da2927837efed625308092736d5d1f918d56，API/tmp/tiger-main.json核一致；從release-fuji-photo乾淨HEAD026599a等樹基線建立worktree，未帶峰上未提交圖片。

來源 https://www.google.com/maps/place/Hu+Fortress/@24.442625,118.2648609,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDiob2AeQ!2e10!3e12!4m7!3m6!1s0x341498e8a39abb51:0xcde1973c4e92368a 。作者bio810 Chang，Maps日期2020-12。獨立worker正常一次取得/var/folders/k7/b1fmv42j04v4nxxvq834hzv40000gn/T/browser-use/assets/2d57dcad-4432-4347-95e4-fa86e07c30fc/162d864ba2f8bb72，JPEG768×1024，SHA256 d5fcf717c402985aa423181d864ce5587f690804b2061eacd8589225136207d7確認吻合，未重複下載。

目視閉門、虎形浮雕、上方青天白日及禁止進入標示，與Hu Fortress虎堡具名來源一致；不是將軍堡。只作2020-12歷史入口影像，不證今日開放或准入；caption再提醒勿自行進營區/跨封線。原文全部工程不等於開放、營區不入、封線不跨及不列推薦路線保留。

來源未標示再利用許可，registry如實標示未知，Google Maps條款不等於攝影者授權亦明示；無CC虛構、不改validator。原始CDN未交接，original保留同一具名單圖連結。不與其他待定下載混用審批。

僅六文件：圖、registry、景點兩字段、pending僅移虎堡、新專項、本證據。全部舊JPEG逐字節和全部原registry鍵值不變；其餘pending新reason/順序字段不變。

validate exit0，4411雙端照片及site回歸40/40通過（14.1s）。首輪2失敗為article locator多個匹配，僅改為article.article-body，不刪准入保護斷言。日誌/tmp/tiger-photo-validate.log、/tmp/tiger-photo-browser.log、/tmp/tiger-photo-browser-final.log，截圖/tmp/tiger-photo-{desktop,mobile}-credits.png。臨時配置/依賴移除，未提交推送，凍結供獨立QA；main如更新需再對齊。

## #194已合併最新main整合
GitHub exact main896e52159d8d97377754a602de7f74300304f3d9 treefdeb15957e9f62d6072b6090062e773459aaf987（/tmp/tiger-latest-main.json）與release-sixteenth-integrated乾淨HEAD精確同樹；建立獨立release-tiger-current，未帶其工作樹修改。按key新增虎堡，保留峰上#194作者/來源/未知許可與全部原registry；所有舊JPEG逐位元組相同。pending基線實際40項含虎堡，僅按slug移虎堡後39項，其他reason/順序字段完全相同。虎堡原正文共同基線逐字節一致，無關閉/軍區/封線邊界刪減。

用戶最新原文：「不需要反复问我授权的问题 没授权的也可以直接上」，範圍僅金門景點；本候選仍如實保留未知許可、不把用戶意願當攝影者授權，遵守工具審核，不自行公開提交。

validate exit0；在本地預覽埠 4413 執行一次完整桌機／手機回歸，結果為 434 passed (2.2m)、exit0。日誌/tmp/tiger-current-validate.log、/tmp/tiger-current-full-browser.log。六文件候選，臨時配置及依賴連結移除，未提交推送，凍結供獨立QA及主線決策。
