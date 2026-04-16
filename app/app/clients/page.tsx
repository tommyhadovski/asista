import { TopBar } from "@/components/app/TopBar";

const clients = [
  { name: "Hájek Reality", status: "Aktívny", value: "18 400€", deals: 3, lastContact: "pred 2 dňami", color: "#6EE7B7" },
  { name: "Varga Auto Group", status: "Aktívny", value: "12 800€", deals: 2, lastContact: "pred 5 hodinami", color: "#6EE7B7" },
  { name: "Klinika Kollárová", status: "Aktívny", value: "9 600€", deals: 4, lastContact: "včera", color: "#6EE7B7" },
  { name: "Novotný s.r.o.", status: "V jednaní", value: "5 200€", deals: 1, lastContact: "pred týždňom", color: "#FCD34D" },
  { name: "ABC Reality", status: "Mešká platba", value: "2 450€", deals: 1, lastContact: "pred 12 dňami", color: "#F472B6" },
  { name: "Dubnická Real Estate", status: "Aktívny", value: "8 900€", deals: 2, lastContact: "pred 3 dňami", color: "#6EE7B7" },
  { name: "Kollár Consulting", status: "Mešká platba", value: "1 200€", deals: 1, lastContact: "pred 3 dňami", color: "#F472B6" },
  { name: "Tatra Properties", status: "Nový lead", value: "–", deals: 0, lastContact: "dnes", color: "#A78BFA" },
];

const pipeline = [
  { stage: "Nový lead", count: 12, value: "48 000€", color: "#A78BFA" },
  { stage: "Kvalifikovaný", count: 8, value: "32 500€", color: "#F472B6" },
  { stage: "V jednaní", count: 5, value: "21 800€", color: "#FCD34D" },
  { stage: "Uzavretý", count: 14, value: "67 200€", color: "#6EE7B7" },
];

export default function ClientsPage() {
  return (
    <div>
      <TopBar
        title="Klienti & Pipeline"
        subtitle="CRM prehľad všetkých kontaktov a obchodných príležitostí"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            + Pridať klienta
          </button>
        }
      />

      {/* Pipeline */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {pipeline.map((p) => (
          <div key={p.stage} className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="text-xs text-white/45">{p.stage}</div>
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
            </div>
            <div className="mt-3 font-serif text-3xl" style={{ color: p.color }}>
              {p.count}
            </div>
            <div className="mt-1 text-xs text-white/55">{p.value}</div>
          </div>
        ))}
      </div>

      {/* Search & filters */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Hľadať klienta..."
            className="bg-transparent text-white/80 outline-none placeholder:text-white/30"
          />
        </div>
        <button className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/70">
          Status ↓
        </button>
        <button className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/70">
          Hodnota ↓
        </button>
      </div>

      {/* Clients list */}
      <div className="glass overflow-hidden rounded-2xl">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 border-b border-white/8 px-6 py-4 text-xs uppercase tracking-widest text-white/40">
          <div>Klient</div>
          <div>Status</div>
          <div>Hodnota</div>
          <div>Dealy</div>
          <div>Posledný kontakt</div>
        </div>

        {clients.map((c, i) => (
          <div
            key={i}
            className="grid cursor-pointer grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b border-white/5 px-6 py-5 transition last:border-b-0 hover:bg-white/[0.02]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA]/20 to-[#F472B6]/10 text-sm font-medium text-white">
                {c.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-white">{c.name}</div>
              </div>
            </div>
            <div>
              <span
                className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                style={{ backgroundColor: `${c.color}15`, color: c.color }}
              >
                {c.status}
              </span>
            </div>
            <div className="font-serif text-base text-white/85">{c.value}</div>
            <div className="text-sm text-white/55">{c.deals}</div>
            <div className="text-sm text-white/45">{c.lastContact}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
