import { TopBar } from "@/components/app/TopBar";

const monthlyData = [
  { month: "Okt", income: 38000, expenses: 22000 },
  { month: "Nov", income: 42000, expenses: 24000 },
  { month: "Dec", income: 51000, expenses: 28000 },
  { month: "Jan", income: 45000, expenses: 25000 },
  { month: "Feb", income: 48000, expenses: 26000 },
  { month: "Mar", income: 55000, expenses: 29000 },
  { month: "Apr", income: 47820, expenses: 27000 },
];

const topClients = [
  { name: "Varga Holding", revenue: "18 400€", share: 38 },
  { name: "Hájek Reality", revenue: "12 800€", share: 27 },
  { name: "Klinika Kollárová", revenue: "9 600€", share: 20 },
  { name: "Dubnická RE", revenue: "4 800€", share: 10 },
  { name: "Ostatné", revenue: "2 220€", share: 5 },
];

const overdue = [
  { client: "ABC Reality", amount: "2 450€", days: 12, color: "#ef4444" },
  { client: "Novotný s.r.o.", amount: "890€", days: 5, color: "#FCD34D" },
  { client: "Kollár Consult", amount: "1 200€", days: 3, color: "#FCD34D" },
];

export default function FinancePage() {
  const max = Math.max(...monthlyData.map((d) => d.income));

  return (
    <div>
      <TopBar
        title="Financie"
        subtitle="Prehľad príjmov, výdajov a cashflow"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            Exportovať report
          </button>
        }
      />

      {/* Top stats */}
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Tento mesiac</div>
          <div className="mt-3 font-serif text-4xl text-[#6EE7B7]">47 820€</div>
          <div className="mt-2 text-[11px] uppercase tracking-wider text-[#6EE7B7]">
            ↑ 18% vs. február
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Pipeline</div>
          <div className="mt-3 font-serif text-4xl text-[#A78BFA]">102 300€</div>
          <div className="mt-2 text-[11px] text-white/45">potenciál Q2</div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Nezaplatené</div>
          <div className="mt-3 font-serif text-4xl text-[#F472B6]">4 540€</div>
          <div className="mt-2 text-[11px] text-[#F472B6]">3 faktúry</div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Priemerná platba</div>
          <div className="mt-3 font-serif text-4xl text-[#FCD34D]">8 dní</div>
          <div className="mt-2 text-[11px] text-white/45">z 14 dní splatnosti</div>
        </div>
      </div>

      {/* Main chart */}
      <div className="glass mb-6 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-medium">Príjmy vs. výdaje</div>
            <div className="text-xs text-white/40">Posledných 7 mesiacov</div>
          </div>
          <div className="flex gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-[#6EE7B7]">
              <span className="h-2 w-2 rounded-sm bg-[#6EE7B7]" /> Príjmy
            </span>
            <span className="flex items-center gap-1.5 text-[#F472B6]">
              <span className="h-2 w-2 rounded-sm bg-[#F472B6]" /> Výdaje
            </span>
          </div>
        </div>

        <div className="mt-8 flex h-56 items-end justify-between gap-4">
          {monthlyData.map((m) => (
            <div key={m.month} className="flex flex-1 flex-col items-center gap-3">
              <div className="relative flex h-full w-full items-end gap-1">
                <div
                  className="flex-1 rounded-t-md bg-gradient-to-t from-[#6EE7B7]/50 to-[#6EE7B7]"
                  style={{ height: `${(m.income / max) * 100}%` }}
                />
                <div
                  className="flex-1 rounded-t-md bg-gradient-to-t from-[#F472B6]/50 to-[#F472B6]"
                  style={{ height: `${(m.expenses / max) * 100}%` }}
                />
              </div>
              <div className="text-xs text-white/40">{m.month}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Top clients */}
        <div className="glass rounded-2xl p-6">
          <div className="text-lg font-medium">Top klienti tento kvartál</div>
          <div className="mt-6 space-y-4">
            {topClients.map((c) => (
              <div key={c.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">{c.name}</span>
                  <span className="font-serif text-white">{c.revenue}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#A78BFA] to-[#F472B6]"
                    style={{ width: `${c.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overdue */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium">Meškajúce platby</div>
            <span className="text-xs text-[#F472B6]">4 540€ celkom</span>
          </div>
          <div className="mt-6 space-y-3">
            {overdue.map((o) => (
              <div
                key={o.client}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <div>
                  <div className="text-sm font-medium text-white">{o.client}</div>
                  <div className="text-xs text-white/45">{o.days} dní po splatnosti</div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-lg" style={{ color: o.color }}>
                    {o.amount}
                  </div>
                  <button className="mt-1 text-[11px] text-[#A78BFA] hover:underline">
                    Poslať pripomienku →
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
