import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { getTranslations } from "@/i18n";
import {
  GYG_COLOSSEUM_TOUR,
  GYG_COLOSSEUM_ARENA,
  GYG_COLOSSEUM_UNDERGROUND,
  GYG_VATICAN_TOUR,
  GYG_VATICAN_BASILICA,
  GYG_VATICAN_TICKET,
  GYG_VATICAN_SKIP_LINE,
  GYG_VATICAN_SQUARE,
  GYG_POMPEII_DAY_TRIP,
  GYG_HOP_ON_BUS,
  GYG_PASTA_CLASS,
  GYG_COLOSSEUM_GUIDED,
  GYG_ROME_ALL,
  GYG_ROME_TRANSFERS,
} from "@/lib/gyg-links";
import taxiRomaImg from "@/assets/taxi-roma.jpg";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";
import colosseumImg from "@/assets/rome-colosseum-golden.jpg";
import vaticanImg from "@/assets/rome-vatican-tour.jpg";
import hotelImg from "@/assets/rome-hotel-stay.jpg";
import eventsImg from "@/assets/rome-events.jpg";
import activitiesImg from "@/assets/rome-activities-pasta.jpg";

export const Route = createFileRoute("/$locale/")({
  component: LocaleIndex,
  head: ({ params }) => {
    const t = getTranslations(params.locale);
    const p = t?.pages?.index;
    if (!p) return {};
    return {
      meta: [
        { title: p.meta.title },
        { name: "description", content: p.meta.description },
        { property: "og:title", content: p.meta.ogTitle },
        { property: "og:description", content: p.meta.ogDescription },
        { name: "keywords", content: p.meta.keywords },
      ],
    };
  },
});

interface CategoryItem { title: string; desc: string; url: string; price?: string }
interface Category { title: string; subtitle: string; image: string; alt: string; items: CategoryItem[] }

