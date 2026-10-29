import { load } from 'cheerio';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const number = value => {
  if (value === null || value === undefined || String(value).trim() === '') return null;
  const parsed = Number(String(value ?? '').replace(/,/g, '').trim());
  return Number.isFinite(parsed) ? parsed : null;
};

function stateNumber(html, key) {
  const match = html.match(new RegExp(`\\\\?"${key}\\\\?":\\\\?"?([0-9]+(?:\\.[0-9]+)?)`));
  return match ? number(match[1]) : null;
}

function hotelCommentPayloads(html) {
  // Limit hydration reads to hotelDetailResponse.hotelComment.comment objects;
  // the same page can contain unrelated SSR payloads with scoreMax/count keys.
  const pattern = /hotelDetailResponse\\?":\{\\?"hotelComment\\?":\{\\?"comment\\?":\{([^}]*)/g;
  return [...html.matchAll(pattern)].map(([, comment]) => ({
    score: stateNumber(comment, 'score'),
    scale: stateNumber(comment, 'scoreMax'),
    count: stateNumber(comment, 'totalComment'),
  }));
}

function uniqueValue(values) {
  const unique = [...new Set(values.filter(value => value !== null && value !== undefined))];
  return unique.length === 1 ? unique[0] : null;
}

function visibleReview($) {
  const roots = $('[class*="components_review__"]');
  const scoreValues = [];
  const countValues = [];
  let explicitNoReviews = false;
  roots.each((_, root) => {
    const card = $(root);
    const score = number(card.find('[class*="components_score__"]').first().text());
    if (score !== null) scoreValues.push(score);
    const countText = card.find('[class*="components_countLink__"]').first().text();
    const count = countText.match(/(?:显示所有)?\s*([\d,]+)\s*条点评/);
    if (count) countValues.push(number(count[1]));
    explicitNoReviews ||= card.find('[class*="components_noScore__"], [class*="components_noReviewText__"]').length > 0;
  });
  $('[class*="reviewScores_reviewOverallScores-scoreBackground"]').each((_, node) => {
    const score = number($(node).find('[class*="ratingScore_ratingScore-container"]').first().text());
    if (score !== null) scoreValues.push(score);
  });
  $('[class*="reviewScores_reviewOverallScores-scoreCount"]').each((_, node) => {
    const text = $(node).attr('aria-label') || $(node).text();
    const count = text.match(/([\d,]+)\s*条评论/);
    if (count) countValues.push(number(count[1]));
  });
  return {
    score: uniqueValue(scoreValues),
    scoreConflict: new Set(scoreValues).size > 1,
    count: uniqueValue(countValues),
    countConflict: new Set(countValues).size > 1,
    explicitNoReviews,
  };
}

function extractLevel($) {
  const node = $('[class*="hotelStarLevel_hotelOverview_starLevel"][role="img"]').first();
  if (!node.length) return { value: null, type: null, status: 'missing' };

  const rawValue = node.attr('aria-label') || null;
  const icons = node.find('i[class*="hotelStarLevel_hotelOverview_starLevel_icon"]');
  const families = [...new Set(icons.toArray().map(icon => {
    const classes = $(icon).attr('class') || '';
    if (/\bu-icon-ic_new_diamond\b/.test(classes)) return 'diamond';
    if (/\bu-icon-ic_new_circle\b/.test(classes)) return 'circle';
    return 'other';
  }))];
  const parsed = number(rawValue);
  const isDiamond = families.length === 1 && families[0] === 'diamond' &&
    Number.isInteger(parsed) && parsed === icons.length && icons.length > 0;
  if (isDiamond) return { value: parsed, type: 'ctrip-diamond-level', status: 'available' };

  // Keep the observed label and icon family, but do not turn circles, mixed
  // icons, or unknown categories into a diamond/star rating.
  return {
    value: null,
    type: null,
    status: 'unclassified',
    rawValue,
    iconFamily: families.length === 1 ? families[0] : families.length ? 'mixed' : 'none',
  };
}

/** Extract Ctrip SSR rating candidates; unknown and absent values remain explicit. */
export function extractCtripRatings(html) {
  const $ = load(html);
  const visible = visibleReview($);
  const payloads = hotelCommentPayloads(html);
  const matchedPayloads = payloads.filter(payload =>
    visible.score !== null && visible.count !== null &&
    payload.score === visible.score && payload.count === visible.count,
  );
  const scale = uniqueValue(matchedPayloads.map(payload => payload.scale));
  const overallValue = visible.scoreConflict ? null : visible.score;
  const reviewCount = visible.countConflict ? null : visible.count ??
    (visible.explicitNoReviews ? 0 : null);
  const scoreMissingReason = overallValue !== null
    ? null
    : visible.explicitNoReviews ? 'no-reviews'
      : visible.scoreConflict ? 'conflicting-visible-values' : 'not-present';

  const categories = [];
  $('[class*="reviewScores_reviewCategoryScores-list"] [class*="reviewScores_reviewCategoryScores-itemHead"]').each((_, item) => {
    const label = $(item).attr('aria-label') || '';
    const match = label.match(/^(.+?)\s+([\d.]+)$/);
    if (match) categories.push({ name: match[1].trim(), value: number(match[2]), scale, type: 'guest-review-category' });
  });

  return {
    platformLevel: extractLevel($),
    overall: overallValue === null
      ? { value: null, scale, type: 'guest-review-score', status: scoreMissingReason }
      : { value: overallValue, scale, type: 'guest-review-score', status: 'available' },
    categories,
    reviewCount: reviewCount === null
      ? { value: null, type: 'review-count', status: visible.countConflict ? 'conflicting-visible-values' : 'not-present' }
      : { value: reviewCount, type: 'review-count', status: 'available' },
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const filename = process.argv[2];
  if (!filename) throw new Error('Usage: node scripts/ctrip-rating-extract.mjs HTML_FILE');
  process.stdout.write(JSON.stringify(extractCtripRatings(fs.readFileSync(filename, 'utf8')), null, 2) + '\n');
}
