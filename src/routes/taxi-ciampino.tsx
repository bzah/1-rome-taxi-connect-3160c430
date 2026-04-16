import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { i18nLinks } from "@/i18n/hreflang";
import { RomeDiscoverGrid, ROME_TRANSFERS, ROME_TOURS, ROME_FOOD } from "@/components/RomeDiscoverSection";
import { discoverJsonLdScript } from "@/lib/discover-jsonld";
import { GYG_ROME_ALL } from "@/lib/gyg-links";

export const Route = createFileRoute("/taxi-ciampino")({
  component: CiampinoPage,
  head: () => ({
    links: i18nLinks("/taxi-ciampino", "it"),
    meta: [
      { title: "Taxi Roma Ciampino — Transfer Aeroporto, Tariffa Fissa €31 | TaxiFiumicino.com" },
      { name: "description", content: "Taxi dall'aeroporto di Ciampino a Roma centro 2026: tariffa fissa €31, durata 20-40 min, come prenotare, postazione taxi al terminal, bus navetta e transfer privati. Guida completa con prezzi, consigli e alternative economiche." },
      { property: "og:title", content: "Taxi Ciampino Roma — Tariffa Fissa €31, Transfer e Alternative 2026" },
      { property: "og:description", content: "Taxi aeroporto Ciampino-Roma centro a €31 tariffa fissa. Bus, transfer privati e consigli. Guida completa 2026." },
      { name: "keywords", content: "taxi ciampino roma, taxi roma ciampino, transfer ciampino roma, tariffa taxi ciampino, quanto costa taxi ciampino roma, aeroporto ciampino taxi, bus ciampino roma, navetta ciampino termini, transfer privato ciampino, ciampino centro roma" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quanto costa un taxi da Ciampino a Roma centro?",
              "acceptedAnswer": { "@type": "Answer", "text": "La tariffa fissa per un taxi dall'aeroporto di Ciampino al centro di Roma (dentro le Mura Aureliane) è di €31, valida per max 4 passeggeri con bagagli inclusi." }
            },
            {
              "@type": "Question",
              "name": "Quanto tempo ci vuole da Ciampino a Roma?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il tragitto in taxi da Ciampino al centro di Roma dura circa 20-40 minuti a seconda del traffico." }
            },
            {
              "@type": "Question",
              "name": "Dove trovo i taxi all'aeroporto di Ciampino?",
              "acceptedAnswer": { "@type": "Answer", "text": "I taxi ufficiali si trovano all'uscita degli Arrivi dell'aeroporto di Ciampino. Segui i cartelli 'Taxi' verso la postazione ufficiale." }
            }
          ]
        }),
      },
          discoverJsonLdScript([ROME_TRANSFERS, ROME_TOURS, ROME_FOOD]),
    ],
  }),
});

