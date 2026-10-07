import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Clock, 
  Pause, 
  Play, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  ArrowRight, 
  Send, 
  RotateCcw, 
  Sparkles, 
  BookOpen, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { PRACTICE_QUESTIONS } from '../data/mockData';

export const PracticePage = () => {
  const { navigate } = useRouter();
  const { addToast } = useToast();

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = PRACTICE_QUESTIONS[currentIndex] || PRACTICE_QUESTIONS[0];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(currentQuestion.timeLimit || 180);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSelectOption = (optId) => {
    if (submittedAnswers[currentQuestion.id]) return; // locked after submission
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optId
    }));
  };

  const handleSubmitQuestion = () => {
    const chosen = selectedAnswers[currentQuestion.id];
    if (!chosen) {
      addToast('Please select an option before submitting.', 'warning');
      return;
    }

    const correctOption = currentQuestion.options.find(o => o.isCorrect);
    const isCorrect = chosen === correctOption.id;

    setSubmittedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        chosen,
        isCorrect,
        correctId: correctOption.id
      }
    }));

    if (isCorrect) {
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
      addToast(`Correct! +${currentQuestion.points} QB Points added.`, 'success');
    } else {
      addToast('Incorrect. Study the mathematical derivation below.', 'error');
    }
  };

  const isSubmitted = !!submittedAnswers[currentQuestion.id];
  const submissionDetails = submittedAnswers[currentQuestion.id];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Top Header & Timer Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 shadow-sm">
        <div className="flex items-center gap-3">
          <Badge variant="saffron" size="sm">
            {currentQuestion.track}
          </Badge>
          <span className="text-xs font-mono text-slate-400">
            Problem {currentIndex + 1} of {PRACTICE_QUESTIONS.length}
          </span>
          <Badge variant="neutral" size="xs">
            +{currentQuestion.points} Points
          </Badge>
        </div>

        {/* Timer Control */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold ${
            timeLeft < 30
              ? 'border-rose-500 bg-rose-500/10 text-rose-500 animate-pulse'
              : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#080B11] text-slate-700 dark:text-slate-300'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition"
            aria-label={isTimerRunning ? "Pause timer" : "Resume timer"}
          >
            {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      <Card className="p-6 sm:p-8 space-y-6">
        {/* Title & Statement */}
        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {currentQuestion.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {currentQuestion.statement}
          </p>

          {/* KaTeX / Math Formula Box */}
          {currentQuestion.formula && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/5 font-mono text-xs sm:text-sm text-[#FF7A00] dark:text-[#FF9E3B] overflow-x-auto shadow-inner text-center py-5">
              {currentQuestion.formula}
            </div>
          )}
        </div>

        {/* Options Selection */}
        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswers[currentQuestion.id] === option.id;
            let optionStyles = 'border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 bg-white dark:bg-[#0E1420]';

            if (isSubmitted) {
              if (option.isCorrect) {
                optionStyles = 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200';
              } else if (isSelected && !option.isCorrect) {
                optionStyles = 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-200';
              }
            } else if (isSelected) {
              optionStyles = 'border-[#FF7A00] bg-[#FF7A00]/10 text-slate-900 dark:text-white shadow-glow-saffron';
            }

            return (
              <div
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-between gap-4 ${optionStyles}`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                    isSelected
                      ? 'bg-[#FF7A00] text-white'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400'
                  }`}>
                    {option.id}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    {option.text}
                  </span>
                </div>

                {isSubmitted && option.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                )}
                {isSubmitted && isSelected && !option.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons: Submit / Previous / Next */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              disabled={currentIndex === 0}
              iconLeft={ArrowLeft}
              onClick={() => {
                setCurrentIndex(prev => prev - 1);
                setTimeLeft(PRACTICE_QUESTIONS[currentIndex - 1]?.timeLimit || 180);
              }}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentIndex === PRACTICE_QUESTIONS.length - 1}
              iconRight={ArrowRight}
              onClick={() => {
                setCurrentIndex(prev => prev + 1);
                setTimeLeft(PRACTICE_QUESTIONS[currentIndex + 1]?.timeLimit || 180);
              }}
            >
              Next
            </Button>
          </div>

          {!isSubmitted ? (
            <Button
              variant="saffron"
              size="md"
              iconRight={Send}
              onClick={handleSubmitQuestion}
              className="w-full sm:w-auto"
            >
              Submit Answer
            </Button>
          ) : (
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigate('results')}
              >
                View Analytics & Percentile
              </Button>
              {currentIndex < PRACTICE_QUESTIONS.length - 1 && (
                <Button
                  variant="saffron"
                  size="sm"
                  onClick={() => {
                    setCurrentIndex(prev => prev + 1);
                    setTimeLeft(PRACTICE_QUESTIONS[currentIndex + 1]?.timeLimit || 180);
                  }}
                >
                  Next Problem
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Post-Submission Mathematical Explanation */}
        {isSubmitted && (
          <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF7A00]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
                Rigorous Mathematical Derivation
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};
