const faqs = [
  {
    q: "Toto je naozaj všetko v jednom?",
    a: "Áno. AiAsista nahradí hneď niekoľko nástrojov - faktúry, CRM, kalendár, úlohy, reporting a AI asistenta. Všetko v jednom účte, jeden login, jedna cena.",
  },
  {
    q: "Ako dlho trvá registrácia?",
    a: "2 minúty. Vytvoríte si účet, pridáte firmu a môžete začať. Žiadna inštalácia, žiadne čakanie.",
  },
  {
    q: "Potrebujem meniť svoje existujúce systémy?",
    a: "Nie. AiAsista funguje samostatne. Ak chcete, môžete ju prepojiť na Google Calendar, Outlook alebo Pohodu - ale nie je to nutné.",
  },
  {
    q: "Ako sa AI naučí môj biznis?",
    a: "Stačí zadať základné údaje o firme a začať používať appku. Čím viac dát pridáte (faktúry, kontakty, úlohy), tým lepšie AI odpovedá na vaše otázky.",
  },
  {
    q: "Nahradí AiAsista moju účtovníčku?",
    a: "Nie a ani nechce. Účtovníčka robí dane, DPH a mzdy. AiAsista robí všetko okolo - faktúry, upomienky, CRM, úlohy a reporting. Ideálne fungujú spolu.",
  },
  {
    q: "Čo môj tím - môžu AiAsistu používať tiež?",
    a: "Áno. V pláne Business a Pro dostávate multi-user prístup. Každý člen tímu má vlastný login a práva.",
  },
  {
    q: "Je to GDPR compliant?",
    a: "Áno. Všetky dáta sú uložené v EU (Frankfurt, Nemecko). AiAsista je navrhnutá podľa GDPR od prvého dňa.",
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
