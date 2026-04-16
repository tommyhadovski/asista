"use client";

import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [calls, setCalls] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [activity, setActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [callsRes, contactsRes, invoicesRes, eventsRes, activityRes] = await Promise.all([
        supabase.from("calls").select("*").order("created_at", { ascending: false }).limit(10),
        supabase.from("contacts").select("*").order("created_at", { ascending: false }),
        supabase.from("invoices").select("*").order("created_at", { ascending: false }),
        supabase.from("calendar_events").select("*").order("start_time", { ascending: true }).limit(4),
        supabase.from("activity_log").select("*").order("created_at", { ascending: false }).limit(3),
      ]);
      setCalls(callsRes.data || []);
      setContacts(contactsRes.data || []);
      setInvoices(invoicesRes.data || []);
      setEvents(eventsRes.data || []);
      setActivity(activityRes.data || []);
      setLoading(false);
    }
    load();
  }, []);

  const totalCalls = calls.length;
  const completedCalls = calls.filter((c) => c.status === "completed").length;
  const missedCalls = calls.filter((c) => c.status === "missed" || c.status === "voicemail").length;
  const pipelineValue = contacts.reduce((sum: number, c: any) => sum + Number(c.value || 0), 0);
  const pendingInvoices = invoices.filter((i) => i.status === "pending" || i.status === "overdue")
    .reduce((sum: number, i: any) => sum + Number(i.amount || 0), 0);

  const stats = [
    { label: "Hovory celkom", value: String(totalCalls), color: "#A78BFA", icon: "📞" },
    { label: "Dokončené", value: String(completedCalls), color: "#6EE7B7", icon: "✓" },
    { label: "Zmeškané", value: String(missedCalls), color: "#F472B6", icon: "📵" },
    { label: "Pipeline", value: `${(pipelineValue / 1000).toFixed(0)}k €`, color: "#FCD34D", icon: "📊" },
  ];

  if (loading) {
    return (
      <div>
        <TopBar title="Načítavam..." subtitle="" />
        <div className="flex items-center justify-center py-32">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#A78BFA] border-t-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar
        title="Dobré ráno, Tomáš"
        subtitle="Tu je prehľad toho, čo robila AiAsista."
      />

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between text-xs text-white/45">
              <span>{stat.label}</span>
              <span>{stat.icon}</span>
            </div>
            <div className="mt-4 font-serif text-4xl" style={{ color: stat.color }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {/* Recent calls */}
        <div className="glass rounded-2xl p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">Najnovšie hovory</div>
            <span className="flex items-center gap-2 text-xs text-[#6EE7B7]">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-[#6EE7B7]" />
              Live
            </span>
          </div>
          <div className="mt-4 space-y-2">
            {calls.map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:bg-white/[0.05]"
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-base ${
                  c.status === "completed" ? "bg-[#6EE7B7]/10" : c.status === "missed" ? "bg-[#F472B6]/10" : "bg-white/5"
                }`}>
                  {c.status === "completed" ? "📞" : c.status === "missed" ? "📵" : "📩"}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{c.caller_number}</div>
                  <div className="text-xs text-white/40">
                    {c.transcript ? c.transcript.slice(0, 50) + "..." : "Žiadny prepis"}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-medium ${
                    c.status === "completed" ? "text-[#6EE7B7]" : "text-[#F472B6]"
                  }`}>
                    {c.status === "completed" ? "Dokončený" : c.status === "missed" ? "Zmeškaný" : "Hlasová schránka"}
                  </div>
                  <div className="text-[10px] text-white/30">
                    {c.duration > 0 ? `${Math.floor(c.duration / 60)}:${String(c.duration % 60).padStart(2, "0")}` : "—"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="glass rounded-2xl p-6">
          <div className="text-base font-medium">Najbližšie udalosti</div>
          <div className="mt-5 space-y-2">
            {events.length === 0 ? (
              <div className="text-sm text-white/40">Žiadne udalosti</div>
            ) : events.map((e) => (
              <div
                key={e.id}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3"
              >
                <div
                  className="h-full w-1 self-stretch rounded-full"
                  style={{
                    backgroundColor: e.type === "meeting" ? "#A78BFA" : e.type === "call" ? "#6EE7B7" : "#FCD34D",
                    minHeight: "36px",
                  }}
                />
                <div className="flex-1 overflow-hidden">
                  <div className="text-[11px] text-white/40">
                    {new Date(e.start_time).toLocaleString("sk-SK", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </div>
                  <div className="truncate text-sm font-medium text-white/85">{e.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Invoices */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium">Faktúry</div>
            <span className="text-xs text-white/40">Otvorené: {(pendingInvoices).toLocaleString("sk-SK")} €</span>
          </div>
          <div className="mt-4 space-y-2">
            {invoices.map((inv) => (
              <div
                key={inv.id}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3"
              >
                <div>
                  <div className="text-sm font-medium text-white">{inv.client_name}</div>
                  <div className="text-xs text-white/40">
                    Splatnosť: {new Date(inv.due_date).toLocaleDateString("sk-SK")}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium" style={{
                    color: inv.status === "paid" ? "#6EE7B7" : inv.status === "overdue" ? "#F472B6" : "#FCD34D"
                  }}>
                    {Number(inv.amount).toLocaleString("sk-SK")} €
                  </div>
                  <div className={`text-[10px] ${
                    inv.status === "paid" ? "text-[#6EE7B7]" : inv.status === "overdue" ? "text-[#F472B6]" : "text-[#FCD34D]"
                  }`}>
                    {inv.status === "paid" ? "Zaplatená" : inv.status === "overdue" ? "Meškajúca" : "Čaká"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="glass rounded-2xl p-6">
          <div className="text-base font-medium">Posledná aktivita</div>
          <div className="mt-4 space-y-3">
            {activity.map((a) => (
              <div
                key={a.id}
                className="rounded-xl border border-[#A78BFA]/20 bg-[#A78BFA]/5 p-4 text-sm text-white/85"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs font-medium text-[#A78BFA]">{a.actor}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-xs text-white/40">{a.action}</span>
                </div>
                <div className="mt-1 text-white/60">{a.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
