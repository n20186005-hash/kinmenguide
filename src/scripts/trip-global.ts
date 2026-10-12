import { getTrip, saveTrip, storageMessage, MAX_STOPS } from '../lib/trip-store';
const status = document.querySelector<HTMLElement>('#trip-toast');
let timer: ReturnType<typeof setTimeout>;
function announce(message: string) {
  if (!status) return;
  status.textContent = message; status.hidden = false;
  clearTimeout(timer); timer = setTimeout(() => { status.hidden = true; }, 6500);
}
function refresh() {
  const { stops } = getTrip();
  document.querySelectorAll('[data-trip-count]').forEach(node => { node.textContent = String(stops.length); });
  document.querySelectorAll<HTMLButtonElement>('[data-trip-add]').forEach(button => {
    const added = stops.some(stop => stop.id === button.dataset.tripAdd);
    button.disabled = false;
    button.textContent = added ? '✓ 已加入・查看' : '＋ 加入行程';
    button.classList.toggle('is-added', added);
    button.setAttribute('aria-label', `${added ? '查看已加入行程' : '加入行程'}：${button.dataset.tripTitle}`);
  });
}
document.addEventListener('click', event => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-trip-add]');
  if (!button?.dataset.tripAdd) return;
  const trip = getTrip();
  if (trip.stops.some(stop => stop.id === button.dataset.tripAdd)) { location.href = '/trip/'; return; }
  if (trip.stops.length >= MAX_STOPS) { announce(`清單最多收藏 ${MAX_STOPS} 個景點，請先到行程清單整理。`); return; }
  trip.stops.push({ id: button.dataset.tripAdd, day: 1, time: '', note: '' });
  const saved = saveTrip(trip);
  announce(saved ? `已加入第 1 天：${button.dataset.tripTitle}。到「行程清單」安排天數與順序。` : `已加入。${storageMessage()}`);
});
window.addEventListener('trip-change', refresh);
refresh();
