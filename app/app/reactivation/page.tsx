import { TopBar } from "@/components/app/TopBar";

const segments = [
  {
    name: "Neaktívni 90+ dní",
    count: 847,
    potential: "42 350€",
    description: "Klienti, ktorí nenavštívili viac ako 3 mesiace",
    color: "#A78BFA",
    warm: "Warm",
  },
  {
    name: "Neaktívni 6-12 mes",
    count: 1240,
    potential: "62 000€",
    description: "Potrebujú silnejší pushback + ponuku",
    color: "#F472B6",
    warm: "Cool",
  },
  {
    name: "Spiaci 1-2 roky",
    count: 2180,
    potential: "87 200€",
    description: "Najväčší potenciál, ale ťažšia reaktivácia",
    color: "#FCD34D",
    warm: "Cold",
  },
  {
    name: "Zabudnutí 2+ roky",
    count: 3420,
    potential: "68 400€",
    description: "Poslednú šancu pred vyčistením databázy",
    color: "#6EE7B7",
    warm: "Frozen",
  },
];

const activeCampaigns = [
  {
    name: "Jarná reaktivácia · Realitky",
    segment: "Neaktívni 90+",
    reached: 847,
    opened: 612,
    responded: 89,
    booked: 23,
    revenue: "18 400€",
    status: "Beží",
    progress: 68,
    color: "#A78BFA",
  },
  {
    name: "Win-back leto 2025",
    segment: "6-12 mes",
    reached: 1240,
    opened: 854,
    responded: 142,
    booked: 38,
    revenue: "24 800€",
    status: "Dokončená",
    progress: 100,
    color: "#6EE7B7",
  },
];

const templates = [
  {
    icon: "💌",
    title: "Osobná správa CEO",
    desc: "\"Chýbate nám\" email od zakladateľa s osobnou nôtou",
    conversion: "8.2%",
  },
  {
    icon: "🎁",
    title: "Špeciálna ponuka",
    desc: "Zľava alebo bonus len pre vracajúcich klientov",
    conversion: "14.5%",
  },
  {
    icon: "🎂",
    title: "Narodeninová reaktivácia",
    desc: "V deň narodenín osobná správa + darček",
    conversion: "22.8%",
  },
  {
    icon: "📞",
    title: "AI call reaktivácia",
    desc: "AiAsista zavolá osobne s personalizovanou ponukou",
    conversion: "18.3%",
  },
  {
    icon: "⏰",
    title: "Urgency kampaň",
    desc: "Limitovaná časová ponuka (48h okno)",
    conversion: "11.7%",
  },
  {
    icon: "🔄",
    title: "Referral loop",
    desc: "Odmena za pozvanie kamaráta = reaktivácia",
    conversion: "9.4%",
  },
];

