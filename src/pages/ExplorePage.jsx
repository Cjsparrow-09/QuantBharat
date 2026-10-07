import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { 
  Search, 
  Compass, 
  Filter, 
  BookOpen, 
  Star, 
  Users, 
  Clock, 
  Bookmark, 
  BookmarkCheck, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { EmptyState } from '../components/ui/EmptyState';
import { CATEGORIES, EXPLORE_TRACKS } from '../data/mockData';

export const ExplorePage = () => {
  const { navigate } = useRouter();
  const { addToast } = useToast();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tracks');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [bookmarkedTracks, setBookmarkedTracks] = useState(new Set(['track-1']));

  const difficulties = ['All', 'Intermediate', 'Advanced', 'Hardcore / Olympiad'];

  const toggleBookmark = (trackId, e) => {
    e.stopPropagation();
    setBookmarkedTracks(prev => {
      const next = new Set(prev);
      if (next.has(trackId)) {
        next.delete(trackId);
        addToast('Removed from saved tracks', 'info');
      } else {
        next.add(trackId);
        addToast('Saved to your learning bookmarks', 'success');
      }
      return next;
    });
  };

  const filteredTracks = useMemo(() => {
    return EXPLORE_TRACKS.filter(track => {
      const matchesSearch = 
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All Tracks' || track.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || track.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.enrolledCount - a.enrolledCount;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="indigo" size="xs">Curated Syllabus</Badge>
          <span className="text-xs text-slate-400 font-mono">• Calibrated to Indian & Global Desks</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Explore Quantitative Tracks & Disciplines
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
          Browse comprehensive learning pathways engineered by professors from IITs, IISc, and veteran algorithmic traders.
        </p>
      </div>

      {/* Large Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex-1">
          <Input
            iconLeft={Search}
            placeholder="Search tracks by keyword, topic, or tags (e.g. SVD, HFT, Black-Scholes, C++20)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery('')}
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 px-3 rounded-lg bg-white dark:bg-[#0E1420] border border-slate-300 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
          >
            <option value="popular">Most Popular in Bharat</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-[#FF7A00] text-white shadow-glow-saffron'
                : 'bg-white dark:bg-[#0E1420] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Difficulty Filter Chips */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Difficulty:</span>
          {difficulties.map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
                selectedDifficulty === diff
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        <span className="font-mono text-slate-400">
          Showing {filteredTracks.length} tracks
        </span>
      </div>

      {/* Tracks Grid */}
      {filteredTracks.length === 0 ? (
        <EmptyState
          icon={Compass}
          title="No quantitative tracks found"
          description={`No courses matched your query "${searchQuery}". Try searching for another discipline or resetting your category filters.`}
          actionText="Clear Filters"
          onAction={() => {
            setSearchQuery('');
            setSelectedCategory('All Tracks');
            setSelectedDifficulty('All');
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track) => {
            const isBookmarked = bookmarkedTracks.has(track.id);
            return (
              <Card
                key={track.id}
                variant="interactive"
                onClick={() => navigate('workspace', { trackId: track.id })}
                className="flex flex-col justify-between group"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Top Row: Category & Bookmark */}
                  <div className="flex items-center justify-between">
                    <Badge variant={track.difficulty === 'Hardcore / Olympiad' ? 'rose' : 'saffron'} size="xs">
                      {track.difficulty}
                    </Badge>
                    <button
                      onClick={(e) => toggleBookmark(track.id, e)}
                      className="p-1.5 text-slate-400 hover:text-[#FF7A00] transition"
                      aria-label="Bookmark track"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-[#FF7A00]" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#FF7A00] transition line-clamp-2">
                      {track.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {track.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {track.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author Row */}
                  <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100 dark:border-white/5">
                    <img
                      src={track.author.avatar}
                      alt={track.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#FF7A00]/30"
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {track.author.name}
                      </span>
                      <span className="text-[10px] text-slate-400 truncate">
                        {track.author.role}
                      </span>
                    </div>
                  </div>

                  {/* Footer Stats & CTA */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {track.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {(track.enrolledCount / 1000).toFixed(1)}k Quants
                    </span>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full mt-2 group-hover:border-[#FF7A00]/50"
                    iconRight={ArrowRight}
                  >
                    Open Workspace Track
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
