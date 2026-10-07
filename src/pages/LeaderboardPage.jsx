import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  Trophy, 
  Medal, 
  Flame, 
  Star, 
  Users, 
  Building, 
  ArrowUpRight, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { Tabs } from '../components/ui/Tabs';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { LEADERBOARD_USERS } from '../data/mockData';

export const LeaderboardPage = () => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState('global');
  const [filterQuery, setFilterQuery] = useState('');

  const tabs = [
    { id: 'global', label: 'All-India National' },
    { id: 'weekly', label: 'Weekly Sprint' },
    { id: 'institutional', label: 'IITs, IISc & BITS League' },
    { id: 'corporate', label: 'Dalal Street Trading Desks' }
  ];

  const top3 = LEADERBOARD_USERS.slice(0, 3);
  const remaining = LEADERBOARD_USERS.slice(3);

  const filteredUsers = remaining.filter(u =>
    u.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    u.institution.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="amber" size="xs">Live National Standings</Badge>
            <span className="text-xs text-slate-400 font-mono">• Updated Every 15 Minutes</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            All-India Quantitative Leaderboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            India's most rigorous ranking of computational mathematics, quantitative finance, and low-latency systems intellect.
          </p>
        </div>

        <Button
          variant="saffron"
          size="md"
          iconLeft={Sparkles}
          onClick={() => navigate('practice')}
        >
          Compete in Today's Sprint
        </Button>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* TOP 3 PODIUM VISUAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 items-end">
        {/* Rank 2 (Silver) */}
        <div className="order-2 md:order-1 p-6 rounded-2xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 text-center space-y-3 relative shadow-sm">
          <div className="w-8 h-8 rounded-full bg-slate-300 text-slate-800 font-mono font-bold flex items-center justify-center mx-auto text-sm shadow">
            2
          </div>
          <img
            src={top3[1]?.avatar}
            alt={top3[1]?.name}
            className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-slate-300"
          />
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{top3[1]?.name}</h3>
            <p className="text-xs text-slate-400">{top3[1]?.institution}</p>
          </div>
          <div className="font-mono text-lg font-bold text-slate-900 dark:text-white">
            {top3[1]?.rating} <span className="text-xs font-normal text-slate-400">QB</span>
          </div>
          <Badge variant="neutral" size="xs">{top3[1]?.tier}</Badge>
        </div>

        {/* Rank 1 (Gold - Center & Elevated) */}
        <div className="order-1 md:order-2 p-8 rounded-3xl bg-gradient-to-b from-[#131A29] to-[#0E1420] border-2 border-[#FF7A00]/50 text-center space-y-3.5 relative shadow-glow-saffron -translate-y-2">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="px-3 py-1 rounded-full bg-[#FF7A00] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow">
              AIR #1 Champion
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-400 text-amber-950 font-mono font-black flex items-center justify-center mx-auto text-base shadow-lg mt-2">
            1
          </div>
          <img
            src={top3[0]?.avatar}
            alt={top3[0]?.name}
            className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-amber-400 shadow-xl"
          />
          <div>
            <h3 className="text-lg font-bold text-white">{top3[0]?.name}</h3>
            <p className="text-xs text-slate-400">{top3[0]?.institution}</p>
          </div>
          <div className="font-mono text-2xl font-black text-[#FF7A00]">
            {top3[0]?.rating} <span className="text-xs font-normal text-slate-400">QB</span>
          </div>
          <Badge variant="saffron" size="sm">{top3[0]?.tier}</Badge>
        </div>

        {/* Rank 3 (Bronze) */}
        <div className="order-3 md:order-3 p-6 rounded-2xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 text-center space-y-3 relative shadow-sm">
          <div className="w-8 h-8 rounded-full bg-amber-700 text-white font-mono font-bold flex items-center justify-center mx-auto text-sm shadow">
            3
          </div>
          <img
            src={top3[2]?.avatar}
            alt={top3[2]?.name}
            className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-amber-700"
          />
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{top3[2]?.name}</h3>
            <p className="text-xs text-slate-400">{top3[2]?.institution}</p>
          </div>
          <div className="font-mono text-lg font-bold text-slate-900 dark:text-white">
            {top3[2]?.rating} <span className="text-xs font-normal text-slate-400">QB</span>
          </div>
          <Badge variant="neutral" size="xs">{top3[2]?.tier}</Badge>
        </div>
      </div>

      {/* Leaderboard Table Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4">
        <div className="w-full sm:w-80">
          <Input
            iconLeft={Search}
            placeholder="Search quants or colleges..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </div>
        <span className="text-xs text-slate-400 font-mono">
          Showing ranked candidates #4 to #100
        </span>
      </div>

      {/* Main Leaderboard Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 text-slate-400">
                <th className="py-3 px-4 font-semibold font-mono">Rank</th>
                <th className="py-3 px-4 font-semibold">Quant Fellow</th>
                <th className="py-3 px-4 font-semibold">Institution / Cell</th>
                <th className="py-3 px-4 font-semibold font-mono">QB Rating</th>
                <th className="py-3 px-4 font-semibold font-mono">Solved</th>
                <th className="py-3 px-4 font-semibold font-mono">Streak</th>
                <th className="py-3 px-4 font-semibold text-right">Badge / Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
              {filteredUsers.map((user) => {
                const isCurrent = user.isCurrentUser;
                return (
                  <tr
                    key={user.rank}
                    className={`transition-colors ${
                      isCurrent
                        ? 'bg-[#FF7A00]/10 border-l-4 border-l-[#FF7A00] font-semibold text-slate-900 dark:text-white'
                        : 'hover:bg-slate-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold">
                      {isCurrent ? (
                        <span className="text-[#FF7A00]">#{user.rank} (You)</span>
                      ) : (
                        `#${user.rank}`
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-7 h-7 rounded-full object-cover border border-slate-300 dark:border-white/10"
                        />
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                      {user.institution}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white">
                      {user.rating}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-500">
                      {user.solved}
                    </td>
                    <td className="py-3 px-4 font-mono text-amber-500">
                      {user.streak}d 🔥
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Badge variant={isCurrent ? 'saffron' : 'neutral'} size="xs">
                        {user.badge}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
