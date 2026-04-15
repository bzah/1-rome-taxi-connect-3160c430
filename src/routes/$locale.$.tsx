import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getTranslations } from "@/i18n";
import { HeroSection } from "@/components/HeroSection";
import { ActivityCard, GetYourGuideCTA } from "@/components/GetYourGuideWidget";
import { useState } from "react";
import { sendContactEmail } from "@/utils/contact.functions";
import fiumicinoImg from "@/assets/fiumicino-airport.jpg";
import taxiRomaImg from "@/assets/taxi-roma.jpg";

const fullyTranslatedPages = ["fiumicino", "tariffe", "taxi-ciampino", "prenota", "about", "contact"];

export const Route = createFileRoute("/$locale/$")({
  head: ({ params }) => {
    const t = getTranslations(params.locale);
    const slug = params._splat || "";
    const p = t?.pages?.[slug];
    if (!p?.meta) return {};
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
  component: CatchAllPage,
});

function CatchAllPage() {
  const { locale } = Route.useParams();
  const slug = (Route.useParams() as any)._splat || "";
  const t = getTranslations(locale);
  if (!t || !t.pages[slug]) throw notFound();

  if (fullyTranslatedPages.includes(slug)) {
    switch (slug) {
      case "fiumicino": return <FiumicinoPage t={t} locale={locale} />;
      case "tariffe": return <TariffePage t={t} locale={locale} />;
      case "taxi-ciampino": return <CiampinoPage t={t} locale={locale} />;
      case "prenota": return <PrenotaPage t={t} locale={locale} />;
      case "about": return <AboutPage t={t} locale={locale} />;
      case "contact": return <ContactPage t={t} locale={locale} />;
    }
  }

  // Not yet translated — show fallback
  const c = t.common.notTranslated;
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-lg px-4 text-center">
        <div className="text-6xl mb-6">🌐</div>
        <h1 className="font-display text-3xl font-bold mb-4">{c.title}</h1>
        <p className="text-muted-foreground mb-8">{c.description}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to={`/${slug}`} className="inline-flex items-center gap-2 rounded-lg gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground">{c.viewInItalian}</Link>
          <Link to={`/${locale}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-accent/50">{c.backHome}</Link>
        </div>
      </div>
    </div>
  );
}

// ────── FIUMICINO PAGE ──────
function FiumicinoPage({ t, locale }: { t: any; locale: string }) {
  const p = t.pages.fiumicino;
  const GYG = "https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/?partner_id=0IQTGX8&utm_medium=online_publisher";
  return (
    <>
      <HeroSection title={p.hero.title} subtitle={p.hero.subtitle} description={p.hero.description} ctaText={p.hero.ctaText} ctaHref={GYG} image={fiumicinoImg} />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">{p.generalTitle}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{p.generalText}</p>
        <h3 className="font-display text-2xl font-bold mt-12 mb-6">{p.terminalsTitle}</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {p.terminals.map((t: any) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">{t.emoji}</div>
              <h4 className="font-display text-lg font-semibold">{t.name}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="font-display text-3xl font-bold mt-16 mb-8">{p.taxiTitle}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {p.taxiCards.map((c: any) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">{p.transportTitle}</h2>
        <p className="text-muted-foreground mb-8">{p.transportSubtitle}</p>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="gold-gradient text-primary-foreground">
              <tr>{p.transportHeaders.map((h: string) => <th key={h} className="px-6 py-4 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {p.transportTable.map((row: string[]) => (
                <tr key={row[0]} className="hover:bg-accent/30">
                  {row.map((cell: string, i: number) => <td key={i} className="px-6 py-3.5">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="font-display text-3xl font-bold mt-16 mb-4">{p.transferTitle}</h2>
        <p className="text-muted-foreground mb-8">{p.transferSubtitle}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.transferCards.map((c: any) => (
            <ActivityCard key={c.title} emoji={c.emoji} title={c.title} description={c.description} gygUrl={GYG} price={c.price} />
          ))}
        </div>
        <div className="mt-12 text-center"><GetYourGuideCTA text={t.common.cta.viewAll} url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" /></div>
        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">{p.leonardoTitle}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.leonardoText}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {p.leonardoDetails.map((d: string) => <li key={d}>• {d}</li>)}
          </ul>
        </div>
        <div className="mt-8 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">{p.parkingTitle}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.parkingText}</p>
        </div>
      </section>
    </>
  );
}

// ────── TARIFFE PAGE ──────
function TariffePage({ t, locale }: { t: any; locale: string }) {
  const p = t.pages.tariffe;
  return (
    <>
      <HeroSection title={p.hero.title} subtitle={p.hero.subtitle} description={p.hero.description} image={taxiRomaImg} />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">{p.baseTitle}</h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="gold-gradient text-primary-foreground">
              <tr>{p.fareHeaders.map((h: string) => <th key={h} className="px-6 py-4 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {p.fareTable.map((row: string[]) => (
                <tr key={row[0]} className="hover:bg-accent/30"><td className="px-6 py-3.5">{row[0]}</td><td className="px-6 py-3.5 text-right font-semibold">{row[1]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="font-display text-3xl font-bold mt-16 mb-8">{p.fixedTitle}</h2>
        <p className="text-muted-foreground mb-8">{p.fixedSubtitle}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {p.fixedRates.map((r: any) => (
            <div key={r.route} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-primary font-display">{r.price}</div>
              <div className="mt-2 font-semibold">{r.route}</div>
              <div className="mt-1 text-xs text-muted-foreground">{r.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">{p.tipsTitle}</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {p.tips.map((tip: string) => <li key={tip} dangerouslySetInnerHTML={{ __html: `• ${tip}` }} />)}
          </ul>
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">{p.ctaText}</p>
          <GetYourGuideCTA text={p.ctaButton} url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" />
        </div>
      </section>
    </>
  );
}

// ────── CIAMPINO PAGE ──────
function CiampinoPage({ t, locale }: { t: any; locale: string }) {
  const p = t.pages["taxi-ciampino"];
  const GYG = "https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/?partner_id=0IQTGX8&utm_medium=online_publisher";
  return (
    <>
      <HeroSection title={p.hero.title} subtitle={p.hero.subtitle} description={p.hero.description} ctaText={p.hero.ctaText} ctaHref={GYG} />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold mb-8">{p.mainTitle}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: p.mainText }} />
        <div className="grid gap-6 sm:grid-cols-2">
          {p.infoCards.map((c: any) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6">
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="font-display text-3xl font-bold mt-16 mb-8">{p.comparisonTitle}</h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="gold-gradient text-primary-foreground">
              <tr>{p.comparisonHeaders.map((h: string) => <th key={h} className="px-6 py-4 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {p.comparisonRows.map((row: string[]) => (
                <tr key={row[0]} className="hover:bg-accent/30">
                  {row.map((cell: string, i: number) => <td key={i} className={`px-6 py-3.5 ${i === 0 ? "font-medium" : "text-center"}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">{p.tipsTitle}</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {p.tips.map((tip: string) => <li key={tip} dangerouslySetInnerHTML={{ __html: `• ${tip}` }} />)}
          </ul>
        </div>
        <div className="mt-12 text-center"><GetYourGuideCTA text={t.common.cta.viewAll} url="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher" /></div>
      </section>
    </>
  );
}

// ────── PRENOTA PAGE ──────
function PrenotaPage({ t, locale }: { t: any; locale: string }) {
  const p = t.pages.prenota;
  const GYG = "https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher";
  const GYG_URLS = [
    "https://www.getyourguide.com/rome-l33/rome-fiumicino-airport-private-transfer-t419283/",
    "https://www.getyourguide.com/rome-l33/fiumicino-airport-shuttle-transfer-to-from-rome-t120/",
    "https://www.getyourguide.com/rome-l33/ciampino-airport-private-transfer-t419284/",
    "https://www.getyourguide.com/rome-l33/private-transfer-rome-naples-t226/",
    "https://www.getyourguide.com/rome-l33/private-transfer-civitavecchia-t123/",
    "https://www.getyourguide.com/rome-l33/tivoli-tour-t456/",
  ];
  return (
    <>
      <HeroSection title={p.hero.title} subtitle={p.hero.subtitle} description={p.hero.description} ctaText={p.hero.ctaText} ctaHref={GYG} />
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-center mb-4">{p.mainTitle}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{p.mainSubtitle}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.transfers.map((tr: any, i: number) => (
            <ActivityCard key={i} emoji={tr.emoji} title={tr.title} description={tr.description} gygUrl={GYG_URLS[i] || GYG} price={tr.price} />
          ))}
        </div>
        <div className="mt-16 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-6">{p.howToTitle}</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {p.steps.map((s: any) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-xl font-bold text-primary-foreground">{s.num}</div>
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center"><GetYourGuideCTA text={t.common.cta.viewAll} url={GYG} /></div>
      </section>
    </>
  );
}

