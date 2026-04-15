import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";

export const Route = createFileRoute("/fiumicino")({
  component: FiumicinoPage,
  head: () => ({
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
            {
              "@type": "Question",
              "name": "Quanto costa un taxi dall'aeroporto di Roma Fiumicino al centro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La tariffa fissa per un taxi dall'aeroporto di Roma Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50, valida per max 4 passeggeri con bagagli inclusi."
              }
            },
            {
              "@type": "Question",
              "name": "Dove trovare i taxi all'aeroporto di Roma Fiumicino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I taxi ufficiali si trovano all'uscita degli Arrivi ai Terminal 1 e 3 dell'aeroporto di Roma Fiumicino. Segui i cartelli 'Taxi' e mettiti in fila alla postazione ufficiale."
              }
            },
            {
              "@type": "Question",
              "name": "Quanto tempo ci vuole dall'aeroporto Fiumicino a Roma centro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Il tragitto in taxi dall'aeroporto di Roma Fiumicino al centro città dura circa 30-50 minuti. Nelle ore di punta può arrivare a 60-75 minuti."
              }
            },
            {
              "@type": "Question",
              "name": "Quanti terminal ha l'aeroporto di Roma Fiumicino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'aeroporto di Roma Fiumicino ha 4 terminal: T1 (voli nazionali e Schengen), T2 (temporaneamente chiuso), T3 (voli internazionali, il più grande) e T5 (voli USA e Israele con controlli extra)."
              }
            },
            {
              "@type": "Question",
              "name": "Come arrivare dall'aeroporto di Fiumicino a Roma Termini?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dall'aeroporto di Roma Fiumicino a Roma Termini puoi prendere: il Leonardo Express (treno diretto, 32 min, €14), un taxi a tariffa fissa (€50), un transfer privato, o il bus navetta (€5-7, circa 60 min)."
              }
            }
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
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via dell'Aeroporto di Fiumicino, 320",
            "addressLocality": "Fiumicino",
            "addressRegion": "Lazio",
            "postalCode": "00054",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.8003,
            "longitude": 12.2389
          }
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
        ctaText="Prenota Transfer Privato"
        ctaHref="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/?partner_id=0IQTGX8&utm_medium=online_publisher"
        image={fiumicinoImg}
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">Aeroporto di Roma Fiumicino — Informazioni Generali</h2>

        <div className="prose prose-sm max-w-none text-foreground space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'<strong>aeroporto di Roma Fiumicino</strong> (codice IATA: FCO), intitolato a Leonardo da Vinci, è il principale scalo aeroportuale d'Italia e il più grande del Lazio. Situato a circa 30 km a sud-ovest del centro di Roma, l'<strong>aeroporto Roma Fiumicino</strong> gestisce oltre 40 milioni di passeggeri all'anno, collegando la Capitale con destinazioni in tutto il mondo.
          </p>

          {/* Terminal info */}
          <h3 className="font-display text-2xl font-bold mt-12 mb-6">I Terminal dell'Aeroporto Roma Fiumicino</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">🛫</div>
              <h4 className="font-display text-lg font-semibold">Terminal 1</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Voli nazionali e Schengen. Compagnie: Alitalia (voli domestici), easyJet, Vueling, e altre low-cost europee. Collegato direttamente alla stazione ferroviaria.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="font-display text-lg font-semibold">Terminal 3</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Il terminal principale per voli internazionali. Ospita la maggior parte delle compagnie aeree tradizionali. Area duty-free, ristoranti, e servizi premium.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">🇺🇸</div>
              <h4 className="font-display text-lg font-semibold">Terminal 5</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Dedicato ai voli per USA e Israele con controlli di sicurezza aggiuntivi. Check-in e imbarco separati per queste destinazioni.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">🚂</div>
              <h4 className="font-display text-lg font-semibold">Stazione Ferroviaria</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Situata tra il Terminal 1 e il Terminal 3. Da qui partono il Leonardo Express per Termini e i treni regionali per le stazioni di Roma.
              </p>
            </div>
          </div>
        </div>

        {/* Taxi section - key SEO content */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-8">Taxi dall'Aeroporto Roma Fiumicino</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">🚕</div>
            <h3 className="font-display text-lg font-semibold">Dove Trovare i Taxi</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I taxi ufficiali dell'<strong>aeroporto Roma Fiumicino</strong> si trovano all'uscita degli Arrivi, ai Terminal 1 e 3. Segui i cartelli "Taxi" e mettiti in fila alla postazione ufficiale. Non accettare mai passaggi da abusivi.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="font-display text-lg font-semibold">Tempi di Percorrenza</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Il tragitto <strong>aeroporto Fiumicino — Roma centro</strong> dura circa 30-50 minuti. Nelle ore di punta (7-10, 17-20) può arrivare fino a 60-75 minuti via autostrada Roma-Fiumicino.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">💶</div>
            <h3 className="font-display text-lg font-semibold">Tariffa Fissa €50</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              La tariffa fissa di <strong>€50</strong> dal <strong>aeroporto di Roma Fiumicino</strong> è valida per destinazioni dentro le Mura Aureliane, fino a 4 passeggeri, bagagli inclusi. Comunica al tassista che vuoi la tariffa fissa prima di partire.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="font-display text-lg font-semibold">Pagamento</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I taxi di Roma accettano contanti e carte di credito/debito. Per legge, il POS deve essere funzionante. Puoi anche pagare con app contactless come Apple Pay.
            </p>
          </div>
        </div>

        {/* How to get to Rome */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">Come Arrivare dall'Aeroporto di Fiumicino a Roma</h2>
        <p className="text-muted-foreground mb-8">Tutte le opzioni di trasporto dall'<strong>aeroporto Roma Fiumicino</strong> al centro città.</p>

        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="gold-gradient text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Mezzo</th>
                <th className="px-6 py-4 text-center font-semibold">Prezzo</th>
                <th className="px-6 py-4 text-center font-semibold">Durata</th>
                <th className="px-6 py-4 text-center font-semibold hidden sm:table-cell">Destinazione</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["🚕 Taxi (tariffa fissa)", "€50", "30-50 min", "Centro Roma (Mura Aureliane)"],
                ["🚗 Transfer privato", "Da €45", "30-50 min", "Qualsiasi indirizzo"],
                ["🚄 Leonardo Express", "€14", "32 min", "Roma Termini"],
                ["🚆 Treno regionale FL1", "€8", "45-60 min", "Trastevere, Ostiense, Tiburtina"],
                ["🚐 Bus navetta", "€5-7", "50-75 min", "Roma Termini"],
                ["🚐 Navetta condivisa", "Da €7", "45-60 min", "Roma Termini"],
              ].map(([mezzo, prezzo, durata, dest]) => (
                <tr key={mezzo} className="hover:bg-accent/30 transition-colors">
                  <td className="px-6 py-3.5 font-medium">{mezzo}</td>
                  <td className="px-6 py-3.5 text-center">{prezzo}</td>
                  <td className="px-6 py-3.5 text-center">{durata}</td>
                  <td className="px-6 py-3.5 text-center hidden sm:table-cell">{dest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Transfer options */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">Transfer Aeroporto Roma Fiumicino — Prenota Online</h2>
        <p className="text-muted-foreground mb-8">Prenota online un transfer privato o condiviso dall'<strong>aeroporto di Roma Fiumicino</strong> per un'esperienza senza stress.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            emoji="🚗"
            title="Transfer Privato Fiumicino — Roma"
            description="Autista privato con cartello al tuo nome all'aeroporto di Roma Fiumicino. Veicolo moderno con aria condizionata. Cancellazione gratuita fino a 24h prima."
            gygUrl="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/"
            price="€45"
          />
          <ActivityCard
            emoji="🚐"
            title="Navetta Condivisa Fiumicino — Termini"
            description="Navetta economica dall'aeroporto di Fiumicino alla stazione Termini. Partenze frequenti, prezzo imbattibile per budget travelers."
            gygUrl="https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/"
            price="€7"
          />
          <ActivityCard
            emoji="🚐"
            title="Transfer Privato per Gruppi"
            description="Minivan per famiglie o gruppi fino a 8 persone. Dall'aeroporto Fiumicino al tuo hotel a Roma. Seggiolini disponibili su richiesta."
            gygUrl="https://www.getyourguide.com/rome-l33/rome-private-transfer-from-to-fiumicino-airport-t676074/"
            price="€55"
          />
        </div>

        <div className="mt-12 text-center">
          <GetYourGuideCTA text="Tutti i Transfer dall'Aeroporto Fiumicino" url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>

        {/* Leonardo Express section */}
        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">🚄 Leonardo Express — Treno Aeroporto Fiumicino Roma Termini</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Il <strong>Leonardo Express</strong> è il treno diretto che collega l'<strong>aeroporto di Roma Fiumicino</strong> alla stazione Roma Termini in soli 32 minuti, senza fermate intermedie. Parte ogni 15 minuti dalle 6:23 alle 23:23.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong>Biglietto:</strong> €14 (acquistabile online, in biglietteria o alle macchinette)</li>
            <li>• <strong>Orari:</strong> Dalle 6:23 alle 23:23, ogni 15 minuti</li>
            <li>• <strong>Durata:</strong> 32 minuti diretti senza fermate</li>
            <li>• <strong>Stazione a Fiumicino:</strong> Tra Terminal 1 e Terminal 3, raggiungibile a piedi</li>
          </ul>
        </div>

        {/* Parcheggio section */}
        <div className="mt-8 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">🅿️ Parcheggio Aeroporto Roma Fiumicino</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            L'<strong>aeroporto di Roma Fiumicino</strong> offre diverse opzioni di parcheggio: dal parcheggio a lunga sosta (Lunga Sosta, da €9/giorno) ai parcheggi coperti vicino ai terminal (da €24/giorno). Prenota online per risparmiare fino al 40%.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong>Lunga Sosta:</strong> Da €9/giorno — navetta gratuita per i terminal</li>
            <li>• <strong>Parcheggio Multipiano:</strong> Da €24/giorno — a pochi passi dai terminal</li>
            <li>• <strong>Parcheggio Executive:</strong> Da €35/giorno — il più vicino alle partenze</li>
            <li>• <strong>Consiglio:</strong> Prenota online su adr.it per tariffe scontate</li>
          </ul>
        </div>

        {/* Deep SEO content */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8">
          <h3 className="font-display text-xl font-semibold mb-4">Informazioni Utili sull'Aeroporto Roma Fiumicino</h3>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              L'<strong>aeroporto Roma Fiumicino Leonardo da Vinci</strong> (FCO) è il più importante aeroporto italiano e tra i più trafficati d'Europa. Inaugurato nel 1961, l'aeroporto è stato più volte premiato come miglior aeroporto europeo per qualità dei servizi.
            </p>
            <p>
              L'<strong>aeroporto di Roma Fiumicino</strong> si trova nel comune di Fiumicino, a circa 30 km dal centro di Roma. È collegato alla capitale tramite autostrada (Roma-Fiumicino), ferrovia (Leonardo Express e treni regionali FL1), autobus e taxi. La tariffa fissa del taxi dall'aeroporto al centro storico di Roma è di €50.
            </p>
            <p>
              Per destinazioni fuori le Mura Aureliane come EUR, zona Tiburtina o periferia, il taxi dall'<strong>aeroporto Fiumicino</strong> funziona con tassametro, con costi che variano tra €55 e €80 a seconda della distanza e del traffico.
            </p>
          </div>
        </div>

        {/* Cross links */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <Link to="/aeroporto-fiumicino-roma-termini" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            🚄 Fiumicino — Roma Termini
          </Link>
          <Link to="/aeroporto-fiumicino-roma-centro" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            🏛️ Fiumicino — Roma Centro
          </Link>
          <Link to="/taxi-ciampino" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            ✈️ Taxi Ciampino
          </Link>
          <Link to="/tariffe" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            💰 Tariffe Taxi Roma
          </Link>
        </div>
      </section>
    </>
  );
}
