/**
 * GetYourGuide Affiliate Links — Single Source of Truth
 *
 * ALL URLs verified as working on 2026-04-16.
 * partner_id=0IQTGX8 is appended automatically by the helper.
 */

export const GYG_PARTNER_ID = "0IQTGX8";

function gyg(path: string): string {
  const base = `https://www.getyourguide.com${path}`;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher`;
}

// ─── Category / Search Pages (always work, great for CTAs) ───
export const GYG_ROME_ALL = gyg("/rome-l33/");
export const GYG_ROME_TRANSFERS = gyg("/rome-l33/?q=airport+transfer+fiumicino");

// ─── Verified Individual Activities ───
export const GYG_COLOSSEUM_TOUR = gyg("/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/");
export const GYG_VATICAN_TOUR = gyg("/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/");
export const GYG_VATICAN_BASILICA = gyg("/rome-l33/vatican-museums-sistine-chapel-st-peter-s-basilica-tour-t1103/");
export const GYG_COLOSSEUM_ARENA = gyg("/rome-l33/rome-colosseum-arena-floor-palatine-forum-guided-tour-t217332/");
export const GYG_COLOSSEUM_UNDERGROUND = gyg("/rome-l33/colosseum-underground-and-ancient-rome-tour-t134577/");
export const GYG_VATICAN_TICKET = gyg("/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/");
export const GYG_POMPEII_DAY_TRIP = gyg("/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/");
export const GYG_HOP_ON_BUS = gyg("/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/");
export const GYG_PASTA_CLASS = gyg("/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/");
export const GYG_COLOSSEUM_GUIDED = gyg("/rome-l33/rome-colosseum-palatine-hill-and-roman-forum-guided-tour-t408602/");
export const GYG_VATICAN_SKIP_LINE = gyg("/rome-l33/vatican-sistine-chapel-st-peter-s-skip-the-line-tour-t709427/");
export const GYG_VATICAN_SQUARE = gyg("/rome-l33/vatican-museums-sistine-chapel-st-peter-s-square-tour-t69620/");

/**
 * Standard set of 6 activities for homepage / index pages.
 * Each entry has: emoji, titleKey (for i18n), gygUrl, and a fallback Italian title.
 */
export const GYG_HOMEPAGE_ACTIVITIES = [
  { emoji: "🏛️", key: "colosseum", url: GYG_COLOSSEUM_TOUR, itTitle: "Tour Colosseo, Foro Romano e Palatino", itDesc: "Visita guidata con accesso prioritario al Colosseo, Foro Romano e Palatino. 2.5 ore." },
  { emoji: "🏟️", key: "vatican", url: GYG_VATICAN_TOUR, itTitle: "Tour Musei Vaticani e Cappella Sistina", itDesc: "Tour guidato con ingresso salta-fila ai Musei Vaticani, Cappella Sistina e Basilica." },
  { emoji: "⚔️", key: "underground", url: GYG_COLOSSEUM_UNDERGROUND, itTitle: "Colosseo Sotterraneo e Roma Antica", itDesc: "Esplora i sotterranei del Colosseo con una guida esperta. 3 ore." },
  { emoji: "🎫", key: "vaticanTicket", url: GYG_VATICAN_TICKET, itTitle: "Biglietto Musei Vaticani e Sistina", itDesc: "Ingresso salta-fila ai Musei Vaticani e alla Cappella Sistina. Accesso tutto il giorno." },
  { emoji: "🍝", key: "pasta", url: GYG_PASTA_CLASS, itTitle: "Corso Pasta e Tiramisù", itDesc: "Impara a fare pasta e tiramisù in un ristorante locale vicino al Vaticano." },
  { emoji: "🚌", key: "hopOn", url: GYG_HOP_ON_BUS, itTitle: "Bus Hop-on Hop-off Roma", itDesc: "Esplora Roma al tuo ritmo con il bus turistico panoramico. Valido fino a 3 giorni." },
];

/**
 * Transfer-focused activities for /prenota page.
 * Since individual transfer products are discontinued on GYG,
 * we link to the search/category pages that always work.
 */
export const GYG_TRANSFER_ACTIVITIES = [
  { emoji: "✈️", key: "transferFiumicino", url: GYG_ROME_TRANSFERS, itTitle: "Transfer Aeroporto Fiumicino", itDesc: "Trova e prenota il tuo trasferimento dall'aeroporto di Fiumicino al centro di Roma." },
  { emoji: "🏛️", key: "colosseum", url: GYG_COLOSSEUM_TOUR, itTitle: "Tour Colosseo e Foro Romano", itDesc: "Visita guidata con accesso prioritario al Colosseo, Foro Romano e Palatino." },
  { emoji: "🏟️", key: "vatican", url: GYG_VATICAN_BASILICA, itTitle: "Tour Vaticano e Basilica di San Pietro", itDesc: "Musei Vaticani, Cappella Sistina e Basilica di San Pietro con guida." },
  { emoji: "🌋", key: "pompeii", url: GYG_POMPEII_DAY_TRIP, itTitle: "Gita a Pompei e Costiera Amalfitana", itDesc: "Escursione da Roma a Pompei, Costiera Amalfitana e Sorrento. Giornata intera." },
  { emoji: "🍝", key: "pasta", url: GYG_PASTA_CLASS, itTitle: "Corso Pasta e Tiramisù", itDesc: "Impara a cucinare pasta e tiramisù in un ristorante vicino al Vaticano." },
  { emoji: "🚌", key: "hopOn", url: GYG_HOP_ON_BUS, itTitle: "Bus Hop-on Hop-off Roma", itDesc: "Esplora Roma con il bus turistico panoramico. Valido fino a 3 giorni." },
];
