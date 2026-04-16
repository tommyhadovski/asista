const VAPI_API_URL = "https://api.vapi.ai";

function getApiKey() {
  const key = process.env.VAPI_API_KEY;
  if (!key) throw new Error("VAPI_API_KEY is not set");
  return key;
}

export interface VapiCall {
  id: string;
  status: string;
  startedAt: string;
  endedAt?: string;
  duration?: number;
  transcript?: string;
  recordingUrl?: string;
  phoneNumber?: { number: string };
  customer?: { number: string };
}

export interface VapiAssistant {
  id: string;
  name: string;
  model: { provider: string; model: string };
  voice: { provider: string; voiceId: string };
  firstMessage: string;
}

export async function createAssistant(config: {
  name: string;
  systemPrompt: string;
  firstMessage: string;
  voiceId: string;
}) {
  const res = await fetch(`${VAPI_API_URL}/assistant`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getApiKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: config.name,
      model: {
        provider: "anthropic",
        model: "claude-sonnet-4-20250514",
        systemMessage: config.systemPrompt,
      },
      voice: {
        provider: "11labs",
        voiceId: config.voiceId,
      },
      firstMessage: config.firstMessage,
      transcriber: {
        provider: "deepgram",
        language: "sk",
      },
    }),
  });

  if (!res.ok) throw new Error(`Vapi error: ${res.status} ${await res.text()}`);
  return res.json() as Promise<VapiAssistant>;
}

export async function listCalls(limit = 50) {
  const res = await fetch(`${VAPI_API_URL}/call?limit=${limit}`, {
    headers: { Authorization: `Bearer ${getApiKey()}` },
  });

  if (!res.ok) throw new Error(`Vapi error: ${res.status}`);
  return res.json() as Promise<VapiCall[]>;
}

export async function getCall(callId: string) {
  const res = await fetch(`${VAPI_API_URL}/call/${callId}`, {
    headers: { Authorization: `Bearer ${getApiKey()}` },
  });

  if (!res.ok) throw new Error(`Vapi error: ${res.status}`);
  return res.json() as Promise<VapiCall>;
}
