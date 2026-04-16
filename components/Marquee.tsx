const items = [
  "🏢 Realitné kancelárie",
  "⚖️ Advokátske kancelárie",
  "🏥 Privátne kliniky",
  "🦷 Zubné reťazce",
  "🚗 Autosalóny",
  "🏨 Butique hotely",
  "💼 Účtovnícke firmy",
  "🏗️ Stavebné spoločnosti",
  "📊 Konzultačné firmy",
  "🛒 E-commerce brandy",
  "🎓 Súkromné školy",
  "💅 Wellness rezorty",
];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-white/40">
          AiAsista pracuje pre firmy, ktoré nerobia kompromisy
        </p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 gap-4 px-2">
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/8 bg-white/[0.02] px-6 py-3 text-sm text-white/70 backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
