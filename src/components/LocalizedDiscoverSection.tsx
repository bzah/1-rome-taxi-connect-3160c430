/**
 * Localized version of RomeDiscoverSection — same HCMC-inspired image-driven
 * layout but with content per locale (en, fr, es, ru).
 */
import { GYG_PARTNER_ID } from "@/lib/gyg-links";

import colosseumImg from "@/assets/rome-colosseum-golden.jpg";
import vaticanImg from "@/assets/rome-vatican-tour.jpg";
import foodImg from "@/assets/rome-food-trattoria.jpg";
import nightlifeImg from "@/assets/rome-nightlife-piazza.jpg";
import panoramicImg from "@/assets/rome-panoramic-sunset.jpg";
import transferImg from "@/assets/rome-private-transfer.jpg";
import activitiesImg from "@/assets/rome-activities-pasta.jpg";

type Locale = "en" | "fr" | "es" | "ru" | "it";

interface DiscoverItem { title: string; desc: string; url: string; price?: string; badge?: string }
interface DiscoverCategory { title: string; subtitle: string; image: string; alt: string; items: DiscoverItem[] }

function gyg(path: string): string {
  const base = `https://www.getyourguide.com${path}`;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher`;
}

/* ─── Per-locale UI strings ─── */
const UI: Record<Locale, { bookNow: string; from: string; bestSeller: string; mustSee: string; topExperience: string; recommended: string; viewAll: string }> = {
  en: { bookNow: "Book", from: "from", bestSeller: "Bestseller", mustSee: "Must See", topExperience: "Top Experience", recommended: "Recommended", viewAll: "View All Experiences in Rome" },
  fr: { bookNow: "Réserver", from: "dès", bestSeller: "Meilleure Vente", mustSee: "Incontournable", topExperience: "Expérience Top", recommended: "Recommandé", viewAll: "Voir Toutes les Expériences à Rome" },
  es: { bookNow: "Reservar", from: "desde", bestSeller: "Más Vendido", mustSee: "Imperdible", topExperience: "Top Experiencia", recommended: "Recomendado", viewAll: "Ver Todas las Experiencias en Roma" },
  ru: { bookNow: "Забронировать", from: "от", bestSeller: "Хит продаж", mustSee: "Обязательно", topExperience: "Топ-впечатление", recommended: "Рекомендуем", viewAll: "Все впечатления в Риме" },
  it: { bookNow: "Prenota", from: "da", bestSeller: "Più Venduto", mustSee: "Imperdibile", topExperience: "Esperienza Top", recommended: "Consigliato", viewAll: "Vedi Tutte le Esperienze a Roma" },
};

/* ─── Category builders per locale ─── */
type CatKey = "attractions" | "tours" | "food" | "activities" | "nightlife" | "transfers" | "panoramic";

function buildCategory(locale: Locale, key: CatKey): DiscoverCategory {
  const ui = UI[locale];
  const T: Record<CatKey, Record<Locale, { title: string; subtitle: string; alt: string; items: DiscoverItem[] }>> = {
    attractions: {
      en: { title: "Top Attractions", subtitle: "Iconic monuments of Rome", alt: "Colosseum at sunset", items: [
        { title: "Colosseum, Forum & Palatine", desc: "Guided skip-the-line tour. 2.5 hours.", url: gyg("/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"), price: "€35", badge: ui.bestSeller },
        { title: "Colosseum Arena & Underground", desc: "Exclusive access to the arena floor.", url: gyg("/rome-l33/colosseum-underground-and-ancient-rome-tour-t134577/"), price: "€40" },
        { title: "Colosseum Expert Guide Tour", desc: "Colosseum, Palatine and Roman Forum.", url: gyg("/rome-l33/rome-colosseum-palatine-hill-and-roman-forum-guided-tour-t408602/"), price: "€32" },
      ]},
      fr: { title: "Attractions Phares", subtitle: "Les monuments iconiques de Rome", alt: "Colisée au coucher du soleil", items: [
        { title: "Colisée, Forum et Palatin", desc: "Visite guidée coupe-file. 2h30.", url: gyg("/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"), price: "€35", badge: ui.bestSeller },
        { title: "Arène et Souterrains du Colisée", desc: "Accès exclusif à l'arène.", url: gyg("/rome-l33/colosseum-underground-and-ancient-rome-tour-t134577/"), price: "€40" },
        { title: "Colisée avec Guide Expert", desc: "Colisée, Palatin et Forum Romain.", url: gyg("/rome-l33/rome-colosseum-palatine-hill-and-roman-forum-guided-tour-t408602/"), price: "€32" },
      ]},
      es: { title: "Atracciones Imperdibles", subtitle: "Los monumentos icónicos de Roma", alt: "Coliseo al atardecer", items: [
        { title: "Coliseo, Foro y Palatino", desc: "Tour guiado sin colas. 2.5 horas.", url: gyg("/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"), price: "€35", badge: ui.bestSeller },
        { title: "Arena y Subterráneos del Coliseo", desc: "Acceso exclusivo a la arena.", url: gyg("/rome-l33/colosseum-underground-and-ancient-rome-tour-t134577/"), price: "€40" },
        { title: "Coliseo con Guía Experto", desc: "Coliseo, Palatino y Foro Romano.", url: gyg("/rome-l33/rome-colosseum-palatine-hill-and-roman-forum-guided-tour-t408602/"), price: "€32" },
      ]},
      ru: { title: "Главные достопримечательности", subtitle: "Знаковые памятники Рима", alt: "Колизей на закате", items: [
        { title: "Колизей, Форум и Палатин", desc: "Экскурсия без очереди. 2,5 часа.", url: gyg("/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"), price: "€35", badge: ui.bestSeller },
        { title: "Арена и подземелья Колизея", desc: "Эксклюзивный доступ на арену.", url: gyg("/rome-l33/colosseum-underground-and-ancient-rome-tour-t134577/"), price: "€40" },
        { title: "Колизей с экспертом-гидом", desc: "Колизей, Палатин и Римский Форум.", url: gyg("/rome-l33/rome-colosseum-palatine-hill-and-roman-forum-guided-tour-t408602/"), price: "€32" },
      ]},
      it: { title: "Attrazioni Imperdibili", subtitle: "I monumenti che hanno fatto la storia", alt: "Colosseo al tramonto", items: [
        { title: "Colosseo, Foro e Palatino", desc: "Visita guidata salta-fila. 2,5 ore.", url: gyg("/rome-l33/colosseum-roman-forum-palatine-hill-guided-tour-t195566/"), price: "€35", badge: ui.bestSeller },
        { title: "Colosseo Arena e Sotterranei", desc: "Accesso esclusivo all'arena.", url: gyg("/rome-l33/colosseum-underground-and-ancient-rome-tour-t134577/"), price: "€40" },
        { title: "Colosseo con Guida Esperta", desc: "Colosseo, Palatino e Foro Romano.", url: gyg("/rome-l33/rome-colosseum-palatine-hill-and-roman-forum-guided-tour-t408602/"), price: "€32" },
      ]},
    },
    tours: {
      en: { title: "Guided Tours", subtitle: "Skip-the-line with expert guides", alt: "Vatican Museums tour", items: [
        { title: "Vatican Museums & Sistine Chapel", desc: "Skip-the-line tour with guide.", url: gyg("/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/"), price: "€30", badge: ui.mustSee },
        { title: "Vatican Skip-the-Line Ticket", desc: "Priority entry. All day access.", url: gyg("/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/"), price: "€25" },
        { title: "Vatican, Sistine & St. Peter's", desc: "Full tour with St. Peter's Square.", url: gyg("/rome-l33/vatican-museums-sistine-chapel-st-peter-s-basilica-tour-t1103/"), price: "€42" },
      ]},
      fr: { title: "Visites Guidées", subtitle: "Coupe-file avec guides experts", alt: "Visite Musées du Vatican", items: [
        { title: "Musées du Vatican et Sixtine", desc: "Visite coupe-file avec guide.", url: gyg("/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/"), price: "€30", badge: ui.mustSee },
        { title: "Billet Vatican Coupe-File", desc: "Entrée prioritaire. Toute la journée.", url: gyg("/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/"), price: "€25" },
        { title: "Vatican, Sixtine et Saint-Pierre", desc: "Tour complet avec Place Saint-Pierre.", url: gyg("/rome-l33/vatican-museums-sistine-chapel-st-peter-s-basilica-tour-t1103/"), price: "€42" },
      ]},
      es: { title: "Tours Guiados", subtitle: "Sin colas con guías expertos", alt: "Tour Museos Vaticanos", items: [
        { title: "Museos Vaticanos y Sixtina", desc: "Tour sin colas con guía.", url: gyg("/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/"), price: "€30", badge: ui.mustSee },
        { title: "Entrada Vaticano Sin Colas", desc: "Entrada prioritaria. Todo el día.", url: gyg("/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/"), price: "€25" },
        { title: "Vaticano, Sixtina y San Pedro", desc: "Tour completo con Plaza San Pedro.", url: gyg("/rome-l33/vatican-museums-sistine-chapel-st-peter-s-basilica-tour-t1103/"), price: "€42" },
      ]},
      ru: { title: "Экскурсии с гидом", subtitle: "Без очереди с экспертами", alt: "Экскурсия в Музеи Ватикана", items: [
        { title: "Музеи Ватикана и Сикстинская капелла", desc: "Экскурсия без очереди с гидом.", url: gyg("/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/"), price: "€30", badge: ui.mustSee },
        { title: "Билет в Ватикан без очереди", desc: "Приоритетный вход. Весь день.", url: gyg("/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/"), price: "€25" },
        { title: "Ватикан, Сикстинская и Сан-Пьетро", desc: "Полный тур с площадью Святого Петра.", url: gyg("/rome-l33/vatican-museums-sistine-chapel-st-peter-s-basilica-tour-t1103/"), price: "€42" },
      ]},
      it: { title: "Tour Guidati", subtitle: "Salta-fila con guide esperte", alt: "Tour Musei Vaticani", items: [
        { title: "Musei Vaticani e Cappella Sistina", desc: "Tour salta-fila con guida.", url: gyg("/rome-l33/rome-vatican-museums-sistine-chapel-basilica-tour-t429439/"), price: "€30", badge: ui.mustSee },
        { title: "Biglietto Vaticano Salta-Fila", desc: "Ingresso prioritario. Tutto il giorno.", url: gyg("/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/"), price: "€25" },
        { title: "Vaticano, Sistina e San Pietro", desc: "Tour completo con Piazza San Pietro.", url: gyg("/rome-l33/vatican-museums-sistine-chapel-st-peter-s-basilica-tour-t1103/"), price: "€42" },
      ]},
    },
    food: {
      en: { title: "Food & Cuisine", subtitle: "Authentic Roman flavors", alt: "Roman trattoria dinner", items: [
        { title: "Pasta & Tiramisù Class", desc: "Cooking class with local chef near Vatican.", url: gyg("/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/"), price: "€55", badge: ui.topExperience },
        { title: "Trastevere Street Food Tour", desc: "Walking food tour in the most authentic neighborhood.", url: gyg("/rome-l33/?q=food+tour+trastevere"), price: "€39" },
        { title: "Wine Tasting Tour", desc: "Discover Castelli Romani wines with sommelier.", url: gyg("/rome-l33/?q=wine+tasting+rome"), price: "€45" },
      ]},
      fr: { title: "Gastronomie", subtitle: "Saveurs authentiques romaines", alt: "Dîner dans une trattoria romaine", items: [
        { title: "Cours Pâtes et Tiramisù", desc: "Cours de cuisine avec un chef local près du Vatican.", url: gyg("/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/"), price: "€55", badge: ui.topExperience },
        { title: "Street Food Tour Trastevere", desc: "Tour gastronomique à pied dans le quartier le plus authentique.", url: gyg("/rome-l33/?q=food+tour+trastevere"), price: "€39" },
        { title: "Dégustation de Vins", desc: "Découvrez les vins des Castelli Romani avec sommelier.", url: gyg("/rome-l33/?q=wine+tasting+rome"), price: "€45" },
      ]},
      es: { title: "Gastronomía", subtitle: "Sabores auténticos de Roma", alt: "Cena en trattoria romana", items: [
        { title: "Clase de Pasta y Tiramisú", desc: "Clase de cocina con chef local cerca del Vaticano.", url: gyg("/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/"), price: "€55", badge: ui.topExperience },
        { title: "Tour Comida Callejera Trastevere", desc: "Tour gastronómico a pie en el barrio más auténtico.", url: gyg("/rome-l33/?q=food+tour+trastevere"), price: "€39" },
        { title: "Cata de Vinos", desc: "Descubre los vinos de Castelli Romani con sommelier.", url: gyg("/rome-l33/?q=wine+tasting+rome"), price: "€45" },
      ]},
      ru: { title: "Гастрономия", subtitle: "Аутентичные римские вкусы", alt: "Ужин в римской траттории", items: [
        { title: "Мастер-класс Паста и Тирамису", desc: "Кулинарный класс с местным шефом возле Ватикана.", url: gyg("/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/"), price: "€55", badge: ui.topExperience },
        { title: "Стрит-фуд тур по Трастевере", desc: "Гастрономический тур в самом аутентичном районе.", url: gyg("/rome-l33/?q=food+tour+trastevere"), price: "€39" },
        { title: "Дегустация вин", desc: "Откройте вина Castelli Romani с сомелье.", url: gyg("/rome-l33/?q=wine+tasting+rome"), price: "€45" },
      ]},
      it: { title: "Gastronomia", subtitle: "Sapori autentici della cucina romana", alt: "Cena in una trattoria romana", items: [
        { title: "Corso Pasta e Tiramisù", desc: "Lezione di cucina con chef locale vicino al Vaticano.", url: gyg("/rome-l33/pasta-tiramisu-making-class-in-locally-loved-restaurant--t453961/"), price: "€55", badge: ui.topExperience },
        { title: "Street Food Tour Trastevere", desc: "Tour gastronomico a piedi nel quartiere più autentico.", url: gyg("/rome-l33/?q=food+tour+trastevere"), price: "€39" },
        { title: "Degustazione Vini", desc: "Scopri i vini dei Castelli Romani con sommelier.", url: gyg("/rome-l33/?q=wine+tasting+rome"), price: "€45" },
      ]},
    },
    activities: {
      en: { title: "Activities & Experiences", subtitle: "Live Rome like a local", alt: "Pasta cooking class in Rome", items: [
        { title: "Hop-on Hop-off Bus Rome", desc: "Explore at your own pace. Up to 3 days.", url: gyg("/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/"), price: "€25" },
        { title: "Pompeii & Amalfi Coast Day Trip", desc: "Day excursion from Rome to Pompeii and Sorrento.", url: gyg("/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/"), price: "€120" },
        { title: "Colosseum by Moonlight", desc: "Exclusive night tour of the lit Colosseum.", url: gyg("/rome-l33/?q=colosseum+night+tour"), price: "€50" },
      ]},
      fr: { title: "Activités et Expériences", subtitle: "Vivez Rome comme un local", alt: "Cours de cuisine à Rome", items: [
        { title: "Bus Hop-on Hop-off Rome", desc: "Explorez à votre rythme. Jusqu'à 3 jours.", url: gyg("/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/"), price: "€25" },
        { title: "Excursion Pompéi et Côte Amalfitaine", desc: "Excursion d'une journée de Rome à Pompéi et Sorrente.", url: gyg("/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/"), price: "€120" },
        { title: "Colisée au Clair de Lune", desc: "Visite nocturne exclusive du Colisée illuminé.", url: gyg("/rome-l33/?q=colosseum+night+tour"), price: "€50" },
      ]},
      es: { title: "Actividades y Experiencias", subtitle: "Vive Roma como un local", alt: "Clase de cocina en Roma", items: [
        { title: "Bus Hop-on Hop-off Roma", desc: "Explora a tu ritmo. Hasta 3 días.", url: gyg("/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/"), price: "€25" },
        { title: "Excursión Pompeya y Costa Amalfitana", desc: "Excursión de día desde Roma a Pompeya y Sorrento.", url: gyg("/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/"), price: "€120" },
        { title: "Coliseo a la Luz de la Luna", desc: "Tour nocturno exclusivo del Coliseo iluminado.", url: gyg("/rome-l33/?q=colosseum+night+tour"), price: "€50" },
      ]},
      ru: { title: "Активности и впечатления", subtitle: "Живите Римом как местные", alt: "Кулинарный мастер-класс в Риме", items: [
        { title: "Автобус Hop-on Hop-off Рим", desc: "Изучайте в своём темпе. До 3 дней.", url: gyg("/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/"), price: "€25" },
        { title: "Помпеи и побережье Амальфи", desc: "Однодневная экскурсия из Рима в Помпеи и Сорренто.", url: gyg("/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/"), price: "€120" },
        { title: "Колизей при луне", desc: "Эксклюзивная ночная экскурсия по подсвеченному Колизею.", url: gyg("/rome-l33/?q=colosseum+night+tour"), price: "€50" },
      ]},
      it: { title: "Attività ed Esperienze", subtitle: "Vivi Roma come un locale", alt: "Lezione di cucina a Roma", items: [
        { title: "Bus Hop-on Hop-off Roma", desc: "Esplora al tuo ritmo. Valido fino a 3 giorni.", url: gyg("/rome-l33/rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour-t66064/"), price: "€25" },
        { title: "Gita Pompei e Costiera Amalfitana", desc: "Escursione da Roma a Pompei e Sorrento.", url: gyg("/rome-l33/from-rome-pompeii-amalfi-coast-and-sorrento-day-trip-t590375/"), price: "€120" },
        { title: "Colosseo al Chiaro di Luna", desc: "Visita notturna esclusiva del Colosseo illuminato.", url: gyg("/rome-l33/?q=colosseum+night+tour"), price: "€50" },
      ]},
    },
    nightlife: {
      en: { title: "Rome by Night", subtitle: "Lit piazzas and magical atmosphere", alt: "Piazza Navona at night", items: [
        { title: "Evening Fountains & Piazzas Tour", desc: "Walk through Trevi, Navona and Pantheon.", url: gyg("/rome-l33/?q=rome+night+tour+fountains"), price: "€29" },
        { title: "Tiber River Dinner Cruise", desc: "Sunset cruise with dinner on the Tiber.", url: gyg("/rome-l33/?q=rome+dinner+cruise+tiber"), price: "€65" },
        { title: "Trastevere by Night", desc: "Discover the most charming alleys with local guide.", url: gyg("/rome-l33/?q=trastevere+night+tour"), price: "€25" },
      ]},
      fr: { title: "Rome la Nuit", subtitle: "Places illuminées et atmosphère magique", alt: "Place Navona la nuit", items: [
        { title: "Tour Soir Fontaines et Places", desc: "Promenade entre Trevi, Navone et Panthéon.", url: gyg("/rome-l33/?q=rome+night+tour+fountains"), price: "€29" },
        { title: "Croisière Dîner sur le Tibre", desc: "Croisière au coucher du soleil avec dîner.", url: gyg("/rome-l33/?q=rome+dinner+cruise+tiber"), price: "€65" },
        { title: "Trastevere by Night", desc: "Découvrez les ruelles les plus charmantes.", url: gyg("/rome-l33/?q=trastevere+night+tour"), price: "€25" },
      ]},
      es: { title: "Roma de Noche", subtitle: "Plazas iluminadas y atmósfera mágica", alt: "Piazza Navona de noche", items: [
        { title: "Tour Nocturno Fuentes y Plazas", desc: "Paseo entre Trevi, Navona y Panteón.", url: gyg("/rome-l33/?q=rome+night+tour+fountains"), price: "€29" },
        { title: "Crucero con Cena en el Tíber", desc: "Crucero al atardecer con cena.", url: gyg("/rome-l33/?q=rome+dinner+cruise+tiber"), price: "€65" },
        { title: "Trastevere de Noche", desc: "Descubre los callejones más encantadores.", url: gyg("/rome-l33/?q=trastevere+night+tour"), price: "€25" },
      ]},
      ru: { title: "Рим ночью", subtitle: "Освещённые площади и магическая атмосфера", alt: "Площадь Навона ночью", items: [
        { title: "Вечерний тур фонтаны и площади", desc: "Прогулка между Треви, Навоной и Пантеоном.", url: gyg("/rome-l33/?q=rome+night+tour+fountains"), price: "€29" },
        { title: "Круиз с ужином по Тибру", desc: "Круиз на закате с ужином.", url: gyg("/rome-l33/?q=rome+dinner+cruise+tiber"), price: "€65" },
        { title: "Трастевере ночью", desc: "Откройте самые очаровательные переулки.", url: gyg("/rome-l33/?q=trastevere+night+tour"), price: "€25" },
      ]},
      it: { title: "Roma di Sera", subtitle: "Piazze illuminate e atmosfera magica", alt: "Piazza Navona di notte", items: [
        { title: "Tour Serale Fontane e Piazze", desc: "Passeggiata tra Trevi, Navona e Pantheon.", url: gyg("/rome-l33/?q=rome+night+tour+fountains"), price: "€29" },
        { title: "Crociera con Cena sul Tevere", desc: "Crociera al tramonto con cena.", url: gyg("/rome-l33/?q=rome+dinner+cruise+tiber"), price: "€65" },
        { title: "Trastevere by Night", desc: "Scopri i vicoli più suggestivi.", url: gyg("/rome-l33/?q=trastevere+night+tour"), price: "€25" },
      ]},
    },
    transfers: {
      en: { title: "Transfers & Transport", subtitle: "From the airport to the center in comfort", alt: "Private transfer in Rome", items: [
        { title: "Private Fiumicino Transfer", desc: "Driver with name sign, fixed price, free cancellation.", url: gyg("/rome-l33/?q=airport+transfer+fiumicino"), badge: ui.recommended },
        { title: "Ciampino — Rome Transfer", desc: "Private service from Ciampino to the center.", url: gyg("/rome-l33/?q=ciampino+airport+transfer") },
        { title: "Fiumicino Shuttle Bus", desc: "Shared shuttle Fiumicino-Termini. Cheap & easy.", url: gyg("/rome-l33/?q=fiumicino+shuttle+bus"), price: "€7" },
      ]},
      fr: { title: "Transferts et Transport", subtitle: "De l'aéroport au centre en tout confort", alt: "Transfert privé à Rome", items: [
        { title: "Transfert Privé Fiumicino", desc: "Chauffeur avec panneau, prix fixe, annulation gratuite.", url: gyg("/rome-l33/?q=airport+transfer+fiumicino"), badge: ui.recommended },
        { title: "Transfert Ciampino — Rome", desc: "Service privé de Ciampino au centre.", url: gyg("/rome-l33/?q=ciampino+airport+transfer") },
        { title: "Bus Navette Fiumicino", desc: "Navette partagée Fiumicino-Termini.", url: gyg("/rome-l33/?q=fiumicino+shuttle+bus"), price: "€7" },
      ]},
      es: { title: "Traslados y Transporte", subtitle: "Del aeropuerto al centro con comodidad", alt: "Traslado privado en Roma", items: [
        { title: "Traslado Privado Fiumicino", desc: "Conductor con cartel, precio fijo, cancelación gratuita.", url: gyg("/rome-l33/?q=airport+transfer+fiumicino"), badge: ui.recommended },
        { title: "Traslado Ciampino — Roma", desc: "Servicio privado de Ciampino al centro.", url: gyg("/rome-l33/?q=ciampino+airport+transfer") },
        { title: "Bus Lanzadera Fiumicino", desc: "Lanzadera compartida Fiumicino-Termini.", url: gyg("/rome-l33/?q=fiumicino+shuttle+bus"), price: "€7" },
      ]},
      ru: { title: "Трансферы и транспорт", subtitle: "Из аэропорта в центр с комфортом", alt: "Частный трансфер в Риме", items: [
        { title: "Частный трансфер Фьюмичино", desc: "Водитель с табличкой, фикс цена, бесплатная отмена.", url: gyg("/rome-l33/?q=airport+transfer+fiumicino"), badge: ui.recommended },
        { title: "Трансфер Чампино — Рим", desc: "Частный сервис из Чампино в центр.", url: gyg("/rome-l33/?q=ciampino+airport+transfer") },
        { title: "Шаттл Фьюмичино", desc: "Совместный шаттл Фьюмичино-Термини.", url: gyg("/rome-l33/?q=fiumicino+shuttle+bus"), price: "€7" },
      ]},
      it: { title: "Transfer e Trasporti", subtitle: "Dall'aeroporto al centro in totale comfort", alt: "Transfer privato a Roma", items: [
        { title: "Transfer Privato Fiumicino", desc: "Autista con cartello, prezzo fisso, cancellazione gratuita.", url: gyg("/rome-l33/?q=airport+transfer+fiumicino"), badge: ui.recommended },
        { title: "Transfer Ciampino — Roma", desc: "Servizio privato da Ciampino al centro.", url: gyg("/rome-l33/?q=ciampino+airport+transfer") },
        { title: "Navetta Fiumicino", desc: "Navetta condivisa Fiumicino-Termini.", url: gyg("/rome-l33/?q=fiumicino+shuttle+bus"), price: "€7" },
      ]},
    },
    panoramic: {
      en: { title: "Breathtaking Views", subtitle: "Rome from above", alt: "Panoramic Rome at sunset", items: [
        { title: "St. Peter's Dome Climb", desc: "Climb to the dome of St. Peter's for 360° views.", url: gyg("/rome-l33/?q=st+peter+dome+climb"), price: "€15" },
        { title: "Vatican Gardens Tour", desc: "Exclusive tour of the Vatican Gardens with guide.", url: gyg("/rome-l33/?q=vatican+gardens+tour"), price: "€40" },
        { title: "Sunset Open-Top Bus Tour", desc: "Open-top bus tour during golden sunset.", url: gyg("/rome-l33/?q=rome+sunset+bus+tour"), price: "€30" },
      ]},
      fr: { title: "Panoramas à Couper le Souffle", subtitle: "Rome vue d'en haut", alt: "Rome panoramique au coucher du soleil", items: [
        { title: "Montée à la Coupole Saint-Pierre", desc: "Montez à la coupole pour une vue à 360°.", url: gyg("/rome-l33/?q=st+peter+dome+climb"), price: "€15" },
        { title: "Visite Jardins du Vatican", desc: "Visite exclusive des Jardins avec guide.", url: gyg("/rome-l33/?q=vatican+gardens+tour"), price: "€40" },
        { title: "Bus Panoramique au Coucher du Soleil", desc: "Tour en bus découvert au coucher du soleil.", url: gyg("/rome-l33/?q=rome+sunset+bus+tour"), price: "€30" },
      ]},
      es: { title: "Panoramas Impresionantes", subtitle: "Roma desde lo alto", alt: "Roma panorámica al atardecer", items: [
        { title: "Subida a la Cúpula de San Pedro", desc: "Sube a la cúpula para una vista de 360°.", url: gyg("/rome-l33/?q=st+peter+dome+climb"), price: "€15" },
        { title: "Tour Jardines Vaticanos", desc: "Tour exclusivo de los Jardines con guía.", url: gyg("/rome-l33/?q=vatican+gardens+tour"), price: "€40" },
        { title: "Bus Panorámico al Atardecer", desc: "Tour en bus descapotable al atardecer.", url: gyg("/rome-l33/?q=rome+sunset+bus+tour"), price: "€30" },
      ]},
      ru: { title: "Захватывающие панорамы", subtitle: "Рим с высоты", alt: "Панорама Рима на закате", items: [
        { title: "Подъём на купол Сан-Пьетро", desc: "Поднимитесь на купол для вида 360°.", url: gyg("/rome-l33/?q=st+peter+dome+climb"), price: "€15" },
        { title: "Тур по Ватиканским садам", desc: "Эксклюзивный тур по садам с гидом.", url: gyg("/rome-l33/?q=vatican+gardens+tour"), price: "€40" },
        { title: "Закатный тур на открытом автобусе", desc: "Тур на открытом автобусе на закате.", url: gyg("/rome-l33/?q=rome+sunset+bus+tour"), price: "€30" },
      ]},
      it: { title: "Panorami Mozzafiato", subtitle: "Roma vista dall'alto", alt: "Panorama di Roma al tramonto", items: [
        { title: "Cupola di San Pietro", desc: "Salita alla cupola per una vista a 360°.", url: gyg("/rome-l33/?q=st+peter+dome+climb"), price: "€15" },
        { title: "Tour Giardini Vaticani", desc: "Tour esclusivo dei Giardini con guida.", url: gyg("/rome-l33/?q=vatican+gardens+tour"), price: "€40" },
        { title: "Bus Panoramico al Tramonto", desc: "Tour in bus scoperto al tramonto.", url: gyg("/rome-l33/?q=rome+sunset+bus+tour"), price: "€30" },
      ]},
    },
  };

  const imageMap: Record<CatKey, string> = {
    attractions: colosseumImg,
    tours: vaticanImg,
    food: foodImg,
    activities: activitiesImg,
    nightlife: nightlifeImg,
    transfers: transferImg,
    panoramic: panoramicImg,
  };

  const data = T[key][locale];
  return { ...data, image: imageMap[key] };
}

/* ─── Components ─── */
function Card({ item, locale }: { item: DiscoverItem; locale: Locale }) {
  const ui = UI[locale];
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
        {item.price && <span className="text-sm font-semibold text-primary">{ui.from} {item.price}</span>}
        <span className="ml-auto text-xs text-muted-foreground group-hover:text-primary transition-colors">{ui.bookNow} →</span>
      </div>
    </a>
  );
}

function Section({ category, reverse, locale }: { category: DiscoverCategory; reverse?: boolean; locale: Locale }) {
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-8`}>
      <div className="lg:w-2/5 overflow-hidden rounded-sm">
        <img src={category.image} alt={category.alt} loading="lazy" width={1280} height={720} className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105" />
      </div>
      <div className="lg:w-3/5 flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-medium mb-2">{category.subtitle}</p>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{category.title}</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => <Card key={item.title} item={item} locale={locale} />)}
        </div>
      </div>
    </div>
  );
}

interface LocalizedRomeDiscoverGridProps {
  locale: string;
  title: string;
  subtitle: string;
  /** Which categories to render */
  categories: CatKey[];
  ctaText?: string;
  ctaUrl?: string;
}

export function LocalizedRomeDiscoverGrid({ locale, title, subtitle, categories, ctaText, ctaUrl }: LocalizedRomeDiscoverGridProps) {
  const safeLocale: Locale = (["en", "fr", "es", "ru", "it"].includes(locale) ? locale : "en") as Locale;
  const cats = categories.map((k) => buildCategory(safeLocale, k));
  const ui = UI[safeLocale];
  const finalCta = ctaText || ui.viewAll;
  const finalUrl = ctaUrl || gyg("/rome-l33/");

  return (
    <section className="section-warm py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{title}</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">{subtitle}</p>
        </div>
        <div className="space-y-12 lg:space-y-16">
          {cats.map((cat, i) => <Section key={cat.title} category={cat} reverse={i % 2 !== 0} locale={safeLocale} />)}
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <a href={finalUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 gold-gradient px-8 py-3 rounded-sm text-sm font-semibold text-espresso hover:opacity-90 transition-opacity">
            {finalCta}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
