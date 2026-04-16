import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { i18nLinks } from "@/i18n/hreflang";
import {
  GYG_COLOSSEUM_TOUR,
  GYG_COLOSSEUM_UNDERGROUND,
  GYG_POMPEII_DAY_TRIP,
  GYG_VATICAN_TOUR,
  GYG_ROME_TRANSFERS,
  GYG_ROME_ALL,
} from "@/lib/gyg-links";

export const Route = createFileRoute("/app-taxi-roma")({
  component: AppTaxiPage,
  head: () => ({
    links: i18nLinks("/app-taxi-roma", "it"),
    meta: [
      { title: "App Taxi Roma — Le Migliori App per Prenotare un Taxi | TaxiFiumicino.com" },
      { name: "description", content: "Le migliori app per prenotare un taxi a Roma nel 2026: itTaxi (app ufficiale), Free Now, Uber Black. Confronto completo con funzionalità, prezzi, disponibilità e pagamento in-app." },
      { property: "og:title", content: "App Taxi Roma 2026 — itTaxi, Free Now, Uber: Quale Scegliere?" },
      { property: "og:description", content: "Confronto completo delle app taxi a Roma: itTaxi, Free Now, Uber. Funzionalità, prezzi e quale scegliere." },
      { name: "keywords", content: "app taxi roma, app per taxi roma, ittaxi roma, free now roma, uber roma, prenotare taxi app roma, migliore app taxi roma" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Qual è la migliore app per i taxi a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "itTaxi è l'app ufficiale dei taxi italiani ed è la più usata a Roma. Free Now è un'ottima alternativa europea." } },
            { "@type": "Question", "name": "Uber funziona a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "Uber a Roma offre solo Uber Black (auto con conducente NCC), non UberX. I prezzi sono generalmente più alti dei taxi." } },
            { "@type": "Question", "name": "Si può pagare il taxi con l'app a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "Sì, sia itTaxi che Free Now permettono di pagare direttamente dall'app con carta di credito o debito." } }
          ]
        }),
      },
    ],
  }),
});

const APPS = [
  {
    name: "itTaxi", emoji: "🇮🇹", subtitle: "L'App Ufficiale dei Taxi Italiani", rating: "4.6/5", platforms: "iOS, Android", price: "Gratuita (si paga solo la corsa)",
    pros: ["App ufficiale collegata alle radio taxi", "GPS automatico per la posizione", "Pagamento in-app con carta", "Tracciamento del taxi in tempo reale", "Stima del prezzo prima della corsa", "Disponibile in italiano e inglese"],
    cons: ["Interfaccia un po' datata", "Tempi di attesa lunghi nelle ore di punta"],
  },
  {
    name: "Free Now", emoji: "🚕", subtitle: "Ex mytaxi — App Europea per Taxi e NCC", rating: "4.5/5", platforms: "iOS, Android", price: "Gratuita",
    pros: ["Interfaccia moderna e intuitiva", "Disponibile in tutta Europa", "Pagamento in-app o in contanti", "Scelta tra taxi e auto NCC", "Codici sconto frequenti", "Ottimo servizio clienti"],
    cons: ["Meno taxi disponibili rispetto a itTaxi", "Non tutte le cooperative sono collegate"],
  },
  {
    name: "Uber", emoji: "⬛", subtitle: "Solo Uber Black (NCC) a Roma", rating: "4.4/5", platforms: "iOS, Android", price: "Gratuita (corse da ~€15)",
    pros: ["Interfaccia nota e facile da usare", "Prezzi fissi comunicati prima della corsa", "Auto di alta gamma", "Disponibile in tutto il mondo"],
    cons: ["Solo Uber Black, non taxi tradizionali", "Prezzi più alti dei taxi normali", "Meno disponibilità rispetto ad altre città", "Tempi di attesa variabili"],
  },
];

