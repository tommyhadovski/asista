"use client";

import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function CallsPage() {
  const [calls, setCalls] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("calls").select("*").order("created_at", { ascending: false });
      setCalls(data || []);
      setLoading(false);
    }
    load();
  }, []);

  const totalCalls = calls.length;
  const completed = calls.filter((c) => c.status === "completed").length;
  const missed = calls.filter((c) => c.status === "missed" || c.status === "voicemail").length;
  const avgDuration = completed > 0 ? Math.round(calls.filter(c => c.duration > 0).reduce((s, c) => s + c.duration, 0) / completed) : 0;

  if (loading) {
    return (
      <div>
        <TopBar title="Hovory" subtitle="Načítavam..." />
        <div className="flex items-center justify-center py-32">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#A78BFA] border-t-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar title="Hovory" subtitle="Všetky hovory spracované AiAsistou" />

      {/* Stats */}
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Celkom</div>
          <div className="mt-2 font-serif text-3xl text-[#A78BFA]">{totalCalls}</div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Dokončené</div>
          <div className="mt-2 font-serif text-3xl text-[#6EE7B7]">{completed}</div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Zmeškané</div>
          <div className="mt-2 font-serif text-3xl text-[#F472B6]">{missed}</div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Priem. dĺžka</div>
          <div className="mt-2 font-serif text-3xl text-[#FCD34D]">{Math.floor(avgDuration / 60)}:{String(avgDuration % 60).padStart(2, "0")}</div>
        </div>
      </div>

      {/* Calls list */}
      <div className="glass overflow-hidden rounded-2xl">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-white/8 px-6 py-4 text-xs uppercase tracking-widest text-white/40">
          <div>Volajúci</div>
          <div className="hidden md:block">Čas</div>
          <div>Dĺžka</div>
          <div>Status</div>
        </div>

        {calls.map((c) => {
          const statusColor = c.status === "completed" ? "#6EE7B7" : c.status === "missed" ? "#F472B6" : "#FCD34D";
          const statusText = c.status === "completed" ? "Dokončený" : c.status === "missed" ? "Zmeškaný" : "Hlasová schránka";
          const dur = c.duration > 0 ? `${Math.floor(c.duration / 60)}:${String(c.duration % 60).padStart(2, "0")}` : "—";
          const time = new Date(c.created_at).toLocaleString("sk-SK", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

          return (
            <div key={c.id} className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-white/5 px-6 py-5 transition last:border-b-0 hover:bg-white/[0.02]">
              <div>
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm ${
                    c.status === "completed" ? "bg-[#6EE7B7]/10" : "bg-[#F472B6]/10"
                  }`}>
                    {c.status === "completed" ? "📞" : "📵"}
                  </div>
                  <div>
                    <div className="font-medium text-white">{c.caller_number}</div>
                    <div className="text-xs text-white/40">{c.transcript || "Žiadny prepis"}</div>
                  </div>
                </div>
              </div>
              <div className="hidden text-xs text-white/50 md:block">{time}</div>
              <div className="text-xs text-white/50">{dur}</div>
              <div className="flex items-center">
                <span className="rounded-full px-3 py-1 text-[11px] font-medium" style={{ backgroundColor: `${statusColor}15`, color: statusColor }}>
                  {statusText}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
