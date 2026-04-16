const faqs = [
  {
    q: "Toto je naozaj všetko v jednom?",
    a: "Áno. AiAsista nahradí hneď niekoľko nástrojov – recepciu, rezervačný systém, CRM, základnú účtovnú analytiku a asistenta pre stretnutia. Všetko v jednom účte, jeden login, jedna cena.",
  },
  {
    q: "Bude AI hlas znieť ako robot?",
    a: "Nie. AiAsista používa najnovšie AI hlasy, ktoré sú nerozoznateľné od ľudského. Väčšina zákazníkov si neuvedomí, že hovorila s AI.",
  },
  {
    q: "Ako dlho trvá nasadenie?",
    a: "Základný setup do 24 hodín. Komplexné integrácie (Pohoda, vlastné CRM, custom workflows) do 72 hodín. Vedieme vás celým procesom my.",
  },
  {
    q: "Potrebujem meniť svoje existujúce systémy?",
    a: "Nie. AiAsista sa pripojí na vaše nástroje – Google Calendar, Outlook, Pohoda, HubSpot, Booksy. Neinštalujete nič, nemeníte nič.",
  },
  {
    q: "Ako sa AiAsista naučí môj biznis?",
    a: "Pri setupe vás prejdeme dotazníkom (otváracia doba, služby, ceny, FAQ). AiAsista ich pochopí za minúty. Neskôr sa ďalej učí zo svojich hovorov.",
  },
  {
    q: "Čo môj tím – môžu AiAsistu používať tiež?",
    a: "Áno. V pláne Business a Enterprise dostávate multi-user prístup. Každý člen tímu má vlastný login, práva a notifikácie.",
  },
  {
    q: "Je to GDPR compliant?",
    a: "Áno. Všetky dáta sú uložené v EU (Frankfurt, Nemecko). AiAsista je navrhnutá podľa GDPR od prvého dňa. Zákazník môže požiadať o výmaz kedykoľvek.",
  },
  {
    q: "Čo ak chcem zrušiť?",
    a: "Kedykoľvek. Žiadne skryté poplatky, žiadne záväzky. Exportujete si dáta a vypnete AiAsistu jedným klikom.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            FAQ
          </div>
          <h2 className="mt-6 text-4xl font-medium md:text-6xl">
            Odpovede, ktoré <span className="font-serif italic gradient-text">potrebujete.</span>
          </h2>
        </div>

        <div className="mt-16 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="glass group rounded-2xl p-6 transition">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium">
                {f.q}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xl text-[#A78BFA] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-5 leading-relaxed text-white/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
