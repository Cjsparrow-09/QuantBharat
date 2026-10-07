import React from 'react';
import { Logo } from './Navbar';
import { useRouter } from '../../context/RouterContext';
import { Github, Twitter, Linkedin, Heart, Shield, Terminal } from 'lucide-react';

export const Footer = () => {
  const { navigate } = useRouter();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#06080E] text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              QuantBharat is India's sovereign technology platform for quantitative finance, computational mathematics, low-latency systems engineering, and all-India competitive benchmarks.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono text-slate-500">Systems Operational • Dalal St & Global Feeds 99.98%</span>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('workspace')} className="hover:text-[#FF7A00] transition">
                  Quant Workspace
                </button>
              </li>
              <li>
                <button onClick={() => navigate('practice')} className="hover:text-[#FF7A00] transition">
                  Practice Mode
                </button>
              </li>
              <li>
                <button onClick={() => navigate('explore')} className="hover:text-[#FF7A00] transition">
                  Explore Tracks
                </button>
              </li>
              <li>
                <button onClick={() => navigate('results')} className="hover:text-[#FF7A00] transition">
                  Analytics & Percentile
                </button>
              </li>
              <li>
                <button onClick={() => navigate('leaderboard')} className="hover:text-[#FF7A00] transition">
                  All-India Leaderboard
                </button>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('about')} className="hover:text-[#FF7A00] transition">
                  About QuantBharat
                </button>
              </li>
              <li>
                <button onClick={() => navigate('community')} className="hover:text-[#FF7A00] transition">
                  Community Forum
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-[#FF7A00] transition">
                  Contact & Hubs
                </button>
              </li>
              <li>
                <span className="text-slate-400">Careers (Bengaluru R&D)</span>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono">
              Resources & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('help')} className="hover:text-[#FF7A00] transition">
                  Help & FAQs
                </button>
              </li>
              <li>
                <button onClick={() => navigate('search')} className="hover:text-[#FF7A00] transition">
                  Global Search
                </button>
              </li>
              <li>
                <span className="text-slate-400">Privacy Policy</span>
              </li>
              <li>
                <span className="text-slate-400">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} QuantBharat Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with precision in Bharat</span>
            <div className="flex items-center gap-0.5">
              <span className="w-2.5 h-1.5 rounded-sm bg-[#FF7A00]" />
              <span className="w-2.5 h-1.5 rounded-sm bg-white border border-slate-300 dark:border-none" />
              <span className="w-2.5 h-1.5 rounded-sm bg-[#10B981]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
