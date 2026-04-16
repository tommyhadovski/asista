const cases = [
  {
    industry: "Realitná kancelária",
    company: "Hájek & Partners",
    location: "Bratislava",
    challenge: "60% hovorov mimo pracovnej doby, strácali leady za 200k+ €.",
    solution: "AiAsista kvalifikuje záujemcov, rezervuje obhliadky, posiela informácie.",
    results: [
      { metric: "+42%", label: "nových obhliadok" },
      { metric: "180k€", label: "prvý uzavretý klient" },
      { metric: "6x", label: "ROI za 1 mesiac" },
    ],
    gradient: "from-[#A78BFA]/20 to-[#F472B6]/10",
  },
  {
    industry: "Privátna klinika",
    company: "Klinika Kollárová",
    location: "Košice",
    challenge: "Pacienti volali cez víkend a konkurencia ich získala skôr.",
    solution: "AiAsista prijíma hovory 24/7, triage urgentnosti, rezervuje termíny.",
    results: [
      { metric: "0", label: "zmeškaných hovorov" },
      { metric: "+31%", label: "nových pacientov" },
      { metric: "94%", label: "spokojnosť pacientov" },
    ],
    gradient: "from-[#F472B6]/20 to-[#6EE7B7]/10",
  },
  {
    industry: "Autosalón",
    company: "Varga Auto Group",
    location: "Žilina",
    challenge: "Záujemcovia o testovacie jazdy museli čakať dni na odpoveď.",
    solution: "AiAsista odpovedá okamžite, kvalifikuje záujemcov, dohaduje test drives.",
    results: [
      { metric: "2 min", label: "priemerná reakcia" },
      { metric: "+58%", label: "test drives" },
      { metric: "+24%", label: "uzavreté predaje" },
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
