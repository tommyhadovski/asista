export function Footer() {
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
              AI asistentka, ktorá pomáha slovenským firmám rásť.
              Dvíhame hovory, voláme späť, posielame pripomienky.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full border border-[#6EE7B7]/20 bg-[#6EE7B7]/5 px-3 py-1.5 text-xs text-[#6EE7B7] w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7] animate-blink" />
              Všetky systémy funkčné
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Produkt</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#ako" className="hover:text-white transition">Ako to funguje</a></li>
                <li><a href="#cennik" className="hover:text-white transition">Cenník</a></li>
                <li><a href="#demo" className="hover:text-white transition">Demo</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Spoločnosť</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition">O nás</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Právne</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition">Podmienky</a></li>
                <li><a href="#" className="hover:text-white transition">Súkromie</a></li>
                <li><a href="#" className="hover:text-white transition">GDPR</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© 2026 AiAsista • Bratislava, Slovensko</p>
          <p className="flex items-center gap-2">
            Postavené s ❤️ v Európe
            <span className="h-1 w-1 rounded-full bg-white/30" />
            aiasista.eu
          </p>
        </div>
      </div>
    </footer>
  );
}
