import React from 'react';

export const Tabs = ({
  tabs = [],
  activeTab,
  onChange,
  variant = 'pills',
  className = ''
}) => {
  if (variant === 'underline') {
    return (
      <div className={`flex border-b border-slate-200 dark:border-white/10 overflow-x-auto no-scrollbar gap-2 ${className}`}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex items-center gap-2 py-3 px-3.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                isActive
                  ? 'border-[#FF7A00] text-[#FF7A00] dark:text-[#FF9E3B]'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {Icon && <Icon className="w-4 h-4 shrink-0" />}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                  isActive ? 'bg-[#FF7A00]/20 text-[#FF7A00]' : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  // Default 'pills'
  return (
    <div className={`flex items-center p-1 bg-slate-100 dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 rounded-xl overflow-x-auto no-scrollbar gap-1 ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              isActive
                ? 'bg-white dark:bg-[#131A29] text-slate-900 dark:text-white shadow-sm border border-slate-200/50 dark:border-white/10'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                isActive ? 'bg-[#FF7A00]/20 text-[#FF7A00]' : 'bg-slate-200 dark:bg-white/10 text-slate-500'
              }`}>
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
