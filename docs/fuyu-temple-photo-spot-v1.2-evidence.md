# 福寓宮旁：為什麼來金門彩繪 v1.2 證據

查核2026-11-04（美國洛杉磯），最終執行UTC時間另列。未提交／推送／部署，CSV待正式站。

## 基底及原文盤點

GitHub main `95f34eccc2b8475aef1d72f988acb6e5d5245ce0` 完整tree859 blobs逐一git blob SHA驗證；local42f53d3上118項覆蓋是基線，不納本批。原頁3個H2「一句問話，藏在下堡巷弄／導航到哪裡／對聚落保留一點安靜」及5段正文移到FAQ後H3，原廟宇／彩繪分辨、地面拍照、雨天、安靜及祭祀禮節、酒廠／海堤內鏈均保留。原官方1798來源、3條related、image/credits保留。

有必要的窄修：把「適合短停」「沿公開步行空間」「上方欣賞即可」改成當日安全且允許通行的條件；導航改為官方位置示意及Google POI待核；酒廠「已開放」改為當期確認開放，不承諾其他場館營業。未更動其他內容集合。

## Google POI 查核結果：待核，未冒充

實作者繁中Maps GUI查「為什麼來金門」只回頂堡公園及福寓宮；以官方彩繪水溝描述查也未核得同一牆面POI。authority獨立GUI確認同樣結果，「福寓宮前彩繪水溝」還誤匹配台北。福寓宮是相鄰宗教場所，頂堡公園也是另一點，不借其CID、原地址或座標當本牆。

未填googleMapsUrl或宣稱有Google原址；`address`明寫具名地標待核，官方1798的「金門縣金寧鄉下堡9號後方／福寓宮前小河溝旁」另存locationDescription。coordinates精確沿官方1798 `daddr=24.4460724611374,118.337371000469`作示意，非Google具名pin、精確入口、停車或公眾路權。

新增景點專屬opt-in `googleMapsVerificationPending`，只有本頁true：schema省略address與hasMap，詳頁不輸出Google導航，/map不產生座標搜尋或文字搜尋導航並顯示待核提示。官方位置仍可圖上示意；其他已核地標保持導航。此為避免錯誤導向的必要共用窄修，不擴大到餐飲住宿。

## 官方資料與限制

- [觀光處1798](https://kinmen.travel/zh-tw/travel/attraction/1798)：實作者GUI親讀「為什麼來金門」，更新2026-07-09、24小時、免費、下堡9號後方、福寓宮前小河溝旁、建議半小時。沒有服務設施字段，不能推出車位／公廁／飲水／無障礙。全天不證夜間照明、現場通行或可進溝渠。文字web擷取僅JS殼，以GUI為據。
- [縣府2026-05-16轉鄉代會考察](https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=D9D9269FC7021C10&sms=BF7D6D478B935644)：115-05-16原文記水溝雜草、排水斷面受阻，建請公所清淤除草整建，公所將檢討改善。僅支持當時問題／要求，不證完成、不證今天仍相同狀況，也不是現管或產權指定。搜尋primary全文可讀，直接web開啟逾時，authority獨立核同範圍。管理CTA明確稱改善建議紀錄。
- [官方附近公車](https://www.kinmen.travel/zh-tw/nearby/ebus?placeId=1798&type=Attractions)：前厝196m、頂堡218m，2／10／11／12左右繞及多分支，頁面聲明僅供參考另查動態；不把距離當實走路線或進溝入口，未承諾班次／回程。
- [2021歷史燈景報導](https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=43F55CEC66A44CBA&sms=BF7D6D478B935644)：110-02-16，當年燈會與亮燈時間屬歷史活動；未拿當現在固定燈景、可入溝渠或今晚節目。只用於FAQ提醒勿套舊活動。
- 觀光多媒體1798本輪web不可存取，未據此虛構費用衝突或空欄值。

現行彩繪牆／溝渠完整管養、產權、非公開範圍、完成整建、夜間照明、車位及設施仍未知；不因鄰宮、觀光頁發布機關、活動主辦或公所改善建議推定權責。

## 照片與授權

原 `place-fuyu-temple-photo-spot` 實景主圖、alt、觀光處／政府網站資料開放宣告及credits全保留，未增相冊或照片。本地JPG與[官方原圖35625](https://kinmen.travel/attractions/35625/1024x768_attractions-image-_wvntfqkzuwrx-zfqwaova.jpg)逐位元一致：127092 bytes，SHA256 `6e7cb9fab46cb3ae37778033ddc87bb353aaa6280af96adc475706f9b84b9805`。目視為字樣、車形壁貼、彩繪與排水牆面，不把照片當作今天畫面、可入溝渠證明。[官方開放宣告](https://kinmen.travel/zh-tw/gwoia)允許縣府資料素材重製改作、需出處，保留特別聲明與第三方權利例外，未稱已取得私人攝影師新授權。

## 驗證及範圍

最終完成2026-11-04T08:20:23Z。`pnpm validate`通過：0 errors／0 warnings／0 hints；556頁、48,545內鏈、1,884圖片實例、4,098 schema nodes，照片及非景點集合回歸稽核通過。完整桌機／手機 **282 passed (1.2m)**，本頁雙viewport通過。

本頁專測：唯一H1／canonical、10節H2順序／原三H3、主圖觀光處及開放宣告署名、無空相冊、改善建議CTA語義與URL、8FAQ前置／可見／FAQPage逐字順序一致；本頁schema無address/hasMap、詳頁及/map無Google導航、官方示意geo及待核提示、trip加入並僅移除自身項、手機無橫溢；鄰近已核景點Google地址／hasMap／map導航不變。

另與前一完整主線實作產物逐位元比對：其他173景點詳頁HTML不變；378個非景點HTML不變。trip頁除catalog外完全相同，979項中僅本景點address/notice更新，其餘項不變。原3主題5段除已記必要條件句外逐字保存。

authority獨立來源／GUI／新版複核無事實阻斷。遠端完整tree比較只有6個既有blob改動：本頁MD、pilot registry、CSV、景點schema config、detail renderer及map renderer；加本頁新專測與本證據，共8檔。僅本頁opt-in pending flag，registry去本頁block後與main基線逐字相同，CSV其餘列相同，照片／授權metadata及其他內容集合未改；`git diff --check`通過。

初次check曾把scratch裡的基線.astro副本也掃描而報錯；將副本改為.txt後重新完整validate及282套全過，未為此修改產品程式。最終log `/tmp/fuyu-validate-final.log`、`/tmp/fuyu-browser-final.log`。臨時config與scratch已清理。未commit/push/deploy；CSV為AWAITING_LIVE_CHECK，PR/SHA/部署欄留空。下一slug按CSV為 `gaodong-tunnel`。
