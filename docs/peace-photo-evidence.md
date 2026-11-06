# 和平紀念園區入口照片：可執行候選，等待#174新main

同一性：站內 kinmen-peace-memorial-park 題為「金門和平紀念園區：林厝砲陣地與和平鐘」，aliases含林厝砲陣地；Commons圖描述明列林厝砲陣地（金門和平紀念園區）。Chrome照片目視中央白色城垛浮雕牆、左右戰車及入口廣場，為園區本體而非鄰近景物。不聲稱照片拍到和平鐘、不外推今日開放。

文件頁：https://commons.wikimedia.org/wiki/File:金門和平紀念園區入口.jpg
原圖：https://upload.wikimedia.org/wikipedia/commons/0/0a/金門和平紀念園區入口.jpg
作者Koala0090，Own work，2019-07-15，CC BY-SA4.0 https://creativecommons.org/licenses/by-sa/4.0/ 。需完整署名、來源及修改說明；衍生縮放/WebP/版面裁切仍沿用CC BY-SA4.0。

下載位置 /Users/a20186005/Downloads/金門和平紀念園區入口.jpg 。正常瀏覽器下載工具10秒超時後延遲落地，沒有重複下載；sharp完整解碼4608×2592、無EXIF方向欄、3447168 bytes。SHA1 a4d74d7046f8e65cef7f04c5506060f6b613baab；SHA256 74638b02eb314cad5503a43e935b13c40b7cbfdd098d0018a966c6dc860ff9f4。

獨立來源校驗：Chrome開Commons w/api.php?action=query&titles=File:金門和平紀念園區入口.jpg&prop=imageinfo&iiprop=sha1|size|url&format=json，公開JSON imageinfo pageid80470135，原始size3447168、width4608、height2592、sha1 a4d74d7046f8e65cef7f04c5506060f6b613baab，與本地檔完全一致；未依本地checksum自行宣稱來源一致。

最小候選待新main核實後：新增place-kinmen-peace-memorial-park.jpg原字節；photos.json單筆；該景點只加image/imageCaption（「2019年林厝砲陣地／金門和平紀念園區入口歷史照片；不代表目前設施或開放狀態。」）；pending僅移除該slug；新增雙端照片/署名/credits專項與本來源證據。保留蘭湖、家廟、瓊林及所有其他原圖與registry記錄，原正文不套遷移。不得修改共享組件掩蓋問題。需validate、隔離端口雙端與舊圖片/registry完整性比對，發布前獨立QA及最新main對齊。

#174仍待精確head雙CI，未落地registry/pending，未提交推送。

## 精確新main候選完成
release-peace-photo由已暫存蘭湖完整樹加#175的10個景點blob及CSV構造；git write-tree=5959a89d004fb9e3ec6ddf3a54b9a3727b9f6dc2，與GitHub REST git/commits/d8d2d1c79c2de3885803ed00752b714ff834e728實際tree完全一致（回應/tmp/d8-main-commit.json，完整清單/tmp/d8-main-tree.json）。本地placeholder不可推送。其上僅新增本照片六文件；逐位元組核所有舊JPEG不變，既有registry所有鍵值（含瓊林/家廟/蘭湖）完全保留，pending僅移除此slug。正文只加兩個封面欄，不套遷移。

npm run validate exit0；隔離4403端口新和平及既有瓊林/家廟/蘭湖雙端專項8/8通過（9.8s）。新圖頁面與credits解碼、正向比例、歷史狀態、署名、來源許可及無橫向溢出通過；credits雙端截圖目視正常。日誌/tmp/peace-photo-validate.log、/tmp/peace-photo-browser.log；截圖/tmp/peace-photo-{desktop,mobile}-{detail,credits}.png。臨時依賴與配置已移除，六文件未提交，凍結待獨立QA。
