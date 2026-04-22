"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/app/dashboard");
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { company_name: companyName },
        emailRedirectTo: `${window.location.origin}/app/dashboard`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // If session exists (email confirmation disabled), go to dashboard
    if (data.session) {
      router.push("/app/dashboard");
      return;
    }

    // If no session (email confirmation enabled), show message
    setError("Registrácia úspešná! Skontrolujte si email a potvrďte účet.");
    setLoading(false);
  }

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
            {isRegister ? "Vytvorte si účet." : "Vitajte späť."}
          </h1>
          <p className="mt-2 text-center text-sm text-white/55">
            {isRegister
              ? "Začnite riadiť svoj biznis s AI."
              : "Prihláste sa do svojej AI operatívy."}
          </p>

          {error && (
            <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
              {error}
            </div>
          )}

          <form
            onSubmit={isRegister ? handleRegister : handleLogin}
            className="mt-10 space-y-4"
          >
            <div>
              <label className="text-xs text-white/50">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.sk"
                required
                className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-white outline-none transition focus:border-[#A78BFA]/40"
              />
            </div>
            <div>
              <label className="text-xs text-white/50">Heslo</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                required
                className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-white outline-none transition focus:border-[#A78BFA]/40"
              />
            </div>

            {isRegister && (
              <div>
                <label className="text-xs text-white/50">Názov firmy</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Vaša firma s.r.o."
                  required
                  className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-white outline-none transition focus:border-[#A78BFA]/40"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex h-14 w-full items-center justify-center rounded-full text-sm disabled:opacity-50"
            >
              {loading
                ? "Načítavam..."
                : isRegister
                ? "Registrovať sa →"
                : "Prihlásiť sa →"}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3 text-xs text-white/40">
            <div className="h-px flex-1 bg-white/8" />
            alebo
            <div className="h-px flex-1 bg-white/8" />
          </div>

          <button
            type="button"
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
            className="mt-4 flex h-12 w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.02] text-sm text-white/80 transition hover:bg-white/[0.05]"
          >
            {isRegister
              ? "Už mám účet — Prihlásiť sa"
              : "Nemám účet — Registrovať sa"}
          </button>

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
