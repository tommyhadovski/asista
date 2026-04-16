const faqs = [
  { q: "How does AiAsista work?", a: "AiAsista is an AI assistant that answers calls, schedules appointments, sends reminders and manages your back-office. We connect to your phone via call forwarding — you don't install anything." },
  { q: "Does it speak Slovak?", a: "Yes! AiAsista speaks fluent Slovak. It also supports English, German and other languages depending on your plan." },
  { q: "How long does setup take?", a: "Typically 24 hours. We go through a short questionnaire about your business, set up call forwarding, and AiAsista is ready to work." },
  { q: "What if the AI makes a mistake?", a: "AiAsista is designed to be safe — when it's not sure, it takes a message and passes it to you. You can review all calls and transcripts in the dashboard." },
  { q: "Can I try it for free?", a: "Yes, all plans include a 14-day free trial. No credit card required. If it doesn't convince you, we part ways as friends." },
  { q: "Is my data safe?", a: "Absolutely. We're GDPR compliant, data is stored in EU data centers, and we use encryption for all communications." },
  { q: "Can I keep my phone number?", a: "Yes! We just set up call forwarding — when you don't answer, AiAsista picks up. Your number stays the same." },
  { q: "What do I need to get started?", a: "Just your phone number and 15 minutes for the questionnaire. We handle everything else." },
];

export function FAQEN() {
  return (
    <section id="faq" className="relative overflow-hidden py-32 noise">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/60">
            FAQ
          </div>
          <h2 className="mt-6 text-4xl font-medium md:text-6xl">
            Frequently asked <br />
            <span className="font-serif italic gradient-text">questions.</span>
          </h2>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="glass group rounded-2xl">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-medium transition hover:text-[#A78BFA]">
                {f.q}
                <span className="ml-4 text-white/30 transition group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
