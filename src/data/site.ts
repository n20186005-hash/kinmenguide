export const SITE = {
  name: 'Kinmen Guide', url: 'https://kinmenguide.com', locale: 'zh-Hant-TW',
  title: '金門旅遊攻略｜景點、自由行行程、美食、交通與住宿',
  description: '從紅磚聚落到海岸坑道，探索金城、金湖、金沙、金寧與烈嶼。Kinmen Guide 整理金門必去景點、三天兩夜行程、島上交通、美食、住宿與租車攻略，陪你規劃自己的金門旅行。',
  contactEmail: 'n20186005@gmail.com',
};
export const areaNames = { all: '全島', kincheng: '金城', jinhu: '金湖', jinsha: '金沙', jinning: '金寧', lieyu: '烈嶼' } as const;
export const categories = {
  attractions: { name: '島上景點', title: '金門景點：把喜歡的風景，排進旅程', en: 'PLACES TO DISCOVER', description: '從翟山坑道、水頭聚落到烈嶼九宮坑道，依地區探索金門必去景點。每站整理參觀重點、交通方式、停留建議與順遊路線，找到適合自己的旅行節奏。', image: 'shanhou' },
  itineraries: { name: '行程提案', title: '金門行程：留幾天，就有幾種走法', en: 'YOUR ISLAND ITINERARY', description: '金門一日遊、兩天一夜、三天兩夜與四天三夜行程，搭配親子遊、情侶遊、個人行、家庭遊、美食與文化主題，以及機車、不租車和烈嶼路線。依同行需求與移動方向，安排自己的島嶼步調。', image: 'shuitou' },
  food: { name: '在地味道', title: '金門美食與餐飲名錄｜按地區找早餐、餐廳與咖啡', en: 'A TASTE OF KINMEN', description: '依金城、金湖、金沙、金寧與烈嶼查找金門餐飲店家，比較地址、類型、聯絡與來源核對日期；搭配早餐、牛肉與在地小吃攻略，把用餐和景點一起加入旅行清單。', image: 'food' },
  transport: { name: '交通指南', title: '金門交通：從你的出發地，一路規劃到島上', en: 'GETTING HERE & AROUND', description: '海外、台灣本島、香港、澳門與中國大陸如何去金門？比較航班與小三通，按身分準備證件，查入境行李規則，再接上金門公車、租車與烈嶼交通。', image: 'bridge' },
  areas: { name: '探索地區', title: '五個鄉鎮，五種金門日常', en: 'FIVE WAYS TO KNOW AN ISLAND', description: '金城老街、金湖山景、金沙聚落、金寧戰地記憶與烈嶼海岸。依地區選擇金門景點、美食、住宿及交通，安排同區順遊，深入金門本島與小金門。', image: 'taiwu' },
  hotels: { name: '住在金門', title: '金門住宿名錄｜飯店、民宿與背包住宿選區指南', en: 'STAY A LITTLE LONGER', description: '查找金門本島與烈嶼住宿店家，按鄉鎮與旅宿類型比較地址、官方登記及公開聯絡資訊。搭配金城、金湖、機場與親子選區指南，確認接送、停車和入住條件後安排旅行。', image: 'guesthouse' },
  'car-rental': { name: '租車攻略', title: '金門租車：選一種適合你的移動方式', en: 'FIND YOUR OWN PACE', description: '金門租機車、租汽車與機場取還車實用比較，整理證件、保險、車況檢查、油量與接送問題。依同行人數、行李和天氣選車，透過官方名錄尋找業者。', image: 'bridge' },
  tours: { name: '在地體驗', title: '金門體驗：讓旅程，多一點島嶼的故事', en: 'GO A LITTLE DEEPER', description: '古厝散步、戰地歷史與包車導覽，三種深入金門的方式。了解體驗適合對象、預約前要問的問題與地區搭配，不趕景點，也能走進島嶼的日常。', image: 'deyue' },
  guides: { name: '行前攻略', title: '金門自由行：你的第一本島嶼筆記', en: 'BEFORE YOUR JOURNEY', description: '從古厝洋樓、戰地歷史與風獅爺信仰讀懂金門，也用冬季風、夏季熱、賞鳥生態及潮汐開放指南安排旅程；初訪、交通、行李和天氣備案一次找到。', image: 'juguang' },
} as const;
export type Category = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as Category[];
