import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";

export const Route = createFileRoute("/app-taxi-roma")({
  component: AppTaxiPage,
  head: () => ({
    meta: [
      { title: "App Taxi Roma — Le Migliori App per Prenotare un Taxi | TaxiFiumicino.com" },
      { name: "description", content: "Le migliori app per prenotare un taxi a Roma nel 2026: itTaxi (app ufficiale), Free Now, Uber Black. Confronto completo con funzionalità, prezzi, disponibilità, pagamento in-app e quale scegliere per turisti e residenti." },
      { property: "og:title", content: "App Taxi Roma 2026 — itTaxi, Free Now, Uber: Quale Scegliere?" },
      { property: "og:description", content: "Confronto completo delle app taxi a Roma: itTaxi, Free Now, Uber. Funzionalità, prezzi e quale scegliere." },
      { name: "keywords", content: "app taxi roma, app per taxi roma, ittaxi roma, free now roma, uber roma, prenotare taxi app roma, migliore app taxi roma, taxi app italia, chiamare taxi con app, uber black roma, ittaxi come funziona" },
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
              "name": "Qual è la migliore app per i taxi a Roma?",
              "acceptedAnswer": { "@type": "Answer", "text": "itTaxi è l'app ufficiale dei taxi italiani ed è la più usata a Roma. Collega direttamente alle cooperative radio taxi della città. Free Now è un'ottima alternativa europea." }
            },
            {
              "@type": "Question",
              "name": "Uber funziona a Roma?",
              "acceptedAnswer": { "@type": "Answer", "text": "Uber a Roma offre solo il servizio Uber Black (auto con conducente NCC), non UberX. I prezzi sono generalmente più alti dei taxi tradizionali." }
            },
            {
              "@type": "Question",
              "name": "Si può pagare il taxi con l'app a Roma?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sì, sia itTaxi che Free Now permettono di pagare direttamente dall'app con carta di credito o debito. È comodo e sicuro." }
            }
          ]
        }),
      },
    ],
  }),
});

