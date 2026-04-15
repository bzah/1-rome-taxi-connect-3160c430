import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal-notice")({
  head: () => ({
    meta: [
      { title: "Note Legali — TaxiFiumicino.com | Disclaimer e Avvisi Legali" },
      { name: "description", content: "Note legali e disclaimer di TaxiFiumicino.com: natura informativa del sito, link affiliati, limitazioni di responsabilità, proprietà intellettuale dei contenuti e informazioni sulla giurisdizione italiana applicabile." },
      { property: "og:title", content: "Note Legali — TaxiFiumicino.com | Disclaimer" },
      { property: "og:description", content: "Informazioni legali, disclaimer e avvisi importanti del sito TaxiFiumicino.com." },
      { name: "keywords", content: "note legali taxifiumicino, disclaimer taxi roma, avviso legale, informazioni legali sito taxi, responsabilità contenuti" },
    ],
  }),
  component: LegalNoticePage,
});

function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Note Legali</h1>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">Informazioni sul Sito</h2>
          <p><strong className="text-foreground">Nome del sito:</strong> TaxiFiumicino.com</p>
          <p><strong className="text-foreground">Email:</strong> <a href="mailto:info@taxifiumicino.com" className="text-primary hover:underline">info@taxifiumicino.com</a></p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Natura del Sito</h2>
          <p>TaxiFiumicino.com è un sito web informativo e di affiliazione. Non è un servizio di trasporto pubblico o privato. Non gestisce, organizza né fornisce servizi di taxi o NCC.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Disclaimer</h2>
          <p>Le informazioni presenti su TaxiFiumicino.com sono fornite "così come sono" senza garanzie di alcun tipo. Nonostante ci impegniamo a mantenere le informazioni aggiornate e accurate, non garantiamo la completezza, l'esattezza o l'attualità dei contenuti.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Link Esterni</h2>
          <p>Il sito contiene link verso siti web di terze parti. TaxiFiumicino.com non è responsabile per i contenuti, le politiche sulla privacy o le pratiche di tali siti esterni.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Affiliazioni Commerciali</h2>
          <p>TaxiFiumicino.com partecipa al programma di affiliazione di GetYourGuide e potrebbe partecipare ad altri programmi di affiliazione. I link di affiliazione sono chiaramente identificabili e l'utente viene informato della natura affiliata dei contenuti.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Proprietà Intellettuale</h2>
          <p>Tutti i contenuti originali pubblicati su TaxiFiumicino.com sono protetti dal diritto d'autore italiano ed internazionale. La riproduzione, anche parziale, è vietata senza autorizzazione scritta.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Legge Applicabile</h2>
          <p>Le presenti note legali sono regolate dalla legge italiana. Per qualsiasi controversia sarà competente in via esclusiva il Foro di Roma.</p>
        </div>
      </div>
    </div>
  );
}
