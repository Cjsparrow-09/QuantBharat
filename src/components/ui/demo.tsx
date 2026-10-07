import React from 'react';
import { GlowCard } from "@/components/ui/spotlight-card";
import { Cpu, BrainCircuit, Trophy, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

// Exact Default component as specified by user
export function Default() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard />
      <GlowCard />
      <GlowCard />
    </div>
  );
}

// Enriched showcase component with real Unsplash images and Lucide icons for QuantBharat
export function SpotlightCardShowcase() {
  const cards = [
    {
      title: "Sub-Microsecond Matching",
      category: "Dalal Street HFT",
      glowColor: "orange" as const,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
      icon: Cpu,
      latency: "420 ns",
      desc: "Zero-copy lock-free ring buffers with cache-line alignment for high-throughput order feeds."
    },
    {
      title: "Stochastic PDE Surfaces",
      category: "Deep Volatility",
      glowColor: "blue" as const,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
      icon: BrainCircuit,
      latency: "1.4 ms",
      desc: "Itô calculus, Heston continuous volatility surfaces, and jump-diffusion derivative pricing."
    },
    {
      title: "National Top Benchmarks",
      category: "All-India League",
      glowColor: "green" as const,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      icon: Trophy,
      latency: "AIR #14",
      desc: "Competitive algorithmic benchmarks calibrated against IIT Bombay, IISc, and Dalal Street desks."
    }
  ];

  return (
    <div className="w-full py-12 flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-2">
        <Badge variant="saffron" size="sm">Interactive Spotlight Technology</Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Pointer-Synced Spotlight Glow Experience
        </h2>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Hover and move your cursor across the cards to see dynamic multi-axis radial gradients and border illumination.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 p-4">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <GlowCard
              key={idx}
              glowColor={card.glowColor}
              size="lg"
              className="text-left text-white border-white/10"
            >
              <div className="flex flex-col justify-between h-full space-y-3">
                <div className="relative rounded-xl overflow-hidden h-36 w-full border border-white/10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded font-mono text-[10px] text-amber-300">
                    {card.latency}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {card.category}
                  </span>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-[#FF7A00]" />
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </div>
            </GlowCard>
          );
        })}
      </div>
    </div>
  );
}
