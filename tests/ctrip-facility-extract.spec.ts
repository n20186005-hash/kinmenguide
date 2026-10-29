import { test, expect } from '@playwright/test';
import { extractCtripFacilities } from '../scripts/ctrip-facility-extract.mjs';

const row = (name: string, label = '', extra = '', icon = '') => `<div class="hotelFacilityNew_hotelFacility-popular_descA__hash ${extra}" aria-label="${name} ${label}"><i class="${icon}"></i><span class="hotelFacilityNew_hotelFacility-popular_detailDesc__hash">${name}</span><div class="hotelFacilityNew_hotelFacility-popular_label__hash">${label}</div></div>`;
const section = (content: string) => `<div class="hotelFacilityNew_hotelFacilityNewA__hash">${content}</div>`;

test('extracts explicit facilities and fees without treating unavailable facilities as offered', () => {
  const result = extractCtripFacilities(section(
    row('停车场', '', 'hotelFacilityNew_hotelFacility-popular_descUnavail__hash') +
    row('泳池', '', '', 'ic ic-defect') + row('公用区wifi', '免费') +
    row('专车接机', '每人TWD 350（约¥71.97）') + row('电梯'),
  ));
  expect(result).toEqual([
    { name: '停车场', available: false, charge: 'unspecified', label: '', rawText: '停车场' },
    { name: '泳池', available: false, charge: 'unspecified', label: '', rawText: '泳池' },
    { name: '公用区wifi', available: true, charge: 'free', label: '免费', rawText: '公用区wifi 免费' },
    { name: '专车接机', available: true, charge: 'paid', label: '每人TWD 350（约¥71.97）', rawText: '专车接机 每人TWD 350（约¥71.97）' },
    { name: '电梯', available: true, charge: 'unspecified', label: '', rawText: '电梯' },
  ]);
});

test('ignores reviews, scripts, marketing badges and missing sections; preserves conflicts', () => {
  expect(extractCtripFacilities(`<article>评论：免费停车场</article>${row('停车场', '免费')}<script>"电梯"</script>`)).toEqual([]);
  const result = extractCtripFacilities(section(row('停车场', '免费') + row('停车场', '', '', 'ic_defect')));
  expect(result).toHaveLength(2);
  expect(result.map(item => item.available)).toEqual([true, false]);
});


test('qualified or mixed free offers require review rather than unconditional free facets', () => {
  const labels = ['前2小时免费，之后收费', '前2小時免費，之後收費', '免费（需预约）', '住客免费', '部分免费，部分收费', '免费，超时TWD 100', '免費（限一次）'];
  for (const label of labels) {
    const [candidate] = extractCtripFacilities(section(row('停车场', label)));
    expect(candidate.charge).toBe('unspecified');
    expect(candidate.label).toBe(label);
    expect(candidate.rawText).toBe(`停车场 ${label}`);
  }
  expect(extractCtripFacilities(section(row('停车场', '免費')))[0].charge).toBe('free');
});
