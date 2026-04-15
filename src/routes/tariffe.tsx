import { createFileRoute, Link } from "@tanstack/react-router";
import { GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { HeroSection } from "@/components/HeroSection";
import taxiRomaImg from "@/assets/taxi-roma.jpg";

export const Route = createFileRoute("/tariffe")({
  component: TariffePage,
  head: () => ({
    meta: [
      { title: "Tariffe Taxi Roma 2026 — Prezzi Ufficiali e Tariffe Fisse | TaxiFiumicino.com" },
      { name: "description", content: "Tariffe ufficiali taxi Roma 2026: tariffa base, costo al km, supplementi, tariffe fisse aeroporto Fiumicino (€50) e Ciampino (€31). Guida completa ai prezzi." },
      { property: "og:title", content: "Tariffe Taxi Roma 2026 — Prezzi Ufficiali e Tariffe Fisse" },
      { property: "og:description", content: "Tutti i prezzi dei taxi a Roma: tariffa base, supplementi, tariffe fisse aeroporto." },
      { name: "keywords", content: "tariffe taxi roma, taxi roma prezzo, costo taxi roma, tariffa fissa taxi roma fiumicino, roma fiumicino taxi tariffa" },
    ],
  }),
});

function TariffePage() {
  return (
    <>
      <HeroSection
        title="Tariffe Taxi Roma"
        subtitle="Prezzi Ufficiali 2026"
        description="Tutte le tariffe dei taxi a Roma regolamentate dal Comune: costi al km, supplementi, e tariffe fisse per aeroporti e stazioni."
        image={taxiRomaImg}
      />

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">Tariffe Base Taxi Roma</h2>
        
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="gold-gradient text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Voce</th>
                <th className="px-6 py-4 text-right font-semibold">Tariffa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Tariffa minima corsa", "€7,00"],
                ["Presa in carico (diurna, giorni feriali)", "€3,00"],
                ["Presa in carico (festivi)", "€4,50"],
                ["Presa in carico (notturna, 22-06)", "€6,50"],
                ["Costo al km (Tariffa 1 — urbana)", "€1,10/km"],
                ["Costo al km (Tariffa 2)", "€1,30/km"],
                ["Costo al km (Tariffa 3 — notturna)", "€1,60/km"],
                ["Supplemento bagaglio (>35×25×50cm)", "€1,00"],
                ["Supplemento 5° e 6° passeggero", "€1,00 cad."],
                ["Chiamata radio taxi", "Scatto tassametro"],
              ].map(([voce, tariffa]) => (
                <tr key={voce} className="hover:bg-accent/30 transition-colors">
                  <td className="px-6 py-3.5">{voce}</td>
                  <td className="px-6 py-3.5 text-right font-semibold">{tariffa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-3xl font-bold mt-16 mb-8">Tariffe Fisse</h2>
        <p className="text-muted-foreground mb-8">Le tariffe fisse sono valide per max 4 passeggeri con bagagli e sono applicate per corse tra gli aeroporti/stazioni e il centro storico di Roma (dentro le Mura Aureliane).</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { route: "Fiumicino ↔ Centro Roma", price: "€50", note: "Dentro le Mura Aureliane" },
            { route: "Ciampino ↔ Centro Roma", price: "€31", note: "Dentro le Mura Aureliane" },
            { route: "Fiumicino ↔ Ciampino", price: "€50", note: "Tra i due aeroporti" },
            { route: "Termini ↔ Fiumicino", price: "€50", note: "Stazione ↔ Aeroporto" },
          ].map((item) => (
            <div key={item.route} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-primary font-display">{item.price}</div>
              <div className="mt-2 font-semibold">{item.route}</div>
              <div className="mt-1 text-xs text-muted-foreground">{item.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">💡 Consigli sulle Tariffe</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• Chiedi sempre di accendere il <strong>tassametro</strong> all'inizio della corsa</li>
            <li>• Per tratte con <strong>tariffa fissa</strong> (aeroporti), comunicalo al tassista prima di partire</li>
            <li>• I taxi bianchi ufficiali hanno il <strong>numero di licenza</strong> esposto e accettano pagamenti con carta</li>
            <li>• In caso di problemi, annota il numero di licenza e contatta il <strong>Comune di Roma</strong></li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Preferisci prenotare un transfer privato a prezzo fisso?</p>
          <GetYourGuideCTA text="Prenota Transfer Privato" url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>
      </section>
    </>
  );
}
