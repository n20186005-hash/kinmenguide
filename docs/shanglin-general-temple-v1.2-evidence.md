# 上林將軍廟（李將軍廟）v1.2 本地證據

2026-11-05查核；未提交推送部署，CSV/進度由主代理維護。

## 官方來源

- https://kinmen.travel/zh-tw/travel/attraction/805 ：官方索引李將軍廟位上林村、明朝中葉建廟，列李府將軍、場官爺及擋境爺；不是金寧李光前將軍廟。不將原文誤寫的場官/擋境全部當李府將軍別名，信仰題材保留並修正關係。
- https://lieyu.kinmen.gov.tw/travel/cp.aspx?n=E252103284D88999 ：官方索引可讀、直接抓取超時的上林出海口、李府/廠官/擋境等稱呼、前方海灘與觀景設施；字形差異如實呈現，設施清單不推當日可用或可下潮間帶。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=62467AD703BAF660&sms=BF7D6D478B935644 ：官方索引全文可讀、直接頁回框架的2017-09-04報導記管委會辦當次醮慶、1981年12月重建及信仰故事。管委會歷史角色非現任組成/產權證明，鄉長參祭亦非公所整體管理。當期農曆祭典不由舊稿保證；神力、海盜與戰火護佑按信仰傳說，不自行考定李府本名。

## 保留及待核

原四專題、照片place-shanglin-general-temple作者許可及站內連結保持；一圖不設空相冊。祭祀與居民優先，不跨供桌碰供品或擅拍人像/殿內。

Google具名POI/地址入口未核，原24.42914,118.22843撤導航/marker/schema geo。原上林77號保留來源線索，不作Google地址或已核入口。鄉公所上林出海口地理說明另欄，不用公所頁尾地址冒充。

現任管理/權屬、維護、殿內/祭典及服務時段費用、海岸設施/准入、停車公車與連續無障礙待核。原一般全天免費非全殿內與服務隨時公開。

僅本頁/registry自身/專項測試/證據及pilot fixture換shangyi-environmental-park（確認存在未opt-in），不改其他集合、CSV/進度，不提交。未額外派遣子代理，主代理協調獨立QA。

## 驗證

主代理通知沙美全套418 passed後執行：validate通過，0 errors/0 warnings；556頁、49208內鏈參照、1884圖片實例、4162 schema nodes。上林及pilot隔離用例桌面/手機4 passed（2.6秒），含原四專題/照片署名、H1/canonical/順序、神明並列關係與歷史管委會/現任區分、FAQ/schema全等、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/shanglin-validate.log`、`/tmp/shanglin-browser.log`，4339正常結束。

LOCAL_READY_AWAITING_BATCH_RELEASE，待獨立QA及完整回歸，非部署或VERIFIED。


## 上林/沙美新版導覽聯合驗證

沙美4332公告補正後重構建：validate 0 errors/0 warnings，556頁與內鏈/圖片/schema檢查通過。上林、沙美及pilot隔離用例桌面手機6 passed（2.9秒），包括導覽2026-01-21公告/1-17起報到、FAQ/schema全等、原專題照片、信仰與當期准入角色、未核導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/shanglin-shamei-validate.log`、`/tmp/shanglin-shamei-browser.log`；4339服務正常結束。待主代理全套及獨立QA，未部署、未改CSV/進度或提交推送。

獨立複核補記（2026-11-05）：觀光署繁、英文下載的原始 JSON 均為 `IsAccessibleForFree: null`、`FeeInfo: ""`；英文詳情頁的「需入場相關費用」為空值誤呈現，不作收費證據。觀光旅遊頁列免費，當期條件仍須核。https://media.taiwan.net.tw/zh-tw/portal/travel/json/attraction_371020000a_000805

## 2026-11-06 named-reference update
Independent UI QA supplied exact named identity https://www.google.com/maps/place/Shanglin+General+Temple/@24.429128,118.2284998,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414994a1ce1361f:0x3d756dc5b899cc5!8m2!3d24.429128!4d118.2284998!16s%2Fg%2F1tf5bcq_. 此為上林77號李將軍廟，不套其他將軍廟；歷史公所介紹的營區地理與現行軍事界線分開，點位不授予寺內祭祀、軍區、海灘或潮間帶通行。 Identity is not verified entrance/address/current admission. Pending Google schema/navigation remains disabled; original photo preserved. Implementer official-source search confirmed dated tourism pages1487/805 and2018/2019 cultural or local descriptions, not current private/religious/military admission. Await independent QA and release acceptance.

## Recovered QA correction2026-11-06
Independent Maps UI QA supplied exact displayed address `894, Kinmen County, Lieyu Township, 上林77號`. Address identity now marked recognized; actual entrance/private or military admission/daily opening remain unverified. No coordinate,hasMap or navigation enabled. Original photo unchanged.
