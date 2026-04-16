"use client";

import { useState, useEffect } from "react";

const VAPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "9c588db4-542c-4702-8391-5f4a0565f2c6";
const ASSISTANT_ID = "02191cd4-ec49-41b2-aadb-992918aa0557";

export function VapiButton() {
  const [isActive, setIsActive] = useState(false);
  const [vapi, setVapi] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "connecting" | "connected" | "ended">("idle");

  useEffect(() => {
    if (!VAPI_PUBLIC_KEY) return;
    import("@vapi-ai/web").then((mod) => {
      const instance = new mod.default(VAPI_PUBLIC_KEY);
      instance.on("call-start", () => { setStatus("connected"); setIsActive(true); });
      instance.on("call-end", () => { setStatus("ended"); setIsActive(false); setTimeout(() => setStatus("idle"), 2000); });
      setVapi(instance);
    });
  }, []);

  const handleClick = () => {
    if (!vapi) return;
    if (isActive) {
      vapi.stop();
      setIsActive(false);
      setStatus("idle");
    } else {
      setStatus("connecting");
      vapi.start(ASSISTANT_ID);
    }
  };

  if (!VAPI_PUBLIC_KEY) return null;

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-6 py-4 text-sm font-semibold shadow-2xl transition-all duration-300 ${
        isActive
          ? "bg-[#F472B6] text-white shadow-[#F472B6]/30 hover:bg-[#e05aa0]"
          : status === "connecting"
          ? "bg-[#FCD34D] text-[#0A0A14] animate-pulse"
          : "bg-gradient-to-r from-[#A78BFA] to-[#F472B6] text-white shadow-[#A78BFA]/30 hover:shadow-[#A78BFA]/50 hover:scale-105"
      }`}
    >
      {isActive ? (
        <>
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
          </span>
          Ukončiť hovor
        </>
      ) : status === "connecting" ? (
        <>
          <span className="h-3 w-3 animate-spin rounded-full border-2 border-[#0A0A14] border-t-transparent" />
          Pripájam...
        </>
      ) : status === "ended" ? (
        <>Hovor ukončený</>
      ) : (
        <>
          <span>📞</span>
          Vyskúšajte AiAsistu naživo
        </>
      )}
    </button>
  );
}
