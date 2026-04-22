"use client";

import { useEffect, useState } from "react";

const notifications = [
  {
    icon: "✓",
    text: "Nova faktura vytvorena",
    color: "text-[#6EE7B7]",
    bg: "from-[#6EE7B7]/15 to-[#6EE7B7]/5",
    border: "border-[#6EE7B7]/20",
  },
  {
    icon: "→",
    text: "Uloha pridelena Marekovi",
    color: "text-[#A78BFA]",
    bg: "from-[#A78BFA]/15 to-[#A78BFA]/5",
    border: "border-[#A78BFA]/20",
  },
  {
    icon: "↑",
    text: "Cash flow: +2 340\u20AC tento mesiac",
    color: "text-[#FCD34D]",
    bg: "from-[#FCD34D]/15 to-[#FCD34D]/5",
    border: "border-[#FCD34D]/20",
  },
];

const sidebarIcons = [
  { emoji: "\uD83D\uDCCA", label: "Dashboard" },
  { emoji: "\uD83D\uDCC5", label: "Kalendar" },
  { emoji: "\u2705", label: "Ulohy" },
  { emoji: "\uD83D\uDCB0", label: "Financie" },
  { emoji: "\uD83D\uDC65", label: "CRM" },
  { emoji: "\uD83E\uDDE0", label: "AI" },
];

const orbitIcons = [
  { emoji: "\uD83D\uDCCA", delay: 0 },
  { emoji: "\uD83D\uDCC5", delay: 1 },
  { emoji: "\u2705", delay: 2 },
  { emoji: "\uD83D\uDCB0", delay: 3 },
  { emoji: "\uD83E\uDDE0", delay: 4 },
  { emoji: "\uD83D\uDCC8", delay: 5 },
];

export function HeroAnimation() {
  const [activeNotification, setActiveNotification] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [dots, setDots] = useState(1);

  // Initial mount animation
  useEffect(() => {
    setMounted(true);

    // Stagger sidebar icons
    const sidebarTimers = sidebarIcons.map((_, i) =>
      setTimeout(() => setSidebarVisible((v) => Math.max(v, i + 1)), 300 + i * 150)
    );

    return () => sidebarTimers.forEach(clearTimeout);
  }, []);

  // Cycle notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification((n) => (n + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative mx-auto max-w-md transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Glow behind card */}
      <div className="absolute -inset-12 -z-10 rounded-[4rem] bg-gradient-to-br from-[#A78BFA]/25 via-[#F472B6]/15 to-[#6EE7B7]/10 blur-3xl animate-breathe" />

      {/* Orbiting icons - hidden on small screens */}
      <div className="absolute inset-0 -z-5 hidden sm:flex items-center justify-center pointer-events-none">
        {orbitIcons.map((item, i) => (
          <span
            key={i}
            className="absolute text-lg"
            style={{
              animation: `orbit ${12 + i * 2}s linear infinite`,
              animationDelay: `${-item.delay * 2}s`,
              transformOrigin: "center",
              // Vary the orbit radius
              transform: `rotate(${i * 60}deg) translateX(${160 + (i % 3) * 20}px) rotate(-${i * 60}deg)`,
            }}
          >
            <span className="opacity-40 hover:opacity-80 transition-opacity text-base">
              {item.emoji}
            </span>
          </span>
        ))}
      </div>

      {/* Main glass card - the "app mockup" */}
      <div className="glass relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F472B6]/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FCD34D]/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#6EE7B7]/60" />
          </div>
          <div className="ml-3 text-[10px] text-white/30 font-medium tracking-wider uppercase">
            AiAsista Dashboard
          </div>
        </div>

        <div className="flex min-h-[280px] sm:min-h-[320px]">
          {/* Sidebar */}
          <div className="hidden sm:flex w-14 flex-col items-center gap-1 border-r border-white/5 py-4 px-1">
            {sidebarIcons.map((item, i) => (
              <div
                key={i}
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm transition-all duration-500 cursor-default ${
                  i < sidebarVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                } ${
                  i === 0
                    ? "bg-gradient-to-br from-[#A78BFA]/20 to-[#F472B6]/10 border border-[#A78BFA]/20"
                    : "hover:bg-white/5"
                }`}
                title={item.label}
              >
                {item.emoji}
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
              {[
                { label: "Prijmy", value: "12 450\u20AC", color: "text-[#6EE7B7]" },
                { label: "Ulohy", value: "8/12", color: "text-[#A78BFA]" },
                { label: "Klienti", value: "+3", color: "text-[#F472B6]" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`rounded-xl border border-white/5 bg-white/[0.02] p-2 sm:p-3 transition-all duration-700 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${800 + i * 200}ms` }}
                >
                  <div className="text-[10px] text-white/40 mb-1">{stat.label}</div>
                  <div className={`text-sm sm:text-base font-semibold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Notifications area */}
            <div className="space-y-2 mb-4">
              {notifications.map((notif, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-2xl border px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-700 ${
                    i === activeNotification
                      ? `bg-gradient-to-r ${notif.bg} ${notif.border} scale-[1.02] shadow-lg`
                      : "border-white/5 bg-white/[0.01] scale-100 opacity-50"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      i === activeNotification
                        ? `${notif.color} bg-white/10`
                        : "text-white/30 bg-white/5"
                    }`}
                  >
                    {notif.icon}
                  </span>
                  <span
                    className={`text-xs sm:text-sm leading-snug transition-colors duration-500 ${
                      i === activeNotification ? "text-white/90" : "text-white/40"
                    }`}
                  >
                    {notif.text}
                  </span>
                  {i === activeNotification && (
                    <span className="ml-auto text-[10px] text-white/30">prave teraz</span>
                  )}
                </div>
              ))}
            </div>

            {/* AI typing indicator */}
            <div className="flex items-center gap-2 rounded-2xl border border-[#A78BFA]/15 bg-gradient-to-r from-[#A78BFA]/[0.06] to-transparent px-3 sm:px-4 py-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-[10px]">
                AI
              </span>
              <span className="text-xs text-white/50">
                AiAsista spracovava{".".repeat(dots)}
              </span>
              <span className="ml-auto flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]"
                    style={{
                      animation: "breathe 1.4s ease-in-out infinite",
                      animationDelay: `${i * 0.2}s`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
