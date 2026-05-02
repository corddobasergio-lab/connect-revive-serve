import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import DonationSection from "@/components/DonationSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Loto Tech | Mantenimiento de Equipos y Consolas" },
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
      <DonationSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
