import { Link, useLocation } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import logoImg from "@/assets/logo.png";
import { foreignLocales, localeFlags, localeNames, type Locale } from "@/i18n/config";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/fiumicino", label: "Aeroporto Fiumicino" },
  { to: "/aeroporti-di-roma", label: "Aeroporti Roma" },
  { to: "/tariffe", label: "Tariffe" },
  { to: "/prenota", label: "Prenota" },
] as const;

const infoDropdownItems = [
  { to: "/aeroporto-fiumicino-roma-termini", label: "Transfer Privati", icon: "🚐" },
  { to: "/aeroporto-fiumicino-roma-centro", label: "Guida Shuttle", icon: "🚌" },
  { to: "/parcheggio-fiumicino", label: "Guida Parcheggio", icon: "🅿️" },
  { to: "/hotel-roma", label: "Hotel Roma", icon: "🏨" },
  { to: "/hotel-aeroporto-fiumicino", label: "Hotel Aeroporto", icon: "✈️" },
  { to: "/numeri", label: "Numeri Taxi", icon: "📞" },
  { to: "/app-taxi-roma", label: "App Taxi Roma", icon: "📱" },
] as const;

const gygLinks = [
  {
    href: "https://www.getyourguide.com/rome-l31/?partner_id=0IQTGX8&utm_medium=online_publisher",
    label: "Cose da Fare a Roma",
    icon: "🏛️",
  },
  {
    href: "https://www.getyourguide.com/rome-l31/activities/?partner_id=0IQTGX8&utm_medium=online_publisher",
    label: "Attività a Roma",
    icon: "🎭",
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Detect current locale from URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentLocale: Locale = (foreignLocales as readonly string[]).includes(pathParts[0]) ? (pathParts[0] as Locale) : "it";
  const currentSlug = currentLocale === "it" ? location.pathname : "/" + pathParts.slice(1).join("/");

  function getLocalizedPath(targetLocale: Locale) {
    const slug = currentSlug === "/" ? "" : currentSlug;
    if (targetLocale === "it") return slug || "/";
    return `/${targetLocale}${slug}`;
  }

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileInfoOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInfoOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkClass = (path: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      location.pathname === path
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoImg} alt="TaxiFiumicino.com" width={180} height={90} className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 lg:flex items-center">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}

          {/* Info dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setInfoOpen(!infoOpen)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                infoOpen
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              Info
              <svg
                className={`h-4 w-4 transition-transform ${infoOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {infoOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-border bg-background shadow-xl py-2 z-50">
                {infoDropdownItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                    onClick={() => setInfoOpen(false)}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
                <div className="my-1 border-t border-border" />
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

          {/* Language switcher - Desktop */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="rounded-md px-2.5 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/50 flex items-center gap-1.5"
              aria-label="Language"
            >
              <span className="text-base">{localeFlags[currentLocale]}</span>
              <svg className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-border bg-background shadow-xl py-1.5 z-50">
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
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav - fullscreen overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[49px] bottom-0 bg-background overflow-y-auto lg:hidden">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground active:bg-accent/50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Info accordion */}
            <button
              onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground active:bg-accent/50 transition-colors"
            >
              Info
              <svg
                className={`h-5 w-5 transition-transform ${mobileInfoOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileInfoOpen && (
              <div className="ml-2 border-l-2 border-primary/20 pl-3 space-y-0.5">
                {infoDropdownItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground active:bg-accent/50 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-border" />
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

            {/* Quick CTA in mobile menu */}
            <div className="pt-4 mt-4 border-t border-border">
              <a
                href="https://www.getyourguide.com/rome-l33/airport-transfer-c100/?partner_id=0IQTGX8&utm_medium=online_publisher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-lg gold-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md active:scale-[0.98] transition-transform"
                onClick={() => setMenuOpen(false)}
              >
                Prenota un Transfer
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
