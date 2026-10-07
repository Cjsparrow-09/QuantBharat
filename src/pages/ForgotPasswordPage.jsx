import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { Logo } from '../components/layout/Navbar';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { ArrowLeft, CheckCircle2, KeyRound } from 'lucide-react';

export const ForgotPasswordPage = () => {
  const { navigate } = useRouter();
  const { addToast } = useToast();

  const [step, setStep] = useState(1); // 1 = Enter Email, 2 = Verify Code & Reset
  const [email, setEmail] = useState('arjun.sharma@iitm.ac.in');
  const [otp, setOtp] = useState('849201');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendCode = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      addToast(`Verification code sent to ${email}`, 'info');
    }, 500);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!otp || !newPassword) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      addToast('Password reset successfully! You can now log in.', 'success');
      navigate('login');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-[#080B11]">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <Logo size="md" />
        </div>

        <div className="p-8 rounded-2xl bg-white dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 shadow-xl space-y-5">
          <div className="w-12 h-12 rounded-xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00]">
            <KeyRound className="w-6 h-6" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {step === 1 ? 'Reset Your Password' : 'Enter Verification Code'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {step === 1
                ? 'Enter your institutional or personal email address to receive a secure recovery code.'
                : `We sent a 6-digit verification code to ${email}.`}
            </p>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSendCode} className="space-y-4">
              <Input
                label="Registered Email"
                type="email"
                placeholder="you@iitm.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="saffron"
                size="md"
                loading={loading}
                className="w-full"
              >
                Send Recovery OTP
              </Button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <Input
                label="6-Digit OTP Code"
                type="text"
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />

              <Input
                label="New Password"
                type="password"
                placeholder="••••••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="saffron"
                size="md"
                loading={loading}
                className="w-full"
              >
                Update Password & Sign In
              </Button>
            </form>
          )}

          <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => navigate('login')}
              className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Log in
            </button>
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-[#FF7A00] hover:underline"
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
