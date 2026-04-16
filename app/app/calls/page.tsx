import { TopBar } from "@/components/app/TopBar";

const calls = [
  {
    id: 1,
    name: "Mária Horváthová",
    phone: "+421 905 123 456",
    time: "15. apr · 14:23",
    duration: "2:34",
    status: "Rezervované",
    statusColor: "#6EE7B7",
    summary: "Chcela sa objednať na kontrolu. Termín dohodnutý na 22. apríla o 10:00.",
  },
  {
    id: 2,
    name: "Peter Kováč",
    phone: "+421 907 234 567",
    time: "15. apr · 14:09",
    duration: "1:48",
    status: "Info poskytnuté",
    statusColor: "#A78BFA",
    summary: "Pýtal sa na ceny služieb a otváraciu dobu. Poslaný email s cenníkom.",
  },
  {
    id: 3,
    name: "Lucia Vargová",
    phone: "+421 903 345 678",
    time: "15. apr · 13:55",
    duration: "0:42",
    status: "Prepojené",
    statusColor: "#F472B6",
    summary: "Urgentná záležitosť. Hovor prepojený na pracovníka.",
  },
  {
    id: 4,
    name: "Ján Novák",
    phone: "+421 908 456 789",
    time: "15. apr · 13:42",
    duration: "3:12",
    status: "Rezervované",
    statusColor: "#6EE7B7",
    summary: "Nový klient. Záujem o balík služieb. Termín 18. apr o 16:00.",
  },
  {
    id: 5,
    name: "Neznáme číslo",
    phone: "+421 910 567 890",
    time: "15. apr · 13:21",
    duration: "1:05",
    status: "Spam",
    statusColor: "#ef4444",
    summary: "Telemarketing. Automaticky ukončené.",
  },
  {
    id: 6,
    name: "Anna Svobodová",
    phone: "+421 902 678 901",
    time: "15. apr · 12:58",
    duration: "2:11",
    status: "Rezervované",
    statusColor: "#6EE7B7",
    summary: "Presun termínu zo 17. na 20. apríla. Potvrdenie odoslané SMS.",
  },
];

export default function CallsPage() {
  return (
    <div>
      <TopBar
        title="Hovory"
        subtitle="Všetky hovory spracované AiAsistou"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            Exportovať
          </button>
        }
      />

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {["Všetky", "Rezervované", "Info poskytnuté", "Prepojené", "Spam"].map((f, i) => (
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
        <div className="ml-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Hľadať hovor..."
            className="bg-transparent text-white/80 outline-none placeholder:text-white/30"
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Dnes spolu</div>
          <div className="mt-2 font-serif text-3xl text-[#A78BFA]">34</div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Priemerná dĺžka</div>
          <div className="mt-2 font-serif text-3xl text-[#F472B6]">2:18</div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Úspešnosť</div>
          <div className="mt-2 font-serif text-3xl text-[#6EE7B7]">94%</div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Rezervácie</div>
          <div className="mt-2 font-serif text-3xl text-[#FCD34D]">18</div>
        </div>
      </div>

      {/* Calls list */}
      <div className="glass overflow-hidden rounded-2xl">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-white/8 px-6 py-4 text-xs uppercase tracking-widest text-white/40">
          <div>Volajúci</div>
          <div className="hidden md:block">Čas</div>
          <div>Dĺžka</div>
          <div>Status</div>
        </div>

        {calls.map((c) => (
          <div
            key={c.id}
            className="group grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-white/5 px-6 py-5 transition last:border-b-0 hover:bg-white/[0.02]"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA]/20 to-[#F472B6]/10 text-sm">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-white">{c.name}</div>
                  <div className="text-xs text-white/40">{c.phone}</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-white/55">{c.summary}</div>
            </div>
            <div className="hidden text-xs text-white/50 md:block">{c.time}</div>
            <div className="text-xs text-white/50">{c.duration}</div>
            <div className="flex items-center">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ backgroundColor: `${c.statusColor}15`, color: c.statusColor }}
              >
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
