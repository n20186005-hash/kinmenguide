import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const internalLink = z.string().regex(/^\/[a-z0-9/-]*\/$/);
const common = z.object({
  title: z.string().min(2),
  nameEn: z.string(),
  seoTitle: z.string().min(8),
  description: z.string().min(30).max(180),
  image: z.string().optional(),
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
  address: z.string(),
  parking: z.string(),
  hours: z.string(),
  admission: z.string(),
});
const itinerary = common.extend({
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
