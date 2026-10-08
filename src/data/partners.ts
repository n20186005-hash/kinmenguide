export type Partner = {
  id: string; type: 'hotel' | 'car-rental' | 'tour'; name: string; description: string;
  url: string; area: string; sponsored: boolean;
};
// Only add vetted partners and real booking destinations. Empty = editorial guide + official directory.
export const partners: Partner[] = [];
export const officialDirectories = {
  hotel: { label: '查詢官方住宿名錄', url: 'https://kinmen.travel/zh-tw/accommodation' },
  'car-rental': { label: '查看官方交通與租車資訊', url: 'https://kinmen.travel/zh-tw/guide/travel-tips' },
  tour: { label: '查看官方推薦遊程', url: 'https://kinmen.travel/zh-tw/discover/tour-list' },
};
