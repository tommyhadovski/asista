import { TopBar } from "@/components/app/TopBar";

const categories = [
  { name: "Všeobecné", count: 14, icon: "📋" },
  { name: "Ceny a platby", count: 22, icon: "💰" },
  { name: "Termíny", count: 18, icon: "📅" },
  { name: "Služby", count: 31, icon: "⚙️" },
  { name: "Reklamácie", count: 7, icon: "⚠️" },
  { name: "Kontakt", count: 5, icon: "📞" },
];

const faqs = [
  {
    q: "Aké sú vaše otváracie hodiny?",
    a: "Po–Pi 8:00–18:00, So 9:00–14:00. Nedeľa zatvorené. Na Vianoce a Nový rok špeciálna otváracia doba – skontroluj web.",
    category: "Všeobecné",
    uses: 342,
  },
  {
    q: "Koľko stojí konzultácia?",
    a: "Úvodná konzultácia je 49€, trvá 30 minút. Komplexná konzultácia 99€, 60 minút. Pre pravidelných klientov -20%.",
    category: "Ceny",
    uses: 218,
  },
  {
    q: "Kde sa nachádzate?",
    a: "Hlavná 1, Bratislava – 2. poschodie. Parkovanie v podzemnej garáži. MHD: zastávka Hodžovo námestie, 3 min pešo.",
    category: "Kontakt",
    uses: 156,
  },
  {
    q: "Môžem zmeniť alebo zrušiť termín?",
    a: "Áno, najneskôr 24 hodín vopred bez poplatku. Menej ako 24h – účtujeme 50% ceny služby. Do 1h – plná cena.",
    category: "Termíny",
    uses: 124,
  },
];

export default function KnowledgePage() {
  return (
    <div>
      <TopBar
        title="Mozog AiAsisty 🧩"
        subtitle="Všetko, čo AiAsista vie o vašej firme. Pridajte a upravte odpovede."
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            + Nová odpoveď
          </button>
        }
      />

      {/* Stats banner */}
      <div className="glass mb-8 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">AiAsista je vytrénovaná</div>
            <div className="mt-1 text-xs text-white/50">97 odpovedí · naposledy aktualizované pred 2h</div>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="font-serif text-3xl text-[#6EE7B7]">97</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">FAQ</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl text-[#A78BFA]">96%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Pochopenie</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl text-[#F472B6]">1 284</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Použité tento mes.</div>
            </div>
          </div>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-[#A78BFA] via-[#F472B6] to-[#6EE7B7]" />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="mb-4 text-xs uppercase tracking-widest text-white/40">Kategórie</h2>
        <div className="grid gap-3 md:grid-cols-6">
          {categories.map((c) => (
            <button
              key={c.name}
              className="glass rounded-2xl p-4 text-left transition hover:scale-[1.02]"
            >
              <div className="text-xl">{c.icon}</div>
              <div className="mt-3 text-xs font-medium text-white">{c.name}</div>
              <div className="text-[11px] text-white/45">{c.count} odpovedí</div>
            </button>
          ))}
        </div>
      </div>

      {/* Test Asista */}
      <div className="glass mb-8 rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6]">
            🧪
          </div>
          <div>
            <div className="text-sm font-medium">Otestujte AiAsistu</div>
            <div className="text-xs text-white/50">Napíšte otázku a uvidíte ako odpovie</div>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <input
            type="text"
            placeholder="Napríklad: 'Ako dlho čakám na termín?'"
            className="flex-1 rounded-full border border-white/8 bg-white/[0.02] px-5 py-3 text-sm text-white outline-none placeholder:text-white/30"
          />
          <button className="btn-primary rounded-full px-6 text-sm">Test →</button>
        </div>
      </div>

      {/* FAQ list */}
      <div>
        <h2 className="mb-4 text-xs uppercase tracking-widest text-white/40">Top používané odpovede</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs text-white/60">
                  Q
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-medium text-white">{f.q}</h3>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-0.5 text-[10px] text-white/50">
                        {f.category}
                      </span>
                      <span className="text-white/40">{f.uses}×</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="text-xs text-[#A78BFA] hover:underline">Upraviť</button>
                    <span className="text-white/20">·</span>
                    <button className="text-xs text-white/50 hover:text-white">Duplikovať</button>
                    <span className="text-white/20">·</span>
                    <button className="text-xs text-[#F472B6] hover:underline">Odstrániť</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
