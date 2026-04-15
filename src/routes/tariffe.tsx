import { createFileRoute, Link } from "@tanstack/react-router";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { HeroSection } from "@/components/HeroSection";
import taxiRomaImg from "@/assets/taxi-roma.jpg";

export const Route = createFileRoute("/tariffe")({
  component: TariffePage,
  head: () => ({
    meta: [
      { title: "Tariffe Taxi Roma 2026 — Prezzi Ufficiali e Tariffe Fisse | TaxiFiumicino.com" },
      { name: "description", content: "Tariffe ufficiali taxi Roma 2026: tariffa base €3, costo al km (€1.10 diurno/€1.30 notturno), supplementi bagagli e festivi, tariffe fisse aeroporto Fiumicino €50 e Ciampino €31. Guida completa ai prezzi con tabella comparativa." },
      { property: "og:title", content: "Tariffe Taxi Roma 2026 — Prezzi Ufficiali, Supplementi e Tariffe Fisse" },
      { property: "og:description", content: "Tariffe taxi Roma aggiornate 2026: tariffa base, costo al km, supplementi, tariffe fisse Fiumicino €50 e Ciampino €31." },
      { name: "keywords", content: "tariffe taxi roma, taxi roma prezzo, costo taxi roma, tariffa fissa taxi roma fiumicino, roma fiumicino taxi tariffa, quanto costa taxi roma, supplemento taxi roma, tariffa notturna taxi roma, prezzo taxi roma aeroporto, costo taxi roma centro" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Tariffe Taxi Roma 2026",
          "description": "Tariffe ufficiali taxi Roma: tariffa base, costo al km, supplementi e tariffe fisse aeroporto.",
          "url": "https://taxifiumicino.com/tariffe",
          "mainEntity": {
            "@type": "PriceSpecification",
            "priceCurrency": "EUR",
            "description": "Tariffa fissa taxi Fiumicino — Centro Roma",
            "price": "50"
          }
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Quanto costa un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa base diurna è €3,00 (€6,50 di notte). Il costo al km varia da €1,10 (urbana) a €1,60 (notturna). La tariffa minima per corsa è €7,00. Una corsa media in centro costa €8-15." } },
            { "@type": "Question", "name": "Qual è la tariffa fissa taxi Fiumicino — Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa fissa per un taxi dall'aeroporto di Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50, valida per max 4 passeggeri con bagagli inclusi." } },
            { "@type": "Question", "name": "Quanto costa il taxi da Ciampino a Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa fissa dal aeroporto di Ciampino al centro di Roma è di €31, valida per destinazioni dentro le Mura Aureliane, max 4 passeggeri con bagagli." } },
            { "@type": "Question", "name": "Ci sono supplementi per bagagli sul taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, c'è un supplemento di €1,00 per ogni bagaglio di dimensioni superiori a 35×25×50 cm. Per il 5° e 6° passeggero il supplemento è di €1,00 ciascuno." } },
            { "@type": "Question", "name": "Quali sono le tariffe notturne del taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "La presa in carico notturna (22:00-06:00) è €6,50 e il costo al km è €1,60 (Tariffa 3). La tariffa festiva ha una presa in carico di €4,50." } },
            { "@type": "Question", "name": "I taxi a Roma accettano carte di credito?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, per legge tutti i taxi a Roma sono obbligati ad avere il POS funzionante e ad accettare pagamenti con carte di credito e debito, oltre ai contanti." } },
            { "@type": "Question", "name": "La tariffa fissa vale anche di notte?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, le tariffe fisse aeroportuali (€50 Fiumicino, €31 Ciampino) sono valide 24 ore su 24, senza supplemento notturno. Si applicano sempre indipendentemente dall'orario." } }
          ]
        }),
      },
    ],
  }),
});

