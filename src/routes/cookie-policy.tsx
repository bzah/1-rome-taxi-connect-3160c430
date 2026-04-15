import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — TaxiFiumicino.com | Gestione Cookie e Tracciamento" },
      { name: "description", content: "Informativa sui cookie di TaxiFiumicino.com: cookie tecnici, analitici e di terze parti (Google Analytics, GetYourGuide). Come disabilitarli, gestire le preferenze e i tuoi diritti secondo il GDPR." },
      { property: "og:title", content: "Cookie Policy — TaxiFiumicino.com" },
      { property: "og:description", content: "Scopri quali cookie utilizziamo, perché e come gestirli nelle impostazioni del browser." },
      { name: "keywords", content: "cookie policy taxifiumicino, cookie taxi roma, gestione cookie, GDPR cookie, informativa cookie sito taxi" },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: Aprile 2026</p>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">Cosa Sono i Cookie</h2>
          <p>I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Servono a migliorare l'esperienza di navigazione e a raccogliere informazioni sull'utilizzo del sito.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Cookie Utilizzati</h2>

          <h3 className="font-display text-xl font-semibold text-foreground">Cookie Tecnici (Necessari)</h3>
          <p>Essenziali per il funzionamento del sito. Non richiedono il consenso dell'utente.</p>

          <h3 className="font-display text-xl font-semibold text-foreground">Cookie Analitici</h3>
          <p>Utilizzati per analizzare il traffico e comprendere come gli utenti interagiscono con il sito (es. Google Analytics). Questi cookie raccolgono informazioni in forma anonima.</p>

          <h3 className="font-display text-xl font-semibold text-foreground">Cookie di Affiliazione</h3>
          <p>Cookie di terze parti utilizzati per tracciare le conversioni dai nostri link affiliati:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>GetYourGuide</strong> — traccia le prenotazioni effettuate tramite i nostri link di affiliazione</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-foreground">Come Gestire i Cookie</h2>
          <p>Puoi gestire le preferenze sui cookie attraverso le impostazioni del tuo browser:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Chrome</strong>: Impostazioni → Privacy e sicurezza → Cookie</li>
            <li><strong>Firefox</strong>: Impostazioni → Privacy e sicurezza → Cookie</li>
            <li><strong>Safari</strong>: Preferenze → Privacy → Cookie</li>
            <li><strong>Edge</strong>: Impostazioni → Cookie e autorizzazioni sito</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-foreground">Aggiornamenti</h2>
          <p>Questa policy può essere aggiornata periodicamente. Ti invitiamo a consultarla regolarmente per eventuali modifiche.</p>
        </div>
      </div>
    </div>
  );
}
