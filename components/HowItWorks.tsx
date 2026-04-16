const steps = [
  {
    n: "01",
    title: "Povieme AiAsiste o vašej firme",
    time: "15 minút",
    text: "Prejdeme s vami krátky dotazník – otváracia doba, služby, ceny, časté otázky. AiAsista sa všetko naučí.",
    icon: "🧠",
  },
  {
    n: "02",
    title: "Prepojíme s vaším telefónom",
    time: "1 hodina",
    text: "Nastavíme presmerovanie hovorov. Neinštalujete nič. Váš telefón ostáva rovnaký.",
    icon: "🔗",
  },
  {
    n: "03",
    title: "AiAsista pracuje za vás",
    time: "od 2. dňa",
    text: "Keď nezdvihnete, AiAsista sa ozve. Zákazník dostane profesionálnu obsluhu. Vy dostanete rezervácie.",
    icon: "⚡",
  },
];

export function HowItWorks() {
  return (
    <section id="ako" className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-32 noise">
      <div className="absolute inset-0 -z-10 mesh-gradient" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Proces
          </div>
          <h2 className="mt-6 text-4xl font-medium md:text-6xl">
            Za 24 hodín máte vlastnú <br />
            <span className="font-serif italic gradient-text">AI asistentku.</span>
          </h2>
        </div>

        <div className="mt-24 relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-[#A78BFA]/30 to-transparent md:block" />

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-22 w-22 items-center justify-center">
                    <div className="absolute inset-0 animate-breathe rounded-full bg-[#A78BFA]/20 blur-xl" />
                    <div className="glass relative flex h-22 w-22 items-center justify-center rounded-full text-4xl" style={{ height: "88px", width: "88px" }}>
                      {s.icon}
                    </div>
                  </div>

                  <div className="mt-6 font-serif text-2xl text-[#A78BFA]">{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#6EE7B7]">
                    {s.time}
                  </div>
                  <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                  <p className="mt-3 max-w-xs text-sm text-white/55">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
