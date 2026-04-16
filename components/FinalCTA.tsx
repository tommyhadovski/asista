export function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden py-40 noise">
      {/* Background effects */}
      <div className="absolute inset-0 -z-20 grid-bg opacity-30" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-[#A78BFA]/15 blur-[160px]" />
        <div className="absolute left-[20%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 animate-float-slow rounded-full bg-[#F472B6]/15 blur-[140px]" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#A78BFA]/30 bg-[#A78BFA]/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#A78BFA]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A78BFA] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A78BFA]"></span>
          </span>
          Dostupné od dnes
        </div>

        <h2 className="mt-8 text-5xl font-medium leading-[0.95] md:text-7xl">
          Vyskúšajte AiAsistu <br />
          <span className="font-serif italic gradient-text">zadarmo na 14 dní.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-white/60">
          Bez kreditky. Bez záväzku. Setup za 24 hodín. Ak vás nepresvedčí, rozídeme
          sa priateľsky.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:ahoj@aiasista.eu" className="btn-primary inline-flex h-14 items-center justify-center rounded-full px-10 text-sm">
            Rezervovať demo →
          </a>
          <a href="mailto:ahoj@aiasista.eu" className="btn-ghost inline-flex h-14 items-center justify-center rounded-full px-10 text-sm">
            ahoj@aiasista.eu
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/40">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" /> 14 dní zdarma
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" /> Setup za 24h
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" /> GDPR · EU
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" /> Bez záväzku
          </span>
        </div>
      </div>
    </section>
  );
}
