"use client";

import { useEffect, useState } from "react";
import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import type { TeamMember } from "@/lib/database.types";

const COMPANY_ID = "11111111-1111-1111-1111-111111111111";

const statusColors: Record<string, string> = {
  active: "#6EE7B7",
  away: "#FCD34D",
  offline: "#64748B",
};

const statusLabels: Record<string, string> = {
  active: "Online",
  away: "Preč",
  offline: "Offline",
};

const roleColors: Record<string, string> = {
  CEO: "#A78BFA",
  Operations: "#F472B6",
  Sales: "#6EE7B7",
  Support: "#FCD34D",
  Marketing: "#38BDF8",
  Developer: "#A78BFA",
};

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
  });

  const fetchMembers = async () => {
    const { data } = await supabase
      .from("team_members" as never)
      .select("*")
      .eq("company_id", COMPANY_ID)
      .order("created_at", { ascending: false });
    if (data) setMembers(data as TeamMember[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.email) return;
    setSaving(true);

    if (editingId) {
      await supabase
        .from("team_members" as never)
        .update({
          name: formData.name,
          role: formData.role,
          email: formData.email,
        } as never)
        .eq("id", editingId);
    } else {
      await supabase.from("team_members" as never).insert({
        company_id: COMPANY_ID,
        name: formData.name,
        role: formData.role,
        email: formData.email,
        status: "active",
      } as never);
    }

    setFormData({ name: "", role: "", email: "" });
    setShowForm(false);
    setEditingId(null);
    setSaving(false);
    fetchMembers();
  };

  const handleEdit = (member: TeamMember) => {
    setFormData({ name: member.name, role: member.role, email: member.email });
    setEditingId(member.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Naozaj chcete odstrániť tohto člena?")) return;
    await supabase.from("team_members" as never).delete().eq("id", id);
    fetchMembers();
  };

  const toggleStatus = async (member: TeamMember) => {
    const nextStatus: Record<string, string> = {
      active: "away",
      away: "offline",
      offline: "active",
    };
    await supabase
      .from("team_members" as never)
      .update({ status: nextStatus[member.status] } as never)
      .eq("id", member.id);
    fetchMembers();
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getColor = (role: string) => roleColors[role] || "#A78BFA";

  return (
    <div>
      <TopBar
        title="Tim"
        subtitle="Sprava clenov timu a ich roli"
        action={
          <button
            onClick={() => {
              setEditingId(null);
              setFormData({ name: "", role: "", email: "" });
              setShowForm(!showForm);
            }}
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
          >
            + Pridat clena
          </button>
        }
      />

      {/* Add/Edit form */}
      {showForm && (
        <div className="glass mb-6 rounded-2xl p-6">
          <div className="mb-4 text-lg font-medium">
            {editingId ? "Upravit clena" : "Novy clen timu"}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
            <div className="min-w-[200px] flex-1">
              <label className="mb-1.5 block text-xs text-white/50">
                Meno
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="napr. Jan Novak"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
              />
            </div>
            <div className="min-w-[160px]">
              <label className="mb-1.5 block text-xs text-white/50">
                Rola
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                placeholder="napr. Sales"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
              />
            </div>
            <div className="min-w-[220px]">
              <label className="mb-1.5 block text-xs text-white/50">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="jan@firma.sk"
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

      {/* Team list */}
      <div className="glass rounded-2xl p-6">
        <div className="mb-4 text-lg font-medium">Clenovia timu</div>

        {loading ? (
          <div className="py-12 text-center text-sm text-white/40">
            Nacitavam tim...
          </div>
        ) : members.length === 0 ? (
          <div className="py-12 text-center text-sm text-white/40">
            Zatial ziadni clenovia. Pridajte prveho kliknutim na &quot;Pridat
            clena&quot;.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {members.map((m) => (
              <div
                key={m.id}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-[#0A0A14]"
                    style={{
                      background: `linear-gradient(135deg, ${getColor(m.role)}, ${getColor(m.role)}dd)`,
                    }}
                  >
                    {getInitials(m.name)}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      {m.name}
                    </div>
                    <div className="text-xs text-white/45">{m.role}</div>
                  </div>
                  <button
                    onClick={() => toggleStatus(m)}
                    className="flex items-center gap-1.5 text-xs transition"
                    style={{ color: statusColors[m.status] }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: statusColors[m.status] }}
                    />
                    {statusLabels[m.status]}
                  </button>
                </div>

                <div className="mt-3 text-xs text-white/40">{m.email}</div>

                <div className="mt-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
                  <button
                    onClick={() => handleEdit(m)}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/60 transition hover:text-white"
                  >
                    Upravit
                  </button>
                  <button
                    onClick={() => handleDelete(m.id)}
                    className="rounded-lg border border-red-500/20 px-3 py-1.5 text-xs text-red-400 transition hover:bg-red-500/10"
                  >
                    Vymazat
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
