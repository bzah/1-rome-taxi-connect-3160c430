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
