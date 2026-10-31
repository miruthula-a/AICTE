import React from 'react';
import { IconClock } from './Icons';

export function DeadlineRuler({ 
  daysElapsed = 12, 
  totalSlaDays = 45, 
  stageDayMarks = [
    { day: 7, label: "Inward Cleared", completed: true },
    { day: 21, label: "Scrutiny SLA", completed: false, isCurrentCutoff: true },
    { day: 36, label: "EVC Window", completed: false },
    { day: 45, label: "Final Order Cutoff", completed: false }
  ],
  deadlineDate = "18 Feb 2026",
  isOverdue = false
}) {
  const maxScale = Math.max(totalSlaDays, daysElapsed + 5, 45);
  const pinPercent = Math.min(100, Math.max(0, (daysElapsed / maxScale) * 100));
  const daysRemaining = totalSlaDays - daysElapsed;

  const ticks = [];
  for (let i = 0; i <= maxScale; i += 1) {
    ticks.push({ day: i, isMajor: i % 5 === 0, isTens: i % 10 === 0 });
  }

  return (
    <div className="bg-[#FAF7F2] border border-[#D6CEBF] rounded-2xl p-5 text-[#14181F] shadow-soft-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-[#E8DFCF] pb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono font-semibold uppercase tracking-wider text-[#4F545E]">
            STATUTORY DEADLINE RULER (AICTE APH 2026-27)
          </span>
          <span className="text-[#878D96] hidden sm:inline">•</span>
          <span className="font-mono text-[#4F545E] hidden sm:inline">
            1 Tick = 1 Working Day
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <IconClock className="w-3.5 h-3.5 text-[#4F545E]" />
            <span>Elapsed: <strong>{daysElapsed}d</strong></span>
          </div>
          <span className="text-[#878D96]">/</span>
          <div className="font-mono text-xs">
            Limit: <strong>{totalSlaDays}d</strong>
          </div>
          <span className="text-[#878D96]">|</span>
          <div className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-full border ${
            isOverdue 
              ? 'bg-[#FAECE9] border-[#C8321E] text-[#C8321E]' 
              : daysRemaining <= 5 
                ? 'bg-[#FBF5E9] border-[#B9852B] text-[#92671E]' 
                : 'bg-[#EBF2EE] border-[#2F5D46] text-[#2F5D46]'
          }`}>
            {isOverdue 
              ? `OVERDUE BY ${Math.abs(daysRemaining)} DAYS` 
              : `${daysRemaining} DAYS REMAINING (${deadlineDate})`}
          </div>
        </div>
      </div>

      <div className="relative pt-6 pb-4 px-2 select-none">
        {/* Sliding Brass Pin Needle */}
        <div 
          className="absolute top-0 transition-all duration-300 z-20 flex flex-col items-center"
          style={{ left: `calc(${pinPercent}% + 8px)`, transform: 'translateX(-50%)' }}
        >
          <div className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-sm flex items-center gap-1.5 ${
            isOverdue 
              ? 'bg-[#C8321E] text-white border-[#A52413]' 
              : 'bg-[#14181F] text-[#FAF7F2] border-[#14181F]'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            DAY {daysElapsed} (TODAY)
          </div>
          <div className="w-0.5 h-3 bg-[#C8321E]"></div>
          <div className="w-2.5 h-2.5 rotate-45 bg-[#C8321E] -mt-1 shadow-sm rounded-xs"></div>
        </div>

        {/* Physical Calibrated Ruler Track with Curved Corners */}
        <div className="relative h-12 bg-[#EFE8DC] border border-[#C2B8A5] rounded-xl flex items-end overflow-hidden shadow-inner">
          <div className="absolute inset-0 flex justify-between items-end px-2 pointer-events-none">
            {ticks.map((t) => (
              <div key={t.day} className="flex flex-col items-center justify-end h-full">
                {t.isTens && (
                  <span className="text-[9px] font-mono text-[#4F545E] -mb-0.5 font-medium">
                    {t.day}
                  </span>
                )}
                <div className={`w-[1px] ${
                  t.isTens 
                    ? 'h-6 bg-[#14181F]' 
                    : t.isMajor 
                      ? 'h-4 bg-[#4F545E]' 
                      : 'h-2 bg-[#C2B8A5]'
                }`} />
              </div>
            ))}
          </div>

          {stageDayMarks.map((mark, idx) => {
            const markPos = (mark.day / maxScale) * 100;
            return (
              <div
                key={idx}
                className="absolute top-0 bottom-0 pointer-events-none"
                style={{ left: `${markPos}%` }}
              >
                <div className={`h-full border-r ${
                  mark.overdue 
                    ? 'border-dashed border-[#C8321E] bg-[rgba(200,50,30,0.08)]' 
                    : mark.isCurrentCutoff 
                      ? 'border-dashed border-[#B9852B] bg-[rgba(185,133,43,0.06)]' 
                      : 'border-dotted border-[#878D96]'
                }`} style={{ width: '1px' }}></div>
              </div>
            );
          })}
        </div>

        {/* Sub labels */}
        <div className="relative mt-2.5 h-6 text-[11px] font-mono">
          {stageDayMarks.map((mark, idx) => {
            const markPos = (mark.day / maxScale) * 100;
            return (
              <div
                key={idx}
                className="absolute top-0 -translate-x-1/2 flex flex-col items-center whitespace-nowrap"
                style={{ left: `${markPos}%` }}
              >
                <span className="text-[9px] text-[#878D96]">▲ Day {mark.day}</span>
                <span className={`text-[10px] font-medium ${
                  mark.completed 
                    ? 'text-[#2F5D46]' 
                    : mark.isCurrentCutoff 
                      ? 'text-[#92671E] font-bold underline decoration-[#B9852B]' 
                      : mark.overdue
                        ? 'text-[#C8321E] font-bold'
                        : 'text-[#4F545E]'
                }`}>
                  {mark.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
