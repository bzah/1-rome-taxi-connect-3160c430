import { createFileRoute } from "@tanstack/react-router";
import { hreflangLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: hreflangLinks("/about"),
    meta: [
      { title: "Chi Siamo — TaxiFiumicino.com | Guida Taxi Roma e Fiumicino" },
      { name: "description", content: "Scopri chi siamo: TaxiFiumicino.com è il portale italiano di riferimento per taxi a Roma, transfer aeroporto Fiumicino e Ciampino, tariffe ufficiali, numeri radio taxi e prenotazioni online. La nostra missione è aiutare turisti e residenti." },
      { property: "og:title", content: "Chi Siamo — TaxiFiumicino.com | Guida Taxi Roma" },
      { property: "og:description", content: "TaxiFiumicino.com: portale informativo su taxi Roma, transfer aeroporto Fiumicino, tariffe e prenotazioni. Scopri la nostra missione." },
      { name: "keywords", content: "chi siamo taxifiumicino, taxi roma guida, informazioni taxi roma, portale taxi fiumicino, servizio taxi roma aeroporto" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Chi Siamo</h1>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p>
            <strong className="text-foreground">TaxiFiumicino.com</strong> è un portale informativo dedicato ai servizi di trasporto taxi a Roma e dall'Aeroporto di Roma Fiumicino Leonardo da Vinci.
          </p>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">La Nostra Missione</h2>
          <p>
            La nostra missione è fornire informazioni accurate, aggiornate e complete sui servizi taxi nella capitale italiana. Aiutiamo viaggiatori, turisti e residenti a orientarsi tra tariffe, numeri utili, app e opzioni di trasporto disponibili.
          </p>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">Cosa Offriamo</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Guide dettagliate sulle tariffe taxi a Roma</li>
            <li>Informazioni sui trasferimenti aeroportuali (Fiumicino e Ciampino)</li>
            <li>Numeri utili dei radiotaxi romani</li>
            <li>Recensioni e confronti tra app taxi</li>
            <li>Consigli su hotel vicino agli aeroporti</li>
            <li>Informazioni su parcheggi aeroportuali</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">Affiliazioni</h2>
          <p>
            TaxiFiumicino.com partecipa a programmi di affiliazione, tra cui GetYourGuide. Quando prenoti un'attività o un trasferimento tramite i nostri link, potremmo ricevere una commissione senza costi aggiuntivi per te. Questo ci permette di mantenere il sito gratuito e aggiornato.
          </p>

          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">Contattaci</h2>
          <p>
            Per domande, suggerimenti o collaborazioni, scrivici a: <a href="mailto:info@taxifiumicino.com" className="text-primary hover:underline">info@taxifiumicino.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
