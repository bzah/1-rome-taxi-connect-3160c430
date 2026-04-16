import { useLocation } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import logoImg from "@/assets/logo.png";
import { foreignLocales, localeFlags, localeNames, localizedPath, type Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/translations";

/* Italian fallback (no IT entry exists in translations.ts) */
const IT_NAV = { home: "Home", airport: "Aeroporto Fiumicino", airports: "Aeroporti Roma", fares: "Tariffe", book: "Prenota", info: "Info" };
const IT_DROPDOWN = {
  transfers: "Transfer Privati", shuttle: "Guida Shuttle", parking: "Guida Parcheggio",
  hotelRoma: "Hotel Roma", hotelAirport: "Hotel Aeroporto", numbers: "Numeri Taxi",
  appTaxi: "App Taxi Roma", activities: "Cose da Fare a Roma", tours: "Attività a Roma",
};
const IT_CTA_BOOK = "Prenota un Transfer";
const LANG_HEADING: Record<Locale, string> = {
  it: "🌐 Lingua", en: "🌐 Language", fr: "🌐 Langue", es: "🌐 Idioma", ru: "🌐 Язык",
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentLocale: Locale = (foreignLocales as readonly string[]).includes(pathParts[0]) ? (pathParts[0] as Locale) : "it";
  const currentSlug = currentLocale === "it" ? location.pathname : "/" + pathParts.slice(1).join("/");

  /* Locale-aware labels */
  const t = currentLocale === "it" ? null : getTranslations(currentLocale);
  const navL = t?.common.nav ?? IT_NAV;
  const dropL = t?.common.dropdown ?? IT_DROPDOWN;
  const ctaBook = t?.common.cta.bookTransfer ?? IT_CTA_BOOK;
  const langHeading = LANG_HEADING[currentLocale];

  const navLinks = [
    { slug: "/", label: navL.home },
    { slug: "/fiumicino", label: navL.airport },
    { slug: "/aeroporti-di-roma", label: navL.airports },
    { slug: "/tariffe", label: navL.fares },
    { slug: "/prenota", label: navL.book },
  ];

  const infoDropdownItems = [
    { slug: "/aeroporto-fiumicino-roma-termini", label: dropL.transfers, icon: "🚐" },
    { slug: "/aeroporto-fiumicino-roma-centro", label: dropL.shuttle, icon: "🚌" },
    { slug: "/parcheggio-fiumicino", label: dropL.parking, icon: "🅿️" },
    { slug: "/hotel-roma", label: dropL.hotelRoma, icon: "🏨" },
    { slug: "/hotel-aeroporto-fiumicino", label: dropL.hotelAirport, icon: "✈️" },
    { slug: "/numeri", label: dropL.numbers, icon: "📞" },
    { slug: "/app-taxi-roma", label: dropL.appTaxi, icon: "📱" },
  ];

  const gygLinks = [
    { href: "https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher", label: dropL.activities, icon: "🏛️" },
    { href: "https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher", label: dropL.tours, icon: "🎭" },
  ];

  /** Resolve an internal page slug to the right URL for the current locale */
  const pageHref = (slug: string) => localizedPath(slug, currentLocale);

  function getLocalizedPath(targetLocale: Locale) {
    const slug = currentSlug === "/" ? "" : currentSlug;
    if (targetLocale === "it") return slug || "/";
    return `/${targetLocale}${slug}`;
  }

  useEffect(() => {
    setMenuOpen(false);
    setMobileInfoOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setInfoOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-stone-warm/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href={pageHref("/")} className="flex items-center gap-2 shrink-0">
          <img src={logoImg} alt="TaxiFiumicino.com" width={180} height={90} className="h-8 sm:h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-1 lg:flex items-center">
          {navLinks.map((link) => {
            const href = pageHref(link.slug);
            const active = location.pathname === href;
            return (
              <a
                key={link.slug}
                href={href}
                className={`px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {active && <span className="block h-0.5 mt-0.5 rounded-full bg-primary" />}
              </a>
            );
          })}

          {/* Info dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setInfoOpen(!infoOpen)}
              className={`px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors flex items-center gap-1 ${
                infoOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {navL.info}
              <svg className={`h-3.5 w-3.5 transition-transform ${infoOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {infoOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 rounded-lg border border-stone-warm bg-card editorial-shadow-lg py-2 z-50">
                {infoDropdownItems.map((item) => (
                  <a
                    key={item.slug}
                    href={pageHref(item.slug)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                    onClick={() => setInfoOpen(false)}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
                <div className="my-1 border-t border-stone-warm" />
                {gygLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-primary hover:text-primary/80 hover:bg-accent/50 transition-colors"
                    onClick={() => setInfoOpen(false)}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Language switcher */}
          <div className="relative ml-2" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-2.5 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground flex items-center gap-1.5"
              aria-label="Language"
            >
              <span className="text-base">{localeFlags[currentLocale]}</span>
              <svg className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-3 w-44 rounded-lg border border-stone-warm bg-card editorial-shadow-lg py-1.5 z-50">
                {(["it", ...foreignLocales] as Locale[]).map((loc) => (
                  <a
                    key={loc}
                    href={getLocalizedPath(loc)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      loc === currentLocale
                        ? "text-foreground bg-accent/60 font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                    onClick={() => setLangOpen(false)}
                  >
                    <span className="text-base">{localeFlags[loc]}</span>
                    {localeNames[loc]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden rounded-md p-2.5 text-muted-foreground hover:text-foreground active:bg-accent/50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[53px] bottom-0 z-40 bg-background overflow-y-auto lg:hidden">
          <div className="px-5 py-6 space-y-1">
            {navLinks.map((link) => {
              const href = pageHref(link.slug);
              const active = location.pathname === href;
              return (
                <a
                  key={link.slug}
                  href={href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground active:bg-accent/50"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}

            <button
              onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground active:bg-accent/50 transition-colors"
            >
              {navL.info}
              <svg className={`h-5 w-5 transition-transform ${mobileInfoOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileInfoOpen && (
              <div className="ml-2 border-l-2 border-primary/20 pl-3 space-y-0.5">
                {infoDropdownItems.map((item) => (
                  <a
                    key={item.slug}
                    href={pageHref(item.slug)}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground active:bg-accent/50 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
                <div className="my-2 border-t border-stone-warm" />
                {gygLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-primary hover:text-primary/80 active:bg-accent/50 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            {/* Language */}
            <div className="pt-4 mt-4 border-t border-stone-warm">
              <p className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">{langHeading}</p>
              <div className="flex flex-wrap gap-2 px-4">
                {(["it", ...foreignLocales] as Locale[]).map((loc) => (
                  <a
                    key={loc}
                    href={getLocalizedPath(loc)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                      loc === currentLocale
                        ? "bg-accent text-foreground font-semibold ring-1 ring-primary/30"
                        : "text-muted-foreground hover:text-foreground active:bg-accent/50 border border-stone-warm"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{localeFlags[loc]}</span>
                    {localeNames[loc]}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 mt-4 border-t border-stone-warm">
              <a
                href="https://www.getyourguide.com/rome-l33/?partner_id=0IQTGX8&utm_medium=online_publisher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-lg gold-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground amber-glow active:scale-[0.98] transition-transform"
                onClick={() => setMenuOpen(false)}
              >
                {ctaBook}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