const CATEGORIES: Record<string, { sectionTitle: string; sectionSubtitle: string; sectionLabel: string; ctaText: string; bookLabel: string; pricePrefix: string; cats: Category[] }> = {
  en: {
    sectionTitle: "Attractions, Tours & Activities",
    sectionSubtitle: "Book the best experiences in Rome with free cancellation. Guided tours, skip-the-line tickets, cooking classes and more.",
    sectionLabel: "Discover Rome",
    ctaText: "Explore All Experiences in Rome",
    bookLabel: "Book Now",
    pricePrefix: "From",
    cats: [
      { title: "Attractions", subtitle: "Iconic monuments of the Eternal City", image: colosseumImg, alt: "The Colosseum at sunset in Rome", items: [
        { title: "Colosseum, Forum & Palatine Tour", desc: "Skip-the-line guided tour of the Colosseum, Roman Forum and Palatine Hill. 2.5 hours.", url: GYG_COLOSSEUM_TOUR, price: "€35" },
        { title: "Colosseum Arena & Underground", desc: "Exclusive access to the arena floor, underground level and Roman Forum.", url: GYG_COLOSSEUM_ARENA, price: "€50" },
        { title: "Colosseum Underground & Ancient Rome", desc: "Explore the secret underground passages of the Colosseum. 3 hours.", url: GYG_COLOSSEUM_UNDERGROUND, price: "€40" },
      ]},
      { title: "Tours", subtitle: "Guided tours with skip-the-line access", image: vaticanImg, alt: "Guided tour at Vatican Museums", items: [
        { title: "Vatican Museums & Sistine Chapel", desc: "Skip-the-line guided tour of Vatican Museums, Sistine Chapel and Basilica.", url: GYG_VATICAN_TOUR, price: "€30" },
        { title: "Vatican, Sistine & St. Peter's Basilica", desc: "Vatican Museums, Sistine Chapel and St. Peter's Basilica with expert guide.", url: GYG_VATICAN_BASILICA, price: "€45" },
        { title: "Pompeii & Amalfi Coast Day Trip", desc: "Full-day excursion from Rome to Pompeii, Amalfi Coast and Sorrento.", url: GYG_POMPEII_DAY_TRIP, price: "€120" },
      ]},
      { title: "Stay", subtitle: "Find the perfect hotel in Rome", image: hotelImg, alt: "Luxury hotel room in Rome with rooftop view", items: [
        { title: "Rome City Center Hotels", desc: "Discover the best hotels in the heart of Rome: Termini, Trastevere, Vatican area.", url: GYG_ROME_ALL },
        { title: "Fiumicino Airport Hotels", desc: "Convenient hotels near Leonardo da Vinci airport for early departures and late arrivals.", url: GYG_ROME_ALL },
        { title: "Hotel ↔ Airport Transfer", desc: "Private transfer from airport to your Rome hotel. Driver with name sign.", url: GYG_ROME_TRANSFERS },
      ]},
      { title: "Events", subtitle: "Evening experiences & shows", image: eventsImg, alt: "Evening in a Roman piazza with lights", items: [
        { title: "Skip the Line Vatican Tour", desc: "Vatican, Sistine Chapel and St. Peter's Square without waiting.", url: GYG_VATICAN_SKIP_LINE, price: "€35" },
        { title: "Hop-on Hop-off Bus Rome", desc: "Explore Rome at your own pace with the panoramic tourist bus. Valid up to 3 days.", url: GYG_HOP_ON_BUS, price: "€25" },
        { title: "Vatican & St. Peter's Square Tour", desc: "Vatican Museums, Sistine Chapel and St. Peter's Square with guide.", url: GYG_VATICAN_SQUARE, price: "€40" },
      ]},
      { title: "Activities", subtitle: "Food & cultural experiences", image: activitiesImg, alt: "Pasta making class in Rome", items: [
        { title: "Pasta & Tiramisù Class", desc: "Learn to make pasta and tiramisù in a local restaurant near the Vatican.", url: GYG_PASTA_CLASS, price: "€55" },
        { title: "Vatican Ticket — Skip the Line", desc: "Priority entry to Vatican Museums and Sistine Chapel. All day access.", url: GYG_VATICAN_TICKET, price: "€25" },
        { title: "Guided Colosseum Tour", desc: "Colosseum, Palatine and Roman Forum with expert guide and priority access.", url: GYG_COLOSSEUM_GUIDED, price: "€35" },
      ]},
    ],
  },
  fr: {
    sectionTitle: "Attractions, Tours et Activités",
    sectionSubtitle: "Réservez les meilleures expériences à Rome avec annulation gratuite. Visites guidées, billets coupe-file, cours de cuisine et plus.",
    sectionLabel: "Découvrir Rome",
    ctaText: "Découvrir Toutes les Expériences à Rome",
    bookLabel: "Réserver",
    pricePrefix: "Dès",
    cats: [
      { title: "Attractions", subtitle: "Les monuments emblématiques de la Ville Éternelle", image: colosseumImg, alt: "Le Colisée au coucher du soleil à Rome", items: [
        { title: "Visite Colisée, Forum et Palatin", desc: "Visite guidée coupe-file du Colisée, Forum Romain et Mont Palatin. 2h30.", url: GYG_COLOSSEUM_TOUR, price: "€35" },
        { title: "Arène et Souterrains du Colisée", desc: "Accès exclusif à l'arène, aux souterrains et au Forum Romain.", url: GYG_COLOSSEUM_ARENA, price: "€50" },
        { title: "Colisée Souterrain et Rome Antique", desc: "Explorez les passages souterrains secrets du Colisée. 3 heures.", url: GYG_COLOSSEUM_UNDERGROUND, price: "€40" },
      ]},
      { title: "Tours", subtitle: "Visites guidées avec accès coupe-file", image: vaticanImg, alt: "Visite guidée aux Musées du Vatican", items: [
        { title: "Musées du Vatican et Chapelle Sixtine", desc: "Visite guidée coupe-file des Musées du Vatican, Chapelle Sixtine et Basilique.", url: GYG_VATICAN_TOUR, price: "€30" },
        { title: "Vatican, Sixtine et Basilique Saint-Pierre", desc: "Musées du Vatican, Chapelle Sixtine et Basilique Saint-Pierre avec guide.", url: GYG_VATICAN_BASILICA, price: "€45" },
        { title: "Excursion Pompéi et Côte Amalfitaine", desc: "Excursion journalière de Rome à Pompéi, Côte Amalfitaine et Sorrente.", url: GYG_POMPEII_DAY_TRIP, price: "€120" },
      ]},
      { title: "Séjour", subtitle: "Trouvez l'hôtel parfait à Rome", image: hotelImg, alt: "Chambre d'hôtel de luxe à Rome", items: [
        { title: "Hôtels Rome Centre", desc: "Les meilleurs hôtels au cœur de Rome : Termini, Trastevere, Vatican.", url: GYG_ROME_ALL },
        { title: "Hôtels Aéroport Fiumicino", desc: "Hôtels pratiques près de l'aéroport pour départs matinaux et arrivées tardives.", url: GYG_ROME_ALL },
        { title: "Transfert Hôtel ↔ Aéroport", desc: "Transfert privé de l'aéroport à votre hôtel à Rome. Chauffeur avec panneau.", url: GYG_ROME_TRANSFERS },
      ]},
      { title: "Événements", subtitle: "Expériences en soirée et spectacles", image: eventsImg, alt: "Soirée dans une place romaine", items: [
        { title: "Visite Vatican Coupe-File", desc: "Vatican, Chapelle Sixtine et Place Saint-Pierre sans attente.", url: GYG_VATICAN_SKIP_LINE, price: "€35" },
        { title: "Bus Hop-on Hop-off Rome", desc: "Explorez Rome à votre rythme avec le bus touristique. Valable jusqu'à 3 jours.", url: GYG_HOP_ON_BUS, price: "€25" },
        { title: "Visite Vatican et Place Saint-Pierre", desc: "Musées du Vatican, Chapelle Sixtine et Place Saint-Pierre avec guide.", url: GYG_VATICAN_SQUARE, price: "€40" },
      ]},
      { title: "Activités", subtitle: "Expériences gastronomiques et culturelles", image: activitiesImg, alt: "Cours de pâtes fraîches à Rome", items: [
        { title: "Cours Pâtes et Tiramisù", desc: "Apprenez à faire des pâtes et du tiramisù dans un restaurant local près du Vatican.", url: GYG_PASTA_CLASS, price: "€55" },
        { title: "Billet Vatican — Coupe-File", desc: "Entrée prioritaire aux Musées du Vatican et Chapelle Sixtine. Toute la journée.", url: GYG_VATICAN_TICKET, price: "€25" },
        { title: "Visite Guidée du Colisée", desc: "Colisée, Palatin et Forum Romain avec guide expert et accès prioritaire.", url: GYG_COLOSSEUM_GUIDED, price: "€35" },
      ]},
    ],
  },
  es: {
    sectionTitle: "Atracciones, Tours y Actividades",
    sectionSubtitle: "Reserva las mejores experiencias en Roma con cancelación gratuita. Tours guiados, entradas sin colas, clases de cocina y más.",
    sectionLabel: "Descubre Roma",
    ctaText: "Descubre Todas las Experiencias en Roma",
    bookLabel: "Reservar Ahora",
    pricePrefix: "Desde",
    cats: [
      { title: "Atracciones", subtitle: "Los monumentos icónicos de la Ciudad Eterna", image: colosseumImg, alt: "El Coliseo al atardecer en Roma", items: [
        { title: "Tour Coliseo, Foro y Palatino", desc: "Visita guiada sin colas al Coliseo, Foro Romano y Monte Palatino. 2.5 horas.", url: GYG_COLOSSEUM_TOUR, price: "€35" },
        { title: "Arena y Subterráneos del Coliseo", desc: "Acceso exclusivo a la arena, nivel subterráneo y Foro Romano.", url: GYG_COLOSSEUM_ARENA, price: "€50" },
        { title: "Coliseo Subterráneo y Roma Antigua", desc: "Explora los pasajes subterráneos secretos del Coliseo. 3 horas.", url: GYG_COLOSSEUM_UNDERGROUND, price: "€40" },
      ]},
      { title: "Tours", subtitle: "Tours guiados con acceso sin colas", image: vaticanImg, alt: "Tour guiado en los Museos Vaticanos", items: [
        { title: "Museos Vaticanos y Capilla Sixtina", desc: "Tour guiado sin colas por los Museos Vaticanos, Capilla Sixtina y Basílica.", url: GYG_VATICAN_TOUR, price: "€30" },
        { title: "Vaticano, Sixtina y Basílica de San Pedro", desc: "Museos Vaticanos, Capilla Sixtina y Basílica de San Pedro con guía.", url: GYG_VATICAN_BASILICA, price: "€45" },
        { title: "Excursión Pompeya y Costa Amalfitana", desc: "Excursión de día completo desde Roma a Pompeya, Costa Amalfitana y Sorrento.", url: GYG_POMPEII_DAY_TRIP, price: "€120" },
      ]},
      { title: "Alojamiento", subtitle: "Encuentra el hotel perfecto en Roma", image: hotelImg, alt: "Habitación de hotel de lujo en Roma", items: [
        { title: "Hoteles Roma Centro", desc: "Los mejores hoteles en el corazón de Roma: Termini, Trastevere, Vaticano.", url: GYG_ROME_ALL },
        { title: "Hoteles Aeropuerto Fiumicino", desc: "Hoteles cómodos cerca del aeropuerto para salidas tempranas y llegadas tardías.", url: GYG_ROME_ALL },
        { title: "Transfer Hotel ↔ Aeropuerto", desc: "Traslado privado del aeropuerto a tu hotel en Roma. Conductor con cartel.", url: GYG_ROME_TRANSFERS },
      ]},
      { title: "Eventos", subtitle: "Experiencias nocturnas y espectáculos", image: eventsImg, alt: "Noche en una plaza romana con luces", items: [
        { title: "Tour Vaticano Sin Colas", desc: "Vaticano, Capilla Sixtina y Plaza de San Pedro sin esperas.", url: GYG_VATICAN_SKIP_LINE, price: "€35" },
        { title: "Bus Hop-on Hop-off Roma", desc: "Explora Roma a tu ritmo con el bus turístico panorámico. Válido hasta 3 días.", url: GYG_HOP_ON_BUS, price: "€25" },
        { title: "Tour Vaticano y Plaza San Pedro", desc: "Museos Vaticanos, Capilla Sixtina y Plaza San Pedro con guía.", url: GYG_VATICAN_SQUARE, price: "€40" },
      ]},
      { title: "Actividades", subtitle: "Experiencias gastronómicas y culturales", image: activitiesImg, alt: "Clase de pasta fresca en Roma", items: [
        { title: "Clase de Pasta y Tiramisú", desc: "Aprende a hacer pasta y tiramisú en un restaurante local cerca del Vaticano.", url: GYG_PASTA_CLASS, price: "€55" },
        { title: "Entrada Vaticano — Sin Colas", desc: "Entrada prioritaria a los Museos Vaticanos y Capilla Sixtina. Todo el día.", url: GYG_VATICAN_TICKET, price: "€25" },
        { title: "Tour Guiado del Coliseo", desc: "Coliseo, Palatino y Foro Romano con guía experto y acceso prioritario.", url: GYG_COLOSSEUM_GUIDED, price: "€35" },
      ]},
    ],
  },
  ru: {
    sectionTitle: "Достопримечательности, Туры и Развлечения",
    sectionSubtitle: "Бронируйте лучшие впечатления в Риме с бесплатной отменой. Экскурсии, билеты без очереди, кулинарные мастер-классы и многое другое.",
    sectionLabel: "Откройте Рим",
    ctaText: "Все Впечатления в Риме",
    bookLabel: "Забронировать",
    pricePrefix: "От",
    cats: [
      { title: "Достопримечательности", subtitle: "Знаковые памятники Вечного города", image: colosseumImg, alt: "Колизей на закате в Риме", items: [
        { title: "Тур Колизей, Форум и Палатин", desc: "Экскурсия без очереди по Колизею, Римскому Форуму и Палатинскому холму. 2,5 часа.", url: GYG_COLOSSEUM_TOUR, price: "€35" },
        { title: "Арена и подземелья Колизея", desc: "Эксклюзивный доступ на арену, подземный уровень и Римский Форум.", url: GYG_COLOSSEUM_ARENA, price: "€50" },
        { title: "Подземный Колизей и Древний Рим", desc: "Исследуйте секретные подземные ходы Колизея. 3 часа.", url: GYG_COLOSSEUM_UNDERGROUND, price: "€40" },
      ]},
      { title: "Туры", subtitle: "Экскурсии с проходом без очереди", image: vaticanImg, alt: "Экскурсия в Музеях Ватикана", items: [
        { title: "Музеи Ватикана и Сикстинская капелла", desc: "Экскурсия без очереди по Музеям Ватикана, Сикстинской капелле и Базилике.", url: GYG_VATICAN_TOUR, price: "€30" },
        { title: "Ватикан, Сикстинская и Собор Святого Петра", desc: "Музеи Ватикана, Сикстинская капелла и Собор Святого Петра с гидом.", url: GYG_VATICAN_BASILICA, price: "€45" },
        { title: "Экскурсия в Помпеи и на побережье Амальфи", desc: "Однодневная экскурсия из Рима в Помпеи, на побережье Амальфи и Сорренто.", url: GYG_POMPEII_DAY_TRIP, price: "€120" },
      ]},
      { title: "Проживание", subtitle: "Найдите идеальный отель в Риме", image: hotelImg, alt: "Номер люкс в отеле Рима с видом на крыши", items: [
        { title: "Отели в центре Рима", desc: "Лучшие отели в самом сердце Рима: Термини, Трастевере, Ватикан.", url: GYG_ROME_ALL },
        { title: "Отели у аэропорта Фьюмичино", desc: "Удобные отели рядом с аэропортом для ранних вылетов и поздних прилётов.", url: GYG_ROME_ALL },
        { title: "Трансфер Отель ↔ Аэропорт", desc: "Частный трансфер из аэропорта в ваш отель в Риме. Водитель с табличкой.", url: GYG_ROME_TRANSFERS },
      ]},
      { title: "События", subtitle: "Вечерние впечатления и шоу", image: eventsImg, alt: "Вечер на римской площади с огнями", items: [
        { title: "Ватикан без очереди", desc: "Ватикан, Сикстинская капелла и площадь Святого Петра без ожидания.", url: GYG_VATICAN_SKIP_LINE, price: "€35" },
        { title: "Автобус Hop-on Hop-off Рим", desc: "Исследуйте Рим в своём темпе на панорамном автобусе. До 3 дней.", url: GYG_HOP_ON_BUS, price: "€25" },
        { title: "Тур Ватикан и площадь Святого Петра", desc: "Музеи Ватикана, Сикстинская капелла и площадь Святого Петра с гидом.", url: GYG_VATICAN_SQUARE, price: "€40" },
      ]},
      { title: "Развлечения", subtitle: "Гастрономические и культурные впечатления", image: activitiesImg, alt: "Мастер-класс по приготовлению пасты в Риме", items: [
        { title: "Мастер-класс Паста и Тирамису", desc: "Научитесь готовить пасту и тирамису в местном ресторане рядом с Ватиканом.", url: GYG_PASTA_CLASS, price: "€55" },
        { title: "Билет Ватикан — Без Очереди", desc: "Приоритетный вход в Музеи Ватикана и Сикстинскую капеллу. Весь день.", url: GYG_VATICAN_TICKET, price: "€25" },
        { title: "Экскурсия по Колизею с гидом", desc: "Колизей, Палатин и Римский Форум с экспертом-гидом и приоритетным доступом.", url: GYG_COLOSSEUM_GUIDED, price: "€35" },
      ]},
    ],
  },
};