export default function ReactivationPage() {
  return (
    <div>
      <TopBar
        title="Reaktivácia databázy 💎"
        subtitle="Prebuďte spiacich klientov a obnovte príjem zo zabudnutých kontaktov"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            + Nahrať databázu
          </button>
        }
      />

      {/* Hero banner */}
      <div className="glass relative mb-8 overflow-hidden rounded-3xl p-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#A78BFA]/20 via-[#F472B6]/15 to-[#6EE7B7]/10" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#A78BFA]/20 blur-3xl" />

        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/30 bg-[#A78BFA]/10 px-3 py-1 text-[11px] uppercase tracking-widest text-[#A78BFA]">
              💎 Skrytý zisk
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              Vo vašej databáze je <span className="gradient-text italic">259 950€</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60">
              7 687 starých kontaktov, ktorí od vás už dlho nenakúpili.
              AiAsista ich dokáže znova zobudiť – osobne, automaticky, v slovenčine.
              Priemerná ROI našich kampaní je <strong className="text-[#6EE7B7]">840%</strong>.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="btn-primary rounded-full px-6 py-3 text-sm">
                Spustiť AI kampaň →
              </button>
              <button className="btn-ghost rounded-full px-6 py-3 text-sm">
                Objednať Done-for-you
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="glass rounded-2xl p-4 text-center">
              <div className="font-serif text-3xl text-[#A78BFA]">7 687</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/45">Spiacich kontaktov</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="font-serif text-3xl text-[#F472B6]">12%</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/45">Priem. response</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="font-serif text-3xl text-[#6EE7B7]">43k€</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/45">Minulá kampaň</div>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <div className="font-serif text-3xl text-[#FCD34D]">840%</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/45">Priem. ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Segments */}
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-widest text-white/40">Segmenty vašej databázy</h2>
          <button className="text-xs text-[#A78BFA] hover:underline">Upraviť segmenty →</button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((s) => (
            <div key={s.name} className="glass group relative overflow-hidden rounded-3xl p-6">
              <div className="flex items-start justify-between">
                <div
                  className="rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest"
                  style={{ backgroundColor: `${s.color}15`, color: s.color }}
                >
                  {s.warm}
                </div>
              </div>
              <h3 className="mt-5 text-base font-medium text-white">{s.name}</h3>
              <p className="mt-1 text-xs text-white/50">{s.description}</p>

              <div className="mt-6 flex items-baseline justify-between">
                <div>
                  <div className="font-serif text-3xl text-white">{s.count}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">kontaktov</div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-lg" style={{ color: s.color }}>
                    {s.potential}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">potenciál</div>
                </div>
              </div>

              <button
                className="mt-6 w-full rounded-full border border-white/10 bg-white/[0.02] py-2 text-xs text-white/70 transition hover:border-[#A78BFA]/30 hover:bg-[#A78BFA]/10 hover:text-white"
              >
                Spustiť kampaň
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div className="mb-10">
        <h2 className="mb-4 text-xs uppercase tracking-widest text-white/40">AI šablóny kampaní</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <button
              key={t.title}
              className="glass group rounded-2xl p-5 text-left transition hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div className="text-2xl">{t.icon}</div>
                <div className="rounded-full border border-[#6EE7B7]/20 bg-[#6EE7B7]/5 px-2 py-0.5 text-[10px] text-[#6EE7B7]">
                  ↑ {t.conversion}
                </div>
              </div>
              <div className="mt-4 text-sm font-medium text-white">{t.title}</div>
              <div className="mt-1 text-xs text-white/50">{t.desc}</div>
              <div className="mt-4 text-xs text-[#A78BFA] transition group-hover:text-[#F472B6]">
                Použiť →
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active campaigns */}
      <div>
        <h2 className="mb-4 text-xs uppercase tracking-widest text-white/40">Aktívne reaktivačné kampane</h2>
        <div className="space-y-4">
          {activeCampaigns.map((c) => (
            <div key={c.name} className="glass rounded-2xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-medium">{c.name}</h3>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider"
                      style={{ backgroundColor: `${c.color}15`, color: c.color }}
                    >
                      {c.status}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-white/45">Segment: {c.segment}</div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-2xl text-[#6EE7B7]">{c.revenue}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">
                    generované
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-5">
                <div className="mb-2 flex justify-between text-[11px] text-white/45">
                  <span>Progress kampane</span>
                  <span>{c.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#A78BFA] via-[#F472B6] to-[#6EE7B7] transition-all"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>

              {/* Funnel */}
              <div className="mt-6 grid grid-cols-4 gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Oslovených</div>
                  <div className="mt-1 font-serif text-xl text-white/85">{c.reached}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Otvorených</div>
                  <div className="mt-1 font-serif text-xl text-[#A78BFA]">{c.opened}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Odpovedalo</div>
                  <div className="mt-1 font-serif text-xl text-[#F472B6]">{c.responded}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Kúpilo</div>
                  <div className="mt-1 font-serif text-xl text-[#6EE7B7]">{c.booked}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Done-for-you upsell */}
      <div className="glass relative mt-10 overflow-hidden rounded-3xl p-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F472B6]/15 via-[#A78BFA]/10 to-transparent" />
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F472B6]/30 bg-[#F472B6]/10 px-3 py-1 text-[11px] uppercase tracking-widest text-[#F472B6]">
              🎁 Done-for-you
            </div>
            <h3 className="mt-4 font-serif text-3xl">
              Nechajte <span className="gradient-text italic">tím AiAsisty</span> to urobiť za vás.
            </h3>
            <p className="mt-3 max-w-lg text-sm text-white/60">
              Nahráte nám databázu, my navrhneme a spustíme kampaň na mieru.
              Platíte iba <strong className="text-white">15% z generovaného revenue</strong> –
              žiadne riziko, len výsledky.
            </p>
          </div>
          <div className="text-right">
            <button className="btn-primary rounded-full px-8 py-3 text-sm">
              Objednať konzultáciu
            </button>
            <div className="mt-3 text-xs text-white/45">Priemerný projekt: 12-45k€ revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
}
