const rows = [
  { feature: "Faktúry", asista: "AI z fotky", human: "Ručne" },
  { feature: "Reporting", asista: "Spýtaj sa", human: "Hodiny v Exceli" },
  { feature: "Úlohy", asista: "AI priraďuje", human: "Zabudnuté" },
  { feature: "Cash flow", asista: "AI predpovedá", human: "Zistíš neskoro" },
  { feature: "Upomienky", asista: "Automatické", human: "Ručne" },
  { feature: "Dostupnosť", asista: "24/7", human: "Pracovná doba" },
  { feature: "Chyby", asista: "Minimálne", human: "Časté" },
  { feature: "Onboarding", asista: "15 minút", human: "Týždne" },
  { feature: "Mesačný náklad", asista: "od 49€", human: "Účtovníčka 300€+" },
];

export function Comparison() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-32 noise">
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-50" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Porovnanie
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            AiAsista vs. <br />
            <span className="font-serif italic gradient-text">Excel & papiere.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/55">
            Oboje funguje. Ale keď spočítate čas, peniaze a spoľahlivosť,
            rozdiel je jasný.
          </p>
        </div>

        <div className="glass mt-16 overflow-hidden rounded-3xl">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/8 bg-gradient-to-r from-white/[0.02] to-white/[0.04] p-6">
            <div className="text-xs uppercase tracking-widest text-white/40">Funkcia</div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
              AiAsista
            </div>
            <div className="text-center text-sm font-medium text-white/50">
              Excel & papiere
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center p-6 transition hover:bg-white/[0.02] ${
                i < rows.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="text-sm text-white/70">{row.feature}</div>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#6EE7B7]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6EE7B7]/10 text-xs">
                  ✓
                </span>
                {row.asista}
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-white/50">
                {row.human}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/50">
            Ročná úspora na administratíve:{" "}
            <span className="gradient-text font-serif text-2xl">~6 000€</span>
          </p>
        </div>

        {/* Accountant note */}
        <div className="glass mt-10 rounded-2xl p-8 text-center">
          <p className="text-lg font-medium text-white/90">
            💡 AiAsista <span className="text-[#A78BFA]">nenahradí</span> vašu účtovníčku.
          </p>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-white/55 leading-relaxed">
            Nechajte účtovníčku robiť dane, DPH a mzdy – to čo vie najlepšie.
            AiAsista spraví všetko <span className="text-[#6EE7B7]">okolo nej</span> – faktúry, upomienky, CRM, úlohy, reporting a AI analýzy.
            Veci, na ktoré vaša účtovníčka nemá čas. A vy tiež nie.
          </p>
        </div>
      </div>
    </section>
  );
}
