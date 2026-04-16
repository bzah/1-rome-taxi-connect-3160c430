import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { i18nLinks } from "@/i18n/hreflang";
import { RomeDiscoverGrid, ROME_TRANSFERS, ROME_ATTRACTIONS, ROME_NIGHTLIFE } from "@/components/RomeDiscoverSection";
import { discoverJsonLdScript } from "@/lib/discover-jsonld";
import { GYG_ROME_ALL } from "@/lib/gyg-links";

export const Route = createFileRoute("/numeri")({
  component: NumeriPage,
  head: () => ({
    links: i18nLinks("/numeri", "it"
    scripts: [discoverJsonLdScript([ROME_TRANSFERS, ROME_ATTRACTIONS, ROME_NIGHTLIFE])],
  ),
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

      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Radio Taxi Roma</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Servizio disponibile 24 ore su 24, 7 giorni su 7.
          </p>
        </div>

        <div className="space-y-4">
          {radioTaxi.map((taxi, i) => (
            <div key={taxi.phone} className="rounded-sm border border-stone-warm bg-card p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-primary/30 transition-colors duration-500">
              <span className="text-xs text-primary/60 font-display tracking-widest shrink-0">{String(i + 1).padStart(2, '0')}.</span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{taxi.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{taxi.note}</p>
              </div>
              <div className="flex items-center gap-3">
                {taxi.app && (
                  <span className="rounded-sm bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">📱 App</span>
                )}
                <a
                  href={`tel:${taxi.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-sm gold-gradient px-5 py-2.5 text-sm font-semibold text-espresso amber-glow transition-all hover:amber-glow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  📞 {taxi.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to call */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-20 mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Come Chiamare<br className="hidden sm:block" /> un Taxi</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            4 modi per trovare un taxi a Roma.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { num: "01", emoji: "📞", title: "Per Telefono", desc: "Chiama uno dei numeri radio taxi sopra. L'operatore ti comunicherà il codice del taxi e il tempo di arrivo stimato." },
            { num: "02", emoji: "📱", title: "Via App", desc: "Usa l'app itTaxi o Free Now per prenotare con un tap. Puoi seguire il taxi in tempo reale e pagare digitalmente." },
            { num: "03", emoji: "🚕", title: "Alla Postazione Taxi", desc: "Roma ha centinaia di postazioni taxi ufficiali. Le trovi vicino a stazioni, piazze principali, ospedali e hotel." },
            { num: "04", emoji: "✋", title: "Per Strada", desc: "Puoi fermare un taxi libero per strada se la luce sul tetto è accesa. Alza la mano per segnalare." },
          ].map((method) => (
            <div key={method.title} className="rounded-sm border border-stone-warm bg-card p-7 hover:border-primary/30 transition-colors duration-500">
              <div className="flex items-start gap-4">
                <span className="text-2xl">{method.emoji}</span>
                <div>
                  <span className="text-xs text-primary/60 font-display tracking-widest">{method.num}.</span>
                  <h3 className="font-display text-lg font-semibold mt-0.5">{method.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{method.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App info */}
        <div className="mt-16 rounded-sm border border-stone-warm bg-card p-8">
          <h3 className="font-display text-xl font-semibold mb-5">📲 App per Taxi a Roma</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">itTaxi</strong> — L'app ufficiale dei taxi italiani. Permette di prenotare, seguire il taxi in arrivo, e pagare direttamente dall'app. Disponibile su iOS e Android.</p>
            <p><strong className="text-foreground">Free Now</strong> — Ex mytaxi, permette di prenotare taxi in molte città europee inclusa Roma. Offre stime di prezzo e pagamento in-app.</p>
          </div>
        </div>

      </section>

      {/* HCMC-style Discover Section */}
      <RomeDiscoverGrid
        title="Preferisci Prenotare Online?"
        subtitle="Niente attese al telefono. Transfer e tour con cancellazione gratuita."
        categories={[ROME_TRANSFERS, ROME_ATTRACTIONS, ROME_NIGHTLIFE]}
        ctaUrl={GYG_ROME_ALL}
        ctaText="Vedi Tutti i Transfer e Tour"
      />
    </>
  );
}
