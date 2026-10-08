import type { ImageMetadata } from 'astro';
import credits from '../data/photos.json';
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });
export type PhotoKey = keyof typeof credits;
export function photo(key: string) {
  const credit = credits[key as PhotoKey];
  const source = files[`../assets/photos/${key}.jpg`]?.default;
  if (!credit || !source) throw new Error(`Missing licensed photo: ${key}`);
  return { ...credit, src: source };
}
export { credits };
