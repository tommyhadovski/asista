import { TopBar } from "@/components/app/TopBar";

const automations = [
  {
    name: "Follow-up po zmeškanom hovore",
    description: "Keď zákazník zavolá a nedvihneme, AiAsista mu pošle SMS do 2 minút s ospravedlnením a linkom na rezerváciu.",
    trigger: "Zmeškaný hovor",
    action: "Pošli SMS + ponúkni rezerváciu",
    active: true,
    runs: 142,
    icon: "📞",
  },
  {
    name: "Pripomienka pred termínom",
    description: "24 hodín pred naplánovaným termínom klient dostane SMS pripomienku.",
    trigger: "24h pred termínom",
    action: "SMS + email pripomienka",
    active: true,
    runs: 89,
    icon: "⏰",
  },
  {
    name: "Ďakovný email po platbe",
    description: "Keď príde platba na účet, klient dostane automaticky ďakovný email a následné informácie.",
    trigger: "Platba prijatá",
    action: "Pošli ďakovný email",
    active: true,
    runs: 34,
    icon: "💰",
  },
  {
    name: "Pripomienka meškajúcej faktúry",
    description: "3 dni po splatnosti → pripomienka. 7 dní → druhá. 14 dní → notifikácia pre tím.",
    trigger: "Faktúra po splatnosti",
    action: "Eskalačné pripomienky",
    active: true,
    runs: 12,
    icon: "⚠️",
  },
  {
    name: "Narodeninová správa klientom",
    description: "V deň narodenín klient dostane personalizované prianie.",
    trigger: "Narodeniny klienta",
    action: "Pošli osobnú správu",
    active: false,
    runs: 0,
    icon: "🎉",
  },
  {
    name: "Win-back kampaň",
    description: "Klient ktorý nenavštívil 90 dní → AiAsista mu zavolá s personalizovanou ponukou.",
    trigger: "90 dní bez kontaktu",
    action: "Outbound hovor + ponuka",
    active: false,
    runs: 0,
    icon: "🔁",
  },
];

export default function AutomationsPage() {
  return (
    <div>
      <TopBar
        title="Workflow Automatizácie"
        subtitle="Pravidlá, ktoré AiAsista vykonáva automaticky"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            + Nová automatizácia
          </button>
        }
      />

      {/* Stats */}
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Aktívne automatizácie</div>
          <div className="mt-3 font-serif text-4xl text-[#6EE7B7]">4</div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Spustení tento mesiac</div>
          <div className="mt-3 font-serif text-4xl text-[#A78BFA]">277</div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Ušetrený čas</div>
          <div className="mt-3 font-serif text-4xl text-[#F472B6]">34h</div>
        </div>
      </div>

      {/* Automations list */}
      <div className="space-y-4">
        {automations.map((a, i) => (
          <div key={i} className="glass rounded-2xl p-6">
            <div className="flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-2xl">
                {a.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium">{a.name}</h3>
                  {a.active && (
                    <span className="rounded-full border border-[#6EE7B7]/30 bg-[#6EE7B7]/5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#6EE7B7]">
                      Aktívne
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-white/55">{a.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                  <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5">
                    <span className="text-[#A78BFA]">Trigger</span>
                    <span className="text-white/60">→</span>
                    <span className="text-white/80">{a.trigger}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5">
                    <span className="text-[#F472B6]">Akcia</span>
                    <span className="text-white/60">→</span>
                    <span className="text-white/80">{a.action}</span>
                  </div>
                  {a.runs > 0 && (
                    <div className="text-white/40">Spustené {a.runs}× tento mesiac</div>
                  )}
                </div>
              </div>

              {/* Toggle */}
              <div className="shrink-0">
                <div
                  className={`relative h-7 w-12 cursor-pointer rounded-full transition ${
                    a.active
                      ? "bg-gradient-to-r from-[#A78BFA] to-[#F472B6]"
                      : "bg-white/10"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition ${
                      a.active ? "left-[22px]" : "left-0.5"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
