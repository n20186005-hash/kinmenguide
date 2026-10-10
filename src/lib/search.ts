// Normalizes common destination queries without sending search text to a server.
const pairs = '门門乡鄉屿嶼宁寧阳陽头頭楼樓总總兵兵署署观觀测測广廣东東粥粥车車机機场場两兩湾灣台臺县縣镇鎮后后图圖线線风風狮獅岛島游遊亲親体體验驗陈陳兰蘭欧歐桥橋国國军軍战戰厂廠马馬陆陸证證单單带帶关關养養类類馆館学學条條饮飲炮砲砲砲书書岗崗径徑试試产產渔漁绘繪鸡雞联聯谈談麦麥包包旧舊咸鹹鱼魚汤湯圆圓獸獸奶奶濑獺獭獺淀澱标標酿釀点點面麵' .match(/.{2}/gu) ?? [];
const lieyuPairs = '义義岁歲墙牆双雙红紅沟溝诚誠实實寿壽庙廟铁鐵汉漢猫貓滨濱仿仿拟擬枪槍井井营營处處'.match(/.{2}/gu) ?? [];
const replacements = new Map([...pairs, ...lieyuPairs].map(pair => [pair[0], pair[1]]));
export function normalizeSearch(value:string) { return [...value.toLocaleLowerCase().normalize('NFKC')].map(c => replacements.get(c) ?? c).join('').replace(/\s+/g,' ').trim(); }
