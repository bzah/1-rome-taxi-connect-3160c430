import { createFileRoute } from "@tanstack/react-router";
import { i18nLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    links: i18nLinks("/terms-of-service", "it"),
    meta: [
      { title: "Termini di Servizio — TaxiFiumicino.com | Condizioni d'Uso" },
      { name: "description", content: "Termini e condizioni d'uso di TaxiFiumicino.com: regole per l'utilizzo del portale informativo taxi Roma, responsabilità, link affiliati GetYourGuide, proprietà intellettuale e limitazioni di responsabilità." },
      { property: "og:title", content: "Termini di Servizio — TaxiFiumicino.com" },
      { property: "og:description", content: "Condizioni generali di utilizzo del sito TaxiFiumicino.com. Leggi le regole e responsabilità." },
      { name: "keywords", content: "termini servizio taxifiumicino, condizioni uso taxi roma, regolamento sito taxi, termini e condizioni transfer roma" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Termini di Servizio</h1>
        <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: Aprile 2026</p>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">1. Accettazione dei Termini</h2>
          <p>Utilizzando TaxiFiumicino.com, accetti integralmente i presenti termini di servizio. Se non li accetti, ti invitiamo a non utilizzare il sito.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">2. Natura del Servizio</h2>
          <p>TaxiFiumicino.com è un portale informativo che fornisce guide, tariffe e informazioni sui servizi taxi a Roma. Il sito non è un servizio di trasporto e non gestisce prenotazioni dirette di taxi.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">3. Contenuti Informativi</h2>
          <p>Le informazioni pubblicate sono fornite a scopo informativo e possono contenere imprecisioni o non essere aggiornate. TaxiFiumicino.com non garantisce l'accuratezza, la completezza o l'attualità dei contenuti.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">4. Link Affiliati</h2>
          <p>Il sito contiene link di affiliazione verso servizi di terze parti (es. GetYourGuide). Quando effettui un acquisto tramite questi link, potremmo ricevere una commissione. I prezzi per l'utente non cambiano.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">5. Proprietà Intellettuale</h2>
          <p>Tutti i contenuti del sito (testi, grafica, logo, layout) sono di proprietà di TaxiFiumicino.com e protetti dalle leggi sul diritto d'autore. È vietata la riproduzione non autorizzata.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">6. Limitazione di Responsabilità</h2>
          <p>TaxiFiumicino.com non è responsabile per eventuali danni diretti o indiretti derivanti dall'uso delle informazioni pubblicate sul sito o dall'utilizzo di servizi di terze parti linkati.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">7. Modifiche ai Termini</h2>
          <p>Ci riserviamo il diritto di modificare i presenti termini in qualsiasi momento. Le modifiche saranno efficaci dalla data di pubblicazione sul sito.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">8. Legge Applicabile</h2>
          <p>I presenti termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il Foro di Roma.</p>
        </div>
      </div>
    </div>
  );
}
