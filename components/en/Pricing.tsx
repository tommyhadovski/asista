const plans = [
  {
    name: "Starter",
    price: "299",
    tagline: "For small businesses & freelancers",
    modules: ["Voice & Calls", "Calendar", "CRM light"],
    features: [
      "Up to 200 calls per month",
      "1 phone number",
      "Google / Outlook calendar",
      "Basic CRM (up to 500 contacts)",
      "1 language (SK)",
      "Email support",
      "Free setup",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "699",
    tagline: "For growing companies",
    modules: ["+ Finance", "+ Meetings", "+ Automations", "+ AI Copilot"],
    features: [
      "Up to 1,000 calls per month",
      "Outbound calls & SMS campaigns",
      "Financial analytics + reports",
      "Meeting AI (transcript, summary, tasks)",
      "AI Copilot (ask your business anything)",
      "Workflow automations",
      "CRM up to 5,000 contacts",
      "2 languages (SK + EN)",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "1 499",
    tagline: "For chains & larger companies",
    modules: ["Full operating system"],
    features: [
      "Unlimited calls & SMS",
      "Custom AI voice",
      "4+ languages",
      "Team Operations module",
      "Advanced automations & API",
      "Unlimited CRM contacts",
      "Dedicated account manager",
      "Custom integrations (SAP, ERP...)",
      "SLA 99.9% uptime",
      "On-premise option",
    ],
    highlight: false,
  },
];

export function PricingEN() {
  return (
    <section id="pricing" className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-32 noise">
      <div className="absolute inset-0 -z-10 mesh-gradient" />
      <div className="absolute inset-0 -z-20 dotted-bg opacity-30" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Pricing
          </div>
          <h2 className="mt-6 text-4xl font-medium md:text-6xl">
            One AI team. <br />
            <span className="font-serif italic gradient-text">Fraction of the cost.</span>
          </h2>
          <p className="mt-6 text-white/55">All plans include a 14-day free trial. No credit card required.</p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`group relative overflow-hidden rounded-3xl p-10 transition-all duration-500 ${
                p.highlight ? "glass border-[#A78BFA]/40" : "glass"
              }`}
            >
              {p.highlight && (
                <>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#A78BFA]/10 via-transparent to-[#F472B6]/5" />
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#A78BFA] to-[#F472B6] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A0A14]">
                    Most popular
                  </div>
                </>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm text-white/50">{p.tagline}</p>

              <div className="mt-8 flex items-baseline gap-1">
                <span className={`font-serif text-6xl ${p.highlight ? "gradient-text" : ""}`}>
                  {p.price}€
                </span>
                <span className="text-sm text-white/50">/month</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.modules.map((m) => (
                  <span key={m} className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1 text-[10px] text-white/60">
                    {m}
                  </span>
                ))}
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <ul className="space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#6EE7B7]/10 text-xs text-[#6EE7B7]">✓</span>
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-10 inline-flex h-14 w-full items-center justify-center rounded-full text-sm font-semibold transition ${
                  p.highlight ? "btn-primary" : "btn-ghost"
                }`}
              >
                Try 14 days free
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/50">
          Need something custom?{" "}
          <a href="#demo" className="text-[#A78BFA] transition hover:text-[#F472B6]">
            Contact us for a tailored package →
          </a>
        </p>
      </div>
    </section>
  );
}
