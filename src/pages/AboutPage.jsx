import React from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  ShieldCheck, 
  Target, 
  Cpu, 
  BrainCircuit, 
  Sparkles, 
  Award, 
  Users, 
  ArrowRight,
  TrendingUp,
  Building
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';

export const AboutPage = () => {
  const { navigate } = useRouter();

  const values = [
    {
      title: 'Continuous Rigor Over Rote Recall',
      desc: 'We refuse superficial leetcode rote questions. Every challenge requires continuous mathematics, measure-theoretic logic, or algorithmic verification.',
      icon: BrainCircuit
    },
    {
      title: 'Sub-Microsecond Systems Mastery',
      desc: 'Real high-frequency algorithmic finance happens in hardware registers, L1/L2 caches, and lock-free C++ queues. We teach systems at the metal.',
      icon: Cpu
    },
    {
      title: 'Sovereign Indian Technological Benchmarks',
      desc: 'Our evaluation models are directly calibrated against the rigorous standards of IISc, IITs, GATE Data Science, and Dalal Street quantitative desks.',
      icon: Target
    },
    {
      title: 'Merit-Driven Open Community',
      desc: 'Whether you study at an IIT in a tier-1 metro or self-learn in a rural district of Bharat, your ability to solve differential equations and write fast algorithms is your only passport.',
      icon: Users
    }
  ];

  const council = [
    {
      name: 'Dr. Vikramaditya Rao',
      role: 'Head of High-Frequency Infrastructure',
      affil: 'Ex-Managing Director, Global HFT • IIT Madras',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Prof. Ananya Sen',
      role: 'Chair of Mathematical Foundations',
      affil: 'Department of Mathematics, IISc Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Karan Singhal',
      role: 'Lead, AI & Spectral Methods',
      affil: 'Silver Medalist, IIT Bombay • Frontier AI Fellow',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-200">
      {/* 1. VISION HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="saffron" size="sm">Our Mission & Ethos</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Powering India’s Next Generation of Quantitative Minds
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          QuantBharat was established to bridge the vast gap between conventional IT computer science curricula and the ruthless mathematical precision required by quantitative hedge funds, derivative trading desks, and frontier AI research institutions.
        </p>
      </section>

      {/* 2. THE SOVEREIGN IMPERATIVE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 dark:bg-[#0E1420] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-white/10">
        <div className="space-y-4">
          <Badge variant="emerald" size="xs">The National Imperative</Badge>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            From Software Services to Sovereign Quantitative Intellect
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            For three decades, India was celebrated as the world's back-office software engine. However, the high-margin frontier of modern technology is governed by stochastic calculus, low-latency execution engines, and deep algorithmic mathematics.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            QuantBharat provides the rigorous platform, IDE workspaces, and national benchmark leagues necessary for Indian talent to lead global quantitative finance, high-throughput systems, and scientific computing.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#080B11] border border-slate-200 dark:border-white/5 space-y-4 shadow-sm font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-white/5">
            <span className="text-[#FF7A00] font-bold">BHARAT QUANT PRINCIPLES</span>
            <span className="text-slate-400">EST. 2024</span>
          </div>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
            "A nation that masters quantitative modeling, stochastic control, and sub-microsecond hardware systems commands its own financial and technological destiny."
          </div>
          <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Bengaluru • Hyderabad • Delhi NCR</span>
            <span className="text-emerald-400">Verified Platform</span>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Our Foundational Principles</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            The philosophical pillars underpinning every problem, benchmark, and line of code on QuantBharat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Card key={i} className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{v.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 4. ACADEMIC & INDUSTRY COUNCIL */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Academic & Research Council</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Curated and audited by pioneers across Indian academia and algorithmic trading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {council.map((c, i) => (
            <Card key={i} className="p-6 text-center space-y-3">
              <img
                src={c.avatar}
                alt={c.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#FF7A00]/40"
              />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{c.name}</h3>
                <p className="text-xs text-[#FF7A00] font-medium">{c.role}</p>
                <p className="text-[11px] text-slate-400 mt-1">{c.affil}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Ready to test your mathematical limits?</h2>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Take the All-India diagnostic benchmark and establish your official QuantBharat standing.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Button variant="saffron" size="md" onClick={() => navigate('practice')}>
            Start Diagnostic Practice
          </Button>
          <Button variant="outline" size="md" onClick={() => navigate('explore')}>
            View All Tracks
          </Button>
        </div>
      </section>
    </div>
  );
};
