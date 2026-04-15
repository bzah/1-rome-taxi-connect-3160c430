import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { hreflangLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/taxi-ciampino")({
  component: CiampinoPage,
  head: () => ({
    links: hreflangLinks("/taxi-ciampino"),
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
        ctaText="Prenota Transfer Ciampino"
        ctaHref="https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/?partner_id=0IQTGX8&utm_medium=online_publisher"
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">Taxi Ciampino — Roma Centro</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          L'aeroporto di Roma Ciampino (G.B. Pastine) è il secondo scalo della Capitale, utilizzato principalmente da compagnie low-cost come Ryanair e Wizz Air. Il taxi è il modo più rapido per raggiungere il centro di Roma con una <strong>tariffa fissa di €31</strong>.
        </p>

        {/* Key info cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">💶</div>
            <h3 className="font-display text-lg font-semibold">Tariffa Fissa €31</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              La tariffa fissa di €31 è valida per destinazioni dentro le <strong>Mura Aureliane</strong> (centro storico). Include fino a 4 passeggeri e bagagli. Comunica al tassista di voler usufruire della tariffa fissa.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="font-display text-lg font-semibold">Durata: 20-40 min</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Il tragitto Ciampino — centro Roma è più breve rispetto a Fiumicino: circa 20-30 minuti senza traffico, fino a 40 minuti nelle ore di punta.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">🚕</div>
            <h3 className="font-display text-lg font-semibold">Dove Trovare i Taxi</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              All'uscita degli <strong>Arrivi</strong>, segui i cartelli "Taxi". La postazione taxi ufficiale è subito fuori dal terminal. Utilizza solo taxi bianchi con licenza.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="font-display text-lg font-semibold">Pagamento</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Contanti e carte di credito/debito accettate. I taxi romani sono obbligati per legge ad avere il POS funzionante.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-8">Ciampino vs Fiumicino — Confronto</h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="gold-gradient text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Caratteristica</th>
                <th className="px-6 py-4 text-center font-semibold">Ciampino</th>
                <th className="px-6 py-4 text-center font-semibold">Fiumicino</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Tariffa fissa centro Roma", "€31", "€50"],
                ["Distanza dal centro", "~15 km", "~30 km"],
                ["Tempo medio (taxi)", "20-40 min", "30-50 min"],
                ["Compagnie principali", "Ryanair, Wizz Air", "Alitalia, tutte le major"],
                ["Dimensione aeroporto", "Piccolo, 1 terminal", "Grande, 4 terminal"],
              ].map(([label, ciampino, fiumicino]) => (
                <tr key={label} className="hover:bg-accent/30 transition-colors">
                  <td className="px-6 py-3.5 font-medium">{label}</td>
                  <td className="px-6 py-3.5 text-center">{ciampino}</td>
                  <td className="px-6 py-3.5 text-center">{fiumicino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Transfer options */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">Alternative al Taxi da Ciampino</h2>
        <p className="text-muted-foreground mb-8">Prenota online un transfer privato o navetta condivisa per un'esperienza senza stress.</p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🚗" title="Transfer Privato Ciampino — Roma" description="Autista privato con cartello al tuo nome. Veicolo moderno, A/C, prezzo fisso garantito." gygUrl="https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/" price="€35" />
          <ActivityCard emoji="🚐" title="Navetta Bus Ciampino — Termini" description="Bus navetta economico dall'aeroporto di Ciampino alla stazione Termini." gygUrl="https://www.getyourguide.com/rome-l33/ciampino-airport-bus-transfer-t456/" price="€5" />
          <ActivityCard emoji="👨‍👩‍👧‍👦" title="Transfer Famiglia (Minivan)" description="Minivan per famiglie con bambini. Seggiolini disponibili su richiesta." gygUrl="https://www.getyourguide.com/rome-l33/rome-private-transfer-from-to-fiumicino-airport-t676074/" price="€55" />
          <ActivityCard emoji="🏛️" title="Tour Colosseo — Salta la Fila" description="Visita guidata del Colosseo, Foro Romano e Palatino. Accesso prioritario." gygUrl="https://www.getyourguide.com/rome-l33/skip-the-line-colosseum-roman-forum-palatine-hill-t67792/" price="€35" />
          <ActivityCard emoji="⛪" title="Musei Vaticani e Sistina" description="Accesso prioritario ai Musei Vaticani e alla Cappella Sistina. Guida esperta." gygUrl="https://www.getyourguide.com/rome-l33/vatican-museums-sistine-chapel-skip-the-line-ticket-t44089/" price="€30" />
          <ActivityCard emoji="🌅" title="Tour Roma di Notte" description="Ammira i monumenti illuminati di Roma in un tour serale indimenticabile." gygUrl="https://www.getyourguide.com/rome-l33/rome-by-night-walking-tour-t392/" price="€25" />
        </div>

        {/* FAQ Section */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-8">Domande Frequenti — Taxi Ciampino Roma</h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            { q: "Quanto costa un taxi da Ciampino a Roma centro?", a: "La tariffa fissa è €31 per destinazioni dentro le Mura Aureliane (centro storico). Vale per max 4 passeggeri con bagagli inclusi, senza supplementi notturni." },
            { q: "Quanto tempo ci vuole da Ciampino a Roma in taxi?", a: "Il tragitto dura circa 20-30 minuti senza traffico, fino a 40 minuti nelle ore di punta. Ciampino è più vicino al centro rispetto a Fiumicino." },
            { q: "Dove trovo i taxi all'aeroporto di Ciampino?", a: "All'uscita degli Arrivi, segui i cartelli 'Taxi'. La postazione ufficiale è subito fuori dal terminal. Usa solo taxi bianchi con licenza esposta." },
            { q: "Ciampino o Fiumicino: quale taxi costa meno?", a: "Ciampino costa €31 (tariffa fissa) vs €50 di Fiumicino. Ciampino è anche più vicino (15 km vs 30 km) e il viaggio è più breve (20-40 min vs 30-50 min)." },
            { q: "C'è il Leonardo Express da Ciampino?", a: "No, il Leonardo Express collega solo Fiumicino a Termini. Da Ciampino puoi prendere il bus navetta SIT/Terravision (€5-7) per Termini, o il taxi/transfer privato." },
            { q: "Come prenotare un taxi da Ciampino in anticipo?", a: "Puoi prenotare un transfer privato online (da €35 con cancellazione gratuita), chiamare una radio taxi (06.3570) il giorno prima, o usare l'app itTaxi." },
          ].map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-border bg-card p-4 sm:p-6">
              <summary className="cursor-pointer font-display text-base sm:text-lg font-semibold text-card-foreground list-none flex items-center justify-between gap-3">
                <span>{faq.q}</span>
                <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">💡 Consigli per il Taxi da Ciampino</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• Chiedi sempre la <strong>tariffa fissa di €31</strong> prima di partire se la tua destinazione è nel centro storico</li>
            <li>• I taxi <strong>bianchi ufficiali</strong> hanno il numero di licenza esposto sul veicolo — non accettare passaggi da abusivi</li>
            <li>• Se la tua destinazione è <strong>fuori le Mura Aureliane</strong> (es. EUR, Trastevere oltre le mura), si applica il tassametro</li>
            <li>• Per <strong>voli in partenza</strong> da Ciampino, prenota il taxi il giorno prima tramite radio taxi o app</li>
            <li>• Il <strong>Leonardo Express</strong> non collega Ciampino — quello è solo per Fiumicino. Da Ciampino puoi prendere il bus SIT o Terravision</li>
          </ul>
        </div>

        {/* Cross links */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <Link to="/fiumicino" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            ✈️ Taxi Fiumicino
          </Link>
          <Link to="/tariffe" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            💰 Tariffe Taxi Roma
          </Link>
          <Link to="/numeri" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            📞 Numeri Taxi
          </Link>
        </div>

        <div className="mt-12 text-center">
          <GetYourGuideCTA text="Tutti i Transfer da Ciampino" url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>
      </section>
    </>
  );
}
