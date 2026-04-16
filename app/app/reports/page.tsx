import { TopBar } from "@/components/app/TopBar";

const kpis = [
  { label: "Total Revenue", value: "318 540€", change: "+23.4%", icon: "💰", color: "#6EE7B7" },
  { label: "Nové rezervácie", value: "1 284", change: "+18.2%", icon: "📅", color: "#A78BFA" },
  { label: "Konverzia hovorov", value: "68%", change: "+4.1%", icon: "📞", color: "#F472B6" },
  { label: "Priemer. hodnota", value: "249€", change: "+12.8%", icon: "📊", color: "#FCD34D" },
  { label: "Churn rate", value: "2.3%", change: "-0.8%", icon: "📉", color: "#6EE7B7" },
  { label: "NPS skóre", value: "72", change: "+6", icon: "⭐", color: "#A78BFA" },
];

const callHours = [
  { hour: "08", v: 12 }, { hour: "09", v: 28 }, { hour: "10", v: 45 },
  { hour: "11", v: 52 }, { hour: "12", v: 38 }, { hour: "13", v: 25 },
  { hour: "14", v: 42 }, { hour: "15", v: 48 }, { hour: "16", v: 55 },
  { hour: "17", v: 40 }, { hour: "18", v: 30 }, { hour: "19", v: 18 },
];

export default function ReportsPage() {
  const maxH = Math.max(...callHours.map((c) => c.v));

  return (
    <div>
      <TopBar
        title="Reporty & Analytika"
        subtitle="Hlboký prehľad výkonu vašej firmy"
        action={
          <div className="flex gap-2">
            <button className="btn-ghost rounded-full px-4 py-2 text-xs">Posledných 30 dní ↓</button>
            <button className="btn-primary rounded-full px-5 py-2.5 text-sm">Export PDF</button>
          </div>
        }
      />

      {/* KPIs */}
      <div className="mb-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {kpis.map((k) => (
          <div key={k.label} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between text-xs text-white/45">
              <span>{k.label}</span>
              <span>{k.icon}</span>
            </div>
            <div className="mt-3 font-serif text-2xl" style={{ color: k.color }}>
              {k.value}
            </div>
            <div className={`mt-1 text-[10px] uppercase tracking-wider ${k.change.startsWith("+") || k.change.startsWith("-0") ? "text-[#6EE7B7]" : "text-[#F472B6]"}`}>
              {k.change}
            </div>
          </div>
        ))}
      </div>

      {/* Call volume heatmap */}
      <div className="glass mb-8 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-medium">Objem hovorov počas dňa</div>
            <div className="text-xs text-white/40">Priemer za posledných 30 dní</div>
          </div>
          <div className="text-xs text-[#A78BFA]">Peak: 16:00 (55 hovorov)</div>
        </div>

        <div className="mt-8 flex h-48 items-end justify-between gap-2">
          {callHours.map((c) => (
            <div key={c.hour} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative w-full">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-[#A78BFA]/50 via-[#F472B6]/70 to-[#F472B6]"
                  style={{ height: `${(c.v / maxH) * 160}px` }}
                />
                <div className="absolute inset-x-0 -top-6 text-center text-[10px] text-white/40">
                  {c.v}
                </div>
              </div>
              <div className="text-[10px] text-white/40">{c.hour}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Breakdown grids */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Top questions */}
        <div className="glass rounded-2xl p-6">
          <div className="text-lg font-medium">Najčastejšie otázky zákazníkov</div>
          <div className="mt-6 space-y-4">
            {[
              { q: "Máte voľný termín?", count: 342, pct: 100 },
              { q: "Aké sú vaše ceny?", count: 218, pct: 64 },
              { q: "Kde sa nachádzate?", count: 156, pct: 46 },
              { q: "Aké sú otváracie hodiny?", count: 124, pct: 36 },
              { q: "Máte dostupné parkovanie?", count: 89, pct: 26 },
            ].map((item) => (
              <div key={item.q}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">{item.q}</span>
                  <span className="font-serif text-white">{item.count}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#A78BFA] to-[#F472B6]"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sentiment */}
        <div className="glass rounded-2xl p-6">
          <div className="text-lg font-medium">Sentiment hovorov</div>
          <div className="mt-6 space-y-4">
            {[
              { label: "😊 Veľmi pozitívny", value: 68, color: "#6EE7B7" },
              { label: "🙂 Pozitívny", value: 22, color: "#A78BFA" },
              { label: "😐 Neutrálny", value: 7, color: "#FCD34D" },
              { label: "😕 Negatívny", value: 3, color: "#F472B6" },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">{s.label}</span>
                  <span className="font-serif text-white">{s.value}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.value}%`, backgroundColor: s.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#6EE7B7]/20 bg-[#6EE7B7]/5 p-4 text-xs text-[#6EE7B7]">
            ⭐ 90% zákazníkov hodnotí AiAsistu pozitívne alebo lepšie
          </div>
        </div>

        {/* Channel performance */}
        <div className="glass rounded-2xl p-6">
          <div className="text-lg font-medium">Výkon kanálov</div>
          <div className="mt-6 space-y-3">
            {[
              { channel: "📞 Telefón", calls: 1842, conv: "72%", color: "#A78BFA" },
              { channel: "✉️ Email", calls: 923, conv: "58%", color: "#F472B6" },
              { channel: "💬 SMS", calls: 412, conv: "84%", color: "#6EE7B7" },
              { channel: "💚 WhatsApp", calls: 218, conv: "79%", color: "#FCD34D" },
            ].map((c) => (
              <div
                key={c.channel}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <div className="text-sm">{c.channel}</div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-white/60">{c.calls}</div>
                  <div className="font-serif text-lg" style={{ color: c.color }}>
                    {c.conv}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Asista performance */}
        <div className="glass rounded-2xl p-6">
          <div className="text-lg font-medium">Výkon AiAsisty</div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
              <div className="font-serif text-4xl text-[#6EE7B7]">2.1s</div>
              <div className="mt-1 text-[11px] text-white/45">Reakčný čas</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
              <div className="font-serif text-4xl text-[#A78BFA]">96%</div>
              <div className="mt-1 text-[11px] text-white/45">Pochopenie</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
              <div className="font-serif text-4xl text-[#F472B6]">87%</div>
              <div className="mt-1 text-[11px] text-white/45">Vyriešené sama</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
              <div className="font-serif text-4xl text-[#FCD34D]">24/7</div>
              <div className="mt-1 text-[11px] text-white/45">Dostupnosť</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
