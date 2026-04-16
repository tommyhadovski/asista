import { NextRequest, NextResponse } from "next/server";

interface VapiEvent {
  type: string;
  call?: {
    id: string;
    status: string;
    startedAt: string;
    endedAt?: string;
    customer?: { number: string };
  };
  transcript?: string;
}

export async function POST(req: NextRequest) {
  try {
    const event: VapiEvent = await req.json();

    switch (event.type) {
      case "call.started":
        console.log(`[Vapi] Call started: ${event.call?.id} from ${event.call?.customer?.number}`);
        break;

      case "call.ended":
        console.log(`[Vapi] Call ended: ${event.call?.id}`);
        // TODO: save to Supabase
        break;

      case "transcript.complete":
        console.log(`[Vapi] Transcript: ${event.transcript?.slice(0, 100)}...`);
        // TODO: save transcript to Supabase
        break;

      default:
        console.log(`[Vapi] Event: ${event.type}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Vapi] Webhook error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
