"use client";

import { useState } from "react";

export function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(10);

  const avgLostPerCall = 150;
  const monthlyLoss = missedCalls * avgLostPerCall * 30;
  const annualLoss = monthlyLoss * 12;
  const catchRate = 0.95;
  const monthlySaved = Math.round(monthlyLoss * catchRate);
  const annualSaved = Math.round(annualLoss * catchRate);
  const planCost = 299;
  const roi = Math.round(((monthlySaved - planCost) / planCost) * 100);
  const netMonthlyProfit = monthlySaved - planCost;

  const formatNum = (n: number) =>
    n.toLocaleString("sk-SK", { maximumFractionDigits: 0 });

  return (
    <section id="roi" className="relative overflow-hidden noise py-24 md:py-32">
      <div className="absolute inset-0 -z-30 bg-[#050509]" />
      <div className="absolute inset-0 -z-20 grid-bg" />
      <div className="absolute inset-0 -z-10 aurora opacity-40" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6EE7B7] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-[#6EE7B7] to-[#A78BFA]"></span>
            </span>
            ROI Kalkulačka
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
            <span className="shimmer block">Koľko vás stoja</span>
            <span className="gradient-text font-serif italic block mt-1">zmešakné hovory?</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg">
            Posuňte slider a zistite, koľko peňazí denne strácate – a koľko vám AiAsista ušetrí.
          </p>
        </div>

        {/* Calculator card */}
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/[0.08] bg-white/[0.02] p-[1px] backdrop-blur-xl">
          {/* Gradient border glow */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#A78BFA]/20 via-transparent to-[#F472B6]/20 -z-10 blur-sm" />

          <div className="rounded-3xl bg-[#0A0A14]/80 p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left: Slider + Input */}
              <div>
                <label className="block text-sm uppercase tracking-[0.15em] text-white/50 mb-4">
                  Počet zmeškaných hovorov denne
                </label>

                <div className="relative mb-4">
                  <div className="text-6xl md:text-7xl font-bold tabular-nums" style={{
                    background: "linear-gradient(135deg, #A78BFA, #F472B6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: "all 0.3s ease",
                  }}>
                    {missedCalls}
                  </div>
                  <span className="text-white/40 text-lg ml-2">hovorov / deň</span>
                </div>

                <input
                  type="range"
                  min={1}
                  max={50}
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="roi-slider w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10"
                  style={{
                    background: `linear-gradient(to right, #A78BFA 0%, #F472B6 ${((missedCalls - 1) / 49) * 100}%, rgba(255,255,255,0.1) ${((missedCalls - 1) / 49) * 100}%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-white/30 mt-2">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>

                {/* Assumptions */}
                <div className="mt-10 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                    <span className="text-sm text-white/50">Priemerná hodnota hovoru</span>
                    <span className="text-sm font-medium text-white/80">150 €</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                    <span className="text-sm text-white/50">AiAsista zachytí</span>
                    <span className="text-sm font-medium text-[#6EE7B7]">95 % hovorov</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                    <span className="text-sm text-white/50">Mesačný plán</span>
                    <span className="text-sm font-medium text-white/80">299 € / mesiac</span>
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div className="space-y-6">
                {/* Loss card */}
                <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-6">
                  <div className="text-xs uppercase tracking-[0.15em] text-red-400/70 mb-3">
                    Vaše mesačné straty
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-red-400 tabular-nums" style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                    -{formatNum(monthlyLoss)} €
                  </div>
                  <div className="text-sm text-white/30 mt-1">
                    ročne: -{formatNum(annualLoss)} €
                  </div>
                </div>

                {/* Savings card */}
                <div className="rounded-2xl border border-[#6EE7B7]/10 bg-[#6EE7B7]/[0.03] p-6">
                  <div className="text-xs uppercase tracking-[0.15em] text-[#6EE7B7]/70 mb-3">
                    AiAsista vám ušetrí mesačne
                  </div>
                  <div
                    className="text-4xl md:text-5xl font-bold tabular-nums"
                    style={{
                      background: "linear-gradient(135deg, #6EE7B7, #A78BFA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      filter: "drop-shadow(0 0 20px rgba(110, 231, 183, 0.3))",
                    }}
                  >
                    +{formatNum(monthlySaved)} €
                  </div>
                  <div className="text-sm text-white/30 mt-1">
                    ročne: +{formatNum(annualSaved)} €
                  </div>
                </div>

                {/* ROI + Net profit */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#A78BFA]/10 bg-[#A78BFA]/[0.03] p-5">
                    <div className="text-xs uppercase tracking-[0.12em] text-[#A78BFA]/60 mb-2">
                      ROI
                    </div>
                    <div className="text-3xl font-bold text-[#A78BFA] tabular-nums" style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                      {formatNum(roi)}%
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#FCD34D]/10 bg-[#FCD34D]/[0.03] p-5">
                    <div className="text-xs uppercase tracking-[0.12em] text-[#FCD34D]/60 mb-2">
                      Čistý zisk / mes.
                    </div>
                    <div className="text-3xl font-bold text-[#FCD34D] tabular-nums" style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                      {formatNum(netMonthlyProfit)} €
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#demo"
                  className="btn-primary inline-flex h-14 w-full items-center justify-center rounded-full px-8 text-sm font-medium mt-2"
                >
                  Začať šetriť →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider custom styles */}
      <style jsx>{`
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #A78BFA, #F472B6);
          cursor: pointer;
          box-shadow: 0 0 20px rgba(167, 139, 250, 0.5), 0 0 40px rgba(167, 139, 250, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: box-shadow 0.2s ease;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 30px rgba(167, 139, 250, 0.7), 0 0 60px rgba(167, 139, 250, 0.3);
        }
        .roi-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #A78BFA, #F472B6);
          cursor: pointer;
          box-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
