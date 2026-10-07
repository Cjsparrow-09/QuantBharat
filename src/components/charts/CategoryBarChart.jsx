import React from 'react';

export const CategoryBarChart = () => {
  const topics = [
    { name: 'Linear Algebra & SVD', accuracy: 92, percentile: '98.6%', color: 'from-cyan-500 to-blue-600', solved: '38/41' },
    { name: 'Stochastic Calculus & PDEs', accuracy: 88, percentile: '97.2%', color: 'from-[#FF7A00] to-amber-500', solved: '42/48' },
    { name: 'Dynamic Programming & Graphs', accuracy: 84, percentile: '94.8%', color: 'from-indigo-500 to-purple-600', solved: '31/37' },
    { name: 'Low-Latency C++ Architecture', accuracy: 79, percentile: '92.1%', color: 'from-emerald-500 to-teal-600', solved: '22/28' },
    { name: 'Diophantine & Modular Combinatorics', accuracy: 71, percentile: '89.4%', color: 'from-rose-500 to-pink-600', solved: '19/27' },
  ];

  return (
    <div className="flex flex-col gap-4">
      {topics.map((topic, idx) => (
        <div key={idx} className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-800 dark:text-slate-200">{topic.name}</span>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="text-slate-400">Solved: {topic.solved}</span>
              <span className="font-bold text-slate-900 dark:text-slate-100">{topic.accuracy}% Accuracy</span>
            </div>
          </div>
          
          {/* Track Bar */}
          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${topic.color} transition-all duration-700`}
              style={{ width: `${topic.accuracy}%` }}
            />
          </div>
          
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>Bharat Benchmark: {topic.percentile} Percentile</span>
            <span>Mastery: Level 4</span>
          </div>
        </div>
      ))}
    </div>
  );
};
