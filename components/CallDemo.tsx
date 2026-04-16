"use client";

import { useState, useEffect, useRef } from "react";

const scenarios = [
  {
    title: "Realitná kancelária",
    icon: "🏢",
    messages: [
      { from: "caller", text: "Dobrý deň, volám ohľadom 3-izbového bytu na Dunajskej." },
      { from: "ai", text: "Dobrý deň! Áno, ten byt je stále dostupný. 78m², cena 185 000€. Máte záujem o obhliadku?" },
      { from: "caller", text: "Áno, kedy by to bolo možné?" },
      { from: "ai", text: "Najbližší termín mám zajtra o 14:00 alebo v piatok o 10:00. Ktorý vám vyhovuje?" },
      { from: "caller", text: "Zajtra o 14:00." },
      { from: "ai", text: "Zarezervované! Maklér Marek vás stretne na mieste. Pošlem SMS s potvrdením." },
    ],
  },
  {
    title: "Zubná klinika",
    icon: "🏥",
    messages: [
      { from: "caller", text: "Chcela by som sa objednať na kontrolu." },
      { from: "ai", text: "Samozrejme! Ste u nás registrovaná, alebo prvá návšteva?" },
      { from: "caller", text: "Prvá návšteva." },
      { from: "ai", text: "Vitajte! Mám voľné utorok o 9:00, stredu o 15:30 alebo piatok o 11:00." },
      { from: "caller", text: "Streda poobede." },
      { from: "ai", text: "Zapísané na stredu 15:30. Deň pred vám pošleme SMS pripomienku. Tešíme sa!" },
    ],
  },
  {
    title: "Autosalón",
    icon: "🚗",
    messages: [
      { from: "caller", text: "Zaujíma ma tá Octavia čo máte na webe." },
      { from: "ai", text: "Octavia Combi 2024, 2.0 TDI, 15 000 km, 28 900€. Chcete testovaciu jazdu?" },
      { from: "caller", text: "Áno, kedy?" },
      { from: "ai", text: "Zajtra poobede alebo v sobotu dopoludnia. Čo vyhovuje?" },
      { from: "caller", text: "Sobota ráno." },
      { from: "ai", text: "Sobota 10:00, testovacia jazda Octavia. Stačí vodičák. Kolega Peter sa vám bude venovať!" },
    ],
  },
];

export function CallDemo() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = scenarios[activeScenario];

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [visibleMessages]);

  const startDemo = () => {
    setVisibleMessages(0);
    setIsPlaying(true);
    showNext(0);
  };

  const showNext = (index: number) => {
    if (index >= scenarios[activeScenario].messages.length) {
      setIsPlaying(false);
      return;
    }
    const delay = scenarios[activeScenario].messages[index].from === "ai" ? 1800 : 1200;
    timeoutRef.current = setTimeout(() => {
      setVisibleMessages(index + 1);
      showNext(index + 1);
    }, delay);
  };

  const switchScenario = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveScenario(idx);
    setVisibleMessages(0);
    setIsPlaying(false);
  };

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#050509] py-32 noise">
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left - text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
              Live ukážka
            </div>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] md:text-5xl">
              Takto AiAsista <br />
              <span className="font-serif italic gradient-text">vybavuje hovory.</span>
            </h2>
            <p className="mt-6 max-w-lg text-white/55 leading-relaxed">
              Vyberte si odvetvie a sledujte reálny priebeh hovoru.
              AiAsista zdvihne, zistí čo volajúci potrebuje, dohodne termín
              a pošle potvrdenie. Bez čakania, bez zmeškaných hovorov.
            </p>

            {/* Scenario tabs */}
            <div className="mt-8 flex flex-wrap gap-2">
              {scenarios.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => switchScenario(i)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    activeScenario === i
                      ? "border border-[#A78BFA]/40 bg-[#A78BFA]/10 text-white"
                      : "border border-white/10 bg-white/[0.02] text-white/50 hover:text-white"
                  }`}
                >
                  <span>{s.icon}</span>
                  {s.title}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8">
              <div>
                <div className="font-serif text-3xl text-[#6EE7B7]">2s</div>
                <div className="mt-1 text-xs text-white/40">Reakčný čas</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-[#A78BFA]">24/7</div>
                <div className="mt-1 text-xs text-white/40">Dostupnosť</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-[#F472B6]">0</div>
                <div className="mt-1 text-xs text-white/40">Zmeškaných</div>
              </div>
            </div>
          </div>

          {/* Right - phone demo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="glass overflow-hidden rounded-3xl border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-[#A78BFA]/10 to-[#F472B6]/5 px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]">
                      <span className="text-sm">🎧</span>
                      {isPlaying && (
                        <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6EE7B7] opacity-75" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6EE7B7]" />
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium">AiAsista</div>
                      <div className="text-[10px] text-white/40">
                        {isPlaying ? "Prebieha hovor..." : visibleMessages > 0 ? "Hovor ukončený" : "Pripravená"}
                      </div>
                    </div>
                  </div>
                  {isPlaying && (
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-0.5 animate-pulse rounded-full bg-[#6EE7B7]" style={{ height: `${8 + Math.random() * 12}px`, animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Messages */}
                <div className="h-[340px] overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "none" }}>
                  {visibleMessages === 0 && !isPlaying && (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div className="text-3xl mb-3">{scenario.icon}</div>
                      <div className="text-sm text-white/50">{scenario.title}</div>
                      <div className="mt-1 text-[11px] text-white/25">Kliknite tlačidlo nižšie</div>
                    </div>
                  )}

                  {scenario.messages.slice(0, visibleMessages).map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "caller" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                        msg.from === "caller"
                          ? "rounded-br-md bg-gradient-to-r from-[#A78BFA]/20 to-[#F472B6]/15 text-white/90"
                          : "rounded-bl-md bg-white/[0.06] text-white/80"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {isPlaying && visibleMessages < scenario.messages.length && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-md bg-white/[0.06] px-4 py-3">
                        <div className="flex gap-1">
                          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/30" style={{ animationDelay: "0s" }} />
                          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/30" style={{ animationDelay: "0.15s" }} />
                          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/30" style={{ animationDelay: "0.3s" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Button */}
                <div className="border-t border-white/5 p-3">
                  <button
                    onClick={startDemo}
                    disabled={isPlaying}
                    className={`w-full rounded-full py-2.5 text-sm font-semibold transition ${
                      isPlaying ? "bg-white/5 text-white/30" : "btn-primary hover:scale-[1.02]"
                    }`}
                  >
                    {isPlaying ? "Prebieha hovor..." : visibleMessages > 0 ? "Spustiť znova" : "Spustiť demo"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
