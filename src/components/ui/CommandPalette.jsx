import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, BookOpen, Trophy, MessageSquare, User, Settings, Terminal, Activity, Sparkles, X, Sun, Moon } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { useTheme } from '../../context/ThemeContext';

export const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { navigate } = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const inputRef = useRef(null);

  const ACTIONS = [
    { id: 'dash', title: 'Go to Dashboard', icon: Activity, group: 'Navigation', action: () => navigate('dashboard') },
    { id: 'explore', title: 'Explore Quant Tracks & Modules', icon: Compass, group: 'Navigation', action: () => navigate('explore') },
    { id: 'workspace', title: 'Open QuantBharat Workspace & Code Engine', icon: Terminal, group: 'Workspace', action: () => navigate('workspace') },
    { id: 'practice', title: 'Start Timed Quantitative Practice Test', icon: BookOpen, group: 'Practice', action: () => navigate('practice') },
    { id: 'results', title: 'View National Analytics & Percentiles', icon: Activity, group: 'Analytics', action: () => navigate('results') },
    { id: 'leaderboard', title: 'All-India Leaderboard & Podium', icon: Trophy, group: 'Community', action: () => navigate('leaderboard') },
    { id: 'community', title: 'QuantBharat Community & Research Discussions', icon: MessageSquare, group: 'Community', action: () => navigate('community') },
    { id: 'profile', title: 'View Quantitative Profile & Badges', icon: User, group: 'User', action: () => navigate('profile') },
    { id: 'settings', title: 'Account & Platform Settings', icon: Settings, group: 'User', action: () => navigate('settings') },
    { id: 'theme', title: `Switch to ${isDark ? 'Light' : 'Dark'} Mode`, icon: isDark ? Sun : Moon, group: 'Preferences', action: toggleTheme },
  ];

  const filtered = ACTIONS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.group.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true); // toggle
      }
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-white/10 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to page... (ESC to exit)"
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-500">ESC</span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching commands found for "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-[#FF7A00]/10 text-[#FF7A00] dark:bg-[#FF7A00]/15 dark:text-[#FF9E3B]'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0 text-slate-400" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                    {item.group}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-[#080B11]/50 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <span>Navigation: ↑ ↓ to navigate</span>
          <span>↵ to execute</span>
        </div>
      </div>
    </div>
  );
};
