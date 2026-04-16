import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { hreflangLinks } from "@/i18n/hreflang";
import {
  GYG_COLOSSEUM_TOUR,
  GYG_VATICAN_TOUR,
  GYG_COLOSSEUM_UNDERGROUND,
  GYG_VATICAN_TICKET,
  GYG_PASTA_CLASS,
  GYG_HOP_ON_BUS,
  GYG_POMPEII_DAY_TRIP,
  GYG_COLOSSEUM_ARENA,
  GYG_VATICAN_BASILICA,
  GYG_COLOSSEUM_GUIDED,
  GYG_VATICAN_SKIP_LINE,
  GYG_VATICAN_SQUARE,
  GYG_ROME_ALL,
  GYG_ROME_TRANSFERS,
} from "@/lib/gyg-links";
import taxiRomaImg from "@/assets/taxi-roma.jpg";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";
import colosseumImg from "@/assets/rome-colosseum-golden.jpg";
import vaticanImg from "@/assets/rome-vatican-tour.jpg";
import hotelImg from "@/assets/rome-hotel-stay.jpg";
import eventsImg from "@/assets/rome-events.jpg";
import activitiesImg from "@/assets/rome-activities-pasta.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: hreflangLinks("/"),
    meta: [
      { title: "Taxi Roma Fiumicino — Aeroporto Roma Fiumicino Transfer e Tariffe 2026" },
      { name: "description", content: "Taxi e transfer dall'aeroporto Roma Fiumicino: tariffa fissa €50, numeri radio taxi, prenotazioni online. Guida completa 2026 per turisti e residenti." },
      { property: "og:title", content: "Taxi Roma — Guida Completa ai Taxi a Roma e Fiumicino" },
      { property: "og:description", content: "Tariffe, numeri, prenotazioni taxi Roma. Trasferimenti aeroporto Fiumicino. La guida più completa." },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "taxi roma, aeroporto roma fiumicino, taxi roma fiumicino, aeroporto fiumicino, numero taxi roma, tariffe taxi roma, transfer aeroporto fiumicino, radio taxi roma" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "TaxiFiumicino.com — Guida Taxi Roma",
          "description": "Guida completa ai taxi a Roma: tariffe ufficiali, numeri radio taxi, trasferimenti aeroporto Fiumicino e prenotazioni online.",
          "url": "https://taxifiumicino.com",
          "areaServed": { "@type": "City", "name": "Roma", "sameAs": "https://it.wikipedia.org/wiki/Roma" },
          "address": { "@type": "PostalAddress", "addressLocality": "Roma", "addressRegion": "Lazio", "addressCountry": "IT" },
          "geo": { "@type": "GeoCoordinates", "latitude": 41.9028, "longitude": 12.4964 },
          "priceRange": "€€",
          "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Come prenotare un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "Puoi prenotare un taxi a Roma chiamando una radio taxi (06.3570, 06.4994, 06.6645), usando un'app come itTaxi o Free Now, oppure prenotando un transfer privato online." } },
            { "@type": "Question", "name": "Quanto costa un taxi da Fiumicino a Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa fissa per un taxi da Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50. Questa tariffa è valida per un massimo di 4 passeggeri con bagagli inclusi." } },
            { "@type": "Question", "name": "Qual è il numero di telefono per chiamare un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "I principali numeri sono: Radio Taxi 3570 (06.3570), Samarcanda (06.5551), La Capitale (06.4994), Roma Taxi (06.6645). Disponibili 24 ore su 24." } },
            { "@type": "Question", "name": "Come chiamare un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "Puoi chiamare un taxi a Roma: 1) Per telefono tramite radio taxi, 2) Con l'app itTaxi o Free Now, 3) Da una postazione taxi ufficiale, 4) Fermandone uno per strada se ha la luce accesa." } },
            { "@type": "Question", "name": "Quanto costa un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa base è €3 di giorno (€6.50 di notte/festivi). Il costo al km varia da €1.10 a €1.60. Una corsa media in centro costa €8-15. Fiumicino: tariffa fissa €50, Ciampino: €31." } }
          ]
        }),
      },
    ],
  }),
});

