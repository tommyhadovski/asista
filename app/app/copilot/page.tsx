"use client";

import { useState } from "react";
import { TopBar } from "@/components/app/TopBar";

interface Message {
  role: "user" | "ai";
  text: string;
  meta?: string;
}

const suggestions = [
  "Koľko som zarobil minulý mesiac?",
  "Kto sú moji top 3 klienti?",
  "Kedy sú najlepšie časy volať klientom?",
  "Ktoré faktúry meškajú?",
  "Ukáž mi predikciu na Apríl",
  "Aké kampane fungujú najlepšie?",
];

const responses: Record<string, { text: string; meta: string }> = {
  "Koľko som zarobil minulý mesiac?": {
    text: "Minulý mesiac (Marec) ste vyfakturovali 47 820€, z toho 41 200€ už prišlo na účet. Oproti Februáru rast o 18%. Najviac pribudli klienti z realitného sektora.",
    meta: "📊 Financie · Marec 2026",
  },
  "Kto sú moji top 3 klienti?": {
    text: "Váš top 3 Q1 2026: 1. Varga Holding (18 400€) · 2. Hájek Reality (12 800€) · 3. Klinika Kollárová (9 600€). Spolu pokrývajú 40% obratu kvartálu.",
    meta: "👥 CRM · Q1 2026",
  },
  "Kedy sú najlepšie časy volať klientom?": {
    text: "Najlepší response rate majú Utorky a Stredy medzi 10:00 a 12:00 (73% úspešnosť). Najhoršie Piatky popoludní (12%). Máte ešte 4 otvorené leady – mám ich naplánovať?",
    meta: "🧠 AI Insights · 90 dní",
  },
  "Ktoré faktúry meškajú?": {
    text: "3 faktúry po splatnosti: ABC Reality (2 450€, 12 dní), Novotný s.r.o. (890€, 5 dní), Kollár Consult (1 200€, 3 dni). Chcete aby som im poslal pripomienku?",
    meta: "💰 Invoices · Real-time",
  },
};

export default function CopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Ahoj Tomáš! Som AiAsista Copilot. Pýtaj sa čokoľvek o svojom biznise – financie, klienti, hovory, kalendár. Viem všetko.",
      meta: "🧠 Pripravená · Online",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    const userMsg: Message = { role: "user", text };
    const response = responses[text] || {
      text: "Túto otázku vyriešim za chvíľu. V reálnej verzii mám prístup ku všetkým vaším dátam (hovory, faktúry, kalendár, CRM).",
      meta: "🧠 AiAsista · Demo mode",
    };
    const aiMsg: Message = { role: "ai", text: response.text, meta: response.meta };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div>
      <TopBar
        title="AI Copilot 🧠"
        subtitle="Spýtaj sa svojho biznisu čokoľvek"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Chat area */}
        <div className="glass flex min-h-[600px] flex-col overflow-hidden rounded-3xl">
          <div className="flex-1 space-y-5 overflow-y-auto p-6">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex animate-fade-up ${m.role === "user" ? "justify-end" : "gap-3"}`}
              >
                {m.role === "ai" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-sm">
                    🧠
                  </div>
                )}
                <div className={m.role === "user" ? "max-w-[70%]" : "flex-1 max-w-[70%]"}>
                  <div
                    className={`rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "border border-white/10 bg-white/[0.04] text-white/85"
                        : "border border-[#A78BFA]/20 bg-gradient-to-br from-[#A78BFA]/10 to-[#F472B6]/5 text-white/90"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.meta && (
                    <div className="mt-1.5 text-xs text-white/40">{m.meta}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-white/5 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) handleSend(input.trim());
              }}
              className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-5 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Spýtaj sa AiAsisty..."
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
              <button type="submit" className="btn-primary rounded-full px-4 py-2 text-xs">
                Odoslať
              </button>
            </form>
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-widest text-white/40">Navrhované otázky</div>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSend(s)}
              className="glass w-full rounded-2xl p-4 text-left text-sm text-white/70 transition hover:text-white"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
