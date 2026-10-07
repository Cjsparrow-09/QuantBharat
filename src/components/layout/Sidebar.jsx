import React from 'react';
import { 
  Activity, 
  Compass, 
  Terminal, 
  BookOpen, 
  BarChart3, 
  Trophy, 
  MessageSquare, 
  User, 
  Settings, 
  HelpCircle, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Flame,
  Search
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { useAuth } from '../../context/AuthContext';
import { Logo } from './Navbar';
import { Badge } from '../ui/Badge';

export const Sidebar = ({ collapsed = false, onToggleCollapse }) => {
  const { route, navigate } = useRouter();
  const { user, logout } = useAuth();

  const navigationItems = [
    { label: 'Dashboard', icon: Activity, route: 'dashboard' },
    { label: 'Explore Tracks', icon: Compass, route: 'explore' },
    { label: 'Workspace Engine', icon: Terminal, route: 'workspace', badge: 'PRO' },
    { label: 'Practice Mode', icon: BookOpen, route: 'practice' },
    { label: 'Results & Analytics', icon: BarChart3, route: 'results' },
    { label: 'All-India Leaderboard', icon: Trophy, route: 'leaderboard' },
    { label: 'Community Forum', icon: MessageSquare, route: 'community' },
    { label: 'Global Search', icon: Search, route: 'search' },
  ];

  const secondaryItems = [
    { label: 'My Profile', icon: User, route: 'profile' },
    { label: 'Settings', icon: Settings, route: 'settings' },
    { label: 'Help & FAQ', icon: HelpCircle, route: 'help' },
  ];

  return (
    <aside
      className={`hidden md:flex flex-col border-r border-slate-200 dark:border-white/10 bg-white dark:bg-[#080B11] h-screen sticky top-0 transition-all duration-300 z-30 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header / Brand */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-white/10">
        {!collapsed ? (
          <Logo size="sm" />
        ) : (
          <div onClick={() => navigate('dashboard')} className="cursor-pointer mx-auto">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#080B11] to-[#131A29] p-1 border border-[#FF7A00]/40 flex items-center justify-center shadow-glow-saffron">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="12" fill="none" stroke="#FF7A00" strokeWidth="3" />
                <circle cx="20" cy="20" r="4" fill="#FF7A00" />
              </svg>
            </div>
          </div>
        )}

        <button
          onClick={onToggleCollapse}
          className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Navigation links */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="mb-2">
          {!collapsed && (
            <span className="px-3 text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Core Platform
            </span>
          )}
        </div>

        {navigationItems.map((item) => {
          const isActive = route === item.route;
          const Icon = item.icon;
          return (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              title={collapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-[#FF7A00]/10 text-[#FF7A00] font-semibold dark:bg-[#FF7A00]/15 dark:text-[#FF9E3B] shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
              } ${collapsed ? 'justify-center px-0' : ''}`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#FF7A00]' : 'text-slate-400 dark:text-slate-500'}`} />
              {!collapsed && (
                <div className="flex items-center justify-between flex-1">
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold bg-[#FF7A00]/20 text-[#FF7A00]">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </button>
          );
        })}

        <div className="pt-4 mb-2">
          {!collapsed && (
            <span className="px-3 text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Account & Docs
            </span>
          )}
        </div>

        {secondaryItems.map((item) => {
          const isActive = route === item.route;
          const Icon = item.icon;
          return (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              title={collapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                isActive
                  ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
              } ${collapsed ? 'justify-center px-0' : ''}`}
            >
              <Icon className="w-4 h-4 shrink-0 text-slate-400 dark:text-slate-500" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </div>

      {/* User profile footer card */}
      <div className="p-3 border-t border-slate-200 dark:border-white/10">
        {!collapsed ? (
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-white/5">
            <div
              onClick={() => navigate('profile')}
              className="flex items-center gap-2.5 overflow-hidden cursor-pointer flex-1"
            >
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-8 h-8 rounded-lg object-cover border border-[#FF7A00]/40 shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {user?.name}
                </span>
                <span className="text-[10px] text-[#FF7A00] font-mono truncate">
                  Rank #{user?.nationalRank} Bharat
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                logout();
                navigate('landing');
              }}
              title="Sign Out"
              className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate('profile')}
            title={`Logged in as ${user?.name}`}
            className="w-full flex justify-center p-1"
          >
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-8 h-8 rounded-lg object-cover border border-[#FF7A00]/40"
            />
          </button>
        )}
      </div>
    </aside>
  );
};
