import { TopBar } from "@/components/app/TopBar";

const team = [
  { name: "Tomáš Hadovský", role: "CEO", status: "Online", tasks: 12, avatar: "TH", color: "#A78BFA" },
  { name: "Lucia Nováková", role: "Operations", status: "Online", tasks: 8, avatar: "LN", color: "#F472B6" },
  { name: "Martin Kováč", role: "Sales", status: "Meeting", tasks: 15, avatar: "MK", color: "#6EE7B7" },
  { name: "Eva Svobodová", role: "Support", status: "Offline", tasks: 6, avatar: "ES", color: "#FCD34D" },
];

const tasks = [
  { title: "Follow-up Hájek Reality", assignee: "Tomáš", due: "dnes 16:00", priority: "Vysoká", color: "#F472B6" },
  { title: "Pripraviť zmluvu pre Varga", assignee: "Lucia", due: "zajtra", priority: "Vysoká", color: "#F472B6" },
  { title: "Odpovedať na email ABC", assignee: "Martin", due: "zajtra", priority: "Stredná", color: "#FCD34D" },
  { title: "Update CRM – Q1 klienti", assignee: "Eva", due: "piatok", priority: "Nízka", color: "#6EE7B7" },
  { title: "Review faktúry Marec", assignee: "Tomáš", due: "pondelok", priority: "Stredná", color: "#FCD34D" },
];

export default function TeamPage() {
  return (
    <div>
      <TopBar
        title="Tím & Úlohy"
        subtitle="Manažujte tím, úlohy a rozvrhy"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            + Nová úloha
          </button>
        }
      />

      {/* Team cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {team.map((m) => (
          <div key={m.name} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-[#0A0A14]"
                style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}dd)` }}
              >
                {m.avatar}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">{m.name}</div>
                <div className="text-xs text-white/45">{m.role}</div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span
                className={`flex items-center gap-1.5 ${
                  m.status === "Online" ? "text-[#6EE7B7]" : m.status === "Meeting" ? "text-[#FCD34D]" : "text-white/40"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    m.status === "Online" ? "bg-[#6EE7B7]" : m.status === "Meeting" ? "bg-[#FCD34D]" : "bg-white/30"
                  }`}
                />
                {m.status}
              </span>
              <span className="text-white/50">{m.tasks} úloh</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tasks */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Aktívne úlohy</div>
          <div className="flex gap-2 text-xs">
            {["Všetky", "Moje", "Dnes", "Tento týždeň"].map((f, i) => (
              <button
                key={f}
                className={`rounded-full px-3 py-1.5 transition ${
                  i === 0
                    ? "bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white border border-[#A78BFA]/30"
                    : "border border-white/10 bg-white/[0.02] text-white/60"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {tasks.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.04]"
            >
              <div className="h-4 w-4 rounded-full border border-white/20" />
              <div className="flex-1">
                <div className="text-sm text-white">{t.title}</div>
                <div className="mt-1 text-xs text-white/45">
                  {t.assignee} · {t.due}
                </div>
              </div>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ backgroundColor: `${t.color}15`, color: t.color }}
              >
                {t.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
