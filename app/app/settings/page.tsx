import { TopBar } from "@/components/app/TopBar";

export default function SettingsPage() {
  return (
    <div>
      <TopBar
        title="Nastavenia"
        subtitle="Prispôsobte AiAsistu vašej firme"
      />

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        {/* Sub-nav */}
        <div className="space-y-1 text-sm">
          {[
            { label: "Profil firmy", active: true, icon: "🏢" },
            { label: "AI hlas & jazyk", icon: "🎙️" },
            { label: "Otváracie hodiny", icon: "⏰" },
            { label: "Služby & ceny", icon: "💰" },
            { label: "FAQ", icon: "💬" },
            { label: "Integrácie", icon: "🔌" },
            { label: "Notifikácie", icon: "🔔" },
            { label: "Tím & práva", icon: "👥" },
            { label: "Fakturácia", icon: "💳" },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left transition ${
                item.active
                  ? "bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white"
                  : "text-white/55 hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="glass rounded-3xl p-8">
          <h2 className="text-xl font-medium">Profil firmy</h2>
          <p className="mt-1 text-sm text-white/50">
            Základné informácie, ktoré AiAsista používa pri komunikácii so zákazníkmi.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-white/45">Názov firmy</label>
              <input
                type="text"
                defaultValue="AiAsista s.r.o."
                className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#A78BFA]/40"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-widest text-white/45">Telefón</label>
                <input
                  type="tel"
                  defaultValue="+421 905 123 456"
                  className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#A78BFA]/40"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/45">Email</label>
                <input
                  type="email"
                  defaultValue="ahoj@aiasista.eu"
                  className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#A78BFA]/40"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/45">Adresa</label>
              <input
                type="text"
                defaultValue="Hlavná 1, Bratislava"
                className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#A78BFA]/40"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/45">Popis firmy (čo AiAsista povie o vás)</label>
              <textarea
                defaultValue="Sme AiAsista – AI operačný systém pre slovenské firmy. Pomáhame kaderníctvam, klinikám, realitkám a ďalším firmám rásť vďaka automatizácii voice, CRM a financií."
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#A78BFA]/40"
              />
            </div>

            {/* AI Voice Settings */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">AiAsista je aktívna</div>
                  <div className="mt-1 text-xs text-white/50">Asista dvíha hovory a vykonáva automatizácie</div>
                </div>
                <div className="relative h-7 w-12 cursor-pointer rounded-full bg-gradient-to-r from-[#A78BFA] to-[#F472B6]">
                  <div className="absolute left-[22px] top-0.5 h-6 w-6 rounded-full bg-white" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="btn-ghost rounded-full px-6 py-3 text-sm">Zrušiť</button>
              <button className="btn-primary rounded-full px-6 py-3 text-sm">Uložiť zmeny</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
