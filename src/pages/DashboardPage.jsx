import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useAuth } from '../context/AuthContext';
import { 
  Flame, 
  Trophy, 
  TrendingUp, 
  BookOpen, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChevronRight,
  Target,
  Zap,
  Play
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ActivityHeatmap } from '../components/charts/ActivityHeatmap';
import { VelocityLineChart } from '../components/charts/VelocityLineChart';
import { CategoryBarChart } from '../components/charts/CategoryBarChart';
import { EXPLORE_TRACKS } from '../data/mockData';

export const DashboardPage = () => {
  const { navigate } = useRouter();
  const { user } = useAuth();

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* 1. WELCOME HERO BANNER */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#0E1420] via-[#131A29] to-[#0E1420] border border-slate-200 dark:border-white/10 p-6 sm:p-8 overflow-hidden shadow-subtle">
        {/* Subtle orange glow in corner */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7A00]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="saffron" size="xs">Bharat Diamond Tier</Badge>
              <span className="text-xs text-slate-400 font-mono">• IIT Madras AI Lab</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Good day, {user?.name || 'Arjun'} 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              Your active Quant Rating is <strong className="text-slate-900 dark:text-white font-mono">{user?.rating || 1842}</strong>. You're currently ranked <strong className="text-[#FF7A00] font-mono">#{user?.nationalRank || 14} All-India</strong>. Maintain your 18-day streak to unlock the Grandmaster Sprint benchmark!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="saffron"
              size="md"
              iconLeft={Terminal}
              onClick={() => navigate('workspace')}
            >
              Open IDE Workspace
            </Button>
            <Button
              variant="secondary"
              size="md"
              iconLeft={BookOpen}
              onClick={() => navigate('practice')}
            >
              Resume Practice
            </Button>
          </div>
        </div>
      </div>

      {/* 2. CORE STATISTICS CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">QB Quant Rating</span>
              <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">{user?.rating || 1842}</div>
              <div className="text-[11px] font-medium text-emerald-500 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +42 pts this week
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">All-India Rank</span>
              <div className="text-2xl font-black font-mono text-[#FF7A00]">#{user?.nationalRank || 14}</div>
              <div className="text-[11px] font-medium text-slate-400">
                Top 2.4% in Bharat
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Daily Streak</span>
              <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">{user?.streakDays || 18} Days</div>
              <div className="text-[11px] font-medium text-amber-500">
                Personal best streak! 🔥
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Problems Solved</span>
              <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">{user?.solvedCount || 142} <span className="text-xs font-normal text-slate-400">/ 200</span></div>
              <div className="text-[11px] font-medium text-emerald-500">
                71% syllabus completed
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Target className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 3. CONTINUE LEARNING ACTIVE TRACK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="border-l-4 border-l-[#FF7A00]">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF7A00] font-bold">Resume In-Progress Module</span>
                <CardTitle className="mt-1">Algorithmic Market Making & Order Book Dynamics</CardTitle>
              </div>
              <Badge variant="emerald" size="xs">62% Completed</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Current active unit: <strong>Module 41: Order Queue FIFO Execution & Cache Lines</strong>. Learn how to eliminate false sharing on multi-threaded ring buffers.
              </p>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Progress: 41 of 64 Modules</span>
                  <span className="text-[#FF7A00] font-bold">62%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-[#FF7A00] transition-all duration-500" style={{ width: '62%' }} />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" /> Next session: ~25 mins
                </div>
                <Button
                  variant="saffron"
                  size="sm"
                  iconLeft={Play}
                  onClick={() => navigate('workspace')}
                >
                  Continue Coding
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Activity Heatmap Grid */}
          <Card>
            <CardHeader>
              <CardTitle>Quant Contribution Heatmap</CardTitle>
              <span className="text-xs text-slate-400">Mathematical problem solving and algorithm submissions across Bharat</span>
            </CardHeader>
            <CardContent>
              <ActivityHeatmap />
            </CardContent>
          </Card>

          {/* Velocity Progress Curve */}
          <Card>
            <CardHeader>
              <CardTitle>Rating Progression Velocity</CardTitle>
              <span className="text-xs text-slate-400">Weekly trajectory calibrated to All-India top percentiles</span>
            </CardHeader>
            <CardContent>
              <VelocityLineChart />
            </CardContent>
          </Card>
        </div>

        {/* Right 4 Columns: Diagnostic breakdown & Recent Activity */}
        <div className="lg:col-span-4 space-y-6">
          {/* Diagnostic breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Discipline Mastery</CardTitle>
              <span className="text-xs text-slate-400">Accuracy by mathematical field</span>
            </CardHeader>
            <CardContent>
              <CategoryBarChart />
            </CardContent>
          </Card>

          {/* Recommended Next Challenges */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended For You</CardTitle>
              <span className="text-xs text-slate-400">Based on your recent accuracy</span>
            </CardHeader>
            <CardContent className="space-y-3 p-4">
              {[
                { title: 'Heston Volatility Calibration', track: 'Stochastics', points: '+35 pts', difficulty: 'Hardcore' },
                { title: 'Eigenvalue Perturbation in SVD', track: 'AI Linear Algebra', points: '+25 pts', difficulty: 'Advanced' },
                { title: 'NSE Tick Ring Buffer Mutex', track: 'Low-Latency C++', points: '+40 pts', difficulty: 'Advanced' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate('workspace')}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition border border-slate-200 dark:border-white/5 cursor-pointer flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">{item.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{item.track} • {item.difficulty}</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#FF7A00]">{item.points}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <span className="text-xs text-slate-400">Latest milestones</span>
            </CardHeader>
            <CardContent className="p-4 space-y-3.5">
              {[
                { text: 'Solved Delta Hedging Error Under Discrete Rebalancing', time: '2 hours ago', icon: CheckCircle2, color: 'text-emerald-500' },
                { text: 'Earned "18-Day Inferno" Streak Badge', time: '1 day ago', icon: Flame, color: 'text-amber-500' },
                { text: 'Submitted test solution for C++ Lock-free Order Queue', time: '2 days ago', icon: Terminal, color: 'text-[#FF7A00]' },
                { text: 'Ranked #14 All-India in Weekly Sprint', time: '3 days ago', icon: Trophy, color: 'text-purple-400' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.color}`} />
                    <div className="flex-1">
                      <p className="text-slate-800 dark:text-slate-200 leading-snug">{item.text}</p>
                      <span className="text-[10px] text-slate-400 font-mono">{item.time}</span>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
