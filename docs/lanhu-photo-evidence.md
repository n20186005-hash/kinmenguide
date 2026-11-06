# 蘭湖獨立補圖候選

基線tree 1c0720d8bbc0b479f32c1e4bdce1d48786371d71，placeholder HEAD cae8698318250d827cdc85004d0b8f697e45d608，主線確認等同真實main c66d064235df434f3f753e5dfc73e1add10d2fd7；不可推送占位，發布前再對齊最新main。

來源：https://commons.wikimedia.org/wiki/File:兰湖_-_Lanhu_Lake_-_2014.05_-_panoramio.jpg
原圖：https://upload.wikimedia.org/wikipedia/commons/6/6f/兰湖_-_Lanhu_Lake_-_2014.05_-_panoramio.jpg
作者rheins，2014-05-02，CC BY3.0 https://creativecommons.org/licenses/by/3.0/ 。原Panoramio ID116337067，2017-05-20 Panoramio upload bot核查該許可。非將網頁文字授權當照片授權。

Chrome正常下載Original file一次成功，無額外確認或安全繞過。原JPEG4608×3456、orientation1、2565051 bytes，sharp完整解碼通過；SHA1 7f2805fedfb8e0d02426703086ccf8f8d4c0f1ed與Commons原圖checksum完全一致；SHA256 c14835bcc94d18883915a3cf325712fb923beb102586ba75f51898ce19492a34。原JPEG逐位元組保留，不修改任何既有照片。

目視湖面、裸露湖岸、岸邊亭與欄杆，具名描述為金門蘭湖、拍攝位置24.451697,118.381300；與lan-lake頁面同對象，不拿其他湖泊替代。Caption標2014歷史湖景，不代表目前水位、設施或開放狀態。署名、許可/來源鏈接、網站縮放/WebP/版面裁切說明由registry及既有credits完整展示。

只新增JPEG、registry單筆、該頁兩個封面欄、pending移除此slug、專項與本證據。無整頁遷移或其他照片變更。

npm run validate exit0；隔離4401端口desktop/mobile專項2/2通過（4.2s），涵蓋解碼與正向比例、歷史狀態、署名、來源/許可鏈接、credits無溢出。頁面與credits均截圖，credits雙端目視正向。日誌 /tmp/lanhu-photo-validate.log、/tmp/lanhu-photo-browser.log；截圖 /tmp/lanhu-photo-{desktop,mobile}-{detail,credits}.png。臨時配置與依賴連結已移除，未提交推送，凍結待獨立QA。

## 對齊已合併家廟後的main
新候選目錄release-lanhu-photo-current以sixth暫存tree加已發布家廟六文件構造，`git write-tree`為f46fbf7973a4933f8bf80a4d3dfd2ead26171500，與GitHub REST git/commits/ad4e3cb477c6ccde0491703010c17864e7284a06回傳tree完全相同（原始回應/tmp/ad4-main-commit.json）。其上只重疊蘭湖六文件。逐位元組核實全部舊JPEG不變；全部既有registry鍵/值不變（包含家廟與瓊林坑道）；pending僅移除lan-lake，家廟已發布狀態保留。新main可能再變，發布前仍需最終對齊。

本次validate exit0；完整雙端回歸於隔離4402端口進行，日誌/tmp/lanhu-current-full-browser.log。未推送任何占位HEAD。

新main等樹候選最終完整回歸 **358 passed (1.9m)**、exit0；包含家廟及瓊林原有雙端照片專項與蘭湖新專項。validate亦exit0。臨時config/依賴連結已移除。最新本地占位51421a48db6f8d61706b486c2ec9ded22305221c（其tree=f46fbf7973a4933f8bf80a4d3dfd2ead26171500）；未推送，蘭湖六文件維持未提交。
