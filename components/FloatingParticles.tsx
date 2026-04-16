"use client";

export function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Slow floating orbs */}
      <div className="absolute -left-32 top-[20%] h-[500px] w-[500px] animate-float-slow rounded-full bg-[#A78BFA]/[0.04] blur-[120px]" />
      <div className="absolute -right-32 top-[40%] h-[400px] w-[400px] animate-float-slow rounded-full bg-[#F472B6]/[0.04] blur-[120px]" style={{ animationDelay: "-7s" }} />
      <div className="absolute left-[30%] top-[60%] h-[350px] w-[350px] animate-float-slow rounded-full bg-[#6EE7B7]/[0.03] blur-[120px]" style={{ animationDelay: "-12s" }} />
      <div className="absolute right-[20%] top-[80%] h-[300px] w-[300px] animate-float-slow rounded-full bg-[#FCD34D]/[0.02] blur-[100px]" style={{ animationDelay: "-4s" }} />

      {/* Tiny floating dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float rounded-full"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            left: `${5 + (i * 8)}%`,
            top: `${10 + (i * 7) % 80}%`,
            backgroundColor: ["#A78BFA", "#F472B6", "#6EE7B7", "#FCD34D"][i % 4],
            opacity: 0.15 + Math.random() * 0.15,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${-Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Subtle light streaks */}
      <div className="absolute left-0 top-[30%] h-px w-[200px] animate-pulse-glow bg-gradient-to-r from-transparent via-[#A78BFA]/20 to-transparent" style={{ animationDuration: "6s" }} />
      <div className="absolute right-0 top-[50%] h-px w-[300px] animate-pulse-glow bg-gradient-to-l from-transparent via-[#F472B6]/15 to-transparent" style={{ animationDuration: "8s", animationDelay: "-3s" }} />
      <div className="absolute left-[20%] top-[70%] h-px w-[250px] animate-pulse-glow bg-gradient-to-r from-transparent via-[#6EE7B7]/10 to-transparent" style={{ animationDuration: "7s", animationDelay: "-5s" }} />
    </div>
  );
}
