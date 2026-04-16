import { TopBar } from "@/components/app/TopBar";

const days = ["Po 14.", "Ut 15.", "St 16.", "Št 17.", "Pi 18.", "So 19.", "Ne 20."];
const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const events = [
  { day: 0, hour: 9, length: 1.5, title: "Stretnutie · Hájek Reality", color: "#A78BFA" },
  { day: 0, hour: 14, length: 1, title: "Call · Varga Group", color: "#F472B6" },
  { day: 1, hour: 10, length: 1, title: "Obhliadka · Ružinov", color: "#6EE7B7" },
  { day: 1, hour: 15, length: 2, title: "Team sync + review", color: "#FCD34D" },
  { day: 2, hour: 9, length: 1, title: "Klinika Kollárová", color: "#A78BFA" },
  { day: 2, hour: 13, length: 1.5, title: "Porada partneri", color: "#F472B6" },
  { day: 3, hour: 11, length: 1, title: "Nový klient intro", color: "#6EE7B7" },
  { day: 3, hour: 16, length: 1, title: "Follow-up Varga", color: "#FCD34D" },
  { day: 4, hour: 10, length: 2, title: "Strategický meeting", color: "#A78BFA" },
  { day: 4, hour: 14, length: 1, title: "Obhliadka · Staré Mesto", color: "#F472B6" },
];

export default function CalendarPage() {
  return (
    <div>
      <TopBar
        title="Kalendár"
        subtitle="Týždenný prehľad · synchronizované s Google Calendar"
        action={
          <button className="btn-primary rounded-full px-5 py-2.5 text-sm">
            + Nová udalosť
          </button>
        }
      />

      {/* Week selector */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="glass rounded-full px-3 py-2 text-sm text-white/70 hover:text-white">←</button>
          <div className="text-sm font-medium">14. – 20. apríl 2026</div>
          <button className="glass rounded-full px-3 py-2 text-sm text-white/70 hover:text-white">→</button>
        </div>
        <div className="flex gap-2">
          {["Deň", "Týždeň", "Mesiac"].map((v, i) => (
            <button
              key={v}
              className={`rounded-full px-4 py-2 text-xs transition ${
                i === 1
                  ? "bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white border border-[#A78BFA]/30"
                  : "border border-white/10 bg-white/[0.02] text-white/60"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar grid */}
      <div className="glass overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="grid grid-cols-[auto_repeat(7,1fr)] border-b border-white/8">
          <div className="w-16" />
          {days.map((d, i) => (
            <div
              key={d}
              className={`p-4 text-center text-xs ${
                i === 1 ? "bg-gradient-to-b from-[#A78BFA]/10 to-transparent text-[#A78BFA]" : "text-white/50"
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Hours */}
        {hours.map((hour, hIdx) => (
          <div key={hour} className="grid grid-cols-[auto_repeat(7,1fr)] border-b border-white/5 last:border-b-0">
            <div className="w-16 p-3 text-right text-[11px] text-white/30">{hour}</div>
            {days.map((_, dIdx) => {
              const event = events.find(
                (e) => e.day === dIdx && Math.floor(e.hour) === hIdx + 8
              );
              return (
                <div
                  key={dIdx}
                  className="relative min-h-[56px] border-l border-white/5 p-1"
                >
                  {event && (
                    <div
                      className="absolute inset-1 rounded-lg p-2 text-[11px] font-medium"
                      style={{
                        backgroundColor: `${event.color}20`,
                        borderLeft: `3px solid ${event.color}`,
                        color: event.color,
                        height: `${event.length * 56 - 8}px`,
                      }}
                    >
                      {event.title}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Upcoming */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <div className="text-sm font-medium">Najbližšie stretnutie</div>
          <div className="mt-3 font-serif text-2xl">Hájek Reality</div>
          <div className="mt-1 text-sm text-white/55">Zajtra 09:00 – 10:30 · Kancelária</div>
          <button className="mt-4 btn-ghost rounded-full px-4 py-2 text-xs">Pripraviť brief</button>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-sm font-medium">AI odporúčania</div>
          <div className="mt-3 text-sm text-white/70">
            ⏰ Piatok máte 4 voľné hodiny. AiAsista navrhuje dohodnúť follow-up hovory.
          </div>
          <button className="mt-4 btn-ghost rounded-full px-4 py-2 text-xs">Zobraziť detaily</button>
        </div>
      </div>
    </div>
  );
}
