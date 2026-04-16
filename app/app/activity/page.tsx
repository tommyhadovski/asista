import { TopBar } from "@/components/app/TopBar";

const activities = [
  { time: "pred 2 min", user: "AiAsista 🧠", action: "Dohodla rezerváciu pre Máriu Horváthovú", icon: "📅", color: "#6EE7B7" },
  { time: "pred 8 min", user: "AiAsista 🧠", action: "Odoslala SMS pripomienku pre Petra Kováča", icon: "💬", color: "#A78BFA" },
  { time: "pred 14 min", user: "AiAsista 🧠", action: "Prepojila urgentný hovor na Luciu Novákovú", icon: "📞", color: "#F472B6" },
  { time: "pred 22 min", user: "Tomáš Hadovský", action: "Upravil FAQ – 'Otváracie hodiny'", icon: "✏️", color: "#FCD34D" },
  { time: "pred 34 min", user: "AiAsista 🧠", action: "Zachytila 3 zmeškané hovory zo včera", icon: "🔄", color: "#6EE7B7" },
  { time: "pred 45 min", user: "Martin Kováč", action: "Pridal nového klienta 'Tatra Properties'", icon: "➕", color: "#A78BFA" },
  { time: "pred 1 h", user: "AiAsista 🧠", action: "Vytvorila reporty pre Q1 2026", icon: "📊", color: "#FCD34D" },
  { time: "pred 1 h", user: "Lucia Nováková", action: "Zavrela deal 'Varga Holding' – 18 400€", icon: "💰", color: "#6EE7B7" },
  { time: "pred 2 h", user: "AiAsista 🧠", action: "Odoslala win-back kampaň pre 47 neaktívnych klientov", icon: "📣", color: "#F472B6" },
  { time: "pred 2 h", user: "Systém", action: "Automatické zálohovanie databázy", icon: "💾", color: "#A78BFA" },
  { time: "pred 3 h", user: "Tomáš Hadovský", action: "Spustil novú automatizáciu 'Follow-up po zmeškaní'", icon: "🔄", color: "#FCD34D" },
  { time: "pred 3 h", user: "AiAsista 🧠", action: "Vyriešila 12 hovorov bez zásahu", icon: "✓", color: "#6EE7B7" },
];

export default function ActivityPage() {
  return (
    <div>
      <TopBar
        title="Aktivita"
        subtitle="Kompletný audit log všetkých akcií vo vašej firme"
        action={
          <div className="flex gap-2">
            <button className="btn-ghost rounded-full px-4 py-2 text-xs">Export CSV</button>
            <button className="btn-ghost rounded-full px-4 py-2 text-xs">Filtre ↓</button>
          </div>
        }
      />

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {["Všetko", "AiAsista", "Tím", "Klienti", "Financie", "Nastavenia"].map((f, i) => (
          <button
            key={f}
            className={`rounded-full border px-4 py-2 text-xs transition ${
              i === 0
                ? "border-[#A78BFA]/40 bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white"
                : "border-white/10 bg-white/[0.02] text-white/60 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="glass rounded-2xl p-8">
        <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
          {activities.map((a, i) => (
            <div key={i} className="relative flex gap-6">
              <div
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#0A0A14] text-sm"
                style={{
                  backgroundColor: `${a.color}20`,
                  color: a.color,
                }}
              >
                {a.icon}
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-white">
                      <span className="font-medium">{a.user}</span>{" "}
                      <span className="text-white/60">{a.action}</span>
                    </div>
                    <div className="mt-1 text-[11px] text-white/40">{a.time}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 w-full rounded-xl border border-white/8 bg-white/[0.02] py-3 text-sm text-white/60 transition hover:text-white">
          Načítať staršie aktivity
        </button>
      </div>
    </div>
  );
}
