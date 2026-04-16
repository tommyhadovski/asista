const features = [
  {
    icon: "📞",
    tag: "Inbound",
    title: "Dvíha každý hovor",
    text: "Do 2 sekúnd. 24 hodín denne. Aj cez víkend. Aj o tretej ráno. Ani jeden zákazník vám neunikne.",
    gradient: "from-[#A78BFA]/25 via-[#A78BFA]/5 to-transparent",
  },
  {
    icon: "📱",
    tag: "Outbound",
    title: "Volá späť zmeškaným",
    text: "AiAsista vidí zmeškané hovory a sama zavolá zákazníkovi späť. Zachytí klientov, ktorých by ste inak stratili.",
    gradient: "from-[#F472B6]/25 via-[#F472B6]/5 to-transparent",
  },
  {
    icon: "💬",
    tag: "Follow-up",
    title: "Posiela SMS pripomienky",
    text: "Automatické pripomienky pred termínom, po termíne, na narodeniny. Zákazníci sa vracajú častejšie.",
    gradient: "from-[#6EE7B7]/25 via-[#6EE7B7]/5 to-transparent",
  },
  {
    icon: "📊",
    tag: "Analytics",
    title: "Ukazuje kde rastiete",
    text: "Denné reporty: koľko hovorov, koľko rezervácií, koľko ste zarobili navyše. Hodnotu AiAsisty vidíte v číslach.",
    gradient: "from-[#FCD34D]/25 via-[#FCD34D]/5 to-transparent",
  },
];

export function Features() {
  return (
    <section className="relative py-32 noise" id="features">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Čo AiAsista robí
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            Pomáhame vám rásť. <br />
            <span className="font-serif italic gradient-text">Nielen odpovedať.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            AiAsista nie je obyčajný chatbot. Je to AI partner, ktorý za vás dvíha hovory,
            volá zákazníkom späť, posiela pripomienky a ukazuje vám kde váš biznis stráca peniaze.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass group relative overflow-hidden rounded-3xl p-10"
            >
              <div className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${f.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-3xl">
                  {f.icon}
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/50">
                  {f.tag}
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-medium">{f.title}</h3>
              <p className="mt-3 text-white/60">{f.text}</p>

              <div className="mt-8 flex items-center gap-2 text-sm text-[#A78BFA] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Dozvedieť sa viac
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