const CATEGORIES = [
  {
    title: "Attrazioni",
    subtitle: "I monumenti iconici della Città Eterna",
    image: colosseumImg,
    alt: "Il Colosseo al tramonto a Roma",
    items: [
      { title: "Tour Colosseo, Foro e Palatino", desc: "Visita guidata salta-fila al Colosseo, Foro Romano e Colle Palatino. 2.5 ore, piccolo gruppo.", url: GYG_COLOSSEUM_TOUR, price: "€35" },
      { title: "Colosseo Arena e Sotterranei", desc: "Accesso esclusivo all'arena del Colosseo, al piano sotterraneo e al Foro Romano.", url: GYG_COLOSSEUM_ARENA, price: "€50" },
      { title: "Colosseo Sotterraneo e Roma Antica", desc: "Esplora i sotterranei segreti del Colosseo con guida esperta. 3 ore.", url: GYG_COLOSSEUM_UNDERGROUND, price: "€40" },
    ],
  },
  {
    title: "Tour",
    subtitle: "Tour guidati con salta-fila incluso",
    image: vaticanImg,
    alt: "Tour guidato ai Musei Vaticani",
    items: [
      { title: "Tour Musei Vaticani e Cappella Sistina", desc: "Tour guidato salta-fila ai Musei Vaticani, Cappella Sistina e Basilica.", url: GYG_VATICAN_TOUR, price: "€30" },
      { title: "Vaticano, Sistina e Basilica di San Pietro", desc: "Musei Vaticani, Cappella Sistina e Basilica di San Pietro con guida esperta.", url: GYG_VATICAN_BASILICA, price: "€45" },
      { title: "Gita a Pompei e Costiera Amalfitana", desc: "Escursione giornaliera da Roma a Pompei, Costiera Amalfitana e Sorrento.", url: GYG_POMPEII_DAY_TRIP, price: "€120" },
    ],
  },
  {
    title: "Soggiorno",
    subtitle: "Trova l'hotel perfetto a Roma",
    image: hotelImg,
    alt: "Hotel di lusso a Roma con vista sui tetti",
    items: [
      { title: "Hotel Roma Centro", desc: "Scopri i migliori hotel nel cuore di Roma: zona Termini, Trastevere, Vaticano.", url: GYG_ROME_ALL, price: "" },
      { title: "Hotel Aeroporto Fiumicino", desc: "Hotel comodi vicino all'aeroporto Leonardo da Vinci per partenze e arrivi.", url: GYG_ROME_ALL, price: "" },
      { title: "Transfer Hotel ↔ Aeroporto", desc: "Trasferimento privato dall'aeroporto al tuo hotel a Roma. Autista con cartello.", url: GYG_ROME_TRANSFERS, price: "" },
    ],
  },
  {
    title: "Eventi",
    subtitle: "Esperienze serali e spettacoli",
    image: eventsImg,
    alt: "Serata in una piazza romana con luci",
    items: [
      { title: "Tour Vaticano Salta la Fila", desc: "Vaticano, Cappella Sistina e Piazza San Pietro senza attese.", url: GYG_VATICAN_SKIP_LINE, price: "€35" },
      { title: "Bus Hop-on Hop-off Roma", desc: "Esplora Roma al tuo ritmo con il bus turistico panoramico. Valido fino a 3 giorni.", url: GYG_HOP_ON_BUS, price: "€25" },
      { title: "Tour Vaticano e Piazza San Pietro", desc: "Musei Vaticani, Cappella Sistina e Piazza San Pietro con guida.", url: GYG_VATICAN_SQUARE, price: "€40" },
    ],
  },
  {
    title: "Attività",
    subtitle: "Esperienze gastronomiche e culturali",
    image: activitiesImg,
    alt: "Corso di cucina pasta fresca a Roma",
    items: [
      { title: "Corso Pasta e Tiramisù", desc: "Impara a cucinare pasta e tiramisù in un ristorante locale vicino al Vaticano.", url: GYG_PASTA_CLASS, price: "€55" },
      { title: "Biglietto Vaticano — Salta la Fila", desc: "Ingresso prioritario ai Musei Vaticani e Cappella Sistina. Tutto il giorno.", url: GYG_VATICAN_TICKET, price: "€25" },
      { title: "Tour Colosseo Guidato", desc: "Colosseo, Palatino e Foro Romano con guida esperta e accesso prioritario.", url: GYG_COLOSSEUM_GUIDED, price: "€35" },
    ],
  },
];

