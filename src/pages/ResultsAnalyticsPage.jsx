import React from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Award, 
  Zap, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CategoryBarChart } from '../components/charts/CategoryBarChart';
import { VelocityLineChart } from '../components/charts/VelocityLineChart';

export const ResultsAnalyticsPage = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="saffron" size="xs">National Performance Audit</Badge>
            <span className="text-xs text-slate-400 font-mono">• Calibrated All-India Standings</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Quantitative Analytics & Percentiles
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Comprehensive diagnostic analysis of your mathematical accuracy, latency, and All-India percentile rank.
          </p>
        </div>

        <Button
          variant="saffron"
          size="md"
          iconLeft={BookOpen}
          onClick={() => navigate('practice')}
        >
          Start Practice Sprint
        </Button>
      </div>

      {/* Top High-Level Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="p-5">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">National Percentile</span>
            <div className="text-3xl font-black font-mono text-[#FF7A00]">97.8%</div>
            <div className="text-xs text-emerald-500 font-medium">Top 2.2% across Bharat</div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Overall Accuracy</span>
            <div className="text-3xl font-black font-mono text-slate-900 dark:text-white">78.4%</div>
            <div className="text-xs text-slate-400 font-medium">142 of 172 solved correctly</div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Avg Solve Speed</span>
            <div className="text-3xl font-black font-mono text-slate-900 dark:text-white">1m 48s</div>
            <div className="text-xs text-emerald-500 font-medium">22% faster than national median</div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Total Quant Hours</span>
            <div className="text-3xl font-black font-mono text-slate-900 dark:text-white">48.5h</div>
            <div className="text-xs text-slate-400 font-medium">Active in Python & C++ runtimes</div>
          </div>
        </Card>
      </div>

      {/* Deep Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 Columns: Topic Accuracy & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Discipline Mastery & Accuracy</CardTitle>
              <span className="text-xs text-slate-400">Calibrated against 45,000+ test candidates across Indian engineering institutes</span>
            </CardHeader>
            <CardContent>
              <CategoryBarChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rating Growth & Problem Solving Velocity</CardTitle>
              <span className="text-xs text-slate-400">12-week trajectory showing consistent acceleration</span>
            </CardHeader>
            <CardContent>
              <VelocityLineChart />
            </CardContent>
          </Card>
        </div>

        {/* Right 5 Columns: Strengths & Weak Areas Diagnostic */}
        <div className="lg:col-span-5 space-y-6">
          {/* Key Strengths */}
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <CardTitle>Top Quantitative Strengths</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 p-4">
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs">
                <div className="font-bold text-emerald-900 dark:text-emerald-300">Linear Algebra & SVD (92% Accuracy)</div>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Exceptional intuition on spectral decompositions and low-rank matrix approximations.</p>
              </div>
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs">
                <div className="font-bold text-emerald-900 dark:text-emerald-300">Stochastic Differential Equations (88%)</div>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Reliable application of Itô’s lemma and martingale stopping theorems.</p>
              </div>
            </CardContent>
          </Card>

          {/* Weak Areas to Reinforce */}
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <CardTitle>Identified Areas for Reinforcement</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 p-4">
              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-xs">
                <div className="font-bold text-amber-900 dark:text-amber-300">Diophantine & Modular Arithmetic (71%)</div>
                <p className="text-slate-600 dark:text-slate-400 mt-1">CAT 99.9% questions reveal occasional timing bottlenecks on high-power modular remainders.</p>
                <button
                  onClick={() => navigate('practice')}
                  className="mt-2 text-[11px] font-bold text-[#FF7A00] flex items-center gap-1 hover:underline"
                >
                  Practice Diophantine Modules <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-xs">
                <div className="font-bold text-amber-900 dark:text-amber-300">Sub-Microsecond Lock-Free Queues (79%)</div>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Review cache line padding and atomic memory ordering semantics in C++20.</p>
                <button
                  onClick={() => navigate('workspace')}
                  className="mt-2 text-[11px] font-bold text-[#FF7A00] flex items-center gap-1 hover:underline"
                >
                  Launch C++ OrderBook Sandbox <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
