"use client";

import { useEffect, useState } from "react";
import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import type { CalendarEvent } from "@/lib/database.types";

const COMPANY_ID = "11111111-1111-1111-1111-111111111111";

const typeColors: Record<string, string> = {
  meeting: "#A78BFA",
  call: "#F472B6",
  reminder: "#FCD34D",
  blocked: "#6EE7B7",
};

const typeLabels: Record<string, string> = {
  meeting: "Stretnutie",
  call: "Hovor",
  reminder: "Pripomienka",
  blocked: "Blokovaný čas",
};

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "09:00",
    type: "meeting" as CalendarEvent["type"],
  });

  const fetchEvents = async () => {
    const { data } = await supabase
      .from("calendar_events")
      .select("*")
      .eq("company_id", COMPANY_ID)
      .order("start_time", { ascending: true });
    if (data) setEvents(data as CalendarEvent[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time) return;
    setSaving(true);

    const startTime = `${formData.date}T${formData.time}:00`;
    const endDate = new Date(startTime);
    endDate.setHours(endDate.getHours() + 1);
    const endTime = endDate.toISOString();

    await supabase.from("calendar_events" as never).insert({
      company_id: COMPANY_ID,
      title: formData.title,
      start_time: startTime,
      end_time: endTime,
      type: formData.type,
      attendees: [],
    } as never);

    setFormData({ title: "", date: "", time: "09:00", type: "meeting" });
    setShowForm(false);
    setSaving(false);
    fetchEvents();
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("sk-SK", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatTime = (d: string) =>
    new Date(d).toLocaleTimeString("sk-SK", {
      hour: "2-digit",
      minute: "2-digit",
    });

  // Group events by date
  const grouped: Record<string, CalendarEvent[]> = {};
  events.forEach((ev) => {
    const dateKey = new Date(ev.start_time).toISOString().split("T")[0];
    if (!grouped[dateKey]) grouped[dateKey] = [];
    grouped[dateKey].push(ev);
  });

  return (
    <div>
      <TopBar
        title="Kalendár"
        subtitle="Prehľad udalostí a stretnutí"
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
          >
            + Pridať udalosť
          </button>
        }
      />

      {/* New event form */}
      {showForm && (
        <div className="glass mb-6 rounded-2xl p-6">
          <div className="mb-4 text-lg font-medium">Nová udalosť</div>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="mb-1.5 block text-xs text-white/50">
                Názov
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="napr. Stretnutie s klientom"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
              />
            </div>
            <div className="min-w-[180px]">
              <label className="mb-1.5 block text-xs text-white/50">
                Dátum
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
              />
            </div>
            <div className="min-w-[120px]">
              <label className="mb-1.5 block text-xs text-white/50">Čas</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
              />
            </div>
            <div className="min-w-[160px]">
              <label className="mb-1.5 block text-xs text-white/50">Typ</label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    type: e.target.value as CalendarEvent["type"],
                  })
                }
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-[#A78BFA]/50"
              >
                <option value="meeting">Stretnutie</option>
                <option value="call">Hovor</option>
                <option value="reminder">Pripomienka</option>
                <option value="blocked">Blokovaný čas</option>
              </select>
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

      {/* Events list */}
      <div className="glass rounded-2xl p-6">
        <div className="mb-4 text-lg font-medium">Udalosti</div>

        {loading ? (
          <div className="py-12 text-center text-sm text-white/40">
            Načítavam udalosti...
          </div>
        ) : events.length === 0 ? (
          <div className="py-12 text-center text-sm text-white/40">
            Zatiaľ žiadne udalosti. Pridajte prvú kliknutím na &quot;Pridať
            udalosť&quot;.
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(grouped).map(([dateKey, dayEvents]) => (
              <div key={dateKey}>
                <div className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                  {formatDate(dayEvents[0].start_time)}
                </div>
                <div className="space-y-3">
                  {dayEvents.map((ev) => (
                    <div
                      key={ev.id}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4"
                      style={{ borderLeftColor: typeColors[ev.type], borderLeftWidth: 3 }}
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-sm font-medium text-white">
                            {ev.title}
                          </div>
                          <div className="mt-1 text-xs text-white/45">
                            {formatTime(ev.start_time)} -{" "}
                            {formatTime(ev.end_time)}
                            {ev.attendees && ev.attendees.length > 0 && (
                              <span className="ml-2">
                                · {ev.attendees.join(", ")}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: `${typeColors[ev.type]}20`,
                          color: typeColors[ev.type],
                        }}
                      >
                        {typeLabels[ev.type]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
