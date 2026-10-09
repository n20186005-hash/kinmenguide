export const origins = [
 { id:'taiwan', name:'台灣本島', slug:'from-taiwan', route:'國內航班 → 金門', note:'松山、台中、嘉義、台南、高雄', tip:'按航空公司要求備妥身分證明正本；回本島的肉類伴手禮仍須核對檢疫。' },
 { id:'overseas', name:'海外', slug:'from-overseas', route:'台灣轉機／廈門轉船', note:'先確認國籍、護照與入境資格', tip:'轉國內線要先完成入境；途經廈門須另外符合中國大陸入境與離境規定。' },
 { id:'hong-kong', name:'香港', slug:'from-hong-kong', route:'本島轉機／小三通', note:'港澳永久居民另查入台許可', tip:'出發地不是證件身分。港澳網簽有適用條件，非港澳出生首次申請等情況需另查。' },
 { id:'macau', name:'澳門', slug:'from-macau', route:'本島轉機／小三通', note:'核對特區護照與許可文件', tip:'由珠海等地再赴廈門會多一道口岸與陸路交通；每一段證件和班次都要核對。' },
 { id:'mainland-china', name:'中國大陸', slug:'from-mainland-china', route:'五通／石井 → 水頭', note:'大通證、有效簽注與入境許可', tip:'先核對所在地申辦資格與兩端文件。限金馬澎的旅行許可不能直接用來飛台灣本島。' },
] as const;
export type Origin = typeof origins[number]['id'];
type Scope = Origin | 'all' | 'border';
type ChecklistItem = { id:string; text:string; detail:string; scope:Scope; href?:string };
export const checklistGroups: { title:string; items:ChecklistItem[] }[] = [
 { title:'01 / 訂票前：路線與資格', items:[
  {id:'identity',text:'已按每位旅客的身分核對旅行資格',detail:'出發地不等於國籍；兒童、雙重國籍、特殊居民身分分別核對。',scope:'all',href:'/guides/entry-documents/'},
  {id:'domestic-id',text:'已準備國內線接受的有效證件正本',detail:'兒童與嬰兒也要核對可接受的證明，不以手機照片代替正本。',scope:'taiwan'},
  {id:'border-docs',text:'護照／旅行證件、簽證或入境許可已核准',detail:'逐一核對姓名、效期、次數、停留日數與可到訪地域，備妥要求的列印件。',scope:'border'},
  {id:'mainland-permit',text:'大通證、有效赴金簽注與入出境許可都已確認',detail:'另外核對所在地申辦資格；限金馬澎文件不可直接安排去台灣本島。',scope:'mainland-china',href:'/transport/from-mainland-china/'},
  {id:'hk-permit',text:'已核對香港居民適用的入台許可類別',detail:'非港澳出生首次申請、其他國籍／護照等情況，不能直接套用一般網簽。',scope:'hong-kong',href:'/transport/from-hong-kong/'},
  {id:'mo-permit',text:'已核對澳門居民適用的入台許可類別',detail:'依特區護照及實際身分核對，並帶永久性居民身分證正本。',scope:'macau',href:'/transport/from-macau/'},
  {id:'foreign-visa',text:'已核對所持護照的免簽或簽證條件',detail:'不是所有外國護照都免簽；水頭的免簽口岸資格不等於提供落地簽。',scope:'overseas',href:'/transport/from-overseas/'},
  {id:'connections',text:'機票、船票與轉接機場／碼頭都對得上',detail:'桃園與松山不同機場；高鐵站與五通、石井碼頭也不同地點。',scope:'all'},
  {id:'return',text:'已訂回程並預留延誤與退改票安排',detail:'不依賴末班銜接；分開出票的保障與保險另查。',scope:'all'},
  {id:'transit-entry',text:'轉接地的入境與再次入境資格已核對',detail:'經廈門搭船須離開機場，不能自行視為不入境轉機。單次許可不能反覆使用。',scope:'border'},
 ]},
 { title:'02 / 出發前：住宿、文件與行李', items:[
  {id:'arrival-card',text:'已確認是否須填 TWAC，適用者在抵達前 7 日內完成',detail:'只使用官方免費系統；部分港澳／大陸許可已含登記，不重複套用外國旅客規則。',scope:'border',href:'/guides/entry-documents/'},
  {id:'stay',text:'已保存住宿、接送及緊急聯絡資料',detail:'保留離線地址與電話；證件副本不能替代正本，也不要上傳本站。',scope:'all'},
  {id:'transport',text:'島上交通與駕照適用性已確認',detail:'租車須確認有效駕照、保險與取還車；不自駕先查去回程公車。',scope:'all',href:'/transport/'},
  {id:'food-bag',text:'已檢查所有食品與植物，移除禁限帶物品',detail:'肉乾、肉鬆、含肉糕餅、新鮮水果、種苗等先核對檢疫，不憑真空包裝判斷。',scope:'border',href:'/guides/restricted-items/'},
  {id:'customs',text:'電子煙、菸酒、現金與自用藥已逐項核對',detail:'不攜電子煙與未核准加熱菸；應申報物品走應申報通道，禁品不能靠繳稅解決。',scope:'border',href:'/guides/restricted-items/'},
  {id:'battery',text:'行動電源放隨身行李，符合每一段航空規則',detail:'不託運，做好防短路；容量、數量、標示與使用限制向承運人確認。搭船也核對船公司行李規定。',scope:'all'},
  {id:'essentials',text:'已備妥藥品、飲水、防曬、雨具與好走的鞋',detail:'常用藥帶標示及所需處方；海岸與坑道依行程選防滑鞋。',scope:'all'},
 ]},
 { title:'03 / 在島上：依天候調整', items:[
  {id:'weather',text:'已查航班／船班、天氣與景點當日公告',detail:'翟山閉館、獅山演示與大橋管制都可能改變行程。',scope:'all',href:'/guides/kinmen-weather/'},
  {id:'coast',text:'若去歐厝海灘，已確認潮汐、風浪與安全動線',detail:'低潮不等於安全；不攀戰車、不越管制區、不碰不明金屬或彈藥。',scope:'all',href:'/attractions/oucuo-tank/'},
  {id:'visits',text:'若有騎馬、導覽或酒廠體驗，已確認預約',detail:'進園不代表包含每項體驗；駕駛不飲酒，動物只按人員指導互動。',scope:'all'},
 ]},
 { title:'04 / 回程：伴手禮與離境', items:[
  {id:'souvenirs',text:'已按下一目的地核對伴手禮與酒類限制',detail:'金門帶肉品回本島仍有檢疫；酒類航空上限不等於目的地免稅額。',scope:'all',href:'/guides/restricted-items/'},
  {id:'departure',text:'已再次確認回程班次、還車及報到截止時間',detail:'天候延誤時主動處理改票、住宿及許可效期，不自行延長停留。',scope:'all'},
 ]},
];
