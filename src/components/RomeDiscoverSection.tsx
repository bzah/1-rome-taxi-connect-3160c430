/**
 * HCMC.com-inspired image-driven affiliate sections.
 * Reusable across all pages for rich visual content.
 */
import { GYG_PARTNER_ID } from "@/lib/gyg-links";

// Images
import colosseumImg from "@/assets/rome-colosseum-golden.jpg";
import vaticanImg from "@/assets/rome-vatican-tour.jpg";
import foodImg from "@/assets/rome-food-trattoria.jpg";
import nightlifeImg from "@/assets/rome-nightlife-piazza.jpg";
import panoramicImg from "@/assets/rome-panoramic-sunset.jpg";
import forumImg from "@/assets/rome-forum-ruins.jpg";
import transferImg from "@/assets/rome-private-transfer.jpg";
import hotelImg from "@/assets/rome-hotel-stay.jpg";
import activitiesImg from "@/assets/rome-activities-pasta.jpg";

/* ─── Types ─── */
interface DiscoverItem {
  title: string;
  desc: string;
  url: string;
  price?: string;
  badge?: string;
}

interface DiscoverCategory {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  items: DiscoverItem[];
}

/* ─── GYG URL helper ─── */
function gyg(path: string): string {
  const base = `https://www.getyourguide.com${path}`;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher`;
}

/* ─── Pre-built category sets ─── */
export const ROME_ATTRACTIONS: DiscoverCategory = {
  title: "Attrazioni Imperdibili",
  subtitle: "I monumenti che hanno fatto la storia",
  image: colosseumImg,
  alt: "Il Colosseo di Roma al tramonto",
  items: [
    { title: "Colosseo, Foro e Palatino", desc: "Visita guidata con accesso prioritario. 2.5 ore.", url: gyg("/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"), price: "€35", badge: "Più Venduto" },
    { title: "Colosseo Arena e Sotterranei", desc: "Esplora i sotterranei del Colosseo. Accesso esclusivo.", url: gyg("/rome-l33/colosseum-underground-and-ancient-rome-tour-t134577/"), price: "€40" },
    { title: "Colosseo con Guida Esperta", desc: "Tour guidato Colosseo, Palatino e Foro Romano.", url: gyg("/rome-l33/rome-colosseum-palatine-hill-and-roman-forum-guided-tour-t408602/"), price: "€32" },
  ],
};

export const ROME_TOURS: DiscoverCategory = {
  title: "Tour Guidati",
  subtitle: "Esplora Roma con guide esperte",
  image: vaticanImg,
  alt: "I Musei Vaticani a Roma",
  items: [
    { title: "Musei Vaticani e Cappella Sistina", desc: "Tour salta-fila Vaticano, Sistina e Basilica.", url: gyg("/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/"), price: "€30", badge: "Imperdibile" },
    { title: "Biglietto Musei Vaticani", desc: "Ingresso prioritario Vaticano e Cappella Sistina.", url: gyg("/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/"), price: "€25" },
    { title: "Vaticano, Sistina e San Pietro", desc: "Tour completo con Piazza San Pietro e Basilica.", url: gyg("/rome-l33/vatican-museums-sistine-chapel-st-peter-s-basilica-tour-t1103/"), price: "€42" },
  ],
};

export const ROME_FOOD: DiscoverCategory = {
  title: "Gastronomia",
  subtitle: "Sapori autentici della cucina romana",
  image: foodImg,
  alt: "Cena romantica in un ristorante di Roma",
  items: [
    { title: "Corso Pasta e Tiramisù", desc: "Impara a cucinare con uno chef locale vicino al Vaticano.", url: gyg("/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/"), price: "€55", badge: "Esperienza Top" },
    { title: "Street Food Tour Trastevere", desc: "Tour gastronomico a piedi nel quartiere più autentico.", url: gyg("/rome-l33/?q=food+tour+trastevere"), price: "€39" },
    { title: "Tour Vini e Degustazione", desc: "Scopri i vini dei Castelli Romani con sommelier.", url: gyg("/rome-l33/?q=wine+tasting+rome"), price: "€45" },
  ],
};

export const ROME_ACTIVITIES: DiscoverCategory = {
  title: "Attività & Esperienze",
  subtitle: "Vivi Roma come un locale",
  image: activitiesImg,
  alt: "Esperienza culinaria a Roma",
  items: [
    { title: "Bus Hop-on Hop-off Roma", desc: "Esplora Roma al tuo ritmo. Valido fino a 3 giorni.", url: gyg("/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/"), price: "€25" },
    { title: "Gita a Pompei e Amalfi", desc: "Escursione da Roma a Pompei, Costiera e Sorrento.", url: gyg("/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/"), price: "€120" },
    { title: "Tour Colosseo al Chiaro di Luna", desc: "Visita notturna esclusiva del Colosseo illuminato.", url: gyg("/rome-l33/?q=colosseum+night+tour"), price: "€50" },
  ],
};

export const ROME_NIGHTLIFE: DiscoverCategory = {
  title: "Roma di Sera",
  subtitle: "Piazze illuminate e atmosfera magica",
  image: nightlifeImg,
  alt: "Piazza Navona illuminata di notte",
  items: [
    { title: "Tour Serale Fontane e Piazze", desc: "Passeggiata guidata tra Fontana di Trevi, Piazza Navona e Pantheon.", url: gyg("/rome-l33/?q=rome+night+tour+fountains"), price: "€29" },
    { title: "Cena con Vista sul Tevere", desc: "Crociera con cena sul Tevere al tramonto.", url: gyg("/rome-l33/?q=rome+dinner+cruise+tiber"), price: "€65" },
    { title: "Tour Trastevere by Night", desc: "Scopri i vicoli più suggestivi con guida locale.", url: gyg("/rome-l33/?q=trastevere+night+tour"), price: "€25" },
  ],
};

export const ROME_TRANSFERS: DiscoverCategory = {
  title: "Transfer & Trasporti",
  subtitle: "Dall'aeroporto al centro in totale comfort",
  image: transferImg,
  alt: "Transfer privato a Roma con autista",
  items: [
    { title: "Transfer Privato Fiumicino", desc: "Autista con cartello, prezzo fisso e cancellazione gratuita.", url: gyg("/rome-l33/?q=airport+transfer+fiumicino"), badge: "Consigliato" },
    { title: "Transfer Ciampino — Roma", desc: "Servizio privato dall'aeroporto di Ciampino al centro.", url: gyg("/rome-l33/?q=ciampino+airport+transfer") },
    { title: "Bus Navetta Fiumicino", desc: "Navetta condivisa Fiumicino-Termini. Economico e comodo.", url: gyg("/rome-l33/?q=fiumicino+shuttle+bus"), price: "€7" },
  ],
};

export const ROME_PANORAMIC: DiscoverCategory = {
  title: "Panorami Mozzafiato",
  subtitle: "Roma vista dall'alto",
  image: panoramicImg,
  alt: "Vista panoramica di Roma al tramonto",
  items: [
    { title: "Cupola di San Pietro", desc: "Salita alla cupola della Basilica di San Pietro per una vista a 360°.", url: gyg("/rome-l33/?q=st+peter+dome+climb"), price: "€15" },
    { title: "Giardini Vaticani", desc: "Tour esclusivo dei Giardini Vaticani con guida.", url: gyg("/rome-l33/?q=vatican+gardens+tour"), price: "€40" },
    { title: "Bus Panoramico al Tramonto", desc: "Tour in bus scoperto durante il tramonto dorato.", url: gyg("/rome-l33/?q=rome+sunset+bus+tour"), price: "€30" },
  ],
};

export const ROME_HISTORY: DiscoverCategory = {
  title: "Roma Antica",
  subtitle: "2000 anni di storia ai tuoi piedi",
  image: forumImg,
  alt: "Rovine del Foro Romano al tramonto",
  items: [
    { title: "Foro Romano e Palatino", desc: "Tour guidato tra le rovine dell'antica Roma.", url: gyg("/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"), price: "€35" },
    { title: "Catacombe e Roma Sotterranea", desc: "Esplora le antiche catacombe cristiane sotto Roma.", url: gyg("/rome-l33/?q=rome+catacombs+tour"), price: "€29" },
    { title: "Via Appia Antica in Bici", desc: "Tour in bicicletta lungo l'antica Via Appia.", url: gyg("/rome-l33/?q=appian+way+bike+tour"), price: "€45" },
  ],
};

/* ─── Card Component ─── */
function DiscoverCard({ item }: { item: DiscoverItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group relative flex flex-col rounded-sm border border-stone-warm bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5"
    >
      {item.badge && (
        <span className="absolute -top-2.5 right-4 gold-gradient px-3 py-0.5 rounded-sm text-xs font-semibold text-espresso">
          {item.badge}
        </span>
      )}
      <h4 className="font-display text-base font-semibold group-hover:text-primary transition-colors">{item.title}</h4>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
      <div className="mt-3 flex items-center justify-between">
        {item.price && <span className="text-sm font-semibold text-primary">da {item.price}</span>}
        <span className="ml-auto text-xs text-muted-foreground group-hover:text-primary transition-colors">Prenota →</span>
      </div>
    </a>
  );
}

/* ─── Category Section (HCMC.com style) ─── */
interface DiscoverSectionProps {
  category: DiscoverCategory;
  reverse?: boolean;
}

export function DiscoverSection({ category, reverse = false }: DiscoverSectionProps) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-8`}>
      {/* Image side */}
      <div className="lg:w-2/5 overflow-hidden rounded-sm">
        <img
          src={category.image}
          alt={category.alt}
          loading="lazy"
          width={1280}
          height={720}
          className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      {/* Content side */}
      <div className="lg:w-3/5 flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-medium mb-2">{category.subtitle}</p>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{category.title}</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <DiscoverCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Multi-Category Grid (like HCMC.com homepage) ─── */
interface RomeDiscoverGridProps {
  title?: string;
  subtitle?: string;
  categories: DiscoverCategory[];
  ctaUrl?: string;
  ctaText?: string;
}

export function RomeDiscoverGrid({
  title = "Scopri Roma",
  subtitle = "Attrazioni, tour, esperienze gastronomiche e molto altro. Prenota online con cancellazione gratuita.",
  categories,
  ctaUrl,
  ctaText = "Vedi Tutte le Esperienze a Roma",
}: RomeDiscoverGridProps) {
  return (
    <section className="section-warm py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{title}</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">{subtitle}</p>
        </div>

        {/* Categories */}
        <div className="space-y-12 lg:space-y-16">
          {categories.map((cat, i) => (
            <DiscoverSection key={cat.title} category={cat} reverse={i % 2 !== 0} />
          ))}
        </div>

        {/* CTA */}
        {ctaUrl && (
          <div className="mt-12 sm:mt-16 text-center">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 gold-gradient px-8 py-3 rounded-sm text-sm font-semibold text-espresso hover:opacity-90 transition-opacity"
            >
              {ctaText}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
