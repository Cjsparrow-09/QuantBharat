import React, { useState } from 'react';

export const VelocityLineChart = () => {
  const data = [
    { week: 'W1', rating: 1250, solved: 8 },
    { week: 'W2', rating: 1320, solved: 14 },
    { week: 'W3', rating: 1390, solved: 22 },
    { week: 'W4', rating: 1440, solved: 31 },
    { week: 'W5', rating: 1510, solved: 46 },
    { week: 'W6', rating: 1560, solved: 58 },
    { week: 'W7', rating: 1620, solved: 72 },
    { week: 'W8', rating: 1680, solved: 89 },
    { week: 'W9', rating: 1715, solved: 104 },
    { week: 'W10', rating: 1760, solved: 119 },
    { week: 'W11', rating: 1805, solved: 131 },
    { week: 'W12', rating: 1842, solved: 142 },
  ];

  const [activePoint, setActivePoint] = useState(data[data.length - 1]);

  const minRating = 1200;
  const maxRating = 1950;
  const height = 180;
  const width = 500;

  // Convert points to SVG coordinates
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * (width - 40) + 20;
    const y = height - 20 - ((d.rating - minRating) / (maxRating - minRating)) * (height - 40);
    return { ...d, x, y };
  });

  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - 10} L ${points[0].x} ${height - 10} Z`;

  return (
    <div className="flex flex-col gap-3">
      {/* Active stat display */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Active Rating</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-slate-900 dark:text-slate-100">{activePoint.rating}</span>
            <span className="text-xs font-semibold text-emerald-500">+{activePoint.rating - 1200} pts</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">{activePoint.week} Total Solved</span>
          <div className="text-base font-bold font-mono text-slate-900 dark:text-slate-100">{activePoint.solved} Problems</div>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full overflow-hidden">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          <defs>
            <linearGradient id="velocityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.33, 0.66, 1].map((ratio, idx) => {
            const y = height - 20 - ratio * (height - 40);
            return (
              <line
                key={idx}
                x1="10"
                y1={y}
                x2={width - 10}
                y2={y}
                stroke="currentColor"
                className="text-slate-200 dark:text-white/5"
                strokeDasharray="4 4"
              />
            );
          })}

          {/* Area under curve */}
          <path d={areaD} fill="url(#velocityGrad)" />

          {/* Stroke Line */}
          <path
            d={pathD}
            fill="none"
            stroke="#FF7A00"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interactive dots */}
          {points.map((p, idx) => (
            <circle
              key={idx}
              cx={p.x}
              cy={p.y}
              r={p.week === activePoint.week ? 5 : 3}
              className={`transition-all duration-150 cursor-pointer ${
                p.week === activePoint.week
                  ? 'fill-[#FF7A00] stroke-white dark:stroke-[#080B11] stroke-2 shadow-glow-saffron'
                  : 'fill-slate-400 dark:fill-slate-600 hover:fill-[#FF7A00]'
              }`}
              onMouseEnter={() => setActivePoint(p)}
            />
          ))}
        </svg>
      </div>

      {/* Week X-Axis labels */}
      <div className="flex justify-between text-[10px] font-mono text-slate-400 px-2">
        <span>Week 1 (Orientation)</span>
        <span>Week 6 (Mid-Sprint)</span>
        <span>Week 12 (Current Status)</span>
      </div>
    </div>
  );
};