function TariffePage() {
  return (
    <>
      <HeroSection
        title="Tariffe Taxi Roma"
        subtitle="Prezzi Ufficiali 2026"
        description="Tutte le tariffe dei taxi a Roma regolamentate dal Comune: costi al km, supplementi, e tariffe fisse per aeroporti e stazioni."
        image={taxiRomaImg}
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Tariffe Base<br className="hidden sm:block" /> Taxi Roma</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Prezzi regolamentati dal Comune di Roma, aggiornati al 2026.
          </p>
        </div>

        <div className="overflow-hidden rounded-sm border border-stone-warm">
          <table className="w-full text-sm">
            <thead className="bg-espresso text-linen">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-xs uppercase tracking-widest">Voce</th>
                <th className="px-6 py-4 text-right font-semibold text-xs uppercase tracking-widest">Tariffa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-warm">
              {[
                ["Tariffa minima corsa", "€7,00"],
                ["Presa in carico (diurna, giorni feriali)", "€3,00"],
                ["Presa in carico (festivi)", "€4,50"],
                ["Presa in carico (notturna, 22-06)", "€6,50"],
                ["Costo al km (Tariffa 1 — urbana)", "€1,10/km"],
                ["Costo al km (Tariffa 2)", "€1,30/km"],
                ["Costo al km (Tariffa 3 — notturna)", "€1,60/km"],
                ["Supplemento bagaglio (>35×25×50cm)", "€1,00"],
                ["Supplemento 5° e 6° passeggero", "€1,00 cad."],
                ["Chiamata radio taxi", "Scatto tassametro"],
              ].map(([voce, tariffa]) => (
                <tr key={voce} className="hover:bg-accent/40 transition-colors">
                  <td className="px-6 py-3.5">{voce}</td>
                  <td className="px-6 py-3.5 text-right font-semibold text-primary">{tariffa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fixed rates */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-20 mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Tariffe Fisse</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Max 4 passeggeri con bagagli, valide per il centro storico (dentro le Mura Aureliane).
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { route: "Fiumicino ↔ Centro Roma", price: "€50", note: "Dentro le Mura Aureliane" },
            { route: "Ciampino ↔ Centro Roma", price: "€31", note: "Dentro le Mura Aureliane" },
            { route: "Fiumicino ↔ Ciampino", price: "€50", note: "Tra i due aeroporti" },
            { route: "Termini ↔ Fiumicino", price: "€50", note: "Stazione ↔ Aeroporto" },
          ].map((item) => (
            <div key={item.route} className="rounded-sm border border-stone-warm bg-card p-7 text-center hover:border-primary/30 transition-colors duration-500">
              <div className="text-4xl font-bold text-primary font-display">{item.price}</div>
              <div className="mt-3 font-semibold text-lg font-display">{item.route}</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{item.note}</div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-16 rounded-sm border border-stone-warm bg-card p-8">
          <h3 className="font-display text-xl font-semibold mb-5">Consigli sulle Tariffe</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><span className="text-primary font-display text-xs mt-0.5">01.</span> Chiedi sempre di accendere il <strong>tassametro</strong> all'inizio della corsa</li>
            <li className="flex gap-3"><span className="text-primary font-display text-xs mt-0.5">02.</span> Per tratte con <strong>tariffa fissa</strong> (aeroporti), comunicalo al tassista prima di partire</li>
            <li className="flex gap-3"><span className="text-primary font-display text-xs mt-0.5">03.</span> I taxi bianchi ufficiali hanno il <strong>numero di licenza</strong> esposto e accettano pagamenti con carta</li>
            <li className="flex gap-3"><span className="text-primary font-display text-xs mt-0.5">04.</span> In caso di problemi, annota il numero di licenza e contatta il <strong>Comune di Roma</strong></li>
          </ul>
        </div>

        {/* FAQ */}
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-20 mb-10">Domande Frequenti</h2>
        <div className="flex flex-col border-t border-stone-warm">
          {[
            { q: "Quanto costa un taxi a Roma?", a: "La tariffa base diurna è €3,00 (€6,50 di notte). Il costo al km varia da €1,10 (urbana) a €1,60 (notturna). La tariffa minima per corsa è €7,00. Una corsa media in centro costa €8-15." },
            { q: "Qual è la tariffa fissa taxi Fiumicino — Roma centro?", a: "La tariffa fissa per un taxi dall'aeroporto di Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50, valida per max 4 passeggeri con bagagli inclusi." },
            { q: "Quanto costa il taxi da Ciampino a Roma centro?", a: "La tariffa fissa dall'aeroporto di Ciampino al centro di Roma è di €31, valida per destinazioni dentro le Mura Aureliane, max 4 passeggeri con bagagli." },
            { q: "Ci sono supplementi per bagagli sul taxi a Roma?", a: "Sì, c'è un supplemento di €1,00 per ogni bagaglio di dimensioni superiori a 35×25×50 cm. Per il 5° e 6° passeggero il supplemento è di €1,00 ciascuno." },
            { q: "Quali sono le tariffe notturne del taxi a Roma?", a: "La presa in carico notturna (22:00-06:00) è €6,50 e il costo al km è €1,60 (Tariffa 3). La tariffa festiva ha una presa in carico di €4,50." },
            { q: "I taxi a Roma accettano carte di credito?", a: "Sì, per legge tutti i taxi a Roma sono obbligati ad avere il POS funzionante e ad accettare pagamenti con carte di credito e debito, oltre ai contanti." },
            { q: "La tariffa fissa vale anche di notte?", a: "Sì, le tariffe fisse aeroportuali (€50 Fiumicino, €31 Ciampino) sono valide 24 ore su 24, senza supplemento notturno. Si applicano sempre indipendentemente dall'orario." },
          ].map((faq, i) => (
            <details key={faq.q} className="group border-b border-stone-warm py-6 sm:py-8">
              <summary className="cursor-pointer list-none flex items-start gap-4 sm:gap-6">
                <span className="text-xs font-medium text-primary/60 mt-1.5 tabular-nums tracking-widest">{String(i + 1).padStart(2, '0')}.</span>
                <span className="font-display text-lg sm:text-xl font-semibold text-foreground flex-1 group-hover:text-primary transition-colors">{faq.q}</span>
                <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-4 ml-8 sm:ml-12 text-sm text-muted-foreground leading-relaxed max-w-[60ch]">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* Affiliate Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-20 mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Risparmia con un<br className="hidden sm:block" /> Transfer a Prezzo Fisso</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Prenota online e conosci il prezzo in anticipo. Cancellazione gratuita.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🚗" title="Transfer Privato Fiumicino" description="Dall'aeroporto Fiumicino al tuo hotel. Prezzo fisso garantito, niente tassametro." gygUrl="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/" price="€45" />
          <ActivityCard emoji="🚐" title="Navetta Fiumicino — Termini" description="Bus navetta economico dall'aeroporto alla stazione Termini. WiFi e A/C a bordo." gygUrl="https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/" price="€7" />
          <ActivityCard emoji="🚕" title="Transfer Ciampino — Roma" description="Transfer privato dall'aeroporto di Ciampino al centro. Perfetto per Ryanair." gygUrl="https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/" price="€35" />
          <ActivityCard emoji="👨‍👩‍👧‍👦" title="Transfer Famiglia (Minivan)" description="Minivan per famiglie con seggiolini auto. Dall'aeroporto al tuo alloggio." gygUrl="https://www.getyourguide.com/rome-l33/rome-private-transfer-from-to-fiumicino-airport-t676074/" price="€55" />
          <ActivityCard emoji="🏛️" title="Tour Colosseo — Salta la Fila" description="Visita guidata del Colosseo, Foro Romano e Palatino con accesso prioritario." gygUrl="https://www.getyourguide.com/rome-l33/skip-the-line-colosseum-roman-forum-palatine-hill-t67792/" price="€35" />
          <ActivityCard emoji="⛪" title="Musei Vaticani e Cappella Sistina" description="Accesso prioritario ai Musei Vaticani. Guida esperta, senza code." gygUrl="https://www.getyourguide.com/rome-l33/vatican-museums-sistine-chapel-skip-the-line-ticket-t44089/" price="€30" />
        </div>

        <div className="mt-14 text-center">
          <GetYourGuideCTA text="Vedi Tutti i Transfer e Tour a Roma" url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>
      </section>
    </>
  );
}
