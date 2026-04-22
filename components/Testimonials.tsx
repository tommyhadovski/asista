const testimonials = [
  {
    quote:
      "Predtým som strávil 3 hodiny týždenne faktúrami. Teraz poviem AiAsiste jednu vetu a faktúra je hotová. Ušetrím 12 hodín mesačne.",
    name: "Martin Hájek",
    role: "Konateľ",
    company: "Hájek & Partners Reality",
    avatar: "MH",
    color: "from-[#A78BFA] to-[#F472B6]",
  },
  {
    quote:
      "Najlepšie na tom je AI Copilot. Spýtam sa 'kto mi dlhuje?' a za 2 sekundy mám odpoveď. Žiadne hľadanie v Exceli, žiadny stres.",
    name: "MUDr. Lucia Kollárová",
    role: "Majiteľka kliniky",
    company: "Klinika Kollárová",
    avatar: "LK",
    color: "from-[#F472B6] to-[#6EE7B7]",
  },
  {
    quote:
      "AiAsista nám automaticky posiela upomienky na nezaplatené faktúry. Predtým sme na to zabúdali a strácali tisíce eur. Teraz cash flow funguje.",
    name: "Peter Varga",
    role: "CEO",
    company: "Varga Auto Group",
    avatar: "PV",
    color: "from-[#6EE7B7] to-[#FCD34D]",
  },
  {
    quote:
      "Konečne mám prehľad o celej firme na jednom mieste. Úlohy, klienti, financie – a keď niečo neviem, spýtam sa AI. Ako mať osobného asistenta za 79€.",
    name: "Katarína Dubnická",
    role: "Partner",
    company: "Dubnická Consulting",
    avatar: "KD",
    color: "from-[#FCD34D] to-[#A78BFA]",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute inset-0 -z-20 mesh-gradient opacity-70" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Referencie
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            Firmy, ktoré s nami <br />
            <span className="font-serif italic gradient-text">šetria čas každý deň.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass group relative overflow-hidden rounded-3xl p-10"
            >
              <div className="pointer-events-none absolute right-8 top-4 font-serif text-[10rem] leading-none text-white/[0.04] transition group-hover:text-white/[0.08]">
                &ldquo;
              </div>

              <div className="relative">
                <p className="text-lg font-serif italic leading-relaxed text-white/85 md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-10 flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-semibold text-[#0A0A14]`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-white/50">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
          <div>
            <div className="font-serif text-4xl gradient-text">12h</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-white/50">ušetrených mesačne</div>
          </div>
          <div>
            <div className="font-serif text-4xl gradient-text">98%</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-white/50">spokojnosť klientov</div>
          </div>
          <div>
            <div className="font-serif text-4xl gradient-text">24/7</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-white/50">AI dostupnosť</div>
          </div>
          <div>
            <div className="font-serif text-4xl gradient-text">2s</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-white/50">odpoveď AI Copilota</div>
          </div>
        </div>
      </div>
    </section>
  );
}
