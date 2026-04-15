import { createFileRoute, Outlet, notFound, useLocation } from "@tanstack/react-router";
import { isValidForeignLocale } from "@/i18n/config";
import { useEffect } from "react";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!isValidForeignLocale(params.locale)) {
      throw notFound();
    }
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { locale } = Route.useParams();
  
  useEffect(() => {
    document.documentElement.lang = locale;
    return () => { document.documentElement.lang = "it"; };
  }, [locale]);

  return <Outlet />;
}
