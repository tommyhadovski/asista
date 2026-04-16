export function FooterEN() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050509] py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span className="absolute inset-0 animate-breathe rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
                <span className="relative h-2 w-2 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
              </span>
              aiasista<span className="text-[#A78BFA]">.</span>
            </div>
            <p className="mt-5 text-sm text-white/50">
              AI boss for your business. We answer calls, manage calendars,
              track finances and coordinate your team. 24/7, non-stop.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Product</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#how" className="hover:text-white transition">How it works</a></li>
                <li><a href="#for-whom" className="hover:text-white transition">For whom</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Company</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#demo" className="hover:text-white transition">Contact</a></li>
                <li><a href="mailto:ahoj@aiasista.eu" className="hover:text-white transition">ahoj@aiasista.eu</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Legal</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#demo" className="hover:text-white transition">Terms</a></li>
                <li><a href="#demo" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#demo" className="hover:text-white transition">GDPR</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© 2026 AiAsista - Bratislava, Slovakia</p>
          <p className="flex items-center gap-2">
            Built with love in Europe
            <span className="h-1 w-1 rounded-full bg-white/30" />
            aiasista.eu
          </p>
        </div>
      </div>
    </footer>
  );
}
