import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export const Breadcrumb = ({ items = [] }) => {
  const { navigate } = useRouter();

  return (
    <nav className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 py-2 overflow-x-auto no-scrollbar" aria-label="Breadcrumb">
      <button
        onClick={() => navigate('dashboard')}
        className="flex items-center gap-1 hover:text-[#FF7A00] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>QuantBharat</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {isLast || !item.route ? (
              <span className="font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => navigate(item.route, item.params)}
                className="hover:text-[#FF7A00] transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
