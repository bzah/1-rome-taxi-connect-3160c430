import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { i18nLinks } from "@/i18n/hreflang";
import { RomeDiscoverGrid, ROME_TRANSFERS, ROME_NIGHTLIFE, ROME_FOOD } from "@/components/RomeDiscoverSection";
import { discoverJsonLdScript } from "@/lib/discover-jsonld";
import { GYG_ROME_ALL } from "@/lib/gyg-links";

export const Route = createFileRoute("/come-chiamare-taxi-roma")({
  component: ComeChiamarePage,
  head: () => ({
    links: i18nLinks("/come-chiamare-taxi-roma", "it"),
    meta: [
      { title: "Come Chiamare un Taxi a Roma — Guida Completa 2026 | TaxiFiumicino.com" },
      { name: "description", content: "Come chiamare un taxi a Roma 2026: 4 metodi passo passo — telefono (06.3570), app itTaxi e Free Now, postazioni ufficiali e fermarne uno per strada." },
      { property: "og:title", content: "Come Chiamare un Taxi a Roma — 4 Metodi Spiegati Passo Passo" },
      { property: "og:description", content: "Guida completa 2026 su come chiamare un taxi a Roma: telefono, app, postazioni e strada." },
      { name: "keywords", content: "come chiamare taxi a roma, come chiamare un taxi a roma, che numero fare per chiamare taxi a roma, come prenotare un taxi a roma, chiamare taxi roma" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Come Chiamare un Taxi a Roma",
          "description": "Guida passo passo per chiamare un taxi nella città di Roma.",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Scegli il metodo", "text": "Decidi se chiamare per telefono, usare un'app, andare a una postazione taxi o fermarne uno per strada." },
            { "@type": "HowToStep", "position": 2, "name": "Chiama la radio taxi", "text": "Componi 06.3570, 06.4994 o 06.6645. L'operatore ti comunicherà il codice del taxi." },
            { "@type": "HowToStep", "position": 3, "name": "Attendi il taxi", "text": "Il tassametro parte dal momento in cui il taxi riceve la chiamata. Tempo medio 5-15 minuti." },
          ],
        }),
      },
          discoverJsonLdScript([ROME_TRANSFERS, ROME_NIGHTLIFE, ROME_FOOD]),
    ],
  }),
});

const METHODS = [
  {
    num: "01", icon: "📞", title: "Per Telefono — Radio Taxi",
    desc: "Il metodo più tradizionale e affidabile. Chiama una cooperativa di radio taxi e un operatore ti assegnerà il taxi più vicino.",
    phones: [
      { name: "Radio Taxi 3570", phone: "06 3570" },
      { name: "La Capitale", phone: "06 4994" },
      { name: "Roma Taxi", phone: "06 6645" },
      { name: "Samarcanda", phone: "06 5551" },
    ],
    tip: "Quando chiami, l'operatore ti comunicherà un codice (es. \"Roma 42\"). Il tassametro inizia a scorrere dal momento in cui il taxi riceve la chiamata.",
  },
  {
    num: "02", icon: "📲", title: "Via App — itTaxi e Free Now",
    desc: "Il modo più moderno. Scarica itTaxi (app ufficiale) o Free Now e prenota con un tap. Vantaggi: GPS automatico, stima prezzo, pagamento in-app, tracciamento in tempo reale.",
    linkTo: "/app-taxi-roma" as const,
    linkText: "→ Scopri tutte le app taxi a Roma",
  },
  {
    num: "03", icon: "🚏", title: "Alla Postazione Taxi",
    desc: "Roma ha centinaia di postazioni taxi ufficiali distribuite in tutta la città.",
    locations: ["Stazioni ferroviarie — Termini, Tiburtina, Trastevere, Ostiense", "Piazze principali — Piazza Venezia, Piazza di Spagna, Piazza del Popolo", "Attrazioni turistiche — Colosseo, Vaticano, Pantheon", "Ospedali — Gemelli, San Camillo, Umberto I", "Centri commerciali e grandi hotel"],
  },
  {
    num: "04", icon: "✋", title: "Per Strada",
    desc: "Puoi fermare un taxi libero alzando la mano. Un taxi è libero quando la luce sul tetto è accesa. Se è spenta, è occupato o fuori servizio.",
    tip: "A Roma non è sempre facile trovare un taxi libero per strada, soprattutto nelle ore di punta o la sera tardi. In questi casi, meglio chiamare per telefono o usare l'app.",
  },
];

function ComeChiamarePage() {
  return (
    <>
      <HeroSection
        title="Come Chiamare un Taxi a Roma"
        subtitle="Guida Pratica"
        description="Tutti i modi per chiamare un taxi a Roma: telefono, app, postazioni e per strada. Scopri il metodo più comodo per te."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-10">4 Modi per Chiamare un Taxi a Roma</h2>

        <div className="space-y-6">
          {METHODS.map((method) => (
            <div key={method.num} className="rounded-sm border border-stone-warm bg-card p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm gold-gradient text-lg font-bold text-espresso">{method.num}</div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">{method.icon} {method.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{method.desc}</p>

                  {"phones" in method && method.phones && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {method.phones.map((t) => (
                        <a key={t.phone} href={`tel:${t.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-sm border border-stone-warm p-3 transition-colors hover:bg-accent/50 hover:border-primary/30">
                          <span className="text-lg">📱</span>
                          <div>
                            <div className="text-sm font-semibold">{t.name}</div>
                            <div className="text-sm text-primary font-medium">{t.phone}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}

                  {"linkTo" in method && method.linkTo && (
                    <p className="mt-3 text-sm">
                      <Link to={method.linkTo} className="text-primary font-medium hover:underline">{method.linkText}</Link>
                    </p>
                  )}

                  {"locations" in method && method.locations && (
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      {method.locations.map((l) => <li key={l}>• {l}</li>)}
                    </ul>
                  )}

                  {"tip" in method && method.tip && (
                    <div className="mt-4 rounded-sm bg-accent/50 p-4 text-sm text-muted-foreground">
                      <strong>💡 Consiglio:</strong> {method.tip}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Costo chiamata */}
        <div className="mt-14 rounded-sm section-warm p-7 sm:p-8">
          <h3 className="font-display text-xl font-semibold mb-4">Quanto Costa Chiamare un Taxi a Roma?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Chiamare un taxi per telefono o via app non ha un costo aggiuntivo, ma il <strong>tassametro inizia a scorrere</strong> dal momento in cui il tassista riceve la chiamata. Quando il taxi arriva, il tassametro potrebbe già segnare €2-5.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Per corse con <strong>tariffa fissa</strong> (come dall'aeroporto di Fiumicino), il tassametro non si applica. <Link to="/tariffe" className="text-primary font-medium hover:underline">Vedi tutte le tariffe →</Link>
          </p>
        </div>
      </section>

      {/* HCMC-style Discover Section */}
      <RomeDiscoverGrid
        title="Alternativa: Transfer Privato"
        subtitle="Non vuoi chiamare? Prenota online un autista con cartello. Prezzo fisso e cancellazione gratuita."
        categories={[ROME_TRANSFERS, ROME_NIGHTLIFE, ROME_FOOD]}
        ctaUrl={GYG_ROME_ALL}
        ctaText="Vedi Tutti i Transfer"
      />
    </>
  );
}
