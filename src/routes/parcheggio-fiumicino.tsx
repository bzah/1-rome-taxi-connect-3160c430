import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { i18nLinks } from "@/i18n/hreflang";
import { RomeDiscoverGrid, ROME_TRANSFERS, ROME_HISTORY, ROME_PANORAMIC } from "@/components/RomeDiscoverSection";
import { discoverJsonLdScript } from "@/lib/discover-jsonld";
import {
  GYG_COLOSSEUM_TOUR,
  GYG_ROME_TRANSFERS,
  GYG_HOP_ON_BUS,
  GYG_ROME_ALL,
} from "@/lib/gyg-links";

export const Route = createFileRoute("/parcheggio-fiumicino")({
  component: ParcheggioFiumicinoPage,
  head: () => ({
    links: i18nLinks("/parcheggio-fiumicino", "it"),
    meta: [
      { title: "Parcheggio Fiumicino 2026 — Tariffe, Mappa e Confronto Parcheggi | TaxiFiumicino.com" },
      { name: "description", content: "Parcheggio Fiumicino aeroporto: confronto tariffe parcheggi ufficiali, low cost e convenzionati. Prezzi da €5/giorno, mappa terminal e consigli per risparmiare." },
      { property: "og:title", content: "Parcheggio Fiumicino — Guida Completa Tariffe e Parcheggi Aeroporto Roma" },
      { property: "og:description", content: "Trova il parcheggio migliore all'aeroporto di Fiumicino: confronto tariffe, parcheggi ufficiali e low cost." },
      { name: "keywords", content: "parcheggio fiumicino, parcheggio aeroporto fiumicino, parcheggio fiumicino prezzi, parcheggio low cost fiumicino, parcheggio lungo sosta fiumicino" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Quanto costa il parcheggio all'aeroporto di Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "I prezzi variano: Lunga Sosta da €8/giorno, Multipiano da €24/giorno, low cost convenzionati da €5/giorno con navetta gratuita." } },
            { "@type": "Question", "name": "Quale parcheggio è più economico a Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "I parcheggi low cost esterni convenzionati come ParkVia, con tariffe da €5/giorno. Il Lunga Sosta è il più economico tra i parcheggi ufficiali ADR." } },
            { "@type": "Question", "name": "Come prenotare il parcheggio all'aeroporto di Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "Online su adr.it/parcheggi o tramite comparatori come ParkVia. Prenotando in anticipo risparmi fino al 60%." } },
            { "@type": "Question", "name": "Conviene prendere un taxi o parcheggiare a Fiumicino?", "acceptedAnswer": { "@type": "Answer", "text": "Per soggiorni brevi (1-3 giorni), il taxi €50 dal centro è più conveniente. Per 7+ giorni, il parcheggio low cost a €5/giorno conviene di più." } }
          ]
        })
      }
    ]
  }),
});

