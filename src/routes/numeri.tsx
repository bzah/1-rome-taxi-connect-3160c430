import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";

export const Route = createFileRoute("/numeri")({
  component: NumeriPage,
  head: () => ({
    meta: [
      { title: "Numero Taxi Roma — Tutti i Numeri per Chiamare un Taxi | TaxiFiumicino.com" },
      { name: "description", content: "Tutti i numeri di telefono taxi Roma aggiornati 2026: Radio Taxi 3570 (06.3570), Samarcanda (06.5551), La Capitale (06.4994), Roma Taxi (06.6645). Come chiamare un taxi a Roma, app itTaxi e alternative per prenotare." },
      { property: "og:title", content: "Numero Taxi Roma — Tutti i Numeri Radio Taxi 2026" },
      { property: "og:description", content: "Numeri radio taxi Roma aggiornati: 06.3570, 06.5551, 06.4994. Disponibili 24/7 per chiamare un taxi a Roma." },
      { name: "keywords", content: "numero taxi roma, taxi roma numero, numero di taxi a roma, radio taxi roma, che numero fare per chiamare taxi a roma, taxi roma numeri, 06 3570, radio taxi 3570, taxi roma telefono, numero verde taxi roma" },
    ],
  }),
});

function NumeriPage() {
  const radioTaxi = [
    { name: "Radio Taxi 3570", phone: "06 3570", note: "La più grande cooperativa di Roma. Disponibile 24h.", app: true },
    { name: "Samarcanda", phone: "06 5551", note: "Cooperativa storica di Roma. Servizio 24 ore.", app: false },
    { name: "La Capitale Radio Taxi", phone: "06 4994", note: "Ampia flotta, servizio rapido.", app: true },
    { name: "Roma Taxi", phone: "06 6645", note: "Cooperativa affidabile, attiva da anni.", app: false },
    { name: "Tevere Radio Taxi", phone: "06 4157", note: "Servizio notturno e festivi.", app: false },
  ];

  return (
    <>
      <HeroSection
        title="Numeri Taxi Roma"
        subtitle="Chiama un Taxi Subito"
        description="Tutti i numeri delle radio taxi di Roma. Chiama, prenota via app, o trova la postazione taxi più vicina."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">Radio Taxi Roma — Numeri di Telefono</h2>
        <p className="text-muted-foreground mb-8">
          Per chiamare un taxi a Roma, puoi contattare una delle cooperative di radio taxi elencate di seguito. Il servizio è disponibile 24 ore su 24, 7 giorni su 7.
        </p>

        <div className="space-y-4">
          {radioTaxi.map((taxi) => (
            <div key={taxi.phone} className="rounded-xl border border-border bg-card p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{taxi.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{taxi.note}</p>
              </div>
              <div className="flex items-center gap-3">
                {taxi.app && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">📱 App</span>
                )}
                <a
                  href={`tel:${taxi.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-lg gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow transition-all hover:shadow-md"
                >
                  📞 {taxi.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold mt-16 mb-8">Come Chiamare un Taxi a Roma</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { emoji: "📞", title: "Per Telefono", desc: "Chiama uno dei numeri radio taxi sopra. L'operatore ti comunicherà il codice del taxi e il tempo di arrivo stimato." },
            { emoji: "📱", title: "Via App", desc: "Usa l'app itTaxi o Free Now per prenotare con un tap. Puoi seguire il taxi in tempo reale e pagare digitalmente." },
            { emoji: "🚕", title: "Alla Postazione Taxi", desc: "Roma ha centinaia di postazioni taxi ufficiali. Le trovi vicino a stazioni, piazze principali, ospedali e hotel." },
            { emoji: "✋", title: "Per Strada", desc: "Puoi fermare un taxi libero per strada se la luce sul tetto è accesa. Alza la mano per segnalare." },
          ].map((method) => (
            <div key={method.title} className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">{method.emoji}</div>
              <h3 className="font-display text-lg font-semibold">{method.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{method.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">📲 App per Taxi a Roma</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p><strong>itTaxi</strong> — L'app ufficiale dei taxi italiani. Permette di prenotare, seguire il taxi in arrivo, e pagare direttamente dall'app. Disponibile su iOS e Android.</p>
            <p><strong>Free Now</strong> — Ex mytaxi, permette di prenotare taxi in molte città europee inclusa Roma. Offre stime di prezzo e pagamento in-app.</p>
          </div>
        </div>

        {/* Affiliate Section */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">Preferisci Prenotare Online?</h2>
        <p className="text-muted-foreground mb-8">Niente attese al telefono — prenota un transfer privato o tour con cancellazione gratuita.</p>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🚗" title="Transfer Privato Fiumicino" description="Autista con cartello all'arrivo. Dall'aeroporto direttamente al tuo hotel. Prezzo fisso, niente sorprese." gygUrl="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/" price="€45" />
          <ActivityCard emoji="🚐" title="Navetta Condivisa Fiumicino" description="Navetta economica dall'aeroporto alla stazione Termini. Partenze frequenti, WiFi a bordo." gygUrl="https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/" price="€7" />
          <ActivityCard emoji="🚕" title="Transfer Ciampino — Roma" description="Transfer privato dall'aeroporto di Ciampino al centro. Ideale per voli Ryanair e Wizz Air." gygUrl="https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/" price="€35" />
          <ActivityCard emoji="🏛️" title="Tour Colosseo — Salta la Fila" description="Visita guidata del Colosseo, Foro Romano e Palatino con accesso prioritario." gygUrl="https://www.getyourguide.com/rome-l33/skip-the-line-colosseum-roman-forum-palatine-hill-t67792/" price="€35" />
          <ActivityCard emoji="⛪" title="Musei Vaticani e Sistina" description="Accesso prioritario ai Musei Vaticani e alla Cappella Sistina. Guida esperta." gygUrl="https://www.getyourguide.com/rome-l33/vatican-museums-sistine-chapel-skip-the-line-ticket-t44089/" price="€30" />
          <ActivityCard emoji="🍝" title="Tour Gastronomico Trastevere" description="Scopri i sapori autentici di Roma con un food tour nel cuore di Trastevere." gygUrl="https://www.getyourguide.com/rome-l33/trastevere-food-tour-t226/" price="€40" />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Preferisci prenotare un transfer privato online?</p>
          <GetYourGuideCTA text="Vedi Tutti i Transfer e Tour" />
        </div>
      </section>
    </>
  );
}
