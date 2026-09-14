import React, { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';
import { sprintsData } from '../data/portfolioData';
import { parseDutchDate } from '../lib/date';

const SHOW_AND_GROW_HOUR = 9;

const targets = sprintsData
  .map((sprint) => ({
    sprint,
    date: parseDutchDate(sprint.showAndGrowDate, SHOW_AND_GROW_HOUR, 0),
  }))
  .sort((a, b) => a.date.getTime() - b.date.getTime());

function getNextTarget(now: Date) {
  return targets.find((t) => t.date.getTime() > now.getTime());
}

function formatCountdown(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export const CountdownBar: React.FC = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const next = getNextTarget(now);

  if (!next) {
    return (
      <div className="bg-[#9C4A32] text-[#EDE6D8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs">
          <Timer className="w-3.5 h-3.5 shrink-0" />
          <span className="font-medium uppercase tracking-wider">
            Alle Show &amp; Grow momenten zijn afgerond
          </span>
        </div>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = formatCountdown(next.date.getTime() - now.getTime());

  return (
    <div className="bg-[#9C4A32] text-[#EDE6D8]">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
        <Timer className="w-3.5 h-3.5 shrink-0" />
        <span className="font-medium uppercase tracking-wider opacity-90">
          <span className="hidden sm:inline">Volgende Show &amp; Grow &middot; {next.sprint.title}:</span>
          <span className="sm:hidden">Show &amp; Grow:</span>
        </span>
        <span className="font-sans font-bold tabular-nums tracking-wide">
          {days > 0 && `${days}d `}
          {String(hours).padStart(2, '0')}u {String(minutes).padStart(2, '0')}m {String(seconds).padStart(2, '0')}s
        </span>
        <span className="opacity-75 hidden md:inline">
          &middot; {next.sprint.showAndGrowDate}, {String(SHOW_AND_GROW_HOUR).padStart(2, '0')}:00
        </span>
      </div>
    </div>
  );
};
