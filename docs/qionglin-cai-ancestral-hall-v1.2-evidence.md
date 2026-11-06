# 瓊林蔡氏祠堂 v1.2 證據

2026-11-05整理，非現勘。原頁範圍13號十一世宗祠，保留無image/photos metadata、三題「認識瓊林蔡氏祠堂」「參觀時留意」「怎麼安排」、聚落/坑道相關鏈及原Google短鏈，不借大宗照片、不空相冊。未改其他集合/CSV/進度，未提交部署。

## 範圍與官方依據
https://kmcpao.kinmen.gov.tw/templeDetail.aspx?temple_id=85 官方完整索引蔡氏十一世榮生宗祠：1840始建、1932重修/1994修建1996竣工，又稱三落宗祠，13號；列宗族組織財團法人金門縣瓊林蔡氏十七郎公裔孫基金會及負責蔡是民/聯絡蔡福祿，但字段更新日期未核，不推現任及全部管理或產權。頁腳本館文化路450巷52號、09–17周一休為博物館自身，不套宗祠。原鎮公所瓊林里資料亦為參考，未用不明頁腳更新作個別字段時間。

https://nchdb.boch.gov.tw/city/cabkc.kinmen/assets/overview/monument/19850819000089/ 官方索引整組國定古蹟瓊林蔡氏祠堂，涵多座祠堂；主管文化部，聯絡文化部文化資產局。管理人索引蔡○○，未核特定本棟現任，且各祠堂派下祭祀分別，不合成單一旅遊經營。是否收費否為整組字段、更新日期未明；本棟適用與當期活動另核，非泛稱一切費用未知。直接web與Chrome本輪僅Loading，記為官方索引可讀，不假稱全文欄位直接展開。

https://cabkc.kinmen.gov.tw/information?pid=7876&uid=185 官方索引日期2026-09-04/最後更新索引有09-10版本，115-10-02在十一世宗祠與前廣場防災演練；只作特定活動與文資辨認，不證11月開放。觀光網392大宗1529年代、1865鑲壁獅爺及20180717000004大宗門神不可套本棟；整組文資與古物分開。

## Google具名點
Chrome2026-11-05實開 https://maps.app.goo.gl/HJ15v6zQxrLgfw2m9 ，卡片英名Qionglin Cai Family Temple/中文瓊林蔡氏祠堂，完整Address原文 `89150, Kinmen County, Jinhu Township, 瓊林街13 號`，Plus F93F+PH Jinhu Township；解析URL位置24.4543403,118.3739549，g/11f69_k00j、0x3414a36c2ae27d1f:0xcdae599eebc57cfa。同名13號具名點與原頁地址相符，用同短鏈導航；名稱泛稱、評論亦混大宗，不獨立證十一世/大宗及整組邊界，頁面明示到場核門額和官方說明。不採Google09–17或電話為當期准入/管理證據，地標不證殿堂可入。官方位置存locationDescription。

## 未核與交接
本棟日常管理/維護、產權及現任受理窗口仍待核，management區分文資主管並linkName:false。當日開閉、預約、祭典參與、活動費用、停車及無障礙均另核，只在允許空間觀察、不擅入殿堂後殿/私宅、不觸文物。已確認下一fixture qionglin-three-chastity-arch.md存在未opt-in，下次遷移再換；未派子代理，獨立QA由父代理統籌。

本地驗證通過：validate556頁/49715內鏈/1884圖/4213 schema，照片/跨集合等audit通過。4339 CI=1桌面手機本頁+fixture4 passed (2.4s)，覆蓋無圖原三題、1840與十一世/整組範圍、現任不推定、FAQ逐字HTML/schema、Google完整原樣地址/同短鏈/坐標與map導航、行程增刪及無溢出。日誌 `/tmp/qionglin-cai-validate.log`、`/tmp/qionglin-cai-browser.log`。源碼/dist凍結供父代理QA及完整回歸；本棟管理現況未核限制保留，未提交部署。

## 2026-11-05 specific-building management follow-up

The county cultural bureau's 2025-07-21 project report https://cabkc.kinmen.gov.tw/information?pid=6247&uid=78 specifically covers routine conservation of the door-god artwork and its preservation environment at the eleventh-generation shrine. The county's 2024 report https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=176DAA1F88BACE00&sms=BF7D6D478B935644 records a national-monument Qionglin Cai shrines management/maintenance subsidy plan. The 2026 exercise https://cabkc.kinmen.gov.tw/information?pid=7876&uid=185 identifies the eleventh-generation shrine as an exercise site. These establish bounded cultural-asset conservation, subsidy and exercise roles, not the present whole-building day-to-day manager, owner or visitor access operator. QA_BLOCKED remains specifically on the latter.


