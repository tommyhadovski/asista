export function NavEN() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A14]/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/en" className="group flex items-center gap-2.5 text-lg font-medium tracking-tight">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 animate-breathe rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6] blur-sm" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
          </span>
          <span>aiasista<span className="font-serif italic text-[#A78BFA]">.</span></span>
        </a>

        <nav className="hidden items-center gap-10 text-sm text-white/55 md:flex">
          <a href="#how" className="transition hover:text-white">How it works</a>
          <a href="#for-whom" className="transition hover:text-white">For whom</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#faq" className="transition hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 text-xs text-white/50 sm:flex">
            <a href="/" className="transition hover:text-white">SK</a>
            <span>|</span>
            <span className="text-white">EN</span>
          </div>
          <a href="/app" className="hidden text-sm text-white/60 transition hover:text-white sm:inline">
            Sign in
          </a>
          <a href="/app/dashboard" className="btn-primary rounded-full px-5 py-2.5 text-sm">
            Open app →
          </a>
        </div>
      </div>
    </header>
  );
}
