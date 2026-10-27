// Verified hotel identities and Ctrip-generated promotion links; redirect evidence is kept in the delivery ledger.
export type CtripHotel = { hotelId: string; url: string; checkedAt: string; affiliate?: { url: string; generatedAt: string; verifiedAt: string; verifiedHotelId: string; generatedBy: 'ctrip-alliance' } };
export const ctripHotels: Record<string, CtripHotel> = {
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