function ParcheggioFiumicinoPage() {
  return (
    <>
      <HeroSection
        title="Parcheggio Fiumicino"
        subtitle="Guida Tariffe 2026"
        description="Confronta tariffe, parcheggi ufficiali e low cost all'aeroporto di Roma Fiumicino. Trova il parcheggio ideale e risparmia fino al 60% prenotando online."
      />

      {/* Tabella comparativa */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Confronto Parcheggi<br className="hidden sm:block" /> Fiumicino 2026</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
            Tutti i parcheggi disponibili con prezzi aggiornati e servizi inclusi.
          </p>
        </div>

        <div className="overflow-x-auto rounded-sm border border-stone-warm bg-card">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-stone-warm">
                <th className="py-4 px-5 text-left font-display text-sm font-semibold">Parcheggio</th>
                <th className="py-4 px-4 text-left font-display text-sm font-semibold">Tipo</th>
                <th className="py-4 px-4 text-left font-display text-sm font-semibold">Prezzo/giorno</th>
                <th className="py-4 px-4 text-left font-display text-sm font-semibold">7 giorni</th>
                <th className="py-4 px-4 text-left font-display text-sm font-semibold">Distanza</th>
                <th className="py-4 px-4 text-left font-display text-sm font-semibold">Navetta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-warm">
              {[
                ["Multipiano T1", "Coperto", "€24", "€168", "2 min a piedi", "—"],
                ["Multipiano T3", "Coperto", "€24", "€168", "3 min a piedi", "—"],
                ["Lunga Sosta", "Scoperto", "€8", "€52", "10 min navetta", "✅ Gratis"],
                ["Low Cost Esterno ⭐", "Scoperto/Coperto", "da €5", "da €29", "15 min navetta", "✅ Gratis"],
                ["Parcheggio VIP", "Coperto + Valet", "€35", "€210", "Valet al Terminal", "—"],
              ].map(([name, type, price, weekly, dist, shuttle]) => (
                <tr key={name} className="hover:bg-accent/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-sm">{name}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{type}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-primary">{price}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{weekly}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{dist}</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">{shuttle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Consiglio:</strong> Prenotando online in anticipo risparmi fino al <strong>60%</strong> rispetto alla tariffa on-site.
          </p>
        </div>
      </section>

      {/* Dettaglio parcheggi */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12">Guida ai Parcheggi</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { emoji: "🏢", title: "Parcheggio Multipiano", desc: "Direttamente davanti ai Terminal 1 e 3. Soluzione più comoda per soggiorni brevi (1-3 giorni).", features: ["A pochi passi dal terminal", "Coperto e videosorvegliato", "Prenotabile online su adr.it"], warn: "Costo elevato per lunghi periodi", highlight: false },
              { emoji: "🚌", title: "Parcheggio Lunga Sosta", desc: "Gestito da ADR, ottimo rapporto qualità-prezzo. Collegato ai terminal con navette gratuite ogni 10 minuti.", features: ["Tariffa da €8/giorno", "Navetta gratuita", "Area videosorvegliata 24h"], warn: "Parcheggio scoperto", highlight: false },
              { emoji: "💰", title: "Parcheggio Low Cost", desc: "Strutture private esterne, collegate con navette gratuite. Le tariffe più basse, ideali per una settimana o più.", features: ["Da €5/giorno — il più economico", "Navetta gratuita", "Prenotazione online con garanzia", "Spesso coperti e videosorvegliati"], warn: "", highlight: true },
              { emoji: "🎩", title: "Parcheggio VIP / Valet", desc: "Consegni l'auto al terminal e un autista la parcheggia per te. Massima comodità.", features: ["Consegna e ritiro al terminal", "Parcheggio coperto incluso", "Ideale per business traveller"], warn: "Costo premium (da €35/giorno)", highlight: false },
            ].map((p) => (
              <div key={p.title} className={`rounded-sm border bg-card p-6 sm:p-7 ${p.highlight ? "border-primary/40 ring-2 ring-primary/10" : "border-stone-warm"}`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 text-xl">{p.emoji}</span>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  {p.highlight && <span className="rounded-sm gold-gradient px-2.5 py-0.5 text-xs font-semibold text-espresso">Consigliato</span>}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {p.features.map((f) => <li key={f}>✅ {f}</li>)}
                  {p.warn && <li>⚠️ {p.warn}</li>}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taxi vs Parcheggio */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 sm:mb-16">Taxi o Parcheggio?</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-sm border border-stone-warm bg-card p-7 sm:p-8">
            <h3 className="font-display text-2xl font-semibold">🚕 Taxi — Tariffa Fissa €50</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {["Da/per il centro di Roma (Mura Aureliane)", "Max 4 passeggeri con bagagli inclusi", "Nessun costo di parcheggio o benzina", "30-50 minuti porta a porta"].map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="text-primary">✓</span><span>{item}</span></li>
              ))}
            </ul>
            <div className="mt-6 rounded-sm bg-primary/5 p-4">
              <p className="text-sm font-semibold">Costo totale A/R: <span className="text-primary text-lg">€100</span></p>
              <p className="mt-1 text-xs text-muted-foreground">Ideale per soggiorni di 1-5 giorni</p>
            </div>
            <Link to="/tariffe" className="mt-4 inline-flex items-center gap-2 rounded-sm gold-gradient px-6 py-3 text-sm font-semibold text-espresso amber-glow transition-all hover:amber-glow-lg hover:scale-[1.02] active:scale-[0.98]">
              Scopri Tariffe Taxi →
            </Link>
          </div>

          <div className="rounded-sm border border-stone-warm bg-card p-7 sm:p-8">
            <h3 className="font-display text-2xl font-semibold">🅿️ Parcheggio Low Cost</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {["Da €5/giorno con navetta", "Auto sempre disponibile al ritorno", "Flessibilità per bagagli pesanti", "Ideale se parti da fuori Roma"].map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="text-primary">✓</span><span>{item}</span></li>
              ))}
            </ul>
            <div className="mt-6 rounded-sm bg-primary/5 p-4">
              <p className="text-sm font-semibold">Costo 7 giorni: <span className="text-primary text-lg">da €29</span></p>
              <p className="mt-1 text-xs text-muted-foreground">Ideale per soggiorni di 7+ giorni</p>
            </div>
          </div>
        </div>
      </section>

      {/* GYG Affiliate */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Alternativa:<br className="hidden sm:block" /> Transfer Privato</h2>
            <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">
              Non vuoi guidare? Prenota un transfer privato dall'aeroporto.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ActivityCard emoji="✈️" title="Transfer Fiumicino → Roma" description="Trova e prenota il trasferimento dall'aeroporto al centro di Roma." gygUrl={GYG_ROME_TRANSFERS} />
            <ActivityCard emoji="🏛️" title="Tour Colosseo e Foro Romano" description="Visita guidata salta-fila al Colosseo, Foro Romano e Palatino." gygUrl={GYG_COLOSSEUM_TOUR} price="€35" />
            <ActivityCard emoji="🚌" title="Bus Hop-on Hop-off Roma" description="Esplora Roma con il bus turistico panoramico. Valido fino a 3 giorni." gygUrl={GYG_HOP_ON_BUS} price="€25" />
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <GetYourGuideCTA text="Scopri tutti i transfer" url={GYG_ROME_ALL} />
          </div>
        </div>
      </section>

      {/* Consigli */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 sm:mb-16">Consigli Pratici</h2>
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { emoji: "📅", title: "Prenota in anticipo", desc: "Prenotare almeno 7 giorni prima permette di risparmiare fino al 60%." },
            { emoji: "📱", title: "Salva il numero del posto", desc: "Fai una foto alla posizione dell'auto. I multipiano sono molto grandi." },
            { emoji: "⏰", title: "Calcola i tempi", desc: "Per parcheggi con navetta, aggiungi 20-30 minuti extra al tempo di arrivo." },
            { emoji: "🔒", title: "Sicurezza", desc: "Non lasciare oggetti di valore visibili. Tutti i parcheggi ufficiali sono videosorvegliati 24h." },
            { emoji: "🔋", title: "Auto elettriche", desc: "Alcuni parcheggi offrono colonnine di ricarica. Verifica al momento della prenotazione." },
            { emoji: "🗓️", title: "Periodi di punta", desc: "Natale, Pasqua e luglio-agosto sono i più affollati. Prenota con 2 settimane di anticipo." },
          ].map((tip) => (
            <div key={tip.title} className="rounded-sm border border-stone-warm bg-card p-6 hover:border-primary/30 transition-colors">
              <span className="text-3xl">{tip.emoji}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{tip.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <RomeDiscoverGrid
        title="Scopri Roma"
        subtitle="Transfer, storia antica e panorami mozzafiato. Prenota online."
        categories={[ROME_TRANSFERS, ROME_HISTORY, ROME_PANORAMIC]}
        ctaUrl={GYG_ROME_ALL}
      />

      {/* Cross-linking */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-8">Altre Guide</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { to: "/fiumicino" as const, emoji: "✈️", title: "Aeroporto Fiumicino", desc: "Guida completa: taxi, transfer, terminal" },
              { to: "/aeroporto-fiumicino-roma-termini" as const, emoji: "🚆", title: "Fiumicino → Termini", desc: "Leonardo Express, bus e taxi" },
              { to: "/aeroporto-fiumicino-roma-centro" as const, emoji: "🏛️", title: "Fiumicino → Roma Centro", desc: "Tariffa fissa €50 e opzioni" },
              { to: "/tariffe" as const, emoji: "💶", title: "Tariffe Taxi Roma", desc: "Tutte le tariffe e supplementi" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="group rounded-sm border border-stone-warm bg-card p-5 transition-all hover:border-primary/30 hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
                <span className="text-2xl">{link.emoji}</span>
                <h3 className="mt-2 font-display font-semibold group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
