import { TopBar } from "@/components/app/TopBar";

const integrations = [
  {
    name: "Google Calendar",
    category: "Kalendár",
    description: "Synchronizujte rezervácie a termíny s vaším Google kalendárom",
    icon: "📅",
    connected: true,
    color: "#6EE7B7",
  },
  {
    name: "Microsoft Outlook",
    category: "Kalendár",
    description: "Office 365 kalendár a email integrácia",
    icon: "📧",
    connected: true,
    color: "#A78BFA",
  },
  {
    name: "Booksy",
    category: "Rezervácie",
    description: "Sync rezervácií s Booksy platformou",
    icon: "⏰",
    connected: false,
    color: "#F472B6",
  },
  {
    name: "Pohoda",
    category: "Účtovníctvo",
    description: "Automaticky posielajte faktúry do Pohody",
    icon: "💼",
    connected: true,
    color: "#FCD34D",
  },
  {
    name: "Stripe",
    category: "Platby",
    description: "Prijímajte online platby a sledujte transakcie",
    icon: "💳",
    connected: true,
    color: "#A78BFA",
  },
  {
    name: "HubSpot",
    category: "CRM",
    description: "Synchronizujte kontakty a deal pipeline",
    icon: "👥",
    connected: false,
    color: "#F472B6",
  },
  {
    name: "WhatsApp Business",
    category: "Komunikácia",
    description: "Odpovedajte zákazníkom cez WhatsApp",
    icon: "💚",
    connected: false,
    color: "#6EE7B7",
  },
  {
    name: "Slack",
    category: "Komunikácia",
    description: "Dostávajte notifikácie do Slacku",
    icon: "💬",
    connected: true,
    color: "#A78BFA",
  },
  {
    name: "Zapier",
    category: "Automatizácie",
    description: "Prepojte AiAsistu s 5000+ aplikáciami",
    icon: "⚡",
    connected: false,
    color: "#FCD34D",
  },
  {
    name: "Superfaktúra",
    category: "Účtovníctvo",
    description: "Slovenský fakturačný systém",
    icon: "📄",
    connected: false,
    color: "#F472B6",
  },
  {
    name: "Google Analytics",
    category: "Analytika",
    description: "Sledujte návštevnosť a správanie klientov",
    icon: "📊",
    connected: true,
    color: "#6EE7B7",
  },
  {
    name: "Telegram Bot",
    category: "Komunikácia",
    description: "Chatujte s klientmi cez Telegram",
    icon: "✈️",
    connected: false,
    color: "#A78BFA",
  },
];

export default function IntegrationsPage() {
  const connected = integrations.filter((i) => i.connected).length;

  return (
    <div>
      <TopBar
        title="Integrácie"
        subtitle={`${connected} pripojených · ${integrations.length - connected} dostupných`}
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            + Požiadať o integráciu
          </button>
        }
      />

      {/* Categories filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {["Všetky", "Kalendár", "CRM", "Platby", "Účtovníctvo", "Komunikácia", "Analytika"].map(
          (cat, i) => (
            <button
              key={cat}
              className={`rounded-full border px-4 py-2 text-xs transition ${
                i === 0
                  ? "border-[#A78BFA]/40 bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Integrations grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((i) => (
          <div key={i.name} className="glass rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-2xl">
                {i.icon}
              </div>
              {i.connected ? (
                <span className="flex items-center gap-1.5 rounded-full border border-[#6EE7B7]/30 bg-[#6EE7B7]/5 px-2.5 py-1 text-[10px] text-[#6EE7B7]">
                  <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" />
                  Pripojené
                </span>
              ) : (
                <span className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] text-white/50">
                  Nepripojené
                </span>
              )}
            </div>

            <div className="mt-5">
              <h3 className="text-base font-medium text-white">{i.name}</h3>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-white/40">
                {i.category}
              </div>
              <p className="mt-3 text-sm text-white/55">{i.description}</p>
            </div>

            <button
              className={`mt-6 w-full rounded-full py-2.5 text-xs font-medium transition ${
                i.connected
                  ? "border border-white/10 bg-white/[0.02] text-white/70 hover:text-white"
                  : "btn-primary"
              }`}
            >
              {i.connected ? "Spravovať" : "Pripojiť →"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
