# 金獅影城 v1.2 證據

查核2026-11-04（美國洛杉磯），最後UTC結果另列。未提交／推送／部署，CSV待正式站。

## 基底與原文保存

GitHub main `06c5964cf3dbb03a483628b86a50be0e9c5628fc` 完整tree865 blobs逐一git blob SHA校驗；local42f53d3上129項覆蓋為主線基線，不納本批。AGENTS、SKILL及模板與前批已讀版本逐位元一致，Issue59及最新CSV重新取得。

原3個H2「這裡值得看什麼／怎麼安排參觀／把下一站排在附近」轉FAQ後H3，3段主體／原內鏈及9月停業預告、舊業者場次網址全部保留。必要窄修：原「日期尚未到」改為11/4日期已過、11/1官方確認10/31最後營業日且未核復業；原「停留時間是本站安排建議」改替代行程而非影城停留；duration改停業追蹤。沒有擅改其他場館或非景點集合。

## 已停止營業與履約範圍

- 原[金門日報2026-09-16預告](https://www.kmdn.gov.tw/1117/1271/1272/590204?cprint=pt)：影城10/31、免稅店10/15，日期分清，保留歷史。
- [縣府2026-11-01報導](https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=A3A77E7A0EFAC8EE&sms=BF7D6D478B935644)：確認31日最後營業日、停止營業；同篇記縣府要求持續服務與業者暫時停業／BOT主張等說法。實作者primary搜尋全文可讀，直接web逾時；authority獨立核同內容。這比只看預告日期更強，不寫仍待10/31到來。
- [縣府2026-09-17立場](https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=DE489793845564EE&sms=BF7D6D478B935644)：記9/16通知及其對單方停業／公共建設服務的立場；與業者暫停、契約仍存續說法分列，不在本頁判定違約、契約效力、永久歇業、產權或縣府接管。
- [業者商場首頁](https://windlion.com.tw/)可讀，最新消息2026-09-15連[營運調整公告](https://www.facebook.com/share/p/19ZTFMgjdx/)；實作者FB抓取受限未讀全文，不假稱已查其最新公告全內容。商場首頁舊電影入口仍在，也不表示有場次。原影城[舊場次網址](https://cinemax.windlion.com.tw/index.php)web403，留存作脈絡，不視為復業證據。
- [中央社10/31現場報導](https://www.cna.com.tw/news/aloc/202610310165.aspx)確認最後營業日，作事件旁證；不由新聞或業者自述裁定BOT契約結果。
- authority查到[縣府11/4議程](https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=6CB4C3CE7F423F79)，涉及停業履約及資產維護報告；本輪未得公開會議結果／紀錄，不假定已解決。此為後續線索，不納產品作結論。

本輪未查得復業公告，不安排電影或到場購票；最新經營主體／現場管理、商場與影廳准入、停車、設施、售票、會員及舊票券處理尚待核。保留既有行程功能但醒目限制僅存查核備忘，trip提醒仍帶停止營業，不當已訂票／可入場或普通觀影行程；沒有把停業等同BOT已終止。

## Google具名定位

實作者與authority分別繁中GUI核「金獅影城」：原址 `891金門縣金湖鎮瓊林里中山路8-8號8-5號 西棟 3F`，CID `0x3414a2691a955881:0x94309d0c49c0854a`，24.4416785,118.3624664，g/1q63cjvyt，Plus Code C9R6+MX。雙門牌和空格／樓層照錄不自行修正。業者首頁地址為中山路8-8號（尚義機場旁），與Google分欄不拼造。

[採用同一POI直鏈](https://www.google.com/maps/place/%E9%87%91%E7%8D%85%E5%BD%B1%E5%9F%8E/@24.4416785,118.3624664,861m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3414a2691a955881:0x94309d0c49c0854a!8m2!3d24.4416785!4d118.3624664!16s%2Fg%2F1q63cjvyt?hl=zh-TW)。詳情三CTA、schema streetAddress/hasMap與/map同點，但僅供定位。GUI未見停業banner，仍有熱門／即時繁忙widget及無障礙字段；這是平台局限，不是推翻已停止服務的反證，也不是復業、當期人潮或設施可用證明。

## 無圖及授權基線

原頁沒有image、photos.json或PHOTO-CREDITS條目。PHOTO-AUDIT及pending紀錄明列尚未取得可確認地點及再利用授權實景；保持無圖，不借新聞、Facebook、Google使用者圖或其他影城照片，不產生空相冊。未宣稱全網沒有合法照片，只記本站未收錄。

## 驗證

最終完成2026-11-04T09:44:37Z。`pnpm validate` PASS：0 errors／0 warnings／0 hints；556頁、48,565內鏈、1,884圖片實例、4,101 schema nodes，照片與非景點集合回歸稽核通過。完整桌機／手機 **288 passed (1.2m)**，本頁雙viewport通過。

專測核唯一H1／canonical、10節H2順序／原3H3、無新增圖／空相冊／虛構署名、停業報導CTA、已停業未復業與非永久結論、8FAQ前置／可見／FAQPage逐字順序一致、Google原始雙門牌／樓層／CID／精確坐標／hasMap和詳情三CTA及/map同POI；原錯誤「日期尚未到」不再存在，trip加入後顯示查核備忘並僅移除測試自加項，手機無橫溢。

authority獨立來源、GUI、新稿複讀無事實阻斷；非阻斷空格建議已於凍結前修整。遠端完整tree scope僅本頁MD、pilot registry、CSV三既有blob變更，加新本頁專測與本證據共5檔；registry去本頁block後與main逐字相同，CSV其餘列相同。原3段除記錄的日期／替代規劃兩句外逐字保存；其他內容集合、景點、共享renderer及圖片metadata未改。`git diff --check`通過。

最終logs `/tmp/goldenlion-validate-final.log`、`/tmp/goldenlion-browser-final.log`；臨時config、scratch與node_modules連結清理。無commit/push/deploy；CSV AWAITING_LIVE_CHECK，PR／SHA／部署欄留空。下一個NOT_STARTED由CSV實讀為 `guande-bridge`（跳過已改版官澳），不硬編剩餘清單。
