const cases = [
  {
    industry: "Realitná kancelária",
    company: "Hájek & Partners",
    location: "Bratislava",
    challenge: "Faktúry v Exceli, kontakty v hlave. Strácali čas aj klientov.",
    solution: "AiAsista spravuje CRM, generuje ponuky a automaticky fakturuje provízie.",
    results: [
      { metric: "8h", label: "ušetrených týždenne" },
      { metric: "0", label: "zabudnutých faktúr" },
      { metric: "3x", label: "rýchlejšie ponuky" },
    ],
    gradient: "from-[#A78BFA]/20 to-[#F472B6]/10",
  },
  {
    industry: "Privátna klinika",
    company: "Klinika Kollárová",
    location: "Košice",
    challenge: "Papierový kalendár, ručné fakturácie a zabudnuté termíny pacientov.",
    solution: "AiAsista riadi kalendár, posiela pripomienky a automaticky účtuje platby.",
    results: [
      { metric: "-70%", label: "neprítomností" },
      { metric: "12h", label: "ušetrených týždenne" },
      { metric: "94%", label: "spokojnosť pacientov" },
    ],
    gradient: "from-[#F472B6]/20 to-[#6EE7B7]/10",
  },
  {
    industry: "B2B služby",
    company: "Varga Consulting",
    location: "Žilina",
    challenge: "Hodiny strávené nad faktúrami, reportmi a sledovaním projektov.",
    solution: "AiAsista automatizuje faktúry, sleduje projekty a generuje mesačné reporty.",
    results: [
      { metric: "15h", label: "ušetrených týždenne" },
      { metric: "100%", label: "faktúr včas" },
      { metric: "49€", label: "mesačný náklad" },
    ],
    gradient: "from-[#6EE7B7]/20 to-[#FCD34D]/10",
  },
];

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Prípadové štúdie
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            Skutočné firmy. <br />
            <span className="font-serif italic gradient-text">Skutočné výsledky.</span>
          </h2>
        </div>

        <div className="mt-20 space-y-6">
          {cases.map((c, i) => (
            <div
              key={c.company}
              className={`glass group relative overflow-hidden rounded-3xl p-10 md:p-14`}
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.gradient} opacity-50`} />

              <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
                {/* Left: content */}
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                    <span>{c.industry}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>{c.location}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl md:text-4xl">{c.company}</h3>

                  <div className="mt-6 space-y-4 text-sm">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#F472B6]">Problém</div>
                      <p className="mt-1 text-white/70">{c.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-[#6EE7B7]">Riešenie</div>
                      <p className="mt-1 text-white/70">{c.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Right: results */}
                <div className="grid grid-cols-3 gap-3">
                  {c.results.map((r) => (
                    <div
                      key={r.label}
                      className="glass rounded-2xl p-5 text-center"
                    >
                      <div className="font-serif text-3xl gradient-text md:text-4xl">
                        {r.metric}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-wider text-white/50">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