function CiampinoPage() {
  return (
    <>
      <HeroSection
        title="Taxi Roma Ciampino"
        subtitle="Transfer Aeroporto"
        description="Tutto sul trasferimento in taxi dall'aeroporto di Ciampino al centro di Roma. Tariffa fissa €31, durata circa 30 minuti."
        ctaText="Scopri Tour e Attività a Roma"
        ctaHref="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher"
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 sm:px-8">
        {/* Intro */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Taxi Ciampino<br className="hidden sm:block" /> Roma Centro</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Tariffa fissa €31 per il centro di Roma.
          </p>
        </div>

        <div className="text-muted-foreground space-y-5 text-base leading-relaxed mb-16">
          <p>
            L'aeroporto di Roma Ciampino (G.B. Pastine) è il secondo scalo della Capitale, utilizzato principalmente da compagnie low-cost come Ryanair e Wizz Air. Il taxi è il modo più rapido per raggiungere il centro di Roma con una <strong className="text-foreground">tariffa fissa di €31</strong>.
          </p>
        </div>

        {/* Key info cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { icon: "💶", title: "Tariffa Fissa €31", desc: "Valida per destinazioni dentro le Mura Aureliane (centro storico). Include fino a 4 passeggeri e bagagli. Comunica al tassista di voler usufruire della tariffa fissa." },
            { icon: "⏱️", title: "Durata: 20-40 min", desc: "Il tragitto Ciampino — centro Roma è più breve rispetto a Fiumicino: circa 20-30 minuti senza traffico, fino a 40 minuti nelle ore di punta." },
            { icon: "🚕", title: "Dove Trovare i Taxi", desc: "All'uscita degli Arrivi, segui i cartelli \"Taxi\". La postazione taxi ufficiale è subito fuori dal terminal. Utilizza solo taxi bianchi con licenza." },
            { icon: "💳", title: "Pagamento", desc: "Contanti e carte di credito/debito accettate. I taxi romani sono obbligati per legge ad avere il POS funzionante." },
          ].map((item, i) => (
            <div key={item.title} className="rounded-sm border border-stone-warm bg-card p-7 hover:border-primary/30 transition-colors duration-500">
              <div className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <span className="text-xs text-primary/60 font-display tracking-widest">{String(i + 1).padStart(2, '0')}.</span>
                  <h3 className="font-display text-lg font-semibold mt-0.5">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-20 mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Ciampino vs Fiumicino</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Confronto rapido tra i due aeroporti di Roma.
          </p>
        </div>

        <div className="overflow-hidden rounded-sm border border-stone-warm">
          <table className="w-full text-sm">
            <thead className="bg-espresso text-linen">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-xs uppercase tracking-widest">Caratteristica</th>
                <th className="px-6 py-4 text-center font-semibold text-xs uppercase tracking-widest">Ciampino</th>
                <th className="px-6 py-4 text-center font-semibold text-xs uppercase tracking-widest">Fiumicino</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-warm">
              {[
                ["Tariffa fissa centro Roma", "€31", "€50"],
                ["Distanza dal centro", "~15 km", "~30 km"],
                ["Tempo medio (taxi)", "20-40 min", "30-50 min"],
                ["Compagnie principali", "Ryanair, Wizz Air", "Alitalia, tutte le major"],
                ["Dimensione aeroporto", "Piccolo, 1 terminal", "Grande, 4 terminal"],
              ].map(([label, ciampino, fiumicino]) => (
                <tr key={label} className="hover:bg-accent/40 transition-colors">
                  <td className="px-6 py-3.5 font-medium">{label}</td>
                  <td className="px-6 py-3.5 text-center text-primary font-semibold">{ciampino}</td>
                  <td className="px-6 py-3.5 text-center">{fiumicino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Transfer options */}

        {/* FAQ Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-20 mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Domande Frequenti</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Le risposte alle domande più comuni sui taxi da Ciampino.
          </p>
        </div>

        <div className="space-y-3">
          {[
            { q: "Quanto costa un taxi da Ciampino a Roma centro?", a: "La tariffa fissa è €31 per destinazioni dentro le Mura Aureliane (centro storico). Vale per max 4 passeggeri con bagagli inclusi, senza supplementi notturni." },
            { q: "Quanto tempo ci vuole da Ciampino a Roma in taxi?", a: "Il tragitto dura circa 20-30 minuti senza traffico, fino a 40 minuti nelle ore di punta. Ciampino è più vicino al centro rispetto a Fiumicino." },
            { q: "Dove trovo i taxi all'aeroporto di Ciampino?", a: "All'uscita degli Arrivi, segui i cartelli 'Taxi'. La postazione ufficiale è subito fuori dal terminal. Usa solo taxi bianchi con licenza esposta." },
            { q: "Ciampino o Fiumicino: quale taxi costa meno?", a: "Ciampino costa €31 (tariffa fissa) vs €50 di Fiumicino. Ciampino è anche più vicino (15 km vs 30 km) e il viaggio è più breve (20-40 min vs 30-50 min)." },
            { q: "C'è il Leonardo Express da Ciampino?", a: "No, il Leonardo Express collega solo Fiumicino a Termini. Da Ciampino puoi prendere il bus navetta SIT/Terravision (€5-7) per Termini, o il taxi/transfer privato." },
            { q: "Come prenotare un taxi da Ciampino in anticipo?", a: "Puoi prenotare un transfer privato online (da €35 con cancellazione gratuita), chiamare una radio taxi (06.3570) il giorno prima, o usare l'app itTaxi." },
          ].map((faq) => (
            <details key={faq.q} className="group rounded-sm border border-stone-warm bg-card p-5 sm:p-6 hover:border-primary/30 transition-colors duration-500">
              <summary className="cursor-pointer font-display text-base sm:text-lg font-semibold text-foreground list-none flex items-center justify-between gap-3">
                <span>{faq.q}</span>
                <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-16 rounded-sm border border-stone-warm bg-card p-8">
          <h3 className="font-display text-xl font-semibold mb-5">💡 Consigli per il Taxi da Ciampino</h3>
          <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li>• Chiedi sempre la <strong className="text-foreground">tariffa fissa di €31</strong> prima di partire se la tua destinazione è nel centro storico</li>
            <li>• I taxi <strong className="text-foreground">bianchi ufficiali</strong> hanno il numero di licenza esposto sul veicolo — non accettare passaggi da abusivi</li>
            <li>• Se la tua destinazione è <strong className="text-foreground">fuori le Mura Aureliane</strong> (es. EUR, Trastevere oltre le mura), si applica il tassametro</li>
            <li>• Per <strong className="text-foreground">voli in partenza</strong> da Ciampino, prenota il taxi il giorno prima tramite radio taxi o app</li>
            <li>• Il <strong className="text-foreground">Leonardo Express</strong> non collega Ciampino — quello è solo per Fiumicino. Da Ciampino puoi prendere il bus SIT o Terravision</li>
          </ul>
        </div>

        {/* Cross links */}
        <div className="mt-14 flex flex-wrap gap-3 justify-center">
          {[
            { to: "/fiumicino", label: "✈️ Taxi Fiumicino" },
            { to: "/tariffe", label: "💰 Tariffe Taxi Roma" },
            { to: "/numeri", label: "📞 Numeri Taxi" },
          ].map((link) => (
            <Link key={link.to} to={link.to} className="inline-flex items-center gap-2 rounded-sm border border-stone-warm px-4 py-2.5 text-sm font-medium hover:bg-accent/50 hover:border-primary/30 transition-all">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* HCMC-style Discover Section */}
      <RomeDiscoverGrid
        title="Cosa Fare a Roma"
        subtitle="Transfer, tour guidati e esperienze gastronomiche. Prenota online con cancellazione gratuita."
        categories={[ROME_TRANSFERS, ROME_TOURS, ROME_FOOD]}
        ctaUrl={GYG_ROME_ALL}
        ctaText="Vedi Tutte le Esperienze a Roma"
      />
    </>
  );
}
