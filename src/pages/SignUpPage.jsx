import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Logo } from '../components/layout/Navbar';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react';

export const SignUpPage = () => {
  const { navigate } = useRouter();
  const { signup } = useAuth();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    institution: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isPasswordLong = formData.password.length >= 8;
  const hasNumber = /\d/.test(formData.password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
  const passwordsMatch = formData.password && formData.password === formData.confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!passwordsMatch) {
      setError('Passwords do not match.');
      return;
    }
    if (!isPasswordLong || !hasNumber) {
      setError('Password must be at least 8 characters and include a number.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      signup({
        name: formData.name,
        email: formData.email,
        username: formData.username || formData.email.split('@')[0],
        institution: formData.institution || 'Bharat Quantitative Fellow'
      });
      setLoading(false);
      addToast('Account created successfully! Welcome to QuantBharat.', 'success');
      navigate('dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column: Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#080B11] via-[#0E1420] to-[#131A29] p-12 lg:p-16 flex-col justify-between border-r border-slate-200 dark:border-white/10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF7A00]/15 blur-3xl rounded-full pointer-events-none" />

        <div>
          <Logo size="lg" />
          <div className="mt-12 space-y-4 max-w-md">
            <span className="text-xs uppercase tracking-widest font-mono text-[#FF7A00] font-bold">
              Join Bharat's Elite Quant League
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Begin your path to world-class quantitative mastery.
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Solve continuous probability challenges, simulate high-frequency matching engines, and measure your growth against top minds across Bharat.
            </p>
          </div>
        </div>

        {/* Feature benefits */}
        <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 text-xs">
          <div className="flex items-center gap-2.5 text-slate-200 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> All-India Percentile Tracking & AIR Ranking
          </div>
          <div className="flex items-center gap-2.5 text-slate-200 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Sub-Microsecond C++20 Sandbox & Real-time Compiler
          </div>
          <div className="flex items-center gap-2.5 text-slate-200 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> GATE DA, CAT 99.9%, and Dalal Street Curricula
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Encrypted Account Credentialing</span>
          <span>© QuantBharat</span>
        </div>
      </div>

      {/* Right Column: Sign Up Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-14 bg-white dark:bg-[#080B11] overflow-y-auto">
        <div className="w-full max-w-md space-y-5 my-auto">
          <div className="md:hidden">
            <Logo size="md" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Create QuantBharat Account</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Join over 120,000 developers, students, and quants across India.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Full Name"
                name="name"
                placeholder="Rohan Iyer"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Username / Handle"
                name="username"
                placeholder="rohan_quant"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="rohan@iitb.ac.in"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              label="College, University or Firm"
              name="institution"
              placeholder="e.g. IIT Bombay / BITS Pilani / Graviton"
              value={formData.institution}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="••••••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password validation indicators */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E1420] border border-slate-200 dark:border-white/5 space-y-1.5 text-[11px]">
              <span className="font-semibold text-slate-500 dark:text-slate-400">Security Check:</span>
              <div className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                <div className={`flex items-center gap-1.5 ${isPasswordLong ? 'text-emerald-500 font-medium' : 'text-slate-400'}`}>
                  <span>{isPasswordLong ? '✓' : '○'}</span> At least 8 characters
                </div>
                <div className={`flex items-center gap-1.5 ${hasNumber ? 'text-emerald-500 font-medium' : 'text-slate-400'}`}>
                  <span>{hasNumber ? '✓' : '○'}</span> Includes a number
                </div>
                <div className={`flex items-center gap-1.5 ${hasSpecial ? 'text-emerald-500 font-medium' : 'text-slate-400'}`}>
                  <span>{hasSpecial ? '✓' : '○'}</span> Special symbol
                </div>
                <div className={`flex items-center gap-1.5 ${passwordsMatch && formData.password ? 'text-emerald-500 font-medium' : 'text-slate-400'}`}>
                  <span>{passwordsMatch && formData.password ? '✓' : '○'}</span> Passwords match
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="saffron"
              size="lg"
              loading={loading}
              className="w-full mt-2"
            >
              Create Free Account
            </Button>
          </form>

          <div className="text-center text-xs text-slate-500">
            Already have an account?{' '}
            <button
              onClick={() => navigate('login')}
              className="text-[#FF7A00] font-semibold hover:underline"
            >
              Log in here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
