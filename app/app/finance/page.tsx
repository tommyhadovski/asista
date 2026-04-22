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
  paid: "Zaplatená",
  pending: "Čaká na platbu",
  overdue: "Po splatnosti",
};

export default function FinancePage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    client_name: "",
    amount: "",
    due_date: "",
  });
  const [saving, setSaving] = useState(false);

  const fetchInvoices = async () => {
    const { data } = await supabase
      .from("invoices")
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

    setFormData({ client_name: "", amount: "", due_date: "" });
    setShowForm(false);
    setSaving(false);
    fetchInvoices();
  };

  const formatAmount = (n: number) =>
    n.toLocaleString("sk-SK", { minimumFractionDigits: 0 }) + "€";

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("sk-SK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <div>
      <TopBar
        title="Financie"
        subtitle="Prehľad faktúr a platieb"
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
          >
            + Nová faktúra
          </button>
        }
      />

      {/* Stats */}
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Celkom fakturované</div>
          <div className="mt-3 font-serif text-3xl text-white">
            {formatAmount(totalInvoiced)}
          </div>
          <div className="mt-2 text-[11px] text-white/45">
            {invoices.length} faktúr
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Zaplatené</div>
          <div className="mt-3 font-serif text-3xl text-[#6EE7B7]">
            {formatAmount(totalPaid)}
          </div>
          <div className="mt-2 text-[11px] text-[#6EE7B7]">
            {invoices.filter((i) => i.status === "paid").length} faktúr
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Čaká na platbu</div>
          <div className="mt-3 font-serif text-3xl text-[#FCD34D]">
            {formatAmount(totalPending)}
          </div>
          <div className="mt-2 text-[11px] text-[#FCD34D]">
            {invoices.filter((i) => i.status === "pending").length} faktúr
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Po splatnosti</div>
          <div className="mt-3 font-serif text-3xl text-[#F472B6]">
            {formatAmount(totalOverdue)}
          </div>
          <div className="mt-2 text-[11px] text-[#F472B6]">
            {invoices.filter((i) => i.status === "overdue").length} faktúr
          </div>
        </div>
      </div>

      {/* New invoice form */}
      {showForm && (
        <div className="glass mb-6 rounded-2xl p-6">
          <div className="mb-4 text-lg font-medium">Nová faktúra</div>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
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
                Dátum splatnosti
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
            <div className="flex items-end gap-2">
              <button
                type="submit"
                disabled={saving}
                className="btn-primary rounded-full px-6 py-3 text-sm disabled:opacity-50"
              >
                {saving ? "Ukladám..." : "Uložiť"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 hover:text-white"
              >
                Zrušiť
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Invoice list */}
      <div className="glass rounded-2xl p-6">
        <div className="mb-4 text-lg font-medium">Zoznam faktúr</div>

        {loading ? (
          <div className="py-12 text-center text-sm text-white/40">
            Načítavam faktúry...
          </div>
        ) : invoices.length === 0 ? (
          <div className="py-12 text-center text-sm text-white/40">
            Zatiaľ žiadne faktúry. Pridajte prvú kliknutím na &quot;Nová
            faktúra&quot;.
          </div>
        ) : (
          <div className="space-y-3">
            {invoices.map((inv) => (
              <div
                key={inv.id}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center text-sm font-medium"
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
                      Splatnosť: {formatDate(inv.due_date)}
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
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
