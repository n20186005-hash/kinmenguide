# 青岐碼頭（青岐港）v1.2 本地證據

2026-11-05查核；未提交推送部署，CSV/進度由主代理維護。

## 官方資料與限制

- https://kinmen.travel/zh-tw/travel/attraction/1971 ：官方索引可讀青岐村南邊、復興嶼方向視野及附近南山頭玄武岩，原頁季節藻類題材保留；不推當日綠石槽、視野或連續步道保證。
- https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=405270745DEDB2FD&sms=BF7D6D478B935644 ：官方索引全文述鄉公所推動附近環教園區與地質教育，僅採環教角色，不當全部港池/碼頭/海岸管理與產權證明。
- 搜尋青岐港/青岐漁港管理、港務及漁業主管資料，本輪未直接確認當期整港管理/准入分工。舊運補大二膽、港區整建或觀光低碳載具遊程資料不證明現在公共定期客運，未寫班表、票價或可登復興嶼。
- 未找到現行客運依據不等證實沒有任何船行；原文過強的「不是可直接預訂客運」調整為本輪未核，保留原作業漁港題材。

## 保留、地圖及未核

原四專題及末段烈嶼海濱公園具體位置碼連結保留；原place-qingqi-harbor照片作者許可不改，一圖不設空相冊。港區安全避卸魚吊掛、藻岩/消波塊，不追退潮及越圍設。

本頁Google具名POI未核，原座標24.4121451,118.230752撤導航/marker/schema geo；官方位置描述非Google地址。公園連結為另一已核點，不移植作本港導航。

現行港務/作業/維護權屬與准入、定期客運或其他船行、參觀費、課程/活動、停車公車及無障礙皆待核。遠眺島嶼非登島許可、環教課非自行下潮間帶許可。

僅本頁/registry自身/專項測試/證據及授權pilot fixture換qingtian-hall（存在且registry未opt-in）；不改其他集合、CSV/進度，不提交。未額外派遣子代理，主代理協調獨立QA。

## 驗證

主代理通知上一版全套404 passed後執行：validate通過，0 errors/0 warnings；556頁、49141內鏈參照、1884圖片實例、4155 schema nodes。桌面/手機青岐港及pilot隔離用例4 passed（2.6秒），驗證唯一H1/canonical、標題順序、原四專題/圖像署名、港務與准入/船班未核界線、FAQ/schema一致、導航/geo缺席、行程增刪及手機無溢出。日誌`/tmp/qingqi-validate.log`、`/tmp/qingqi-browser.log`，4339服務已正常結束。

狀態LOCAL_READY_AWAITING_BATCH_RELEASE，待主代理獨立QA與完整回歸；非部署或VERIFIED。


## 獨立QA票務補充

烈嶼鄉公所2024年1月8日公告、1月15日起的票價表明列青岐港「解說服務」全票50元、優待25元、團體40元（20人以上）；另一官方公告說自行參觀免費。不能把解說費說成港區入場費；兩份為有日期來源，當期服務預約、資格、實施及遊客可通行範圍仍先向鄉公所確認，免費不等作業區自由進入。

來源：https://lieyu.kinmen.gov.tw/News_Content.aspx?Create=1&n=163D622C1593A5D7&s=D01DABEC57251AEC&sms=A2C62D68901B977C ； https://lieyu.kinmen.gov.tw/News_Content.aspx?n=163D622C1593A5D7&s=2C8D4A7F3D9DC506&sms=A2C62D68901B977C。主代理獨立QA核原票價表；本輪不冒充現場票亭確認。frontmatter、可見FAQ/schema、registry與精確測試同步，過去費用待核記錄由本補充取代一般歷史資訊，但當期仍待查。


## 四頁票務/來源日期聯合重驗

沙溪上一版全套416 passed後完成QA補正，validate通過：0 errors/0 warnings，556頁、49189內鏈參照、1884圖片實例、4160 schema nodes。麒麟/青岐/乳山/沙溪桌面手機專項8 passed（3.4秒），包括新票價及來源日期、解說非入場費、FAQ/schema逐項一致、原專題圖像、管理准入/導航界線、行程增刪及手機版。日誌`/tmp/three-fees-validate.log`、`/tmp/three-fees-browser.log`，4339正常結束。未動CSV/進度、未提交推送。待主代理全套及獨立QA，非部署或VERIFIED。


## 免費公告日期補正

主QA核縣府2024-01-17轉載 https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=41A4FCC30057AF5E&sms=BF7D6D478B935644 明確自1/15起，青岐港僅解說服務收費、自行參觀免費。FAQ/schema、frontmatter/來源、registry與精確測試同步日期，不作今日確認或作業區自由進入保證，仍核現行條件。與沙美重驗。


## 沙美/青岐日期/沙溪團體門檻聯合驗證

主代理確認上一套416 passed已結束後執行。最終validate：0 errors/0 warnings，556頁、49199內鏈參照、1884圖片實例、4161 schema nodes。沙美/青岐/沙溪及pilot隔離用例桌面手機8 passed（3.3秒），包括原專題/圖片署名、導覽集合及當期店家界線、青岐2024-01-17日期/解說非入場費、沙溪團體25元20人以上門檻、FAQ/schema全等、導航/geo未核缺席、行程增刪及手機無溢出。日誌`/tmp/shamei-qingqi-shaxi-validate.log`、`/tmp/shamei-qingqi-shaxi-browser.log`，4339正常結束。LOCAL_READY_AWAITING_BATCH_RELEASE，待全套/獨立QA，未部署或VERIFIED。未動CSV/進度，未提交推送。

## 2026-11-06 named-reference identity
Independent UI QA supplied exact reference https://www.google.com/maps/place/%E9%9D%92%E5%B2%90%E7%A2%BC%E9%A0%AD/@24.4121451,118.230752,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x34149ec7ddf413ed:0xe3ff78ded688d4ea!8m2!3d24.4121451!4d118.230752!16s%2Fg%2F11c48pbwp7. Identity only, not entrance/address/admission/parking/accessibility. 碼頭點不是港區公共准入、客運服務或岸線安全證明，不進吊掛卸魚及工作區，不下濕滑藻岩。 Pending schema/map fields remain disabled; historical notices not current status. Original image preserved. Implementer web tool retried official sources but got inaccessible/minimal shell/timeout; does not claim fresh complete official retrieval. Await independent release review.
