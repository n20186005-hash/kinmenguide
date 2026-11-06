# 瓊林戰鬥坑道照片獨立發布證據

候選基線tree：5e8f1fa8（主線確認等同真實main bdf）；本地HEAD為占位，不可推送。只新增照片與該景點封面欄位，不包含v1.2遷移、北山照片或其他景點。

來源：https://commons.wikimedia.org/wiki/File:Qionglin_tunnel_DSC_3296.jpg
原圖：https://upload.wikimedia.org/wikipedia/commons/2/2f/Qionglin_tunnel_DSC_3296.jpg
作者：P95521708；Own work，2018-06-06。
許可：CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/ 。署名、來源、許可及轉檔/版面裁切說明由photos.json及既有credits頁呈現；衍生圖片沿用原許可。

原始JPEG 4000×6000、2,753,044 bytes；SHA-1 db4ee5cb94b7458434b63651f501e9dc2f1a5efa；SHA-256 44c74caf2e56751f70d236c18df7cd2a4c73c2fa71a90a718ecaf10b9850fcbe。原JPEG未修改，新增資產與已核准下載文件相同。Chrome原圖目視確認石砌拱頂、狹窄轉彎走道及照明；具名文件頁確認為瓊林地道。歷史照片不代表目前開放或可入內，已在caption明示。

用戶下載審批更正由主線轉交：「这个选错了要选全部允许」；後續沿用現有文件，無重複下載、無全局設定更動。

只改：新增JPEG、photos.json單筆、景點image/imageCaption兩欄、pending僅移除此slug、獨立照片測試及本證據。所有舊圖片與既有正文保留。credits/shared component無需修改。

驗證：npm run validate exit0；隔離4398端口desktop/mobile照片與credits專項2/2通過（1.8s），涵蓋解碼、alt、歷史狀態說明、完整署名、來源/許可連結及credits無橫向溢出。日誌 /tmp/release-photo-validate.log、/tmp/release-photo-browser.log。臨時config與依賴連結已移除。未提交推送，凍結待主線審核。
