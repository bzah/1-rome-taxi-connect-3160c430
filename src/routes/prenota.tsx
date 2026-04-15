import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { hreflangLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/prenota")({
  component: PrenotaPage,
  head: () => ({
    links: hreflangLinks("/prenota"),
    meta: [
      { title: "Prenota Taxi Roma — Come Prenotare un Taxi Online | TaxiFiumicino.com" },
      { name: "description", content: "Come prenotare un taxi a Roma online: transfer privato aeroporto Fiumicino e Ciampino, navetta condivisa, trasferimenti per Napoli e Civitavecchia. Prenotazione facile con cancellazione gratuita, autista con cartello e prezzi garantiti." },
      { property: "og:title", content: "Prenota Taxi Roma — Transfer Aeroporto e Prenotazione Online" },
      { property: "og:description", content: "Prenota taxi e transfer a Roma online: aeroporto Fiumicino, Ciampino, Napoli, Civitavecchia. Cancellazione gratuita e prezzi fissi." },
      { name: "keywords", content: "prenotare taxi roma, come prenotare un taxi a roma, prenotazione taxi roma, taxi prenotazione roma, come chiamare taxi a roma, transfer privato roma, prenotazione transfer fiumicino, navetta aeroporto roma, taxi online roma prenotazione" },
    ],
  }),
});

function PrenotaPage() {
  return (
    <>
      <HeroSection
        title="Prenota un Taxi a Roma"
        subtitle="Prenotazione Facile"
        description="Prenota il tuo taxi o transfer privato a Roma in pochi click. Cancellazione gratuita, autisti professionisti, prezzi trasparenti."
        ctaText="Prenota Ora"
        ctaHref="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher"
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-center mb-4">Transfer e Taxi Prenotabili Online</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Prenota il tuo trasferimento con cancellazione gratuita. Autista con cartello al tuo nome, veicolo moderno, prezzo garantito.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            emoji="✈️"
            title="Transfer Privato Fiumicino — Roma"
            description="Autista privato dall'aeroporto di Fiumicino al tuo hotel a Roma. Meet & greet incluso."
            gygUrl="https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/"
            price="€45"
          />
          <ActivityCard
            emoji="🚐"
            title="Navetta Condivisa Fiumicino"
            description="Shuttle bus dall'aeroporto di Fiumicino alla stazione Termini. La soluzione più economica."
            gygUrl="https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/"
            price="€7"
          />
          <ActivityCard
            emoji="🏛️"
            title="Transfer Privato Ciampino — Roma"
            description="Trasferimento dall'aeroporto di Ciampino al centro di Roma con autista."
            gygUrl="https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/"
            price="€35"
          />
          <ActivityCard
            emoji="🚂"
            title="Transfer Roma — Napoli"
            description="Trasferimento privato da Roma a Napoli o viceversa. Comodo e diretto."
            gygUrl="https://www.getyourguide.com/rome-l33/private-transfer-rome-naples-t226/"
            price="€180"
          />
          <ActivityCard
            emoji="⛵"
            title="Transfer Roma — Civitavecchia"
            description="Trasferimento al porto crociere di Civitavecchia. Perfetto per le crociere."
            gygUrl="https://www.getyourguide.com/rome-l33/private-transfer-civitavecchia-t123/"
            price="€95"
          />
          <ActivityCard
            emoji="🏖️"
            title="Transfer Roma — Tivoli"
            description="Escursione a Villa d'Este e Villa Adriana con trasporto privato incluso."
            gygUrl="https://www.getyourguide.com/rome-l33/tivoli-tour-t456/"
            price="€75"
          />
        </div>

        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-6">Come Prenotare un Taxi a Roma</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-xl font-bold text-primary-foreground">1</div>
              <h4 className="font-semibold mb-2">Scegli il Transfer</h4>
              <p className="text-sm text-muted-foreground">Seleziona la tratta che ti serve: aeroporto, stazione, o destinazione turistica.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-xl font-bold text-primary-foreground">2</div>
              <h4 className="font-semibold mb-2">Prenota Online</h4>
              <p className="text-sm text-muted-foreground">Inserisci data, ora e dettagli del volo. Pagamento sicuro, cancellazione gratuita.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-xl font-bold text-primary-foreground">3</div>
              <h4 className="font-semibold mb-2">Viaggio Garantito</h4>
              <p className="text-sm text-muted-foreground">L'autista ti aspetta con cartello al tuo nome. Nessuna sorpresa sul prezzo.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <GetYourGuideCTA text="Vedi Tutti i Transfer a Roma" url="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>
      </section>
    </>
  );
}
