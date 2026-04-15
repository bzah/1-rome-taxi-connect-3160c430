import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TaxiFiumicino.com | Protezione Dati GDPR" },
      { name: "description", content: "Informativa sulla privacy di TaxiFiumicino.com conforme al GDPR: come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali. Cookie, analytics, diritti dell'utente e modalità di contatto per la cancellazione dei dati." },
      { property: "og:title", content: "Privacy Policy — TaxiFiumicino.com" },
      { property: "og:description", content: "Informativa sulla privacy e protezione dei dati personali conforme al GDPR. Scopri i tuoi diritti." },
      { name: "keywords", content: "privacy policy taxifiumicino, protezione dati personali, GDPR taxi roma, informativa privacy, cookie policy taxi roma" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: Aprile 2026</p>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">1. Titolare del Trattamento</h2>
          <p>Il titolare del trattamento dei dati è TaxiFiumicino.com, contattabile all'indirizzo email: info@taxifiumicino.com.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">2. Dati Raccolti</h2>
          <p>Il sito può raccogliere le seguenti tipologie di dati:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dati di navigazione (indirizzo IP, browser, pagine visitate, orario di accesso)</li>
            <li>Cookie tecnici e di profilazione (vedi Cookie Policy)</li>
            <li>Dati forniti volontariamente tramite email di contatto</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-foreground">3. Finalità del Trattamento</h2>
          <p>I dati vengono trattati per:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Garantire il funzionamento tecnico del sito</li>
            <li>Analizzare il traffico e migliorare i contenuti</li>
            <li>Rispondere alle richieste degli utenti</li>
            <li>Gestire le affiliazioni commerciali (es. GetYourGuide)</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-foreground">4. Base Giuridica</h2>
          <p>Il trattamento è basato sul consenso dell'utente e sul legittimo interesse del titolare, ai sensi del Regolamento UE 2016/679 (GDPR).</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">5. Condivisione dei Dati</h2>
          <p>I dati non vengono venduti a terzi. Possono essere condivisi con:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fornitori di servizi analytics (es. Google Analytics)</li>
            <li>Partner affiliati (es. GetYourGuide) tramite cookie di tracciamento</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-foreground">6. Diritti dell'Utente</h2>
          <p>Ai sensi del GDPR, hai diritto di:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Accedere ai tuoi dati personali</li>
            <li>Richiederne la rettifica o la cancellazione</li>
            <li>Opporti al trattamento</li>
            <li>Richiedere la portabilità dei dati</li>
          </ul>
          <p>Per esercitare questi diritti, scrivi a: <a href="mailto:info@taxifiumicino.com" className="text-primary hover:underline">info@taxifiumicino.com</a></p>

          <h2 className="font-display text-2xl font-semibold text-foreground">7. Conservazione dei Dati</h2>
          <p>I dati vengono conservati per il tempo necessario alle finalità indicate e comunque non oltre 24 mesi dalla raccolta.</p>
        </div>
      </div>
    </div>
  );
}
