import { motion } from "framer-motion";
import { Wrench, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Wrench className="h-3.5 w-3.5" />
            Servicio técnico profesional
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Mantenimiento de{" "}
            <span className="text-primary glow-neon-text">Equipos</span> &{" "}
            <span className="text-accent">Consolas</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Reparación y mantenimiento preventivo y correctivo de computadores, laptops y consolas de videojuegos.
            Servicio confiable con{" "}
            <span className="font-semibold text-foreground">Sergio Córdoba</span>.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/573017998302?text=Hola%20Sergio,%20necesito%20un%20servicio%20técnico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-display text-sm font-bold text-primary-foreground transition glow-neon hover:scale-105 hover:brightness-110"
            >
              Solicitar servicio
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-3.5 font-display text-sm font-bold text-secondary-foreground transition hover:bg-secondary/80"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a href="#servicios" className="inline-block animate-bounce text-muted-foreground">
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
