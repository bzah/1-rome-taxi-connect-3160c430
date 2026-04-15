import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/parents-info")({
  head: () => ({
    meta: [
      { title: "Informazioni per i Genitori — TaxiFiumicino.com | Sicurezza Minori" },
      { name: "description", content: "Informazioni per i genitori sull'utilizzo di TaxiFiumicino.com: sicurezza online dei minori, contenuti del sito, link esterni e affiliati, consigli per la navigazione sicura e protezione dei dati dei bambini secondo il GDPR." },
      { property: "og:title", content: "Informazioni per i Genitori — TaxiFiumicino.com" },
      { property: "og:description", content: "Guida per i genitori sulla sicurezza dei minori online e sull'utilizzo di TaxiFiumicino.com." },
      { name: "keywords", content: "genitori sicurezza online, protezione minori taxi roma, sicurezza bambini internet, informazioni genitori, navigazione sicura" },
    ],
  }),
  component: ParentsInfoPage,
});

function ParentsInfoPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Informazioni per i Genitori</h1>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p>TaxiFiumicino.com si impegna a garantire un'esperienza online sicura per tutti gli utenti, compresi i minori.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Contenuti del Sito</h2>
          <p>TaxiFiumicino.com è un sito informativo dedicato ai servizi di trasporto taxi a Roma. I contenuti sono di natura informativa e adatti a tutti i pubblici. Non conteniamo materiale inappropriato per i minori.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Raccolta Dati dei Minori</h2>
          <p>Non raccogliamo consapevolmente dati personali di minori di 16 anni. Se un genitore o tutore scopre che il proprio figlio ci ha fornito dati personali, è pregato di contattarci immediatamente.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Link Esterni</h2>
          <p>Il sito contiene link verso servizi di terze parti (come GetYourGuide per prenotazioni turistiche). Consigliamo ai genitori di supervisionare la navigazione dei minori e di verificare le politiche sulla privacy dei siti esterni.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Cookie e Tracciamento</h2>
          <p>Il sito utilizza cookie tecnici e di affiliazione. Per maggiori informazioni, consulta la nostra <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Consigli per i Genitori</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supervisiona la navigazione online dei tuoi figli</li>
            <li>Utilizza gli strumenti di controllo parentale offerti dal tuo browser</li>
            <li>Insegna ai tuoi figli a non condividere informazioni personali online</li>
            <li>Verifica sempre i siti web visitati dai tuoi figli</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-foreground">Contattaci</h2>
          <p>Per qualsiasi domanda relativa alla protezione dei minori, scrivi a: <a href="mailto:info@taxifiumicino.com" className="text-primary hover:underline">info@taxifiumicino.com</a></p>
        </div>
      </div>
    </div>
  );
}