function CategoryCard({ cat, index }: { cat: typeof CATEGORIES[number]; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10 items-stretch`}>
      {/* Image */}
      <div className="lg:w-1/2 relative overflow-hidden rounded-sm group">
        <img
          src={cat.image}
          alt={cat.alt}
          className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width={800}
          height={544}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">{cat.title}</h3>
          <p className="text-white/80 text-sm mt-1">{cat.subtitle}</p>
        </div>
      </div>

      {/* Activity cards */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        {cat.items.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card flex items-start gap-4 rounded-sm border border-stone-warm bg-card p-5 sm:p-6 transition-all hover:border-primary/30 hover:editorial-shadow-lg hover:-translate-y-0.5 active:scale-[0.99]"
          >
            <div className="flex-1 min-w-0">
              <h4 className="font-display text-base sm:text-lg font-semibold text-card-foreground group-hover/card:text-primary transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.desc}</p>
              <div className="mt-2.5 flex items-center gap-3">
                {item.price && (
                  <span className="text-sm font-semibold text-primary">Da {item.price}</span>
                )}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Prenota ora
                  <svg className="h-4 w-4 transition-transform group-hover/card:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      <HeroSection
        title="Taxi Roma"
        subtitle="La Guida Completa"
        description="Tutto quello che devi sapere sui taxi a Roma: tariffe ufficiali, numeri utili, trasferimenti aeroporto Fiumicino e come prenotare il tuo taxi."
        ctaText="Prenota un Transfer"
        ctaHref={GYG_ROME_TRANSFERS}
        secondaryCtaText="Vedi Tariffe"
        secondaryCtaHref="/tariffe"
      />

      {/* Info cards — editorial style */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Informazioni<br className="hidden sm:block" /> Essenziali</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
            Roma ha un servizio taxi regolamentato dal Comune. Ecco le informazioni essenziali per spostarsi nella Capitale.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/tariffe" className="group rounded-sm border border-stone-warm bg-card overflow-hidden transition-all hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <div className="overflow-hidden">
              <img src={taxiRomaImg} alt="Taxi nelle strade di Roma" className="h-44 sm:h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={600} height={300} />
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="font-display text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">Tariffe Taxi Roma</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Tariffe ufficiali, supplementi e tariffe fisse per le tratte più comuni a Roma.</p>
            </div>
          </Link>

          <Link to="/fiumicino" className="group rounded-sm border border-stone-warm bg-card overflow-hidden transition-all hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <div className="overflow-hidden">
              <img src={fiumicinoImg} alt="Aeroporto di Fiumicino" className="h-44 sm:h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={600} height={300} />
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="font-display text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">Taxi Roma Fiumicino</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Trasferimenti aeroporto: tariffa fissa, tempi di percorrenza e consigli utili.</p>
            </div>
          </Link>

          <Link to="/numeri" className="group rounded-sm border border-stone-warm bg-card overflow-hidden transition-all hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <div className="h-44 sm:h-52 w-full gold-gradient flex items-center justify-center">
              <span className="text-5xl sm:text-7xl">📞</span>
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="font-display text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">Numeri Taxi Roma</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Tutti i numeri delle radio taxi di Roma per chiamare un taxi rapidamente.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══ HCMC-style Category Sections: Attractions, Tours, Stay, Events, Activities ═══ */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Scopri Roma</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Attrazioni, Tour e Attività</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Prenota le migliori esperienze a Roma con cancellazione gratuita. Tour guidati, biglietti salta-fila, corsi di cucina e molto altro.
            </p>
          </div>

          <div className="flex flex-col gap-14 sm:gap-20">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} index={i} />
            ))}
          </div>

          <div className="mt-14 sm:mt-20 text-center">
            <GetYourGuideCTA text="Scopri Tutte le Esperienze a Roma" url={GYG_ROME_ALL} />
          </div>
        </div>
      </section>

      {/* Why use taxi — editorial numbered grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 sm:mb-16">Perché Prendere un Taxi a Roma?</h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Veloce e Comodo", desc: "Raggiungi qualsiasi punto di Roma senza stress, con aria condizionata e bagagli inclusi." },
              { num: "02", title: "Tariffe Regolamentate", desc: "I taxi romani hanno tariffe fissate dal Comune. Nessuna sorpresa sul prezzo finale." },
              { num: "03", title: "Transfer Aeroporto", desc: "Tariffa fissa €50 da Fiumicino al centro di Roma. Il modo più semplice per arrivare." },
              { num: "04", title: "Disponibili 24/7", desc: "I taxi a Roma operano giorno e notte, festivi inclusi. Sempre a disposizione." },
            ].map((item) => (
              <div key={item.num} className="p-6 sm:p-8 border border-stone-warm bg-card rounded-sm hover:border-primary/30 transition-colors duration-500">
                <div className="text-primary font-display text-sm mb-6 opacity-70">{item.num}.</div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick GYG Activity Grid */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Transfer e Tour<br className="hidden sm:block" /> Più Popolari</h2>
            <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
              I tour e le esperienze più prenotati a Roma. Cancellazione gratuita su tutti.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ActivityCard emoji="🏛️" title="Tour Colosseo, Foro Romano e Palatino" description="Visita guidata con accesso salta-fila. 2.5 ore, piccolo gruppo." gygUrl={GYG_COLOSSEUM_TOUR} price="€35" />
            <ActivityCard emoji="🏟️" title="Musei Vaticani e Cappella Sistina" description="Tour guidato salta-fila ai Musei Vaticani, Cappella Sistina e Basilica di San Pietro." gygUrl={GYG_VATICAN_TOUR} price="€30" />
            <ActivityCard emoji="🎫" title="Biglietto Vaticano — Salta la Fila" description="Ingresso prioritario ai Musei Vaticani e Cappella Sistina. Accesso tutto il giorno." gygUrl={GYG_VATICAN_TICKET} price="€25" />
            <ActivityCard emoji="⚔️" title="Colosseo Sotterraneo e Roma Antica" description="Esplora i sotterranei segreti del Colosseo con una guida esperta. 3 ore." gygUrl={GYG_COLOSSEUM_UNDERGROUND} price="€40" />
            <ActivityCard emoji="🍝" title="Corso Pasta e Tiramisù" description="Impara a cucinare pasta e tiramisù in un ristorante locale vicino al Vaticano." gygUrl={GYG_PASTA_CLASS} price="€55" />
            <ActivityCard emoji="🚌" title="Bus Hop-on Hop-off Roma" description="Esplora Roma al tuo ritmo con il bus turistico panoramico. Valido fino a 3 giorni." gygUrl={GYG_HOP_ON_BUS} price="€25" />
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <GetYourGuideCTA />
          </div>
        </div>
      </section>

      {/* FAQ — Editorial numbered style */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 sm:mb-16">Domande Frequenti</h2>
          <div className="flex flex-col border-t border-stone-warm">
            {[
              { q: "Come prenotare un taxi a Roma?", a: "Puoi prenotare un taxi a Roma chiamando una radio taxi (06.3570, 06.4994, 06.6645), usando un'app come itTaxi o Free Now, oppure prenotando un transfer privato online." },
              { q: "Quanto costa un taxi da Fiumicino a Roma centro?", a: "La tariffa fissa per un taxi da Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50. Questa tariffa è valida per un massimo di 4 passeggeri con bagagli inclusi." },
              { q: "Qual è il numero di telefono per chiamare un taxi a Roma?", a: "I principali numeri sono: Radio Taxi 3570 (06.3570), Samarcanda (06.5551), La Capitale (06.4994), Roma Taxi (06.6645). Disponibili 24 ore su 24." },
              { q: "Come chiamare un taxi a Roma?", a: "Puoi chiamare un taxi a Roma: 1) Per telefono tramite radio taxi, 2) Con l'app itTaxi o Free Now, 3) Da una postazione taxi ufficiale, 4) Fermandone uno per strada se ha la luce accesa." },
              { q: "Quanto costa un taxi a Roma?", a: "La tariffa base è €3 di giorno (€6.50 di notte/festivi). Il costo al km varia da €1.10 a €1.60. Una corsa media in centro costa €8-15. Fiumicino: tariffa fissa €50, Ciampino: €31." },
            ].map((faq, i) => (
              <details key={faq.q} className="group border-b border-stone-warm py-6 sm:py-8">
                <summary className="cursor-pointer list-none flex items-start gap-4 sm:gap-6">
                  <span className="text-xs font-medium text-primary/60 mt-1.5 tabular-nums tracking-widest">{String(i + 1).padStart(2, '0')}.</span>
                  <span className="font-display text-lg sm:text-xl font-semibold text-foreground flex-1 group-hover:text-primary transition-colors">{faq.q}</span>
                  <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 ml-8 sm:ml-12 text-sm text-muted-foreground leading-relaxed max-w-[60ch]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
