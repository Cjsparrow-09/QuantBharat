import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Mail, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { FAQS } from '../data/mockData';

export const HelpFaqPage = () => {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndices, setOpenIndices] = useState(new Set([0, 1]));

  const categories = ['All', 'Platform & Vision', 'Practice & Workspace', 'Account & Community', 'Technical'];

  const toggleAccordion = (idx) => {
    setOpenIndices(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch = 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full animate-in fade-in duration-200">
      {/* Header */}
      <div className="text-center space-y-3">
        <Badge variant="saffron" size="sm">Knowledge Base & FAQ</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Everything you need to know about the QuantBharat platform, our mathematical evaluation protocols, and All-India percentile benchmarks.
        </p>
      </div>

      {/* Search Bar */}
      <Input
        iconLeft={Search}
        placeholder="Search questions or keywords (e.g. workspace, benchmarks, GATE, rating)..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClear={() => setSearchQuery('')}
        className="text-sm h-11"
      />

      {/* Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-[#FF7A00] text-white shadow-glow-saffron'
                : 'bg-white dark:bg-[#0E1420] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordions */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="py-12 text-center text-xs text-slate-500">
            No FAQ entries matched "{searchQuery}". You can dispatch a question to our technical support team.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndices.has(idx);
            return (
              <Card key={idx} className="overflow-hidden transition-all duration-200">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-white/5 transition"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#FF7A00] uppercase font-bold">{faq.category}</span>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">{faq.q}</h3>
                  </div>
                  <div className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </Card>
            );
          })
        )}
      </div>

      {/* Still need help CTA */}
      <Card className="p-6 sm:p-8 text-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0E1420] dark:to-[#131A29] space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Still have questions or need technical support?</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Our engineering fellows at the Bengaluru R&D Lab are available to assist students, professors, and institutional research clubs.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Button variant="saffron" size="sm" iconLeft={Mail} onClick={() => navigate('contact')}>
            Dispatch Support Ticket
          </Button>
          <Button variant="outline" size="sm" iconLeft={MessageSquare} onClick={() => navigate('community')}>
            Ask in Community
          </Button>
        </div>
      </Card>
    </div>
  );
};
