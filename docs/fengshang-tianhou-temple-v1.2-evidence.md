# 峰上天后宮 v1.2 證據

查核日期：2026-11-03（美國洛杉磯）；執行結果 UTC 時間另列。僅本景點，未提交、推送或部署。

## 基底與原文保存

GitHub main `8f51f5ef734a8bfefac2100b5c3d24b6bde1abaa` 的完整 tree 855 blobs 均以 Git blob SHA 校驗；本地42f53d3上112項覆蓋為既有基線，不納本批。原三個主題「這裡值得看什麼／怎麼安排參觀／把下一站排在附近」及三段內容、三個相關內鏈、原文化局PDF及金門日報143250來源均保留。僅將舊句「接巡檢司時沿有標示道路」收斂為當日標示允許通行的條件句。原頁無照片；PHOTO-AUDIT與pending紀錄一致，本批不新增圖、相冊或信用，不借用孚濟宮/巡檢司圖片。

## 具名 Maps

實作者與 authority 分別 GUI 核對「峰上天后宮」；Google地址欄原文 `891金門縣金湖鎮峰上6號`；CID `0x3414a5129e9a788f:0x2c965b20c8db350`，座標24.4311291,118.4612598，g/1tf77qnv。GUI未提供營業時間（新增營業時間）或網站，不推為全天。原地址不是准入/停車承諾。

[具名Google POI](https://www.google.com/maps/place/%E5%B3%B0%E4%B8%8A%E5%A4%A9%E5%90%8E%E5%AE%AE/@24.4311291,118.4612598,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a5129e9a788f:0x2c965b20c8db350!8m2!3d24.4311291!4d118.4612598!16s%2Fg%2F1tf77qnv?hl=zh-TW)。詳情三個CTA、schema hasMap、/map共用同一POI；streetAddress使用原文。

## 官方來源與限制

- [縣府2026-05-12醮慶報導](https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=4CFB7CB03B89FBD5&sms=BF7D6D478B935644)：管理委員會參與當年祭祀、接待與醮慶。此為宗教組織角色，不證產權、全年開門或日常維護。實作者primary搜尋全文可讀，直接web開啟逾時；authority獨立核對日期與角色。CTA明確標「查看2026醮慶與管委會紀錄」，避免誤稱權管文件。
- [文化資產局2018年報](https://stat.moc.gov.tw/Research_Download.aspx?idno=1125)：2018新增民俗「峰上天后宮祭蜂鄉俗」保存者為管理委員會。搜尋索引官方表格可讀；直接開啟403。屬民俗保存者紀錄，不表示廟體有形古蹟或政府經營。
- [文化局宮廟文物普查](https://cabkc.kinmen.gov.tw/uploads/files/202105/37e34f8c-167f-4d16-a2d0-3dc89afab06d.pdf)：分列天后宮與孚濟宮。authority未在全文找到峰上6號，因此已移除「普查亦列門牌」說法；門牌僅歸因Maps。當次文物調查拍攝同意不等於旅客拍照許可。
- [官方祭蜂活動3120](https://kinmen.travel/zh-tw/event-calendar/details/3120)：2021歷史活動參考，非今年排期、免報名或可直接參與證據；實作者文字擷取為JS殼，authority獨立核實歷史範圍。
- 原[金門日報143250](https://www.kmdn.gov.tw/1117/1271/1272/143250?cprint=pt)保留為峰上信仰背景；與原漂木民間故事不混成可考建築年代或現行營業資料。
- [縣府公車時刻表](https://ebus.kinmen.gov.tw/extend/timetable_output_include.html)：僅提示查19路繞峰上分支及當期動態，未承諾到廟步行分鐘、班次或停車設施。

具體日常養護、產權、委外、非祭期開門、收費、無障礙、車位、廁所及周邊海岸通行仍未核實；白天/詢廟方為行前建議，不是即時開門渠道保證。兩座廟、周邊媽祖像及海岸不合併權責。

## 驗證

最終完成 2026-11-04T07:26:37Z。`pnpm validate` 通過：0 errors、0 warnings、0 hints；556頁、48,532內鏈、1,884圖片實例、4,096 schema nodes，照片及商家/聯盟連結稽核通過。

完整桌機／手機套件 **278 passed (1.2m)**，含本頁雙viewport專測：唯一H1、10節H2順序、原三H3、無空相冊或新增照片、精確管理CTA、8題FAQ可見/前置/FAQPage逐字順序一致、canonical、Google地址/hasMap/座標、三CTA與/map同POI、加入行程並僅移除本測試自加項、手機無橫溢。authority最終複讀確認無內容阻斷。

依遠端完整tree作範圍比對：既有blob僅本頁MD、pilot registry、CSV改動；另新增本頁專測與本證據，共五檔。registry扣除本頁block後與main基線逐字相等；CSV其他所有列不變；三舊段落除記錄的道路條件句外逐字保存。`git diff --check`通過。無commit/push。

CSV為AWAITING_LIVE_CHECK，PR/commit/deploy欄留空；正式站尚未驗收。下一slug由CSV順序讀得 `fuguodun-viewpoint`。
