import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Code2, 
  BrainCircuit, 
  Trophy, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  BookOpen, 
  Flame, 
  ExternalLink,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';

export const LandingPage = () => {
  const { navigate } = useRouter();
  const [activePreviewTab, setActivePreviewTab] = useState('engine');

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#FF7A00]/15 to-[#6366F1]/10 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Top announcement badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
            <span>QuantBharat 2.0 is Live</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-[#FF7A00] flex items-center hover:underline cursor-pointer" onClick={() => navigate('workspace')}>
              Try Sub-Microsecond Workspace <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            The Quantitative Intelligence Engine for{' '}
            <span className="bg-gradient-to-r from-[#FF7A00] via-[#FF9E3B] to-[#FF5500] bg-clip-text text-transparent">
              Modern Bharat
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            QuantBharat is India's sovereign platform for high-frequency trading mathematics, stochastic differential equations, low-latency C++23 systems, and national benchmarks from IITs to Dalal Street.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Button
              variant="saffron"
              size="lg"
              onClick={() => navigate('signup')}
              iconRight={ArrowRight}
              className="w-full sm:w-auto"
            >
              Get Started for Free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('explore')}
              className="w-full sm:w-auto"
            >
              Explore Tracks & Syllabus
            </Button>
          </div>

          {/* Micro assurances */}
          <div className="flex items-center gap-6 pt-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Free Community Tier
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Python & C++20 Sandbox
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> All-India Percentiles
            </span>
          </div>
        </div>

        {/* 2. REALISTIC PRODUCT PREVIEW */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Decorative floating pills */}
          <div className="hidden lg:flex absolute -top-5 -left-6 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 shadow-xl animate-float-slow">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-slate-400">NSE Tick Engine Latency</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">420 ns (P99.9)</div>
            </div>
          </div>

          <div className="hidden lg:flex absolute -bottom-5 -right-6 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 shadow-xl">
            <Trophy className="w-4 h-4 text-[#FF7A00]" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-slate-400">All-India Standings</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">AIR #14 IIT Madras</div>
            </div>
          </div>

          {/* Preview Window Frame */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0E1420] shadow-2xl overflow-hidden">
            {/* Top window title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-[#080B11]/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">quantbharat-workspace://nse-orderbook-engine</span>
              </div>
              <div className="flex gap-1.5 text-xs">
                <button
                  onClick={() => setActivePreviewTab('engine')}
                  className={`px-2.5 py-1 rounded-md transition ${activePreviewTab === 'engine' ? 'bg-[#FF7A00]/20 text-[#FF7A00] font-semibold' : 'text-slate-500'}`}
                >
                  OrderBook Engine
                </button>
                <button
                  onClick={() => setActivePreviewTab('stochastics')}
                  className={`px-2.5 py-1 rounded-md transition ${activePreviewTab === 'stochastics' ? 'bg-[#FF7A00]/20 text-[#FF7A00] font-semibold' : 'text-slate-500'}`}
                >
                  Heston PDE Model
                </button>
                <button
                  onClick={() => setActivePreviewTab('benchmark')}
                  className={`px-2.5 py-1 rounded-md transition ${activePreviewTab === 'benchmark' ? 'bg-[#FF7A00]/20 text-[#FF7A00] font-semibold' : 'text-slate-500'}`}
                >
                  AIR Benchmark
                </button>
              </div>
            </div>

            {/* Inner Content Preview */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
              {/* Left problem definition pane */}
              <div className="md:col-span-5 p-5 border-r border-slate-100 dark:border-white/10 flex flex-col justify-between bg-slate-50/50 dark:bg-[#080B11]/30 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="saffron" size="xs">Dalal Street HFT Track</Badge>
                    <Badge variant="neutral" size="xs">C++20 / Python</Badge>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Limit Order Book & Queue Dynamics
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    Process continuous market feeds. Ensure price-time FIFO execution across price ladders while minimizing CPU cache line invalidations.
                  </p>
                  <div className="mt-4 p-3 rounded-lg bg-white dark:bg-[#131A29] border border-slate-200 dark:border-white/5 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                    <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Spread Formulation</div>
                    Spread(t) = Ask_min(t) - Bid_max(t)
                    <br />
                    ΔInventory = Q_filled - Q_target
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-white/5">
                  <div className="text-[11px] text-emerald-500 font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> 4/4 Test Cases Passing
                  </div>
                  <Button variant="outline" size="sm" onClick={() => navigate('workspace')}>
                    Launch Full IDE
                  </Button>
                </div>
              </div>

              {/* Right Code / Execution Output Pane */}
              <div className="md:col-span-7 p-5 flex flex-col justify-between font-mono text-xs bg-white dark:bg-[#0B0F17] text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-100 dark:border-white/5">
                    <span>main_matching_engine.py</span>
                    <span className="text-[#FF7A00]">Python 3.12 (SIMD Vectorized)</span>
                  </div>
                  <pre className="text-slate-800 dark:text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
                    <code>{`class OrderBook:
    def add_limit_order(self, order: Order) -> List[Trade]:
        # Price-Time FIFO Execution
        while self.best_ask and order.price >= self.best_ask:
            trade = self.execute_match(order, self.asks[self.best_ask][0])
            self.trades.append(trade)
        return self.trades

# Benchmark against NSE Tick Data 2026
engine = OrderBook()
engine.load_l2_feed("NSE_NIFTY_FUT_TICKS.bin")`}</code>
                  </pre>
                </div>

                {/* Console Output bar */}
                <div className="mt-4 p-3 rounded-lg bg-slate-900 text-slate-300 text-[11px] border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
                    <span>EXECUTION SUMMARY</span>
                    <span className="text-emerald-400">PASSED</span>
                  </div>
                  <div className="text-emerald-400">✓ 100,000 orders matched in 41.2 ms (2.4M ops/sec)</div>
                  <div className="text-slate-400">Memory footprint: 1.8 MB | Zero page faults</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST & SOCIAL PROOF */}
      <section className="border-y border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-[#0E1420]/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#FF7A00]">120K+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Indian Quants & Engineers</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white">4.8M+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Problems Solved & Compiled</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#10B981]">99.4%</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Benchmark Calibration Accuracy</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#6366F1]">40+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">IIT, IISc & Dalal St Hubs</div>
          </div>
        </div>
      </section>

      {/* 4. PROBLEM -> SOLUTION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="saffron" size="sm" className="mb-3">Why Existing Platforms Fall Short</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Transitioning Bharat From Service IT to Quantitative Supremacy
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            The world's highest-value algorithmic problems require continuous mathematical rigor, low-latency architectures, and deep stochastic insight—not generic leetcode regurgitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: The Outdated Model */}
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-500 font-semibold text-sm mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                THE OLD PARADIGM
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Generic Coding & Memorized Solutions
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Rote memorization of basic CRUD arrays and trees without continuous mathematics or calculus foundations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Zero exposure to real financial microstructure, order book dynamics, or jump-diffusion stochastic processes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>Indian engineering students left with fragmented tutorials without national ranking calibration against IIT/IISc peers.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-500/10 text-xs text-rose-500 font-medium">
              Result: Inability to crack elite global quant hedge funds or frontier AI research labs.
            </div>
          </div>

          {/* Right: The QuantBharat Standard */}
          <div className="rounded-2xl border border-[#FF7A00]/30 bg-[#FF7A00]/5 p-6 sm:p-8 flex flex-col justify-between shadow-glow-saffron">
            <div>
              <div className="flex items-center gap-2 text-[#FF7A00] font-semibold text-sm mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />
                THE QUANTBHARAT BREAKTHROUGH
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Sovereign Quantitative Rigor & Systems
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Dual code and LaTeX mathematical derivations evaluated side-by-side with step-by-step proofs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Sub-microsecond C++20 and Python sandbox tailored for Dalal Street NSE and global market microstructure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>All-India percentile rankings calibrated to GATE DA, CAT 99.9th percentile, and premier algorithmic benchmarks.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#FF7A00]/20 flex items-center justify-between">
              <span className="text-xs text-[#FF7A00] font-semibold">Calibrated for Tier-1 Quant Excellence</span>
              <Button variant="saffron" size="sm" onClick={() => navigate('practice')}>
                Take Diagnostic Test
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-slate-50/50 dark:bg-[#0E1420]/30 rounded-3xl border border-slate-200/50 dark:border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="indigo" size="sm" className="mb-3">Engineered For Precision</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            End-to-End Quantitative Competence
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Every module is crafted by veterans from top Indian research universities and high-frequency trading desks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="interactive" onClick={() => navigate('workspace')}>
            <CardContent className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Sub-Microsecond Systems</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Learn cache-line alignment, zero-copy socket programming, SIMD AVX-512, and kernel bypass drivers for NSE market feeds.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#FF7A00] flex items-center gap-1">
                Explore C++ Architecture <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </CardContent>
          </Card>

          <Card variant="interactive" onClick={() => navigate('explore')}>
            <CardContent className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Stochastics & Volatility</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Itô’s Lemma, Heston stochastic volatility surfaces, jump-diffusions, and Monte Carlo numerical pricing for NIFTY options.
              </p>
              <div className="pt-2 text-xs font-semibold text-indigo-400 flex items-center gap-1">
                View Stochastic Modules <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </CardContent>
          </Card>

          <Card variant="interactive" onClick={() => navigate('practice')}>
            <CardContent className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Interactive Practice Engine</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Timed, diagnostic question engine with immediate mathematical derivations, KaTeX notation, and percentile benchmarks.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                Start Timed Test <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </CardContent>
          </Card>

          <Card variant="interactive" onClick={() => navigate('leaderboard')}>
            <CardContent className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">All-India Leaderboard</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Compete against quants from IIT Bombay, IISc, BITS, and premier trading groups with transparent ratings and achievement tiers.
              </p>
              <div className="pt-2 text-xs font-semibold text-amber-400 flex items-center gap-1">
                View National Rankings <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </CardContent>
          </Card>

          <Card variant="interactive" onClick={() => navigate('community')}>
            <CardContent className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Vibrant Research Community</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Peer reviews on research papers, Dalal Street market anomalies, GATE DA questions, and high-frequency systems architecture.
              </p>
              <div className="pt-2 text-xs font-semibold text-cyan-400 flex items-center gap-1">
                Join Community Discussions <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </CardContent>
          </Card>

          <Card variant="interactive" onClick={() => navigate('results')}>
            <CardContent className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Percentile Diagnostic Engine</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Granular diagnosis of mathematical strengths and weaknesses across 8 sub-disciplines with predictive national rank estimates.
              </p>
              <div className="pt-2 text-xs font-semibold text-purple-400 flex items-center gap-1">
                Inspect Analytics Model <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. HOW IT WORKS TIMELINE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" size="sm" className="mb-3">The Protocol</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            How QuantBharat Elevates Your Competence
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            A structured four-phase journey from mathematical foundations to sovereign execution mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { step: '01', title: 'Create Account & Benchmark', desc: 'Take our calibrated 15-minute diagnostic test to establish your initial Bharat Quant Rating (QB Score).' },
            { step: '02', title: 'Explore Curated Pathways', desc: 'Select focused tracks: Market Microstructure, GATE DA Math, CAT 99th Quant, or High-Performance C++20.' },
            { step: '03', title: 'Code & Derive in Workspace', desc: 'Solve real algorithmic problems with integrated Python/C++ test suites and mathematical validation.' },
            { step: '04', title: 'Climb National Ranks', desc: 'Track your weekly percentile velocity, earn verified badges, and unlock direct institutional recruitment.' }
          ].map((item, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 flex flex-col justify-between text-left">
              <div>
                <div className="text-3xl font-mono font-black text-[#FF7A00]/40 mb-3">{item.step}</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] font-mono text-slate-400">
                Phase {item.step} Protocol
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY QUANTBHARAT COMPARISON */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-slate-50/50 dark:bg-[#0E1420]/30 rounded-3xl border border-slate-200/50 dark:border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="saffron" size="sm" className="mb-3">Standard of Excellence</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Built Different. Built For Bharat.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 text-slate-400">
                <th className="py-4 px-4 font-semibold">Capability / Standard</th>
                <th className="py-4 px-4 font-semibold text-rose-500">Generic Coding Portals</th>
                <th className="py-4 px-4 font-semibold text-amber-500">Foreign MOOCs</th>
                <th className="py-4 px-4 font-bold text-[#FF7A00] bg-[#FF7A00]/10 rounded-t-lg">QuantBharat Platform</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">Microstructure & NSE Order Feeds</td>
                <td className="py-3.5 px-4 text-slate-400">None</td>
                <td className="py-3.5 px-4 text-slate-400">Theoretical US Equities only</td>
                <td className="py-3.5 px-4 font-bold text-emerald-400 bg-[#FF7A00]/5">Native NSE/Dalal St Tick Data Simulator</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">Mathematical Proof & Formula Derivations</td>
                <td className="py-3.5 px-4 text-slate-400">None (Code only)</td>
                <td className="py-3.5 px-4 text-slate-400">Passive video lectures</td>
                <td className="py-3.5 px-4 font-bold text-emerald-400 bg-[#FF7A00]/5">Interactive LaTeX + Python/C++ validation</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">All-India Institutional Benchmark (AIR)</td>
                <td className="py-3.5 px-4 text-slate-400">Global generic rating</td>
                <td className="py-3.5 px-4 text-slate-400">No percentile rankings</td>
                <td className="py-3.5 px-4 font-bold text-emerald-400 bg-[#FF7A00]/5">IITs, IISc & Dalal St Calibrated Percentiles</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">Sub-Microsecond C++20/23 Systems</td>
                <td className="py-3.5 px-4 text-slate-400">Standard slow runtimes</td>
                <td className="py-3.5 px-4 text-slate-400">Python-only slides</td>
                <td className="py-3.5 px-4 font-bold text-emerald-400 bg-[#FF7A00]/5">Cache-aware, SIMD & Kernel bypass tracks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. FINAL HIGH-IMPACT CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0E1420] to-[#080B11] border border-[#FF7A00]/40 shadow-glow-saffron space-y-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00] mx-auto shadow-inner">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Build your knowledge. Measure your progress. Grow with QuantBharat.
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Join thousands of ambitious students, researchers, and engineers who are reshaping quantitative technology across Bharat.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              variant="saffron"
              size="lg"
              onClick={() => navigate('signup')}
              iconRight={ArrowRight}
            >
              Get Started Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('dashboard')}
            >
              Launch Platform Dashboard
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
