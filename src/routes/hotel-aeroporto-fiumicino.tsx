import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { i18nLinks } from "@/i18n/hreflang";
import { RomeDiscoverGrid, ROME_TRANSFERS, ROME_TOURS, ROME_ACTIVITIES } from "@/components/RomeDiscoverSection";
import { discoverJsonLdScript } from "@/lib/discover-jsonld";
import {
  GYG_COLOSSEUM_TOUR,
  GYG_VATICAN_TOUR,
  GYG_ROME_TRANSFERS,
  GYG_HOP_ON_BUS,
  GYG_PASTA_CLASS,
  GYG_VATICAN_TICKET,
  GYG_ROME_ALL,
} from "@/lib/gyg-links";

export const Route = createFileRoute("/hotel-aeroporto-fiumicino")({
  component: HotelAeroportoFiumicinoPage,
  head: () => ({
    links: i18nLinks("/hotel-aeroporto-fiumicino", "it"),
    meta: [
      { title: "Hotel Fiumicino 2026 — Hotels Near Fiumicino Rome, Migliori Hotel Aeroporto | TaxiFiumicino.com" },
      { name: "description", content: "Hotels near Fiumicino Rome: i migliori hotel Fiumicino vicino all'aeroporto con navetta gratuita, prezzi da €60/notte. Hotel Fiumicino per voli mattutini e arrivi tardivi." },
      { property: "og:title", content: "Hotel Fiumicino — Hotels Near Fiumicino Rome Airport 2026" },
      { property: "og:description", content: "I migliori hotel Fiumicino vicino all'aeroporto di Roma: con navetta, parcheggio e a pochi minuti dal terminal." },
      { name: "keywords", content: "hotels near fiumicino rome, hotel fiumicino, hotel aeroporto fiumicino, fiumicino airport hotels rome italy, hotel at fiumicino airport rome, hotels at fiumicino airport italy" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Qual è il miglior hotel vicino all'aeroporto di Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "I migliori hotel vicino all'aeroporto di Fiumicino sono: Hilton Rome Airport (4 stelle, collegato al terminal), Hilton Garden Inn (3 stelle, navetta gratuita), Best Western Hotel Corsi (budget-friendly, navetta 24h)." } },
            { "@type": "Question", "name": "Ci sono hotel con navetta gratuita per l'aeroporto di Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "Sì: Hilton Garden Inn (ogni 20 min), Best Western Hotel Corsi (24h su richiesta), Holiday Inn Rome Fiumicino (ogni 30 min), e QC Termeroma (inclusa nel soggiorno)." } },
            { "@type": "Question", "name": "Quanto costa un hotel vicino all'aeroporto di Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "I prezzi partono da €60/notte per hotel 3 stelle fino a €200-350/notte per il Hilton Rome Airport 4 stelle. In media, un buon hotel con navetta costa €80-120/notte." } },
            { "@type": "Question", "name": "Vale la pena dormire vicino all'aeroporto di Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, è consigliato se: hai un volo prima delle 8:00, arrivi a Roma dopo le 22:00, o hai uno scalo lungo." } }
          ]
        })
      }
          discoverJsonLdScript([ROME_TRANSFERS, ROME_TOURS, ROME_ACTIVITIES]),
    ]
  }),
});

