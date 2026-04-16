const industries = [
  { icon: "🏢", name: "Real Estate Agencies", stat: "+42% viewings", desc: "AiAsista qualifies prospects, schedules viewings and sends property information to clients." },
  { icon: "🏥", name: "Private Clinics", stat: "0 missed calls", desc: "Urgent case triage, appointment booking, CRM integration. Even on weekends." },
  { icon: "⚖️", name: "Law Firms", stat: "24/7 reception", desc: "Takes new clients, qualifies cases and schedules initial consultations." },
  { icon: "🚗", name: "Car Dealerships", stat: "Auto advisor", desc: "Answers questions about models, prices, availability. Schedules test drives." },
  { icon: "🏨", name: "Hotels & Resorts", stat: "Multilingual", desc: "Reservations, service inquiries, concierge assistance in Slovak, English and German." },
  { icon: "💼", name: "B2B Services", stat: "Lead qualification", desc: "Accounting, consultants, agencies. Lead qualification and onboarding automation." },
];

export function ForWhomEN() {
  return (
    <section id="for-whom" className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="absolute inset-0 -z-20 mesh-gradient" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            For whom
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            For businesses where <br />
            <span className="font-serif italic gradient-text">every call means money.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/55">
            AiAsista adapts to your industry. From real estate through private clinics
            to law firms and car dealerships.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.name} className="glass group relative overflow-hidden rounded-3xl p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 text-[10rem] leading-none opacity-[0.04] transition-all duration-700 group-hover:opacity-[0.08] group-hover:rotate-12">
                {i.icon}
              </div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A78BFA]/20 to-[#F472B6]/10 text-3xl border border-white/5">
                {i.icon}
              </div>
              <h3 className="mt-6 text-xl font-medium">{i.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{i.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#6EE7B7]/20 bg-[#6EE7B7]/5 px-3 py-1 text-xs text-[#6EE7B7]">
                <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" />
                {i.stat}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/50">
          Working in a different industry? AiAsista adapts.{" "}
          <a href="#demo" className="text-[#A78BFA] hover:text-[#F472B6] transition hover:underline">Contact us →</a>
        </p>
      </div>
    </section>
  );
}
