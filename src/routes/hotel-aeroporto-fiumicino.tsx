import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { hreflangLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/hotel-aeroporto-fiumicino")({
  component: HotelAeroportoFiumicinoPage,
  head: () => ({
    links: hreflangLinks("/hotel-aeroporto-fiumicino"),
    meta: [
      { title: "Hotel Fiumicino 2026 — Hotels Near Fiumicino Rome, Migliori Hotel Aeroporto | TaxiFiumicino.com" },
      { name: "description", content: "Hotels near Fiumicino Rome: i migliori hotel Fiumicino vicino all'aeroporto con navetta gratuita, prezzi da €60/notte. Hotel Fiumicino per voli mattutini e arrivi tardivi." },
      { property: "og:title", content: "Hotel Fiumicino — Hotels Near Fiumicino Rome Airport 2026" },
      { property: "og:description", content: "I migliori hotel Fiumicino vicino all'aeroporto di Roma: con navetta, parcheggio e a pochi minuti dal terminal. Hotels near Fiumicino Rome." },
      { name: "keywords", content: "hotels near fiumicino rome, hotel fiumicino, hotel aeroporto fiumicino, fiumicino airport hotels rome italy, hotel at fiumicino airport rome, hotels at fiumicino airport italy, hotel vicino aeroporto fiumicino, hotel fiumicino con navetta, hotel fiumicino economico, dove dormire vicino fiumicino, hotel near rome fiumicino airport" },
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
              "name": "Qual è il miglior hotel vicino all'aeroporto di Fiumicino?",
              "acceptedAnswer": { "@type": "Answer", "text": "I migliori hotel vicino all'aeroporto di Fiumicino sono: Hilton Rome Airport (4 stelle, collegato al terminal con passaggio coperto), Hilton Garden Inn (3 stelle, navetta gratuita), Best Western Hotel Corsi (budget-friendly, navetta 24h). La scelta dipende dal budget e dall'orario del volo." }
            },
            {
              "@type": "Question",
              "name": "Ci sono hotel con navetta gratuita per l'aeroporto di Fiumicino?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sì, molti hotel vicino a Fiumicino offrono navetta gratuita: Hilton Garden Inn (ogni 20 min), Best Western Hotel Corsi (24h su richiesta), Holiday Inn Rome Fiumicino (ogni 30 min), e QC Termeroma (inclusa nel soggiorno)." }
            },
            {
              "@type": "Question",
              "name": "Quanto costa un hotel vicino all'aeroporto di Fiumicino?",
              "acceptedAnswer": { "@type": "Answer", "text": "I prezzi partono da €60/notte per hotel 3 stelle fino a €200-350/notte per il Hilton Rome Airport 4 stelle. In media, un buon hotel con navetta costa €80-120/notte. Prenotando in anticipo si risparmia fino al 40%." }
            },
            {
              "@type": "Question",
              "name": "Vale la pena dormire vicino all'aeroporto di Fiumicino?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sì, è consigliato se: hai un volo prima delle 8:00, arrivi a Roma dopo le 22:00, o hai uno scalo lungo. Eviti lo stress del transfer notturno e sei a pochi minuti dal terminal. Alcuni hotel offrono anche spa e piscina per rilassarti." }
            }
          ]
        })
      }
    ]
  }),
});

function HotelAeroportoFiumicinoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                🛏️ Hotel Aeroporto Fiumicino 2026
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Hotel Vicino all'Aeroporto di <span className="text-primary">Fiumicino</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I migliori <strong>hotel vicino all'aeroporto di Roma Fiumicino</strong>: con navetta gratuita, parcheggio incluso 
                e a pochi minuti dal terminal. Ideali per <strong>voli mattutini</strong> e arrivi tardivi.
              </p>
            </div>
          </div>
        </section>

        {/* Top Hotels */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              I 6 Migliori Hotel Vicino all'Aeroporto di Fiumicino
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Classifica aggiornata 2026 degli hotel più consigliati vicino all'aeroporto di Roma Fiumicino.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Hotel 1 */}
              <div className="rounded-2xl border-2 border-primary/30 bg-card p-6 shadow-sm ring-2 ring-primary/10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">#1 Consigliato</span>
                  <span className="text-sm font-medium text-primary">⭐ 4.5/5</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">Hilton Rome Airport</h3>
                <p className="text-sm text-primary font-medium">4 stelle • Da €180/notte</p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  L'unico hotel <strong>collegato direttamente al terminal</strong> con un passaggio pedonale coperto. 
                  Camere insonorizzate, ristorante, fitness center e business lounge.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <li>✅ Collegato al Terminal 3</li>
                  <li>✅ Insonorizzato</li>
                  <li>✅ Check-in 24h</li>
                  <li>✅ Ristorante e bar</li>
                </ul>
              </div>

              {/* Hotel 2 */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">#2 Miglior Rapporto</span>
                  <span className="text-sm font-medium text-primary">⭐ 4.3/5</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">Hilton Garden Inn Fiumicino</h3>
                <p className="text-sm text-primary font-medium">3 stelle • Da €95/notte</p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Ottimo rapporto qualità-prezzo con <strong>navetta gratuita</strong> ogni 20 minuti per il terminal. 
                  Camere moderne, colazione inclusa e parcheggio.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <li>✅ Navetta gratuita 24h</li>
                  <li>✅ Colazione inclusa</li>
                  <li>✅ Parcheggio gratuito</li>
                  <li>✅ Wi-Fi veloce</li>
                </ul>
              </div>

              {/* Hotel 3 */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">#3 Budget</span>
                  <span className="text-sm font-medium text-primary">⭐ 4.1/5</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">Best Western Hotel Corsi</h3>
                <p className="text-sm text-primary font-medium">3 stelle • Da €65/notte</p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Hotel economico con <strong>navetta 24h su richiesta</strong>. 
                  A 5 minuti dall'aeroporto, camere pulite e funzionali. Perfetto per una notte.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <li>✅ Navetta su richiesta</li>
                  <li>✅ Prezzo budget</li>
                  <li>✅ 5 min dall'aeroporto</li>
                  <li>✅ Parcheggio incluso</li>
                </ul>
              </div>

              {/* Hotel 4 */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">#4 Relax</span>
                  <span className="text-sm font-medium text-primary">⭐ 4.4/5</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">QC Termeroma Spa Resort</h3>
                <p className="text-sm text-primary font-medium">4 stelle • Da €130/notte</p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Hotel con <strong>spa e terme</strong> a 10 minuti dall'aeroporto. Piscine termali, sauna e trattamenti inclusi nel soggiorno.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <li>✅ Spa e piscine termali incluse</li>
                  <li>✅ Navetta aeroporto</li>
                  <li>✅ Ristorante gourmet</li>
                  <li>✅ Ideale per coppie</li>
                </ul>
              </div>

              {/* Hotel 5 */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">#5 Famiglie</span>
                  <span className="text-sm font-medium text-primary">⭐ 4.2/5</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">Holiday Inn Rome Fiumicino</h3>
                <p className="text-sm text-primary font-medium">3 stelle • Da €85/notte</p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Catena internazionale affidabile con <strong>navetta ogni 30 minuti</strong>. 
                  Camere familiari, bambini gratis fino a 12 anni.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <li>✅ Bambini gratis &lt;12</li>
                  <li>✅ Navetta regolare</li>
                  <li>✅ Colazione buffet</li>
                  <li>✅ Parcheggio</li>
                </ul>
              </div>

              {/* Hotel 6 */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">#6 Mare</span>
                  <span className="text-sm font-medium text-primary">⭐ 4.0/5</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">Hotel Tirreno Fiumicino</h3>
                <p className="text-sm text-primary font-medium">3 stelle • Da €70/notte</p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Hotel sul <strong>lungomare di Fiumicino</strong>, vicino al porto e ai ristoranti di pesce. 
                  A 10 minuti dall'aeroporto, perfetto per chi vuole esplorare il borgo.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <li>✅ Sul lungomare</li>
                  <li>✅ Ristoranti di pesce vicini</li>
                  <li>✅ 10 min dall'aeroporto</li>
                  <li>✅ Atmosfera locale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Confronto rapido */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Confronto Rapido — Hotel Aeroporto Fiumicino
            </h2>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-4 pr-4 text-left font-display text-sm font-semibold text-foreground">Hotel</th>
                    <th className="px-4 py-4 text-left font-display text-sm font-semibold text-foreground">Stelle</th>
                    <th className="px-4 py-4 text-left font-display text-sm font-semibold text-foreground">Prezzo/notte</th>
                    <th className="px-4 py-4 text-left font-display text-sm font-semibold text-foreground">Navetta</th>
                    <th className="pl-4 py-4 text-left font-display text-sm font-semibold text-foreground">Ideale per</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Hilton Rome Airport</td>
                    <td className="px-4 py-4 text-muted-foreground">⭐⭐⭐⭐</td>
                    <td className="px-4 py-4 font-semibold text-primary">€180</td>
                    <td className="px-4 py-4 text-muted-foreground">Collegato</td>
                    <td className="pl-4 py-4 text-muted-foreground">Business, comfort</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Hilton Garden Inn</td>
                    <td className="px-4 py-4 text-muted-foreground">⭐⭐⭐</td>
                    <td className="px-4 py-4 font-semibold text-primary">€95</td>
                    <td className="px-4 py-4 text-primary">✅ Gratis</td>
                    <td className="pl-4 py-4 text-muted-foreground">Rapporto qualità-prezzo</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors bg-primary/5">
                    <td className="py-4 pr-4 font-medium text-foreground">Best Western Corsi ⭐</td>
                    <td className="px-4 py-4 text-muted-foreground">⭐⭐⭐</td>
                    <td className="px-4 py-4 font-semibold text-primary">€65</td>
                    <td className="px-4 py-4 text-primary">✅ Su richiesta</td>
                    <td className="pl-4 py-4 text-muted-foreground">Budget</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">QC Termeroma</td>
                    <td className="px-4 py-4 text-muted-foreground">⭐⭐⭐⭐</td>
                    <td className="px-4 py-4 font-semibold text-primary">€130</td>
                    <td className="px-4 py-4 text-primary">✅ Gratis</td>
                    <td className="pl-4 py-4 text-muted-foreground">Relax, coppie</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Holiday Inn</td>
                    <td className="px-4 py-4 text-muted-foreground">⭐⭐⭐</td>
                    <td className="px-4 py-4 font-semibold text-primary">€85</td>
                    <td className="px-4 py-4 text-primary">✅ Ogni 30 min</td>
                    <td className="pl-4 py-4 text-muted-foreground">Famiglie</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Hotel Tirreno</td>
                    <td className="px-4 py-4 text-muted-foreground">⭐⭐⭐</td>
                    <td className="px-4 py-4 font-semibold text-primary">€70</td>
                    <td className="px-4 py-4 text-muted-foreground">—</td>
                    <td className="pl-4 py-4 text-muted-foreground">Mare, locale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* GYG Transfer */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Transfer dall'Aeroporto al Tuo Hotel
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Preferisci andare a <strong>Roma centro</strong> invece di dormire vicino all'aeroporto? Prenota il transfer.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ActivityCard
                title="Transfer Privato Fiumicino → Hotel Roma"
                description="Autista privato dall'aeroporto direttamente al tuo hotel a Roma centro. Servizio porta a porta con auto di lusso."
                price="€45"
                emoji="🚗"
                gygUrl="https://www.getyourguide.com/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"
              />
              <ActivityCard
                title="Shuttle Condiviso Fiumicino → Roma"
                description="Navetta condivisa economica dall'aeroporto di Fiumicino ai principali hotel di Roma. Ideale per viaggiatori singoli."
                price="€12"
                emoji="🚌"
                gygUrl="https://www.getyourguide.com/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/"
              />
              <ActivityCard
                title="Transfer VIP Mercedes"
                description="Servizio premium con Mercedes. L'autista ti aspetta con il cartello all'uscita arrivi. Massimo comfort."
                price="€65"
                emoji="✨"
                gygUrl="https://www.getyourguide.com/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/"
              />
            </div>

            <div className="mt-10 text-center">
              <GetYourGuideCTA
                text="Scopri tutti i transfer per Roma"
                url="https://www.getyourguide.com/rome-l33/?q=airport+transfer&partner_id=0IQTGX8&utm_medium=online_publisher"
              />
            </div>
          </div>
        </section>

        {/* Cross-linking */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Guide Correlate
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link to="/hotel-roma" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🏨</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Hotel Roma Centro</h3>
                <p className="mt-1 text-sm text-muted-foreground">Le migliori zone dove dormire</p>
              </Link>
              <Link to="/fiumicino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">✈️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Aeroporto Fiumicino</h3>
                <p className="mt-1 text-sm text-muted-foreground">Guida completa terminal e taxi</p>
              </Link>
              <Link to="/parcheggio-fiumicino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🅿️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Parcheggio Fiumicino</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tariffe e confronto parcheggi</p>
              </Link>
              <Link to="/aeroporti-di-roma" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🗺️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Aeroporti di Roma</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fiumicino vs Ciampino</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
