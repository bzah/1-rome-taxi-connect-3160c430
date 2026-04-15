import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contatti — TaxiFiumicino.com" },
      { name: "description", content: "Contatta TaxiFiumicino.com per domande, suggerimenti o collaborazioni sui servizi taxi a Roma e Fiumicino." },
      { property: "og:title", content: "Contatti — TaxiFiumicino.com" },
      { property: "og:description", content: "Contattaci per informazioni sui taxi a Roma e trasferimenti aeroportuali." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Contatti</h1>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p>
            Hai domande sui servizi taxi a Roma? Vuoi segnalare un'informazione non aggiornata? Contattaci!
          </p>

          <div className="rounded-xl border border-border bg-card p-8 not-prose">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Informazioni di Contatto</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:info@taxifiumicino.com" className="text-primary hover:underline">info@taxifiumicino.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🌐</span>
                <div>
                  <p className="font-medium text-foreground">Sito Web</p>
                  <p>www.taxifiumicino.com</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">Collaborazioni</h2>
          <p>
            Se sei un operatore turistico, un hotel o un servizio di trasporto e desideri collaborare con noi, inviaci un'email con la tua proposta.
          </p>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">Segnalazioni</h2>
          <p>
            Se hai trovato informazioni non corrette o desideri suggerire miglioramenti al nostro contenuto, non esitare a scriverci. Il tuo feedback è prezioso per mantenere il sito accurato e utile.
          </p>
        </div>
      </div>
    </div>
  );
}
