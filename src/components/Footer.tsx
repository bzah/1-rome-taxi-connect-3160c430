import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="TaxiFiumicino.com" width={140} height={70} className="h-8 w-auto brightness-200" loading="lazy" />
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              La tua guida completa per i taxi a Roma e trasferimenti dall'aeroporto di Fiumicino.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-80">Pagine</h3>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/tariffe" className="hover:opacity-100 transition-opacity">Tariffe Taxi Roma</Link></li>
              <li><Link to="/fiumicino" className="hover:opacity-100 transition-opacity">Taxi Roma Fiumicino</Link></li>
              <li><Link to="/taxi-ciampino" className="hover:opacity-100 transition-opacity">Taxi Roma Ciampino</Link></li>
              <li><Link to="/numeri" className="hover:opacity-100 transition-opacity">Numeri Taxi Roma</Link></li>
              <li><Link to="/prenota" className="hover:opacity-100 transition-opacity">Prenota un Taxi</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-80">Informazioni</h3>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link to="/come-chiamare-taxi-roma" className="hover:opacity-100 transition-opacity">Come Chiamare un Taxi</Link></li>
              <li><Link to="/app-taxi-roma" className="hover:opacity-100 transition-opacity">App Taxi Roma</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Chi Siamo</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contatti</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-background/10 pt-6">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs opacity-50 mb-4">
            <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy</Link>
            <span className="opacity-30">·</span>
            <Link to="/terms-of-service" className="hover:opacity-100 transition-opacity">Termini</Link>
            <span className="opacity-30">·</span>
            <Link to="/cookie-policy" className="hover:opacity-100 transition-opacity">Cookie</Link>
            <span className="opacity-30">·</span>
            <Link to="/dmca" className="hover:opacity-100 transition-opacity">DMCA</Link>
            <span className="opacity-30">·</span>
            <Link to="/legal-notice" className="hover:opacity-100 transition-opacity">Note Legali</Link>
            <span className="opacity-30">·</span>
            <Link to="/parents-info" className="hover:opacity-100 transition-opacity">Info Genitori</Link>
          </div>
          <p className="text-center text-xs opacity-50">© 2026 TaxiFiumicino.com — Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}
