import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { i18nLinks } from "@/i18n/hreflang";
import { RomeDiscoverGrid, ROME_TRANSFERS, ROME_TOURS, ROME_PANORAMIC } from "@/components/RomeDiscoverSection";
import { discoverJsonLdScript } from "@/lib/discover-jsonld";
import { GYG_ROME_ALL } from "@/lib/gyg-links";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";

export const Route = createFileRoute("/aeroporto-fiumicino-roma-termini")({
  component: FiumicinoTerminiPage,
  head: () => ({
    links: i18nLinks("/aeroporto-fiumicino-roma-termini", "it"
    scripts: [discoverJsonLdScript([ROME_TRANSFERS, ROME_TOURS, ROME_PANORAMIC])],
  ),
    meta: [
      { title: "Da Aeroporto Fiumicino a Roma Termini — Treno, Taxi e Bus 2026" },
      { name: "description", content: "Come andare dall'aeroporto di Fiumicino a Roma Termini nel 2026: Leonardo Express (32 min, €14, ogni 15 min), taxi tariffa fissa €50, bus navetta Terravision e SIT da €5, transfer privati da €45. Confronto completo con orari, prezzi e consigli pratici." },
      { property: "og:title", content: "Da Aeroporto Fiumicino a Roma Termini — Treno, Taxi, Bus e Transfer 2026" },
      { property: "og:description", content: "Tutte le opzioni Fiumicino-Termini: Leonardo Express €14, taxi €50, bus €5, transfer privati. Orari, prezzi e consigli aggiornati." },
      { name: "keywords", content: "da aeroporto fiumicino a roma termini, fiumicino roma termini, treno fiumicino termini, leonardo express, roma termini fiumicino, da fiumicino aeroporto a roma termini, orari treni roma fiumicino, treno termini fiumicino, leonardo express orari, leonardo express prezzo, bus fiumicino termini, terravision fiumicino" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Come andare dall'aeroporto di Fiumicino a Roma Termini?", "acceptedAnswer": { "@type": "Answer", "text": "Puoi raggiungere Roma Termini dall'aeroporto di Fiumicino con il Leonardo Express (treno diretto, 32 min, €14), taxi a tariffa fissa (€50, 30-50 min), bus navetta (€5-7, 50-75 min) o transfer privato (da €45)." } },
            { "@type": "Question", "name": "Quanto costa il Leonardo Express da Fiumicino a Termini?", "acceptedAnswer": { "@type": "Answer", "text": "Il biglietto del Leonardo Express costa €14 a tratta. Si acquista online, in biglietteria o alle macchinette in aeroporto. Non serve prenotazione." } },
            { "@type": "Question", "name": "Ogni quanto parte il treno da Fiumicino a Roma Termini?", "acceptedAnswer": { "@type": "Answer", "text": "Il Leonardo Express parte ogni 15 minuti dall'aeroporto di Fiumicino verso Roma Termini, dalle 6:23 alle 23:23." } },
            { "@type": "Question", "name": "Quanto costa un taxi da Fiumicino a Roma Termini?", "acceptedAnswer": { "@type": "Answer", "text": "La tariffa fissa del taxi da Fiumicino a Roma Termini è di €50, essendo Termini dentro le Mura Aureliane. Valida per max 4 passeggeri con bagagli." } },
            { "@type": "Question", "name": "Qual è il modo più economico per arrivare a Termini da Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "Il bus navetta (Terravision, SIT) a €5-7 è il più economico. In 4 persone il taxi (€12.50 a testa) costa meno del Leonardo Express (€14 a testa)." } },
            { "@type": "Question", "name": "Posso prendere il treno da Fiumicino a Termini di notte?", "acceptedAnswer": { "@type": "Answer", "text": "No, l'ultimo Leonardo Express parte alle 23:23. Di notte le opzioni sono taxi (€50, 24/7) o transfer privato prenotato." } }
          ]
        }),
      },
    ],
  }),
});

