# 寒舍花海岸 v1.2 證據

2026-11-04 UTC查核，Sol實作、authority獨立來源及內容審閱。main `dcd08bbd8496efe8b0359a01eaf6682ee4729442`，881 blob逐一重算git hash一致，153 overlay為基線非本批diff。AGENTS/skill v1.2/template與已讀版本byte一致；CSV本頁NOT_STARTED、下一hongtugou-first-camp，Issue59重新取讀。

## 原文/照片盤點

原三題「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」搬至FAQ後H3。第三段與船型堡/山后連結逐字保留；第一段把看海前提限定為當日安全允許岸上，不預設海岸可達；第二段將原斷言安檢所正在執勤改現駐點/使用狀態未核，不據Google類別或遊記稱廢棄作現況結論。原核心海岸觀察、傳說/可見地形分辨、海岸與工作設施分界保留。金沙指南related可見保留，原1669source不刪。

原 `place-hanshehua-coast` 圖片、alt「寒舍花實景」、金門縣政府觀光處/政府網站資料開放宣告/source/original/裁切WebP聲明均保留，照片庫/PHOTO-CREDITS與二進位無更動；無相冊新增。實作者直接view本地原圖為海岸岩體與海面，不把照片角度當可攀走路線。

## Google點位語義

實作者繁中Maps GUI查「寒舍花」直接落「寒舍花安檢所」，類別政府，原址僅 `890`，CID `0x3414baf8fecd2c5d:0xc9d38f9b860285a8`，24.507177,118.448184，GID1tdg5dsl，PlusCodeGC4X+V7，24h/不提供無障礙入口/電話082-355096均只是Google該設施字段。不把它改稱海岸的同名POI、觀光入口、停車場或安全可達路線，也不從評論斷定現在廢棄/有無人駐點。

本頁主題是安檢所周邊海岸地景，尚未核到海岸本身Google具名地址與POI，因此使用既有googleMapsVerificationPending守衛，schema不輸出address/hasMap，不提供Google導航或/map位置按鈕。保留官方1669座標24.50718,118.44817為清楚標示的官方示意，不當入口或攀礁目的地。無shared renderer/config更動，已核鄰點不受影響。

## 官方直接來源及限制

[金門國家公園地質103](https://www.kmnp.gov.tw/ch/specialreport/geological-landscape/103)直接可讀岬角、變質岩及侵入岩脈/風化窗背景。這是科普解說，不是現行管理契約、土地所有權、軍事區開放公告或攀岩路線；未以發布者當全海岸經營管理。

原[官方1669](https://kinmen.travel/zh-tw/travel/attraction/1669)實作者GUI兩次（含reload）只有導覽/頁腳/客服，無景點正文載入，未假稱直接讀前台全天/免費或當日狀態。原URL仍保留；搜尋官方簡中頁可見花瓣/貧女敘述，不當軍事事件已核實。

[觀光多媒體1669](https://media.taiwan.net.tw/zh-tw/portal/travel/details/attraction_371020000a_001669)實作者直接讀2025-05-23更新、座標及安檢所位置文字、Open/public；營運時段/組織/停車/設施空白，費用字段「需入場相關費用」但無金額。資料庫字段不當實際售票公告，亦不能延用原無依據「公共動線免票」。正文只稱費用/範圍待核並揭示字段，不把空欄當不存在設施。

多媒體轉述三片花瓣/碉堡故事及貧女謎底，屬地方旅遊敘事；地質解說與軍事傳說分開，未把爆破過程、島礁現可登、地名典故當新考證。海岸現行單一管養、產權、設施權界與駐點狀態未取得直接證據，明列待核。

[官方近站入口](https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=1669&type=Attractions)與[縣府動態](https://ebus.kinmen.gov.tw/)僅供出發前查詢，未實走到海岸的站牌路徑，不編造班次或步行分鐘。專用停車、廁所/救生/遮雨/無障礙、潮汐可走窗口及戲水開放均未核，不提供退潮可攀礁/入水承諾。

## 圖片來源範圍

原metadata original為 `https://kinmen.travel/attractions/35600/1024x768_attractions-image-nh3dkec9leifzokdt-xt_q.jpg`、source1669、觀光處署名與[GWOIA](https://kinmen.travel/zh-tw/gwoia)原信用保持。一般機關素材重製改作需出處，特別聲明及第三人權利例外仍適用；不假稱個別攝影者或全部第三方權利已查清。因本輪官方前台無圖池載入，實作者未假稱由前台DOM再次比到該檔；原合法照片保留且限制如實記錄。

## 驗證

本地完成2026-11-04 15:27:58 UTC。pnpm validate通過0 errors/warnings/hints，556頁、48,645 internal references、1,884 images、4,107 schema nodes。完整桌機手機304 passed（1.3m），含本頁單H1/順序、3原題、照片/信用、canonical、8FAQ可見/frontmatter/FAQPage逐字一致、未核海岸POI不輸出address/hasMap/Google導航、官方geo示意/map待核提示、已核鄰點不變、行程加入後移除自身項、手機無溢出。

完整remote blob比對僅本MD、pilot registry、CSV與既有tests/east.spec.ts四個既有檔及新增本focused測試/本證據，共6檔；registry其他區塊及CSV其他列完全一致。原3主題/連結保留，只有當日岸上可達及設施使用狀態句按證據限定。照片/metadata/credit、shared/config與非景點集合無異動。git diff --check通過。

CSV AWAITING_LIVE_CHECK，未正式站驗收，不提交推送。下一hongtugou-first-camp。

獨立authority最終內容/原圖授權無阻斷，同樣只取得安檢所政府POI，贊同海岸待核處理。依其窄審建議移除原兩個安檢所aliases，避免站內搜尋將辦公設施與海岸目標合併；原3題與全部連結不刪。

移除辦公設施alias後，既有east.spec歷史fixture用簡中安檢所詞期待海岸結果，觸發失敗；不恢復混淆alias，fixture原資料保留，只對該海岸href以明確「寒舍花海岸」查詢更新驗收語義。必要變更另含tests/east.spec.ts，本批共6檔；所有其他requested queries不變。該次舊驗收失敗為桌機/手機兩項，302項已通過；後續以修正後全套結果為最終驗收。

最終移除aliases及對應舊搜尋驗收窄修後，完整validate與304桌機手機再次全部通過（1.3m），包括原先失敗的east第57–84項查詢；無剩餘失敗。
