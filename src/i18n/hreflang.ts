import { allLocales, type Locale } from "./config";

const BASE_URL = "https://taxifiumicino.com";

/**
 * Generate hreflang <link> tags for a given page slug.
 * Usage in head(): links: hreflangLinks("/tariffe")
 */
export function hreflangLinks(slug: string) {
  const cleanSlug = slug === "/" ? "" : slug.startsWith("/") ? slug : `/${slug}`;

  return [
    // One alternate per locale
    ...allLocales.map((locale: Locale) => ({
      rel: "alternate",
      hreflang: locale,
      href:
        locale === "it"
          ? `${BASE_URL}${cleanSlug || "/"}`
          : `${BASE_URL}/${locale}${cleanSlug}`,
    })),
    // x-default points to Italian version
    {
      rel: "alternate",
      hreflang: "x-default",
      href: `${BASE_URL}${cleanSlug || "/"}`,
    },
  ];
}

/**
 * Generate canonical link for a given page slug.
 * Italian pages are self-canonical, foreign locale pages canonical to Italian.
 * Usage in head(): links: [...hreflangLinks("/tariffe"), canonicalLink("/tariffe", locale)]
 */
export function canonicalLink(slug: string, locale: Locale) {
  const cleanSlug = slug === "/" ? "" : slug.startsWith("/") ? slug : `/${slug}`;
  
  // Italian pages: self-referencing canonical
  // Foreign pages: canonical to Italian version
  const canonicalUrl = locale === "it"
    ? `${BASE_URL}${cleanSlug || "/"}`
    : `${BASE_URL}${cleanSlug || "/"}`;
  
  return {
    rel: "canonical",
    href: canonicalUrl,
  };
}

/**
 * Combined helper: hreflang + canonical for a route.
 * Usage in head(): links: i18nLinks("/tariffe", locale)
 */
export function i18nLinks(slug: string, locale: Locale) {
  return [
    canonicalLink(slug, locale),
    ...hreflangLinks(slug),
  ];
}
