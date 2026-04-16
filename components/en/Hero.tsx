import { LiveCallCard } from "../LiveCallCard";

export function HeroEN() {
  return (
    <section className="relative overflow-hidden noise">
      <div className="absolute inset-0 -z-30 bg-[#0A0A14]" />
      <div className="absolute inset-0 -z-20 grid-bg" />
      <div className="absolute inset-0 -z-10 aurora" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A78BFA] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]"></span>
              </span>
              AI boss for your business
            </div>

            <h1 className="mt-8 font-medium leading-[1.05] tracking-tight">
              <span className="shimmer text-4xl sm:text-5xl md:text-7xl block">Your business</span>
              <span className="shimmer text-4xl sm:text-5xl md:text-7xl block">on autopilot.</span>
              <span className="font-serif italic gradient-text block mt-2 text-xl sm:text-2xl md:text-4xl">One AI. Everything under control.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-white/60 md:text-xl leading-relaxed">
              AiAsista answers calls, manages calendars, tracks finances,
              coordinates your team and shows you exactly where you&apos;re growing.
              Your AI boss that never sleeps — 24 hours a day.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#demo" className="btn-primary inline-flex h-14 items-center justify-center rounded-full px-8 text-sm">
                Book a demo →
              </a>
              <a href="#copilot" className="btn-ghost inline-flex h-14 items-center justify-center rounded-full px-8 text-sm">
                See what it can do
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {["Voice & Calls", "Calendar", "Finance", "CRM", "AI Copilot", "Automations"].map((f) => (
                <div key={f} className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs text-white/60 backdrop-blur">
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div id="live-demo" className="relative">
            <LiveCallCard />
          </div>
        </div>
      </div>
    </section>
  );
}
