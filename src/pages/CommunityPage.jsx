import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { 
  MessageSquare, 
  ThumbsUp, 
  Eye, 
  PlusCircle, 
  Search, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  Share2,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { COMMUNITY_POSTS } from '../data/mockData';

export const CommunityPage = () => {
  const { navigate } = useRouter();
  const { addToast } = useToast();

  const [posts, setPosts] = useState(COMMUNITY_POSTS);
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New post modal state
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTag, setNewTag] = useState('Quantitative Finance');

  const tags = [
    'All',
    'High-Performance C++',
    'Quantitative Finance',
    'GATE DA',
    'CAT Quant',
    'Options Expiry',
    'Low Latency'
  ];

  const handleUpvote = (postId, e) => {
    e.stopPropagation();
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const hasUpvoted = p.hasUpvoted;
        return {
          ...p,
          likes: hasUpvoted ? p.likes - 1 : p.likes + 1,
          hasUpvoted: !hasUpvoted
        };
      }
      return p;
    }));
    addToast('Post feedback recorded', 'info');
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) {
      addToast('Please provide a title and explanation for your question.', 'warning');
      return;
    }

    const created = {
      id: `post-${Date.now()}`,
      author: {
        name: 'Arjun Sharma',
        username: 'arjun_quant',
        institution: 'IIT Madras (Industrial AI Lab)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        verified: true
      },
      title: newTitle,
      preview: newContent,
      tags: [newTag, 'Bharat Tech'],
      likes: 1,
      comments: 0,
      views: 12,
      timestamp: 'Just now'
    };

    setPosts([created, ...posts]);
    setIsModalOpen(false);
    setNewTitle('');
    setNewContent('');
    addToast('Question published to the QuantBharat community!', 'success');
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.preview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="cyan" size="xs">Peer Research & Q&A</Badge>
            <span className="text-xs text-slate-400 font-mono">• 12,400+ Active Indian Quants</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            QuantBharat Research & Community Forum
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Collaborative knowledge exchange on market microstructure, continuous mathematics, and high-performance computing.
          </p>
        </div>

        <Button
          variant="saffron"
          size="md"
          iconLeft={PlusCircle}
          onClick={() => setIsModalOpen(true)}
        >
          Ask a Question
        </Button>
      </div>

      {/* Search and Tags */}
      <div className="space-y-3">
        <Input
          iconLeft={Search}
          placeholder="Search research questions, C++ architectures, or proofs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedTag === tag
                  ? 'bg-[#FF7A00] text-white shadow-glow-saffron'
                  : 'bg-white dark:bg-[#0E1420] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} variant="interactive" className="p-6">
            <div className="space-y-3.5">
              {/* Top Author Line */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-[#FF7A00]/40"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {post.author.name}
                      </span>
                      {post.author.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {post.author.institution} • {post.timestamp}
                    </div>
                  </div>
                </div>

                {post.featured && (
                  <Badge variant="saffron" size="xs">Trending in Bharat</Badge>
                )}
              </div>

              {/* Title & Preview */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white hover:text-[#FF7A00] transition">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  {post.preview}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Action bar: Likes, Comments, Views, Share */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-4">
                  <button
                    onClick={(e) => handleUpvote(post.id, e)}
                    className={`flex items-center gap-1.5 transition ${
                      post.hasUpvoted ? 'text-[#FF7A00] font-bold' : 'hover:text-[#FF7A00]'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments} Answers</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>{post.views} views</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    addToast('Post link copied to clipboard', 'info');
                  }}
                  className="hover:text-slate-900 dark:hover:text-white transition"
                  title="Share post"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Ask Question Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Ask a Quantitative or Systems Question"
        description="Share your mathematical puzzle, market microstructure anomaly, or C++ architecture question with Bharat's quantitative minds."
        maxWidth="lg"
      >
        <form onSubmit={handleCreatePost} className="space-y-4">
          <Input
            label="Question Title"
            placeholder="e.g. How to prevent CPU cache thrashing during NSE Level-3 order book replay?"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Primary Discipline Tag
            </label>
            <select
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="w-full h-10 px-3 rounded-lg bg-white dark:bg-[#080B11] border border-slate-300 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
            >
              <option value="Quantitative Finance">Quantitative Finance & Greeks</option>
              <option value="High-Performance C++">High-Performance C++20/23</option>
              <option value="GATE DA">GATE Data Science & AI</option>
              <option value="CAT Quant">CAT 99th Percentile Quant</option>
              <option value="Deep Probability">Deep Probability & Martingales</option>
            </select>
          </div>

          <Input
            label="Detailed Explanation / Mathematical Context"
            as="textarea"
            rows={5}
            placeholder="Describe your derivation, the formulas used, code snippets, or system bottleneck..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            required
          />

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="saffron" size="sm" type="submit">
              Publish Question
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