function AppTaxiPage() {
  const apps = [
    {
      name: "itTaxi",
      emoji: "🇮🇹",
      subtitle: "L'App Ufficiale dei Taxi Italiani",
      rating: "4.6/5",
      pros: ["App ufficiale collegata alle radio taxi", "GPS automatico per la posizione", "Pagamento in-app con carta", "Tracciamento del taxi in tempo reale", "Stima del prezzo prima della corsa", "Disponibile in italiano e inglese"],
      cons: ["Interfaccia un po' datata", "A volte tempi di attesa lunghi nelle ore di punta"],
      platforms: "iOS, Android",
      price: "Gratuita (si paga solo la corsa taxi)",
    },
    {
      name: "Free Now",
      emoji: "🚕",
      subtitle: "Ex mytaxi — App Europea per Taxi e NCC",
      rating: "4.5/5",
      pros: ["Interfaccia moderna e intuitiva", "Disponibile in tutta Europa", "Pagamento in-app o in contanti", "Scelta tra taxi e auto NCC", "Codici sconto frequenti", "Ottimo servizio clienti"],
      cons: ["Meno taxi disponibili rispetto a itTaxi", "Non tutte le cooperative sono collegate"],
      platforms: "iOS, Android",
      price: "Gratuita",
    },
    {
      name: "Uber",
      emoji: "⬛",
      subtitle: "Solo Uber Black (NCC) a Roma",
      rating: "4.4/5",
      pros: ["Interfaccia nota e facile da usare", "Prezzi fissi comunicati prima della corsa", "Auto di alta gamma", "Disponibile in tutto il mondo"],
      cons: ["Solo Uber Black (NCC), non taxi tradizionali", "Prezzi più alti dei taxi normali", "Meno disponibilità rispetto ad altre città", "Tempi di attesa variabili"],
      platforms: "iOS, Android",
      price: "Gratuita (corse da ~€15)",
    },
  ];

  return (
    <>
      <HeroSection
        title="App Taxi Roma"
        subtitle="Confronto App 2026"
        description="Le migliori app per prenotare un taxi a Roma: itTaxi, Free Now e Uber a confronto. Quale scegliere per spostarsi nella Capitale?"
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-4 text-center">Le 3 Migliori App Taxi a Roma</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Confronto aggiornato delle app per chiamare un taxi a Roma. Vantaggi, svantaggi e quale scegliere.
        </p>

        <div className="space-y-8">
          {apps.map((app) => (
            <div key={app.name} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="gold-gradient px-6 py-4 flex items-center gap-3">
                <span className="text-3xl">{app.emoji}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{app.name}</h3>
                  <p className="text-sm text-primary-foreground/80">{app.subtitle}</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm font-bold text-primary-foreground">⭐ {app.rating}</div>
                  <div className="text-xs text-primary-foreground/70">{app.platforms}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">✅ Vantaggi</h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {app.pros.map((pro) => <li key={pro}>• {pro}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-destructive mb-2">❌ Svantaggi</h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {app.cons.map((con) => <li key={con}>• {con}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                  <strong>Prezzo:</strong> {app.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">🏆 Quale App Scegliere?</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong>Per turisti:</strong> Consigliamo <strong>itTaxi</strong> come prima scelta. È l'app ufficiale, collegata alle principali cooperative di Roma, e garantisce un taxi regolare con tassametro. Se itTaxi non trova taxi disponibili, prova <strong>Free Now</strong> come alternativa.
            </p>
            <p>
              <strong>Per chi cerca comfort:</strong> <strong>Uber Black</strong> offre auto di alta gamma con autista, ma a prezzi superiori. Ideale per occasioni speciali o trasferimenti business.
            </p>
            <p>
              <strong>Per il transfer aeroporto:</strong> Se arrivi a Fiumicino, un <strong>transfer privato prenotato online</strong> è spesso la scelta migliore: prezzo fisso, autista che ti aspetta, nessuna sorpresa.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8">
          <h3 className="font-display text-xl font-semibold mb-4">Non Vuoi Usare un'App?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Puoi sempre chiamare un taxi a Roma per telefono o trovarne uno alle postazioni ufficiali.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/numeri" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
              📞 Numeri Radio Taxi
            </Link>
            <Link to="/come-chiamare-taxi-roma" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
              🚕 Come Chiamare un Taxi
            </Link>
          </div>
        </div>

        {/* Affiliate Section */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">Prenota un Transfer — Più Comodo di Qualsiasi App</h2>
        <p className="text-muted-foreground mb-8">Un autista ti aspetta con cartello al tuo nome. Prezzo fisso, cancellazione gratuita, niente attese.</p>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🚗" title="Transfer Privato Fiumicino" description="Dall'aeroporto Fiumicino al tuo hotel. Autista professionale, veicolo con A/C, prezzo fisso." gygUrl="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/" price="€45" />
          <ActivityCard emoji="🚐" title="Navetta Condivisa Fiumicino" description="Navetta economica dall'aeroporto alla stazione Termini. Affidabile e puntuale." gygUrl="https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/" price="€7" />
          <ActivityCard emoji="🚕" title="Transfer Ciampino — Roma" description="Transfer privato per i voli Ryanair e Wizz Air. Dall'aeroporto di Ciampino al centro." gygUrl="https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/" price="€35" />
          <ActivityCard emoji="🏛️" title="Tour Colosseo Salta la Fila" description="Visita guidata Colosseo, Foro Romano e Palatino. Accesso prioritario senza code." gygUrl="https://www.getyourguide.com/rome-l33/skip-the-line-colosseum-roman-forum-palatine-hill-t67792/" price="€35" />
          <ActivityCard emoji="🌅" title="Tour Roma di Notte" description="Ammira i monumenti illuminati di Roma in un tour serale indimenticabile." gygUrl="https://www.getyourguide.com/rome-l33/rome-by-night-walking-tour-t392/" price="€25" />
          <ActivityCard emoji="👨‍👩‍👧‍👦" title="Transfer per Famiglie" description="Minivan per famiglie con seggiolini auto. Dall'aeroporto al tuo alloggio in totale comfort." gygUrl="https://www.getyourguide.com/rome-l33/rome-private-transfer-from-to-fiumicino-airport-t676074/" price="€55" />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Preferisci prenotare online un transfer garantito?</p>
          <GetYourGuideCTA text="Vedi Tutti i Transfer e Tour" />
        </div>
      </section>
    </>
  );
}
