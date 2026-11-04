# 官裡風獅爺 v1.2 證據

核查日期2026-11-04（UTC）；Sol實作，authority獨立來源及內容審閱。基底 GitHub main `ad65d2931f4b23342859b2fee44d48c7cca90240`，完整869個blob逐一重算git hash一致，135個overlay為基線，非本批diff。已讀AGENTS、relay skill v1.2、template、最新CSV與Issue59。

## 原頁盤點及保存

原三題「這裡值得看什麼」「怎麼安排參觀」「把下一站排在附近」及三段完整保留到FAQ後H3；第二段無來源的「沿公共動線」最小改為當日安全允許範圍觀察，無法確認則略過。首段民國初年/2007泥塑/對分背鬃/底座重修記保留，鈴鐺用詞另外與官方社群圖說「磬」並列不自行鑑定。燕南書院、官路邊風獅爺及金城指南原連結保留；原615來源保留。無原FAQ，新8題同資料逐字生成details及FAQPage。

原 `place-guanli-wind-lion` 主圖、alt、觀光處署名、政府網站資料開放宣告與credit原樣保留；無相冊新增。photos.json、PHOTO-CREDITS及圖檔無修改。

## 官方及Google直接核查

實作者Google Maps繁中GUI直接搜尋，展開具名「官裡風獅爺」，地址原文 `893金門縣金城鎮`，CID `0x3414a219177925f5:0xb340bf1d43a2844b`，座標24.4125089,118.3191411，GID1tlk8_x2，PlusCode C879+2M；外鏈官方615，顯示24小時為第三方字段，非即時准入保證。authority獨立GUI同值。分享操作產生同名place長URL，本頁全部導航與schema/map同URL，不使用文字搜尋或官方泛地址代替。

[具名POI](https://www.google.com/maps/place/%E5%AE%98%E8%A3%A1%E9%A2%A8%E7%8D%85%E7%88%BA/@24.4125089,118.3191411,922m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a219177925f5:0xb340bf1d43a2844b!8m2!3d24.4125089!4d118.3191411!16s%2Fg%2F1tlk8_x2?hl=zh-TW)

[觀光處615](https://kinmen.travel/zh-tw/travel/attraction/615)：實作者GUI直接讀更新2018-07-30、全天/開放中，地址官裡村環島南路一段附近、官方daddr24.4125,118.31914，與Google精確點接近但獨立列示。文內民國初年村民發起、2007仰雲殿修繕委員會重塑遷建、寶藍泥塑及對分背鬃/底座重修記。這是有日期歷史介紹；未當目前委員會、產權或日常養護權證明，也未宣稱當日通行、現貌及無障礙。官方所引社群圖說胸前裝飾為磬，未把IG投稿圖片當本站新圖或授權。

現行單一管理、產權、委外、票價、公共准入範圍、停車、廁所飲水遮雨及連續無障礙未取得直接證據，均待核。不因觀光處發布或村民歷史重塑推管理；不編造專用車位或步行分鐘。公車只提供[縣府動態](https://ebus.kinmen.gov.tw/)及[615附近查詢](https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=615&type=Attractions)，web工具後者讀取失敗，未據以刊載路線或站距。

## 照片來源

官方615已載入圖片DOM直接核得 `https://kinmen.travel/attractions/2318/1024x768_image_636361829011770674.jpg`，與原photos.json original完全一致（同場另有1920尺寸）；保留原圖，不借官路邊/官澳照片。原署名金門縣政府觀光處、[GWOIA](https://kinmen.travel/zh-tw/gwoia)宣告已直接讀取：機關素材得重製改作但需出處，特別聲明與第三人權利例外仍適用；未假稱辨明個別攝影者或排除全部第三方權利。沒有發現此圖另有專屬限制，原信用標示維持。

## 驗證及範圍

本地完成2026-11-04 10:45 UTC。`pnpm validate` 通過，0 errors/warnings/hints；556頁、48,583 internal references、1,884 images、4,103 schema nodes。完整桌機及手機套件292 passed（1.3m），包含本頁單H1、標題順序、原三主題、照片credit、canonical、8 FAQ可見/frontmatter/FAQPage逐字比對、同Google原址/coords/hasMap/導航與/map、行程加入後移除自身項、手機無溢出。

完整remote blob比對只有本景點MD、pilot registry、CSV三個既有追蹤檔異動，新檔僅本測試與證據，共五檔。移除registry本頁區塊後與baseline完全一致；CSV除本列外所有行不變；原三主題與正文保留（僅通行句條件化），其他內容集合、照片及署名全無改動。git diff --check通過。

CSV保持AWAITING_LIVE_CHECK，未正式站驗收。下一站guanlubian-wind-lion，未提交推送。

獨立authority最終複核無內容阻斷：另以GUI親讀官方2018日期/歷史重塑/全天及同Maps原址CID座標；未把IG投稿當新增授權圖，既有信用保留且攝影者未自行推定。
