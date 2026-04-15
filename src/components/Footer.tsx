import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🚕</span>
              <span className="font-display text-lg font-bold">TaxiFiumicino.com</span>
            </div>
            <p className="text-sm opacity-70">
              La tua guida completa per i taxi a Roma e trasferimenti dall'aeroporto di Fiumicino.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-80">Pagine</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/tariffe" className="hover:opacity-100 transition-opacity">Tariffe Taxi Roma</Link></li>
              <li><Link to="/fiumicino" className="hover:opacity-100 transition-opacity">Taxi Roma Fiumicino</Link></li>
              <li><Link to="/taxi-ciampino" className="hover:opacity-100 transition-opacity">Taxi Roma Ciampino</Link></li>
              <li><Link to="/numeri" className="hover:opacity-100 transition-opacity">Numeri Taxi Roma</Link></li>
              <li><Link to="/prenota" className="hover:opacity-100 transition-opacity">Prenota un Taxi</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-80">Informazioni</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/come-chiamare-taxi-roma" className="hover:opacity-100 transition-opacity">Come Chiamare un Taxi</Link></li>
              <li><Link to="/app-taxi-roma" className="hover:opacity-100 transition-opacity">App Taxi Roma</Link></li>
              <li>Radio Taxi Roma</li>
              <li>Tariffe Fisse Aeroporto</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-80">Contatti</h3>
            <p className="text-sm opacity-70 mb-2">info@taxifiumicino.com</p>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Chi Siamo</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contatti</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-background/10 pt-6">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs opacity-50 mb-4">
            <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:opacity-100 transition-opacity">Termini di Servizio</Link>
            <Link to="/cookie-policy" className="hover:opacity-100 transition-opacity">Cookie Policy</Link>
            <Link to="/dmca" className="hover:opacity-100 transition-opacity">DMCA</Link>
            <Link to="/legal-notice" className="hover:opacity-100 transition-opacity">Note Legali</Link>
            <Link to="/parents-info" className="hover:opacity-100 transition-opacity">Info Genitori</Link>
          </div>
          <p className="text-center text-xs opacity-50">© {new Date().getFullYear()} TaxiFiumicino.com — Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}