// ────── ABOUT PAGE ──────
function AboutPage({ t, locale }: { t: any; locale: string }) {
  const p = t.pages.about;
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">{p.title}</h1>
        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p dangerouslySetInnerHTML={{ __html: p.intro }} />
          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">{p.missionTitle}</h2>
          <p>{p.missionText}</p>
          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">{p.offerTitle}</h2>
          <ul className="list-disc pl-6 space-y-2">{p.offers.map((o: string) => <li key={o}>{o}</li>)}</ul>
          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">{p.affiliateTitle}</h2>
          <p>{p.affiliateText}</p>
          <h2 className="font-display text-2xl font-semibold text-foreground mt-8">{p.contactTitle}</h2>
          <p>{p.contactText} <a href="mailto:contact@taxifiumicino.com" className="text-primary hover:underline">contact@taxifiumicino.com</a></p>
        </div>
      </div>
    </div>
  );
}

// ────── CONTACT PAGE ──────
function ContactPage({ t, locale }: { t: any; locale: string }) {
  const p = t.pages.contact;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContactEmail({ data: formData });
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">{p.formTitle}</h1>
        <p className="text-muted-foreground mb-8">{p.formSubtitle}</p>
        {status === "success" ? (
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-lg font-semibold">{p.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div><label className="block text-sm font-medium mb-2">{p.labels.name}</label><input required minLength={2} value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} placeholder={p.placeholders.name} className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm" /></div>
            <div><label className="block text-sm font-medium mb-2">{p.labels.email}</label><input required type="email" value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} placeholder={p.placeholders.email} className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm" /></div>
            <div><label className="block text-sm font-medium mb-2">{p.labels.subject}</label><input value={formData.subject} onChange={e => setFormData(d => ({ ...d, subject: e.target.value }))} placeholder={p.placeholders.subject} className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm" /></div>
            <div><label className="block text-sm font-medium mb-2">{p.labels.message}</label><textarea required minLength={10} rows={5} value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} placeholder={p.placeholders.message} className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm" /></div>
            <button type="submit" disabled={status === "sending"} className="w-full rounded-lg gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-50">
              {status === "sending" ? p.labels.sending : p.labels.send}
            </button>
          </form>
        )}
        <div className="mt-12 rounded-xl section-warm p-8">
          <h3 className="font-display text-xl font-semibold mb-4">{p.infoTitle}</h3>
          <p className="text-sm text-muted-foreground"><strong>{p.infoEmail}:</strong> <a href="mailto:contact@taxifiumicino.com" className="text-primary hover:underline">contact@taxifiumicino.com</a></p>
        </div>
      </div>
    </div>
  );
}
