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

export interface DatedSprint {
  id: number;
  showAndGrowDate: string;
}

/** Parses a Dutch date string like "16 september 2026" into a Date at the given local time. */
export function parseDutchDate(dateStr: string, hour = 0, minute = 0): Date {
  const [day, monthName, year] = dateStr.trim().split(/\s+/);
  const month = DUTCH_MONTHS[monthName.toLowerCase()];
  return new Date(Number(year), month, Number(day), hour, minute, 0, 0);
}

export function getCurrentSprintId(sprints: DatedSprint[], now = new Date()): number | undefined {
  const upcomingSprint = [...sprints]
    .sort((a, b) => parseDutchDate(a.showAndGrowDate, 9).getTime() - parseDutchDate(b.showAndGrowDate, 9).getTime())
    .find((sprint) => parseDutchDate(sprint.showAndGrowDate, 9).getTime() > now.getTime());

  return upcomingSprint?.id ?? sprints.at(-1)?.id;
}
