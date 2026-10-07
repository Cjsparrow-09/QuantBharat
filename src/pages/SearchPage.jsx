import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  Search, 
  BookOpen, 
  Terminal, 
  MessageSquare, 
  User, 
  Clock, 
  TrendingUp, 
  X,
  ChevronRight
} from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Tabs } from '../components/ui/Tabs';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { EmptyState } from '../components/ui/EmptyState';
import { EXPLORE_TRACKS, PRACTICE_QUESTIONS, COMMUNITY_POSTS, LEADERBOARD_USERS } from '../data/mockData';

export const SearchPage = () => {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [recentSearches, setRecentSearches] = useState([
    'Black-Scholes Delta Hedging',
    'C++ Ring Buffer Latency',
    'GATE Data Science AI'
  ]);

  const popularSearches = [
    'Order Book FIFO',
    'Heston Volatility Model',
    'Singular Value Decomposition',
    'Modular Arithmetic Remainder',
    'IIT Bombay Quant Fellowship'
  ];

  const tabs = [
    { id: 'all', label: 'All Results' },
    { id: 'tracks', label: 'Tracks & Syllabi' },
    { id: 'practice', label: 'Practice Problems' },
    { id: 'community', label: 'Discussions' },
    { id: 'users', label: 'Quants & Users' }
  ];

  // Aggregated search results
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { tracks: [], practice: [], community: [], users: [] };

    const matchedTracks = EXPLORE_TRACKS.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q))
    );

    const matchedPractice = PRACTICE_QUESTIONS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.statement.toLowerCase().includes(q) ||
      p.track.toLowerCase().includes(q)
    );

    const matchedCommunity = COMMUNITY_POSTS.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.preview.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q))
    );

    const matchedUsers = LEADERBOARD_USERS.filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.institution.toLowerCase().includes(q) ||
      u.username.toLowerCase().includes(q)
    );

    return {
      tracks: matchedTracks,
      practice: matchedPractice,
      community: matchedCommunity,
      users: matchedUsers
    };
  }, [query]);

  const totalResultsCount =
    results.tracks.length +
    results.practice.length +
    results.community.length +
    results.users.length;

  const handleApplyQuery = (str) => {
    setQuery(str);
    if (!recentSearches.includes(str)) {
      setRecentSearches([str, ...recentSearches.slice(0, 4)]);
    }
  };

  const removeRecent = (idx, e) => {
    e.stopPropagation();
    setRecentSearches(recentSearches.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Search Bar */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Global Quant Search
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Search across all quantitative modules, mathematical derivations, practice problems, community posts, and Indian quants.
        </p>

        <div className="pt-2">
          <Input
            iconLeft={Search}
            placeholder="Search for formulas, topics, algorithms, or users... (e.g. SVD, Heston, C++20)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClear={() => setQuery('')}
            className="text-base h-12"
          />
        </div>
      </div>

      {/* Popular and Recent Suggestions */}
      {!query && (
        <div className="space-y-6 pt-2">
          {recentSearches.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Recent Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleApplyQuery(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-[#FF7A00] cursor-pointer transition"
                  >
                    <span>{item}</span>
                    <button onClick={(e) => removeRecent(idx, e)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#FF7A00]" /> Trending in Bharat
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleApplyQuery(item)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400 hover:text-[#FF7A00] transition"
                >
                  #{item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Results Display */}
      {query && (
        <div className="space-y-6">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="text-xs text-slate-400 font-mono">
            Found {totalResultsCount} results for "{query}"
          </div>

          {totalResultsCount === 0 ? (
            <EmptyState
              icon={Search}
              title="No results found"
              description={`We couldn't find any match for "${query}". Try searching with alternate mathematical keywords.`}
              actionText="Reset Search"
              onAction={() => setQuery('')}
            />
          ) : (
            <div className="space-y-6">
              {/* Tracks Section */}
              {(activeTab === 'all' || activeTab === 'tracks') && results.tracks.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#FF7A00]" /> Quantitative Tracks ({results.tracks.length})
                  </h3>
                  {results.tracks.map(t => (
                    <Card key={t.id} variant="interactive" onClick={() => navigate('explore')} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{t.description}</p>
                        </div>
                        <Badge variant="saffron" size="xs">{t.difficulty}</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Practice Questions Section */}
              {(activeTab === 'all' || activeTab === 'practice') && results.practice.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" /> Practice Challenges ({results.practice.length})
                  </h3>
                  {results.practice.map(p => (
                    <Card key={p.id} variant="interactive" onClick={() => navigate('practice')} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{p.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{p.statement}</p>
                        </div>
                        <Badge variant="neutral" size="xs">+{p.points} pts</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Community Posts Section */}
              {(activeTab === 'all' || activeTab === 'community') && results.community.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-400" /> Research Discussions ({results.community.length})
                  </h3>
                  {results.community.map(c => (
                    <Card key={c.id} variant="interactive" onClick={() => navigate('community')} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{c.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{c.preview}</p>
                        </div>
                        <span className="text-xs font-mono text-[#FF7A00]">{c.likes} upvotes</span>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Users Section */}
              {(activeTab === 'all' || activeTab === 'users') && results.users.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-400" /> Verified Quants ({results.users.length})
                  </h3>
                  {results.users.map(u => (
                    <Card key={u.rank} variant="interactive" onClick={() => navigate('leaderboard')} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-full object-cover" />
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{u.name}</h4>
                            <p className="text-xs text-slate-400">{u.institution}</p>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#FF7A00]">AIR #{u.rank}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
