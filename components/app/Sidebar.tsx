"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const sections = [
  {
    label: "Prehľad",
    items: [
      { href: "/app/dashboard", label: "Dashboard", icon: "📊" },
      { href: "/app/inbox", label: "Inbox", icon: "📥" },
    ],
  },
  {
    label: "Biznis",
    items: [
      { href: "/app/finance", label: "Faktúry", icon: "📄" },
      { href: "/app/clients", label: "Kontakty", icon: "👥" },
      { href: "/app/calendar", label: "Kalendár", icon: "📅" },
    ],
  },
  {
    label: "Tím",
    items: [
      { href: "/app/team", label: "Tím", icon: "👤" },
      { href: "/app/activity", label: "Úlohy", icon: "✅" },
    ],
  },
  {
    label: "AI",
    items: [
      { href: "/app/copilot", label: "Copilot", icon: "🧠" },
      { href: "/app/automations", label: "Automatizácie", icon: "⚡" },
    ],
  },
  {
    label: "Nastavenia",
    items: [
      { href: "/app/settings", label: "Nastavenia", icon: "⚙️" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/app");
  }

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-white/5 bg-[#050509] md:flex">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 p-6 text-lg font-medium">
        <span className="relative flex h-7 w-7 items-center justify-center">
          <span className="absolute inset-0 animate-breathe rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6] blur-sm" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
        </span>
        <span>aiasista<span className="font-serif italic text-[#A78BFA]">.</span></span>
      </Link>

      {/* Status */}
      <div className="mx-4 mb-4 rounded-2xl border border-[#6EE7B7]/20 bg-[#6EE7B7]/5 p-3">
        <div className="flex items-center gap-2 text-xs text-[#6EE7B7]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6EE7B7] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6EE7B7]" />
          </span>
          Asista je aktívna
        </div>
        <div className="mt-1 text-[10px] text-white/50">
          Monitoruje váš biznis · 24/7
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-5 overflow-y-auto px-4 pb-4">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="mb-2 px-3 text-[10px] uppercase tracking-widest text-white/30">
              {section.label}
            </div>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white"
                        : "text-white/55 hover:bg-white/[0.03] hover:text-white"
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {isActive && (
                      <span className="h-1 w-1 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User card */}
      <div className="border-t border-white/5 p-4">
        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-xs font-semibold text-[#0A0A14]">
              TH
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="truncate text-sm font-medium text-white">Tomáš Hadovský</div>
              <div className="truncate text-[11px] text-white/45">Business plan</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-3 block w-full text-center text-[10px] text-white/40 transition hover:text-white/70"
          >
            Odhlásiť sa
          </button>
        </div>
      </div>
    </aside>
  );
}
