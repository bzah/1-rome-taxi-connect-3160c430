import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { hreflangLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/hotel-roma")({
  component: HotelRomaPage,
  head: () => ({
    links: hreflangLinks("/hotel-roma"),
    meta: [
      { title: "Hotel Roma 2026 — Migliori Hotel Roma Centro, Lusso e Budget | TaxiFiumicino.com" },
      { name: "description", content: "I migliori hotel a Roma centro: hotel di lusso come Bulgari Hotel Roma, boutique hotel e hotel economici. Guida alle zone, prezzi e come arrivare dall'aeroporto." },
      { property: "og:title", content: "Hotel Roma — Guida ai Migliori Hotel di Roma Centro 2026" },
      { property: "og:description", content: "Scopri i migliori hotel a Roma centro: dal Bulgari Hotel Roma agli hotel economici. Zone, prezzi e transfer dall'aeroporto." },
      { name: "keywords", content: "hotel roma, hotel roma centro, bulgari hotel roma, hotel di lusso roma, hotel economici roma, migliori hotel roma, hotel roma termini, hotel roma colosseo, dove dormire a roma, hotel roma centro storico" },
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
              "name": "Qual è la zona migliore per un hotel a Roma centro?",
              "acceptedAnswer": { "@type": "Answer", "text": "Le zone migliori per soggiornare a Roma centro sono: Centro Storico (vicino a Piazza Navona e Pantheon), Trastevere (atmosfera bohémien), Monti (quartiere trendy), e Prati (vicino al Vaticano). Per i trasporti, la zona di Termini offre ottimi collegamenti." }
            },
            {
              "@type": "Question",
              "name": "Quanto costa un hotel a Roma centro?",
              "acceptedAnswer": { "@type": "Answer", "text": "I prezzi variano molto: hotel economici da €60-100/notte, hotel 4 stelle da €150-300/notte, hotel di lusso come il Bulgari Hotel Roma da €800-2000/notte. In alta stagione (aprile-giugno, settembre-ottobre) i prezzi aumentano del 30-50%." }
            },
            {
              "@type": "Question",
              "name": "Come arrivare dall'aeroporto di Fiumicino agli hotel di Roma centro?",
              "acceptedAnswer": { "@type": "Answer", "text": "Le opzioni principali sono: taxi con tariffa fissa di €50, transfer privato prenotabile online da €45, Leonardo Express per Termini (€14, 32 min), o bus navetta da €6. Il taxi e il transfer privato sono i più comodi perché portano direttamente all'hotel." }
            },
            {
              "@type": "Question",
              "name": "Il Bulgari Hotel Roma vale il prezzo?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il Bulgari Hotel Roma, situato in Piazza Augusto Imperatore, è uno dei migliori hotel 5 stelle lusso di Roma. Offre spa, ristorante gourmet, e una posizione straordinaria vicino a Via Condotti. È ideale per chi cerca un'esperienza di lusso esclusiva." }
            },
            {
              "@type": "Question",
              "name": "Quali sono i migliori hotel vicino al Colosseo?",
              "acceptedAnswer": { "@type": "Answer", "text": "I migliori hotel vicino al Colosseo includono: Palazzo Manfredi (vista diretta sul Colosseo), Hotel Capo d'Africa (4 stelle, ottimo rapporto qualità-prezzo), The Inn at the Roman Forum (boutique di charme). La zona Celio-Monti offre le migliori opzioni." }
            }
          ]
        })
      }
    ]
  }),
});

function HotelRomaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                🏨 Guida Hotel Roma 2026
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Hotel <span className="text-primary">Roma</span> Centro: Guida Completa
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Trova l'<strong>hotel perfetto a Roma centro</strong>: dai <strong>boutique hotel di lusso</strong> come il Bulgari Hotel Roma 
                agli <strong>hotel economici</strong> vicino a Termini. Con consigli su zone, prezzi e transfer dall'aeroporto.
              </p>
            </div>
          </div>
        </section>

        {/* Zone di Roma */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Le Migliori Zone per Dormire a Roma
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Roma è divisa in quartieri con caratteristiche diverse. Ecco le zone migliori per ogni tipo di viaggiatore.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">🏛️</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Centro Storico</h3>
                <p className="mt-1 text-sm font-medium text-primary">€150-500/notte</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  <strong>Piazza Navona, Pantheon, Campo de' Fiori.</strong> La zona più centrale e turistica. 
                  Ideale per chi vuole camminare ovunque. Hotel di charme e appartamenti eleganti.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  ✅ A piedi da tutti i monumenti • ⚠️ Può essere rumoroso di notte
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">🎭</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Trastevere</h3>
                <p className="mt-1 text-sm font-medium text-primary">€100-350/notte</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Il quartiere più bohémien di Roma, con stradine acciottolate, ristoranti autentici e vita notturna. 
                  Perfetto per <strong>coppie e giovani viaggiatori</strong>.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  ✅ Atmosfera autentica • ✅ Ottimi ristoranti • ⚠️ Lontano dalla metro
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">🏟️</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Monti / Colosseo</h3>
                <p className="mt-1 text-sm font-medium text-primary">€120-400/notte</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Quartiere trendy con boutique, caffè artigianali e vista sul <strong>Colosseo</strong>. 
                  Zona perfetta per chi ama arte, cultura e shopping alternativo.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  ✅ Metro Cavour/Colosseo • ✅ Quartiere vivace • ✅ Vicino ai Fori
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">⛪</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Prati / Vaticano</h3>
                <p className="mt-1 text-sm font-medium text-primary">€100-300/notte</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Quartiere elegante vicino a <strong>San Pietro e i Musei Vaticani</strong>. 
                  Zona residenziale con ottime trattorie romane e atmosfera più tranquilla.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  ✅ Vicino al Vaticano • ✅ Metro Ottaviano • ✅ Zona tranquilla
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">🚉</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Termini / Esquilino</h3>
                <p className="mt-1 text-sm font-medium text-primary">€60-200/notte</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  La zona più pratica per i <strong>trasporti</strong>: stazione Termini, metro A e B, bus per tutti gli aeroporti. 
                  Hotel per tutti i budget, dai backpacker al 4 stelle.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  ✅ Collegamento aeroporti • ✅ Budget-friendly • ⚠️ Zona meno elegante
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">🛍️</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Via Veneto / Ludovisi</h3>
                <p className="mt-1 text-sm font-medium text-primary">€200-800/notte</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  La zona del <strong>lusso romano</strong>, con hotel 5 stelle, ristoranti gourmet e lo shopping di Via Condotti. 
                  Qui si trova il famoso <strong>Bulgari Hotel Roma</strong>.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  ✅ Hotel di lusso • ✅ Shopping alta moda • ✅ Metro Barberini
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bulgari Hotel Roma spotlight */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Bulgari Hotel Roma — L'Eccellenza del Lusso
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Il <strong>Bulgari Hotel Roma</strong> è situato in <strong>Piazza Augusto Imperatore</strong>, nel cuore di Roma, 
                  a pochi passi da Via Condotti e Piazza di Spagna. Inaugurato nel 2023, è uno dei più esclusivi hotel 5 stelle lusso della Capitale.
                </p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✦</span>
                    <span><strong>114 camere e suite</strong> con design firmato Antonio Citterio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✦</span>
                    <span><strong>Bulgari Spa</strong> con piscina coperta e trattamenti esclusivi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✦</span>
                    <span><strong>Il Ristorante</strong> — cucina italiana gourmet by Niko Romito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✦</span>
                    <span><strong>Bar Bulgari</strong> con terrazza panoramica sull'Ara Pacis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✦</span>
                    <span>Prezzi da <strong>€800/notte</strong> in camera doppia</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  <strong>Come arrivare:</strong> Transfer privato dall'aeroporto di Fiumicino (45 min, da €65) o taxi con tariffa fissa €50.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">Prezzi Bulgari Hotel Roma 2026</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Camera Superior</span>
                      <span className="font-semibold text-primary">da €800</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Camera Deluxe</span>
                      <span className="font-semibold text-primary">da €1.100</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Junior Suite</span>
                      <span className="font-semibold text-primary">da €1.500</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Bulgari Suite</span>
                      <span className="font-semibold text-primary">da €3.000</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Consiglio:</strong> Prenota con anticipo e controlla le offerte speciali sul sito ufficiale Bulgari Hotels. 
                    In bassa stagione (gennaio-marzo) puoi trovare tariffe fino al 30% più basse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GYG Tour e Attività */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Tour e Attività a Roma — Prenota Online
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Scopri le migliori <strong>attività e tour a Roma</strong> con prenotazione facile e cancellazione gratuita. 
              Transfer dall'aeroporto al tuo hotel incluso.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ActivityCard
                title="Tour Colosseo, Foro e Palatino"
                description="Visita guidata al Colosseo con accesso prioritario, Foro Romano e Colle Palatino. La migliore esperienza di Roma."
                price="€45"
                emoji="🏛️"
                gygUrl="https://www.getyourguide.com/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"
              />
              <ActivityCard
                title="Musei Vaticani e Cappella Sistina"
                description="Salta la fila ai Musei Vaticani e ammira la Cappella Sistina di Michelangelo con guida esperta."
                price="€55"
                emoji="⛪"
                gygUrl="https://www.getyourguide.com/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/"
              />
              <ActivityCard
                title="Transfer Privato Aeroporto → Hotel"
                description="Autista privato dall'aeroporto di Fiumicino direttamente al tuo hotel a Roma. Servizio porta a porta."
                price="€45"
                emoji="🚗"
                gygUrl="https://www.getyourguide.com/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"
              />
              <ActivityCard
                title="Roma Pass 48h — Trasporti + Musei"
                description="Card turistica con trasporti pubblici illimitati, ingresso gratuito a 1 museo e sconti su tutti gli altri."
                price="€33"
                emoji="🎫"
                gygUrl="https://www.getyourguide.com/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/"
              />
              <ActivityCard
                title="Tour Gastronomico Trastevere"
                description="Scopri i sapori autentici di Roma con un food tour a Trastevere: pasta, supplì, pizza al taglio e gelato artigianale."
                price="€65"
                emoji="🍝"
                gygUrl="https://www.getyourguide.com/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/"
              />
              <ActivityCard
                title="Gita Pompei da Roma"
                description="Escursione giornaliera da Roma a Pompei con trasporto incluso e guida archeologica professionale."
                price="€95"
                emoji="🌋"
                gygUrl="https://www.getyourguide.com/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/"
              />
            </div>

            <div className="mt-10 text-center">
              <GetYourGuideCTA
                text="Scopri tutte le attività a Roma"
                url="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher"
              />
            </div>
          </div>
        </section>

        {/* Transfer dall'aeroporto all'hotel */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Come Arrivare dall'Aeroporto al Tuo Hotel a Roma
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground">🚕 Taxi — Tariffa Fissa</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Il modo più semplice per arrivare al tuo hotel a Roma centro. 
                  <strong>Tariffa fissa €50</strong> da Fiumicino, <strong>€31</strong> da Ciampino. 
                  Porta a porta, bagagli inclusi.
                </p>
                <Link to="/tariffe" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                  Tutte le tariffe taxi →
                </Link>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground">🚗 Transfer Privato</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Prenota online un <strong>transfer privato</strong> dall'aeroporto al tuo hotel. 
                  L'autista ti aspetta all'arrivo con il cartello. Da <strong>€45</strong> con cancellazione gratuita.
                </p>
                <a 
                  href="https://www.getyourguide.com/rome-l33/?q=airport+transfer&partner_id=0IQTGX8&utm_medium=online_publisher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Prenota transfer online →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-linking */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Guide Correlate
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link to="/aeroporti-di-roma" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">✈️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Aeroporti di Roma</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fiumicino e Ciampino a confronto</p>
              </Link>
              <Link to="/hotel-aeroporto-fiumicino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🛏️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Hotel Aeroporto Fiumicino</h3>
                <p className="mt-1 text-sm text-muted-foreground">Dove dormire vicino al terminal</p>
              </Link>
              <Link to="/fiumicino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🚕</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Taxi Fiumicino</h3>
                <p className="mt-1 text-sm text-muted-foreground">Guida completa e tariffe</p>
              </Link>
              <Link to="/parcheggio-fiumicino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🅿️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Parcheggio Fiumicino</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tariffe e confronto parcheggi</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
