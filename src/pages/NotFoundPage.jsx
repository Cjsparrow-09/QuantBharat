import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Compass, Home, Terminal, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const NotFoundPage = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center p-6 text-center space-y-6 max-w-lg mx-auto">
      {/* Visual Glitch / Formula Box */}
      <div className="relative">
        <div className="w-24 h-24 rounded-3xl bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center mx-auto shadow-glow-saffron">
          <span className="font-mono text-4xl font-black text-[#FF7A00]">404</span>
        </div>
      </div>

      <div className="space-y-2">
        <Badge variant="rose" size="xs">Singular Matrix Boundary</Badge>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          State Vector Not Found in Solution Locus
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          The mathematical route or dataset coordinate you requested does not exist in the active QuantBharat computational manifold. It may have converged or been re-indexed.
        </p>
      </div>

      {/* Mathematical Pseudo-error */}
      <div className="w-full p-3 rounded-xl bg-slate-100 dark:bg-[#0E1420] border border-slate-200 dark:border-white/10 font-mono text-[11px] text-slate-500 dark:text-slate-400">
        <code>det(Route_Request - λI) = 0 ⟹ Dimension Mismatch in Hilbert Space</code>
      </div>

      {/* Recovery Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Button
          variant="saffron"
          size="md"
          iconLeft={Home}
          onClick={() => navigate('landing')}
        >
          Return Home
        </Button>
        <Button
          variant="secondary"
          size="md"
          iconLeft={Terminal}
          onClick={() => navigate('workspace')}
        >
          Launch Workspace
        </Button>
        <Button
          variant="outline"
          size="md"
          iconLeft={Compass}
          onClick={() => navigate('explore')}
        >
          Explore Tracks
        </Button>
      </div>
    </div>
  );
};
