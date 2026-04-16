export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A14]/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="group flex items-center gap-2.5 text-lg font-medium tracking-tight">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 animate-breathe rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6] blur-sm" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
          </span>
          <span>aiasista<span className="font-serif italic text-[#A78BFA]">.</span></span>
        </a>

        <nav className="hidden items-center gap-10 text-sm text-white/55 md:flex">
          <a href="#ako" className="transition hover:text-white">Ako to funguje</a>
          <a href="#pre-koho" className="transition hover:text-white">Pre koho</a>
          <a href="#cennik" className="transition hover:text-white">Cenník</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-[#6EE7B7]/30 bg-[#6EE7B7]/5 px-3 py-1.5 text-xs text-[#6EE7B7] sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6EE7B7] opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6EE7B7]"></span>
            </span>
            Live
          </div>
          <a href="/app" className="hidden text-sm text-white/60 transition hover:text-white sm:inline">
            Prihlásiť sa
          </a>
          <a href="/app/dashboard" className="btn-primary rounded-full px-5 py-2.5 text-sm">
            Otvoriť appku →
          </a>
        </div>
      </div>
    </header>
  );
}
