import { HeroAnimation } from "./HeroAnimation";

export function Hero() {
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
              AI asistentka pre vašu firmu
            </div>

            <h1 className="mt-8 font-medium leading-[1.05] tracking-tight">
              <span className="shimmer text-4xl sm:text-5xl md:text-7xl block">Jedna AI.</span>
              <span className="shimmer text-4xl sm:text-5xl md:text-7xl block">Celá firma.</span>
            </h1>

            {/* Quick wins */}
            <div className="mt-8 space-y-2.5">
              {[
                { text: "„Vystav faktúru Novákovi." — Hotovo.", color: "#6EE7B7" },
                { text: "„Kto mi dlhuje peniaze?" — Odpoveď za 2 sekundy.", color: "#A78BFA" },
                { text: "„Čo mám dnes spraviť?" — AI to vie.", color: "#F472B6" },
                { text: "„Vygeneruj mesačný report." — PDF s grafmi.", color: "#FCD34D" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px]" style={{ backgroundColor: `${item.color}15`, color: item.color }}>✓</span>
                  <span className="text-sm text-white/70 sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-white/40 italic">
              Nepýta výplatu. Nerobí chyby. Pracuje 24/7.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#demo" className="btn-primary inline-flex h-14 items-center justify-center rounded-full px-8 text-sm">
                Vyskúšať zadarmo →
              </a>
              <a href="#cennik" className="btn-ghost inline-flex h-14 items-center justify-center rounded-full px-8 text-sm">
                Pozrieť cenník
              </a>
            </div>

            {/* Feature badges */}
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "📊 Faktúry",
                "📅 Kalendár",
                "👥 CRM",
                "✅ Úlohy",
                "🧠 AI Copilot",
                "📈 Reporting",
                "📄 Dokumenty",
                "⚡ Automatizácie",
              ].map((f) => (
                <div
                  key={f}
                  className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs text-white/60 backdrop-blur"
                >
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div id="live-demo" className="relative">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
