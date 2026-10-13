export const themeKeys = ['kids', 'couples', 'solo', 'family', 'food', 'culture'] as const;
export const travelThemes = [
  { id: 'kids', label: '親子遊', title: '把好奇心帶上島', text: '公園放電、牛奶盒合照，午睡時間也留好。', route: 'kinmen-with-kids', image: 'place-juguang-inclusive-park', duration: '2 天 · 遊戲與休息' },
  { id: 'couples', label: '情侶遊', title: '兩個人的慢時光', text: '古厝合照、洋樓與海風，留白給沿途風景。', route: 'kinmen-couples', image: 'chen-jinglan', duration: '2 天 · 建築與海岸' },
  { id: 'solo', label: '個人行', title: '一個人，也很自在', text: '從金城步行出發，逛後浦、讀書院、喝杯茶。', route: 'kinmen-solo', image: 'mofan', duration: '1 天 · 市區步行' },
  { id: 'family', label: '家庭遊', title: '一家人的舒服步調', text: '照顧長輩與不同腳力，少換點、多坐一會。', route: 'kinmen-family-slow-travel', image: 'juguang', duration: '2 天 · 多代慢遊' },
  { id: 'food', label: '美食遊', title: '跟著味道去旅行', text: '金城熱粥、小吃與金湖牛肉麵，分區慢慢嚐。', route: 'kinmen-food-trail', image: 'mofan', duration: '2 天 · 金城與金湖' },
  { id: 'culture', label: '文化遊', title: '聽懂一座島的故事', text: '從古城、僑鄉到後浦，在建築裡讀地方生活。', route: 'kinmen-culture-trail', image: 'shuitou', duration: '2 天 · 古城與僑鄉' },
] as const;
