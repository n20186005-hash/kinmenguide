// Normalizes common destination queries without sending search text to a server.
const pairs = '门門乡鄉屿嶼宁寧阳陽头頭楼樓总總兵兵署署观觀测測广廣东東粥粥车車机機场場两兩湾灣台臺县縣镇鎮后后图圖线線风風狮獅岛島游遊亲親体體验驗'.match(/.{2}/gu) ?? [];
const replacements = new Map(pairs.map(pair => [pair[0], pair[1]]));
export function normalizeSearch(value:string) { return [...value.toLocaleLowerCase().normalize('NFKC')].map(c => replacements.get(c) ?? c).join('').replace(/\s+/g,' ').trim(); }
