import React from 'react';

export const Card = ({
  children,
  className = '',
  variant = 'default',
  onClick,
  ...props
}) => {
  const base = "rounded-xl border transition-all duration-200 relative overflow-hidden";
  
  const variants = {
    default: "bg-white dark:bg-[#0E1420] border-slate-200 dark:border-white/10 shadow-sm",
    interactive: "bg-white dark:bg-[#0E1420] border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/25 hover:shadow-md hover:-translate-y-0.5 cursor-pointer",
    glowing: "bg-white dark:bg-[#0E1420] border-[#FF7A00]/30 shadow-glow-saffron",
    panel: "bg-slate-50 dark:bg-[#131A29] border-slate-200 dark:border-white/5",
  };

  return (
    <div
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-5 pb-3 border-b border-slate-100 dark:border-white/5 flex flex-col gap-1.5 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-base font-semibold text-slate-900 dark:text-slate-100 tracking-tight flex items-center justify-between ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-xs text-slate-500 dark:text-slate-400 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-5 ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-5 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between ${className}`}>
    {children}
  </div>
);
