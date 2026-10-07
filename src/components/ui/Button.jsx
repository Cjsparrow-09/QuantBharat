import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft: IconLeft,
  iconRight: IconRight,
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080B11] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
  };

  const variantClasses = {
    primary: "bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-sm focus:ring-slate-400 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",
    saffron: "bg-[#FF7A00] text-white hover:bg-[#E56E00] font-semibold shadow-md glow-saffron-sm focus:ring-[#FF7A00]/50 border border-[#FF9E3B]/30",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 dark:bg-[#131A29] dark:text-slate-200 dark:hover:bg-[#1A2338] dark:border-white/10 focus:ring-slate-500",
    outline: "bg-transparent text-slate-700 hover:bg-slate-100 border border-slate-300 dark:text-slate-200 dark:hover:bg-white/5 dark:border-white/15 focus:ring-slate-400",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-slate-200 focus:ring-slate-500",
    danger: "bg-rose-600 text-white hover:bg-rose-700 font-medium focus:ring-rose-500 shadow-sm",
    emerald: "bg-emerald-600 text-white hover:bg-emerald-700 font-semibold shadow-md glow-emerald-sm focus:ring-emerald-500"
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
      {!loading && IconLeft && <IconLeft className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {!loading && IconRight && <IconRight className="w-4 h-4 shrink-0" />}
    </button>
  );
};
