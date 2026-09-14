/**
 * Notitieboek "Wat heb ik geleerd": genereert automatisch een pagina voor elke
 * maandag en woensdag vanaf de eerste lesdag, en beheert de opgeslagen
 * aantekeningen + eventuele extra (handmatig toegevoegde) lespagina's.
 *
 * Aantekeningen worden lokaal opgeslagen in de browser (localStorage) van
 * Jasmijn, dus ze blijven staan tussen bezoeken op hetzelfde apparaat.
 */

export interface LessonPage {
  id: string;
  dateISO: string;
  weekday: string;
  dateLabel: string;
  lessonNumber: number;
  isCustom: boolean;
  label?: string;
}

const FIRST_LESSON_ISO = '2026-08-31';
const STORAGE_KEY = 'jm-portfolio-notitieboek-v1';

const DUTCH_WEEKDAYS = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const DUTCH_MONTHS = [
  'januari', 'februari', 'maart', 'april', 'mei', 'juni',
  'juli', 'augustus', 'september', 'oktober', 'november', 'december',
];

function isoDate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDutchDate(d: Date): string {
  return `${d.getDate()} ${DUTCH_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export function todayISO(): string {
  return isoDate(new Date());
}

/** Elke maandag en woensdag vanaf de eerste lesdag tot en met vandaag. */
export function generateScheduledLessons(untilDate: Date = new Date()): LessonPage[] {
  const lessons: LessonPage[] = [];
  const cursor = new Date(`${FIRST_LESSON_ISO}T00:00:00`);
  const end = new Date(untilDate);
  end.setHours(23, 59, 59, 999);

  while (cursor <= end) {
    const day = cursor.getDay();
    if (day === 1 || day === 3) {
      lessons.push({
        id: isoDate(cursor),
        dateISO: isoDate(cursor),
        weekday: DUTCH_WEEKDAYS[day],
        dateLabel: formatDutchDate(cursor),
        lessonNumber: 0,
        isCustom: false,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return lessons;
}

export function buildLessonPage(dateISO: string, label?: string): LessonPage {
  const d = new Date(`${dateISO}T00:00:00`);
  return {
    id: `custom-${dateISO}-${Date.now()}`,
    dateISO,
    weekday: DUTCH_WEEKDAYS[d.getDay()],
    dateLabel: formatDutchDate(d),
    lessonNumber: 0,
    isCustom: true,
    label,
  };
}

interface StoredData {
  notes: Record<string, string>;
  customLessons: LessonPage[];
}

function emptyStoredData(): StoredData {
  return { notes: {}, customLessons: [] };
}

export function loadStoredData(): StoredData {
  if (typeof window === 'undefined') return emptyStoredData();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStoredData();
    const parsed = JSON.parse(raw);
    return {
      notes: parsed?.notes ?? {},
      customLessons: Array.isArray(parsed?.customLessons) ? parsed.customLessons : [],
    };
  } catch {
    return emptyStoredData();
  }
}

export function saveStoredData(data: StoredData): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage niet beschikbaar (bv. privénavigatie) — aantekening gaat dan niet mee naar een volgend bezoek.
  }
}
