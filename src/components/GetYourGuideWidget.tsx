const PARTNER_ID = "0IQTGX8";

interface ActivityCardProps {
  title: string;
  description: string;
  gygUrl: string;
  emoji: string;
  price?: string;
}

export function ActivityCard({ title, description, gygUrl, emoji, price }: ActivityCardProps) {
  const affiliateUrl = gygUrl.includes("partner_id")
    ? gygUrl
    : `${gygUrl}${gygUrl.includes("?") ? "&" : "?"}partner_id=${PARTNER_ID}&utm_medium=online_publisher`;

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      {price && (
        <div className="mt-3 text-sm font-semibold text-primary">Da {price}</div>
      )}
      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Prenota ora
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}

export function GetYourGuideCTA({ text = "Prenota Transfer e Tour a Roma", url }: { text?: string; url?: string }) {
  const defaultUrl = `https://www.getyourguide.com/rome-l33/?partner_id=${PARTNER_ID}&utm_medium=online_publisher`;

  return (
    <a
      href={url || defaultUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
    >
      {text}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
}
