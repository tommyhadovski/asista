"use client";

import { useEffect, useState } from "react";

const transcript = [
  { speaker: "caller", text: "Dobrý deň, volám ohľadom nehnuteľnosti v Ružinove." },
  { speaker: "ai", text: "Dobrý deň, rada vám pomôžem. Máte konkrétny inzerát?" },
  { speaker: "caller", text: "3-izbový byt, 89m², cena 245 000 eur." },
  { speaker: "ai", text: "Ten byt je stále dostupný. Chceli by ste si dohodnúť obhliadku?" },
  { speaker: "caller", text: "Áno, ideálne tento víkend." },
  { speaker: "ai", text: "V sobotu o 14:00 má pani Novotná voľný termín. Pošlem vám potvrdenie SMS." },
];

export function LiveCallCard() {
  const [visible, setVisible] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => (v + 1) % (transcript.length + 1));
    }, 2300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const i = setInterval(() => setDuration((d) => d + 1), 1000);
    return () => clearInterval(i);
  }, []);

  const minutes = String(Math.floor(duration / 60)).padStart(2, "0");
  const seconds = String(duration % 60).padStart(2, "0");

  return (
    <div className="relative mx-auto max-w-md">
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-[#A78BFA]/30 via-[#F472B6]/20 to-[#6EE7B7]/10 blur-3xl" />

      {/* Floating orbit dots */}
      <div className="absolute inset-0 -z-5 flex items-center justify-center pointer-events-none">
        <span className="animate-orbit absolute h-2 w-2 rounded-full bg-[#A78BFA]" style={{ animationDuration: "8s" }} />
        <span className="animate-orbit absolute h-1.5 w-1.5 rounded-full bg-[#F472B6]" style={{ animationDuration: "12s", animationDelay: "-3s" }} />
        <span className="animate-orbit absolute h-1 w-1 rounded-full bg-[#6EE7B7]" style={{ animationDuration: "10s", animationDelay: "-6s" }} />
      </div>

      <div className="glass relative rounded-[2rem] p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A78BFA] via-[#F472B6] to-[#6EE7B7] text-lg">
              <span className="absolute inset-0 animate-pulse-glow rounded-2xl bg-gradient-to-br from-[#A78BFA]/60 to-[#F472B6]/60 blur-md"></span>
              <span className="relative">🎙️</span>
            </div>
            <div>
              <div className="text-sm font-medium text-white">AiAsista</div>
              <div className="flex items-center gap-1.5 text-xs text-[#6EE7B7]">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-[#6EE7B7]" />
                Live hovor · {minutes}:{seconds}
              </div>
            </div>
          </div>
          <div className="flex h-6 items-end gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="wave-bar"
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
        </div>

        {/* Transcript */}
        <div className="mt-5 min-h-[240px] space-y-3">
          {transcript.slice(0, visible).map((line, i) => (
            <div
              key={i}
              className={`flex ${line.speaker === "ai" ? "justify-end" : "justify-start"} animate-fade-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                  line.speaker === "ai"
                    ? "border border-[#A78BFA]/30 bg-gradient-to-br from-[#A78BFA]/15 to-[#F472B6]/10 text-white"
                    : "border border-white/8 bg-white/[0.03] text-white/75"
                }`}
              >
                {line.text}
              </div>
            </div>
          ))}
          {visible === transcript.length && (
            <div className="animate-fade-up pt-2 text-center text-xs text-[#6EE7B7]">
              ✓ Obhliadka potvrdená · Uložené do CRM
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-white/40">
          <span>Automaticky prepisované</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#6EE7B7]" /> EU · GDPR · End-to-end
          </span>
        </div>
      </div>
    </div>
  );
}
