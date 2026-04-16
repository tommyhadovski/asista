const modules = [
  {
    icon: "📞",
    tag: "Voice & Communications",
    title: "Hovory, SMS, emaily",
    text: "Dvíha každý hovor 24/7, volá zmeškaným späť, odpovedá na emaily a posiela SMS. Inbound aj outbound. V slovenčine.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/25 to-transparent",
  },
  {
    icon: "📅",
    tag: "Calendar & Scheduling",
    title: "Inteligentný kalendár",
    text: "Synchronizácia s Google / Outlook. Rezervuje termíny, rieši kolízie, posiela pripomienky, manažuje celý rozvrh.",
    color: "#F472B6",
    gradient: "from-[#F472B6]/25 to-transparent",
  },
  {
    icon: "🎯",
    tag: "Meetings",
    title: "Stretnutia & poznámky",
    text: "Pripraví brief pred schôdzou, prepíše ju naživo, extrahuje úlohy a pošle follow-up email všetkým účastníkom.",
    color: "#6EE7B7",
    gradient: "from-[#6EE7B7]/25 to-transparent",
  },
  {
    icon: "📊",
    tag: "Financial Analytics",
    title: "Financie & analytika",
    text: "Sleduje príjmy, výdaje, cashflow. Ukazuje čo ste zarobili, čo ste stratili, a predikuje ďalší mesiac.",
    color: "#FCD34D",
    gradient: "from-[#FCD34D]/25 to-transparent",
  },
  {
    icon: "👥",
    tag: "CRM & Leads",
    title: "Klienti & obchodné príležitosti",
    text: "Automaticky zaznamenáva kontakty, kvalifikuje leady, sleduje pipeline a pripomína follow-upy.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/25 to-transparent",
  },
  {
    icon: "⚡",
    tag: "Team Operations",
    title: "Tím & úlohy",
    text: "Rozvrhy pre zamestnancov, pridelenie úloh, sledovanie výkonu, interná komunikácia. Všetko na jednom mieste.",
    color: "#F472B6",
    gradient: "from-[#F472B6]/25 to-transparent",
  },
  {
    icon: "🧠",
    tag: "AI Copilot",
    title: "Spýtajte sa svojho biznisu",
    text: "\"Koľko som zarobil minulý týždeň?\" \"Kto mi najviac mešká platby?\" AiAsista odpovedá v reálnom čase.",
    color: "#6EE7B7",
    gradient: "from-[#6EE7B7]/25 to-transparent",
  },
  {
    icon: "🔄",
    tag: "Automation",
    title: "Workflow automatizácie",
    text: "Vizuálny builder pre pravidlá. \"Keď sa stane X, spraví Y.\" Bez programovania, bez IT oddelenia.",
    color: "#FCD34D",
    gradient: "from-[#FCD34D]/25 to-transparent",
  },
  {
    icon: "💎",
    tag: "Reactivation",
    title: "Reaktivácia databázy",
    text: "Prebuďte spiacich klientov. AiAsista osloví starých zákazníkov cez email, SMS a hovory – a znova ich privedie.",
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/25 to-transparent",
  },
  {
    icon: "🎁",
    tag: "Done-for-you",
    title: "Služba na kľúč",
    text: "Nemáte čas? Nechajte to na náš tím. My navrhneme, spustíme a optimalizujeme kampane za vás. Platíte len % z revenue.",
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
            <span className="font-serif italic gradient-text">Jeden operating system.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            AiAsista nie je nástroj – je to <em className="font-serif">celý tím</em>.
            Recepčná, asistentka, účtovníčka, manažérka projektov a analytička
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
            A to je len začiatok. Každý mesiac pridávame nové moduly.{" "}
            <a href="#demo" className="text-[#A78BFA] transition hover:text-[#F472B6]">
              Pozrite roadmap →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
