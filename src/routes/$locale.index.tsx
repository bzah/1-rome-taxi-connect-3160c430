import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { getTranslations } from "@/i18n";
import taxiRomaImg from "@/assets/taxi-roma.jpg";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";

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

function LocaleIndex() {
  const { locale } = Route.useParams();
  const t = getTranslations(locale);
  if (!t) return null;
  const p = t.pages.index;
  const GYG_TRANSFER = "https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher";
  const GYG_ACTIVITIES = [
    "https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/",
    "https://www.getyourguide.com/rome-l33/skip-the-line-colosseum-roman-forum-palatine-hill-t67792/",
    "https://www.getyourguide.com/rome-l33/vatican-museums-sistine-chapel-skip-the-line-ticket-t44089/",
    "https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/",
    "https://www.getyourguide.com/rome-l33/trastevere-food-tour-t226/",
    "https://www.getyourguide.com/rome-l33/rome-by-night-walking-tour-t392/",
  ];

  return (
    <>
      <HeroSection
        title={p.hero!.title}
        subtitle={p.hero!.subtitle}
        description={p.hero!.description}
        ctaText={p.hero!.ctaText}
        ctaHref={GYG_TRANSFER}
        secondaryCtaText={p.secondaryCta}
        secondaryCtaHref={`/${locale}/tariffe`}
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">{p.infoTitle}</h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">{p.infoSubtitle}</p>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to={`/${locale}/tariffe`} className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <img src={taxiRomaImg} alt={p.cardTariffe.title} className="h-36 sm:h-48 w-full object-cover" loading="lazy" width={600} height={300} />
            <div className="p-4 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">{p.cardTariffe.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground">{p.cardTariffe.desc}</p>
            </div>
          </Link>
          <Link to={`/${locale}/fiumicino`} className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <img src={fiumicinoImg} alt={p.cardFiumicino.title} className="h-36 sm:h-48 w-full object-cover" loading="lazy" width={600} height={300} />
            <div className="p-4 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">{p.cardFiumicino.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground">{p.cardFiumicino.desc}</p>
            </div>
          </Link>
          <Link to={`/${locale}/numeri`} className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="h-36 sm:h-48 w-full gold-gradient flex items-center justify-center"><span className="text-5xl sm:text-7xl">📞</span></div>
            <div className="p-4 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">{p.cardNumeri.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground">{p.cardNumeri.desc}</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="section-warm py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{p.whyTitle}</h2>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {p.reasons.map((r: any) => (
              <div key={r.title} className="text-center">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{r.emoji}</div>
                <h3 className="font-display text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{r.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">{p.transfersTitle}</h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">{p.transfersSubtitle}</p>
        <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.activities.map((a: any, i: number) => (
            <ActivityCard key={i} emoji={a.emoji} title={a.title} description={a.description} gygUrl={GYG_ACTIVITIES[i] || GYG_TRANSFER} price={a.price} pricePrefix={t.common.cta.pricePrefix} bookLabel={t.common.cta.bookNow} />
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center"><GetYourGuideCTA text={t.common.cta.viewAll} /></div>
      </section>

      <section className="section-warm py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">{p.faqTitle}</h2>
          <div className="space-y-3 sm:space-y-6">
            {p.faqs.map((faq: any) => (
              <details key={faq.q} className="group rounded-xl border border-border bg-card p-4 sm:p-6">
                <summary className="cursor-pointer font-display text-base sm:text-lg font-semibold text-card-foreground list-none flex items-center justify-between gap-3">
                  <span>{faq.q}</span>
                  <svg className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
