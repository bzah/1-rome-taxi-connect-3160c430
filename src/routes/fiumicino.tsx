import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";

export const Route = createFileRoute("/fiumicino")({
  component: FiumicinoPage,
  head: () => ({
    meta: [
      { title: "Taxi Roma Fiumicino — Transfer Aeroporto, Tariffa Fissa €50 | TaxiFiumicino.com" },
      { name: "description", content: "Taxi da Roma Fiumicino: tariffa fissa €50, come prenotare, tempi di percorrenza, alternative. Guida completa al transfer aeroporto Leonardo da Vinci." },
      { property: "og:title", content: "Taxi Roma Fiumicino — Transfer Aeroporto a Tariffa Fissa" },
      { property: "og:description", content: "Transfer taxi aeroporto Fiumicino-Roma centro a €50 tariffa fissa. Guida completa." },
      { name: "keywords", content: "taxi roma fiumicino, taxi tariffa roma fiumicino, tariffa roma fiumicino taxi, quanto costa taxi fiumicino roma, transfer aeroporto fiumicino roma" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quanto costa un taxi da Fiumicino a Roma?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "La tariffa fissa per un taxi dall'aeroporto di Fiumicino al centro di Roma (dentro le Mura Aureliane) è di €50, valida per max 4 passeggeri con bagagli inclusi."
              }
            },
            {
              "@type": "Question",
              "name": "Dove trovare i taxi a Fiumicino?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I taxi ufficiali si trovano all'uscita degli Arrivi, ai Terminal 1 e 3. Segui i cartelli 'Taxi' e mettiti in fila alla postazione ufficiale."
              }
            },
            {
              "@type": "Question",
              "name": "Quanto tempo ci vuole da Fiumicino a Roma centro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Il tragitto dura circa 30-50 minuti a seconda del traffico. Nelle ore di punta può arrivare a 60-75 minuti."
              }
            }
          ]
        }),
      },
    ],
  }),
});

function FiumicinoPage() {
  return (
    <>
      <HeroSection
        title="Taxi Roma Fiumicino"
        subtitle="Transfer Aeroporto"
        description="Tutto sul trasferimento in taxi dall'aeroporto Leonardo da Vinci di Fiumicino al centro di Roma. Tariffa fissa €50, durata circa 45 minuti."
        ctaText="Prenota Transfer Privato"
        ctaHref="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/?partner_id=0IQTGX8&utm_medium=online_publisher"
        image={fiumicinoImg}
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">Come Prendere un Taxi a Fiumicino</h2>
        
        <div className="prose prose-sm max-w-none text-foreground space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'aeroporto di Roma Fiumicino (Leonardo da Vinci) è il principale scalo della Capitale. Il taxi è il modo più comodo e veloce per raggiungere il centro di Roma, con una <strong>tariffa fissa di €50</strong> stabilita dal Comune.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 mt-8">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">🚕</div>
              <h3 className="font-display text-lg font-semibold">Dove Trovare i Taxi</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I taxi ufficiali si trovano all'uscita degli Arrivi, ai Terminal 1 e 3. Segui i cartelli "Taxi" e mettiti in fila alla postazione ufficiale. Non accettare mai passaggi da abusivi.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-display text-lg font-semibold">Tempi di Percorrenza</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Il tragitto Fiumicino — centro Roma dura circa 30-50 minuti, a seconda del traffico. Nelle ore di punta può arrivare fino a 60-75 minuti.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">💶</div>
              <h3 className="font-display text-lg font-semibold">Tariffa Fissa €50</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                La tariffa fissa di €50 è valida per destinazioni dentro le Mura Aureliane, fino a 4 passeggeri, bagagli inclusi. Comunica al tassista che vuoi la tariffa fissa prima di partire.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-display text-lg font-semibold">Pagamento</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I taxi di Roma accettano contanti e carte di credito/debito. Per legge, il POS deve essere funzionante. Puoi anche pagare con app contactless.
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-display text-3xl font-bold mt-16 mb-4">Alternative al Taxi Tradizionale</h2>
        <p className="text-muted-foreground mb-8">Prenota online un transfer privato per un'esperienza ancora più comoda, con autista che ti aspetta all'arrivo.</p>

        <div className="grid gap-6 sm:grid-cols-2">
          <ActivityCard
            emoji="🚗"
            title="Transfer Privato Fiumicino — Roma"
            description="Autista privato con cartello al tuo nome. Veicolo moderno con aria condizionata. Cancellazione gratuita."
            gygUrl="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/"
            price="€45"
          />
          <ActivityCard
            emoji="🚐"
            title="Navetta Condivisa Fiumicino"
            description="Navetta economica dall'aeroporto alla stazione Termini. Partenze frequenti, prezzo imbattibile."
            gygUrl="https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/"
            price="€7"
          />
        </div>

        <div className="mt-12 text-center">
          <GetYourGuideCTA text="Tutti i Transfer Fiumicino" url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>

        {/* SEO content */}
        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">Quanto Costa un Taxi da Fiumicino a Roma?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Il costo di un taxi dall'aeroporto di Fiumicino al centro di Roma è una <strong>tariffa fissa di €50</strong>, stabilita dal Comune di Roma. Questa tariffa è valida per corse verso destinazioni dentro le Mura Aureliane (che includono tutti i principali hotel e attrazioni del centro storico). La tariffa comprende fino a 4 passeggeri e i bagagli.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Per destinazioni fuori le Mura Aureliane (come EUR, Tiburtina, o zone periferiche), si applica il tassametro normale. In questo caso, il costo può variare tra €55 e €80 a seconda della distanza e del traffico.
          </p>
        </div>
      </section>
    </>
  );
}
