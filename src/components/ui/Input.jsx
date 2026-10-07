import React, { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';

export const Input = ({
  label,
  error,
  helperText,
  iconLeft: IconLeft,
  iconRight: IconRight,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onClear,
  as = 'input',
  rows = 4,
  required = false,
  className = '',
  containerClassName = '',
  id,
  name,
  disabled = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || name || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const isPassword = type === 'password';
  const effectiveType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const baseInput = "w-full rounded-lg bg-white dark:bg-[#080B11] border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/40 disabled:opacity-50 disabled:cursor-not-allowed text-sm";
  
  const borderState = error
    ? "border-rose-500 focus:border-rose-500"
    : "border-slate-300 dark:border-white/10 focus:border-[#FF7A00]";

  const paddingLeft = IconLeft ? "pl-10" : "pl-3.5";
  const paddingRight = (isPassword || onClear || IconRight) ? "pr-10" : "pr-3.5";

  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
          <span>
            {label} {required && <span className="text-[#FF7A00]">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center">
        {IconLeft && (
          <div className="absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none">
            <IconLeft className="w-4 h-4" />
          </div>
        )}

        {as === 'textarea' ? (
          <textarea
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
            className={`${baseInput} ${borderState} p-3 resize-y ${className}`}
            {...props}
          />
        ) : (
          <input
            id={inputId}
            name={name}
            type={effectiveType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`${baseInput} ${borderState} ${paddingLeft} ${paddingRight} h-10 ${className}`}
            {...props}
          />
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}

        {!isPassword && onClear && value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
            aria-label="Clear input"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {!isPassword && !onClear && IconRight && (
          <div className="absolute right-3 text-slate-400 dark:text-slate-500 pointer-events-none">
            <IconRight className="w-4 h-4" />
          </div>
        )}
      </div>

      {error && (
        <span className="text-xs text-rose-500 font-medium">
          {error}
        </span>
      )}

      {!error && helperText && (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {helperText}
        </span>
      )}
    </div>
  );
};
