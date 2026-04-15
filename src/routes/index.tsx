import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import taxiRomaImg from "@/assets/taxi-roma.jpg";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
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

function Index() {
  return (
    <>
      <SEO
        title="Taxi Roma Fiumicino — Aeroporto Roma Fiumicino Transfer e Tariffe 2026"
        description="Taxi e transfer dall'aeroporto Roma Fiumicino: tariffa fissa €50, numeri radio taxi, prenotazioni online. Guida completa 2026 per turisti e residenti."
        ogTitle="Taxi Roma — Guida Completa ai Taxi a Roma e Fiumicino"
        ogDescription="Tariffe, numeri, prenotazioni taxi Roma. Trasferimenti aeroporto Fiumicino. La guida più completa."
        keywords="taxi roma, aeroporto roma fiumicino, taxi roma fiumicino, aeroporto fiumicino, numero taxi roma, tariffe taxi roma, transfer aeroporto fiumicino, radio taxi roma"
        canonical="https://taxifiumicino.com"
        jsonLd={[
          {
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
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Come prenotare un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "Puoi prenotare un taxi a Roma chiamando una radio taxi (06.3570, 06.4994, 06.6645), usando un'app come itTaxi o Free Now, oppure prenotando un transfer privato online." } },
              { "@type": "Question", "name": "Quanto costa un taxi da Fiumicino a Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa fissa per un taxi da Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50." } },
              { "@type": "Question", "name": "Qual è il numero di telefono per chiamare un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "I principali numeri sono: Radio Taxi 3570 (06.3570), Samarcanda (06.5551), La Capitale (06.4994), Roma Taxi (06.6645)." } },
              { "@type": "Question", "name": "Come chiamare un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "Per telefono tramite radio taxi, con l'app itTaxi o Free Now, da una postazione taxi ufficiale, o fermandone uno per strada." } },
              { "@type": "Question", "name": "Quanto costa un taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa base è €3 di giorno (€6.50 di notte/festivi). Fiumicino: tariffa fissa €50, Ciampino: €31." } }
            ]
          }
        ]}
      />
      <HeroSection
        title="Taxi Roma"
        subtitle="La Guida Completa"
        description="Tutto quello che devi sapere sui taxi a Roma: tariffe ufficiali, numeri utili, trasferimenti aeroporto Fiumicino e come prenotare il tuo taxi."
        ctaText="Prenota un Transfer"
        ctaHref="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher"
        secondaryCtaText="Vedi Tariffe"
        secondaryCtaHref="/tariffe"
      />

      {/* Info cards */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">Informazioni Taxi Roma</h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Roma ha un servizio taxi regolamentato dal Comune. Ecco le informazioni essenziali per spostarsi in taxi nella Capitale.
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/tariffe" className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <img src={taxiRomaImg} alt="Taxi nelle strade di Roma" className="h-36 sm:h-48 w-full object-cover" loading="lazy" width={600} height={300} />
            <div className="p-4 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">Tariffe Taxi Roma</h3>
              <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground">Tariffe ufficiali, supplementi e tariffe fisse per le tratte più comuni a Roma.</p>
            </div>
          </Link>

          <Link to="/fiumicino" className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <img src={fiumicinoImg} alt="Aeroporto di Fiumicino" className="h-36 sm:h-48 w-full object-cover" loading="lazy" width={600} height={300} />
            <div className="p-4 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">Taxi Roma Fiumicino</h3>
              <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground">Trasferimenti aeroporto: tariffa fissa, tempi di percorrenza e consigli utili.</p>
            </div>
          </Link>

          <Link to="/numeri" className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <div className="h-36 sm:h-48 w-full gold-gradient flex items-center justify-center">
              <span className="text-5xl sm:text-7xl">📞</span>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">Numeri Taxi Roma</h3>
              <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground">Tutti i numeri delle radio taxi di Roma per chiamare un taxi rapidamente.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Why use taxi section */}
      <section className="section-warm py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Perché Prendere un Taxi a Roma?</h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "⚡", title: "Veloce e Comodo", desc: "Raggiungi qualsiasi punto di Roma senza stress, con aria condizionata e bagagli inclusi." },
              { emoji: "💰", title: "Tariffe Regolamentate", desc: "I taxi romani hanno tariffe fissate dal Comune. Nessuna sorpresa sul prezzo finale." },
              { emoji: "🛫", title: "Transfer Aeroporto", desc: "Tariffa fissa €50 da Fiumicino al centro di Roma. Il modo più semplice per arrivare." },
              { emoji: "🌙", title: "Disponibili 24/7", desc: "I taxi a Roma operano giorno e notte, festivi inclusi. Sempre a disposizione." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{item.emoji}</div>
                <h3 className="font-display text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GetYourGuide Activities */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">Transfer e Tour Consigliati</h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Prenota i migliori trasferimenti e tour a Roma con cancellazione gratuita.
        </p>

        <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="✈️" title="Transfer Aeroporto Fiumicino" description="Trasferimento privato dall'aeroporto di Fiumicino al centro di Roma." gygUrl="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/" price="€45" />
          <ActivityCard emoji="🏛️" title="Tour Colosseo e Foro Romano" description="Visita guidata del Colosseo, Foro Romano e Palatino. Salta la fila." gygUrl="https://www.getyourguide.com/rome-l33/skip-the-line-colosseum-roman-forum-palatine-hill-t67792/" price="€35" />
          <ActivityCard emoji="🏟️" title="Vaticano — Musei e Cappella Sistina" description="Accesso prioritario ai Musei Vaticani e alla Cappella Sistina." gygUrl="https://www.getyourguide.com/rome-l33/vatican-museums-sistine-chapel-skip-the-line-ticket-t44089/" price="€30" />
          <ActivityCard emoji="🚐" title="Transfer Condiviso Fiumicino" description="Navetta condivisa dall'aeroporto Fiumicino alla stazione Termini." gygUrl="https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/" price="€7" />
          <ActivityCard emoji="🍝" title="Tour Gastronomico Trastevere" description="Scopri i sapori autentici di Roma con un tour gastronomico." gygUrl="https://www.getyourguide.com/rome-l33/trastevere-food-tour-t226/" price="€40" />
          <ActivityCard emoji="🌅" title="Tour Roma di Notte" description="Ammira i monumenti illuminati di Roma in un tour serale." gygUrl="https://www.getyourguide.com/rome-l33/rome-by-night-walking-tour-t392/" price="€25" />
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <GetYourGuideCTA />
        </div>
      </section>

      {/* FAQ SEO Section */}
      <section className="section-warm py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Domande Frequenti — Taxi Roma</h2>
          <div className="space-y-3 sm:space-y-6">
            {[
              { q: "Come prenotare un taxi a Roma?", a: "Puoi prenotare un taxi a Roma chiamando una radio taxi (06.3570, 06.4994, 06.6645), usando un'app come itTaxi o Free Now, oppure prenotando un transfer privato online." },
              { q: "Quanto costa un taxi da Fiumicino a Roma centro?", a: "La tariffa fissa per un taxi da Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50. Questa tariffa è valida per un massimo di 4 passeggeri con bagagli inclusi." },
              { q: "Qual è il numero di telefono per chiamare un taxi a Roma?", a: "I principali numeri sono: Radio Taxi 3570 (06.3570), Samarcanda (06.5551), La Capitale (06.4994), Roma Taxi (06.6645). Disponibili 24 ore su 24." },
              { q: "Come chiamare un taxi a Roma?", a: "Puoi chiamare un taxi a Roma: 1) Per telefono tramite radio taxi, 2) Con l'app itTaxi o Free Now, 3) Da una postazione taxi ufficiale, 4) Fermandone uno per strada se ha la luce accesa." },
              { q: "Quanto costa un taxi a Roma?", a: "La tariffa base è €3 di giorno (€6.50 di notte/festivi). Il costo al km varia da €1.10 a €1.60. Una corsa media in centro costa €8-15. Fiumicino: tariffa fissa €50, Ciampino: €31." },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-border bg-card p-4 sm:p-6">
                <summary className="cursor-pointer font-display text-base sm:text-lg font-semibold text-card-foreground list-none flex items-center justify-between gap-3">
                  <span>{faq.q}</span>
                  <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
