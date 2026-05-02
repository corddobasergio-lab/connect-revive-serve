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
          "Loto Tech — Servicio técnico profesional. Mantenimiento preventivo y correctivo de computadores, laptops y consolas de videojuegos. Tel: 320 336 6580",
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
      <DonationSection />
      <FooterSection />
      {/* Contact info at the very bottom */}
      <div id="contacto" className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h3 className="font-display text-lg font-bold text-primary glow-neon-text">Información de contacto</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Técnico: <strong className="text-foreground">Sergio Córdoba</strong>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tel:{" "}
            <a href="tel:+573203366580" className="text-primary hover:underline">
              320 336 6580
            </a>
          </p>
          <a
            href="https://wa.me/573203366580"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition glow-neon hover:brightness-110"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
