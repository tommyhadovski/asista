const modules = [
  {
    icon: "📊",
    tag: "Invoicing",
    title: "Faktúry & bločky",
    text: "Vyfotíte bloček, AI ho rozpozná a zaúčtuje. Generuje faktúry, sleduje platby a posiela automatické upomienky.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/25 to-transparent",
  },
  {
    icon: "📅",
    tag: "Calendar & Scheduling",
    title: "Smart kalendár",
    text: "Inteligentný kalendár, ktorý plánuje schôdzky, rieši kolízie, posiela pripomienky a synchronizuje s Google / Outlook.",
    color: "#F472B6",
    gradient: "from-[#F472B6]/25 to-transparent",
  },
  {
    icon: "👥",
    tag: "CRM & Leads",
    title: "CRM & kontakty",
    text: "Spravuje kontakty, sleduje obchodné príležitosti, pipeline a automaticky pripomína follow-upy.",
    color: "#6EE7B7",
    gradient: "from-[#6EE7B7]/25 to-transparent",
  },
  {
    icon: "✅",
    tag: "Tasks & Team",
    title: "Tím & úlohy",
    text: "Prideľuje úlohy členom tímu, sleduje deadliny, upozorňuje na oneskorenia a ukazuje vyťaženosť.",
    color: "#FCD34D",
    gradient: "from-[#FCD34D]/25 to-transparent",
  },
  {
    icon: "🧠",
    tag: "AI Copilot",
    title: "AI Copilot",
    text: "\"Koľko som zarobil minulý mesiac?\" \"Kto mi dlží?\" Spýtajte sa čokoľvek a AiAsista odpovedá v reálnom čase.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/25 to-transparent",
  },
  {
    icon: "📄",
    tag: "Documents",
    title: "Dokumenty & zmluvy",
    text: "AI generuje zmluvy, ponuky a dokumenty z vašich šablón. Podpis, archivácia a vyhľadávanie na jednom mieste.",
    color: "#F472B6",
    gradient: "from-[#F472B6]/25 to-transparent",
  },
  {
    icon: "📈",
    tag: "Reporting & Analytics",
    title: "Reporting & analytika",
    text: "Mesačné reporty, cashflow predikcie, porovnania období. Všetko automaticky, bez hodín v Exceli.",
    color: "#6EE7B7",
    gradient: "from-[#6EE7B7]/25 to-transparent",
  },
  {
    icon: "🔄",
    tag: "Automation",
    title: "Automatizácie",
    text: "Vizuálny builder pre pravidlá. \"Keď faktúra nie je zaplatená 7 dní, pošli upomienku.\" Bez programovania.",
    color: "#FCD34D",
    gradient: "from-[#FCD34D]/25 to-transparent",
  },
  {
    icon: "💰",
    tag: "Accounting",
    title: "Účtovníctvo",
    text: "Sleduje príjmy, výdaje, DPH. Prepojenie na Pohodu a Money S3. Podklady pre účtovníčku na pár klikov.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/25 to-transparent",
  },
  {
    icon: "🔗",
    tag: "Integrations",
    title: "Integrácie & API",
    text: "Prepojenie s nástrojmi, ktoré už používate. Google Workspace, bankové účty, Pohoda, Money S3 a ďalšie.",
    color: "#F472B6",
    gradient: "from-[#F472B6]/25 to-transparent",
  },
];

export function Capabilities() {
  return (
    <section className="relative py-32 noise" id="capabilities">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Čo všetko AiAsista robí
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            10 modulov. <br />
            <span className="font-serif italic gradient-text">Jeden AI systém.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            AiAsista nie je nástroj – je to <em className="font-serif">celý tím</em>.
            Účtovníčka, asistentka, manažérka projektov a analytička
            zabalené v jednej AI.
          </p>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div
              key={m.title}
              className="glass group relative overflow-hidden rounded-3xl p-8"
            >
              <div className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${m.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-2xl"
                  style={{ boxShadow: `0 0 30px -8px ${m.color}40` }}
                >
                  {m.icon}
                </div>
              </div>

              <div
                className="mt-6 text-[10px] uppercase tracking-[0.15em]"
                style={{ color: m.color }}
              >
                {m.tag}
              </div>
              <h3 className="mt-2 text-lg font-medium leading-tight">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{m.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-white/50">
            A to je len začiatok. Každý mesiac pridávame nové funkcie.{" "}
            <a href="#demo" className="text-[#A78BFA] transition hover:text-[#F472B6]">
              Pozrite roadmap →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
