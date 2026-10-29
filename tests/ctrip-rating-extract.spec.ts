import { test, expect } from '@playwright/test';
import { extractCtripRatings } from '../scripts/ctrip-rating-extract.mjs';

const level = (value: number, icon: string) => `<span class="hotelStarLevel_hotelOverview_starLevel__hash" role="img" aria-label="${value}">${Array.from({ length: value }, () => `<i class="hotelStarLevel_hotelOverview_starLevel_icon__hash smarticon u-icon u-icon-ic_new_${icon}"></i>`).join('')}</span>`;
const scoreCard = (value: number, count: number) => `<div class="components_review__hash" aria-label="${value} 很好 显示所有${count}条点评"><div class="components_score__hash">${value}</div><div class="components_countLink__hash">显示所有${count}条点评</div></div><div class="reviewScores_reviewOverallScores-scoreBackground__hash"><div class="ratingScore_ratingScore-container__hash">${value}</div></div><div class="reviewScores_reviewOverallScores-scoreCount__hash" aria-label="${count} 条评论">${count} 条评论</div>`;
const commentPayload = (score: number, count: number, scale: number) => `<script>self.__next_f.push([1,"{\\"hotelDetailResponse\\":{\\"hotelComment\\":{\\"comment\\":{\\"totalComment\\":${count},\\"score\\":\\"${score}\\",\\"scoreMax\\":\\"${scale}\\"}}}}"])</script>`;

test('extracts Ctrip diamond level and the hotel-comment score denominator', () => {
  // Mirrors the public SSR structure observed for 金门金湖饭店.
  const html = `${level(5, 'diamond')}${scoreCard(4.5, 441)}<ul class="reviewScores_reviewCategoryScores-list__hash"><li><div class="reviewScores_reviewCategoryScores-itemHead__hash" aria-label="卫生 4.6"></div><div class="reviewScores_reviewCategoryScores-itemHead__hash" aria-label="设施 4.5"></div></ul>${commentPayload(4.5, 441, 5)}`;
  expect(extractCtripRatings(html)).toEqual({
    platformLevel: { value: 5, type: 'ctrip-diamond-level', status: 'available' },
    overall: { value: 4.5, scale: 5, type: 'guest-review-score', status: 'available' },
    categories: [
      { name: '卫生', value: 4.6, scale: 5, type: 'guest-review-category' },
      { name: '设施', value: 4.5, scale: 5, type: 'guest-review-category' },
    ],
    reviewCount: { value: 441, type: 'review-count', status: 'available' },
  });
});

test('does not borrow scoreMax or review count from unrelated SSR payloads', () => {
  const unrelated = `<script>window.otherData={\\"score\\":\\"3.8\\",\\"scoreMax\\":\\"10\\",\\"totalComment\\":17}</script>`;
  const html = `${level(5, 'diamond')}${scoreCard(4.5, 441)}${unrelated}${commentPayload(3.8, 17, 10)}${commentPayload(4.5, 441, 5)}`;
  const result = extractCtripRatings(html);
  expect(result.overall).toEqual({ value: 4.5, scale: 5, type: 'guest-review-score', status: 'available' });
  expect(result.reviewCount).toEqual({ value: 441, type: 'review-count', status: 'available' });
});

test('keeps scale unknown when multiple matching payloads disagree', () => {
  const html = `${scoreCard(4.5, 441)}${commentPayload(4.5, 441, 5)}${commentPayload(4.5, 441, 10)}`;
  expect(extractCtripRatings(html).overall).toEqual({ value: 4.5, scale: null, type: 'guest-review-score', status: 'available' });
});

test('preserves no-review state and does not misclassify circle icons as diamonds', () => {
  const html = `${level(2, 'circle')}<div class="components_review__hash" aria-label="期待点评 期待您入住后写下首条评论"><div class="components_noScore__hash">期待点评</div><div class="components_noReviewText__hash">期待您入住后写下首条评论</div></div><script>self.__next_f.push([1,"{\\"hotelDetailResponse\\":{\\"hotelComment\\":{\\"comment\\":{\\"totalComment\\":0,\\"noReviews\\":\\"暂无评分\\",\\"scoreMax\\":\\"5\\"}}}}"])</script>`;
  expect(extractCtripRatings(html)).toEqual({
    platformLevel: { value: null, type: null, status: 'unclassified', rawValue: '2', iconFamily: 'circle' },
    overall: { value: null, scale: null, type: 'guest-review-score', status: 'no-reviews' },
    categories: [],
    reviewCount: { value: 0, type: 'review-count', status: 'available' },
  });
});

test('keeps absent rating and count distinct from zero', () => {
  expect(extractCtripRatings('<main>尚无住客点评</main>')).toEqual({
    platformLevel: { value: null, type: null, status: 'missing' },
    overall: { value: null, scale: null, type: 'guest-review-score', status: 'not-present' },
    categories: [],
    reviewCount: { value: null, type: 'review-count', status: 'not-present' },
  });
});
