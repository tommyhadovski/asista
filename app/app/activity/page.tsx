"use client";

import { useEffect, useState } from "react";
import { TopBar } from "@/components/app/TopBar";
import { supabase } from "@/lib/supabase";
import type { ActivityLog } from "@/lib/database.types";

const COMPANY_ID = "11111111-1111-1111-1111-111111111111";

const actionIcons: Record<string, string> = {
  call: "📞",
  email: "📧",
  meeting: "🤝",
  invoice: "💰",
  contact: "👤",
  automation: "🔄",
  system: "💾",
  default: "📋",
};

const actionColors: Record<string, string> = {
  call: "#F472B6",
  email: "#A78BFA",
  meeting: "#6EE7B7",
  invoice: "#FCD34D",
  contact: "#38BDF8",
  automation: "#A78BFA",
  system: "#6EE7B7",
  default: "#A78BFA",
};

function getIconForAction(action: string): string {
  const lower = action.toLowerCase();
  for (const key of Object.keys(actionIcons)) {
    if (lower.includes(key)) return actionIcons[key];
  }
  return actionIcons.default;
}

function getColorForAction(action: string): string {
  const lower = action.toLowerCase();
  for (const key of Object.keys(actionColors)) {
    if (lower.includes(key)) return actionColors[key];
  }
  return actionColors.default;
}

export default function ActivityPage() {
  const [activities, setActivities] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    const { data } = await supabase
      .from("activity_log" as never)
      .select("*")
      .eq("company_id", COMPANY_ID)
      .order("created_at", { ascending: false });
    if (data) setActivities(data as ActivityLog[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const formatTime = (d: string) => {
    const now = new Date();
    const date = new Date(d);
    const diffMs = now.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    const diffH = Math.floor(diffMs / 3600000);
    const diffD = Math.floor(diffMs / 86400000);

    if (diffMin < 1) return "prave teraz";
    if (diffMin < 60) return `pred ${diffMin} min`;
    if (diffH < 24) return `pred ${diffH} h`;
    if (diffD < 7) return `pred ${diffD} d`;
    return date.toLocaleDateString("sk-SK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Group by date
  const grouped: Record<string, ActivityLog[]> = {};
  activities.forEach((a) => {
    const dateKey = new Date(a.created_at).toISOString().split("T")[0];
    if (!grouped[dateKey]) grouped[dateKey] = [];
    grouped[dateKey].push(a);
  });

  const formatDateHeader = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return "Dnes";
    if (date.toDateString() === yesterday.toDateString()) return "Vcera";
    return date.toLocaleDateString("sk-SK", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div>
      <TopBar
        title="Aktivita"
        subtitle="Kompletny audit log vsetkych akcii vo vasej firme"
        action={
          <button
            onClick={() => fetchActivities()}
            className="btn-ghost rounded-full px-4 py-2 text-xs"
          >
            Obnovit
          </button>
        }
      />

      {/* Stats */}
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Celkom aktivit</div>
          <div className="mt-3 font-serif text-3xl text-white">
            {activities.length}
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Dnes</div>
          <div className="mt-3 font-serif text-3xl text-[#6EE7B7]">
            {
              activities.filter(
                (a) =>
                  new Date(a.created_at).toDateString() ===
                  new Date().toDateString()
              ).length
            }
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-white/45">Unikatni akteri</div>
          <div className="mt-3 font-serif text-3xl text-[#A78BFA]">
            {new Set(activities.map((a) => a.actor)).size}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="glass rounded-2xl p-8">
        {loading ? (
          <div className="py-12 text-center text-sm text-white/40">
            Nacitavam aktivity...
          </div>
        ) : activities.length === 0 ? (
          <div className="py-12 text-center text-sm text-white/40">
            Zatial ziadne aktivity.
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([dateKey, dayActivities]) => (
              <div key={dateKey}>
                <div className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">
                  {formatDateHeader(dateKey)}
                </div>
                <div className="relative space-y-4 before:absolute before:bottom-2 before:left-5 before:top-2 before:w-px before:bg-white/10">
                  {dayActivities.map((a) => {
                    const color = getColorForAction(a.action);
                    const icon = getIconForAction(a.action);
                    return (
                      <div key={a.id} className="relative flex gap-6">
                        <div
                          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#0A0A14] text-sm"
                          style={{
                            backgroundColor: `${color}20`,
                            color: color,
                          }}
                        >
                          {icon}
                        </div>
                        <div className="flex-1 pb-2">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-sm text-white">
                                <span className="font-medium">{a.actor}</span>{" "}
                                <span className="text-white/60">
                                  {a.action}
                                </span>
                              </div>
                              {a.details && (
                                <div className="mt-1 text-xs text-white/40">
                                  {a.details}
                                </div>
                              )}
                              <div className="mt-1 text-[11px] text-white/30">
                                {formatTime(a.created_at)}
                              </div>
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
