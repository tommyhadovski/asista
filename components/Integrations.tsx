const categories = [
  {
    title: "Kalendár & Email",
    items: ["Google Workspace", "Microsoft 365", "Apple Calendar", "Fastmail"],
    icon: "📅",
  },
  {
    title: "Rezervácie",
    items: ["Booksy", "Reservio", "Cal.com", "Calendly"],
    icon: "⏰",
  },
  {
    title: "CRM & Sales",
    items: ["HubSpot", "Pipedrive", "Salesforce", "Raynet"],
    icon: "👥",
  },
  {
    title: "Účtovníctvo",
    items: ["Pohoda", "Money S3", "Superfaktúra", "iDoklad"],
    icon: "💼",
  },
  {
    title: "Platby",
    items: ["Stripe", "Paylike", "GoPay", "ČSOB"],
    icon: "💳",
  },
  {
    title: "Komunikácia",
    items: ["Slack", "Microsoft Teams", "WhatsApp", "Telegram"],
    icon: "💬",
  },
];

export function Integrations() {
  return (
    <section className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="absolute inset-0 -z-20 mesh-gradient opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Integrácie
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            Funguje so všetkým, <br />
            <span className="font-serif italic gradient-text">čo už používate.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/55">
            Nepotrebujete meniť systémy. AiAsista sa pripojí na vaše existujúce
            nástroje – kalendár, účtovníctvo, CRM, platby.
          </p>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-2xl">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-medium">{cat.title}</h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-white/50">
            Chýba tu váš nástroj? Pridáme ho.{" "}
            <a href="#demo" className="text-[#A78BFA] transition hover:text-[#F472B6]">
              Požiadať o integráciu →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
