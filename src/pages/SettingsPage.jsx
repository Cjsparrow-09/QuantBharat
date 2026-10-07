import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';
import { 
  User, 
  Sliders, 
  Shield, 
  Lock, 
  Trash2, 
  Sun, 
  Moon, 
  Laptop, 
  Smartphone, 
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';

export const SettingsPage = () => {
  const { navigate } = useRouter();
  const { user, updateProfile, logout } = useAuth();
  const { theme, toggleTheme, isDark } = useTheme();
  const { addToast } = useToast();

  const [activeSection, setActiveSection] = useState('account');
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [profilePublic, setProfilePublic] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSaveAccount = (e) => {
    e.preventDefault();
    updateProfile({ name, email });
    addToast('Account settings saved', 'success');
  };

  const sections = [
    { id: 'account', label: 'Account Details', icon: User },
    { id: 'preferences', label: 'Preferences & Theme', icon: Sliders },
    { id: 'privacy', label: 'Privacy & Visibility', icon: Shield },
    { id: 'security', label: 'Security & Sessions', icon: Lock },
    { id: 'danger', label: 'Danger Zone', icon: Trash2 }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Platform & Account Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Manage your credentials, IDE appearance, data privacy, and active hardware sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Navigation Sidebar */}
        <div className="md:col-span-4 lg:col-span-3 space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition ${
                  isActive
                    ? 'bg-[#FF7A00] text-white shadow-glow-saffron'
                    : section.id === 'danger'
                    ? 'text-rose-500 hover:bg-rose-500/10'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{section.label}</span>
              </button>
            );
          })}
        </div>

        {/* Section Content */}
        <div className="md:col-span-8 lg:col-span-9">
          {activeSection === 'account' && (
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <span className="text-xs text-slate-400">Update your primary contact and student/research identity</span>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveAccount} className="space-y-4 max-w-lg">
                  <Input
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label="Registered Username"
                    value={user?.username || 'arjun_quant'}
                    disabled
                    helperText="Username cannot be altered once verified on national leaderboards."
                  />
                  <Button variant="saffron" size="sm" type="submit">
                    Save Account Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {activeSection === 'preferences' && (
            <Card>
              <CardHeader>
                <CardTitle>Interface & Theme Preferences</CardTitle>
                <span className="text-xs text-slate-400">Customize your IDE visual theme and workspace configurations</span>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/10">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">Active Theme</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">Toggle between Antigravity Cosmic Dark and High-Contrast Light.</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    iconLeft={isDark ? Sun : Moon}
                    onClick={toggleTheme}
                  >
                    Switch to {isDark ? 'Light' : 'Dark'}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/10">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">Email Benchmark Reports</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">Receive weekly All-India percentile rank updates via email.</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 accent-[#FF7A00] cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'privacy' && (
            <Card>
              <CardHeader>
                <CardTitle>Privacy & All-India Visibility</CardTitle>
                <span className="text-xs text-slate-400">Control how your ratings and profile appear to other quants and corporate recruiters</span>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/10">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">Public Leaderboard Visibility</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">Show your verified name and institution on the All-India top rankings.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={profilePublic}
                    onChange={(e) => {
                      setProfilePublic(e.target.checked);
                      addToast(`Leaderboard visibility set to ${e.target.checked ? 'Public' : 'Anonymous'}`, 'info');
                    }}
                    className="w-4 h-4 accent-[#FF7A00] cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'security' && (
            <Card>
              <CardHeader>
                <CardTitle>Security & Hardware Sessions</CardTitle>
                <span className="text-xs text-slate-400">Manage encryption keys and active authentication sessions</span>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-white/10">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">Two-Factor Authentication (2FA)</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">Protect your high-score submissions with authenticator app OTP.</p>
                  </div>
                  <Badge variant={twoFactorEnabled ? 'emerald' : 'neutral'} size="sm">
                    {twoFactorEnabled ? 'Enabled & Active' : 'Disabled'}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white">Active Device Sessions</h3>
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <Laptop className="w-5 h-5 text-slate-400" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">Chrome on Windows (Current)</div>
                        <div className="text-[10px] text-slate-400">Bengaluru, Bharat • IP: 103.21.24.12</div>
                      </div>
                    </div>
                    <Badge variant="emerald" size="xs">Active Now</Badge>
                  </div>

                  <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-slate-400" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">Safari on iOS 19</div>
                        <div className="text-[10px] text-slate-400">Chennai, Bharat • Last active 2h ago</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => addToast('Session revoked', 'info')}>
                      Revoke
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'danger' && (
            <Card className="border-rose-500/30 bg-rose-500/5">
              <CardHeader>
                <CardTitle className="text-rose-500">Danger Zone</CardTitle>
                <span className="text-xs text-slate-400">Irreversible account actions</span>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Deleting your account will permanently purge your QuantBharat rating (1,842), national rank standings, and persistent IDE code workspaces. This cannot be undone.
                </p>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => setIsDeleteModalOpen(true)}
                >
                  Delete Account Permanently
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Are you absolutely sure?"
        description="This action cannot be undone. Your quant rating and test history will be permanently deleted."
      >
        <div className="space-y-4 pt-2">
          <p className="text-xs text-rose-500 font-semibold">
            Warning: You will forfeit your AIR #14 national standing.
          </p>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={() => setIsDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                setIsDeleteModalOpen(false);
                logout();
                addToast('Account deleted. Hope to see you again in Bharat!', 'info');
                navigate('landing');
              }}
            >
              Confirm Account Deletion
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
