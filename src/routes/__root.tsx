import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-16">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground font-display">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md gold-gradient px-4 py-2 text-sm font-medium text-primary-foreground transition-colors"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TaxiFiumicino.com — Taxi Roma, Tariffe e Transfer Aeroporto" },
      { name: "description", content: "Guida completa ai taxi a Roma: tariffe, numeri, trasferimenti aeroporto Fiumicino. Prenota il tuo transfer online." },
      { name: "author", content: "TaxiFiumicino.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IT-RM" },
      { name: "geo.placename", content: "Roma" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Header />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
