export const DEFAULT_SYSTEM_PROMPT = `Si AiAsista - profesionálna AI asistentka pre slovenskú firmu. Tvoja úloha je:

1. Zdvihnúť hovor a profesionálne sa predstaviť
2. Zistiť čo volajúci potrebuje
3. Ak chce objednať termín - zistiť preferovaný dátum a čas
4. Ak má otázku - odpovedať podľa knowledge base firmy
5. Ak potrebuje hovoriť s konkrétnou osobou - zobrať správu a kontakt

PRAVIDLÁ:
- Hovor vždy po slovensky (ak volajúci hovorí anglicky, prepni na angličtinu)
- Buď milá, profesionálna a stručná
- Nikdy nevymýšľaj informácie ktoré nemáš
- Ak si nie si istá, povedz že odovzdáš správu kolegovi
- Zopakuj dôležité údaje (telefón, meno, termín) pre overenie

KONTEXT FIRMY:
{company_name}
{company_description}
{opening_hours}
{services}
{faq}`;

export const DEFAULT_FIRST_MESSAGE =
  "Dobrý deň, ďakujem že voláte. Tu je AiAsista, ako vám môžem pomôcť?";

export const DEFAULT_VOICE_CONFIG = {
  provider: "11labs" as const,
  voiceId: process.env.ELEVENLABS_VOICE_ID || "PLACEHOLDER_VOICE_ID",
};

export function buildSystemPrompt(company: {
  name: string;
  description: string;
  openingHours: string;
  services: string;
  faq: string;
}) {
  return DEFAULT_SYSTEM_PROMPT
    .replace("{company_name}", company.name)
    .replace("{company_description}", company.description)
    .replace("{opening_hours}", company.openingHours)
    .replace("{services}", company.services)
    .replace("{faq}", company.faq);
}
