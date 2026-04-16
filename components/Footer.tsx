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
              AI šéf pre vašu firmu. Dvíhame hovory, manažujeme kalendáre,
              sledujeme financie a koordinujeme tím. 24/7, bez prestávky.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full border border-[#6EE7B7]/20 bg-[#6EE7B7]/5 px-3 py-1.5 text-xs text-[#6EE7B7] w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7] animate-blink" />
              Všetky systémy funkčné
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Produkt</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#ako" className="hover:text-white transition">Ako to funguje</a></li>
                <li><a href="#pre-koho" className="hover:text-white transition">Pre koho</a></li>
                <li><a href="#cennik" className="hover:text-white transition">Cenník</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Spoločnosť</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#demo" className="hover:text-white transition">Kontakt</a></li>
                <li><a href="mailto:ahoj@aiasista.eu" className="hover:text-white transition">ahoj@aiasista.eu</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Právne</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li><a href="#demo" className="hover:text-white transition">Podmienky</a></li>
                <li><a href="#demo" className="hover:text-white transition">Súkromie</a></li>
                <li><a href="#demo" className="hover:text-white transition">GDPR</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Kontakt</p>
              <ul className="mt-5 space-y-3 text-white/70">
                <li className="text-white/50">ahoj@aiasista.eu</li>
                <li className="text-white/50">Bratislava, Slovensko</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© 2026 AiAsista • Bratislava, Slovensko</p>
          <p className="flex items-center gap-2">
            Postavené s láskou v Európe
            <span className="h-1 w-1 rounded-full bg-white/30" />
            aiasista.eu
          </p>
        </div>
      </div>
    </footer>
  );
}
