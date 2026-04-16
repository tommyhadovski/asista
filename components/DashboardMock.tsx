export function DashboardMock() {
  return (
    <section className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute inset-0 -z-20 mesh-gradient opacity-60" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Dashboard
          </div>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-6xl">
            Váš biznis <br />
            <span className="font-serif italic gradient-text">na jednom displeji.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/55">
            Hovory, kalendár, financie, tím, klienti. Každé ráno dostanete prehľad,
            každý večer jedno tlačidlo: &ldquo;Čo mám spraviť zajtra?&rdquo;
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-[#A78BFA]/20 via-[#F472B6]/15 to-[#6EE7B7]/10 blur-3xl" />

          <div className="glass overflow-hidden rounded-3xl">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                </div>
                <div className="ml-4 text-xs text-white/40">app.aiasista.eu / dashboard</div>
              </div>
              <div className="flex items-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-2 text-[#6EE7B7]">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-[#6EE7B7]" />
                  Online · Asista zapnutá
                </span>
              </div>
            </div>

            <div className="grid gap-px bg-white/5 md:grid-cols-12">
              {/* Sidebar */}
              <div className="col-span-12 bg-[#050509] p-6 md:col-span-2">
                <div className="mb-6 text-[10px] uppercase tracking-widest text-white/30">Navigácia</div>
                <div className="space-y-1 text-xs">
                  {[
                    { icon: "📊", label: "Prehľad", active: true },
                    { icon: "📞", label: "Hovory" },
                    { icon: "📅", label: "Kalendár" },
                    { icon: "👥", label: "Klienti" },
                    { icon: "💼", label: "Financie" },
                    { icon: "⚡", label: "Tím" },
                    { icon: "🧠", label: "AI Copilot" },
                    { icon: "🔄", label: "Automatizácie" },
                    { icon: "⚙️", label: "Nastavenia" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 transition ${
                        item.active
                          ? "bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white"
                          : "text-white/45 hover:text-white/80"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="hidden md:inline">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-12 bg-[#050509] p-6 md:col-span-10">
                {/* Stats row */}
                <div className="grid gap-3 md:grid-cols-4">
                  {[
                    { label: "Dnešné hovory", value: "34", change: "+12%", color: "#A78BFA", icon: "📞" },
                    { label: "Rezervácie", value: "18", change: "+28%", color: "#F472B6", icon: "📅" },
                    { label: "Zachytené €", value: "2 340€", change: "+41%", color: "#6EE7B7", icon: "💰" },
                    { label: "Pipeline", value: "47 800€", change: "+19%", color: "#FCD34D", icon: "📊" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass rounded-2xl p-5">
                      <div className="flex items-center justify-between text-xs text-white/45">
                        <span>{stat.label}</span>
                        <span>{stat.icon}</span>
                      </div>
                      <div className="mt-3 font-serif text-3xl" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-[#6EE7B7]">
                        ↑ {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second row: chart + calendar */}
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {/* Revenue chart */}
                  <div className="glass rounded-2xl p-6 md:col-span-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Príjmy vs. stratené príležitosti</div>
                        <div className="text-xs text-white/40">Posledných 7 dní</div>
                      </div>
                      <div className="flex gap-3 text-xs">
                        <span className="flex items-center gap-1.5 text-[#6EE7B7]">
                          <span className="h-2 w-2 rounded-sm bg-[#6EE7B7]" /> Zarobené
                        </span>
                        <span className="flex items-center gap-1.5 text-[#F472B6]">
                          <span className="h-2 w-2 rounded-sm bg-[#F472B6]" /> Zachytené Asistou
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex h-36 items-end justify-between gap-3">
                      {[
                        { day: "Po", h1: 55, h2: 20 },
                        { day: "Ut", h1: 72, h2: 28 },
                        { day: "St", h1: 48, h2: 15 },
                        { day: "Št", h1: 88, h2: 32 },
                        { day: "Pi", h1: 95, h2: 38 },
                        { day: "So", h1: 40, h2: 48 },
                        { day: "Ne", h1: 22, h2: 35 },
                      ].map((b) => (
                        <div key={b.day} className="flex flex-1 flex-col items-center gap-2">
                          <div className="flex w-full flex-col gap-0.5">
                            <div
                              className="w-full rounded-t-md bg-gradient-to-t from-[#F472B6]/70 to-[#F472B6]"
                              style={{ height: `${b.h2 * 0.8}px` }}
                            />
                            <div
                              className="w-full bg-gradient-to-t from-[#6EE7B7]/70 to-[#6EE7B7]"
                              style={{ height: `${b.h1 * 0.8}px` }}
                            />
                          </div>
                          <div className="text-[10px] text-white/40">{b.day}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calendar mini */}
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Dnešný kalendár</div>
                      <span className="text-xs text-white/40">15. apr</span>
                    </div>
                    <div className="mt-5 space-y-2">
                      {[
                        { time: "09:00", title: "Stretnutie · Hájek", color: "#A78BFA" },
                        { time: "11:30", title: "Obhliadka · Ružinov", color: "#F472B6" },
                        { time: "14:00", title: "Call · Varga Group", color: "#6EE7B7" },
                        { time: "16:00", title: "Team sync", color: "#FCD34D" },
                      ].map((e, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                          <div
                            className="h-full w-1 rounded-full"
                            style={{ backgroundColor: e.color, minHeight: "28px" }}
                          />
                          <div className="flex-1 overflow-hidden">
                            <div className="text-[11px] text-white/40">{e.time}</div>
                            <div className="truncate text-xs font-medium text-white/85">{e.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Third row: recent calls + AI insights */}
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {/* Recent calls */}
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Najnovšie hovory</div>
                      <span className="text-xs text-white/40">Live</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      {[
                        { name: "Mária Horváthová", status: "Rezervované", icon: "📅", color: "#6EE7B7" },
                        { name: "Peter Kováč", status: "Info", icon: "💬", color: "#A78BFA" },
                        { name: "Lucia Vargová", status: "Prepojené", icon: "📞", color: "#F472B6" },
                      ].map((c, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs">
                            {c.icon}
                          </div>
                          <div className="flex-1 text-xs text-white/85">{c.name}</div>
                          <div className="text-[10px] font-medium" style={{ color: c.color }}>
                            {c.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">🧠 AI návrhy pre vás</div>
                      <span className="text-xs text-[#A78BFA]">3 nové</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-[#A78BFA]/20 bg-[#A78BFA]/5 p-3 text-xs text-white/80">
                        💡 Navolajte späť 4 zmeškané hovory z piatku. Potenciál ~3 200€.
                      </div>
                      <div className="rounded-xl border border-[#F472B6]/20 bg-[#F472B6]/5 p-3 text-xs text-white/80">
                        📈 Uzavreli ste 3 faktúry nad 1 500€. Pošlite ďakovný email?
                      </div>
                      <div className="rounded-xl border border-[#6EE7B7]/20 bg-[#6EE7B7]/5 p-3 text-xs text-white/80">
                        ⚠️ ABC Reality mešká 12 dní. Pošlem pripomienku?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-white/50">
          Desktop · Mobilná aplikácia · Web · API · Všetko v cene
        </p>
      </div>
    </section>
  );
}
