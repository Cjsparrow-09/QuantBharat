import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';
import { BottomNav } from './BottomNav';
import { Footer } from './Footer';
import { CommandPalette } from '../ui/CommandPalette';

export const AppLayout = ({ children }) => {
  const { route } = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Pages that use the public layout (Navbar + Page + Footer)
  const isPublicRoute = ['landing', 'about', 'contact', 'help', '404'].includes(route);
  const isAuthRoute = ['login', 'signup', 'forgot-password'].includes(route);

  // Auth pages have their own standalone clean layout
  if (isAuthRoute) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-slate-100">
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
        />
        {children}
      </div>
    );
  }

  // Public landing & institutional pages
  if (isPublicRoute) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#080B11] text-slate-900 dark:text-slate-100">
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
        />
      </div>
    );
  }

  // Dashboard / App Workspace Routes
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-[#080B11] text-slate-900 dark:text-slate-100">
      {/* Desktop Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        <TopHeader
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

        {/* Mobile Bottom Navigation */}
        <BottomNav />
      </div>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
};
