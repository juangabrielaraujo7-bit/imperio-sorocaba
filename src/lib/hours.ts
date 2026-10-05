import { business, type DayHours, type DayKey } from '../data/business';

const DAY_ORDER: DayKey[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

/** "10:00" -> "10h", "18:30" -> "18h30" */
export function formatHour(hhmm: string): string {
  const [h, m] = hhmm.split(':');
  return m === '00' ? `${Number(h)}h` : `${Number(h)}h${m}`;
}

/** Data/hora atual no fuso da loja. */
export function nowInStoreTime(date = new Date()): { day: DayKey; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: business.timezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const weekday = get('weekday').toLowerCase().slice(0, 3) as DayKey;
  return { day: weekday, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

export interface OpenStatus {
  open: boolean;
  /** Texto curto: "Aberto agora · fecha às 19h" / "Fechado · abre segunda às 10h" */
  label: string;
}

const DAY_NAMES: Record<DayKey, string> = {
  sun: 'domingo',
  mon: 'segunda',
  tue: 'terça',
  wed: 'quarta',
  thu: 'quinta',
  fri: 'sexta',
  sat: 'sábado',
};

export function getOpenStatus(
  hours: readonly DayHours[] = business.hours,
  date = new Date(),
): OpenStatus {
  const { day, minutes } = nowInStoreTime(date);
  const byKey = new Map(hours.map((h) => [h.key, h]));
  const today = byKey.get(day);

  if (today?.opens && today.closes) {
    const o = toMinutes(today.opens);
    const c = toMinutes(today.closes);
    if (minutes >= o && minutes < c) {
      return { open: true, label: `Aberto agora · fecha às ${formatHour(today.closes)}` };
    }
    if (minutes < o) {
      return { open: false, label: `Fechado agora · abre hoje às ${formatHour(today.opens)}` };
    }
  }

  // Próximo dia com horário
  const start = DAY_ORDER.indexOf(day);
  for (let i = 1; i <= 7; i++) {
    const key = DAY_ORDER[(start + i) % 7];
    const next = byKey.get(key);
    if (next?.opens) {
      const when = i === 1 ? 'amanhã' : DAY_NAMES[key];
      return { open: false, label: `Fechado agora · abre ${when} às ${formatHour(next.opens)}` };
    }
  }
  return { open: false, label: 'Fechado' };
}
