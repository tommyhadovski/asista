import { TopBar } from "@/components/app/TopBar";

const campaigns = [
  {
    name: "Jarná akcia · SMS kampaň",
    type: "SMS",
    status: "Aktívna",
    sent: 342,
    opened: 298,
    converted: 47,
    revenue: "11 750€",
    color: "#6EE7B7",
  },
  {
    name: "Win-back neaktívni klienti",
    type: "Email + Call",
    status: "Aktívna",
    sent: 128,
    opened: 89,
    converted: 23,
    revenue: "17 250€",
    color: "#A78BFA",
  },
  {
    name: "Narodeniny klientov",
    type: "Email",
    status: "Automatická",
    sent: 45,
    opened: 38,
    converted: 12,
    revenue: "2 840€",
    color: "#F472B6",
  },
  {
    name: "Referral program",
    type: "Email",
    status: "Koncept",
    sent: 0,
    opened: 0,
    converted: 0,
    revenue: "–",
    color: "#FCD34D",
  },
];

export default function MarketingPage() {
  return (
    <div>
      <TopBar
        title="Marketing & Kampane"
        subtitle="Automatizované marketingové kampane cez email, SMS a hovory"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            + Nová kampaň
          </button>
        }
      />

      {/* Overview */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Aktívne kampane</div>
          <div className="mt-3 font-serif text-4xl text-[#A78BFA]">4</div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Dosah tento mesiac</div>
          <div className="mt-3 font-serif text-4xl text-[#F472B6]">515</div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Konverzia</div>
          <div className="mt-3 font-serif text-4xl text-[#6EE7B7]">16%</div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Generované €</div>
          <div className="mt-3 font-serif text-4xl text-[#FCD34D]">31 840€</div>
        </div>
      </div>

      {/* Campaign templates */}
      <div className="mb-8">
        <h2 className="mb-4 text-xs uppercase tracking-widest text-white/40">Hotové šablóny kampaní</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: "🎉", title: "Narodeninové prianie", desc: "Automaticky pošli osobné prianie + zľavu" },
            { icon: "🔁", title: "Win-back neaktívnych", desc: "Klienti, ktorí nenavštívili 90 dní" },
            { icon: "⭐", title: "Žiadosť o recenziu", desc: "Po dokončenej službe požiadaj o hodnotenie" },
            { icon: "🎁", title: "Referral program", desc: "Odmeň klientov, ktorí odporúčajú" },
            { icon: "📧", title: "Newsletter", desc: "Mesačný update pre všetkých klientov" },
            { icon: "🚨", title: "Limitovaná ponuka", desc: "Flash sale s urgency mechanikou" },
          ].map((t) => (
            <button
              key={t.title}
              className="glass rounded-2xl p-5 text-left transition hover:scale-[1.02]"
            >
              <div className="text-2xl">{t.icon}</div>
              <div className="mt-4 text-sm font-medium text-white">{t.title}</div>
              <div className="mt-1 text-xs text-white/50">{t.desc}</div>
              <div className="mt-4 text-xs text-[#A78BFA]">Použiť šablónu →</div>
            </button>
          ))}
        </div>
      </div>

      {/* Active campaigns */}
      <div>
        <h2 className="mb-4 text-xs uppercase tracking-widest text-white/40">Aktuálne kampane</h2>
        <div className="space-y-3">
          {campaigns.map((c) => (
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
                  <div className="mt-1 text-xs text-white/40">{c.type}</div>
                </div>
                <button className="text-xs text-white/50 hover:text-white">Detail →</button>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Odoslané</div>
                  <div className="mt-1 font-serif text-xl text-white/85">{c.sent}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Otvorené</div>
                  <div className="mt-1 font-serif text-xl text-white/85">{c.opened}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Konverzie</div>
                  <div className="mt-1 font-serif text-xl text-[#6EE7B7]">{c.converted}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Revenue</div>
                  <div className="mt-1 font-serif text-xl text-[#FCD34D]">{c.revenue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
