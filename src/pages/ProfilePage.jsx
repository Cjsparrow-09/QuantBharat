import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { 
  User, 
  MapPin, 
  Calendar, 
  Building, 
  Award, 
  Flame, 
  Trophy, 
  CheckCircle2, 
  Bookmark, 
  Edit3, 
  ExternalLink,
  Code2,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';
import { Modal } from '../components/ui/Modal';
import { Input } from '../components/ui/Input';
import { ActivityHeatmap } from '../components/charts/ActivityHeatmap';
import { VelocityLineChart } from '../components/charts/VelocityLineChart';

export const ProfilePage = () => {
  const { navigate } = useRouter();
  const { user, updateProfile } = useAuth();
  const { addToast } = useToast();

  const [activeTab, setActiveTab] = useState('activity');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Edit form state
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [institution, setInstitution] = useState(user?.institution || '');
  const [location, setLocation] = useState(user?.location || '');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile({ name, bio, institution, location });
    setIsEditModalOpen(false);
    addToast('Profile updated successfully!', 'success');
  };

  const tabs = [
    { id: 'activity', label: 'Activity & Velocity' },
    { id: 'solved', label: 'Solved Problems (142)' },
    { id: 'badges', label: 'Earned Badges (4)' },
    { id: 'bookmarks', label: 'Saved Tracks' }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* 1. PROFILE HEADER CARD */}
      <Card className="p-6 sm:p-8 bg-gradient-to-br from-white via-white to-slate-50 dark:from-[#0E1420] dark:via-[#0E1420] dark:to-[#131A29]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-24 h-24 rounded-2xl object-cover border-2 border-[#FF7A00]/40 shadow-glow-saffron"
            />
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {user?.name}
                </h1>
                <Badge variant="saffron" size="xs">
                  AIR #{user?.nationalRank} Bharat
                </Badge>
                <Badge variant="emerald" size="xs">
                  {user?.tier}
                </Badge>
              </div>

              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                @{user?.username} • {user?.role}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" /> {user?.institution}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {user?.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Member since {user?.joinDate}
                </span>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            iconLeft={Edit3}
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit Profile
          </Button>
        </div>

        {/* Bio */}
        {user?.bio && (
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-5 pt-5 border-t border-slate-200 dark:border-white/5 leading-relaxed">
            {user?.bio}
          </p>
        )}
      </Card>

      {/* 2. PROFILE QUICK STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <span className="text-[10px] font-mono uppercase text-slate-400">QB Rating</span>
          <div className="text-2xl font-black font-mono text-[#FF7A00] mt-1">{user?.rating}</div>
          <span className="text-[10px] text-emerald-500">Top 2.4% All-India</span>
        </Card>
        <Card className="p-4 text-center">
          <span className="text-[10px] font-mono uppercase text-slate-400">Problems Solved</span>
          <div className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">{user?.solvedCount}</div>
          <span className="text-[10px] text-slate-400">Across 8 disciplines</span>
        </Card>
        <Card className="p-4 text-center">
          <span className="text-[10px] font-mono uppercase text-slate-400">Active Streak</span>
          <div className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">{user?.streakDays}d 🔥</div>
          <span className="text-[10px] text-amber-500">Consecutive days</span>
        </Card>
        <Card className="p-4 text-center">
          <span className="text-[10px] font-mono uppercase text-slate-400">Community Proofs</span>
          <div className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">{user?.contributions}</div>
          <span className="text-[10px] text-cyan-400">Answers & reviews</span>
        </Card>
      </div>

      {/* 3. TABS */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* 4. TAB CONTENTS */}
      {activeTab === 'activity' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Yearly Quantitative Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ActivityHeatmap />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rating Acceleration</CardTitle>
            </CardHeader>
            <CardContent>
              <VelocityLineChart />
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'solved' && (
        <div className="space-y-3">
          {[
            { id: 'q-101', title: 'Delta Hedging Error Under Discrete Rebalancing in Black-Scholes', track: 'Quantitative Finance', points: '+45 pts', date: 'Today' },
            { id: 'q-102', title: 'Singular Value Sensitivity under Low-Rank Perturbation', track: 'Linear Algebra & AI', points: '+40 pts', date: 'Yesterday' },
            { id: 'q-103', title: 'Martingale Stopping Time in Gambler\'s Ruin with Drift', track: 'Deep Probability', points: '+35 pts', date: '3 days ago' },
            { id: 'q-104', title: 'Diophantine Sieve and Modular Inverses', track: 'CAT 99th Quant', points: '+30 pts', date: '4 days ago' },
            { id: 'ws-1', title: 'Order Book Matching Engine & Limit Order Queue Simulator', track: 'High-Performance C++', points: '+50 pts', date: '5 days ago' }
          ].map((item, idx) => (
            <Card key={idx} variant="interactive" className="p-4" onClick={() => navigate('workspace')}>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  </div>
                  <div className="text-xs text-slate-400 font-mono pl-6">
                    {item.track} • Solved {item.date}
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#FF7A00]">{item.points}</span>
              </div>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'badges' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {user?.badges?.map((badge) => (
            <Card key={badge.id} className="p-5 text-center space-y-2 border-[#FF7A00]/20">
              <div className="text-3xl">{badge.icon}</div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">{badge.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{badge.desc}</p>
              <Badge variant="saffron" size="xs">Verified Achievement</Badge>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'bookmarks' && (
        <div className="space-y-3">
          <Card className="p-5 flex items-center justify-between" onClick={() => navigate('workspace')}>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Algorithmic Market Making & Order Book Dynamics
              </h3>
              <p className="text-xs text-slate-400 mt-1">14 Weeks • 64 Modules • 62% in progress</p>
            </div>
            <Button variant="saffron" size="sm">Resume</Button>
          </Card>
        </div>
      )}

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Quantitative Profile"
        description="Update your public information, university affiliation, and research interests."
      >
        <form onSubmit={handleSaveProfile} className="space-y-4">
          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Affiliated College / Research Lab / Desk"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
          <Input
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Input
            label="Quantitative Bio & Research Focus"
            as="textarea"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="saffron" size="sm" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
