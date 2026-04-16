import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[85vh] items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10 aurora" />
      <div className="absolute inset-0 -z-20 grid-bg opacity-40" />

      <div className="relative w-full max-w-md">
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#A78BFA]/20 via-[#F472B6]/15 to-[#6EE7B7]/10 blur-3xl" />

        <div className="glass rounded-[2rem] p-10">
          <div className="flex items-center justify-center gap-2.5 text-xl font-medium">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 animate-breathe rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6] blur-md" />
              <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
            </span>
            aiasista<span className="font-serif italic text-[#A78BFA]">.</span>
          </div>

          <h1 className="mt-8 text-center text-3xl font-medium">
            Vitajte späť.
          </h1>
          <p className="mt-2 text-center text-sm text-white/55">
            Prihláste sa do svojej AI operatívy.
          </p>

          <div className="mt-10 space-y-4">
            <div>
              <label className="text-xs text-white/50">Email</label>
              <input
                type="email"
                defaultValue="tomas@aiasista.eu"
                className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-white outline-none transition focus:border-[#A78BFA]/40"
              />
            </div>
            <div>
              <label className="text-xs text-white/50">Heslo</label>
              <input
                type="password"
                defaultValue="••••••••••"
                className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-white outline-none transition focus:border-[#A78BFA]/40"
              />
            </div>

            <Link
              href="/app/dashboard"
              className="btn-primary flex h-14 w-full items-center justify-center rounded-full text-sm"
            >
              Prihlásiť sa →
            </Link>

            <div className="flex items-center gap-3 text-xs text-white/40">
              <div className="h-px flex-1 bg-white/8" />
              alebo
              <div className="h-px flex-1 bg-white/8" />
            </div>

            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.02] text-sm text-white/80 transition hover:bg-white/[0.05]">
              <span>🔐</span>
              Pokračovať cez Google
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/40">
            <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" />
            Chránené GDPR · EU servery
          </div>
        </div>

        <Link
          href="/"
          className="mt-6 block text-center text-xs text-white/40 transition hover:text-white/70"
        >
          ← Späť na web
        </Link>
      </div>
    </div>
  );
}
