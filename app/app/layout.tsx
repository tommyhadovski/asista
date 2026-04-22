"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Sidebar } from "@/components/app/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const isLoginPage = pathname === "/app";

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session && !isLoginPage) {
        router.push("/app");
      } else {
        setChecked(true);
      }
    });
  }, [isLoginPage, router]);

  // Login page - no sidebar, no auth check needed
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-[#0A0A14]">
        <div className="min-h-screen p-8">{children}</div>
      </div>
    );
  }

  // Wait for auth check before rendering protected pages
  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0A14]">
        <div className="flex items-center gap-3 text-white/50 text-sm">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A78BFA] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#A78BFA]" />
          </span>
          Načítavam...
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#0A0A14]">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="min-h-screen p-8">{children}</div>
      </main>
    </div>
  );
}
