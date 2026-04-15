import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";

export const Route = createFileRoute("/parcheggio-fiumicino")({
  component: ParcheggioFiumicinoPage,
  head: () => ({
    meta: [
      { title: "Parcheggio Fiumicino 2026 — Tariffe, Mappa e Confronto Parcheggi | TaxiFiumicino.com" },
      { name: "description", content: "Parcheggio Fiumicino aeroporto: confronto tariffe parcheggi ufficiali, low cost e convenzionati. Prezzi da €5/giorno, mappa terminal e consigli per risparmiare." },
      { property: "og:title", content: "Parcheggio Fiumicino — Guida Completa Tariffe e Parcheggi Aeroporto Roma" },
      { property: "og:description", content: "Trova il parcheggio migliore all'aeroporto di Fiumicino: confronto tariffe, parcheggi ufficiali e low cost, prenotazione online e consigli." },
      { name: "keywords", content: "parcheggio fiumicino, parcheggio aeroporto fiumicino, parcheggio fiumicino aeroporto, parcheggio fiumicino prezzi, parcheggio low cost fiumicino, parcheggio lungo sosta fiumicino, parcheggi fiumicino tariffe, parcheggio fiumicino terminal, parcheggio coperto fiumicino" },
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
              "name": "Quanto costa il parcheggio all'aeroporto di Fiumicino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I prezzi del parcheggio Fiumicino variano: il parcheggio ufficiale Lunga Sosta costa da €8/giorno, il parcheggio Multipiano da €24/giorno, mentre i parcheggi low cost convenzionati partono da €5/giorno con navetta gratuita."
              }
            },
            {
              "@type": "Question",
              "name": "Quale parcheggio è più economico a Fiumicino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I parcheggi più economici sono quelli low cost esterni convenzionati come ParkVia e Looking4Parking, con tariffe da €5/giorno. Il parcheggio ufficiale Lunga Sosta è la soluzione più economica tra i parcheggi ADR."
              }
            },
            {
              "@type": "Question",
              "name": "Come prenotare il parcheggio all'aeroporto di Fiumicino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Puoi prenotare online sul sito ufficiale ADR (adr.it/parcheggi) o tramite comparatori come ParkVia. Prenotando in anticipo risparmi fino al 60% rispetto alla tariffa on-site."
              }
            },
            {
              "@type": "Question",
              "name": "Dove si trovano i parcheggi all'aeroporto di Fiumicino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'aeroporto di Fiumicino ha parcheggi in diverse zone: Multipiano (davanti ai Terminal 1 e 3), Lunga Sosta (con navetta gratuita ogni 10 minuti), e parcheggi esterni low cost raggiungibili con shuttle."
              }
            },
            {
              "@type": "Question",
              "name": "Conviene prendere un taxi o parcheggiare a Fiumicino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Per soggiorni brevi (1-3 giorni), il taxi con tariffa fissa €50 dal centro di Roma è spesso più conveniente. Per soggiorni lunghi (7+ giorni), il parcheggio low cost a €5/giorno può essere più economico."
              }
            }
          ]
        })
      }
    ]
  }),
});

function ParcheggioFiumicinoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                🅿️ Guida Parcheggi 2026
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Parcheggio <span className="text-primary">Fiumicino</span> Aeroporto
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Confronta <strong>tariffe, parcheggi ufficiali e low cost</strong> all'aeroporto di Roma Fiumicino. 
                Trova il parcheggio ideale e risparmia fino al 60% prenotando online.
              </p>
            </div>
          </div>
        </section>

        {/* Tabella comparativa parcheggi */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Confronto Parcheggi Fiumicino — Tariffe 2026
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Tutti i parcheggi disponibili all'aeroporto di Roma Fiumicino con prezzi aggiornati e servizi inclusi.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-4 pr-4 text-left font-display text-sm font-semibold text-foreground">Parcheggio</th>
                    <th className="px-4 py-4 text-left font-display text-sm font-semibold text-foreground">Tipo</th>
                    <th className="px-4 py-4 text-left font-display text-sm font-semibold text-foreground">Prezzo/giorno</th>
                    <th className="px-4 py-4 text-left font-display text-sm font-semibold text-foreground">7 giorni</th>
                    <th className="px-4 py-4 text-left font-display text-sm font-semibold text-foreground">Distanza Terminal</th>
                    <th className="pl-4 py-4 text-left font-display text-sm font-semibold text-foreground">Navetta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Multipiano T1</td>
                    <td className="px-4 py-4 text-muted-foreground">Coperto</td>
                    <td className="px-4 py-4 font-semibold text-primary">€24</td>
                    <td className="px-4 py-4 text-muted-foreground">€168</td>
                    <td className="px-4 py-4 text-muted-foreground">2 min a piedi</td>
                    <td className="pl-4 py-4 text-muted-foreground">—</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Multipiano T3</td>
                    <td className="px-4 py-4 text-muted-foreground">Coperto</td>
                    <td className="px-4 py-4 font-semibold text-primary">€24</td>
                    <td className="px-4 py-4 text-muted-foreground">€168</td>
                    <td className="px-4 py-4 text-muted-foreground">3 min a piedi</td>
                    <td className="pl-4 py-4 text-muted-foreground">—</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Lunga Sosta</td>
                    <td className="px-4 py-4 text-muted-foreground">Scoperto</td>
                    <td className="px-4 py-4 font-semibold text-primary">€8</td>
                    <td className="px-4 py-4 text-muted-foreground">€52</td>
                    <td className="px-4 py-4 text-muted-foreground">10 min navetta</td>
                    <td className="pl-4 py-4 text-green-600">✅ Gratis</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors bg-primary/5">
                    <td className="py-4 pr-4 font-medium text-foreground">Low Cost Esterno ⭐</td>
                    <td className="px-4 py-4 text-muted-foreground">Scoperto/Coperto</td>
                    <td className="px-4 py-4 font-semibold text-primary">da €5</td>
                    <td className="px-4 py-4 text-muted-foreground">da €29</td>
                    <td className="px-4 py-4 text-muted-foreground">15 min navetta</td>
                    <td className="pl-4 py-4 text-green-600">✅ Gratis</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Parcheggio VIP</td>
                    <td className="px-4 py-4 text-muted-foreground">Coperto + Valet</td>
                    <td className="px-4 py-4 font-semibold text-primary">€35</td>
                    <td className="px-4 py-4 text-muted-foreground">€210</td>
                    <td className="px-4 py-4 text-muted-foreground">Valet al Terminal</td>
                    <td className="pl-4 py-4 text-muted-foreground">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Consiglio:</strong> Prenotando online in anticipo sui siti ufficiali o comparatori puoi risparmiare fino al <strong>60%</strong> rispetto alla tariffa on-site.
              </p>
            </div>
          </div>
        </section>

        {/* Dettaglio parcheggi */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Guida ai Parcheggi dell'Aeroporto di Fiumicino
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {/* Multipiano */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-xl">🏢</span>
                  <h3 className="font-display text-xl font-bold text-foreground">Parcheggio Multipiano</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  I parcheggi multipiano si trovano <strong>direttamente davanti ai Terminal 1 e 3</strong> dell'aeroporto di Roma Fiumicino. 
                  Sono la soluzione più comoda per soggiorni brevi (1-3 giorni), ma anche la più costosa.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>✅ A pochi passi dal terminal</li>
                  <li>✅ Parcheggio coperto e videosorvegliato</li>
                  <li>✅ Prenotabile online su adr.it</li>
                  <li>⚠️ Costo elevato per lunghi periodi</li>
                </ul>
              </div>

              {/* Lunga Sosta */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-xl">🚌</span>
                  <h3 className="font-display text-xl font-bold text-foreground">Parcheggio Lunga Sosta</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Il <strong>parcheggio Lunga Sosta di Fiumicino</strong> è gestito da ADR e offre un ottimo rapporto qualità-prezzo. 
                  È collegato ai terminal con <strong>navette gratuite ogni 10 minuti</strong>.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>✅ Tariffa da €8/giorno</li>
                  <li>✅ Navetta gratuita per i terminal</li>
                  <li>✅ Area videosorvegliata 24h</li>
                  <li>⚠️ Parcheggio scoperto</li>
                </ul>
              </div>

              {/* Low Cost */}
              <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-sm ring-2 ring-primary/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-xl">💰</span>
                  <h3 className="font-display text-xl font-bold text-foreground">Parcheggio Low Cost</h3>
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Consigliato</span>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  I <strong>parcheggi low cost Fiumicino</strong> sono strutture private esterne all'aeroporto, collegate con navette gratuite. 
                  Offrono le tariffe più basse, ideali per chi parte per <strong>una settimana o più</strong>.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>✅ Da €5/giorno — il più economico</li>
                  <li>✅ Navetta gratuita per i terminal</li>
                  <li>✅ Prenotazione online con garanzia</li>
                  <li>✅ Spesso coperti e videosorvegliati</li>
                </ul>
              </div>

              {/* VIP / Valet */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-xl">🎩</span>
                  <h3 className="font-display text-xl font-bold text-foreground">Parcheggio VIP / Valet</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Il servizio <strong>valet parking Fiumicino</strong> è il massimo della comodità: consegni l'auto direttamente al terminal 
                  e un autista la parcheggia per te.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>✅ Consegna e ritiro al terminal</li>
                  <li>✅ Parcheggio coperto incluso</li>
                  <li>✅ Ideale per business traveller</li>
                  <li>⚠️ Costo premium (da €35/giorno)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Taxi vs Parcheggio */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Taxi o Parcheggio? Confronto Costi
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Non sei sicuro se conviene parcheggiare a Fiumicino o prendere un taxi? Ecco un confronto pratico.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground">🚕 Taxi — Tariffa Fissa €50</h3>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Da/per il <strong>centro di Roma</strong> (Mura Aureliane)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Max <strong>4 passeggeri</strong> con bagagli inclusi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Nessun costo di parcheggio o benzina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>30-50 minuti</strong> porta a porta</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-lg bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-foreground">Costo totale A/R: <span className="text-primary text-lg">€100</span></p>
                  <p className="mt-1 text-xs text-muted-foreground">Ideale per soggiorni di 1-5 giorni</p>
                </div>
                <Link
                  to="/tariffe"
                  className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Scopri Tariffe Taxi →
                </Link>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground">🅿️ Parcheggio Low Cost</h3>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Da <strong>€5/giorno</strong> con navetta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Auto <strong>sempre disponibile</strong> al ritorno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Flessibilità per bagagli pesanti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ideale se parti da <strong>fuori Roma</strong></span>
                  </li>
                </ul>
                <div className="mt-6 rounded-lg bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-foreground">Costo 7 giorni: <span className="text-primary text-lg">da €29</span></p>
                  <p className="mt-1 text-xs text-muted-foreground">Ideale per soggiorni di 7+ giorni</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GYG Affiliate - Transfer */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Alternativa al Parcheggio: Transfer Privato
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Non vuoi guidare? Prenota un <strong>transfer privato dall'aeroporto di Fiumicino</strong> e viaggia comodo senza pensieri.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ActivityCard
                title="Transfer Privato Fiumicino → Roma"
                description="Autista privato con auto di lusso, servizio porta a porta dall'aeroporto al tuo hotel a Roma."
                price="€45"
                emoji="🚗"
                gygUrl="https://www.getyourguide.com/rome-l33/private-transfer-fiumicino-airport-to-rome-t189750/"
              />
              <ActivityCard
                title="Shuttle Condiviso Fiumicino"
                description="Shuttle condiviso economico dall'aeroporto di Fiumicino al centro di Roma. Servizio con orari flessibili."
                price="€12"
                emoji="🚌"
                gygUrl="https://www.getyourguide.com/rome-l33/shuttle-fiumicino-airport-to-rome-t67890/"
              />
              <ActivityCard
                title="Transfer Privato Roma → Fiumicino"
                description="Servizio transfer dal tuo hotel a Roma direttamente all'aeroporto di Fiumicino. Puntuale e affidabile."
                price="€45"
                emoji="✈️"
                gygUrl="https://www.getyourguide.com/rome-l33/private-transfer-rome-to-fiumicino-airport-t234567/"
              />
            </div>

            <div className="mt-8">
              <GetYourGuideCTA
                text="Scopri tutti i transfer per Fiumicino"
                url="https://www.getyourguide.com/rome-l33/?q=fiumicino+transfer&partner_id=0IQTGX8&utm_medium=online_publisher"
              />
            </div>
          </div>
        </section>

        {/* Consigli pratici */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Consigli per il Parcheggio a Fiumicino
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">📅</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Prenota in anticipo</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Prenotare online <strong>almeno 7 giorni prima</strong> permette di risparmiare fino al 60%. 
                  In alta stagione (giugno-settembre) i parcheggi si riempiono velocemente.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">📱</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Salva il numero del posto</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Fai una <strong>foto alla posizione dell'auto</strong> e al numero del piano/settore. 
                  I parcheggi multipiano di Fiumicino sono molto grandi.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">⏰</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Calcola i tempi</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Per i parcheggi con navetta, aggiungi <strong>20-30 minuti extra</strong> al tempo di arrivo in aeroporto. 
                  Le navette passano ogni 10-15 minuti.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🔒</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Sicurezza</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Non lasciare <strong>oggetti di valore visibili</strong> nell'auto. Tutti i parcheggi ufficiali 
                  sono videosorvegliati 24h, ma è sempre meglio essere prudenti.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🔋</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Auto elettriche</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Alcuni parcheggi offrono <strong>colonnine di ricarica</strong>. Verifica la disponibilità al momento 
                  della prenotazione se hai un'auto elettrica.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🗓️</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Periodi di punta</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <strong>Natale, Pasqua e luglio-agosto</strong> sono i periodi più affollati. 
                  Prenota con almeno 2 settimane di anticipo per le tariffe migliori.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-linking */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Altre Guide sull'Aeroporto di Fiumicino
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link to="/fiumicino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">✈️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Aeroporto Fiumicino</h3>
                <p className="mt-1 text-sm text-muted-foreground">Guida completa: taxi, transfer, terminal</p>
              </Link>
              <Link to="/aeroporto-fiumicino-roma-termini" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🚆</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Fiumicino → Termini</h3>
                <p className="mt-1 text-sm text-muted-foreground">Leonardo Express, bus e taxi</p>
              </Link>
              <Link to="/aeroporto-fiumicino-roma-centro" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🏛️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Fiumicino → Roma Centro</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tariffa fissa €50 e opzioni</p>
              </Link>
              <Link to="/tariffe" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">💶</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Tariffe Taxi Roma</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tutte le tariffe e supplementi</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
