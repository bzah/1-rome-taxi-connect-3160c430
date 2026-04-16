import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";
import { hreflangLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/aeroporto-fiumicino-roma-centro")({
  component: FiumicinoCentroPage,
  head: () => ({
    links: hreflangLinks("/aeroporto-fiumicino-roma-centro"),
    meta: [
      { title: "Da Aeroporto Fiumicino a Roma Centro — Taxi, Treno e Transfer 2026" },
      { name: "description", content: "Come arrivare dall'aeroporto di Fiumicino a Roma centro nel 2026: taxi tariffa fissa €50, Leonardo Express €14 (32 min), treno regionale FL1 €8, bus navetta €5-7 e transfer privati da €45. Confronto completo con prezzi, tempi e consigli." },
      { property: "og:title", content: "Da Aeroporto Fiumicino a Roma Centro — Taxi, Treno, Bus e Transfer 2026" },
      { property: "og:description", content: "Tutte le opzioni per andare da Fiumicino a Roma centro: taxi €50, Leonardo Express €14, bus €5 e transfer privati. Confronto prezzi e tempi." },
      { name: "keywords", content: "da aeroporto fiumicino a roma centro, come arrivare a roma da fiumicino, fiumicino roma centro, transfer fiumicino roma centro, taxi fiumicino roma centro, come arrivare a fiumicino, leonardo express fiumicino, bus fiumicino roma, navetta fiumicino roma centro, treno fiumicino roma" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Come arrivare dall'aeroporto di Fiumicino a Roma centro?", "acceptedAnswer": { "@type": "Answer", "text": "Dall'aeroporto di Fiumicino a Roma centro puoi prendere: taxi a tariffa fissa €50 (30-50 min), Leonardo Express per Termini (€14, 32 min), treno regionale FL1 per Trastevere/Ostiense (€8, 45 min), bus navetta (€5-7) o transfer privato (da €45)." } },
            { "@type": "Question", "name": "Qual è il modo più veloce per arrivare a Roma centro da Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "Il modo più veloce è il Leonardo Express (32 minuti fino a Roma Termini) o il taxi/transfer privato (30-50 minuti porta a porta, senza attese)." } },
            { "@type": "Question", "name": "Quanto costa andare da Fiumicino a Roma centro in taxi?", "acceptedAnswer": { "@type": "Answer", "text": "Il taxi dall'aeroporto di Fiumicino a Roma centro (dentro le Mura Aureliane) ha una tariffa fissa di €50, valida per max 4 passeggeri con bagagli inclusi." } },
            { "@type": "Question", "name": "Qual è il modo più economico per andare da Fiumicino a Roma?", "acceptedAnswer": { "@type": "Answer", "text": "Il bus navetta (SIT, Terravision) è il più economico a €5-7. Il treno regionale FL1 costa €8. In 3-4 persone il taxi (€12.50 a testa) è competitivo col Leonardo Express (€14)." } },
            { "@type": "Question", "name": "Come arrivo a Roma da Fiumicino di notte?", "acceptedAnswer": { "@type": "Answer", "text": "Dopo le 23:23 il Leonardo Express non opera. Le opzioni notturne sono il taxi (tariffa fissa €50, 24/7), transfer privato prenotato, o bus notturno (limitato)." } },
            { "@type": "Question", "name": "Cosa include la tariffa fissa del taxi di €50?", "acceptedAnswer": { "@type": "Answer", "text": "Include il viaggio porta a porta, fino a 4 passeggeri, tutti i bagagli, nessun supplemento notturno o festivo. Vale per destinazioni dentro le Mura Aureliane." } }
          ]
        }),
      },
    ],
  }),
});

