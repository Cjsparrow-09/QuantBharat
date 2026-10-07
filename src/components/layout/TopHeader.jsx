import React, { useState } from 'react';
import { Search, Flame, Bell, Sun, Moon, CheckCircle2, ChevronRight, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useRouter } from '../../context/RouterContext';
import { Dropdown } from '../ui/Dropdown';
import { Badge } from '../ui/Badge';

export const TopHeader = ({ onOpenCommandPalette, onMobileMenuToggle }) => {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { route, navigate } = useRouter();
  const [unreadNotifications, setUnreadNotifications] = useState(2);

  const notifications = [
    { id: 1, title: 'National Rank Update', text: 'You climbed 2 ranks to #14 in All-India Quantitative Standings!', time: '10m ago', unread: true },
    { id: 2, title: 'Weekly Sprint Benchmark', text: 'New challenge: Stochastic Volatility Calibration is live in Workspace.', time: '1h ago', unread: true },
    { id: 3, title: 'Community Upvote', text: 'Dr. Vikramaditya Rao upvoted your analysis on C++ memory alignment.', time: '1d ago', unread: false }
  ];

  return (
    <header className="h-16 border-b border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#080B11]/90 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile toggle + Breadcrumb / Route title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuToggle}
          className="md:hidden p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <span className="cursor-pointer hover:text-[#FF7A00]" onClick={() => navigate('dashboard')}>QuantBharat</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900 dark:text-slate-100 capitalize">
            {route.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2.5">
        {/* Quick Search */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 rounded-lg hover:border-slate-300 dark:hover:border-white/20 transition-colors"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Search...</span>
          <kbd className="font-mono text-[10px] bg-white dark:bg-white/10 px-1.5 py-0.5 rounded text-slate-400">⌘K</kbd>
        </button>

        {/* Streak Indicator */}
        <button
          onClick={() => navigate('profile')}
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#FF7A00] bg-[#FF7A00]/10 rounded-lg border border-[#FF7A00]/30 hover:bg-[#FF7A00]/20 transition"
          title="Daily problem solving streak"
        >
          <Flame className="w-3.5 h-3.5 fill-[#FF7A00]" />
          <span>{user?.streakDays || 18}d</span>
        </button>

        {/* Notifications Dropdown */}
        <Dropdown
          align="right"
          trigger={
            <button
              className="relative p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
              )}
            </button>
          }
        >
          <div className="w-80 p-2">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-white/5">
              <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">Notifications</span>
              {unreadNotifications > 0 && (
                <button
                  onClick={() => setUnreadNotifications(0)}
                  className="text-[10px] text-[#FF7A00] hover:underline"
                >
                  Mark all read
                </button>
              )}
            </div>
            <div className="divide-y divide-slate-100 dark:divide-white/5 max-h-64 overflow-y-auto">
              {notifications.map((n) => (
                <div key={n.id} className="p-3 text-xs hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition">
                  <div className="flex items-center justify-between font-semibold text-slate-800 dark:text-slate-200">
                    <span>{n.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{n.time}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 leading-snug">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Dropdown>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
        </button>

        {/* Avatar */}
        <button
          onClick={() => navigate('profile')}
          className="p-0.5 rounded-full ring-1 ring-slate-300 dark:ring-white/20 hover:ring-[#FF7A00] transition"
        >
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-7 h-7 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};
