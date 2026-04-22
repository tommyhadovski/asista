"use client";

import { useEffect, useState } from "react";
import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import type { Invoice } from "@/lib/database.types";

const COMPANY_ID = "11111111-1111-1111-1111-111111111111";

const statusColors: Record<string, string> = {
  paid: "#6EE7B7",
  pending: "#FCD34D",
  overdue: "#F472B6",
};

const statusLabels: Record<string, string> = {
  paid: "Zaplatena",
  pending: "Caka",
  overdue: "Meska",
};

type FilterTab = "all" | "paid" | "pending" | "overdue";

export default function FinancePage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    client_name: "",
    amount: "",
    due_date: "",
    description: "",
  });
  const [editData, setEditData] = useState({
    client_name: "",
    amount: "",
    due_date: "",
    status: "pending" as Invoice["status"],
  });

  const fetchInvoices = async () => {
    const { data } = await supabase
      .from("invoices" as never)
      .select("*")
      .eq("company_id", COMPANY_ID)
      .order("created_at", { ascending: false });
    if (data) setInvoices(data as Invoice[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalPaid = invoices
    .filter((inv) => inv.status === "paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const totalPending = invoices
    .filter((inv) => inv.status === "pending")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const totalOverdue = invoices
    .filter((inv) => inv.status === "overdue")
    .reduce((sum, inv) => sum + inv.amount, 0);

  const filteredInvoices =
    activeFilter === "all"
      ? invoices
      : invoices.filter((inv) => inv.status === activeFilter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.client_name || !formData.amount || !formData.due_date) return;
    setSaving(true);

    await supabase.from("invoices" as never).insert({
      company_id: COMPANY_ID,
      client_name: formData.client_name,
      amount: parseFloat(formData.amount),
      due_date: formData.due_date,
      status: "pending",
    } as never);

    setFormData({ client_name: "", amount: "", due_date: "", description: "" });
    setShowForm(false);
    setSaving(false);
    fetchInvoices();
  };

  const handleExpand = (inv: Invoice) => {
    if (expandedId === inv.id) {
      setExpandedId(null);
      return;
    }
    setExpandedId(inv.id);
    setEditData({
      client_name: inv.client_name,
      amount: inv.amount.toString(),
      due_date: inv.due_date,
      status: inv.status,
    });
  };

  const handleUpdate = async (id: string) => {
    setSaving(true);
    await supabase
      .from("invoices" as never)
      .update({
        client_name: editData.client_name,
        amount: parseFloat(editData.amount),
        due_date: editData.due_date,
        status: editData.status,
      } as never)
      .eq("id", id);
    setExpandedId(null);
    setSaving(false);
    fetchInvoices();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Naozaj chcete vymazat tuto fakturu?")) return;
    await supabase.from("invoices" as never).delete().eq("id", id);
    setExpandedId(null);
    fetchInvoices();
  };

  const formatAmount = (n: number) =>
    n.toLocaleString("sk-SK", { minimumFractionDigits: 0 }) + " \u20AC";

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("sk-SK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const filterTabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: "Vsetky" },
    { key: "paid", label: "Zaplatene" },
    { key: "pending", label: "Cakajuce" },
    { key: "overdue", label: "Meskajuce" },
  ];

  return (
    <div>
      <TopBar
        title="Financie"
        subtitle="Prehlad faktur a platieb"
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
          >
            + Nova faktura
          </button>
        }
      />

      {/* Stats */}
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Celkom fakturovane</div>
          <div className="mt-3 font-serif text-3xl text-white">
            {formatAmount(totalInvoiced)}
          </div>
          <div className="mt-2 text-[11px] text-white/45">
            {invoices.length} faktur
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Zaplatene</div>
          <div className="mt-3 font-serif text-3xl text-[#6EE7B7]">
            {formatAmount(totalPaid)}
          </div>
          <div className="mt-2 text-[11px] text-[#6EE7B7]">
            {invoices.filter((i) => i.status === "paid").length} faktur
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Cakajuce</div>
          <div className="mt-3 font-serif text-3xl text-[#FCD34D]">
            {formatAmount(totalPending)}
          </div>
          <div className="mt-2 text-[11px] text-[#FCD34D]">
            {invoices.filter((i) => i.status === "pending").length} faktur
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Meskajuce</div>
          <div className="mt-3 font-serif text-3xl text-[#F472B6]">
            {formatAmount(totalOverdue)}
          </div>
          <div className="mt-2 text-[11px] text-[#F472B6]">
            {invoices.filter((i) => i.status === "overdue").length} faktur
          </div>
        </div>
      </div>

      {/* New invoice form */}
      {showForm && (
        <div className="glass mb-6 rounded-2xl p-6">
          <div className="mb-4 text-lg font-medium">Nova faktura</div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="min-w-[200px] flex-1">
                <label className="mb-1.5 block text-xs text-white/50">
                  Meno klienta
                </label>
                <input
                  type="text"
                  value={formData.client_name}
                  onChange={(e) =>
                    setFormData({ ...formData, client_name: e.target.value })
                  }
                  placeholder="napr. Varga Holding"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
                />
              </div>
              <div className="min-w-[150px]">
                <label className="mb-1.5 block text-xs text-white/50">
                  Suma (EUR)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  placeholder="0.00"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
                />
              </div>
              <div className="min-w-[180px]">
                <label className="mb-1.5 block text-xs text-white/50">
                  Datum splatnosti
                </label>
                <input
                  type="date"
                  value={formData.due_date}
                  onChange={(e) =>
                    setFormData({ ...formData, due_date: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-white/50">
                Popis (volitelne)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Poznamky k fakture..."
                rows={2}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50 resize-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={saving}
                className="btn-primary rounded-full px-6 py-3 text-sm disabled:opacity-50"
              >
                {saving ? "Ukladam..." : "Ulozit"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 hover:text-white"
              >
                Zrusit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter tabs */}
      <div className="mb-4 flex gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`rounded-full border px-4 py-2 text-xs transition ${
              activeFilter === tab.key
                ? "border-[#A78BFA]/40 bg-gradient-to-r from-[#A78BFA]/15 to-[#F472B6]/10 text-white"
                : "border-white/10 bg-white/[0.02] text-white/60 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Invoice list */}
      <div className="glass rounded-2xl p-6">
        <div className="mb-4 text-lg font-medium">Zoznam faktur</div>

        {loading ? (
          <div className="py-12 text-center text-sm text-white/40">
            Nacitavam faktury...
          </div>
        ) : filteredInvoices.length === 0 ? (
          <div className="py-12 text-center text-sm text-white/40">
            {activeFilter === "all"
              ? 'Zatial ziadne faktury. Pridajte prvu kliknutim na "Nova faktura".'
              : "Ziadne faktury v tejto kategorii."}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredInvoices.map((inv) => (
              <div key={inv.id}>
                {/* Invoice row */}
                <div
                  onClick={() => handleExpand(inv)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition hover:bg-white/[0.04] ${
                    expandedId === inv.id
                      ? "border-[#A78BFA]/30 bg-white/[0.04]"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium"
                      style={{
                        backgroundColor: `${statusColors[inv.status]}20`,
                        color: statusColors[inv.status],
                      }}
                    >
                      {inv.client_name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {inv.client_name}
                      </div>
                      <div className="text-xs text-white/45">
                        Splatnost: {formatDate(inv.due_date)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: `${statusColors[inv.status]}20`,
                        color: statusColors[inv.status],
                      }}
                    >
                      {statusLabels[inv.status]}
                    </span>
                    <div
                      className="font-serif text-lg"
                      style={{ color: statusColors[inv.status] }}
                    >
                      {formatAmount(inv.amount)}
                    </div>
                    <span className="text-white/30 text-sm">
                      {expandedId === inv.id ? "\u25B2" : "\u25BC"}
                    </span>
                  </div>
                </div>

                {/* Expanded edit form */}
                {expandedId === inv.id && (
                  <div className="mt-1 rounded-xl border border-[#A78BFA]/20 bg-white/[0.03] p-5">
                    <div className="flex flex-wrap gap-4">
                      <div className="min-w-[200px] flex-1">
                        <label className="mb-1.5 block text-xs text-white/50">
                          Meno klienta
                        </label>
                        <input
                          type="text"
                          value={editData.client_name}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              client_name: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-[#A78BFA]/50"
                        />
                      </div>
                      <div className="min-w-[150px]">
                        <label className="mb-1.5 block text-xs text-white/50">
                          Suma (EUR)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={editData.amount}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              amount: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-[#A78BFA]/50"
                        />
                      </div>
                      <div className="min-w-[180px]">
                        <label className="mb-1.5 block text-xs text-white/50">
                          Datum splatnosti
                        </label>
                        <input
                          type="date"
                          value={editData.due_date}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              due_date: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-[#A78BFA]/50"
                        />
                      </div>
                      <div className="min-w-[160px]">
                        <label className="mb-1.5 block text-xs text-white/50">
                          Status
                        </label>
                        <select
                          value={editData.status}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              status: e.target
                                .value as Invoice["status"],
                            })
                          }
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-[#A78BFA]/50"
                        >
                          <option value="paid">Zaplatena</option>
                          <option value="pending">Caka na platbu</option>
                          <option value="overdue">Po splatnosti</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => handleUpdate(inv.id)}
                        disabled={saving}
                        className="btn-primary rounded-full px-6 py-2.5 text-sm disabled:opacity-50"
                      >
                        {saving ? "Ukladam..." : "Ulozit"}
                      </button>
                      <button
                        onClick={() => setExpandedId(null)}
                        className="rounded-full border border-white/10 px-6 py-2.5 text-sm text-white/60 hover:text-white"
                      >
                        Zrusit
                      </button>
                      <button
                        onClick={() => handleDelete(inv.id)}
                        className="ml-auto rounded-full border border-red-500/30 px-6 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10"
                      >
                        Vymazat
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
