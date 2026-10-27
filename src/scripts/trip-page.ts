import { getTrip, saveTrip, storageMessage, type Trip } from '../lib/trip-store';
import { createTripImages, placeSummary, type Place } from '../lib/trip-image';
const catalog: Place[] = JSON.parse(document.querySelector('#trip-catalog')!.textContent!);
const places = new Map(catalog.map(p => [p.id, p]));
function savedPlace(id: string): Place {
  const known = places.get(id);
  if (known) return known;
  const kind = id.startsWith('hotel:') ? 'hotel' : id.startsWith('food:') ? 'food' : 'attraction';
  return { id, kind, title: '原有收藏資料待確認', area: '位置待確認', address: '原有收藏的位置尚待核對', canPlan: false,
    notice: '目前名錄未找到這個原有收藏；你的日期、時間與備註均保留，請另核對資料。', href: '/search/' };
}
const app = document.querySelector<HTMLElement>('#trip-app')!;
const days = document.querySelector<HTMLSelectElement>('#trip-days')!;
const title = document.querySelector<HTMLInputElement>('#trip-title')!;
const list = document.querySelector<HTMLElement>('#trip-day-list')!;
const status = document.querySelector<HTMLElement>('#trip-status')!;
const undo = document.querySelector<HTMLButtonElement>('#trip-undo')!;
const exportButton = document.querySelector<HTMLButtonElement>('#trip-export')!;
const imageSection = document.querySelector<HTMLElement>('#trip-images')!;
const imageList = document.querySelector<HTMLElement>('#trip-image-list')!;
let previous: Trip | null = null;
let urls: string[] = [];
let skipRender = false;
let exporting = false;
let revision = 0;
function node<K extends keyof HTMLElementTagNameMap>(tag: K, text?: string, className?: string) {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (className) element.className = className;
  return element;
}
function invalidateImages() {
  urls.forEach(url => URL.revokeObjectURL(url)); urls = [];
  imageList.replaceChildren(); imageSection.hidden = true;
}
function commit(trip: Trip, rebuild = true) {
  previous = null; undo.hidden = true;
  skipRender = !rebuild; saveTrip(trip); skipRender = false;
}
function render() {
  const trip = getTrip();
  const focus = document.activeElement as HTMLElement | null;
  const focusId = focus?.closest<HTMLElement>('[data-stop]')?.dataset.stop;
  const field = focus?.dataset.field; const action = focus?.dataset.action;
  title.value = trip.title; days.value = String(trip.days);
  document.querySelector('#trip-total')!.textContent = String(trip.stops.length);
  document.querySelector('#trip-storage')!.textContent = storageMessage();
  document.querySelector<HTMLElement>('#trip-empty')!.hidden = trip.stops.length > 0;
  document.querySelector<HTMLButtonElement>('#trip-clear')!.disabled = !trip.stops.length;
  exportButton.disabled = !trip.stops.length || exporting;
  if (skipRender) return;
  list.replaceChildren();
  if (!trip.stops.length) return;
  for (let day = 1; day <= trip.days; day++) {
    const dayStops = trip.stops.filter(stop => stop.day === day);
    const section = node('section', undefined, 'trip-day'); section.dataset.day = String(day);
    const heading = node('h2', `第 ${day} 天`); heading.append(node('span', `${dayStops.length} 個站點`, 'small')); section.append(heading);
    if (!dayStops.length) section.append(node('p', '這一天還留著空白，從其他天移入站點，或再挑一個想去的地方。', 'small'));
    dayStops.forEach((stop, index) => {
      const place = savedPlace(stop.id);
      const row = node('article', undefined, 'trip-stop'); row.dataset.stop = stop.id;
      if (place.canPlan === false) row.dataset.pending = 'true';
      const number = node('span', String(index + 1).padStart(2,'0'), 'trip-stop-number'); number.setAttribute('aria-hidden','true');
      const content = node('div', undefined, 'trip-stop-content');
      const h3 = node('h3'); const link = node('a', place.title); link.href = place.href; h3.append(link);
      content.append(h3, node('p', placeSummary(place), 'small'), node('p', place.address, 'small'));
      if (place.notice) content.append(node('p', place.notice, 'trip-visit-note'));
      const fields = node('div', undefined, 'trip-stop-fields');
      const dayLabel = node('label', '安排日期'); const daySelect = node('select'); daySelect.dataset.field = 'day'; daySelect.setAttribute('aria-label',`${place.title}安排日期`);
      for (let d = 1; d <= trip.days; d++) { const option = node('option', `第 ${d} 天`); option.value = String(d); daySelect.append(option); }
      daySelect.value = String(stop.day); dayLabel.append(daySelect);
      const timeLabel = node('label', '計畫時間（選填）'); const time = node('input'); time.type = 'time'; time.value = stop.time; time.dataset.field = 'time'; time.setAttribute('aria-label',`${place.title}計畫時間`); timeLabel.append(time);
      const noteLabel = node('label', '備註（選填）'); noteLabel.className = 'trip-note-label'; const note = node('input'); note.type = 'text'; note.maxLength = 100; note.value = stop.note; note.placeholder = '例如：午餐後再出發'; note.dataset.field = 'note'; note.setAttribute('aria-label',`${place.title}備註`); noteLabel.append(note);
      fields.append(dayLabel,timeLabel,noteLabel); content.append(fields);
      const controls = node('div', undefined, 'trip-stop-controls');
      for (const [key,label,disabled] of [['up','↑ 上移',index === 0],['down','↓ 下移',index === dayStops.length - 1],['remove','移除',false]] as const) {
        const button = node('button',label); button.type = 'button'; button.dataset.action = key; button.disabled = disabled; button.setAttribute('aria-label',`${label.replace(/[↑↓] /,'')}：${place.title}`); controls.append(button);
      }
      row.append(number,content,controls); section.append(row);
    });
    list.append(section);
  }
  if (focusId) {
    const row = list.querySelector<HTMLElement>(`[data-stop="${CSS.escape(focusId)}"]`);
    row?.querySelector<HTMLElement>(field ? `[data-field="${field}"]` : `[data-action="${action}"]`)?.focus({preventScroll:true});
  }
}
window.addEventListener('trip-change', () => { previous = null; undo.hidden = true; revision++; invalidateImages(); render(); });
function updateField(event: Event) {
  const input = event.target as HTMLInputElement | HTMLSelectElement;
  const id = input.closest<HTMLElement>('[data-stop]')?.dataset.stop;
  const trip = getTrip(); const stop = trip.stops.find(s => s.id === id); if (!stop) return;
  if (event.type === 'input' && input.dataset.field === 'day') return;
  if (event.type === 'change' && input.dataset.field !== 'day') return;
  if (input.dataset.field === 'day') stop.day = Number(input.value);
  else if (input.dataset.field === 'time') stop.time = input.value;
  else if (input.dataset.field === 'note') stop.note = input.value;
  commit(trip, input.dataset.field === 'day');
}
list.addEventListener('input', updateField);
list.addEventListener('change', updateField);
list.addEventListener('click', event => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-action]'); if (!button) return;
  const id = button.closest<HTMLElement>('[data-stop]')!.dataset.stop;
  const trip = getTrip(); const index = trip.stops.findIndex(s => s.id === id); if (index < 0) return;
  if (button.dataset.action === 'remove') {
    const snapshot = getTrip(); const name = savedPlace(id!).title;
    trip.stops.splice(index,1); commit(trip); previous = snapshot; undo.hidden = false; status.textContent = `已移除 ${name}。`; undo.focus();
  } else {
    const sameDay = trip.stops.filter(s => s.day === trip.stops[index].day);
    const current = sameDay.findIndex(s => s.id === id);
    const other = sameDay[current + (button.dataset.action === 'up' ? -1 : 1)]; if (!other) return;
    const target = trip.stops.findIndex(s => s.id === other.id);
    [trip.stops[index],trip.stops[target]] = [trip.stops[target],trip.stops[index]]; commit(trip);
    status.textContent = '已更新這一天的站點順序。';
  }
});
title.addEventListener('input', () => { const trip = getTrip(); trip.title = title.value; commit(trip,false); });
days.addEventListener('change', () => {
  const trip = getTrip(); trip.days = Number(days.value);
  const moved = trip.stops.some(s => s.day > trip.days); trip.stops.forEach(s => { s.day = Math.min(s.day,trip.days); }); commit(trip);
  status.textContent = moved ? `已把超出天數的站點移到第 ${trip.days} 天，站點沒有刪除。` : '已更新旅行天數。';
});
document.querySelector('#trip-clear')!.addEventListener('click', () => {
  if (!confirm('要清空目前的站點清單嗎？')) return;
  const snapshot = getTrip(); const trip = getTrip(); trip.stops = []; commit(trip); previous = snapshot; undo.hidden = false; status.textContent = '清單已清空，可復原剛才的站點。'; undo.focus();
});
undo.addEventListener('click', () => { if (!previous) return; const restore = previous; commit(restore); status.textContent = '已復原站點清單。'; });
exportButton.addEventListener('click', async () => {
  const trip = getTrip(); if (!trip.stops.length || exporting) return;
  const version = revision;
  const stops = trip.stops.slice().sort((a,b) => a.day - b.day).map(stop => ({...stop,place:savedPlace(stop.id)}));
  exporting = true; exportButton.disabled = true; exportButton.textContent = '正在製作圖片…';
  try {
    const blobs = await createTripImages(trip,stops);
    if (version !== revision) { status.textContent = '行程剛剛有變更，請重新製作圖片。'; return; }
    invalidateImages();
    for (const [index,blob] of blobs.entries()) {
      const url = URL.createObjectURL(blob); urls.push(url);
      const figure = node('figure'); const image = node('img'); image.src = url; image.alt = `${trip.title || '我的金門旅行'}，第 ${index+1} 張行程圖片，附 kinmenguide.com 來源`; image.width = 1080; image.height = 440 + Math.min(6, stops.length-index*6)*300;
      const caption = node('figcaption'); const download = node('a',`下載第 ${index+1} 張 PNG`, 'button'); download.href = url; download.download = `kinmenguide-trip-${index+1}.png`; caption.append(download); figure.append(image,caption); imageList.append(figure);
    }
    imageSection.hidden = false;
    document.querySelector('#trip-export-status')!.textContent = `已製作 ${blobs.length} 張圖片。若修改行程，請重新保存。`;
    imageSection.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',block:'start'});
  } catch { status.textContent = '圖片製作未完成，請重試或減少站點；你的行程仍保留在清單中。'; }
  finally { exporting = false; exportButton.disabled = !getTrip().stops.length; exportButton.textContent = '保存行程圖片'; }
});
window.addEventListener('pagehide',invalidateImages);
app.hidden = false; render();