const HOTELS = [
  { rank: "#1 Consigliato", name: "Hilton Rome Airport", stars: "4 stelle", price: "Da €180/notte", rating: "⭐ 4.5/5", desc: "L'unico hotel collegato direttamente al terminal con un passaggio pedonale coperto. Camere insonorizzate, ristorante, fitness center.", features: ["Collegato al Terminal 3", "Insonorizzato", "Check-in 24h", "Ristorante e bar"], highlight: true },
  { rank: "#2 Miglior Rapporto", name: "Hilton Garden Inn Fiumicino", stars: "3 stelle", price: "Da €95/notte", rating: "⭐ 4.3/5", desc: "Ottimo rapporto qualità-prezzo con navetta gratuita ogni 20 minuti. Camere moderne, colazione inclusa.", features: ["Navetta gratuita 24h", "Colazione inclusa", "Parcheggio gratuito", "Wi-Fi veloce"], highlight: false },
  { rank: "#3 Budget", name: "Best Western Hotel Corsi", stars: "3 stelle", price: "Da €65/notte", rating: "⭐ 4.1/5", desc: "Hotel economico con navetta 24h su richiesta. A 5 minuti dall'aeroporto, camere pulite e funzionali.", features: ["Navetta su richiesta", "Prezzo budget", "5 min dall'aeroporto", "Parcheggio incluso"], highlight: false },
  { rank: "#4 Relax", name: "QC Termeroma Spa Resort", stars: "4 stelle", price: "Da €130/notte", rating: "⭐ 4.4/5", desc: "Hotel con spa e terme a 10 minuti dall'aeroporto. Piscine termali, sauna e trattamenti inclusi.", features: ["Spa e piscine termali incluse", "Navetta aeroporto", "Ristorante gourmet", "Ideale per coppie"], highlight: false },
  { rank: "#5 Famiglie", name: "Holiday Inn Rome Fiumicino", stars: "3 stelle", price: "Da €85/notte", rating: "⭐ 4.2/5", desc: "Catena internazionale affidabile con navetta ogni 30 minuti. Camere familiari, bambini gratis fino a 12 anni.", features: ["Bambini gratis <12", "Navetta regolare", "Colazione buffet", "Parcheggio"], highlight: false },
  { rank: "#6 Mare", name: "Hotel Tirreno Fiumicino", stars: "3 stelle", price: "Da €70/notte", rating: "⭐ 4.0/5", desc: "Hotel sul lungomare di Fiumicino, vicino al porto e ai ristoranti di pesce. A 10 minuti dall'aeroporto.", features: ["Sul lungomare", "Ristoranti di pesce vicini", "10 min dall'aeroporto", "Atmosfera locale"], highlight: false },
];

