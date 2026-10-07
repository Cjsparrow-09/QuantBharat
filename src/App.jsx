import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { AppLayout } from './components/layout/AppLayout';

// 18 Platform Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { DashboardPage } from './pages/DashboardPage';
import { ExplorePage } from './pages/ExplorePage';
import { WorkspacePage } from './pages/WorkspacePage';
import { PracticePage } from './pages/PracticePage';
import { ResultsAnalyticsPage } from './pages/ResultsAnalyticsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { CommunityPage } from './pages/CommunityPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { SearchPage } from './pages/SearchPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HelpFaqPage } from './pages/HelpFaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

const RouteRenderer = () => {
  const { route } = useRouter();

  switch (route) {
    case 'landing':
    case '':
      return <LandingPage />;
    case 'login':
      return <LoginPage />;
    case 'signup':
      return <SignUpPage />;
    case 'forgot-password':
      return <ForgotPasswordPage />;
    case 'dashboard':
      return <DashboardPage />;
    case 'explore':
      return <ExplorePage />;
    case 'workspace':
      return <WorkspacePage />;
    case 'practice':
      return <PracticePage />;
    case 'results':
      return <ResultsAnalyticsPage />;
    case 'leaderboard':
      return <LeaderboardPage />;
    case 'community':
      return <CommunityPage />;
    case 'profile':
      return <ProfilePage />;
    case 'settings':
      return <SettingsPage />;
    case 'search':
      return <SearchPage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    case 'help':
      return <HelpFaqPage />;
    default:
      return <NotFoundPage />;
  }
};

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <RouterProvider>
            <AppLayout>
              <RouteRenderer />
            </AppLayout>
          </RouterProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
