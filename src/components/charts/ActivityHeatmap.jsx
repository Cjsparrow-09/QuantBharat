import React from 'react';

export const ActivityHeatmap = () => {
  // Generate 52 weeks x 7 days mock quantitative activity
  const weeks = 28; // last 28 weeks for compact dashboard display
  const days = 7;
  const dayNames = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'];

  // Seeded mock activity data
  const grid = [];
  let totalSubmissions = 0;

  for (let w = 0; w < weeks; w++) {
    const col = [];
    for (let d = 0; d < days; d++) {
      // Create a realistic learning streak pattern
      const rand = Math.sin(w * 0.4 + d * 0.7) * 0.5 + 0.5;
      let count = 0;
      if (w > 18) { // Recent active streak!
        count = Math.floor(rand * 6) + 1;
      } else if (rand > 0.4) {
        count = Math.floor(rand * 5);
      }
      totalSubmissions += count;
      col.push(count);
    }
    grid.push(col);
  }

  const getColor = (count) => {
    if (count === 0) return 'bg-slate-100 dark:bg-white/5 border border-transparent';
    if (count <= 2) return 'bg-[#FF7A00]/30 border border-[#FF7A00]/20';
    if (count <= 4) return 'bg-[#FF7A00]/60 border border-[#FF7A00]/40';
    return 'bg-[#FF7A00] border border-[#FF9E3B] shadow-glow-saffron';
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>{totalSubmissions} quantitative problems solved in the last 6 months</span>
        <div className="flex items-center gap-1.5 text-[11px]">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-sm bg-slate-100 dark:bg-white/5 inline-block" />
          <span className="w-2.5 h-2.5 rounded-sm bg-[#FF7A00]/30 inline-block" />
          <span className="w-2.5 h-2.5 rounded-sm bg-[#FF7A00]/60 inline-block" />
          <span className="w-2.5 h-2.5 rounded-sm bg-[#FF7A00] inline-block" />
          <span>More</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-1 no-scrollbar">
        <div className="flex gap-1 min-w-[500px]">
          {/* Day label column */}
          <div className="flex flex-col gap-1 pr-1 text-[9px] font-mono text-slate-400">
            {dayNames.map((name, i) => (
              <span key={i} className="h-3 flex items-center justify-end leading-none">{name}</span>
            ))}
          </div>

          {/* Grid columns */}
          {grid.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-1">
              {col.map((count, rowIdx) => (
                <div
                  key={rowIdx}
                  title={`${count} submissions on day ${colIdx * 7 + rowIdx}`}
                  className={`w-3 h-3 rounded-[3px] transition-transform hover:scale-125 hover:z-10 cursor-pointer ${getColor(count)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
