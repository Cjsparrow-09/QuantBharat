import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Menu, X, ArrowRight, Flame, Bell, User, LogOut, Terminal, Compass, BookOpen, Trophy, MessageSquare } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Dropdown } from '../ui/Dropdown';

export const Logo = ({ size = 'md', className = '' }) => {
  const { navigate } = useRouter();
  
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div
      onClick={() => navigate('landing')}
      className={`flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
    >
      <div className={`relative ${iconSizes[size]} rounded-lg bg-gradient-to-br from-[#080B11] to-[#131A29] p-1 border border-[#FF7A00]/40 flex items-center justify-center shadow-glow-saffron transition-transform group-hover:scale-105`}>
        {/* Subtle Indian Quantum Mark: Orbiting Ring with Saffron Quantum Core */}
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle cx="20" cy="20" r="14" fill="none" stroke="#FF7A00" strokeWidth="2.5" strokeDasharray="6 3" className="animate-[spin_12s_linear_infinite]" />
          <circle cx="20" cy="20" r="5" fill="#FF7A00" />
          <line x1="23" y1="23" x2="31" y2="31" stroke="#FF9E3B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight leading-none text-slate-900 dark:text-white flex items-center gap-1 ${textSizes[size]}`}>
          <span>Quant</span>
          <span className="text-[#FF7A00]">Bharat</span>
        </div>
        <span className="text-[9px] tracking-widest uppercase font-mono text-slate-400 font-semibold mt-0.5">
          Tech • Algo • Math
        </span>
      </div>
    </div>
  );
};

export const Navbar = ({ onOpenCommandPalette }) => {
  const { route, navigate } = useRouter();
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Explore', route: 'explore' },
    { label: 'Workspace', route: 'workspace' },
    { label: 'Practice', route: 'practice' },
    { label: 'Community', route: 'community' },
    { label: 'Leaderboard', route: 'leaderboard' },
    { label: 'About', route: 'about' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#080B11]/85 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Logo />

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = route === link.route;
            return (
              <button
                key={link.route}
                onClick={() => navigate(link.route)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#FF7A00] font-semibold dark:text-[#FF9E3B] bg-[#FF7A00]/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search / Cmd+K trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 rounded-lg hover:border-slate-300 dark:hover:border-white/20 transition-colors"
            title="Press Cmd+K to search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Search QuantBharat...</span>
            <kbd className="font-mono text-[10px] bg-white dark:bg-white/10 px-1.5 py-0.5 rounded text-slate-400">⌘K</kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Auth State */}
          {user?.isLoggedIn ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('dashboard')}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#FF7A00] bg-[#FF7A00]/10 rounded-lg border border-[#FF7A00]/30 hover:bg-[#FF7A00]/20 transition"
              >
                <Flame className="w-3.5 h-3.5 fill-[#FF7A00]" />
                <span>{user.streakDays}d Streak</span>
              </button>

              <Dropdown
                trigger={
                  <div className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-[#FF7A00]/50 transition">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#FF7A00]/50"
                    />
                  </div>
                }
                items={[
                  {
                    label: `Logged in as ${user.name}`,
                    icon: User,
                    onClick: () => navigate('profile')
                  },
                  {
                    label: 'Dashboard',
                    icon: Terminal,
                    onClick: () => navigate('dashboard')
                  },
                  {
                    label: 'Practice Test',
                    icon: BookOpen,
                    onClick: () => navigate('practice')
                  },
                  { separator: true },
                  {
                    label: 'Sign Out',
                    icon: LogOut,
                    danger: true,
                    onClick: () => {
                      logout();
                      navigate('landing');
                    }
                  }
                ]}
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate('login')}>
                Log in
              </Button>
              <Button variant="saffron" size="sm" onClick={() => navigate('signup')} iconRight={ArrowRight}>
                Get Started
              </Button>
            </div>
          )}

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-white/10 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => {
                  navigate(link.route);
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            {user?.isLoggedIn ? (
              <Button
                variant="saffron"
                size="md"
                className="w-full"
                onClick={() => {
                  navigate('dashboard');
                  setMobileMenuOpen(false);
                }}
              >
                Open Dashboard
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="md"
                  className="flex-1"
                  onClick={() => {
                    navigate('login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Log in
                </Button>
                <Button
                  variant="saffron"
                  size="md"
                  className="flex-1"
                  onClick={() => {
                    navigate('signup');
                    setMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
