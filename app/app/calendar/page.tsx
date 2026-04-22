"use client";

import { useEffect, useState, useMemo } from "react";
import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import type { CalendarEvent } from "@/lib/database.types";

const COMPANY_ID = "11111111-1111-1111-1111-111111111111";

const typeConfig: Record<
  string,
  { label: string; icon: string; color: string }
> = {
  meeting: { label: "Stretnutie", icon: "\uD83E\uDD1D", color: "#A78BFA" },
  call: { label: "Hovor", icon: "\uD83D\uDCDE", color: "#F472B6" },
  reminder: { label: "Pripomienka", icon: "\u23F0", color: "#FCD34D" },
  blocked: { label: "Blokovany cas", icon: "\uD83D\uDD12", color: "#64748B" },
};

const dayNames = ["Po", "Ut", "St", "St", "Pi", "So", "Ne"];

function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function getWeekDays(weekStart: Date): Date[] {
  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    days.push(d);
  }
  return days;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    start_time: "09:00",
    end_time: "10:00",
    type: "meeting" as CalendarEvent["type"],
    attendees: "",
  });

  const today = new Date();
  const currentWeekStart = useMemo(() => {
    const ws = getWeekStart(today);
    ws.setDate(ws.getDate() + weekOffset * 7);
    return ws;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekOffset]);
  const weekDays = useMemo(() => getWeekDays(currentWeekStart), [currentWeekStart]);

  const fetchEvents = async () => {
    const { data } = await supabase
      .from("calendar_events" as never)
      .select("*")
      .eq("company_id", COMPANY_ID)
      .order("start_time", { ascending: true });
    if (data) setEvents(data as CalendarEvent[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Week events
  const weekEvents = events.filter((ev) => {
    const evDate = new Date(ev.start_time);
    return evDate >= weekDays[0] && evDate < new Date(weekDays[6].getTime() + 86400000);
  });

  // Filtered events for display
  const displayEvents = selectedDay
    ? events.filter((ev) => isSameDay(new Date(ev.start_time), selectedDay))
    : weekEvents;

  // Group by date
  const grouped: Record<string, CalendarEvent[]> = {};
  displayEvents.forEach((ev) => {
    const dateKey = new Date(ev.start_time).toISOString().split("T")[0];
    if (!grouped[dateKey]) grouped[dateKey] = [];
    grouped[dateKey].push(ev);
  });

  // Next event
  const now = new Date();
  const nextEvent = weekEvents.find((ev) => new Date(ev.start_time) > now);

  // Current time position for time indicator
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.start_time) return;
    setSaving(true);

    const startTime = `${formData.date}T${formData.start_time}:00`;
    const endTime = `${formData.date}T${formData.end_time}:00`;
    const attendeesArr = formData.attendees
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean);

    if (editingId) {
      await supabase
        .from("calendar_events" as never)
        .update({
          title: formData.title,
          start_time: startTime,
          end_time: endTime,
          type: formData.type,
          attendees: attendeesArr,
        } as never)
        .eq("id", editingId);
    } else {
      await supabase.from("calendar_events" as never).insert({
        company_id: COMPANY_ID,
        title: formData.title,
        start_time: startTime,
        end_time: endTime,
        type: formData.type,
        attendees: attendeesArr,
      } as never);
    }

    setFormData({
      title: "",
      date: "",
      start_time: "09:00",
      end_time: "10:00",
      type: "meeting",
      attendees: "",
    });
    setShowForm(false);
    setEditingId(null);
    setSaving(false);
    fetchEvents();
  };

  const handleEdit = (ev: CalendarEvent) => {
    const startDate = new Date(ev.start_time);
    const endDate = new Date(ev.end_time);
    setFormData({
      title: ev.title,
      date: startDate.toISOString().split("T")[0],
      start_time: startDate.toTimeString().slice(0, 5),
      end_time: endDate.toTimeString().slice(0, 5),
      type: ev.type,
      attendees: (ev.attendees || []).join(", "),
    });
    setEditingId(ev.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Naozaj chcete vymazat tuto udalost?")) return;
    await supabase.from("calendar_events" as never).delete().eq("id", id);
    fetchEvents();
  };

  const formatTime = (d: string) =>
    new Date(d).toLocaleTimeString("sk-SK", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatDateFull = (d: string) =>
    new Date(d).toLocaleDateString("sk-SK", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

  const formatWeekRange = () => {
    const start = weekDays[0];
    const end = weekDays[6];
    const startStr = start.toLocaleDateString("sk-SK", {
      day: "numeric",
      month: "short",
    });
    const endStr = end.toLocaleDateString("sk-SK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return `${startStr} - ${endStr}`;
  };

  const getTimeUntil = (dateStr: string) => {
    const diff = new Date(dateStr).getTime() - now.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ${minutes % 60}min`;
    return `${Math.floor(hours / 24)}d`;
  };

  return (
    <div>
      <TopBar
        title="Kalendar"
        subtitle="Prehlad udalosti a stretnuti"
        action={
          <button
            onClick={() => {
              setEditingId(null);
              setFormData({
                title: "",
                date: "",
                start_time: "09:00",
                end_time: "10:00",
                type: "meeting",
                attendees: "",
              });
              setShowForm(!showForm);
            }}
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
          >
            + Pridat udalost
          </button>
        }
      />

      {/* Mini stats */}
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Udalosti tento tyzden</div>
          <div className="mt-2 font-serif text-3xl text-white">
            {weekEvents.length}
          </div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Najblizsie</div>
          <div className="mt-2 text-sm font-medium text-[#A78BFA]">
            {nextEvent ? (
              <>
                {nextEvent.title}{" "}
                <span className="text-white/40">
                  o {getTimeUntil(nextEvent.start_time)}
                </span>
              </>
            ) : (
              <span className="text-white/40">Ziadna nadchadzajuca</span>
            )}
          </div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-xs text-white/45">Aktualny cas</div>
          <div className="mt-2 font-serif text-3xl text-[#F472B6]">
            {String(currentHour).padStart(2, "0")}:
            {String(currentMinute).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Week navigation */}
      <div className="glass mb-6 rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => {
              setWeekOffset(weekOffset - 1);
              setSelectedDay(null);
            }}
            className="rounded-xl border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:text-white"
          >
            &larr; Predchadzajuci tyzden
          </button>
          <div className="text-sm font-medium text-white">
            {formatWeekRange()}
          </div>
          <button
            onClick={() => {
              setWeekOffset(weekOffset + 1);
              setSelectedDay(null);
            }}
            className="rounded-xl border border-white/10 px-4 py-2 text-xs text-white/60 transition hover:text-white"
          >
            Dalsi tyzden &rarr;
          </button>
        </div>

        {/* Week grid */}
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, i) => {
            const isToday = isSameDay(day, today);
            const isSelected = selectedDay && isSameDay(day, selectedDay);
            const dayEventsCount = events.filter((ev) =>
              isSameDay(new Date(ev.start_time), day)
            ).length;

            return (
              <button
                key={i}
                onClick={() =>
                  setSelectedDay(
                    selectedDay && isSameDay(selectedDay, day) ? null : day
                  )
                }
                className={`relative flex flex-col items-center rounded-xl px-3 py-4 transition ${
                  isSelected
                    ? "bg-gradient-to-b from-[#A78BFA]/30 to-[#F472B6]/20 border border-[#A78BFA]/40"
                    : isToday
                    ? "bg-gradient-to-b from-[#A78BFA]/15 to-[#F472B6]/10 border border-[#A78BFA]/20"
                    : "border border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  {dayNames[i]}
                </span>
                <span
                  className={`mt-1 text-xl font-medium ${
                    isToday ? "text-[#A78BFA]" : "text-white"
                  }`}
                >
                  {day.getDate()}
                </span>
                {dayEventsCount > 0 && (
                  <div className="mt-2 flex gap-1">
                    {Array.from({ length: Math.min(dayEventsCount, 3) }).map(
                      (_, j) => (
                        <span
                          key={j}
                          className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]"
                        />
                      )
                    )}
                    {dayEventsCount > 3 && (
                      <span className="text-[9px] text-white/40">
                        +{dayEventsCount - 3}
                      </span>
                    )}
                  </div>
                )}
                {isToday && (
                  <div className="absolute -top-1 right-1 h-2 w-2 rounded-full bg-[#F472B6] shadow-lg shadow-[#F472B6]/50" />
                )}
              </button>
            );
          })}
        </div>

        {selectedDay && (
          <div className="mt-3 text-center">
            <button
              onClick={() => setSelectedDay(null)}
              className="text-xs text-white/40 hover:text-white"
            >
              Zobrazit cely tyzden
            </button>
          </div>
        )}
      </div>

      {/* Event form */}
      {showForm && (
        <div className="glass mb-6 rounded-2xl p-6">
          <div className="mb-4 text-lg font-medium">
            {editingId ? "Upravit udalost" : "Nova udalost"}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="min-w-[200px] flex-1">
                <label className="mb-1.5 block text-xs text-white/50">
                  Nazov
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
                  Datum
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
                <label className="mb-1.5 block text-xs text-white/50">
                  Zaciatok
                </label>
                <input
                  type="time"
                  value={formData.start_time}
                  onChange={(e) =>
                    setFormData({ ...formData, start_time: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
                />
              </div>
              <div className="min-w-[120px]">
                <label className="mb-1.5 block text-xs text-white/50">
                  Koniec
                </label>
                <input
                  type="time"
                  value={formData.end_time}
                  onChange={(e) =>
                    setFormData({ ...formData, end_time: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="min-w-[160px]">
                <label className="mb-1.5 block text-xs text-white/50">
                  Typ
                </label>
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
                  <option value="blocked">Blokovany cas</option>
                </select>
              </div>
              <div className="min-w-[250px] flex-1">
                <label className="mb-1.5 block text-xs text-white/50">
                  Ucastnici (oddeleni ciarkou)
                </label>
                <input
                  type="text"
                  value={formData.attendees}
                  onChange={(e) =>
                    setFormData({ ...formData, attendees: e.target.value })
                  }
                  placeholder="napr. Jan, Maria, Peter"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#A78BFA]/50"
                />
              </div>
            </div>
            <div className="flex gap-2">
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

      {/* Events list */}
      <div className="glass rounded-2xl p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-lg font-medium">
            {selectedDay
              ? formatDateFull(selectedDay.toISOString())
              : "Udalosti tohto tyzdna"}
          </div>
          <span className="text-xs text-white/40">
            {displayEvents.length}{" "}
            {displayEvents.length === 1 ? "udalost" : "udalosti"}
          </span>
        </div>

        {loading ? (
          <div className="py-12 text-center text-sm text-white/40">
            Nacitavam udalosti...
          </div>
        ) : displayEvents.length === 0 ? (
          <div className="py-12 text-center text-sm text-white/40">
            {selectedDay
              ? "Ziadne udalosti v tento den."
              : 'Zatial ziadne udalosti tento tyzden. Pridajte prvu kliknutim na "Pridat udalost".'}
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(grouped)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([dateKey, dayEvents]) => (
                <div key={dateKey}>
                  {!selectedDay && (
                    <div className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                      {formatDateFull(dayEvents[0].start_time)}
                    </div>
                  )}
                  <div className="space-y-3">
                    {dayEvents.map((ev) => {
                      const config = typeConfig[ev.type] || typeConfig.meeting;
                      const isPast = new Date(ev.end_time) < now;

                      return (
                        <div
                          key={ev.id}
                          className={`group rounded-xl border p-4 transition ${
                            isPast
                              ? "border-white/5 bg-white/[0.01] opacity-60"
                              : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                          }`}
                          style={{
                            borderLeftColor: config.color,
                            borderLeftWidth: 3,
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="text-center">
                                <div
                                  className="text-lg font-medium"
                                  style={{ color: config.color }}
                                >
                                  {formatTime(ev.start_time)}
                                </div>
                                <div className="text-[10px] text-white/30">
                                  {formatTime(ev.end_time)}
                                </div>
                              </div>
                              <div className="h-8 w-px bg-white/10" />
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {ev.title}
                                </div>
                                {ev.attendees && ev.attendees.length > 0 && (
                                  <div className="mt-1.5 flex items-center gap-1.5">
                                    {ev.attendees
                                      .slice(0, 4)
                                      .map((att, j) => (
                                        <span
                                          key={j}
                                          className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[9px] text-white/60"
                                          title={att}
                                        >
                                          {att
                                            .split(" ")
                                            .map((w) => w[0])
                                            .join("")
                                            .toUpperCase()
                                            .slice(0, 2)}
                                        </span>
                                      ))}
                                    {ev.attendees.length > 4 && (
                                      <span className="text-[10px] text-white/30">
                                        +{ev.attendees.length - 4}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span
                                className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                                style={{
                                  backgroundColor: `${config.color}20`,
                                  color: config.color,
                                }}
                              >
                                <span>{config.icon}</span>
                                {config.label}
                              </span>
                              <div className="flex gap-1 opacity-0 transition group-hover:opacity-100">
                                <button
                                  onClick={() => handleEdit(ev)}
                                  className="rounded-lg border border-white/10 px-2.5 py-1 text-xs text-white/60 transition hover:text-white"
                                >
                                  Upravit
                                </button>
                                <button
                                  onClick={() => handleDelete(ev.id)}
                                  className="rounded-lg border border-red-500/20 px-2.5 py-1 text-xs text-red-400 transition hover:bg-red-500/10"
                                >
                                  Vymazat
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
