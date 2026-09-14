const DUTCH_MONTHS: Record<string, number> = {
  januari: 0,
  februari: 1,
  maart: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  augustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  december: 11,
};

/** Parses a Dutch date string like "16 september 2026" into a Date at the given local time. */
export function parseDutchDate(dateStr: string, hour = 0, minute = 0): Date {
  const [day, monthName, year] = dateStr.trim().split(/\s+/);
  const month = DUTCH_MONTHS[monthName.toLowerCase()];
  return new Date(Number(year), month, Number(day), hour, minute, 0, 0);
}
