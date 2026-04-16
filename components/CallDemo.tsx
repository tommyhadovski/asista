"use client";

import { useState, useEffect, useRef } from "react";

const scenarios = [
  {
    title: "Realitná kancelária",
    icon: "🏢",
    messages: [
      { from: "caller", text: "Dobrý deň, volám ohľadom 3-izbového bytu na Dunajskej." },
      { from: "ai", text: "Dobrý deň! Áno, ten byt je stále dostupný. Ide o 3-izbový s balkónom, 78m², cena 185 000€. Máte záujem o obhliadku?" },
      { from: "caller", text: "Áno, kedy by to bolo možné?" },
      { from: "ai", text: "Najbližší voľný termín mám zajtra o 14:00 alebo v piatok o 10:00. Ktorý vám vyhovuje viac?" },
      { from: "caller", text: "Zajtra o 14:00 by bolo super." },
      { from: "ai", text: "Výborne! Zarezervovala som vám obhliadku na zajtra o 14:00. Maklér Marek vás stretne priamo na mieste. Pošlem vám SMS s potvrdením. Môžem ešte niečo?" },
    ],
  },
  {
    title: "Zubná klinika",
    icon: "🏥",
    messages: [
      { from: "caller", text: "Dobrý deň, chcela by som sa objednať na kontrolu." },
      { from: "ai", text: "Dobrý deň! Samozrejme. Ste u nás už registrovaná pacientka, alebo by to bola prvá návšteva?" },
      { from: "caller", text: "Prvá návšteva." },
      { from: "ai", text: "Super, vitajte! Prvá kontrola trvá asi 30 minút. Mám voľné termíny v utorok o 9:00, stredu o 15:30 alebo piatok o 11:00. Čo vám vyhovuje?" },
      { from: "caller", text: "Streda poobede by bola ideálna." },
      { from: "ai", text: "Perfektné! Zapísala som vás na stredu 23. apríla o 15:30. Deň pred termínom vám pošleme SMS pripomienku. Tešíme sa na vás!" },
    ],
  },
  {
    title: "Autosalón",
    icon: "🚗",
    messages: [
      { from: "caller", text: "Ahoj, zaujíma ma ten Škoda Octavia čo máte na webe." },
      { from: "ai", text: "Dobrý deň! Áno, máme Octaviu Combi 2024, 2.0 TDI, šedá metalíza, 15 000 km. Cena je 28 900€. Chceli by ste sa prísť pozrieť alebo dohodnúť testovaciu jazdu?" },
      { from: "caller", text: "Testovacia jazda by bola super." },
      { from: "ai", text: "Výborne! Kedy by vám vyhovovalo? Máme voľné termíny zajtra poobede alebo v sobotu dopoludnia." },
      { from: "caller", text: "Sobota ráno." },
      { from: "ai", text: "Zapísané! Sobota o 10:00, testovacia jazda Octavia Combi. Stačí prísť s vodičákom. Kolega Peter sa vám bude venovať. Pekný deň!" },
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
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages]);

  const startDemo = () => {
    setVisibleMessages(0);
    setIsPlaying(true);
    showNextMessage(0);
  };

  const showNextMessage = (index: number) => {
    if (index >= scenarios[activeScenario].messages.length) {
      setIsPlaying(false);
      return;
    }
    const delay = scenarios[activeScenario].messages[index].from === "ai" ? 1800 : 1200;
    timeoutRef.current = setTimeout(() => {
      setVisibleMessages(index + 1);
      showNextMessage(index + 1);
    }, delay);
  };

  const switchScenario = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveScenario(idx);
    setVisibleMessages(0);
    setIsPlaying(false);
  };

  return (
    <section className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute inset-0 -z-20 mesh-gradient" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            Live ukážka
          </div>
          <h2 className="mt-6 text-4xl font-medium md:text-6xl">
            Pozrite sa, ako AiAsista <br />
            <span className="font-serif italic gradient-text">vybavuje hovory.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/55">
            Vyberte si odvetvie a sledujte reálny priebeh hovoru. Takto to vyzerá,
            keď AiAsista zdvihne telefón za vašu firmu.
          </p>
        </div>

        {/* Scenario tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {scenarios.map((s, i) => (
            <button
              key={s.title}
              onClick={() => switchScenario(i)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition ${
                activeScenario === i
                  ? "border border-[#A78BFA]/40 bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white"
                  : "border border-white/10 bg-white/[0.02] text-white/60 hover:text-white"
              }`}
            >
              <span>{s.icon}</span>
              {s.title}
            </button>
          ))}
        </div>

        {/* Phone mockup */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-md">
            {/* Phone frame */}
            <div className="glass overflow-hidden rounded-3xl border border-white/10">
              {/* Phone header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-[#A78BFA]/10 to-[#F472B6]/5 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA] to-[#F472B6]">
                    <span className="text-lg">🎧</span>
                    {isPlaying && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6EE7B7] opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6EE7B7]" />
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium">AiAsista</div>
                    <div className="text-[11px] text-white/40">
                      {isPlaying ? "Prebieha hovor..." : visibleMessages > 0 ? "Hovor ukončený" : "Pripravená"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isPlaying && (
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-0.5 animate-pulse rounded-full bg-[#6EE7B7]" style={{ animationDelay: "0s" }} />
                      <div className="h-4 w-0.5 animate-pulse rounded-full bg-[#6EE7B7]" style={{ animationDelay: "0.15s" }} />
                      <div className="h-2 w-0.5 animate-pulse rounded-full bg-[#6EE7B7]" style={{ animationDelay: "0.3s" }} />
                      <div className="h-5 w-0.5 animate-pulse rounded-full bg-[#6EE7B7]" style={{ animationDelay: "0.45s" }} />
                      <div className="h-3 w-0.5 animate-pulse rounded-full bg-[#6EE7B7]" style={{ animationDelay: "0.6s" }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Messages area */}
              <div className="h-[400px] overflow-y-auto p-6 space-y-4" style={{ scrollbarWidth: "none" }}>
                {visibleMessages === 0 && !isPlaying && (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="text-4xl mb-4">{scenario.icon}</div>
                    <div className="text-sm text-white/50">
                      {scenario.title}
                    </div>
                    <div className="mt-2 text-xs text-white/30">
                      Kliknite &quot;Spustiť demo&quot; nižšie
                    </div>
                  </div>
                )}

                {scenario.messages.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === "caller" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.from === "caller"
                          ? "rounded-br-md bg-gradient-to-r from-[#A78BFA]/20 to-[#F472B6]/20 text-white/90"
                          : "rounded-bl-md bg-white/[0.06] text-white/85"
                      }`}
                    >
                      <div className="mb-1 text-[10px] uppercase tracking-wider text-white/30">
                        {msg.from === "caller" ? "Volajúci" : "AiAsista"}
                      </div>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isPlaying && visibleMessages < scenario.messages.length && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-md bg-white/[0.06] px-4 py-3">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-white/30" style={{ animationDelay: "0s" }} />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-white/30" style={{ animationDelay: "0.15s" }} />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-white/30" style={{ animationDelay: "0.3s" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Bottom bar */}
              <div className="border-t border-white/5 p-4">
                <button
                  onClick={startDemo}
                  disabled={isPlaying}
                  className={`w-full rounded-full py-3 text-sm font-semibold transition ${
                    isPlaying
                      ? "bg-white/5 text-white/30 cursor-not-allowed"
                      : "btn-primary hover:scale-[1.02]"
                  }`}
                >
                  {isPlaying ? "Prebieha hovor..." : visibleMessages > 0 ? "Spustiť znova" : "Spustiť demo"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
