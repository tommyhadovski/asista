"use client";

import { useState } from "react";
import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";

const COMPANY_ID = "11111111-1111-1111-1111-111111111111";

interface Message {
  role: "user" | "ai";
  text: string;
}

const suggestions = [
  "Koľko som zarobil?",
  "Kto mi dlhuje?",
  "Koľko mám klientov?",
  "Kto je v mojom tíme?",
  "Aké faktúry meškajú?",
  "Aké mám nezaplatené faktúry?",
];

async function generateAnswer(question: string): Promise<string> {
  const q = question.toLowerCase().trim();

  // Revenue / earnings
  if (
    q.includes("zarobil") ||
    q.includes("prijmy") ||
    q.includes("revenue") ||
    q.includes("príjmy") ||
    q.includes("obrat")
  ) {
    const { data } = await supabase
      .from("invoices" as never)
      .select("amount, status")
      .eq("company_id", COMPANY_ID)
      .eq("status", "paid");

    if (!data || data.length === 0) {
      return "Zatiaľ nemáte žiadne zaplatené faktúry v systéme.";
    }

    const items = data as any[];
    const total = items.reduce((sum: number, inv: any) => sum + Number(inv.amount), 0);
    const formatted = total.toLocaleString("sk-SK", { minimumFractionDigits: 0 });
    return `Celkové príjmy zo zaplatených faktúr: ${formatted}€. Spolu ${items.length} zaplatených faktúr.`;
  }

  // Overdue / who owes
  if (
    q.includes("dlhuje") ||
    q.includes("dlží") ||
    q.includes("nezaplaten") ||
    q.includes("overdue") ||
    q.includes("meškaj") ||
    q.includes("po splatnosti")
  ) {
    const { data } = await supabase
      .from("invoices" as never)
      .select("client_name, amount, status, due_date")
      .eq("company_id", COMPANY_ID)
      .neq("status", "paid");

    if (!data || data.length === 0) {
      return "Všetky faktúry sú zaplatené. Nikto vám nič nedlhuje.";
    }

    const items = data as any[];
    const total = items.reduce((sum: number, inv: any) => sum + Number(inv.amount), 0);
    const formatted = total.toLocaleString("sk-SK", { minimumFractionDigits: 0 });
    const list = items
      .map(
        (inv: any) =>
          `- ${inv.client_name}: ${Number(inv.amount).toLocaleString("sk-SK")}€ (${inv.status === "overdue" ? "po splatnosti" : "čaká na platbu"}, splatnosť ${new Date(inv.due_date).toLocaleDateString("sk-SK")})`
      )
      .join("\n");

    return `Máte ${items.length} nezaplatených faktúr v celkovej hodnote ${formatted}€:\n${list}`;
  }

  // Contacts / clients count
  if (
    q.includes("klient") ||
    q.includes("kontakt") ||
    q.includes("contacts") ||
    q.includes("kolko mam")
  ) {
    const { count } = await supabase
      .from("contacts" as never)
      .select("*", { count: "exact", head: true })
      .eq("company_id", COMPANY_ID);

    return `Máte ${count ?? 0} kontaktov/klientov v databáze.`;
  }

  // Team members
  if (
    q.includes("team") ||
    q.includes("tím") ||
    q.includes("tim") ||
    q.includes("zamestnan") ||
    q.includes("koleg")
  ) {
    const { data } = await supabase
      .from("team_members" as never)
      .select("name, role, status")
      .eq("company_id", COMPANY_ID);

    if (!data || data.length === 0) {
      return "Zatiaľ nemáte v systéme žiadnych členov tímu.";
    }

    const members = data as any[];
    const statusLabels: Record<string, string> = {
      active: "aktívny",
      away: "preč",
      offline: "offline",
    };

    const list = members
      .map(
        (m: any) =>
          `- ${m.name} (${m.role}) - ${statusLabels[m.status] || m.status}`
      )
      .join("\n");

    return `Váš tím má ${members.length} členov:\n${list}`;
  }

  // Fallback
  return "Túto otázku zatiaľ neviem zodpovedať. Skúste sa opýtať na faktúry, klientov alebo tím.";
}

export default function CopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Ahoj! Som AiAsista Copilot. Opýtajte sa ma na čokoľvek o vašom biznise - faktúry, klientov, tím. Odpoviem na základe reálnych dát.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const handleSend = async (text: string) => {
    if (!text.trim() || thinking) return;

    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setThinking(true);

    try {
      const answer = await generateAnswer(text);
      const aiMsg: Message = { role: "ai", text: answer };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Prepáčte, nastala chyba pri spracovaní otázky. Skúste to prosím znova.",
        },
      ]);
    } finally {
      setThinking(false);
    }
  };

  return (
    <div>
      <TopBar
        title="AI Copilot"
        subtitle="Spýtajte sa svojej firmy čokoľvek"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Chat area */}
        <div className="glass flex min-h-[600px] flex-col overflow-hidden rounded-3xl">
          <div className="flex-1 space-y-5 overflow-y-auto p-6">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "gap-3"}`}
              >
                {m.role === "ai" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-sm font-bold text-white">
                    A
                  </div>
                )}
                <div
                  className={
                    m.role === "user" ? "max-w-[70%]" : "max-w-[70%] flex-1"
                  }
                >
                  <div
                    className={`rounded-2xl px-5 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      m.role === "user"
                        ? "border border-white/10 bg-white/[0.04] text-white/85"
                        : "border border-[#A78BFA]/20 bg-gradient-to-br from-[#A78BFA]/10 to-[#F472B6]/5 text-white/90"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              </div>
            ))}

            {thinking && (
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6] text-sm font-bold text-white">
                  A
                </div>
                <div className="rounded-2xl border border-[#A78BFA]/20 bg-gradient-to-br from-[#A78BFA]/10 to-[#F472B6]/5 px-5 py-3 text-sm text-white/50">
                  AiAsista premýšľa...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-white/5 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-5 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Spýtajte sa AiAsisty..."
                disabled={thinking}
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={thinking || !input.trim()}
                className="btn-primary rounded-full px-4 py-2 text-xs disabled:opacity-50"
              >
                Odoslať
              </button>
            </form>
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-widest text-white/40">
            Navrhované otázky
          </div>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSend(s)}
              disabled={thinking}
              className="glass w-full rounded-2xl p-4 text-left text-sm text-white/70 transition hover:text-white disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
