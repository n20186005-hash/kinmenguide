# 蘭湖 v1.2 本地證據

2026-11-05自行核公開來源，獨立QA由主代理統籌。三原專題/原國健署來源保留；蘭湖湖岸與水域現行管理/權屬、入口及座標仍未核實。原遷移正文未隨照片發布。

- https://kinmen.travel/zh-tw/travel/attraction/506 官方索引記蘭林水庫1968完成、灌溉飲水及小徑位置；英2060索引一般免費/全天，不等各橋亭湖岸全天可達或水上許可。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=3E7141C1EEE1CFF6&sms=BF7D6D478B935644 直接全文/日期2025-02-03，環境整理、區域責任整合/遊憩廊帶規劃；不是工程完工、當日開放、水上活動核准或全湖管理權屬證明。
- https://kinmen.travel/zh-tw/nearby/ebus?placeId=506&type=Attractions 官方索引近站頁，未把鄰站當直達或步行時間。
- https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=569&pid=9190 原國健署來源本輪502，保留原位置線索，不假稱直接新核到健走路線。
- 原短鏈 https://maps.app.goo.gl/nTBVzVSE3pBT1Kkn7 直接無法存取，未核具名地址及入口；自頁sources及正文移除可點導航，僅在本證據記錄，不新增假POI/marker/schema地圖。

尚待水庫/湖岸/橋亭現管理與土地、現行工程圍設、安全連續路線、停車/公車/輪椅及POI。未核水上活動與救生，不安排下水；不把規劃稱現行施工或已全開。

僅本頁/自身registry/專項/證據及pilot fixture改landmine-museum，CSV/進度未動，無提交推送。

本次最終驗證：validate零errors/warnings/hints；556頁、48,997內部引用、1,884圖片、4,141 schema節點。蘭湖、港站費用日期限定及pilot fixture桌機手機6 passed（2.9s），4339已結束。日誌/tmp/lan-lake-validate.log、/tmp/lan-lake-browser.log。待主代理QA及全套。

獨立複核更正（2026-11-05）：上文將 pilot fixture 路由變動歸於本頁的描述未獲可靠變更證據，撤回該變更歸因；測試通過結果不受此更正影響。


## 照片正式發布及驗收（2026-11-06）

照片最小變更已隨 PR #174 合併：merge SHA `d8d2d1c79c2de3885803ed00752b714ff834e728`；Cloudflare production build 明確 completed/success。正式站照片於 `https://kinmenguide.com/attractions/lan-lake/` 獨立核驗，Credits 為 `https://kinmenguide.com/credits/#place-lan-lake`。

照片：`兰湖_-_Lanhu_Lake_-_2014.05_-_panoramio.jpg`，rheins，CC BY 3.0；[Commons來源頁](https://commons.wikimedia.org/wiki/File:%E5%85%B0%E6%B9%96_-_Lanhu_Lake_-_2014.05_-_panoramio.jpg)，[許可](https://creativecommons.org/licenses/by/3.0/)，原始檔SHA-256 `c14835bcc94d18883915a3cf325712fb923beb102586ba75f51898ce19492a34`。原檔作為 `src/assets/photos/place-lan-lake.jpg` 同字節保存。

正式站桌面圖像載入完成，natural size 1829×1371；畫面湖面、裸露岸線及岸邊涼亭對象/方向一致。390×844手機端載入完成，natural size 389×292，圖框346×280，文件及body寬均390px，無橫向溢出。caption為「2014年蘭湖歷史湖景；照片不代表目前水位、設施或開放狀態。」credits列攝影者、CC BY 3.0、來源及許可鏈接，並說明原JPEG未修改、本站縮放轉WebP及版面裁切。Cloudflare production build後完整回歸 **358 passed**。

本次恢復副本僅同步照片原檔、registry `place-lan-lake` 單項、該頁image/imageCaption兩欄、pending清單移除此一項與本證據。遷移正文與 FAQ/schema 未宣稱該正文已上線；現行管理、土地權屬、導航 POI 等原待核項仍待核，未因補圖改變。

## 2026-11-06 named reference and existing photo
Independent UI QA supplied exact reference https://www.google.com/maps/place/Lan+Hu/@24.4520049,118.3829049,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a365de87e941:0xa11cf5a96be5592c!8m2!3d24.4520049!4d118.3829049!16s%2Fg%2F1tfq6vx1; named identity only, not safe entrance or daily access. Current-main published photo/imageCaption preserved byte-for-byte as fields; no assets/metadata changed. LanHu old short URL was confirmed same named lake; Cai reference limited to13/eleventh-generation hall and not grouped temples. Pending Google navigation/schema fields remain disabled. Prior no-photo or unverified-identity records are historical; actual entrance/private worship/water conditions remain unresolved. Await independent release review.
