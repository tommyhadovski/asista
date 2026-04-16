import { Sidebar } from "@/components/app/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0A0A14]">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="min-h-screen p-8">{children}</div>
      </main>
    </div>
  );
}
