import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { hreflangLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/aeroporti-di-roma")({
  component: AeroportiDiRomaPage,
  head: () => ({
    links: hreflangLinks("/aeroporti-di-roma"),
    meta: [
      { title: "Aeroporti di Roma 2026 — Fiumicino e Ciampino: Guida Completa | TaxiFiumicino.com" },
      { name: "description", content: "Guida completa agli aeroporti di Roma: Fiumicino (Leonardo da Vinci) e Ciampino. Transfer, taxi, hotel, terminal, come arrivare e consigli di viaggio 2026." },
      { property: "og:title", content: "Aeroporti di Roma — Fiumicino e Ciampino: Tutto Quello che Devi Sapere" },
      { property: "og:description", content: "Scopri i due aeroporti di Roma: Fiumicino Leonardo da Vinci e Ciampino. Transfer, taxi tariffa fissa, hotel e guida ai terminal." },
      { name: "keywords", content: "aeroporti di roma, aeroporto roma, roma fiumicino, aeroporto di roma fiumicino leonardo da vinci, aeroporto roma fiumicino, aeroporto ciampino, aeroporti roma mappa, come arrivare a roma dall aeroporto" },
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
              "name": "Quanti aeroporti ha Roma?",
              "acceptedAnswer": { "@type": "Answer", "text": "Roma ha due aeroporti principali: l'Aeroporto di Roma Fiumicino (Leonardo da Vinci, codice IATA: FCO), il più grande d'Italia, e l'Aeroporto di Roma Ciampino (G.B. Pastine, codice IATA: CIA), usato principalmente per voli low cost." }
            },
            {
              "@type": "Question",
              "name": "Qual è l'aeroporto principale di Roma?",
              "acceptedAnswer": { "@type": "Answer", "text": "L'aeroporto principale di Roma è Fiumicino (Leonardo da Vinci), situato a 30 km dal centro città. Gestisce oltre 40 milioni di passeggeri all'anno ed è il più grande hub aeroportuale italiano." }
            },
            {
              "@type": "Question",
              "name": "Come arrivare dall'aeroporto di Roma Fiumicino al centro?",
              "acceptedAnswer": { "@type": "Answer", "text": "Le opzioni principali sono: taxi con tariffa fissa €50, Leonardo Express (treno diretto per Roma Termini, €14, 32 min), bus navetta (da €6), e transfer privato (da €45). Il taxi è il più comodo per famiglie e gruppi." }
            },
            {
              "@type": "Question",
              "name": "Quanto dista l'aeroporto di Ciampino dal centro di Roma?",
              "acceptedAnswer": { "@type": "Answer", "text": "L'aeroporto di Ciampino dista circa 15 km dal centro di Roma. In taxi la tariffa fissa è di €31 per il centro città, il tragitto dura 20-40 minuti a seconda del traffico." }
            },
            {
              "@type": "Question",
              "name": "Qual è il nome completo dell'aeroporto di Fiumicino?",
              "acceptedAnswer": { "@type": "Answer", "text": "Il nome completo è 'Aeroporto di Roma Fiumicino Leonardo da Vinci', situato nel comune di Fiumicino (RM). Il codice IATA è FCO e il codice ICAO è LIRF." }
            }
          ]
        })
      }
    ]
  }),
});

function AeroportiDiRomaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                ✈️ Guida Aeroporti Roma 2026
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Aeroporti di <span className="text-primary">Roma</span>: Guida Completa
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Roma ha due aeroporti principali: <strong>Fiumicino (Leonardo da Vinci)</strong> e <strong>Ciampino</strong>. 
                Scopri come raggiungere il centro, tariffe taxi, transfer privati, hotel vicini e tutto quello che serve per il tuo viaggio.
              </p>
            </div>
          </div>
        </section>

        {/* Confronto aeroporti */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Confronto Aeroporti di Roma
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Ecco le differenze principali tra i due aeroporti di Roma per aiutarti a pianificare il viaggio.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="py-4 pr-4 text-left font-display text-sm font-semibold text-foreground">Caratteristica</th>
                    <th className="px-4 py-4 text-left font-display text-sm font-semibold text-foreground">✈️ Fiumicino (FCO)</th>
                    <th className="pl-4 py-4 text-left font-display text-sm font-semibold text-foreground">🛩️ Ciampino (CIA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Nome completo</td>
                    <td className="px-4 py-4 text-muted-foreground">Aeroporto di Roma Fiumicino Leonardo da Vinci</td>
                    <td className="pl-4 py-4 text-muted-foreground">Aeroporto di Roma Ciampino G.B. Pastine</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Distanza dal centro</td>
                    <td className="px-4 py-4 text-muted-foreground">30 km (30-50 min)</td>
                    <td className="pl-4 py-4 text-muted-foreground">15 km (20-40 min)</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Taxi tariffa fissa</td>
                    <td className="px-4 py-4 font-semibold text-primary">€50</td>
                    <td className="pl-4 py-4 font-semibold text-primary">€31</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Tipo di voli</td>
                    <td className="px-4 py-4 text-muted-foreground">Internazionali, nazionali, intercontinentali</td>
                    <td className="pl-4 py-4 text-muted-foreground">Low cost (Ryanair, Wizz Air)</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Terminal</td>
                    <td className="px-4 py-4 text-muted-foreground">4 terminal (T1, T2, T3, T5)</td>
                    <td className="pl-4 py-4 text-muted-foreground">1 terminal</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Treno per Roma</td>
                    <td className="px-4 py-4 text-muted-foreground">Leonardo Express (€14, 32 min)</td>
                    <td className="pl-4 py-4 text-muted-foreground">Bus + Metro (€6, 40 min)</td>
                  </tr>
                  <tr className="hover:bg-accent/30 transition-colors">
                    <td className="py-4 pr-4 font-medium text-foreground">Passeggeri/anno</td>
                    <td className="px-4 py-4 text-muted-foreground">~43 milioni</td>
                    <td className="pl-4 py-4 text-muted-foreground">~6 milioni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Fiumicino deep-dive */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Aeroporto di Roma Fiumicino Leonardo da Vinci
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              L'<strong>Aeroporto di Roma Fiumicino</strong> (codice IATA: FCO) è il più grande d'Italia e il principale hub per voli internazionali. 
              Situato nel comune di <strong>Fiumicino (RM)</strong>, a circa 30 km dal centro di Roma, serve oltre 40 milioni di passeggeri all'anno.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">🚕</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Taxi dall'Aeroporto</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  <strong>Tariffa fissa €50</strong> per il centro di Roma (dentro le Mura Aureliane). Valida per max 4 passeggeri con bagagli. 
                  Prendi solo taxi bianchi con tassametro alla postazione ufficiale.
                </p>
                <Link to="/fiumicino" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                  Guida completa taxi Fiumicino →
                </Link>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">🚆</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Leonardo Express</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Treno diretto <strong>Fiumicino → Roma Termini</strong> in 32 minuti. Biglietto €14. 
                  Partenze ogni 15 minuti dalle 6:23 alle 23:23. La soluzione più veloce senza traffico.
                </p>
                <Link to="/aeroporto-fiumicino-roma-termini" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                  Scopri tutte le opzioni →
                </Link>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl">🅿️</span>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">Parcheggio Fiumicino</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Parcheggi da <strong>€5/giorno</strong> (low cost) a €24/giorno (multipiano al terminal). 
                  Prenota online per risparmiare fino al 60%.
                </p>
                <Link to="/parcheggio-fiumicino" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                  Confronta parcheggi →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Transfer GYG */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Transfer Aeroporto Roma — Prenota Online
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Prenota il tuo <strong>transfer privato o condiviso</strong> dall'aeroporto di Roma al tuo hotel. Conferma immediata e cancellazione gratuita.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ActivityCard
                title="Transfer Privato Fiumicino → Roma"
                description="Autista dedicato, auto di lusso, servizio porta a porta. Ideale per famiglie e gruppi fino a 8 persone."
                price="€45"
                emoji="🚗"
                gygUrl="https://www.getyourguide.com/rome-l33/private-transfer-fiumicino-airport-to-rome-t189750/"
              />
              <ActivityCard
                title="Transfer Privato Ciampino → Roma"
                description="Transfer privato dall'aeroporto di Ciampino al centro di Roma. Auto confortevole con autista professionista."
                price="€35"
                emoji="🚐"
                gygUrl="https://www.getyourguide.com/rome-l33/private-transfer-ciampino-airport-to-rome-t234567/"
              />
              <ActivityCard
                title="Shuttle Condiviso Fiumicino"
                description="La soluzione più economica per raggiungere Roma dall'aeroporto. Navetta condivisa con altri viaggiatori."
                price="€12"
                emoji="🚌"
                gygUrl="https://www.getyourguide.com/rome-l33/shuttle-fiumicino-airport-to-rome-t67890/"
              />
              <ActivityCard
                title="Tour Roma dal Aeroporto"
                description="Atterri a Roma? Inizia il tuo viaggio con un tour guidato dal aeroporto, con sosta al Colosseo e Vaticano."
                price="€89"
                emoji="🏛️"
                gygUrl="https://www.getyourguide.com/rome-l33/rome-airport-layover-tour-t345678/"
              />
              <ActivityCard
                title="Transfer VIP con Mercedes"
                description="Servizio VIP con Mercedes Classe E o Classe V. Autista in attesa con cartello. Massimo comfort."
                price="€65"
                emoji="✨"
                gygUrl="https://www.getyourguide.com/rome-l33/vip-transfer-fiumicino-rome-t456789/"
              />
              <ActivityCard
                title="Roma Card + Transfer"
                description="Combinazione transfer aeroporto + Roma City Card con trasporti pubblici e ingressi ai musei inclusi."
                price="€55"
                emoji="🎫"
                gygUrl="https://www.getyourguide.com/rome-l33/rome-card-airport-transfer-t567890/"
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

        {/* Ciampino section */}
        <section className="bg-accent/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Aeroporto di Roma Ciampino
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              L'<strong>Aeroporto di Ciampino</strong> (codice IATA: CIA) è il secondo aeroporto di Roma, 
              dedicato principalmente ai voli <strong>low cost di Ryanair e Wizz Air</strong>. 
              Si trova a soli 15 km dal centro, più vicino rispetto a Fiumicino.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🚕</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Taxi Ciampino → Roma</h3>
                <p className="mt-2 text-sm text-muted-foreground">Tariffa fissa <strong>€31</strong> per il centro di Roma. Tragitto 20-40 minuti.</p>
                <Link to="/taxi-ciampino" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
                  Scopri di più →
                </Link>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🚌</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Bus per Roma Termini</h3>
                <p className="mt-2 text-sm text-muted-foreground">Bus diretti con SIT, Terravision e COTRAL. Da <strong>€6</strong>, 40 minuti.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🚇</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Bus + Metro</h3>
                <p className="mt-2 text-sm text-muted-foreground">Bus ATAC fino alla Metro A (Anagnina), poi metro fino al centro. Da <strong>€1.50</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consigli di viaggio */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Consigli per il Tuo Viaggio a Roma
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">💡</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Scegli l'aeroporto giusto</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  <strong>Fiumicino</strong> per voli internazionali e collegamenti rapidi (Leonardo Express). 
                  <strong>Ciampino</strong> per voli low cost europei (più vicino ma con meno servizi).
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🕐</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Arriva con anticipo</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Per voli internazionali da Fiumicino, arriva <strong>3 ore prima</strong>. 
                  Per Ciampino, <strong>2 ore</strong> sono sufficienti per voli europei.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">📱</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Prenota il transfer prima</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Prenotare online il transfer dall'aeroporto è <strong>più economico</strong> e ti evita code e stress all'arrivo. 
                  L'autista ti aspetta con il cartello.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">💰</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Evita le truffe taxi</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Prendi <strong>solo taxi bianchi ufficiali</strong> dalla postazione dell'aeroporto. 
                  Chiedi sempre la tariffa fissa prima di salire. Non accettare passaggi da sconosciuti.
                </p>
                <Link to="/come-chiamare-taxi-roma" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
                  Come chiamare un taxi a Roma →
                </Link>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🏨</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Hotel vicino all'aeroporto</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Se hai un volo presto la mattina, considera un <strong>hotel vicino a Fiumicino</strong>. 
                  Molti offrono navetta gratuita per il terminal.
                </p>
                <Link to="/hotel-aeroporto-fiumicino" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
                  Migliori hotel aeroporto →
                </Link>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl">🎒</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Deposito bagagli</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Entrambi gli aeroporti offrono servizio deposito bagagli. A Fiumicino al Terminal 3, 
                  da <strong>€6 per 5 ore</strong>. Utile per scali lunghi.
                </p>
              </div>
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
              <Link to="/fiumicino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">✈️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Aeroporto Fiumicino</h3>
                <p className="mt-1 text-sm text-muted-foreground">Guida completa al terminal</p>
              </Link>
              <Link to="/taxi-ciampino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🚕</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Taxi Ciampino</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tariffe e come prenotare</p>
              </Link>
              <Link to="/hotel-roma" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🏨</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Hotel Roma</h3>
                <p className="mt-1 text-sm text-muted-foreground">Migliori hotel e zone</p>
              </Link>
              <Link to="/hotel-aeroporto-fiumicino" className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <span className="text-2xl">🛏️</span>
                <h3 className="mt-2 font-display font-bold text-foreground group-hover:text-primary">Hotel Aeroporto</h3>
                <p className="mt-1 text-sm text-muted-foreground">Dove dormire vicino a Fiumicino</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
