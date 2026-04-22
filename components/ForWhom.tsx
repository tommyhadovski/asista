const industries = [
  {
    icon: "🏢",
    name: "Realitné kancelárie",
    stat: "CRM & ponuky",
    desc: "AiAsista spravuje kontakty, generuje ponuky na nehnuteľnosti a automaticky fakturuje provízie.",
  },
  {
    icon: "🏥",
    name: "Privátne kliniky",
    stat: "Kalendár & platby",
    desc: "Smart kalendár pre pacientov, automatické pripomienky termínov a prehľad platieb na jednom mieste.",
  },
  {
    icon: "⚖️",
    name: "Advokátske kancelárie",
    stat: "Dokumenty & hodiny",
    desc: "AI generuje dokumenty, sleduje odpracované hodiny a automaticky fakturuje klientom.",
  },
  {
    icon: "🚗",
    name: "Autosalóny",
    stat: "CRM & test drives",
    desc: "CRM pre záujemcov, plánovanie testovacích jázd a automatické generovanie cenových ponúk.",
  },
  {
    icon: "🏨",
    name: "Hotely & rezorty",
    stat: "Rezervácie & tím",
    desc: "Správa rezervácií, koordinácia tímu, sledovanie financií a automatické reporty obsadenosti.",
  },
  {
    icon: "💼",
    name: "B2B služby",
    stat: "Faktúry & projekty",
    desc: "Účtovníctvo, konzultanti, agentúry. Automatické faktúry, sledovanie projektov a mesačný reporting.",
  },
];

export function ForWhom() {
  return (
    <section id="pre-koho" className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="absolute inset-0 -z-20 mesh-gradient" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Pre koho
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            Pre firmy, kde <br />
            <span className="font-serif italic gradient-text">každá minúta znamená peniaze.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/55">
            AiAsista sa prispôsobí vašej brandži. Od realitiek cez privátne kliniky
            až po advokátske kancelárie a autosalóny.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.name}
              className="glass group relative overflow-hidden rounded-3xl p-8"
            >
              {/* Decorative large icon */}
              <div className="pointer-events-none absolute -right-10 -top-10 text-[10rem] leading-none opacity-[0.04] transition-all duration-700 group-hover:opacity-[0.08] group-hover:rotate-12">
                {i.icon}
              </div>

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A78BFA]/20 to-[#F472B6]/10 text-3xl border border-white/5">
                {i.icon}
              </div>

              <h3 className="mt-6 text-xl font-medium">{i.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{i.desc}</p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#6EE7B7]/20 bg-[#6EE7B7]/5 px-3 py-1 text-xs text-[#6EE7B7]">
                <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" />
                {i.stat}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/50">
          Pracujete v inom odvetví? AiAsista sa prispôsobí.{" "}
          <a href="#demo" className="text-[#A78BFA] hover:text-[#F472B6] transition hover:underline">
            Napíšte nám →
          </a>
        </p>
      </div>
    </section>
  );
}
