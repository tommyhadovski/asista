import { TopBar } from "@/components/app/TopBar";

const stats = [
  { label: "Dnešné hovory", value: "34", change: "+12%", color: "#A78BFA", icon: "📞" },
  { label: "Rezervácie", value: "18", change: "+28%", color: "#F472B6", icon: "📅" },
  { label: "Zachytené €", value: "2 340€", change: "+41%", color: "#6EE7B7", icon: "💰" },
  { label: "Pipeline", value: "47 800€", change: "+19%", color: "#FCD34D", icon: "📊" },
];

const chartDays = [
  { day: "Po", h1: 55, h2: 20 },
  { day: "Ut", h1: 72, h2: 28 },
  { day: "St", h1: 48, h2: 15 },
  { day: "Št", h1: 88, h2: 32 },
  { day: "Pi", h1: 95, h2: 38 },
  { day: "So", h1: 40, h2: 48 },
  { day: "Ne", h1: 22, h2: 35 },
];

const todayEvents = [
  { time: "09:00", title: "Stretnutie · Hájek", color: "#A78BFA" },
  { time: "11:30", title: "Obhliadka · Ružinov", color: "#F472B6" },
  { time: "14:00", title: "Call · Varga Group", color: "#6EE7B7" },
  { time: "16:00", title: "Team sync", color: "#FCD34D" },
];

const recentCalls = [
  { name: "Mária Horváthová", status: "Rezervované", icon: "📅", color: "#6EE7B7", time: "pred 2 min" },
  { name: "Peter Kováč", status: "Info", icon: "💬", color: "#A78BFA", time: "pred 14 min" },
  { name: "Lucia Vargová", status: "Prepojené", icon: "📞", color: "#F472B6", time: "pred 28 min" },
  { name: "Ján Novák", status: "Rezervované", icon: "📅", color: "#6EE7B7", time: "pred 41 min" },
];

const insights = [
  { icon: "💡", color: "#A78BFA", text: "Navolajte späť 4 zmeškané hovory z piatku. Potenciál ~3 200€." },
  { icon: "📈", color: "#F472B6", text: "Uzavreli ste 3 faktúry nad 1 500€. Pošlite ďakovný email?" },
  { icon: "⚠️", color: "#6EE7B7", text: "ABC Reality mešká 12 dní. Pošlem pripomienku?" },
];

export default function DashboardPage() {
  return (
    <div>
      <TopBar
        title="Dobré ráno, Tomáš ☀️"
        subtitle="Tu je prehľad toho, čo robila AiAsista za posledných 24 hodín."
      />

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between text-xs text-white/45">
              <span>{stat.label}</span>
              <span>{stat.icon}</span>
            </div>
            <div className="mt-4 font-serif text-4xl" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-wider text-[#6EE7B7]">
              ↑ {stat.change} tento týždeň
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {/* Chart */}
        <div className="glass rounded-2xl p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-base font-medium">Príjmy vs. stratené príležitosti</div>
              <div className="text-xs text-white/40">Posledných 7 dní · aktualizované pred 2 min</div>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-[#6EE7B7]">
                <span className="h-2 w-2 rounded-sm bg-[#6EE7B7]" /> Zarobené
              </span>
              <span className="flex items-center gap-1.5 text-[#F472B6]">
                <span className="h-2 w-2 rounded-sm bg-[#F472B6]" /> Zachytené
              </span>
            </div>
          </div>

          <div className="mt-8 flex h-44 items-end justify-between gap-3">
            {chartDays.map((b) => (
              <div key={b.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-col gap-1">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-[#F472B6]/70 to-[#F472B6]"
                    style={{ height: `${b.h2}px` }}
                  />
                  <div
                    className="w-full bg-gradient-to-t from-[#6EE7B7]/70 to-[#6EE7B7]"
                    style={{ height: `${b.h1}px` }}
                  />
                </div>
                <div className="text-[11px] text-white/40">{b.day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">Dnešný kalendár</div>
            <span className="text-xs text-white/40">15. apr</span>
          </div>
          <div className="mt-5 space-y-2">
            {todayEvents.map((e, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3"
              >
                <div
                  className="h-full w-1 self-stretch rounded-full"
                  style={{ backgroundColor: e.color, minHeight: "36px" }}
                />
                <div className="flex-1 overflow-hidden">
                  <div className="text-[11px] text-white/40">{e.time}</div>
                  <div className="truncate text-sm font-medium text-white/85">{e.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Recent calls */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">Najnovšie hovory</div>
            <span className="flex items-center gap-2 text-xs text-[#6EE7B7]">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-[#6EE7B7]" />
              Live
            </span>
          </div>
          <div className="mt-4 space-y-2">
            {recentCalls.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:bg-white/[0.05]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-base">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{c.name}</div>
                  <div className="text-xs text-white/40">{c.time}</div>
                </div>
                <div className="text-xs font-medium" style={{ color: c.color }}>
                  {c.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">🧠 AI návrhy pre vás</div>
            <span className="text-xs text-[#A78BFA]">{insights.length} nové</span>
          </div>
          <div className="mt-4 space-y-3">
            {insights.map((i, idx) => (
              <div
                key={idx}
                className="rounded-xl border p-4 text-sm text-white/85"
                style={{
                  borderColor: `${i.color}30`,
                  backgroundColor: `${i.color}08`,
                }}
              >
                <div className="flex items-start gap-2">
                  <span>{i.icon}</span>
                  <span>{i.text}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <button
                    className="rounded-full px-3 py-1 text-[11px] font-medium"
                    style={{ backgroundColor: i.color, color: "#0A0A14" }}
                  >
                    Vykonať
                  </button>
                  <button className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/60 hover:text-white">
                    Neskôr
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
