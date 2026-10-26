import type { Trip, TripStop } from './trip-store';
export type Place = { id: string; kind: 'attraction' | 'food' | 'hotel'; title: string; area: string; duration?: string; address: string; notice: string; href: string };
export type ExportStop = TripStop & { place: Place };
export const placeKindNames = { attraction: '景點', food: '餐飲', hotel: '住宿' } as const;
export function placeSummary(place: Place) {
  const details: string[] = [placeKindNames[place.kind], place.area];
  if (place.kind === 'attraction' && place.duration) details.push(`建議停留 ${place.duration}`);
  return details.join(' · ');
}
function lines(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, width: number, lineHeight: number, maxLines: number) {
  const chars = Array.from(text.replace(/\s+/g, ' ')); let line = '', row = 0;
  for (let i = 0; i < chars.length; i++) {
    if (ctx.measureText(line + chars[i]).width > width && line) {
      if (row === maxLines - 1) { while (ctx.measureText(line + '…').width > width) line = line.slice(0, -1); ctx.fillText(line + '…', x, y + row * lineHeight); return; }
      ctx.fillText(line, x, y + row++ * lineHeight); line = '';
    }
    line += chars[i];
  }
  ctx.fillText(line, x, y + row * lineHeight);
}
export async function createTripImages(trip: Trip, stops: ExportStop[]): Promise<Blob[]> {
  const pages = Math.ceil(stops.length / 6); const images: Blob[] = [];
  await document.fonts.ready;
  for (let page = 0; page < pages; page++) {
    const batch = stops.slice(page * 6, (page + 1) * 6);
    const canvas = document.createElement('canvas'); canvas.width = 1080; canvas.height = 320 + batch.length * 300 + 120;
    const ctx = canvas.getContext('2d'); if (!ctx) throw new Error('Canvas unavailable');
    ctx.fillStyle = '#f8f6ef'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#934733'; ctx.fillRect(0, 0, 1080, 14);
    ctx.font = '600 24px sans-serif'; ctx.fillText('KINMEN GUIDE  /  金門・島嶼旅行清單', 64, 72);
    ctx.fillStyle = '#293b30'; ctx.font = '600 48px sans-serif'; lines(ctx, trip.title || '我的金門旅行', 64, 146, 952, 60, 2);
    ctx.font = '26px sans-serif'; ctx.fillStyle = '#676d62'; ctx.fillText(`${trip.days} 天 · ${stops.length} 個站點 · 第 ${page + 1} / ${pages} 張`, 64, 266);
    batch.forEach((stop, index) => {
      const y = 310 + index * 300; const p = stop.place;
      ctx.fillStyle = '#ffffff'; ctx.fillRect(52, y, 976, 280);
      ctx.fillStyle = '#934733'; ctx.font = '600 24px sans-serif'; ctx.fillText(`DAY ${String(stop.day).padStart(2, '0')}  /  ${stop.time || '時間自訂'}`, 76, y + 40);
      ctx.textAlign = 'right'; ctx.fillStyle = '#768170'; ctx.fillText(String(page * 6 + index + 1).padStart(2, '0'), 1000, y + 40); ctx.textAlign = 'left';
      ctx.font = '600 34px sans-serif'; ctx.fillStyle = '#293b30'; lines(ctx, p.title, 76, y + 90, 914, 41, 2);
      ctx.font = '24px sans-serif'; ctx.fillStyle = '#586451'; lines(ctx, placeSummary(p), 76, y + 172, 914, 30, 1);
      lines(ctx, stop.note ? `備註：${stop.note}` : p.address, 76, y + 210, 914, 30, 2);
    });
    ctx.fillStyle = '#676d62'; ctx.font = '21px sans-serif'; ctx.fillText('個人行程 · 請另確認開放、營業、訂房與交通', 64, canvas.height - 54);
    ctx.textAlign = 'right'; ctx.fillStyle = '#934733'; ctx.font = '600 24px sans-serif'; ctx.fillText('kinmenguide.com', 1016, canvas.height - 54);
    const blob = await new Promise<Blob>((resolve,reject) => canvas.toBlob(b => b ? resolve(b) : reject(new Error('PNG export failed')), 'image/png'));
    images.push(blob);
  }
  return images;
}
