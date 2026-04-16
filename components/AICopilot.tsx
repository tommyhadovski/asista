"use client";

import { useEffect, useState } from "react";

const conversations = [
  {
    user: "Koľko som zarobil minulý mesiac?",
    ai: "Minulý mesiac ste vyfakturovali 47 820€, z toho 41 200€ už prišlo na účet. Oproti januáru rast o 18%.",
    meta: "📊 Financie · Marec 2026",
  },
  {
    user: "Kto sú moji top 3 klienti tento kvartál?",
    ai: "1. Varga Holding – 18 400€ · 2. Hájek Reality – 12 800€ · 3. Klinika Kollárová – 9 600€. Spolu 40% Q1 obratu.",
    meta: "👥 CRM · Q1 2026",
  },
  {
    user: "Kedy je najlepší čas volať klientom?",
    ai: "Utorky a stredy medzi 10:00–12:00 majú 73% response rate. Piatky popoludní vynechajte – 12%.",
    meta: "🧠 AI Insights · posledných 90 dní",
  },
  {
    user: "Ktoré faktúry mi meškajú?",
    ai: "3 faktúry po splatnosti: ABC Reality (2 450€, 12 dní), Novotný s.r.o. (890€, 5 dní), Kollár Consult (1 200€, 3 dni). Mám poslať pripomienky?",
    meta: "💰 Invoices · Real-time",
  },
];

export function AICopilot() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((a) => (a + 1) % conversations.length);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="copilot" className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-32 noise">
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-70" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
              🧠 AI Copilot
            </div>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
              Spýtajte sa <br />
              <span className="font-serif italic gradient-text">svojho biznisu.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/60 leading-relaxed">
              AiAsista vidí všetky vaše dáta – hovory, faktúry, klientov, kalendár.
              Namiesto hľadania v excelových tabuľkách sa jej jednoducho spýtate
              a ona odpovie v reálnom čase.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Prirodzený jazyk – žiadne SQL",
                "Dáta v reálnom čase",
                "Navrhuje akcie, nielen odpovedá",
                "Bezpečné – dáta zostávajú vaše",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6EE7B7]/10 text-xs text-[#6EE7B7]">
                    ✓
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Right: chat mock */}
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-[#A78BFA]/25 via-[#F472B6]/15 to-[#6EE7B7]/10 blur-3xl" />

            <div className="glass relative rounded-[2rem] p-6">
              {/* Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-4">
                {conversations.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 flex-1 rounded-full transition-all ${
                      i === active
                        ? "bg-gradient-to-r from-[#A78BFA] to-[#F472B6]"
                        : "bg-white/10"
                    }`}
                  />
                ))}
              </div>

              <div className="min-h-[260px] space-y-4">
                {/* User message */}
                <div key={`u-${active}`} className="animate-fade-up flex justify-end">
                  <div className="max-w-[85%] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/80">
                    {conversations[active].user}
                  </div>
                </div>

                {/* AI response */}
                <div key={`a-${active}`} className="animate-fade-up flex gap-3" style={{ animationDelay: "0.3s" }}>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-sm">
                    🧠
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl border border-[#A78BFA]/20 bg-gradient-to-br from-[#A78BFA]/10 to-[#F472B6]/5 px-5 py-3 text-sm text-white/90 leading-relaxed">
                      {conversations[active].ai}
                    </div>
                    <div className="mt-2 text-xs text-white/40">
                      {conversations[active].meta}
                    </div>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="mt-4 flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-5 py-3">
                <span className="text-white/30">Spýtaj sa AiAsisty...</span>
                <div className="ml-auto flex items-center gap-2 text-xs text-white/30">
                  <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" />
                  Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
