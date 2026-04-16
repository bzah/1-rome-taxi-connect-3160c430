import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { i18nLinks } from "@/i18n/hreflang";
import { RomeDiscoverGrid, ROME_ATTRACTIONS, ROME_FOOD, ROME_NIGHTLIFE } from "@/components/RomeDiscoverSection";
import { discoverJsonLdScript } from "@/lib/discover-jsonld";
import {
  GYG_COLOSSEUM_TOUR,
  GYG_VATICAN_TICKET,
  GYG_PASTA_CLASS,
  GYG_POMPEII_DAY_TRIP,
  GYG_HOP_ON_BUS,
  GYG_ROME_TRANSFERS,
  GYG_ROME_ALL,
  GYG_VATICAN_TOUR,
} from "@/lib/gyg-links";

export const Route = createFileRoute("/hotel-roma")({
  component: HotelRomaPage,
  head: () => ({
    links: i18nLinks("/hotel-roma", "it"),
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
            { "@type": "Question", "name": "Qual è la zona migliore per un hotel a Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "Le zone migliori per soggiornare a Roma centro sono: Centro Storico (vicino a Piazza Navona e Pantheon), Trastevere (atmosfera bohémien), Monti (quartiere trendy), e Prati (vicino al Vaticano). Per i trasporti, la zona di Termini offre ottimi collegamenti." } },
            { "@type": "Question", "name": "Quanto costa un hotel a Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "I prezzi variano molto: hotel economici da €60-100/notte, hotel 4 stelle da €150-300/notte, hotel di lusso come il Bulgari Hotel Roma da €800-2000/notte. In alta stagione (aprile-giugno, settembre-ottobre) i prezzi aumentano del 30-50%." } },
            { "@type": "Question", "name": "Come arrivare dall'aeroporto di Fiumicino agli hotel di Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "Le opzioni principali sono: taxi con tariffa fissa di €50, transfer privato prenotabile online da €45, Leonardo Express per Termini (€14, 32 min), o bus navetta da €6. Il taxi e il transfer privato sono i più comodi perché portano direttamente all'hotel." } },
            { "@type": "Question", "name": "Il Bulgari Hotel Roma vale il prezzo?", "acceptedAnswer": { "@type": "Answer", "text": "Il Bulgari Hotel Roma, situato in Piazza Augusto Imperatore, è uno dei migliori hotel 5 stelle lusso di Roma. Offre spa, ristorante gourmet, e una posizione straordinaria vicino a Via Condotti. È ideale per chi cerca un'esperienza di lusso esclusiva." } },
            { "@type": "Question", "name": "Quali sono i migliori hotel vicino al Colosseo?", "acceptedAnswer": { "@type": "Answer", "text": "I migliori hotel vicino al Colosseo includono: Palazzo Manfredi (vista diretta sul Colosseo), Hotel Capo d'Africa (4 stelle, ottimo rapporto qualità-prezzo), The Inn at the Roman Forum (boutique di charme). La zona Celio-Monti offre le migliori opzioni." } }
          ]
        })
      }
    ]
  }),
});