function FiumicinoCentroPage() {
  return (
    <>
      <HeroSection
        title="Da Fiumicino a Roma Centro"
        subtitle="Tutte le Opzioni"
        description="Guida completa su come raggiungere il centro di Roma dall'aeroporto di Fiumicino: taxi, treno, bus e transfer privati con prezzi e tempi aggiornati."
        ctaText="Scopri Tour e Attività a Roma"
        ctaHref="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher"
        image={fiumicinoImg}
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">Come Arrivare dall'Aeroporto di Fiumicino a Roma Centro</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          L'<strong>aeroporto di Fiumicino</strong> dista circa 30 km dal centro storico di Roma. Che tu stia andando in hotel a Piazza di Spagna, al Colosseo, a Trastevere o in Vaticano, hai diverse opzioni per raggiungere il <strong>centro di Roma</strong> comodamente.
        </p>

        {/* Options grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">🚕</div>
            <h3 className="font-display text-lg font-semibold">Taxi — Tariffa Fissa €50</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Il modo più comodo, direttamente porta a porta. La <strong>tariffa fissa di €50</strong> vale per tutte le destinazioni dentro le Mura Aureliane: Termini, Colosseo, Piazza di Spagna, Pantheon, Vaticano, Trastevere centro.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Durata:</strong> 30-50 min • <strong>Passeggeri:</strong> Max 4 • <strong>Bagagli:</strong> Inclusi
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">🚄</div>
            <h3 className="font-display text-lg font-semibold">Leonardo Express — €14</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Treno diretto per <strong>Roma Termini</strong> in 32 minuti. Da Termini puoi prendere metro o taxi per la destinazione finale. Parte ogni 15 minuti.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Orari:</strong> 6:23 – 23:23 • <strong>Frequenza:</strong> Ogni 15 min
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">🚆</div>
            <h3 className="font-display text-lg font-semibold">Treno Regionale FL1 — €8</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ferma a <strong>Trastevere, Ostiense, Tuscolana e Tiburtina</strong>. Ideale se il tuo hotel è vicino a queste stazioni. Più economico del Leonardo Express.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Durata:</strong> 25-45 min • <strong>Frequenza:</strong> Ogni 15-30 min
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-3xl mb-3">🚐</div>
            <h3 className="font-display text-lg font-semibold">Bus Navetta — €5-7</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              SIT, Terravision e altri bus collegano Fiumicino a <strong>Roma Termini</strong>. L'opzione più economica ma anche più lenta, soprattutto con traffico.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Durata:</strong> 50-75 min • <strong>Frequenza:</strong> Ogni 30-60 min
            </p>
          </div>
        </div>

        {/* Which zone is "centro"? */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Cosa Include "Roma Centro" per la Tariffa Fissa?</h2>
        <div className="rounded-xl section-warm p-8">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            La <strong>tariffa fissa del taxi di €50</strong> dall'aeroporto di Fiumicino è valida per tutte le destinazioni dentro le <strong>Mura Aureliane</strong>. Ecco le zone principali incluse:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            {[
              "Termini e Esquilino",
              "Colosseo e Fori Imperiali",
              "Piazza di Spagna e Tridente",
              "Pantheon e Piazza Navona",
              "Campo de' Fiori",
              "Trastevere (centro)",
              "Vaticano e Prati",
              "Piazza del Popolo",
              "Via Veneto",
              "Testaccio",
            ].map((zona) => (
              <div key={zona} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary">✓</span> {zona}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            Per destinazioni <strong>fuori le Mura Aureliane</strong> (EUR, Tiburtina zona industriale, Tor Vergata, GRA), si applica il tassametro con costi tra €55 e €80.
          </p>
        </div>

        {/* Transfer options */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">Prenota Transfer Fiumicino — Roma Centro</h2>
        <p className="text-muted-foreground mb-8">Il modo più comodo: autista che ti aspetta all'arrivo con cartello al tuo nome.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            emoji="🏛️"
            title="Tour Colosseo, Foro e Palatino"
            description="Visita guidata salta-fila al Colosseo, Foro Romano e Palatino. 2.5 ore, piccolo gruppo."
            gygUrl="https://www.getyourguide.com/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"
            price="€35"
          />
          <ActivityCard
            emoji="🏟️"
            title="Tour Musei Vaticani e Sistina"
            description="Tour guidato salta-fila ai Musei Vaticani, Cappella Sistina e Basilica di San Pietro."
            gygUrl="https://www.getyourguide.com/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/"
            price="€30"
          />
          <ActivityCard
            emoji="🌋"
            title="Gita Pompei e Costiera Amalfitana"
            description="Escursione da Roma a Pompei, Costiera Amalfitana e Sorrento. Giornata intera."
            gygUrl="https://www.getyourguide.com/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/"
            price="€120"
          />
        </div>

        <div className="mt-12 text-center">
          <GetYourGuideCTA text="Tutti i Tour e Attività a Roma" url="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>

        {/* FAQ Section */}
        <h2 className="font-display text-3xl font-bold mt-16 mb-8">Domande Frequenti — Fiumicino a Roma Centro</h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            { q: "Come arrivare dall'aeroporto di Fiumicino a Roma centro?", a: "Hai 4 opzioni: taxi a tariffa fissa €50 (30-50 min), Leonardo Express per Termini (€14, 32 min), treno regionale FL1 per Trastevere/Ostiense (€8, 45 min), bus navetta (€5-7, 50-75 min) o transfer privato (da €45)." },
            { q: "Qual è il modo più economico per andare da Fiumicino a Roma?", a: "Il bus navetta (SIT, Terravision) è il più economico a €5-7, seguito dal treno regionale FL1 a €8. In 3-4 persone, il taxi (€50 diviso 4 = €12.50 a testa) è competitivo con il Leonardo Express (€14 a testa)." },
            { q: "Quanto costa un taxi da Fiumicino al Colosseo?", a: "Il Colosseo è dentro le Mura Aureliane, quindi si applica la tariffa fissa di €50. La stessa tariffa vale per Piazza di Spagna, Pantheon, Trastevere centro, Vaticano e tutte le zone dentro le Mura." },
            { q: "Quanto tempo ci vuole da Fiumicino a Roma centro in taxi?", a: "Il tragitto in taxi dura circa 30-50 minuti. Nelle ore di punta (7-10 e 17-20) può arrivare a 60-75 minuti a causa del traffico sulla Roma-Fiumicino." },
            { q: "Come arrivo a Roma da Fiumicino di notte?", a: "Dopo le 23:23 il Leonardo Express non opera. Le opzioni notturne sono il taxi (tariffa fissa €50, disponibile 24/7), un transfer privato prenotato, o il bus notturno (limitato)." },
            { q: "Cosa include la tariffa fissa del taxi di €50?", a: "Include il viaggio porta a porta dall'aeroporto al centro Roma (dentro le Mura Aureliane), fino a 4 passeggeri, tutti i bagagli, e nessun supplemento notturno o festivo." },
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

        {/* Tips */}
        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">💡 Consigli per il Viaggio Fiumicino — Roma Centro</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• <strong>Di notte</strong> (dopo le 23:23): il Leonardo Express non opera. Prendi un taxi (€50) o prenota un transfer privato.</li>
            <li>• <strong>Con molti bagagli:</strong> taxi o transfer privato sono più pratici del treno.</li>
            <li>• <strong>Budget:</strong> il treno regionale FL1 (€8) è l'opzione più economica se la tua destinazione è vicino a Trastevere o Ostiense.</li>
            <li>• <strong>In 3-4 persone:</strong> il taxi è conveniente — €50 diviso 4 = €12.50 a testa, meno del Leonardo Express.</li>
            <li>• <strong>Prima classe non necessaria:</strong> sul Leonardo Express tutti i posti sono uguali, non ci sono classi.</li>
          </ul>
        </div>

        {/* Cross links */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <Link to="/fiumicino" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            ✈️ Aeroporto Fiumicino
          </Link>
          <Link to="/aeroporto-fiumicino-roma-termini" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors">
            🚄 Fiumicino — Termini
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