## 2026-11-05 有界角色呈現補正
- 文化局 https://cabkc.kinmen.gov.tw/information?pid=6247&uid=78 官方索引全文標題及頁內日期/最後更新皆2025.07.21；項目113–114年蔡氏家廟門神及新倉上二房十一世宗祠門神日常維護及保存環境提升。本輪直接web不可讀、curl解析逾時，未假稱重讀PDF全文或逐項分工。頁面按成果頁標題歸因門神及保存環境項目，不擴為整棟現管、接待或2026延續合同。
- 分列文化部整組古蹟主管、文資局聯絡、文化局特定古物保存項目與官方名錄宗族組織；不把基金會登記人員視為現任或自動證產權。FAQ/可見正文/schema、registry about/角色/facts及測試同步。
- 原無圖三主題、完整Google地址及短鏈保留，准入/活動/日常經營另核；QA_BLOCKED維持等待獨立評估，不改CSV及進度、不提交部署。

最終驗證：validate通過（`/tmp/qionglin-cai-bounded-validate.log`）；4347隔離、CI=1桌面/手機專項2項通過，1.7秒（`/tmp/qionglin-cai-bounded-browser.log`）。臨時配置移除，檔案凍結供獨立評估。

## 2026-11-05 bounded acceptance

Independent QA accepted the cultural bureau's 2025 door-god/preservation-environment project as an object-specific conservation role, distinct from full-building operation, property or admission. Current worship access and operator remain unverified. Focused desktop/mobile: 2 passed; complete desktop/mobile regression: 552 passed. LOCAL_READY_AWAITING_BATCH_RELEASE only; no deployment.

## 2026-11-06 PR #171 實際部署與照片驗收
PR #171 已合併，merge SHA `ad4e3cb477c6ccde0491703010c17864e7284a06`；Cloudflare Workers production build `7cdc7d02-c500-4e5b-bb2b-2f25e5a7733b` 對該 SHA completed/success。合併前候選完整桌面/手機瀏覽器回歸 `356 passed`、0 failed（2 workers，約1.4分鐘；日誌 `/tmp/release-cai-temple-photo-browser.log`，摘要 `/tmp/release-cai-temple-photo-browser-summary.txt`）。

正式照片來源為 [Wikimedia Commons「瓊林蔡氏家廟 01」](https://commons.wikimedia.org/wiki/File:%E7%93%8A%E6%9E%97%E8%94%A1%E6%B0%8F%E5%AE%B6%E5%BB%9F_01.jpg)，攝影者 Koala0090，CC BY-SA 4.0。原 JPEG 744,646 bytes，SHA-1 `57741b053b90eed63a89a604c8699fad1de37914`，SHA-256 `d969a1353f6c6dacdab5f2c40ccdd72ea42361e1fc5f254e162eb7efe758b684`；畫面為瓊林13號蔡氏十一世宗祠正立面。網站 caption 標明 2019 年歷史外觀，並說明照片不代表目前開放或可入內；credits 顯示作者、原始檔名、來源及許可連結、EXIF 方向處理和衍生圖沿用 CC BY-SA 4.0 的說明。

獨立正式站檢查：桌面視口1829px，hero 圖已載入、natural size 1829×1028，畫面正向；390×844 手機視口圖已載入、natural size 389×219；兩端頁面文件寬等於視口、無水平溢出。credits 條目圖桌面/手機亦已載入（603×339、390×219），署名與來源/授權連結可見且手機無溢出。正式頁 https://kinmenguide.com/attractions/qionglin-cai-ancestral-hall/；credits https://kinmenguide.com/credits/#place-qionglin-cai-ancestral-hall 。

本次僅將照片及其 metadata 同步至原恢復副本，保留先前遷移正文、舊圖與其他 registry 項目。待補圖清單由47條降為46條，只移除 `qionglin-cai-ancestral-hall`；北山播音牆及其餘條目保留。原本無圖的檢查狀態是 2026-11-05 的歷史記錄；本次照片驗收不改變上文所列本棟現行管理、產權、殿堂准入與活動條件仍待核的結論。

## 2026-11-06 恢復副本正文校正（未上線）
將正文及 FAQ/JSON-LD 中兩處2026-11-05「原頁無照片、本輪保留無圖」歷史句，精確改為「原頁原先無照片；現已補入2019年十一世宗祠歷史外觀照片作為參考，不代表目前開放或可入內，也不借用大宗或別棟影像。」其餘遷移正文、其他來源判定及 FAQ 內容未改。此校正只存在原恢復副本，未包含於 PR #171 或目前正式站；待該頁後續遷移發布時一併上線。

## 2026-11-06 named reference and existing photo
Independent UI QA supplied exact reference https://www.google.com/maps/place/Qionglin+Cai+Family+Temple/@24.4543452,118.3713746,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a36c2ae27d1f:0xcdae599eebc57cfa!8m2!3d24.4543403!4d118.3739549!16s%2Fg%2F11f69_k00j; named identity only, not safe entrance or daily access. Current-main published photo/imageCaption preserved byte-for-byte as fields; no assets/metadata changed. LanHu old short URL was confirmed same named lake; Cai reference limited to13/eleventh-generation hall and not grouped temples. Pending Google navigation/schema fields remain disabled. Prior no-photo or unverified-identity records are historical; actual entrance/private worship/water conditions remain unresolved. Await independent release review.
