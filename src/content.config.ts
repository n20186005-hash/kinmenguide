import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { themeKeys } from './data/travel-themes';
const internalLink = z.string().regex(/^\/[a-z0-9/-]*\/$/);
const common = z.object({
  title: z.string().min(2),
  nameEn: z.string(),
  seoTitle: z.string().min(8),
  description: z.string().min(30).max(180),
  image: z.string().optional(),
  imageCaption: z.string().optional(),
  aliases: z.array(z.string()).default([]),
  visitNotice: z.string().optional(),
  area: z.enum(['kincheng', 'jinhu', 'jinsha', 'jinning', 'lieyu', 'all']),
  tag: z.string(),
  duration: z.string(),
  order: z.number(),
  featured: z.boolean().default(false),
  updatedAt: z.coerce.date(),
  related: z.array(internalLink).min(2),
  sources: z.array(z.object({ title: z.string(), url: z.url() })).min(1),
  facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
});
const attraction = common.extend({
  coordinates: z.object({ lat: z.number().min(24).max(25), lng: z.number().min(118).max(119) }).optional(),
  address: z.string(), // Google 地圖景點地標顯示的完整門牌地址
  locationDescription: z.string().optional(), // 另存官方地理位置描述，不冒充地址
  googleMapsAddressLocalityConflict: z.boolean().optional(), // 原始 POI 地址行政區有衝突時，不另拼接 area 行政區
  googleMapsUrl: z.url().optional(), // 已核對的具名景點 POI 連結，優先用於導航
  parking: z.string(),
  hours: z.string(),
  admission: z.string(),
});
const itinerary = common.extend({
  themes: z.array(z.enum(themeKeys)).default([]),
  days: z.array(z.object({
    title: z.string(),
    description: z.string(),
    stops: z.array(z.object({ time: z.string(), title: z.string(), href: internalLink, note: z.string() })).min(2),
  })).min(1),
});
const make = (name: string) => defineCollection({ loader: glob({ base: `./src/content/${name}`, pattern: '**/*.md' }), schema: common });
// Explicit keys keep collection names and entry data fully typed in Astro.
export const collections = {
  attractions: defineCollection({ loader: glob({ base: './src/content/attractions', pattern: '**/*.md' }), schema: attraction }),
  itineraries: defineCollection({ loader: glob({ base: './src/content/itineraries', pattern: '**/*.md' }), schema: itinerary }),
  food: make('food'), transport: make('transport'), areas: make('areas'), hotels: make('hotels'),
  'car-rental': make('car-rental'), tours: make('tours'), guides: make('guides'),
};