function AppTaxiPage() {
  return (
    <>
      <HeroSection
        title="App Taxi Roma"
        subtitle="Confronto App 2026"
        description="Le migliori app per prenotare un taxi a Roma: itTaxi, Free Now e Uber a confronto. Quale scegliere per spostarsi nella Capitale?"
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-4">Le 3 Migliori App Taxi a Roma</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Confronto aggiornato delle app per chiamare un taxi a Roma. Vantaggi, svantaggi e quale scegliere.
        </p>

        <div className="space-y-6">
          {APPS.map((app) => (
            <div key={app.name} className="rounded-sm border border-stone-warm bg-card overflow-hidden hover:editorial-shadow-lg transition-shadow">
              <div className="gold-gradient px-6 py-4 flex items-center gap-3">
                <span className="text-3xl">{app.emoji}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-espresso">{app.name}</h3>
                  <p className="text-sm text-espresso/80">{app.subtitle}</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm font-semibold text-espresso">⭐ {app.rating}</div>
                  <div className="text-xs text-espresso/70">{app.platforms}</div>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">✅ Vantaggi</h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {app.pros.map((p) => <li key={p}>• {p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-destructive mb-2">❌ Svantaggi</h4>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {app.cons.map((c) => <li key={c}>• {c}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-warm text-sm text-muted-foreground">
                  <strong>Prezzo:</strong> {app.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-sm section-warm p-7 sm:p-8">
          <h3 className="font-display text-xl font-semibold mb-4">🏆 Quale App Scegliere?</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Per turisti:</strong> Consigliamo <strong>itTaxi</strong> come prima scelta. È l'app ufficiale, collegata alle principali cooperative di Roma. Se itTaxi non trova taxi disponibili, prova <strong>Free Now</strong>.</p>
            <p><strong>Per chi cerca comfort:</strong> <strong>Uber Black</strong> offre auto di alta gamma con autista, a prezzi superiori. Ideale per occasioni speciali.</p>
            <p><strong>Per il transfer aeroporto:</strong> Un <strong>transfer privato prenotato online</strong> è spesso la scelta migliore: prezzo fisso, autista con cartello, nessuna sorpresa.</p>
          </div>
        </div>

        <div className="mt-8 rounded-sm border border-stone-warm bg-card p-7 sm:p-8">
          <h3 className="font-display text-xl font-semibold mb-4">Non Vuoi Usare un'App?</h3>
          <p className="text-sm text-muted-foreground mb-4">Puoi sempre chiamare un taxi a Roma per telefono o trovarne uno alle postazioni ufficiali.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/numeri" className="inline-flex items-center gap-2 rounded-sm border border-stone-warm px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">📞 Numeri Radio Taxi</Link>
            <Link to="/come-chiamare-taxi-roma" className="inline-flex items-center gap-2 rounded-sm border border-stone-warm px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">🚕 Come Chiamare un Taxi</Link>
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Prenota un Transfer<br className="hidden sm:block" /> Più Comodo di Qualsiasi App</h2>
            <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
              Autista con cartello, prezzo fisso, cancellazione gratuita.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ActivityCard emoji="✈️" title="Transfer Aeroporto Fiumicino" description="Trova e prenota il trasferimento dall'aeroporto di Fiumicino al centro di Roma." gygUrl={GYG_ROME_TRANSFERS} />
            <ActivityCard emoji="🏛️" title="Tour Colosseo Salta la Fila" description="Visita guidata Colosseo, Foro Romano e Palatino. Accesso prioritario." gygUrl={GYG_COLOSSEUM_TOUR} price="€35" />
            <ActivityCard emoji="🏟️" title="Tour Musei Vaticani e Sistina" description="Tour guidato salta-fila ai Musei Vaticani, Cappella Sistina e Basilica." gygUrl={GYG_VATICAN_TOUR} price="€30" />
            <ActivityCard emoji="⚔️" title="Colosseo Sotterraneo" description="Esplora i sotterranei segreti del Colosseo con guida esperta. 3 ore." gygUrl={GYG_COLOSSEUM_UNDERGROUND} price="€40" />
            <ActivityCard emoji="🌋" title="Gita Pompei da Roma" description="Escursione a Pompei, Costiera Amalfitana e Sorrento. Giornata intera." gygUrl={GYG_POMPEII_DAY_TRIP} price="€120" />
            <ActivityCard emoji="✈️" title="Tutti i Transfer Roma" description="Cerca tra tutti i transfer e tour disponibili a Roma." gygUrl={GYG_ROME_ALL} />
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <GetYourGuideCTA text="Vedi Tutti i Transfer e Tour" url={GYG_ROME_ALL} />
          </div>
        </div>
      </section>
    </>
  );
}
