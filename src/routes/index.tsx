import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Loto Gaming Tech | Mantenimiento de Equipos y Consolas" },
      {
        name: "description",
        content:
          "Loto Gaming Tech — Servicio técnico profesional de Sergio Córdoba. Mantenimiento preventivo y correctivo de computadores, laptops y consolas de videojuegos. Tel: 301 799 8302",
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
      <AboutSection />
      <FooterSection />
    </div>
  );
}
