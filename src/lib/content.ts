import { getCollection, type CollectionEntry } from 'astro:content';
import { categoryKeys, type Category } from '../data/site';
export type Entry = CollectionEntry<Category>;
export const entryHref = (e: Entry) => `/${e.collection}/${e.id}/`;
export async function allEntries(): Promise<Entry[]> {
  return (await Promise.all(categoryKeys.map((key) => getCollection(key)))).flat().sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}
export const displayDate = (date: Date) => new Intl.DateTimeFormat('zh-TW', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(date);
export const mapLink = (lat: number, lng: number) => `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
