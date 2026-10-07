import React from 'react';

export const Badge = ({
  children,
  variant = 'neutral',
  size = 'sm',
  dot = false,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5'
  };

  const variantClasses = {
    saffron: 'bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/30 dark:bg-[#FF7A00]/10 dark:text-[#FF9E3B] dark:border-[#FF7A00]/30',
    emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
    indigo: 'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20',
    cyan: 'bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20',
    purple: 'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20',
    rose: 'bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20',
    amber: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/10'
  };

  const dotColors = {
    saffron: 'bg-[#FF7A00]',
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-500',
    cyan: 'bg-cyan-500',
    purple: 'bg-purple-500',
    rose: 'bg-rose-500',
    amber: 'bg-amber-500',
    neutral: 'bg-slate-400'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full tracking-wide transition-colors ${sizeClasses[size]} ${variantClasses[variant] || variantClasses.neutral} ${className}`}
      {...props}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse-subtle ${dotColors[variant] || dotColors.neutral}`} />
      )}
      {children}
    </span>
  );
};
