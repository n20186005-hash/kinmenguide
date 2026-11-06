# 模範街 v1.2 本地證據

2026-11-05整理，非現勘。保留三原題「看街屋，也看今天的生活」「一段很好銜接的散步」「拍照與停車」、兩原FAQ逐字及全部原相關鏈。現時商家另核，不把老照片招牌作現營店名。

## 官方資料及角色
https://nchdb.boch.gov.tw/city/cabkc.kinmen/assets/overview/historicalBuilding/20030331000020/ 官方精確條目完整索引列歷史建築、各戶店家住戶自行管理維護、整體街區環境金城鎮公所委外認養（磚隙植生清理等）、全天、不收費。直接頁本輪超時；字段更新日未明，不把2003登錄日期當管理/開放字段當期確認。只稱有界分工，不推公所擁有/經營每戶、店宅室內全面可入，文資主管與日常環境職責分開。未補未核1924/1925建年爭議，Commons照片文字不作建年主證。

https://kinmen.travel/zh-tw/discover/tour/22 官方完整索引2026-01-15，總兵署起點、模範街終點、免費解說游程；不保證當日場次、集合或店家營業。https://kinmen.travel/zh-tw/travel/attraction/1343 本輪直接框架，未重現更新日期，不冒稱當日已核所有旅遊字段。既有官方來源仍保留。舊2016類徒步試辦與汽車禁行報道只可作歷史，不套現行時段或罰額，本頁請依當日道路標誌與警方公告。

## 原照授權
已實看src/assets/photos/mofan.jpg為紅磚拱廊街屋/行人及店門。Commons直接讀 https://commons.wikimedia.org/wiki/File:%E9%87%91%E9%96%80%E6%A8%A1%E7%AF%84%E8%A1%97%E4%B9%8B%E7%BE%8E-%E5%BC%B5%E5%88%A9%E8%81%B0.jpg ：Cpc3711、2020-08-24、own work、CC BY-SA4.0，保留作者/許可/來源/縮放說明，未改圖metadata。一圖不設空相冊，不以旗幟/招牌推今日街景。

Google具名POI地址及全街游客入口未核；撤24.43179,118.31916示意坐標導航/marker/geo/hasMap，所在地另欄，不用名稱搜尋替代。各店當期營業/個別消費、道路管制/外圍停車費與無障礙門檻廁所另核；拱廊非全部私人空間可入、不占門車道、不碰歷史磚牆。

已確認oucuo-tank.md存在且未registry opt-in，pilot fixture移此，下次遷移需再換。僅本頁/自身registry/專項/證據及fixture，未改其他集合或CSV進度，不提交部署。

本地驗證完成：validate 0 errors/0 warnings，556頁/49668內鏈/1884圖片/4208 schema及影像/跨集合audit通過。4339 CI=1本頁及fixture桌面/手機4 passed (2.5s)，覆蓋原照Cpc3711/CC BY-SA4.0、三原題/兩原FAQ、店戶與公所環境角色、FAQ逐字HTML/schema、無未核導航/地址/geo/hasMap/marker、行程增刪及無水平溢出。日誌 /tmp/mofan-validate.log、/tmp/mofan-browser.log。LOCAL_READY_AWAITING_BATCH_RELEASE，源碼/dist凍結供父代理QA及完整回歸，未提交部署。

## 文資主管角色補正
本輪精確官方索引 https://nchdb.boch.gov.tw/assets/overview/historicalBuilding/20030331000020 可核主管聯絡名稱金門縣文化局、文化資產科。官方文化記憶庫同ID https://tcmb.culture.tw/zh-tw/detail?id=20030331000020&indexCode=BOCH_CountryCulture_12 亦列金門縣文化局及所屬主管機關金門縣政府。原city URL直接仍超時，不冒稱本輪全文可讀。FAQ/正文/schema/registry同步分列文化局文資主管聯絡、各戶日常維護、公所街區環境認養；不推文化局經營全部街屋或公所全部產權，字段更新日仍未明。

主管補正後validate成功、跨集合audit通過；4339 CI=1桌面/手機專項2 passed (1.8s)，新增文化局文資角色與日常維護分開的可見/schema防回歸，原照/三主題/兩FAQ保留。日誌 /tmp/mofan-fix-validate.log、/tmp/mofan-fix-browser.log。源碼/dist再次凍結供父代理QA及完整回歸，未提交部署。

## 2026-11-06 named map-reference clarification
Independent Maps UI QA supplied exact named reference: https://www.google.com/maps/place/Kinmen+Mofan+Street/@24.4317899,118.3165755,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a26bc5884475:0xa2e03e3948f1882e!8m2!3d24.431785!4d118.3191558!16s%2Fg%2F11bbt711cz. Identity checked; display address, precise visitor entrance and daily access remain unverified. Visible reference only, no Google fields, coordinates, hasMap/schema, marker/navigation enabled. Private-house/interior/tower/water/work-area restrictions and original image preserved. Earlier named-POI-unverified statements are historical for identity only. Await independent release review.
