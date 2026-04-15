import { Link, useLocation } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import logoImg from "@/assets/logo.png";

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
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInfoOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      location.pathname === path
        ? "bg-accent text-accent-foreground"
        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="TaxiFiumicino.com" width={180} height={90} className="h-10 w-auto" />
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
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
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

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Info accordion */}
          <button
            onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
            className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Info
            <svg
              className={`h-4 w-4 transition-transform ${mobileInfoOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileInfoOpen && (
            <div className="ml-3 border-l-2 border-border pl-3">
              {infoDropdownItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.icon}</span>
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
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
