# 金酒金寧廠 v1.2 本地證據

2026-11-05，實作代理自行查核，獨立QA由主代理統籌。

五原專題及原內外連結保留於FAQ後；原distillery圖、rheins、CC BY3.0與授權未動。舊24.43178,118.34358未核撤出schema/marker，官方桃園路1號分列，不冒Google地址。

## 官方來源

- https://www.kkl.com.tw/tc/booking.aspx ：直接可讀，公開動線為廠史館製程介紹/酒瓶公園/詩酒步道/生活館/曲水流觴，08–17:30、生活館12–13休、公告暫停除外，金寧廠及分機88418，團體表單不等預約成功。不推實際產線/儲酒作業區准入或免費試飲。
- https://www.kkl.com.tw/en/booking.aspx ：直接可讀，08–17:00，與中文差異，公開揭露先洽，不挑較晚者保證。
- https://www.kkl.com.tw/TC/kklmap.aspx ：直接廠區頁，支持金酒廠務角色，非所有區域開放許可。
- 官方門市頁（完整URL保存在本頁sources）：官方搜尋可讀總公司金寧廠門市由職工福利委員會經營，每日09–12及13–17:20，門市與參訪/生活館時表分開。
- https://kinmen.travel/zh-tw/travel/attraction/1342 ：官方索引列金酒全名與停車設施，不保證今日車位/費用或安全步行。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=B4B9E18A345C9F75&sms=BF7D6D478B935644 ：縣府2023配售酒提醒兒少不得飲酒/供酒，僅採年齡安全原則，不把配售購酒資格當參訪年齡。未核公共展示區未成年人准入/陪同，獨立標待詢。
- Google完整金寧廠名無法存取，地址POI/實際入口未核，不提供導航/geo/hasMap/marker。

## 未核與範圍

一般參訪及活動費用、試飲、團體資格/時段、未成年人參訪陪同、產線與其他酒窖、停車/公車/無障礙、土地與委外。駕駛不試飲，未滿18歲不飲酒購酒；不承諾兒童可參加所有體驗。

僅本頁、自身registry/專項/證據及pilot fixture（改kinmen-guesthouse）。另依QA授權補縣博舊名嵌入地圖不採用原因之證據。CSV/進度未動，無提交推送。

實際結果：validate 0 errors/warnings/hints；556頁、48,922內部引用、1,884圖片、4,133 schema節點。金酒與pilot fixture桌機手機4 passed（2.4s），4339已結束。日誌/tmp/distillery-validate.log、/tmp/distillery-browser.log。覆蓋原照片署名及五專題、語系時間衝突、門市/產線/年齡限制分開、FAQ逐條schema、無未核導航/geo/marker、行程與手機。待獨立QA/全套及發布驗收。

獨立複核補記（2026-11-05）：金酒官方金寧廠門市頁的 Google 地圖連結指向「金門酒廠實業股份有限公司」，點位 24.4309275, 118.3429627。該連結來自門市資訊，不能證明參訪入口或工作區准入；因此仍不以此輸出景點導航、座標或地圖標記，待確認參訪入口後再核。來源：https://www.kkl.com.tw/tc/store_info.aspx?cchk=65D9A775-F4F0-4E2A-BA82-FF5B87B80403&chk=313a505e-db46-41f2-845a-92fefdfe2f97&cid=164&id=11&mid=97&param=pn%3D1%26cid%3D164%26cchk%3D65D9A775-F4F0-4E2A-BA82-FF5B87B80403

## 2026-11-06 official reference-link clarification
Independent QA supplied and directly checked https://kinmen.travel/travel-map/zh-tw/guide-sign/2/attraction/1342. Added a visible official reference link with explicit visitor-entrance/access/private-work-area limitations; no Google address, coordinates, hasMap, marker or navigation enabled. Implementer web-tool open returned inaccessible/minimal content and does not claim independent full retrieval. Original photo and FAQ answers preserved.

## 2026-11-06 independent release review
Coordinating agent confirmed that two independent gpt-6-luna reviewers directly checked key page-specific sources and safety boundaries for this fourth batch. Their role was independent factual/safety acceptance, separate from implementation. The accepted wording distinguishes bounded or historical official roles from current complete responsibilities, official/map reference points from visitor entrances, and announcements from present-day access. Earlier statements awaiting independent QA above are historical workflow records and are superseded by this dated review report; source and prior test records remain preserved. This does not establish current complete ownership/management, precise visitor entrances or real-time access.

Still unresolved for this page: conflicting Chinese and English visiting hours; factory tour entrance and named POI, current booking and fees. Original image preserved; not VERIFIED and not a production acceptance claim.