function CategoryCard({ cat, index, bookLabel, pricePrefix }: { cat: Category; index: number; bookLabel: string; pricePrefix: string }) {
  const isReversed = index % 2 === 1;
  return (
    <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-10 items-stretch`}>
      <div className="lg:w-1/2 relative overflow-hidden rounded-sm group">
        <img src={cat.image} alt={cat.alt} className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={544} />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">{cat.title}</h3>
          <p className="text-white/80 text-sm mt-1">{cat.subtitle}</p>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-4">
        {cat.items.map((item) => (
          <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="group/card flex items-start gap-4 rounded-sm border border-stone-warm bg-card p-5 sm:p-6 transition-all hover:border-primary/30 hover:editorial-shadow-lg hover:-translate-y-0.5 active:scale-[0.99]">
            <div className="flex-1 min-w-0">
              <h4 className="font-display text-base sm:text-lg font-semibold text-card-foreground group-hover/card:text-primary transition-colors leading-snug">{item.title}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.desc}</p>
              <div className="mt-2.5 flex items-center gap-3">
                {item.price && <span className="text-sm font-semibold text-primary">{pricePrefix} {item.price}</span>}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {bookLabel}
                  <svg className="h-4 w-4 transition-transform group-hover/card:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function LocaleIndex() {
  const { locale } = Route.useParams();
  const t = getTranslations(locale);
  if (!t) return null;
  const p = t.pages.index;
  const catData = CATEGORIES[locale] || CATEGORIES.en;

  return (
    <>
      <HeroSection
        title={p.hero!.title}
        subtitle={p.hero!.subtitle}
        description={p.hero!.description}
        ctaText={p.hero!.ctaText}
        ctaHref={GYG_ROME_TRANSFERS}
        secondaryCtaText={p.secondaryCta}
        secondaryCtaHref={`/${locale}/tariffe`}
      />

      {/* Info cards */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{p.infoTitle}</h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">{p.infoSubtitle}</p>
        </div>
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to={`/${locale}/tariffe`} className="group rounded-sm border border-stone-warm bg-card overflow-hidden transition-all hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <div className="overflow-hidden"><img src={taxiRomaImg} alt={p.cardTariffe.title} className="h-44 sm:h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={600} height={300} /></div>
            <div className="p-5 sm:p-7">
              <h3 className="font-display text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">{p.cardTariffe.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.cardTariffe.desc}</p>
            </div>
          </Link>
          <Link to={`/${locale}/fiumicino`} className="group rounded-sm border border-stone-warm bg-card overflow-hidden transition-all hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <div className="overflow-hidden"><img src={fiumicinoImg} alt={p.cardFiumicino.title} className="h-44 sm:h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={600} height={300} /></div>
            <div className="p-5 sm:p-7">
              <h3 className="font-display text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">{p.cardFiumicino.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.cardFiumicino.desc}</p>
            </div>
          </Link>
          <Link to={`/${locale}/numeri`} className="group rounded-sm border border-stone-warm bg-card overflow-hidden transition-all hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]">
            <div className="h-44 sm:h-52 w-full gold-gradient flex items-center justify-center"><span className="text-5xl sm:text-7xl">📞</span></div>
            <div className="p-5 sm:p-7">
              <h3 className="font-display text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">{p.cardNumeri.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.cardNumeri.desc}</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══ HCMC-style Category Sections ═══ */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{catData.sectionLabel}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{catData.sectionTitle}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">{catData.sectionSubtitle}</p>
          </div>
          <div className="flex flex-col gap-14 sm:gap-20">
            {catData.cats.map((cat, i) => (
              <CategoryCard key={cat.title} cat={cat} index={i} bookLabel={catData.bookLabel} pricePrefix={catData.pricePrefix} />
            ))}
          </div>
          <div className="mt-14 sm:mt-20 text-center">
            <GetYourGuideCTA text={catData.ctaText} url={GYG_ROME_ALL} />
          </div>
        </div>
      </section>

      {/* Why taxi */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 sm:mb-16">{p.whyTitle}</h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {p.reasons.map((r: any) => (
              <div key={r.title} className="p-6 sm:p-8 border border-stone-warm bg-card rounded-sm hover:border-primary/30 transition-colors duration-500">
                <div className="text-3xl sm:text-4xl mb-4">{r.emoji}</div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity cards */}
      <section className="section-warm py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{p.transfersTitle}</h2>
            <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed text-pretty">{p.transfersSubtitle}</p>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.activities.map((a: any, i: number) => (
              <ActivityCard key={i} emoji={a.emoji} title={a.title} description={a.description} gygUrl={[GYG_ROME_TRANSFERS, GYG_COLOSSEUM_TOUR, GYG_VATICAN_TOUR, GYG_ROME_TRANSFERS, GYG_PASTA_CLASS, GYG_COLOSSEUM_UNDERGROUND][i] || GYG_ROME_ALL} price={a.price} pricePrefix={t.common.cta.pricePrefix} bookLabel={t.common.cta.bookNow} />
            ))}
          </div>
          <div className="mt-10 sm:mt-14 text-center"><GetYourGuideCTA text={t.common.cta.viewAll} url={GYG_ROME_ALL} /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 sm:mb-16">{p.faqTitle}</h2>
          <div className="flex flex-col border-t border-stone-warm">
            {p.faqs.map((faq: any, i: number) => (
              <details key={faq.q} className="group border-b border-stone-warm py-6 sm:py-8">
                <summary className="cursor-pointer list-none flex items-start gap-4 sm:gap-6">
                  <span className="text-xs font-medium text-primary/60 mt-1.5 tabular-nums tracking-widest">{String(i + 1).padStart(2, '0')}.</span>
                  <span className="font-display text-lg sm:text-xl font-semibold text-foreground flex-1 group-hover:text-primary transition-colors">{faq.q}</span>
                  <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="mt-4 ml-8 sm:ml-12 text-sm text-muted-foreground leading-relaxed max-w-[60ch]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
