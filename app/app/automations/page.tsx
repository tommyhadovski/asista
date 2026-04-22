"use client";

import { useEffect, useState } from "react";
import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import type { Automation } from "@/lib/database.types";

const COMPANY_ID = "11111111-1111-1111-1111-111111111111";

export default function AutomationsPage() {
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    trigger: "",
    action: "",
  });

  const fetchAutomations = async () => {
    const { data } = await supabase
      .from("automations" as never)
      .select("*")
      .eq("company_id", COMPANY_ID)
      .order("created_at", { ascending: false });
    if (data) setAutomations(data as Automation[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchAutomations();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.trigger || !formData.action) return;
    setSaving(true);

    if (editingId) {
      await supabase
        .from("automations" as never)
        .update({
          name: formData.name,
          trigger: formData.trigger,
          action: formData.action,
        } as never)
        .eq("id", editingId);
    } else {
      await supabase.from("automations" as never).insert({
        company_id: COMPANY_ID,
        name: formData.name,
        trigger: formData.trigger,
        action: formData.action,
        enabled: true,
      } as never);
    }

    setFormData({ name: "", trigger: "", action: "" });
    setShowForm(false);
    setEditingId(null);
    setSaving(false);
    fetchAutomations();
  };

  const toggleEnabled = async (automation: Automation) => {
    await supabase
      .from("automations" as never)
      .update({ enabled: !automation.enabled } as never)
      .eq("id", automation.id);
    fetchAutomations();
  };

  const handleEdit = (a: Automation) => {
    setFormData({ name: a.name, trigger: a.trigger, action: a.action });
    setEditingId(a.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Naozaj chcete vymazat tuto automatizaciu?")) return;
    await supabase.from("automations" as never).delete().eq("id", id);
    fetchAutomations();
  };

  const activeCount = automations.filter((a) => a.enabled).length;

  return (
    <div>
      <TopBar
        title="Workflow Automatizacie"
        subtitle="Pravidla, ktore AiAsista vykonava automaticky"
        action={
          <button
            onClick={() => {
              setEditingId(null);
              setFormData({ name: "", trigger: "", action: "" });
              setShowForm(!showForm);
            }}
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
          >
            + Nova automatizacia
          </button>
        }
      />

      {/* Stats */}
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Celkom automatizacii</div>
          <div className="mt-3 font-serif text-4xl text-white">
            {automations.length}
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Aktivne</div>
          <div className="mt-3 font-serif text-4xl text-[#6EE7B7]">
            {activeCount}
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Neaktivne</div>
          <div className="mt-3 font-serif text-4xl text-[#F472B6]">
            {automations.length - activeCount}
          </div>
        </div>
      </div>

      {/* Add/Edit form */}
      {showForm && (
        <div className="glass mb-6 rounded-2xl p-6">
          <div className="mb-4 text-lg font-medium">
            {editingId ? "Upravit automatizaciu" : "Nova automatizacia"}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
            <div className="min-w-[200px] flex-1">
              <label className="mb-1.5 block text-xs text-white/50">
                Nazov
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="napr. Follow-up po hovore"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
              />
            </div>
            <div className="min-w-[200px] flex-1">
              <label className="mb-1.5 block text-xs text-white/50">
                Trigger
              </label>
              <input
                type="text"
                value={formData.trigger}
                onChange={(e) =>
                  setFormData({ ...formData, trigger: e.target.value })
                }
                placeholder="napr. Zmeskany hovor"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
              />
            </div>
            <div className="min-w-[200px] flex-1">
              <label className="mb-1.5 block text-xs text-white/50">
                Akcia
              </label>
              <input
                type="text"
                value={formData.action}
                onChange={(e) =>
                  setFormData({ ...formData, action: e.target.value })
                }
                placeholder="napr. Posli SMS pripomienku"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
              />
            </div>
            <div className="flex items-end gap-2">
              <button
                type="submit"
                disabled={saving}
                className="btn-primary rounded-full px-6 py-3 text-sm disabled:opacity-50"
              >
                {saving ? "Ukladam..." : editingId ? "Ulozit" : "Pridat"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 hover:text-white"
              >
                Zrusit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Automations list */}
      {loading ? (
        <div className="glass rounded-2xl p-6">
          <div className="py-12 text-center text-sm text-white/40">
            Nacitavam automatizacie...
          </div>
        </div>
      ) : automations.length === 0 ? (
        <div className="glass rounded-2xl p-6">
          <div className="py-12 text-center text-sm text-white/40">
            Zatial ziadne automatizacie. Pridajte prvu kliknutim na &quot;Nova
            automatizacia&quot;.
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {automations.map((a) => (
            <div key={a.id} className="glass group rounded-2xl p-6">
              <div className="flex items-start gap-6">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-2xl ${
                    a.enabled
                      ? "border-[#A78BFA]/20 bg-[#A78BFA]/10"
                      : "border-white/8 bg-white/[0.03]"
                  }`}
                >
                  {a.enabled ? "⚡" : "⏸"}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-medium">{a.name}</h3>
                    {a.enabled && (
                      <span className="rounded-full border border-[#6EE7B7]/30 bg-[#6EE7B7]/5 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#6EE7B7]">
                        Aktivne
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5">
                      <span className="text-[#A78BFA]">Trigger</span>
                      <span className="text-white/60">&rarr;</span>
                      <span className="text-white/80">{a.trigger}</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5">
                      <span className="text-[#F472B6]">Akcia</span>
                      <span className="text-white/60">&rarr;</span>
                      <span className="text-white/80">{a.action}</span>
                    </div>
                  </div>

                  {/* Edit/Delete buttons */}
                  <div className="mt-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
                    <button
                      onClick={() => handleEdit(a)}
                      className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/60 transition hover:text-white"
                    >
                      Upravit
                    </button>
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="rounded-lg border border-red-500/20 px-3 py-1.5 text-xs text-red-400 transition hover:bg-red-500/10"
                    >
                      Vymazat
                    </button>
                  </div>
                </div>

                {/* Toggle */}
                <div className="shrink-0">
                  <button
                    onClick={() => toggleEnabled(a)}
                    className={`relative h-7 w-12 rounded-full transition ${
                      a.enabled
                        ? "bg-gradient-to-r from-[#A78BFA] to-[#F472B6]"
                        : "bg-white/10"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition ${
                        a.enabled ? "left-[22px]" : "left-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
