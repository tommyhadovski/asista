import { TopBar } from "@/components/app/TopBar";

const messages = [
  {
    id: 1,
    channel: "call",
    from: "Mária Horváthová",
    preview: "Ahoj, volám kvôli termínu na kontrolu...",
    time: "pred 2 min",
    unread: true,
    icon: "📞",
    color: "#A78BFA",
  },
  {
    id: 2,
    channel: "email",
    from: "hajek@realitky.sk",
    preview: "Dobrý deň, máme zaujímavý byt pre vás...",
    time: "pred 14 min",
    unread: true,
    icon: "✉️",
    color: "#F472B6",
  },
  {
    id: 3,
    channel: "sms",
    from: "+421 905 123 456",
    preview: "Potvrdzujem stretnutie zajtra o 14:00",
    time: "pred 28 min",
    unread: true,
    icon: "💬",
    color: "#6EE7B7",
  },
  {
    id: 4,
    channel: "whatsapp",
    from: "Peter Varga",
    preview: "Môžeme sa pozrieť na tú ponuku?",
    time: "pred 42 min",
    unread: true,
    icon: "💚",
    color: "#6EE7B7",
  },
  {
    id: 5,
    channel: "call",
    from: "Lucia Vargová",
    preview: "Urgentná záležitosť – potrebujem rýchlo...",
    time: "pred 1 h",
    unread: true,
    icon: "📞",
    color: "#A78BFA",
  },
  {
    id: 6,
    channel: "email",
    from: "info@kollarconsult.sk",
    preview: "Faktúra #2024-0142 splatná zajtra",
    time: "pred 2 h",
    unread: true,
    icon: "✉️",
    color: "#F472B6",
  },
  {
    id: 7,
    channel: "sms",
    from: "+421 908 456 789",
    preview: "Ďakujem za rýchlu reakciu!",
    time: "pred 3 h",
    unread: false,
    icon: "💬",
    color: "#6EE7B7",
  },
  {
    id: 8,
    channel: "call",
    from: "Ján Novák",
    preview: "Nový klient – záujem o Business plán",
    time: "pred 4 h",
    unread: false,
    icon: "📞",
    color: "#A78BFA",
  },
];

export default function InboxPage() {
  return (
    <div>
      <TopBar
        title="Inbox"
        subtitle="Všetky správy z hovorov, emailov, SMS a WhatsApp na jednom mieste"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            Označiť všetko ako prečítané
          </button>
        }
      />

      {/* Channel filters */}
      <div className="mb-6 grid gap-3 md:grid-cols-5">
        {[
          { name: "Všetko", count: 284, active: true },
          { name: "📞 Hovory", count: 142 },
          { name: "✉️ Emaily", count: 89 },
          { name: "💬 SMS", count: 38 },
          { name: "💚 WhatsApp", count: 15 },
        ].map((f) => (
          <button
            key={f.name}
            className={`glass rounded-2xl p-4 text-left transition ${
              f.active ? "border-[#A78BFA]/40" : ""
            }`}
          >
            <div className="text-xs text-white/50">{f.name}</div>
            <div className="mt-2 font-serif text-2xl text-white">{f.count}</div>
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
        {/* List */}
        <div className="glass overflow-hidden rounded-2xl">
          <div className="border-b border-white/8 p-4">
            <input
              type="text"
              placeholder="🔍 Hľadať v inboxe..."
              className="w-full rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          <div className="max-h-[700px] overflow-y-auto">
            {messages.map((m, i) => (
              <div
                key={m.id}
                className={`cursor-pointer border-b border-white/5 p-4 transition last:border-b-0 hover:bg-white/[0.02] ${
                  i === 0 ? "bg-gradient-to-r from-[#A78BFA]/10 to-transparent" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm"
                    style={{ backgroundColor: `${m.color}20`, color: m.color }}
                  >
                    {m.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-sm font-medium text-white">{m.from}</div>
                      <div className="shrink-0 text-[11px] text-white/40">{m.time}</div>
                    </div>
                    <div className="mt-1 truncate text-xs text-white/55">{m.preview}</div>
                  </div>
                  {m.unread && (
                    <div className="h-2 w-2 shrink-0 rounded-full bg-[#F472B6]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversation detail */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-sm font-semibold text-[#0A0A14]">
                MH
              </div>
              <div>
                <div className="text-sm font-medium text-white">Mária Horváthová</div>
                <div className="text-xs text-white/40">📞 Hovor · pred 2 min · 2:34</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="glass rounded-full p-2 text-xs text-white/60 hover:text-white">📅</button>
              <button className="glass rounded-full p-2 text-xs text-white/60 hover:text-white">📧</button>
              <button className="glass rounded-full p-2 text-xs text-white/60 hover:text-white">⭐</button>
            </div>
          </div>

          {/* Transcript */}
          <div className="mt-6 space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs">👤</div>
              <div className="flex-1">
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-white/80">
                  Dobrý deň, volám kvôli termínu na kontrolu zraku.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-xs">🧠</div>
              <div className="flex-1">
                <div className="rounded-2xl border border-[#A78BFA]/20 bg-gradient-to-br from-[#A78BFA]/10 to-[#F472B6]/5 px-4 py-3 text-sm text-white/85">
                  Dobrý deň, rada vám pomôžem. Máte preferovaný deň alebo čas?
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs">👤</div>
              <div className="flex-1">
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-white/80">
                  Ideálne budúci utorok popoludní.
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-xs">🧠</div>
              <div className="flex-1">
                <div className="rounded-2xl border border-[#A78BFA]/20 bg-gradient-to-br from-[#A78BFA]/10 to-[#F472B6]/5 px-4 py-3 text-sm text-white/85">
                  V utorok 22. apríla mám voľno o 14:00 a 16:00. Ktorý vám vyhovuje?
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="mt-6 border-t border-white/5 pt-4">
            <div className="mb-3 text-xs uppercase tracking-widest text-white/40">AI navrhuje</div>
            <div className="flex flex-wrap gap-2">
              <button className="rounded-full border border-[#A78BFA]/30 bg-[#A78BFA]/5 px-3 py-1.5 text-xs text-[#A78BFA] transition hover:bg-[#A78BFA]/15">
                ✓ Potvrdiť rezerváciu
              </button>
              <button className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/70">
                📧 Poslať info
              </button>
              <button className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/70">
                ➕ Pridať do CRM
              </button>
              <button className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/70">
                📞 Zavolať späť
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
