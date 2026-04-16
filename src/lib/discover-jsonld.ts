/**
 * Build JSON-LD ItemList of Products with Offers for rich snippets.
 * Used by route-level head() scripts so the schema ships in the SSR HTML
 * (Google rich-snippets best practice).
 */
import type { DiscoverCategory } from "@/components/RomeDiscoverSection";
import { buildCategory, type CatKey, type Locale } from "@/components/LocalizedDiscoverSection";

export function buildDiscoverJsonLd(categories: DiscoverCategory[]) {
  const allItems = categories.flatMap((c) =>
    c.items.map((i) => ({ ...i, category: c.title }))
  );
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: item.title,
        description: item.desc,
        category: item.category,
        ...(item.price && {
          offers: {
            "@type": "Offer",
            price: item.price.replace(/[^\d.]/g, ""),
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: item.url,
          },
        }),
      },
    })),
  };
}

export function buildLocalizedDiscoverJsonLd(locale: string, catKeys: CatKey[]) {
  const safeLocale: Locale = (["en", "fr", "es", "ru", "it"].includes(locale)
    ? locale
    : "en") as Locale;
  const cats = catKeys.map((k) => buildCategory(safeLocale, k));
  return buildDiscoverJsonLd(cats);
}

/** Convenience: produce a head().scripts entry. */
export function discoverJsonLdScript(categories: DiscoverCategory[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(buildDiscoverJsonLd(categories)),
  };
}

export function localizedDiscoverJsonLdScript(locale: string, catKeys: CatKey[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(buildLocalizedDiscoverJsonLd(locale, catKeys)),
  };
}
