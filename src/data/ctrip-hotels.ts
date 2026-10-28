// Verified hotel identities and Ctrip-generated promotion links; redirect evidence is kept in the delivery ledger.
export type CtripHotel = { hotelId: string; url: string; checkedAt: string; affiliate?: { url: string; generatedAt: string; verifiedAt: string; verifiedHotelId: string; generatedBy: 'ctrip-alliance' } };
export const ctripHotels: Record<string, CtripHotel> = {
  "haifu-business-hotel": {"hotelId": "995191", "url": "https://hotels.ctrip.com/hotels/995191.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/7683ieU", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "995191", "generatedBy": "ctrip-alliance"}},
  "lodging-225873e614f5": {"hotelId": "2918787", "url": "https://hotels.ctrip.com/hotels/2918787.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/sSOfnVf", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "2918787", "generatedBy": "ctrip-alliance"}},
  "lodging-04ae75e508e2": {"hotelId": "126355329", "url": "https://hotels.ctrip.com/hotels/126355329.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/vV9AgD3", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "126355329", "generatedBy": "ctrip-alliance"}},
  "county-2945": {"hotelId": "78176962", "url": "https://hotels.ctrip.com/hotels/78176962.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/4gXMmjK", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "78176962", "generatedBy": "ctrip-alliance"}},
  "county-1157": {"hotelId": "992308", "url": "https://hotels.ctrip.com/hotels/992308.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/bJZAJeC", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "992308", "generatedBy": "ctrip-alliance"}},
  "sushi-inn": {"hotelId": "19830714", "url": "https://hotels.ctrip.com/hotels/19830714.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/hgNWdSm", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "19830714", "generatedBy": "ctrip-alliance"}},
  "beishan-old-house": {"hotelId": "6185551", "url": "https://hotels.ctrip.com/hotels/6185551.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/hIR0IuE", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "6185551", "generatedBy": "ctrip-alliance"}},
  "lodging-f79bccd0efdc": {"hotelId": "59478326", "url": "https://hotels.ctrip.com/hotels/59478326.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/vMUXr9h", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "59478326", "generatedBy": "ctrip-alliance"}},
  "lodging-afc54d0893d6": {"hotelId": "114980640", "url": "https://hotels.ctrip.com/hotels/114980640.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/l4oFFHo", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "114980640", "generatedBy": "ctrip-alliance"}},
  "lodging-9441dacddb61": {"hotelId": "59478478", "url": "https://hotels.ctrip.com/hotels/59478478.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/AYBQtmC", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "59478478", "generatedBy": "ctrip-alliance"}},
  "lodging-e560cfcafdea": {"hotelId": "41593063", "url": "https://hotels.ctrip.com/hotels/41593063.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/AYLOJv1", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "41593063", "generatedBy": "ctrip-alliance"}},
  "lodging-a632d757026e": {"hotelId": "95450203", "url": "https://hotels.ctrip.com/hotels/95450203.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/iCHN6VT", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "95450203", "generatedBy": "ctrip-alliance"}},
  "lodging-74358de89156": {"hotelId": "15092726", "url": "https://hotels.ctrip.com/hotels/15092726.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/syO4v0D", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "15092726", "generatedBy": "ctrip-alliance"}},
  "lodging-e76f6afee623": {"hotelId": "19832055", "url": "https://hotels.ctrip.com/hotels/19832055.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/zbLXF2Z", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "19832055", "generatedBy": "ctrip-alliance"}},
  "lodging-6fb7cfe76679": {"hotelId": "19832716", "url": "https://hotels.ctrip.com/hotels/19832716.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/fHQmPzU", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "19832716", "generatedBy": "ctrip-alliance"}},
  "lodging-29b55ca7c67c": {"hotelId": "92040952", "url": "https://hotels.ctrip.com/hotels/92040952.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/kahxzT0", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "92040952", "generatedBy": "ctrip-alliance"}},
  "jindian-bnb-2": {"hotelId": "131954771", "url": "https://hotels.ctrip.com/hotels/131954771.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/g9X0p7I", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "131954771", "generatedBy": "ctrip-alliance"}},
  "lodging-b072bc030d3a": {"hotelId": "992490", "url": "https://hotels.ctrip.com/hotels/992490.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/CvHvzfY", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "992490", "generatedBy": "ctrip-alliance"}},
  "lodging-09586afd12d2": {"hotelId": "23747821", "url": "https://hotels.ctrip.com/hotels/23747821.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/mIk677U", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "23747821", "generatedBy": "ctrip-alliance"}},
  "lodging-f438ed7ee44e": {"hotelId": "1470130", "url": "https://hotels.ctrip.com/hotels/1470130.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/y6qog33", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "1470130", "generatedBy": "ctrip-alliance"}},
  "lodging-451c7cf48d05": {"hotelId": "19832385", "url": "https://hotels.ctrip.com/hotels/19832385.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/4gjTToT", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "19832385", "generatedBy": "ctrip-alliance"}},
  "lodging-37c6546932a5": {"hotelId": "125125345", "url": "https://hotels.ctrip.com/hotels/125125345.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/CCAoYCe", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "125125345", "generatedBy": "ctrip-alliance"}},
  "lodging-f3e62deaa9c3": {"hotelId": "112956655", "url": "https://hotels.ctrip.com/hotels/112956655.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/y1csOVP", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "112956655", "generatedBy": "ctrip-alliance"}},
  "lodging-f79172b2dc61": {"hotelId": "19829875", "url": "https://hotels.ctrip.com/hotels/19829875.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/sKmkax2", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:46:37.462447+00:00", "verifiedHotelId": "19829875", "generatedBy": "ctrip-alliance"}},
  "county-4035": {"hotelId": "130104122", "url": "https://hotels.ctrip.com/hotels/130104122.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/jJbrIzq", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "130104122", "generatedBy": "ctrip-alliance"}},
  "county-2894": {"hotelId": "62489515", "url": "https://hotels.ctrip.com/hotels/62489515.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/vBGLpOO", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "62489515", "generatedBy": "ctrip-alliance"}},
  "county-2281": {"hotelId": "2802723", "url": "https://hotels.ctrip.com/hotels/2802723.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/8imKMdT", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "2802723", "generatedBy": "ctrip-alliance"}},
  "shanhu65": {"hotelId": "2171829", "url": "https://hotels.ctrip.com/hotels/2171829.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/5Wkvp8w", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "2171829", "generatedBy": "ctrip-alliance"}},
  "county-1730": {"hotelId": "5903912", "url": "https://hotels.ctrip.com/hotels/5903912.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/ft0L1mE", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "5903912", "generatedBy": "ctrip-alliance"}},
  "lodging-26429c655acd": {"hotelId": "126698110", "url": "https://hotels.ctrip.com/hotels/126698110.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/oSCBedd", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "126698110", "generatedBy": "ctrip-alliance"}},
  "lodging-9676db6e0615": {"hotelId": "23695318", "url": "https://hotels.ctrip.com/hotels/23695318.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/eA3evh8", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "23695318", "generatedBy": "ctrip-alliance"}},
  "lodging-78a582adea97": {"hotelId": "72965314", "url": "https://hotels.ctrip.com/hotels/72965314.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/lQzeEgN", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "72965314", "generatedBy": "ctrip-alliance"}},
  "lodging-9cde836817e1": {"hotelId": "1232669", "url": "https://hotels.ctrip.com/hotels/1232669.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/vEPo3JR", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "1232669", "generatedBy": "ctrip-alliance"}},
  "lodging-2fc963821bc4": {"hotelId": "1807652", "url": "https://hotels.ctrip.com/hotels/1807652.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/kumBwSb", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "1807652", "generatedBy": "ctrip-alliance"}},
  "wudao-inn": {"hotelId": "121743790", "url": "https://hotels.ctrip.com/hotels/121743790.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/mxCPFQe", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "121743790", "generatedBy": "ctrip-alliance"}},
  "lodging-47d89bdf7e33": {"hotelId": "131768960", "url": "https://hotels.ctrip.com/hotels/131768960.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/1MmbiRa", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "131768960", "generatedBy": "ctrip-alliance"}},
  "shanshui-star-resort": {"hotelId": "123080894", "url": "https://hotels.ctrip.com/hotels/123080894.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/p5tjOHM", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "123080894", "generatedBy": "ctrip-alliance"}},
  "registered-homestay-466": {"hotelId": "45924818", "url": "https://hotels.ctrip.com/hotels/45924818.html", "checkedAt": "2026-10-28", "affiliate": {"url": "https://t.ctrip.cn/bBosLP5", "generatedAt": "2026-10-28", "verifiedAt": "2026-10-28T07:10:38.732524+00:00", "verifiedHotelId": "45924818", "generatedBy": "ctrip-alliance"}},
  "lodging-fc8d37f620ee": {"hotelId": "46052683", "url": "https://hotels.ctrip.com/hotels/46052683.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/B2hFfLc", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:42:31.285806+00:00", "verifiedHotelId": "46052683", "generatedBy": "ctrip-alliance"}},
  "lodging-4453bd419df9": {"hotelId": "118995927", "url": "https://hotels.ctrip.com/hotels/118995927.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/qZyT7TK", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:42:31.285806+00:00", "verifiedHotelId": "118995927", "generatedBy": "ctrip-alliance"}},
  "lodging-16a448ced764": {"hotelId": "19830013", "url": "https://hotels.ctrip.com/hotels/19830013.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/hTLY8qH", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:42:31.285806+00:00", "verifiedHotelId": "19830013", "generatedBy": "ctrip-alliance"}},
  "lodging-4714daa85b81": {"hotelId": "14171509", "url": "https://hotels.ctrip.com/hotels/14171509.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/iuQItPs", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:42:31.285806+00:00", "verifiedHotelId": "14171509", "generatedBy": "ctrip-alliance"}},
  "lodging-5471ddc0cb73": {"hotelId": "127057295", "url": "https://hotels.ctrip.com/hotels/127057295.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/iUgR99n", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:42:31.285806+00:00", "verifiedHotelId": "127057295", "generatedBy": "ctrip-alliance"}},
  "lodging-7e4a28c7a729": {"hotelId": "19832585", "url": "https://hotels.ctrip.com/hotels/19832585.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/9dZtFEq", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:33:06.701171+00:00", "verifiedHotelId": "19832585", "generatedBy": "ctrip-alliance"}},
  "in99-hotel": {"hotelId": "992752", "url": "https://hotels.ctrip.com/hotels/992752.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/BD3rEfy", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:33:06.701171+00:00", "verifiedHotelId": "992752", "generatedBy": "ctrip-alliance"}},
  "lodging-e65419664112": {"hotelId": "92140716", "url": "https://hotels.ctrip.com/hotels/92140716.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/eRcu43T", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:33:06.701171+00:00", "verifiedHotelId": "92140716", "generatedBy": "ctrip-alliance"}},
  "lodging-28fb6dcc0cd1": {"hotelId": "125820615", "url": "https://hotels.ctrip.com/hotels/125820615.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/kf8fn37", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:33:06.701171+00:00", "verifiedHotelId": "125820615", "generatedBy": "ctrip-alliance"}},
  "principal-home": {"hotelId": "983448", "url": "https://hotels.ctrip.com/hotels/983448.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/j7gbluJ", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:33:06.701171+00:00", "verifiedHotelId": "983448", "generatedBy": "ctrip-alliance"}},
  "lodging-f537f696a5a9": {"hotelId": "4690818", "url": "https://hotels.ctrip.com/hotels/4690818.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/ad2O1bR", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:33:06.701171+00:00", "verifiedHotelId": "4690818", "generatedBy": "ctrip-alliance"}},
  "lodging-a13962da4e2d": {"hotelId": "110425244", "url": "https://hotels.ctrip.com/hotels/110425244.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/07VU78G", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:33:06.701171+00:00", "verifiedHotelId": "110425244", "generatedBy": "ctrip-alliance"}},
  "county-4036": {"hotelId": "23173413", "url": "https://hotels.ctrip.com/hotels/23173413.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/xCYKFwc", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:04:20.582521+00:00", "verifiedHotelId": "23173413", "generatedBy": "ctrip-alliance"}},
  "golden-lake-hotel": {"hotelId": "1531447", "url": "https://hotels.ctrip.com/hotels/1531447.html", "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/yAdrsGO", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "1531447", "generatedBy": "ctrip-alliance"}},
  "lodging-451c01345513": {
    "hotelId": "133042110",
    "url": "https://hotels.ctrip.com/hotels/133042110.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/4Ez6gtk", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "133042110", "generatedBy": "ctrip-alliance"}
  },
  "lodging-1e91f275984b": {
    "hotelId": "2165503",
    "url": "https://hotels.ctrip.com/hotels/2165503.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/9WP11Fp", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "2165503", "generatedBy": "ctrip-alliance"}
  },
  "lodging-7f8e8a9e089f": {
    "hotelId": "19831164",
    "url": "https://hotels.ctrip.com/hotels/19831164.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/gRWhKXE", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "19831164", "generatedBy": "ctrip-alliance"}
  },
  "lodging-02520b9f906f": {
    "hotelId": "127251661",
    "url": "https://hotels.ctrip.com/hotels/127251661.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/8l8mbb4", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "127251661", "generatedBy": "ctrip-alliance"}
  },
  "lodging-f9ddb3312446": {
    "hotelId": "107946496",
    "url": "https://hotels.ctrip.com/hotels/107946496.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/jgLcv6X", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "107946496", "generatedBy": "ctrip-alliance"}
  },
  "lodging-6e6ebbdecc15": {
    "hotelId": "23695344",
    "url": "https://hotels.ctrip.com/hotels/23695344.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/iiLr7Hf", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "23695344", "generatedBy": "ctrip-alliance"}
  },
  "lodging-35866da3b082": {
    "hotelId": "131826858",
    "url": "https://hotels.ctrip.com/hotels/131826858.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/vZUzJNW", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "131826858", "generatedBy": "ctrip-alliance"}
  },
  "lodging-97aa34516c7b": {
    "hotelId": "135166650",
    "url": "https://hotels.ctrip.com/hotels/135166650.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/6qrleUk", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "135166650", "generatedBy": "ctrip-alliance"}
  },
  "lodging-e74496fa86cd": {
    "hotelId": "124653591",
    "url": "https://hotels.ctrip.com/hotels/124653591.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/80kkwmX", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "124653591", "generatedBy": "ctrip-alliance"}
  },
  "lodging-57dd4152300b": {
    "hotelId": "73714501",
    "url": "https://hotels.ctrip.com/hotels/73714501.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/7tgExkC", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "73714501", "generatedBy": "ctrip-alliance"}
  },
  "lodging-7809b342a8e1": {
    "hotelId": "6205261",
    "url": "https://hotels.ctrip.com/hotels/6205261.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/9LlcLjN", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "6205261", "generatedBy": "ctrip-alliance"}
  },
  "lodging-b7585c79539a": {
    "hotelId": "9543890",
    "url": "https://hotels.ctrip.com/hotels/9543890.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/f0tSLQv", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "9543890", "generatedBy": "ctrip-alliance"}
  },
  "lodging-59b58bac4fd2": {
    "hotelId": "18027004",
    "url": "https://hotels.ctrip.com/hotels/18027004.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/64JpLh6", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "18027004", "generatedBy": "ctrip-alliance"}
  },
  "lodging-47adb41f91ad": {
    "hotelId": "88183680",
    "url": "https://hotels.ctrip.com/hotels/88183680.html",
    "checkedAt": "2026-10-26", "affiliate": {"url": "https://t.ctrip.cn/CrgtWAY", "generatedAt": "2026-10-26", "verifiedAt": "2026-10-27T06:01:32.595313+00:00", "verifiedHotelId": "88183680", "generatedBy": "ctrip-alliance"}
  }
};
