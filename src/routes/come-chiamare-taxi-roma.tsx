import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";

export const Route = createFileRoute("/come-chiamare-taxi-roma")({
  component: ComeChiamarePage,
  head: () => ({
    meta: [
      { title: "Come Chiamare un Taxi a Roma — Guida Completa 2026 | TaxiFiumicino.com" },
      { name: "description", content: "Come chiamare un taxi a Roma nel 2026: 4 metodi spiegati passo passo — telefono (06.3570), app itTaxi e Free Now, postazioni taxi e fermata per strada. Numeri, tempi di attesa, costi di chiamata e consigli per turisti." },
      { property: "og:title", content: "Come Chiamare un Taxi a Roma — 4 Metodi Spiegati Passo Passo" },
      { property: "og:description", content: "Guida completa 2026 su come chiamare un taxi a Roma: telefono, app, postazioni e strada. Con numeri e consigli." },
      { name: "keywords", content: "come chiamare taxi a roma, come chiamare un taxi a roma, che numero fare per chiamare taxi a roma, come prenotare un taxi a roma, chiamare taxi roma, taxi roma come fare, prendere taxi roma, fermare taxi roma, postazione taxi roma, taxi roma turisti" },
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
            { "@type": "HowToStep", "position": 2, "name": "Chiama la radio taxi", "text": "Componi il numero 06.3570 (Radio Taxi 3570), 06.4994 (La Capitale) o 06.6645 (Roma Taxi). L'operatore ti comunicherà il codice del taxi." },
            { "@type": "HowToStep", "position": 3, "name": "Attendi il taxi", "text": "Il tassametro parte dal momento in cui il taxi riceve la chiamata. Il tempo medio di arrivo è 5-15 minuti." },
          ],
        }),
      },
    ],
  }),
});

function ComeChiamarePage() {
  return (
    <>
      <HeroSection
        title="Come Chiamare un Taxi a Roma"
        subtitle="Guida Pratica"
        description="Tutti i modi per chiamare un taxi a Roma: telefono, app, postazioni e per strada. Scopri il metodo più comodo per te."
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">4 Modi per Chiamare un Taxi a Roma</h2>

        <div className="space-y-8">
          {/* Method 1 */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-gradient text-lg font-bold text-primary-foreground">1</div>
              <div>
                <h3 className="font-display text-xl font-semibold">📞 Per Telefono — Radio Taxi</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Il metodo più tradizionale e affidabile. Chiama una delle cooperative di radio taxi di Roma e un operatore ti assegnerà il taxi più vicino.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { name: "Radio Taxi 3570", phone: "06 3570" },
                    { name: "La Capitale", phone: "06 4994" },
                    { name: "Roma Taxi", phone: "06 6645" },
                    { name: "Samarcanda", phone: "06 5551" },
                  ].map((t) => (
                    <a key={t.phone} href={`tel:${t.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-accent/50">
                      <span className="text-lg">📱</span>
                      <div>
                        <div className="text-sm font-semibold">{t.name}</div>
                        <div className="text-sm text-primary font-medium">{t.phone}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-accent/50 p-4 text-sm text-muted-foreground">
                  <strong>💡 Consiglio:</strong> Quando chiami, l'operatore ti comunicherà un codice (es. "Roma 42"). Il tassametro inizia a scorrere dal momento in cui il taxi riceve la chiamata, non da quando sale il passeggero.
                </div>
              </div>
            </div>
          </div>

          {/* Method 2 */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-gradient text-lg font-bold text-primary-foreground">2</div>
              <div>
                <h3 className="font-display text-xl font-semibold">📲 Via App — itTaxi e Free Now</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Il modo più moderno per chiamare un taxi. Scarica <strong>itTaxi</strong> (l'app ufficiale dei taxi italiani) o <strong>Free Now</strong> e prenota con un tap. Vantaggi: GPS automatico, stima del prezzo, pagamento in-app, tracciamento in tempo reale.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  <Link to="/app-taxi-roma" className="text-primary font-medium hover:underline">→ Scopri tutte le app taxi disponibili a Roma</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Method 3 */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-gradient text-lg font-bold text-primary-foreground">3</div>
              <div>
                <h3 className="font-display text-xl font-semibold">🚏 Alla Postazione Taxi</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Roma ha centinaia di postazioni taxi ufficiali ("parcheggi taxi") distribuite in tutta la città. Le trovi facilmente vicino a:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Stazioni ferroviarie</strong> — Termini, Tiburtina, Trastevere, Ostiense</li>
                  <li>• <strong>Piazze principali</strong> — Piazza Venezia, Piazza di Spagna, Piazza del Popolo</li>
                  <li>• <strong>Attrazioni turistiche</strong> — Colosseo, Vaticano, Pantheon</li>
                  <li>• <strong>Ospedali</strong> — Gemelli, San Camillo, Umberto I</li>
                  <li>• <strong>Centri commerciali</strong> e grandi hotel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Method 4 */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-gradient text-lg font-bold text-primary-foreground">4</div>
              <div>
                <h3 className="font-display text-xl font-semibold">✋ Per Strada</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Puoi fermare un taxi libero direttamente per strada alzando la mano. Un taxi è <strong>libero</strong> quando la luce sul tetto è accesa ("TAXI" illuminato). Se la luce è spenta, il taxi è occupato o fuori servizio.
                </p>
                <div className="mt-4 rounded-lg bg-accent/50 p-4 text-sm text-muted-foreground">
                  <strong>⚠️ Attenzione:</strong> A Roma non è sempre facile trovare un taxi libero per strada, soprattutto nelle ore di punta, la sera tardi, o durante eventi. In questi casi, è meglio chiamare per telefono o usare l'app.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Costs of calling */}
        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">Quanto Costa Chiamare un Taxi a Roma?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Chiamare un taxi per telefono o via app non ha un costo fisso aggiuntivo, ma il <strong>tassametro inizia a scorrere</strong> dal momento in cui il tassista riceve la chiamata e si mette in moto. Questo significa che quando il taxi arriva, il tassametro potrebbe già segnare €2-5 a seconda della distanza percorsa per raggiungerti.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Per corse con <strong>tariffa fissa</strong> (come dall'aeroporto di Fiumicino), il tassametro non si applica e il prezzo resta quello concordato. <Link to="/tariffe" className="text-primary font-medium hover:underline">Vedi tutte le tariffe →</Link>
          </p>
        </div>

        {/* Affiliate Section */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">Alternativa: Prenota un Transfer Privato</h2>
        <p className="text-muted-foreground mb-8">Non vuoi chiamare? Prenota online un autista che ti aspetta con cartello. Prezzo fisso e cancellazione gratuita.</p>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🚗" title="Transfer Privato Fiumicino" description="Dall'aeroporto direttamente al tuo hotel in centro Roma. Autista professionale con cartello." gygUrl="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/" price="€45" />
          <ActivityCard emoji="🚕" title="Transfer Ciampino — Roma" description="Transfer privato dall'aeroporto di Ciampino. Perfetto per voli Ryanair e low-cost." gygUrl="https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/" price="€35" />
          <ActivityCard emoji="🚐" title="Navetta Condivisa Termini" description="Bus navetta dall'aeroporto Fiumicino alla stazione Termini. L'opzione più economica." gygUrl="https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/" price="€7" />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Preferisci prenotare un transfer privato con autista?</p>
          <GetYourGuideCTA text="Vedi Tutti i Transfer" url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>
      </section>
    </>
  );
}
