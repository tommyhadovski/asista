"use client";

import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function ClientsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
      setContacts(data || []);
      setLoading(false);
    }
    load();
  }, []);

  const leads = contacts.filter((c) => c.status === "lead").length;
  const active = contacts.filter((c) => c.status === "active").length;
  const inactive = contacts.filter((c) => c.status === "inactive").length;
  const totalValue = contacts.reduce((s: number, c: any) => s + Number(c.value || 0), 0);

  if (loading) {
    return (
      <div>
        <TopBar title="Klienti & Pipeline" subtitle="Načítavam..." />
        <div className="flex items-center justify-center py-32">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#A78BFA] border-t-transparent" />
        </div>
      </div>
    );
  }

  const pipeline = [
    { stage: "Lead", count: leads, color: "#A78BFA" },
    { stage: "Aktívny", count: active, color: "#6EE7B7" },
    { stage: "Neaktívny", count: inactive, color: "#F472B6" },
    { stage: "Pipeline", count: `${(totalValue / 1000).toFixed(0)}k €`, color: "#FCD34D" },
  ];

  return (
    <div>
      <TopBar title="Klienti & Pipeline" subtitle="CRM prehľad všetkých kontaktov" />

      {/* Pipeline */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {pipeline.map((p) => (
          <div key={p.stage} className="glass rounded-2xl p-6">
            <div className="text-xs text-white/45">{p.stage}</div>
            <div className="mt-3 font-serif text-3xl" style={{ color: p.color }}>
              {p.count}
            </div>
          </div>
        ))}
      </div>

      {/* Clients list */}
      <div className="glass overflow-hidden rounded-2xl">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b border-white/8 px-6 py-4 text-xs uppercase tracking-widest text-white/40">
          <div>Kontakt</div>
          <div>Status</div>
          <div>Hodnota</div>
          <div>Poznámka</div>
        </div>

        {contacts.map((c) => {
          const statusColor = c.status === "active" ? "#6EE7B7" : c.status === "lead" ? "#A78BFA" : "#F472B6";
          const statusText = c.status === "active" ? "Aktívny" : c.status === "lead" ? "Lead" : "Neaktívny";

          return (
            <div key={c.id} className="grid cursor-pointer grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4 border-b border-white/5 px-6 py-5 transition last:border-b-0 hover:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA]/20 to-[#F472B6]/10 text-sm font-medium text-white">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-white">{c.name}</div>
                  <div className="text-xs text-white/40">{c.email}</div>
                </div>
              </div>
              <div>
                <span className="rounded-full px-2.5 py-1 text-[11px] font-medium" style={{ backgroundColor: `${statusColor}15`, color: statusColor }}>
                  {statusText}
                </span>
              </div>
              <div className="font-serif text-base text-white/85">
                {Number(c.value) > 0 ? `${Number(c.value).toLocaleString("sk-SK")} €` : "—"}
              </div>
              <div className="text-sm text-white/45 truncate">{c.notes || "—"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
