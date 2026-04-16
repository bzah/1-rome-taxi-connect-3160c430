import { createFileRoute, Link } from "@tanstack/react-router";
import { i18nLinks } from "@/i18n/hreflang";

export const Route = createFileRoute("/about")({
  head: () => ({
    links: i18nLinks("/about", "it"),
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
    <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 sm:px-8">
      {/* Intro */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Chi Siamo</h1>
        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed text-pretty">
          Il portale italiano di riferimento per taxi a Roma.
        </p>
      </div>

      <div className="text-muted-foreground space-y-5 text-base leading-relaxed mb-16">
        <p>
          <strong className="text-foreground">TaxiFiumicino.com</strong> è un portale informativo dedicato ai servizi di trasporto taxi a Roma e dall'Aeroporto di Roma Fiumicino Leonardo da Vinci.
        </p>
      </div>

      {/* Mission */}
      <div className="rounded-sm border border-stone-warm bg-card p-8 mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight mb-5">La Nostra Missione</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Fornire informazioni accurate, aggiornate e complete sui servizi taxi nella capitale italiana. Aiutiamo viaggiatori, turisti e residenti a orientarsi tra tariffe, numeri utili, app e opzioni di trasporto disponibili.
        </p>
      </div>

      {/* What we offer */}
      <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Cosa Offriamo</h2>
      <div className="grid gap-5 sm:grid-cols-2 mb-16">
        {[
          { icon: "📋", title: "Guide Tariffe", desc: "Guide dettagliate sulle tariffe taxi a Roma aggiornate al 2026." },
          { icon: "✈️", title: "Transfer Aeroportuali", desc: "Informazioni sui trasferimenti da Fiumicino e Ciampino." },
          { icon: "📞", title: "Numeri Radio Taxi", desc: "Tutti i numeri utili dei radiotaxi romani a portata di mano." },
          { icon: "📱", title: "App e Prenotazioni", desc: "Recensioni e confronti tra le app taxi disponibili a Roma." },
          { icon: "🏨", title: "Hotel Aeroportuali", desc: "Consigli su hotel vicino agli aeroporti di Roma." },
          { icon: "🅿️", title: "Parcheggi", desc: "Informazioni aggiornate sui parcheggi aeroportuali." },
        ].map((item, i) => (
          <div key={item.title} className="rounded-sm border border-stone-warm bg-card p-7 hover:border-primary/30 transition-colors duration-500">
            <div className="flex items-start gap-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <span className="text-xs text-primary/60 font-display tracking-widest">{String(i + 1).padStart(2, '0')}.</span>
                <h3 className="font-display text-lg font-semibold mt-0.5">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Affiliazioni */}
      <div className="rounded-sm border border-stone-warm bg-card p-8 mb-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight mb-5">Affiliazioni</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          TaxiFiumicino.com partecipa a programmi di affiliazione, tra cui GetYourGuide. Quando prenoti un'attività o un trasferimento tramite i nostri link, potremmo ricevere una commissione senza costi aggiuntivi per te. Questo ci permette di mantenere il sito gratuito e aggiornato.
        </p>
      </div>

      {/* Contattaci */}
      <div className="rounded-sm border border-stone-warm bg-card p-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight mb-5">Contattaci</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Per domande, suggerimenti o collaborazioni, scrivici a: <a href="mailto:info@taxifiumicino.com" className="text-primary hover:underline font-medium">info@taxifiumicino.com</a>
        </p>
      </div>

      {/* Cross links */}
      <div className="mt-14 flex flex-wrap gap-3 justify-center">
        {[
          { to: "/contact", label: "✉️ Contattaci" },
          { to: "/tariffe", label: "💰 Tariffe Taxi" },
          { to: "/fiumicino", label: "✈️ Aeroporto Fiumicino" },
        ].map((link) => (
          <Link key={link.to} to={link.to} className="inline-flex items-center gap-2 rounded-sm border border-stone-warm px-4 py-2.5 text-sm font-medium hover:bg-accent/50 hover:border-primary/30 transition-all">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
