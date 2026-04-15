const PARTNER_ID = "0IQTGX8";

interface ActivityCardProps {
  title: string;
  description: string;
  gygUrl: string;
  emoji: string;
  price?: string;
  pricePrefix?: string;
  bookLabel?: string;
}

export function ActivityCard({ title, description, gygUrl, emoji, price, pricePrefix = "Da", bookLabel = "Prenota ora" }: ActivityCardProps) {
  const affiliateUrl = gygUrl.includes("partner_id")
    ? gygUrl
    : `${gygUrl}${gygUrl.includes("?") ? "&" : "?"}partner_id=${PARTNER_ID}&utm_medium=online_publisher`;

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row sm:flex-col items-start gap-4 sm:gap-0 rounded-sm border border-stone-warm bg-card p-4 sm:p-7 transition-all hover:border-primary/30 hover:editorial-shadow-lg hover:-translate-y-1 active:scale-[0.98]"
    >
      <div className="text-2xl sm:text-3xl sm:mb-4 shrink-0">{emoji}</div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-base sm:text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>
        <p className="mt-1.5 sm:mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">{description}</p>
        <div className="mt-2.5 sm:mt-4 flex items-center gap-3">
          {price && (
            <span className="text-sm font-semibold text-primary">{pricePrefix} {price}</span>
          )}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            {bookLabel}
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
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
      className="inline-flex items-center gap-2 rounded-sm gold-gradient px-6 sm:px-8 py-3.5 text-sm font-semibold text-espresso amber-glow transition-all hover:amber-glow-lg hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <span className="text-center">{text}</span>
      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  );
}
