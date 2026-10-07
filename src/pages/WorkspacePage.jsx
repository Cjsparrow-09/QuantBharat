import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Play, 
  Send, 
  RotateCcw, 
  Code2, 
  Terminal as TerminalIcon, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Cpu, 
  Sparkles, 
  FileText, 
  ListChecks, 
  Lightbulb, 
  History,
  Maximize2,
  Copy,
  ChevronDown
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';
import { WORKSPACE_PROBLEMS } from '../data/mockData';

export const WorkspacePage = () => {
  const { navigate } = useRouter();
  const { addToast } = useToast();

  const [selectedProblemIndex, setSelectedProblemIndex] = useState(0);
  const currentProblem = WORKSPACE_PROBLEMS[selectedProblemIndex] || WORKSPACE_PROBLEMS[0];

  const [language, setLanguage] = useState('python');
  const [activeTab, setActiveTab] = useState('description');
  const [code, setCode] = useState(currentProblem.starterCode[language] || currentProblem.starterCode.python);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState(
    `[QuantBharat Execution Engine v2.4 initialized]\nTarget: Dalal Street Microstructure Sandbox\nLanguage: Python 3.12 (SIMD Vectorized)\nReady. Click 'Run Code' or 'Submit Benchmark'.`
  );
  const [testResults, setTestResults] = useState(null);

  // Switch language
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    const newCode = currentProblem.starterCode[newLang] || currentProblem.starterCode.python;
    setCode(newCode);
    addToast(`Switched editor to ${newLang.toUpperCase()}`, 'info');
  };

  // Switch problem
  const handleProblemChange = (index) => {
    setSelectedProblemIndex(index);
    const prob = WORKSPACE_PROBLEMS[index];
    setCode(prob.starterCode[language] || prob.starterCode.python);
    setTestResults(null);
    setConsoleOutput(`[Loaded: ${prob.title}]\nRun benchmark when ready.`);
  };

  // Run simulation
  const handleRun = () => {
    setIsRunning(true);
    setConsoleOutput(`[Compiling & Executing ${language.toUpperCase()} in sandbox...]`);

    setTimeout(() => {
      setIsRunning(false);
      setTestResults([
        { id: 1, name: 'Sample Test Case 1: L2 Order Queue Matching', status: 'Passed', time: '1.2ms', memory: '1.4 MB' },
        { id: 2, name: 'Sample Test Case 2: Non-Crossing Bid Placement', status: 'Passed', time: '0.8ms', memory: '1.4 MB' },
        { id: 3, name: 'Sample Test Case 3: Price-Time Priority FIFO', status: 'Passed', time: '1.4ms', memory: '1.5 MB' }
      ]);
      setConsoleOutput(
        `> Compiling target: ${currentProblem.title}\n> Execution successful. Status: ALL SAMPLE TESTS PASSED.\n> Latency: 1.14ms avg | CPU cycles: 3,420,100 | Zero allocations in critical path.\nMatched 150 shares @ 2450.75 ticks. Order executed against resting liquidity.`
      );
      addToast('Local test cases executed successfully!', 'success');
    }, 800);
  };

  // Submit against All-India benchmark
  const handleSubmit = () => {
    setIsSubmitting(true);
    setConsoleOutput(`[Evaluating solution against 50,000 All-India stress vectors...]`);

    setTimeout(() => {
      setIsSubmitting(false);
      setTestResults([
        { id: 1, name: 'Test Vector 1: Standard Liquidity Burst', status: 'Passed', time: '0.9ms', memory: '1.4 MB' },
        { id: 2, name: 'Test Vector 2: High-Frequency Cancellation Churn', status: 'Passed', time: '1.1ms', memory: '1.5 MB' },
        { id: 3, name: 'Test Vector 3: Memory Alignment & False Sharing', status: 'Passed', time: '0.4ms', memory: '1.8 MB' },
        { id: 4, name: 'Test Vector 4: P99.9 Tail Latency Boundary', status: 'Passed', time: '0.6ms', memory: '1.8 MB' }
      ]);
      setConsoleOutput(
        `=======================================================\nQUANTBHARAT BENCHMARK RESULTS: ACCEPTED (100/100)\n=======================================================\nAll 50,000 stress test vectors PASSED.\nRuntime: 41.2 ms total (Top 1.8% in Bharat)\nMemory Footprint: 1.8 MB\nAll-India Benchmark Rating: +35 QB Points\nNew Rating: 1,877 | National Standing: AIR #12\n=======================================================`
      );

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // fallback
      }

      addToast('Benchmark ACCEPTED! +35 QB points awarded!', 'success');
    }, 1200);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6.5rem)] -m-4 sm:-m-6 lg:-m-8 overflow-hidden bg-slate-900 text-slate-100">
      {/* Top Workspace Header Bar */}
      <div className="h-14 bg-[#080B11] border-b border-white/10 px-4 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          {/* Problem Selector Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Problem:</span>
            <select
              value={selectedProblemIndex}
              onChange={(e) => handleProblemChange(Number(e.target.value))}
              className="bg-[#0E1420] text-xs font-semibold text-slate-200 border border-white/10 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#FF7A00]"
            >
              {WORKSPACE_PROBLEMS.map((prob, idx) => (
                <option key={prob.id} value={idx}>
                  {prob.id.toUpperCase()}: {prob.title}
                </option>
              ))}
            </select>
          </div>

          <Badge variant="saffron" size="xs">
            {currentProblem.difficulty}
          </Badge>
        </div>

        {/* Right Tools: Language + Actions */}
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="flex bg-[#0E1420] p-1 rounded-lg border border-white/10">
            <button
              onClick={() => handleLanguageChange('python')}
              className={`px-2.5 py-1 text-xs font-mono rounded ${language === 'python' ? 'bg-[#FF7A00] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              Python 3.12
            </button>
            <button
              onClick={() => handleLanguageChange('cpp')}
              className={`px-2.5 py-1 text-xs font-mono rounded ${language === 'cpp' ? 'bg-[#FF7A00] text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              C++20
            </button>
          </div>

          {/* Reset Code */}
          <button
            onClick={() => {
              setCode(currentProblem.starterCode[language] || currentProblem.starterCode.python);
              addToast('Editor reset to template', 'info');
            }}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition"
            title="Reset code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Run button */}
          <Button
            variant="secondary"
            size="sm"
            iconLeft={Play}
            loading={isRunning}
            onClick={handleRun}
          >
            Run Code
          </Button>

          {/* Submit button */}
          <Button
            variant="saffron"
            size="sm"
            iconLeft={Send}
            loading={isSubmitting}
            onClick={handleSubmit}
          >
            Submit Benchmark
          </Button>
        </div>
      </div>

      {/* Main Dual-Pane IDE Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Problem & Derivations Pane */}
        <div className="lg:col-span-5 flex flex-col border-r border-white/10 bg-[#0B0F17] overflow-hidden">
          {/* Pane Tabs */}
          <div className="flex items-center px-3 border-b border-white/10 bg-[#080B11] text-xs gap-1">
            {[
              { id: 'description', label: 'Problem & Math', icon: FileText },
              { id: 'tests', label: 'Test Suite', icon: ListChecks },
              { id: 'hints', label: 'Math Hints', icon: Lightbulb },
              { id: 'history', label: 'Benchmarks', icon: History }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 py-2.5 px-3 border-b-2 font-medium transition ${
                    activeTab === tab.id
                      ? 'border-[#FF7A00] text-[#FF7A00]'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Pane Scrollable Content */}
          <div className="flex-1 p-5 overflow-y-auto space-y-5 text-xs text-slate-300">
            {activeTab === 'description' && (
              <>
                <div>
                  <h2 className="text-base font-bold text-white mb-2">{currentProblem.title}</h2>
                  <p className="leading-relaxed text-slate-300">{currentProblem.description}</p>
                </div>

                {/* Mathematical Formulation Card */}
                <div className="p-4 rounded-xl bg-[#0E1420] border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono uppercase font-bold text-[#FF7A00]">
                    Formal Quantitative Derivation
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#080B11] font-mono text-xs text-amber-300 overflow-x-auto">
                    {currentProblem.mathEquation}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    The engine must respect both price-time priority and ensure zero memory heap reallocations during high-velocity quote surges.
                  </p>
                </div>

                {/* Constraints */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-400">System Constraints:</span>
                  <ul className="list-disc pl-4 space-y-1.5 text-slate-400">
                    {currentProblem.constraints.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {activeTab === 'tests' && (
              <div className="space-y-3">
                <h3 className="font-bold text-white">Pre-Loaded Test Vectors</h3>
                {currentProblem.sampleTestCases.map((tc, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#0E1420] border border-white/10 space-y-1.5 font-mono text-[11px]">
                    <div className="text-slate-400">Case #{idx + 1}: {tc.input}</div>
                    <div className="text-emerald-400">Expected: {tc.output}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'hints' && (
              <div className="space-y-3">
                <h3 className="font-bold text-white">Mathematical & Architectural Hints</h3>
                <div className="p-3 rounded-lg bg-[#0E1420] border border-white/10 text-xs leading-relaxed space-y-2">
                  <p><strong>1. Integer Tick Prices:</strong> Always avoid floating-point math for limit orders. Represent 2450.50 INR as 245050 paise.</p>
                  <p><strong>2. FIFO Queues:</strong> Within a single price tick level, order fills must strictly follow submission timestamp order.</p>
                  <p><strong>3. Cache Line Alignment:</strong> If using C++, ensure each ring buffer queue is padded to 64 bytes to eliminate false sharing.</p>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-3">
                <h3 className="font-bold text-white">Past Benchmark Submissions</h3>
                <div className="p-3 rounded-lg bg-[#0E1420] border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-emerald-400 font-bold">Accepted (100%)</div>
                    <div className="text-[10px] text-slate-400">Runtime: 41.2ms | P99.9: 420ns</div>
                  </div>
                  <span className="font-mono text-slate-400">Today, 11:42 AM</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Code Editor & Console Pane */}
        <div className="lg:col-span-7 flex flex-col bg-[#080B11] overflow-hidden">
          {/* Editor Header */}
          <div className="h-9 px-4 bg-[#0B0F17] border-b border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>solution_engine.{language === 'python' ? 'py' : 'cpp'}</span>
            <div className="flex items-center gap-3">
              <span>UTF-8</span>
              <span>Tab Size: 4</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  addToast('Code copied to clipboard', 'info');
                }}
                className="hover:text-white"
                title="Copy code"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Code Editor Area */}
          <div className="flex-1 relative overflow-auto bg-[#080B11]">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
              className="w-full h-full p-4 font-mono text-xs text-slate-200 bg-transparent resize-none focus:outline-none leading-relaxed selection:bg-[#FF7A00]/30 selection:text-white"
            />
          </div>

          {/* Bottom Execution Console */}
          <div className="h-56 border-t border-white/10 bg-[#0E1420] flex flex-col">
            <div className="h-8 px-4 bg-[#0B0F17] border-b border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span className="font-semibold text-slate-300">Execution Console & Benchmarks</span>
              </div>
              {testResults && (
                <div className="text-[11px] text-emerald-400 font-bold">
                  {testResults.filter(t => t.status === 'Passed').length}/{testResults.length} Tests Passed
                </div>
              )}
            </div>

            <div className="flex-1 p-3 font-mono text-[11px] text-slate-300 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {consoleOutput}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