const ZONES = [
  { emoji: "🏛️", name: "Centro Storico", price: "€150-500/notte", desc: "Piazza Navona, Pantheon, Campo de' Fiori. La zona più centrale e turistica. Ideale per chi vuole camminare ovunque.", note: "✅ A piedi da tutti i monumenti • ⚠️ Può essere rumoroso" },
  { emoji: "🎭", name: "Trastevere", price: "€100-350/notte", desc: "Quartiere bohémien con stradine acciottolate, ristoranti autentici e vita notturna. Perfetto per coppie e giovani.", note: "✅ Atmosfera autentica • ✅ Ottimi ristoranti • ⚠️ Lontano dalla metro" },
  { emoji: "🏟️", name: "Monti / Colosseo", price: "€120-400/notte", desc: "Quartiere trendy con boutique, caffè artigianali e vista sul Colosseo. Perfetto per arte, cultura e shopping.", note: "✅ Metro Cavour/Colosseo • ✅ Quartiere vivace • ✅ Vicino ai Fori" },
  { emoji: "⛪", name: "Prati / Vaticano", price: "€100-300/notte", desc: "Quartiere elegante vicino a San Pietro e ai Musei Vaticani. Zona residenziale con ottime trattorie romane.", note: "✅ Vicino al Vaticano • ✅ Metro Ottaviano • ✅ Zona tranquilla" },
  { emoji: "🚉", name: "Termini / Esquilino", price: "€60-200/notte", desc: "La zona più pratica per i trasporti: stazione Termini, metro A e B, bus per tutti gli aeroporti.", note: "✅ Collegamento aeroporti • ✅ Budget-friendly • ⚠️ Zona meno elegante" },
  { emoji: "🛍️", name: "Via Veneto / Ludovisi", price: "€200-800/notte", desc: "La zona del lusso romano: hotel 5 stelle, ristoranti gourmet e shopping di Via Condotti. Qui si trova il Bulgari Hotel Roma.", note: "✅ Hotel di lusso • ✅ Shopping alta moda • ✅ Metro Barberini" },
];

