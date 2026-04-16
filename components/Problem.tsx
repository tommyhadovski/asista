import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  {
    value: 27,
    suffix: "%",
    label: "zameškaných hovorov",
    sub: "sa už nikdy nezavolá späť",
  },
  {
    value: 41,
    suffix: "%",
    label: "zákazníkov volá",
    sub: "mimo vašej pracovnej doby",
  },
  {
    value: 1200,
    suffix: "€",
    label: "mesačná strata",
    sub: "priemernej firmy na zameškaných hovoroch",
  },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-32 noise">
      <div className="absolute inset-0 -z-10 mesh-gradient" />
      <div className="absolute inset-0 -z-20 dotted-bg opacity-40" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Problém
          </div>
          <h2 className="mt-6 text-4xl font-medium md:text-6xl">
            Koľko zákazníkov ste <br />
            <span className="font-serif italic gradient-text">stratili tento týždeň?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/50">
            Zákazníci vám volajú keď nestíhate. Večer. Cez obed. Počas zákroku. Na dovolenke.
            Každý neodpovedaný hovor je stratený klient.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass group relative overflow-hidden rounded-3xl p-10 text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#A78BFA]/60 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="font-serif text-6xl gradient-text md:text-7xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-4 text-base font-medium text-white">{stat.label}</div>
              <p className="mt-1 text-sm text-white/50">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
