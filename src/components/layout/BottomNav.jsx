import React from 'react';
import { Activity, Compass, Terminal, BookOpen, MessageSquare } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export const BottomNav = () => {
  const { route, navigate } = useRouter();

  const items = [
    { label: 'Dash', icon: Activity, route: 'dashboard' },
    { label: 'Explore', icon: Compass, route: 'explore' },
    { label: 'Workspace', icon: Terminal, route: 'workspace', highlight: true },
    { label: 'Practice', icon: BookOpen, route: 'practice' },
    { label: 'Community', icon: MessageSquare, route: 'community' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#080B11]/95 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 px-2 py-1 flex items-center justify-around">
      {items.map((item) => {
        const isActive = route === item.route;
        const Icon = item.icon;

        if (item.highlight) {
          return (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              className="flex flex-col items-center justify-center -mt-4 p-2 rounded-full bg-[#FF7A00] text-white shadow-glow-saffron border-2 border-white dark:border-[#080B11] active:scale-95 transition"
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        }

        return (
          <button
            key={item.route}
            onClick={() => navigate(item.route)}
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-lg text-[10px] font-medium transition-colors ${
              isActive
                ? 'text-[#FF7A00] font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-[#FF7A00]' : 'text-slate-400'}`} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
