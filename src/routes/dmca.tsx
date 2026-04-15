import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dmca")({
  head: () => ({
    meta: [
      { title: "DMCA — TaxiFiumicino.com" },
      { name: "description", content: "Procedura DMCA per la segnalazione di violazioni del copyright su TaxiFiumicino.com." },
      { property: "og:title", content: "DMCA — TaxiFiumicino.com" },
      { property: "og:description", content: "Come segnalare violazioni del diritto d'autore." },
    ],
  }),
  component: DmcaPage,
});

function DmcaPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">DMCA — Digital Millennium Copyright Act</h1>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p>TaxiFiumicino.com rispetta la proprietà intellettuale altrui e si impegna a rispondere tempestivamente a qualsiasi segnalazione di presunta violazione del copyright.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Segnalazione di Violazione</h2>
          <p>Se ritieni che un contenuto pubblicato su TaxiFiumicino.com violi i tuoi diritti d'autore, ti preghiamo di inviarci una notifica scritta contenente:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Identificazione dell'opera protetta da copyright che ritieni sia stata violata</li>
            <li>Identificazione del contenuto che ritieni violi il copyright, con URL specifico</li>
            <li>I tuoi dati di contatto (nome, indirizzo, email, numero di telefono)</li>
            <li>Una dichiarazione in buona fede che l'uso del materiale non è autorizzato dal titolare del copyright</li>
            <li>Una dichiarazione, sotto pena di falsa testimonianza, che le informazioni nella notifica sono accurate</li>
            <li>La tua firma fisica o elettronica</li>
          </ol>

          <h2 className="font-display text-2xl font-semibold text-foreground">Contatto per DMCA</h2>
          <p>Invia la tua segnalazione a: <a href="mailto:info@taxifiumicino.com" className="text-primary hover:underline">info@taxifiumicino.com</a></p>
          <p>Oggetto: "DMCA Takedown Request"</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Tempi di Risposta</h2>
          <p>Ci impegniamo a esaminare e rispondere a tutte le segnalazioni DMCA valide entro 48 ore lavorative. Il contenuto contestato potrà essere rimosso o disabilitato durante l'indagine.</p>

          <h2 className="font-display text-2xl font-semibold text-foreground">Contro-Notifica</h2>
          <p>Se ritieni che il tuo contenuto sia stato rimosso per errore, puoi inviare una contro-notifica con le stesse modalità sopra descritte, spiegando le ragioni per cui il contenuto non viola il copyright.</p>
        </div>
      </div>
    </div>
  );
}
