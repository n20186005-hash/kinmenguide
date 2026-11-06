# 北山古洋樓新原圖候選（不同於先前超時圖）
來源 https://commons.wikimedia.org/wiki/File:北山古洋樓_01.jpg
原圖 https://upload.wikimedia.org/wikipedia/commons/0/04/北山古洋樓_01.jpg
作者Rueichung，Own work，2019-11-03，CC BY-SA4.0 https://creativecommons.org/licenses/by-sa/4.0/ 。此圖非先前「金門古寧頭北山古洋樓.jpg」，不重試舊圖或沿用其作者。

先檢查Downloads無北山圖，之後正常Chrome Original file下載一次成功，無額外確認。文件 /Users/a20186005/Downloads/北山古洋樓_01.jpg 。850590 bytes，4898×3265，orientation1，sharp完整解碼。SHA1 05a613e49e69c8197175d59f66a48436403f3367，SHA256 c77d649c1affc14a32977ef6abb2df38889569df7b9e363632304d867bb50bd7。Commons官方API imageinfo pageid94350020 size/width/height/sha1與實際全一致，extmetadata author Rueichung、license cc-by-sa-4.0、Restrictions空。

Chrome目視完整雙層洋樓殘牆、彈痕、屋頂山頭與相連閩式建築，與北山古洋樓頁面對象一致；拍攝年份必留2019年，不代表目前住宿空間、可入內範圍或開放狀態。不可沿用Commons政治敘事當網站正文。

待主線提供包含最新已合併照片的精確main等樹基線後，建立獨立最小6文件候選（原圖、registry單筆、頁面兩欄、pending單項、測試、證據）；原JPEG不改，來源署名與衍生同許可完整呈現。尚未入站或修改既有圖。

## 獨立候選完成
基線GitHub exact commit14fb389655422ee2df69b3f0cb9d9ec2db5b0452，tree4beade38d3a3e1002fc0d29d90e1c8d862808efb；API回應/tmp/14fb-main.json確認一致。從release-eighth-on-main乾淨HEAD7aa6e65b496c59040a0b554571cec1f90411938c建立獨立release-beishan-mansion-photo，未帶該工作樹未提交四頁。只新增本圖六文件，原正文不動，pending僅移除beishan-old-mansion。所有既有JPEG逐位元組比對HEAD、registry所有原鍵值完整保留。

npm run validate exit0；隔離4404端口新洋樓及既有和平/蘭湖/家廟/瓊林雙端專項10/10通過（14.2s）。credits雙端截圖目視正向、作者/許可正確；頁面歷史狀態限定與來源/許可鏈接、解碼及無溢出通過。日誌/tmp/mansion-photo-validate.log、/tmp/mansion-photo-browser.log，截圖/tmp/mansion-photo-{desktop,mobile}-{detail,credits}.png。臨時配置與依賴連結移除，六文件未提交，凍結待獨立QA，不可推送占位HEAD。

## 修復既有無圖斷言並完整回歸
獨立QA全量首次出現2失敗，原因為既有attraction-detail-beishan-mansion.spec.ts仍預期cover數量0。僅替換該斷言為目標alt、實際解碼、2019歷史caption、現況邊界、Rueichung/CC BY-SA4.0及credits錨點；其他安全/內容/FAQ/導航/管理斷言全部原樣保留。保留主線原失敗日誌；新日誌/tmp/mansion-photo-revised-validate.log、/tmp/mansion-photo-revised-full-browser.log。validate exit0，完整桌機/手機 **374 passed (1.6m)**、exit0。候選因此為7文件，新增舊專項的必要測試更新；臨時依賴/配置移除，未推送，重新凍結。

## 對齊#178後新main
GitHub API exact commit71264692128df739508ac3983adb7ca651765bfc tree5c8a88bd0abfacb4eee99a8f08b89b7d9b13a890（/tmp/712-main.json）。新目錄release-beishan-mansion-current以相同tree獨立初始化；與舊照片候選共有四修改文件先驗共同基線逐字節一致，再只叠七文件。完整保留#178四頁（mofan-street/rongyuan/wentai-pagoda/xiyuan-salt-museum）、全部舊圖及原registry記錄。validate exit0；隔離4405端口單次完整回歸382 passed (1.7m)、exit0。日誌/tmp/mansion-current-validate.log、/tmp/mansion-current-full-browser.log。臨時config/依賴已移除，七文件未提交、未推送，凍結待最新main核對。
