import { TopBar } from "@/components/app/TopBar";

const invoices = [
  { id: "INV-2026-0042", date: "15. apr 2026", amount: "699€", status: "Zaplatené", color: "#6EE7B7" },
  { id: "INV-2026-0041", date: "15. mar 2026", amount: "699€", status: "Zaplatené", color: "#6EE7B7" },
  { id: "INV-2026-0040", date: "15. feb 2026", amount: "699€", status: "Zaplatené", color: "#6EE7B7" },
  { id: "INV-2026-0039", date: "15. jan 2026", amount: "699€", status: "Zaplatené", color: "#6EE7B7" },
  { id: "INV-2025-0038", date: "15. dec 2025", amount: "699€", status: "Zaplatené", color: "#6EE7B7" },
];

export default function BillingPage() {
  return (
    <div>
      <TopBar
        title="Fakturácia & Predplatné"
        subtitle="Spravujte svoje predplatné a fakturačné informácie"
      />

      {/* Current plan */}
      <div className="glass relative mb-8 overflow-hidden rounded-3xl p-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#A78BFA]/15 via-[#F472B6]/10 to-transparent" />

        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#A78BFA]">Aktuálny plán</div>
            <div className="mt-3 flex items-baseline gap-3">
              <h2 className="font-serif text-5xl gradient-text">Business</h2>
              <span className="text-sm text-white/50">699€ / mesiac</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/60">
              Voice & Calls, Calendar, CRM, Financie, Meetings, Automatizácie a AI Copilot.
            </p>

            <div className="mt-6 flex gap-3">
              <button className="btn-primary rounded-full px-6 py-2.5 text-sm">
                ⬆️ Upgrade na Enterprise
              </button>
              <button className="btn-ghost rounded-full px-6 py-2.5 text-sm">
                Zmeniť plán
              </button>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs text-white/40">Ďalšia platba</div>
            <div className="mt-2 font-serif text-2xl text-white">15. máj 2026</div>
            <div className="mt-1 text-xs text-[#6EE7B7]">✓ Auto-renewal aktívny</div>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {[
          { label: "Hovory", used: 27, total: 500, color: "#A78BFA" },
          { label: "SMS správy", used: 142, total: 1000, color: "#F472B6" },
          { label: "CRM kontakty", used: 318, total: 5000, color: "#6EE7B7" },
        ].map((u) => (
          <div key={u.label} className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{u.label}</div>
              <div className="text-xs text-white/45">
                {u.used} / {u.total}
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(u.used / u.total) * 100}%`,
                  background: `linear-gradient(90deg, ${u.color}, ${u.color}aa)`,
                }}
              />
            </div>
            <div className="mt-2 text-[11px] text-white/45">
              {Math.round((u.used / u.total) * 100)}% využité
            </div>
          </div>
        ))}
      </div>

      {/* Payment method + billing info */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <div className="text-sm font-medium">Platobná metóda</div>
          <div className="mt-6 flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex h-10 w-14 items-center justify-center rounded bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-xs font-bold text-[#0A0A14]">
              VISA
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">•••• •••• •••• 4242</div>
              <div className="text-xs text-white/45">Platnosť 12/28</div>
            </div>
            <button className="text-xs text-[#A78BFA] hover:underline">Zmeniť</button>
          </div>
          <button className="mt-3 text-xs text-white/50 hover:text-white">
            + Pridať ďalšiu metódu
          </button>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="text-sm font-medium">Fakturačné údaje</div>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/50">Firma</span>
              <span>AiAsista s.r.o.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">IČO</span>
              <span>12 345 678</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">DIČ</span>
              <span>SK2021234567</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50">Adresa</span>
              <span>Hlavná 1, Bratislava</span>
            </div>
          </div>
          <button className="mt-4 text-xs text-[#A78BFA] hover:underline">Upraviť →</button>
        </div>
      </div>

      {/* Invoice history */}
      <div className="glass overflow-hidden rounded-2xl">
        <div className="border-b border-white/8 p-6">
          <div className="text-base font-medium">História faktúr</div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_auto_auto] gap-4 border-b border-white/8 px-6 py-3 text-xs uppercase tracking-widest text-white/40">
          <div>Faktúra</div>
          <div>Dátum</div>
          <div>Suma</div>
          <div>Status</div>
          <div></div>
        </div>
        {invoices.map((inv) => (
          <div
            key={inv.id}
            className="grid grid-cols-[1fr_1fr_1fr_auto_auto] items-center gap-4 border-b border-white/5 px-6 py-4 last:border-b-0 hover:bg-white/[0.02]"
          >
            <div className="font-mono text-sm text-white/85">{inv.id}</div>
            <div className="text-sm text-white/60">{inv.date}</div>
            <div className="font-serif text-base text-white">{inv.amount}</div>
            <div>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ backgroundColor: `${inv.color}15`, color: inv.color }}
              >
                {inv.status}
              </span>
            </div>
            <button className="text-xs text-[#A78BFA] hover:underline">Stiahnuť PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
}
