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
        ctaHref="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher"
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Transfer e Taxi<br className="hidden sm:block" /> Prenotabili Online</h2>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
            Cancellazione gratuita, autista con cartello, prezzo garantito.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard emoji="🏛️" title="Tour Colosseo, Foro e Palatino" description="Visita guidata salta-fila al Colosseo, Foro Romano e Palatino. 2.5 ore, piccolo gruppo." gygUrl="https://www.getyourguide.com/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/" price="€35" />
          <ActivityCard emoji="🏟️" title="Tour Musei Vaticani e Sistina" description="Tour guidato salta-fila ai Musei Vaticani, Cappella Sistina e Basilica." gygUrl="https://www.getyourguide.com/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/" price="€30" />
          <ActivityCard emoji="🎫" title="Biglietto Vaticano — Salta la Fila" description="Ingresso prioritario ai Musei Vaticani e Cappella Sistina. Tutto il giorno." gygUrl="https://www.getyourguide.com/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/" price="€25" />
          <ActivityCard emoji="🌋" title="Gita Pompei e Costiera Amalfitana" description="Escursione giornaliera da Roma a Pompei, Costiera Amalfitana e Sorrento." gygUrl="https://www.getyourguide.com/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/" price="€120" />
          <ActivityCard emoji="🍝" title="Corso Pasta e Tiramisù" description="Impara a cucinare pasta e tiramisù in un ristorante locale vicino al Vaticano." gygUrl="https://www.getyourguide.com/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/" price="€55" />
          <ActivityCard emoji="🚌" title="Bus Hop-on Hop-off Roma" description="Esplora Roma al tuo ritmo con il bus turistico panoramico. Valido fino a 3 giorni." gygUrl="https://www.getyourguide.com/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/" price="€25" />
        </div>

        {/* How to book */}
        <div className="mt-20 rounded-sm border border-stone-warm bg-card p-8 sm:p-10">
          <h3 className="font-display text-2xl font-semibold mb-8 tracking-tight">Come Prenotare un Taxi a Roma</h3>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Scegli il Transfer", desc: "Seleziona la tratta che ti serve: aeroporto, stazione, o destinazione turistica." },
              { step: "02", title: "Prenota Online", desc: "Inserisci data, ora e dettagli del volo. Pagamento sicuro, cancellazione gratuita." },
              { step: "03", title: "Viaggio Garantito", desc: "L'autista ti aspetta con cartello al tuo nome. Nessuna sorpresa sul prezzo." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-block font-display text-4xl font-semibold text-primary/30 tracking-tight mb-3">{item.step}</span>
                <h4 className="font-display text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <GetYourGuideCTA text="Vedi Tutti i Transfer a Roma" url="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>
      </section>
    </>
  );
}