function HotelAeroportoFiumicinoPage() {
  return (
    <>
      <HeroSection
        title="Hotel Aeroporto Fiumicino"
        subtitle="I Migliori Hotel 2026"
        description="I migliori hotel vicino all'aeroporto di Roma Fiumicino: con navetta gratuita, parcheggio incluso e a pochi minuti dal terminal. Ideali per voli mattutini e arrivi tardivi."
        ctaText="Prenota Transfer"
        ctaHref={GYG_ROME_TRANSFERS}
      />

      {/* Top Hotels */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">I 6 Migliori Hotel<br className="hidden sm:block" /> Vicino a Fiumicino</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
            Classifica aggiornata 2026 degli hotel più consigliati vicino all'aeroporto.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOTELS.map((hotel) => (
            <div key={hotel.name} className={`rounded-sm border bg-card p-6 sm:p-7 transition-all hover:editorial-shadow-lg ${hotel.highlight ? "border-primary/40 ring-2 ring-primary/10" : "border-stone-warm"}`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`rounded-sm px-3 py-1 text-xs font-semibold ${hotel.highlight ? "gold-gradient text-espresso" : "bg-accent text-accent-foreground"}`}>{hotel.rank}</span>
                <span className="text-sm font-medium text-primary">{hotel.rating}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{hotel.name}</h3>
              <p className="text-sm text-primary font-medium">{hotel.stars} • {hotel.price}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{hotel.desc}</p>
              <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                {hotel.features.map((f) => <li key={f}>✅ {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Confronto rapido */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-10">Confronto Rapido</h2>
          <div className="overflow-x-auto rounded-sm border border-stone-warm bg-card">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-stone-warm">
                  <th className="py-4 px-5 text-left font-display text-sm font-semibold">Hotel</th>
                  <th className="py-4 px-4 text-left font-display text-sm font-semibold">Stelle</th>
                  <th className="py-4 px-4 text-left font-display text-sm font-semibold">Prezzo/notte</th>
                  <th className="py-4 px-4 text-left font-display text-sm font-semibold">Navetta</th>
                  <th className="py-4 px-4 text-left font-display text-sm font-semibold">Ideale per</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-warm">
                {[
                  ["Hilton Rome Airport", "⭐⭐⭐⭐", "€180", "Collegato", "Business, comfort"],
                  ["Hilton Garden Inn", "⭐⭐⭐", "€95", "✅ Gratis", "Rapporto qualità-prezzo"],
                  ["Best Western Corsi", "⭐⭐⭐", "€65", "✅ Su richiesta", "Budget"],
                  ["QC Termeroma", "⭐⭐⭐⭐", "€130", "✅ Gratis", "Relax, coppie"],
                  ["Holiday Inn", "⭐⭐⭐", "€85", "✅ Ogni 30 min", "Famiglie"],
                  ["Hotel Tirreno", "⭐⭐⭐", "€70", "—", "Mare, locale"],
                ].map(([name, stars, price, shuttle, ideal]) => (
                  <tr key={name} className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 px-5 font-medium text-sm">{name}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{stars}</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">{price}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{shuttle}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GYG Transfer */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Transfer e Tour<br className="hidden sm:block" /> Consigliati</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
            Preferisci andare a Roma centro? Prenota il transfer o un tour.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🏛️" title="Tour Colosseo, Foro e Palatino" description="Visita guidata salta-fila al Colosseo, Foro Romano e Palatino. 2.5 ore." gygUrl={GYG_COLOSSEUM_TOUR} price="€35" />
          <ActivityCard emoji="🏟️" title="Tour Musei Vaticani e Sistina" description="Tour guidato salta-fila ai Musei Vaticani, Cappella Sistina e Basilica." gygUrl={GYG_VATICAN_TOUR} price="€30" />
          <ActivityCard emoji="🎫" title="Biglietto Vaticano Salta la Fila" description="Ingresso prioritario ai Musei Vaticani e Cappella Sistina." gygUrl={GYG_VATICAN_TICKET} price="€25" />
          <ActivityCard emoji="🍝" title="Corso Pasta e Tiramisù" description="Impara a cucinare pasta e tiramisù in un ristorante locale." gygUrl={GYG_PASTA_CLASS} price="€55" />
          <ActivityCard emoji="🚌" title="Bus Hop-on Hop-off Roma" description="Esplora Roma con il bus turistico panoramico. Valido fino a 3 giorni." gygUrl={GYG_HOP_ON_BUS} price="€25" />
          <ActivityCard emoji="✈️" title="Transfer Fiumicino → Roma" description="Trova e prenota il tuo trasferimento dall'aeroporto al centro di Roma." gygUrl={GYG_ROME_TRANSFERS} />
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <GetYourGuideCTA text="Scopri tutti i transfer per Roma" url={GYG_ROME_TRANSFERS} />
        </div>
      </section>

      <RomeDiscoverGrid
        title="Scopri Roma"
        subtitle="Transfer, tour e attività con cancellazione gratuita."
        categories={[ROME_TRANSFERS, ROME_TOURS, ROME_ACTIVITIES]}
        ctaUrl={GYG_ROME_ALL}
      />

      {/* Cross-linking */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Guide Correlate</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { to: "/hotel-roma" as const, emoji: "🏨", title: "Hotel Roma Centro", desc: "Le migliori zone dove dormire" },
              { to: "/fiumicino" as const, emoji: "✈️", title: "Aeroporto Fiumicino", desc: "Guida completa terminal e taxi" },
              { to: "/parcheggio-fiumicino" as const, emoji: "🅿️", title: "Parcheggio Fiumicino", desc: "Tariffe e confronto parcheggi" },
              { to: "/aeroporti-di-roma" as const, emoji: "🗺️", title: "Aeroporti di Roma", desc: "Fiumicino vs Ciampino" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="group rounded-sm border border-stone-warm bg-card p-5 transition-all hover:border-primary/30 hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
                <span className="text-2xl">{link.emoji}</span>
                <h3 className="mt-2 font-display font-semibold group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
