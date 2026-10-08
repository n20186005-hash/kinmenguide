export const SITE = {
  name: 'Kinmen Guide', url: 'https://kinmenguide.com', locale: 'zh-Hant-TW',
  title: '金門旅遊攻略｜景點、自由行行程、美食、交通與住宿',
  description: '從紅磚聚落到海岸坑道，探索金城、金湖、金沙、金寧與烈嶼。Kinmen Guide 整理金門必去景點、三天兩夜行程、島上交通、美食、住宿與租車攻略，陪你規劃自己的金門旅行。',
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || '',
};
export const areaNames = { all: '全島', kincheng: '金城', jinhu: '金湖', jinsha: '金沙', jinning: '金寧', lieyu: '烈嶼' } as const;
export const categories = {
  attractions: { name: '島上景點', title: '金門景點：把喜歡的風景，排進旅程', en: 'PLACES TO DISCOVER', description: '從翟山坑道、水頭聚落到烈嶼九宮坑道，依地區探索金門必去景點。每站整理參觀重點、交通方式、停留建議與順遊路線，找到適合自己的旅行節奏。', image: 'shanhou' },
  itineraries: { name: '行程提案', title: '金門行程：留幾天，就有幾種走法', en: 'YOUR ISLAND ITINERARY', description: '金門一日遊、兩天一夜、三天兩夜與四天三夜行程，搭配機車環島、不租車和烈嶼路線。按實際移動方向規劃，留時間給一碗早餐、一條老街與海風。', image: 'shuitou' },
  food: { name: '在地味道', title: '金門美食：從一碗熱粥，開始認識島嶼', en: 'A TASTE OF KINMEN', description: '認識金門廣東粥、燒餅、牛肉與蚵料理，整理金城與金湖覓食區域、早餐安排和點餐建議。把用餐接上景點動線，少繞路，多吃一點在地風味。', image: 'food' },
  transport: { name: '交通指南', title: '金門交通：抵達以後，輕鬆移動', en: 'GETTING HERE & AROUND', description: '金門機場、市區公車、計程車、小三通與前往烈嶼的交通指南。比較自駕和公共交通，掌握查詢班次、銜接機場、取還車與跨橋移動的行前重點。', image: 'bridge' },
  areas: { name: '探索地區', title: '五個鄉鎮，五種金門日常', en: 'FIVE WAYS TO KNOW AN ISLAND', description: '金城老街、金湖山景、金沙聚落、金寧戰地記憶與烈嶼海岸。依地區選擇金門景點、美食、住宿及交通，安排同區順遊，深入金門本島與小金門。', image: 'taiwu' },
  hotels: { name: '住在金門', title: '金門住宿：先選生活步調，再選一張床', en: 'STAY A LITTLE LONGER', description: '金門住哪裡方便？比較金城、金湖、機場周邊與親子住宿需求，了解古厝民宿和市區旅館的差異，整理訂房前應確認的接送、隔音、停車與取消條件。', image: 'guesthouse' },
  'car-rental': { name: '租車攻略', title: '金門租車：選一種適合你的移動方式', en: 'FIND YOUR OWN PACE', description: '金門租機車、租汽車與機場取還車實用比較，整理證件、保險、車況檢查、油量與接送問題。依同行人數、行李和天氣選車，透過官方名錄尋找業者。', image: 'bridge' },
  tours: { name: '在地體驗', title: '金門體驗：讓旅程，多一點島嶼的故事', en: 'GO A LITTLE DEEPER', description: '古厝散步、戰地歷史與包車導覽，三種深入金門的方式。了解體驗適合對象、預約前要問的問題與地區搭配，不趕景點，也能走進島嶼的日常。', image: 'deyue' },
  guides: { name: '行前攻略', title: '金門自由行：你的第一本島嶼筆記', en: 'BEFORE YOUR JOURNEY', description: '第一次去金門，從玩幾天、何時出發到雨天備案開始規劃。整理初訪行程、旅遊季節、行李與天氣查詢，搭配地圖、交通和住宿，完成金門自由行準備。', image: 'juguang' },
} as const;
export type Category = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as Category[];
