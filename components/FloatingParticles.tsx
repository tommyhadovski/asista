"use client";

export function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Slow aurora orbs - large, soft, subtle */}
      <div className="absolute -left-40 top-[15%] h-[600px] w-[600px] animate-float-slow rounded-full bg-[#A78BFA]/[0.03] blur-[150px]" />
      <div className="absolute -right-40 top-[45%] h-[500px] w-[500px] animate-float-slow rounded-full bg-[#F472B6]/[0.03] blur-[150px]" style={{ animationDelay: "-7s" }} />
      <div className="absolute left-[20%] top-[70%] h-[400px] w-[400px] animate-float-slow rounded-full bg-[#6EE7B7]/[0.02] blur-[150px]" style={{ animationDelay: "-12s" }} />

      {/* Animated wave lines */}
      <svg className="absolute bottom-0 left-0 w-full opacity-[0.04]" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: "200px" }}>
        <path className="animate-wave-path" fill="none" stroke="#A78BFA" strokeWidth="1.5"
          d="M0,160 C240,100 480,220 720,160 C960,100 1200,220 1440,160" />
        <path className="animate-wave-path-2" fill="none" stroke="#F472B6" strokeWidth="1"
          d="M0,200 C240,140 480,260 720,200 C960,140 1200,260 1440,200" />
        <path className="animate-wave-path-3" fill="none" stroke="#6EE7B7" strokeWidth="0.8"
          d="M0,240 C240,180 480,300 720,240 C960,180 1200,300 1440,240" />
      </svg>

      {/* Top wave */}
      <svg className="absolute top-[30%] left-0 w-full opacity-[0.03]" viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ height: "150px" }}>
        <path className="animate-wave-path" fill="none" stroke="#A78BFA" strokeWidth="1"
          d="M0,100 C360,50 720,150 1080,100 C1260,75 1380,125 1440,100" />
        <path className="animate-wave-path-2" fill="none" stroke="#6EE7B7" strokeWidth="0.8"
          d="M0,120 C360,70 720,170 1080,120 C1260,95 1380,145 1440,120" />
      </svg>
    </div>
  );
}
