import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Creations, Essence, FinalCta, Footer, Hero, Occasions } from "@/components/site/Sections";
import { OrderForm, WhatsAppFloat } from "@/components/site/OrderForm";

const TITLE = "Maranatha | La pastelería del cielo";
const DESC = "Descubre las creaciones de Maranatha y prepara una solicitud para tus momentos especiales";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-card focus:px-4 focus:py-2">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Creations />
        <Essence />
        <Occasions />
        <OrderForm />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
