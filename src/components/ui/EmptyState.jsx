import React from 'react';
import { Button } from './Button';

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionText,
  onAction,
  secondaryText,
  onSecondary,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-[#0E1420]/40 ${className}`}>
      {Icon && (
        <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00] mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      {description && (
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mt-1 mb-5">
          {description}
        </p>
      )}
      <div className="flex items-center gap-3">
        {actionText && onAction && (
          <Button variant="saffron" size="sm" onClick={onAction}>
            {actionText}
          </Button>
        )}
        {secondaryText && onSecondary && (
          <Button variant="outline" size="sm" onClick={onSecondary}>
            {secondaryText}
          </Button>
        )}
      </div>
    </div>
  );
};
