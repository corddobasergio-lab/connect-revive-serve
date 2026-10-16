import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import DonationSection from "@/components/DonationSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Loto Tech | Mantenimiento de Equipos y Consolas" },
      { property: "og:title", content: "Loto Tech | Mantenimiento de Equipos y Consolas" },
      { property: "og:description", content: "Mantenimiento y reparación de computadores y consolas en Soacha. Consulta servicios, tarifas y donaciones con Loto Tech." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "description",
        content:
          "Loto Tech — Servicio técnico profesional. Mantenimiento preventivo y correctivo de computadores, laptops y consolas de videojuegos. Tel: 301 799 8302",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <DonationSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
