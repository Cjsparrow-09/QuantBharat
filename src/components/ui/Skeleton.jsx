import React from 'react';

export const Skeleton = ({ className = '', ...props }) => {
  return (
    <div
      className={`animate-pulse rounded bg-slate-200 dark:bg-white/5 ${className}`}
      {...props}
    />
  );
};

export const CardSkeleton = () => (
  <div className="rounded-xl border border-slate-200 dark:border-white/10 p-5 bg-white dark:bg-[#0E1420] flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="flex flex-col gap-1.5 flex-1">
        <Skeleton className="w-2/3 h-4" />
        <Skeleton className="w-1/3 h-3" />
      </div>
    </div>
    <Skeleton className="w-full h-16 rounded-lg mt-2" />
    <div className="flex justify-between items-center mt-2">
      <Skeleton className="w-20 h-4" />
      <Skeleton className="w-16 h-8 rounded-lg" />
    </div>
  </div>
);
