import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/fiumicino", label: "Aeroporto Fiumicino" },
  { to: "/aeroporti-di-roma", label: "Aeroporti Roma" },
  { to: "/tariffe", label: "Tariffe" },
  { to: "/hotel-roma", label: "Hotel Roma" },
  { to: "/hotel-aeroporto-fiumicino", label: "Hotel Aeroporto" },
  { to: "/numeri", label: "Numeri Taxi" },
  { to: "/prenota", label: "Prenota" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="TaxiFiumicino.com" width={180} height={90} className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
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
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden">
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
        </nav>
      )}
    </header>
  );
}
