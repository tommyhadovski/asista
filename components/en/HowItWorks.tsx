const steps = [
  {
    n: "01",
    title: "Tell AiAsista about your business",
    time: "15 minutes",
    text: "We go through a quick questionnaire — opening hours, services, prices, FAQs. AiAsista learns everything.",
    icon: "🧠",
  },
  {
    n: "02",
    title: "We connect to your phone",
    time: "1 hour",
    text: "We set up call forwarding. You don't install anything. Your phone stays the same.",
    icon: "🔗",
  },
  {
    n: "03",
    title: "AiAsista works for you",
    time: "from day 2",
    text: "When you don't pick up, AiAsista answers. Your customer gets professional service. You get bookings.",
    icon: "⚡",
  },
];

export function HowItWorksEN() {
  return (
    <section id="how" className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-32 noise">
      <div className="absolute inset-0 -z-10 mesh-gradient" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Process
          </div>
          <h2 className="mt-6 text-4xl font-medium md:text-6xl">
            Get your own AI assistant <br />
            <span className="font-serif italic gradient-text">in 24 hours.</span>
          </h2>
        </div>

        <div className="mt-24 relative">
          <div className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-[#A78BFA]/30 to-transparent md:block" />
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-22 w-22 items-center justify-center">
                    <div className="absolute inset-0 animate-breathe rounded-full bg-[#A78BFA]/20 blur-xl" />
                    <div className="glass relative flex h-22 w-22 items-center justify-center rounded-full text-4xl" style={{ height: "88px", width: "88px" }}>
                      {s.icon}
                    </div>
                  </div>
                  <div className="mt-6 font-serif text-2xl text-[#A78BFA]">{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#6EE7B7]">{s.time}</div>
                  <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                  <p className="mt-3 max-w-xs text-sm text-white/55">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
