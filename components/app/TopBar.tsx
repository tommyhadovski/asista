interface TopBarProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function TopBar({ title, subtitle, action }: TopBarProps) {
  return (
    <div className="sticky top-0 z-30 -mx-8 -mt-8 mb-8 border-b border-white/5 bg-[#0A0A14]/80 px-8 py-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-white/50">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3">
          {action}
          <button className="glass rounded-full p-2.5 text-white/60 transition hover:text-white">
            🔔
          </button>
        </div>
      </div>
    </div>
  );
}
