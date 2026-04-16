const rows = [
  { feature: "Answers calls 24/7", asista: "Yes", human: "No (8h/day)" },
  { feature: "Weekends & holidays", asista: "Non-stop", human: "Absent" },
  { feature: "Response time", asista: "2 seconds", human: "5-15 seconds" },
  { feature: "Parallel calls", asista: "Unlimited", human: "1 at a time" },
  { feature: "No fatigue errors", asista: "Yes", human: "No" },
  { feature: "Multilingual (SK/EN/DE)", asista: "Yes", human: "Rarely" },
  { feature: "Vacation / Sick leave", asista: "Never", human: "Regularly" },
  { feature: "Hiring & training", asista: "0 hours", human: "Weeks" },
  { feature: "Monthly cost", asista: "from 299€", human: "~1,500€ + taxes" },
];

export function ComparisonEN() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-32 noise">
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-50" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Comparison
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            AiAsista vs. <br />
            <span className="font-serif italic gradient-text">a human receptionist.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/55">
            Both have their place. But when you add up time, money and reliability,
            the difference is clear.
          </p>
        </div>

        <div className="glass mt-16 overflow-hidden rounded-3xl">
          <div className="grid grid-cols-3 border-b border-white/8 bg-gradient-to-r from-white/[0.02] to-white/[0.04] p-6">
            <div className="text-xs uppercase tracking-widest text-white/40">Feature</div>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
              AiAsista
            </div>
            <div className="text-center text-sm font-medium text-white/50">Human receptionist</div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center p-6 transition hover:bg-white/[0.02] ${
                i < rows.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="text-sm text-white/70">{row.feature}</div>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#6EE7B7]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6EE7B7]/10 text-xs">✓</span>
                {row.asista}
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-white/50">{row.human}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/50">
            Annual savings on salary alone:{" "}
            <span className="gradient-text font-serif text-2xl">~15,600€</span>
          </p>
        </div>
      </div>
    </section>
  );
}
