import React, { useState, useRef, useEffect } from 'react';

export const Dropdown = ({
  trigger,
  children,
  items = [],
  align = 'right',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} mt-2 w-56 rounded-xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 shadow-2xl py-1.5 z-40 focus:outline-none animate-in fade-in zoom-in-95 duration-100 ${className}`}
        >
          {children ? (
            children
          ) : (
            items.map((item, idx) => {
              if (item.separator) {
                return <div key={idx} className="my-1 border-t border-slate-100 dark:border-white/5" />;
              }
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (item.onClick) item.onClick(e);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium transition-colors ${
                    item.danger
                      ? 'text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 shrink-0 text-slate-400 dark:text-slate-500" />}
                  <span>{item.label}</span>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
