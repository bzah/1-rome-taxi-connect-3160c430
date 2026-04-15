export type Locale = "it" | "en" | "es" | "fr" | "ru";

export const foreignLocales: Locale[] = ["en", "es", "fr", "ru"];
export const allLocales: Locale[] = ["it", ...foreignLocales];

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  es: "Español",
  fr: "Français",
  ru: "Русский",
};

export const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  ru: "🇷🇺",
};

export const localeHtmlLang: Record<Locale, string> = {
  it: "it",
  en: "en",
  es: "es",
  fr: "fr",
  ru: "ru",
};

export function isValidForeignLocale(s: string): s is Locale {
  return foreignLocales.includes(s as Locale);
}

/** Build the localized path for a given page slug and locale */
export function localizedPath(slug: string, locale: Locale): string {
  if (locale === "it") return slug.startsWith("/") ? slug : `/${slug}`;
  const clean = slug.startsWith("/") ? slug.slice(1) : slug;
  return `/${locale}${clean ? `/${clean}` : ""}`;
}
