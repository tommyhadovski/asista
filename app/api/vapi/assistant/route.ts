import { NextRequest, NextResponse } from "next/server";
import { createAssistant } from "@/lib/vapi";
import { buildSystemPrompt, DEFAULT_FIRST_MESSAGE, DEFAULT_VOICE_CONFIG } from "@/lib/vapi-config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const systemPrompt = buildSystemPrompt({
      name: body.companyName || "Demo Firma",
      description: body.description || "Slovenská firma",
      openingHours: body.openingHours || "Po-Pi 8:00-17:00",
      services: body.services || "Základné služby",
      faq: body.faq || "",
    });

    const assistant = await createAssistant({
      name: `AiAsista - ${body.companyName || "Demo"}`,
      systemPrompt,
      firstMessage: body.firstMessage || DEFAULT_FIRST_MESSAGE,
      voiceId: DEFAULT_VOICE_CONFIG.voiceId,
    });

    return NextResponse.json(assistant);
  } catch (error) {
    console.error("[Vapi] Create assistant error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