function FiumicinoTerminiPage() {
  return (
    <>
      <HeroSection
        title="Aeroporto Fiumicino — Roma Termini"
        subtitle="Come Arrivare"
        description="Tutte le opzioni per raggiungere la stazione Roma Termini dall'aeroporto di Fiumicino: treno Leonardo Express, taxi, bus navetta e transfer privati."
        ctaText="Scopri Tour e Attività a Roma"
        ctaHref="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher"
        image={fiumicinoImg}
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">Da Aeroporto Fiumicino a Roma Termini</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          La stazione <strong>Roma Termini</strong> è il principale snodo ferroviario della capitale e la destinazione più richiesta dall'<strong>aeroporto di Fiumicino</strong>. La distanza è di circa 30 km e ci sono diverse opzioni di trasporto, dalla più veloce (treno) alla più comoda (taxi o transfer privato).
        </p>

        {/* Comparison table */}
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="gold-gradient text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Opzione</th>
                <th className="px-6 py-4 text-center font-semibold">Prezzo</th>
                <th className="px-6 py-4 text-center font-semibold">Durata</th>
                <th className="px-6 py-4 text-center font-semibold hidden sm:table-cell">Frequenza</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["🚄 Leonardo Express", "€14", "32 min", "Ogni 15 min"],
                ["🚕 Taxi (tariffa fissa)", "€50", "30-50 min", "Sempre disponibile"],
                ["🚗 Transfer privato", "Da €45", "30-50 min", "Su prenotazione"],
                ["🚐 Bus navetta (SIT/Terravision)", "€5-7", "50-75 min", "Ogni 30-60 min"],
                ["🚐 Navetta condivisa", "Da €7", "45-60 min", "Su prenotazione"],
              ].map(([opzione, prezzo, durata, freq]) => (
                <tr key={opzione} className="hover:bg-accent/30 transition-colors">
                  <td className="px-6 py-3.5 font-medium">{opzione}</td>
                  <td className="px-6 py-3.5 text-center font-semibold">{prezzo}</td>
                  <td className="px-6 py-3.5 text-center">{durata}</td>
                  <td className="px-6 py-3.5 text-center hidden sm:table-cell">{freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leonardo Express details */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Leonardo Express — Il Treno Diretto</h2>
        <div className="rounded-xl section-warm p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">ℹ️ Informazioni</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Biglietto:</strong> €14 a tratta</li>
                <li>• <strong>Durata:</strong> 32 minuti, senza fermate</li>
                <li>• <strong>Orari:</strong> 6:23 – 23:23</li>
                <li>• <strong>Frequenza:</strong> Ogni 15 minuti</li>
                <li>• <strong>Stazione Fiumicino:</strong> Tra Terminal 1 e 3</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">💡 Consigli</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Acquista il biglietto online per evitare code</li>
                <li>• <strong>Convalida il biglietto</strong> cartaceo prima di salire</li>
                <li>• Il treno ha posti a sedere non numerati</li>
                <li>• Porta di bagagli non ci sono limiti</li>
                <li>• Da Termini puoi prendere metro A/B/C e autobus</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Taxi details */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Taxi da Fiumicino a Roma Termini</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">💶</div>
            <h3 className="font-display text-lg font-semibold">Tariffa Fissa €50</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Roma Termini è dentro le Mura Aureliane, quindi si applica la <strong>tariffa fissa di €50</strong>. Include fino a 4 passeggeri e bagagli. Chiedi la tariffa fissa prima di partire.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">🕐</div>
            <h3 className="font-display text-lg font-semibold">Quando Conviene il Taxi</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Il taxi conviene soprattutto di notte (dopo le 23:23 quando il Leonardo Express non opera), con molti bagagli, o se si è in 3-4 persone (€50 diviso 4 = €12.50 a testa).
            </p>
          </div>
        </div>


        {/* FAQ Section */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-8">Domande Frequenti — Fiumicino a Roma Termini</h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            { q: "Come andare dall'aeroporto di Fiumicino a Roma Termini?", a: "Puoi prendere il Leonardo Express (treno diretto, 32 min, €14), taxi a tariffa fissa (€50, 30-50 min), bus navetta Terravision/SIT (€5-7, 50-75 min) o un transfer privato (da €45)." },
            { q: "Quanto costa il Leonardo Express da Fiumicino a Termini?", a: "Il biglietto costa €14 a tratta. Si acquista online, in biglietteria o alle macchinette in aeroporto. Non serve prenotazione: sali sul primo treno disponibile." },
            { q: "Ogni quanto parte il Leonardo Express?", a: "Il Leonardo Express parte ogni 15 minuti, dalle 6:23 alle 23:23, dalla stazione ferroviaria dell'aeroporto (tra Terminal 1 e 3)." },
            { q: "Quanto costa un taxi da Fiumicino a Roma Termini?", a: "La tariffa fissa è €50 perché Termini è dentro le Mura Aureliane. Vale per max 4 passeggeri con bagagli, senza supplementi notturni." },
            { q: "Qual è il modo più economico per arrivare a Termini da Fiumicino?", a: "Il bus navetta (Terravision, SIT) a €5-7 è il più economico. In 4 persone, il taxi (€12.50 a testa) costa meno del Leonardo Express (€14 a testa)." },
            { q: "Posso prendere il treno da Fiumicino a Termini di notte?", a: "No, l'ultimo Leonardo Express parte alle 23:23. Di notte le opzioni sono taxi (€50, disponibile 24/7) o transfer privato prenotato in anticipo." },
          ].map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-border bg-card p-4 sm:p-6">
              <summary className="cursor-pointer font-display text-base sm:text-lg font-semibold text-card-foreground list-none flex items-center justify-between gap-3">
                <span>{faq.q}</span>
                <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* Cross links */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <Link to="/fiumicino" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            ✈️ Aeroporto Fiumicino
          </Link>
          <Link to="/aeroporto-fiumicino-roma-centro" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            🏛️ Fiumicino — Roma Centro
          </Link>
          <Link to="/tariffe" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            💰 Tariffe Taxi Roma
          </Link>
        </div>
      </section>

      <RomeDiscoverGrid
        title="Scopri Roma"
        subtitle="Transfer, tour e panorami mozzafiato. Cancellazione gratuita."
        categories={[ROME_TRANSFERS, ROME_TOURS, ROME_PANORAMIC]}
        ctaUrl={GYG_ROME_ALL}
      />
    </>
  );
}
