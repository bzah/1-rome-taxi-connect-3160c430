import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { i18nLinks } from "@/i18n/hreflang";
import { RomeDiscoverGrid, ROME_TRANSFERS, ROME_ATTRACTIONS, ROME_TOURS } from "@/components/RomeDiscoverSection";
import { GYG_ROME_ALL } from "@/lib/gyg-links";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";

export const Route = createFileRoute("/fiumicino")({
  component: FiumicinoPage,
  head: () => ({
    links: i18nLinks("/fiumicino", "it"),
    meta: [
      { title: "Aeroporto Roma Fiumicino — Taxi, Transfer e Guida Completa 2026 | TaxiFiumicino.com" },
      { name: "description", content: "Aeroporto Roma Fiumicino (Leonardo da Vinci): taxi tariffa fissa €50, transfer privati, come arrivare a Roma centro, Terminal, parcheggio e informazioni utili." },
      { property: "og:title", content: "Aeroporto Roma Fiumicino — Taxi e Transfer Completo" },
      { property: "og:description", content: "Guida completa all'aeroporto di Roma Fiumicino: taxi a tariffa fissa €50, transfer privati, tempi e consigli." },
      { name: "keywords", content: "aeroporto roma fiumicino, aeroporto fiumicino, fiumicino aeroporto, aeroporto di roma fiumicino leonardo da vinci, aeroporto fiumicino roma, taxi aeroporto fiumicino, transfer aeroporto fiumicino, parcheggio fiumicino, come arrivare a fiumicino" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Quanto costa un taxi dall'aeroporto di Roma Fiumicino al centro?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa fissa per un taxi dall'aeroporto di Roma Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50, valida per max 4 passeggeri con bagagli inclusi." } },
            { "@type": "Question", "name": "Dove trovare i taxi all'aeroporto di Roma Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "I taxi ufficiali si trovano all'uscita degli Arrivi ai Terminal 1 e 3 dell'aeroporto di Roma Fiumicino. Segui i cartelli 'Taxi' e mettiti in fila alla postazione ufficiale." } },
            { "@type": "Question", "name": "Quanto tempo ci vuole dall'aeroporto Fiumicino a Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "Il tragitto in taxi dall'aeroporto di Roma Fiumicino al centro città dura circa 30-50 minuti. Nelle ore di punta può arrivare a 60-75 minuti." } },
            { "@type": "Question", "name": "Quanti terminal ha l'aeroporto di Roma Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "L'aeroporto di Roma Fiumicino ha 4 terminal: T1 (voli nazionali e Schengen), T2 (temporaneamente chiuso), T3 (voli internazionali, il più grande) e T5 (voli USA e Israele con controlli extra)." } },
            { "@type": "Question", "name": "Come arrivare dall'aeroporto di Fiumicino a Roma Termini?", "acceptedAnswer": { "@type": "Answer", "text": "Dall'aeroporto di Roma Fiumicino a Roma Termini puoi prendere: il Leonardo Express (treno diretto, 32 min, €14), un taxi a tariffa fissa (€50), un transfer privato, o il bus navetta (€5-7, circa 60 min)." } }
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Airport",
          "name": "Aeroporto di Roma Fiumicino – Leonardo da Vinci",
          "alternateName": "FCO",
          "iataCode": "FCO",
          "url": "https://www.adr.it/fiumicino",
          "address": { "@type": "PostalAddress", "streetAddress": "Via dell'Aeroporto di Fiumicino, 320", "addressLocality": "Fiumicino", "addressRegion": "Lazio", "postalCode": "00054", "addressCountry": "IT" },
          "geo": { "@type": "GeoCoordinates", "latitude": 41.8003, "longitude": 12.2389 }
        }),
      },
    ],
  }),
});

function FiumicinoPage() {
  return (
    <>
      <HeroSection
        title="Aeroporto Roma Fiumicino"
        subtitle="Leonardo da Vinci (FCO)"
        description="Guida completa all'aeroporto di Roma Fiumicino: taxi a tariffa fissa €50, transfer privati, Leonardo Express, terminal e tutte le informazioni per raggiungere Roma centro."
        ctaText="Scopri Tour e Attività a Roma"
        ctaHref="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher"
        image={fiumicinoImg}
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 sm:px-8">
        {/* Intro */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Informazioni<br className="hidden sm:block" /> Generali</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Il più grande aeroporto d'Italia, a 30 km dal centro di Roma.
          </p>
        </div>

        <div className="text-muted-foreground space-y-5 text-base leading-relaxed mb-16">
          <p>
            L'<strong className="text-foreground">aeroporto di Roma Fiumicino</strong> (codice IATA: FCO), intitolato a Leonardo da Vinci, è il principale scalo aeroportuale d'Italia e il più grande del Lazio. Situato a circa 30 km a sud-ovest del centro di Roma, gestisce oltre 40 milioni di passeggeri all'anno.
          </p>
        </div>

        {/* Terminal info */}
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-8">I Terminal</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { icon: "🛫", name: "Terminal 1", desc: "Voli nazionali e Schengen. Compagnie: Alitalia (domestici), easyJet, Vueling e altre low-cost europee." },
            { icon: "🌍", name: "Terminal 3", desc: "Il terminal principale per voli internazionali. Compagnie tradizionali, duty-free, ristoranti e servizi premium." },
            { icon: "🇺🇸", name: "Terminal 5", desc: "Dedicato ai voli per USA e Israele con controlli di sicurezza aggiuntivi. Check-in e imbarco separati." },
            { icon: "🚂", name: "Stazione Ferroviaria", desc: "Tra Terminal 1 e 3. Da qui partono il Leonardo Express per Termini e i treni regionali." },
          ].map((t, i) => (
            <div key={t.name} className="rounded-sm border border-stone-warm bg-card p-7 hover:border-primary/30 transition-colors duration-500">
              <div className="flex items-start gap-4">
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <span className="text-xs text-primary/60 font-display tracking-widest">{String(i + 1).padStart(2, '0')}.</span>
                  <h4 className="font-display text-lg font-semibold mt-0.5">{t.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Taxi section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-20 mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Taxi dall'Aeroporto<br className="hidden sm:block" /> Fiumicino</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Tariffa fissa €50 per il centro di Roma.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { icon: "🚕", title: "Dove Trovare i Taxi", desc: "All'uscita degli Arrivi, Terminal 1 e 3. Segui i cartelli 'Taxi' e mettiti in fila alla postazione ufficiale. Non accettare mai passaggi da abusivi." },
            { icon: "⏱️", title: "Tempi di Percorrenza", desc: "Fiumicino — Roma centro: circa 30-50 minuti. Nelle ore di punta (7-10, 17-20) può arrivare a 60-75 minuti." },
            { icon: "💶", title: "Tariffa Fissa €50", desc: "Valida per destinazioni dentro le Mura Aureliane, fino a 4 passeggeri, bagagli inclusi. Comunica la tariffa fissa prima di partire." },
            { icon: "💳", title: "Pagamento", desc: "I taxi accettano contanti e carte di credito/debito. Per legge, il POS deve essere funzionante. Anche Apple Pay." },
          ].map((item) => (
            <div key={item.title} className="rounded-sm border border-stone-warm bg-card p-7 hover:border-primary/30 transition-colors duration-500">
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Transport comparison table */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-20 mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Come Arrivare<br className="hidden sm:block" /> a Roma</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Tutte le opzioni di trasporto dall'aeroporto al centro città.
          </p>
        </div>

        <div className="overflow-hidden rounded-sm border border-stone-warm">
          <table className="w-full text-sm">
            <thead className="bg-espresso text-linen">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-xs uppercase tracking-widest">Mezzo</th>
                <th className="px-6 py-4 text-center font-semibold text-xs uppercase tracking-widest">Prezzo</th>
                <th className="px-6 py-4 text-center font-semibold text-xs uppercase tracking-widest">Durata</th>
                <th className="px-6 py-4 text-center font-semibold text-xs uppercase tracking-widest hidden sm:table-cell">Destinazione</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-warm">
              {[
                ["🚕 Taxi (tariffa fissa)", "€50", "30-50 min", "Centro Roma"],
                ["🚗 Transfer privato", "Da €45", "30-50 min", "Qualsiasi indirizzo"],
                ["🚄 Leonardo Express", "€14", "32 min", "Roma Termini"],
                ["🚆 Treno regionale FL1", "€8", "45-60 min", "Trastevere, Ostiense"],
                ["🚐 Bus navetta", "€5-7", "50-75 min", "Roma Termini"],
                ["🚐 Navetta condivisa", "Da €7", "45-60 min", "Roma Termini"],
              ].map(([mezzo, prezzo, durata, dest]) => (
                <tr key={mezzo} className="hover:bg-accent/40 transition-colors">
                  <td className="px-6 py-3.5 font-medium">{mezzo}</td>
                  <td className="px-6 py-3.5 text-center text-primary font-semibold">{prezzo}</td>
                  <td className="px-6 py-3.5 text-center">{durata}</td>
                  <td className="px-6 py-3.5 text-center hidden sm:table-cell">{dest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Transfer booking */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-20 mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Prenota Online</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Transfer privato o condiviso, cancellazione gratuita.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🏛️" title="Tour Colosseo, Foro e Palatino" description="Visita guidata salta-fila al Colosseo, Foro Romano e Palatino. 2.5 ore, piccolo gruppo." gygUrl="https://www.getyourguide.com/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/" price="€35" />
          <ActivityCard emoji="🏟️" title="Tour Musei Vaticani e Sistina" description="Tour guidato salta-fila ai Musei Vaticani, Cappella Sistina e Basilica." gygUrl="https://www.getyourguide.com/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/" price="€30" />
          <ActivityCard emoji="🌋" title="Gita Pompei e Costiera Amalfitana" description="Escursione da Roma a Pompei, Costiera Amalfitana e Sorrento. Giornata intera." gygUrl="https://www.getyourguide.com/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/" price="€120" />
        </div>

        <div className="mt-14 text-center">
          <GetYourGuideCTA text="Tutti i Tour e Attività a Roma" url="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>

        {/* Leonardo Express & Parking */}
        <div className="mt-20 space-y-6">
          <div className="rounded-sm border border-stone-warm bg-card p-8">
            <h3 className="font-display text-xl font-semibold mb-5">🚄 Leonardo Express</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Treno diretto Fiumicino — Roma Termini in 32 minuti, senza fermate. Ogni 15 minuti dalle 6:23 alle 23:23.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                ["Biglietto", "€14"],
                ["Frequenza", "Ogni 15 min"],
                ["Durata", "32 min"],
                ["Orari", "6:23 — 23:23"],
              ].map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
                  <div className="font-semibold text-primary">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-stone-warm bg-card p-8">
            <h3 className="font-display text-xl font-semibold mb-5">🅿️ Parcheggio Aeroporto</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Diverse opzioni dal parcheggio economico alla lunga sosta. Prenota online su adr.it per risparmiare fino al 40%.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                ["Lunga Sosta", "Da €9/giorno"],
                ["Multipiano", "Da €24/giorno"],
                ["Executive", "Da €35/giorno"],
              ].map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
                  <div className="font-semibold text-primary">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deep SEO content */}
        <div className="mt-16 rounded-sm border border-stone-warm bg-card p-8">
          <h3 className="font-display text-xl font-semibold mb-5">Informazioni Utili</h3>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              L'<strong className="text-foreground">aeroporto Roma Fiumicino Leonardo da Vinci</strong> (FCO) è il più importante aeroporto italiano e tra i più trafficati d'Europa. Inaugurato nel 1961, è stato più volte premiato come miglior aeroporto europeo.
            </p>
            <p>
              Per destinazioni fuori le Mura Aureliane come EUR, zona Tiburtina o periferia, il taxi funziona con tassametro, con costi tra €55 e €80 a seconda della distanza e del traffico.
            </p>
          </div>
        </div>

        {/* Cross links */}
        <div className="mt-14 flex flex-wrap gap-3 justify-center">
          {[
            { to: "/aeroporto-fiumicino-roma-termini", label: "🚄 Fiumicino — Roma Termini" },
            { to: "/aeroporto-fiumicino-roma-centro", label: "🏛️ Fiumicino — Roma Centro" },
            { to: "/taxi-ciampino", label: "✈️ Taxi Ciampino" },
            { to: "/tariffe", label: "💰 Tariffe Taxi Roma" },
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
        subtitle="Transfer, attrazioni e tour con cancellazione gratuita. Prenota online e risparmia."
        categories={[ROME_TRANSFERS, ROME_ATTRACTIONS, ROME_TOURS]}
        ctaUrl={GYG_ROME_ALL}
        ctaText="Vedi Tutte le Esperienze a Roma"
      />
    </>
  );
}