function HotelRomaPage() {
  return (
    <>
      <HeroSection
        title="Hotel Roma Centro"
        subtitle="Guida Completa 2026"
        description="Trova l'hotel perfetto a Roma centro: dai boutique hotel di lusso come il Bulgari Hotel Roma agli hotel economici vicino a Termini. Zone, prezzi e transfer dall'aeroporto."
        ctaText="Prenota Transfer Aeroporto"
        ctaHref={GYG_ROME_TRANSFERS}
      />

      {/* Zone di Roma */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Le Migliori Zone<br className="hidden sm:block" /> per Dormire a Roma</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
            Roma è divisa in quartieri con caratteristiche diverse. Ecco le zone migliori per ogni tipo di viaggiatore.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ZONES.map((zone) => (
            <div key={zone.name} className="rounded-sm border border-stone-warm bg-card p-6 sm:p-7 hover:border-primary/30 transition-all hover:editorial-shadow-lg">
              <span className="text-3xl">{zone.emoji}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{zone.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{zone.price}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{zone.desc}</p>
              <p className="mt-3 text-xs text-muted-foreground">{zone.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bulgari Hotel Roma */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Bulgari Hotel Roma — L'Eccellenza del Lusso</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Il <strong>Bulgari Hotel Roma</strong> è situato in <strong>Piazza Augusto Imperatore</strong>, nel cuore di Roma,
                a pochi passi da Via Condotti e Piazza di Spagna. Inaugurato nel 2023, è uno dei più esclusivi hotel 5 stelle lusso della Capitale.
              </p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                {[
                  "114 camere e suite con design firmato Antonio Citterio",
                  "Bulgari Spa con piscina coperta e trattamenti esclusivi",
                  "Il Ristorante — cucina italiana gourmet by Niko Romito",
                  "Bar Bulgari con terrazza panoramica sull'Ara Pacis",
                  "Prezzi da €800/notte in camera doppia",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                <strong>Come arrivare:</strong> Transfer privato dall'aeroporto di Fiumicino (45 min, da €65) o taxi con tariffa fissa €50.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-sm border border-stone-warm bg-card p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold">Prezzi Bulgari Hotel Roma 2026</h3>
                <div className="mt-4 space-y-3">
                  {[
                    ["Camera Superior", "da €800"],
                    ["Camera Deluxe", "da €1.100"],
                    ["Junior Suite", "da €1.500"],
                    ["Bulgari Suite", "da €3.000"],
                  ].map(([name, price]) => (
                    <div key={name} className="flex items-center justify-between border-b border-stone-warm pb-2 last:border-0">
                      <span className="text-sm text-muted-foreground">{name}</span>
                      <span className="text-sm font-semibold text-primary">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-sm border border-primary/20 bg-primary/5 p-4">
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
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Tour e Attività<br className="hidden sm:block" /> a Roma</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
            Prenota le migliori esperienze a Roma con cancellazione gratuita.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🏛️" title="Tour Colosseo, Foro e Palatino" description="Visita guidata al Colosseo con accesso prioritario, Foro Romano e Colle Palatino." gygUrl={GYG_COLOSSEUM_TOUR} price="€35" />
          <ActivityCard emoji="🏟️" title="Musei Vaticani e Cappella Sistina" description="Tour guidato salta-fila ai Musei Vaticani, Cappella Sistina e Basilica." gygUrl={GYG_VATICAN_TOUR} price="€30" />
          <ActivityCard emoji="🎫" title="Biglietto Vaticano — Salta la Fila" description="Ingresso prioritario ai Musei Vaticani e Cappella Sistina. Tutto il giorno." gygUrl={GYG_VATICAN_TICKET} price="€25" />
          <ActivityCard emoji="🍝" title="Corso Pasta e Tiramisù" description="Impara a cucinare pasta e tiramisù in un ristorante locale vicino al Vaticano." gygUrl={GYG_PASTA_CLASS} price="€55" />
          <ActivityCard emoji="🌋" title="Gita Pompei da Roma" description="Escursione giornaliera da Roma a Pompei con trasporto incluso e guida professionale." gygUrl={GYG_POMPEII_DAY_TRIP} price="€120" />
          <ActivityCard emoji="🚌" title="Bus Hop-on Hop-off Roma" description="Esplora Roma al tuo ritmo con il bus turistico panoramico. Valido fino a 3 giorni." gygUrl={GYG_HOP_ON_BUS} price="€25" />
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <GetYourGuideCTA text="Scopri tutte le attività a Roma" url={GYG_ROME_ALL} />
        </div>
      </section>

      {/* Transfer dall'aeroporto */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 sm:mb-16">Come Arrivare dall'Aeroporto al Tuo Hotel</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-stone-warm bg-card p-7 sm:p-8">
              <h3 className="font-display text-2xl font-semibold">🚕 Taxi — Tariffa Fissa</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Il modo più semplice per arrivare al tuo hotel a Roma centro.
                <strong> Tariffa fissa €50</strong> da Fiumicino, <strong>€31</strong> da Ciampino.
                Porta a porta, bagagli inclusi.
              </p>
              <Link to="/tariffe" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                Tutte le tariffe taxi →
              </Link>
            </div>

            <div className="rounded-sm border border-stone-warm bg-card p-7 sm:p-8">
              <h3 className="font-display text-2xl font-semibold">🚗 Transfer Privato</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Prenota online un <strong>transfer privato</strong> dall'aeroporto al tuo hotel.
                L'autista ti aspetta all'arrivo con il cartello. Da <strong>€45</strong> con cancellazione gratuita.
              </p>
              <a href={GYG_ROME_TRANSFERS} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                Prenota transfer online →
              </a>
            </div>
          </div>
        </div>
      </section>

      <RomeDiscoverGrid
        title="Scopri Roma"
        subtitle="Attrazioni, gastronomia e vita notturna. Prenota con cancellazione gratuita."
        categories={[ROME_ATTRACTIONS, ROME_FOOD, ROME_NIGHTLIFE]}
        ctaUrl={GYG_ROME_ALL}
      />

      {/* Cross-linking */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Guide Correlate</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/aeroporti-di-roma" as const, emoji: "✈️", title: "Aeroporti di Roma", desc: "Fiumicino e Ciampino a confronto" },
            { to: "/hotel-aeroporto-fiumicino" as const, emoji: "🛏️", title: "Hotel Aeroporto Fiumicino", desc: "Dove dormire vicino al terminal" },
            { to: "/fiumicino" as const, emoji: "🚕", title: "Taxi Fiumicino", desc: "Guida completa e tariffe" },
            { to: "/parcheggio-fiumicino" as const, emoji: "🅿️", title: "Parcheggio Fiumicino", desc: "Tariffe e confronto parcheggi" },
          ].map((link) => (
            <Link key={link.to} to={link.to} className="group rounded-sm border border-stone-warm bg-card p-5 transition-all hover:border-primary/30 hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
              <span className="text-2xl">{link.emoji}</span>
              <h3 className="mt-2 font-display font-semibold group-hover:text-primary transition-colors">{link.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
