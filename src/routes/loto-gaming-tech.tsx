import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Gamepad2, ArrowLeft, Sparkles } from "lucide-react";
import logo from "@/assets/loto-tech-logo.png";

export const Route = createFileRoute("/loto-gaming-tech")({
  component: LotoGamingTech,
  head: () => ({
    meta: [
      { title: "Loto Gaming Tech | División Gaming" },
      {
        name: "description",
        content:
          "Loto Gaming Tech — La división gaming de Loto Tech. Especialistas en consolas, accesorios y experiencias gamer.",
      },
      { property: "og:title", content: "Loto Gaming Tech | División Gaming" },
      {
        property: "og:description",
        content:
          "La división gaming de Loto Tech. Consolas, accesorios y servicios especializados para gamers.",
      },
    ],
  }),
});

function LotoGamingTech() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            to="/loto-gaming-tech"
            className="flex items-center gap-3 font-display text-xl font-black text-accent glow-neon-text"
          >
            <img
              src={logo}
              alt="Loto Gaming Tech logo"
              className="h-10 w-10 drop-shadow-[0_0_12px_oklch(0.72_0.19_195_/_60%)]"
            />
            Loto Gaming Tech
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
          >
            <ArrowLeft className="h-4 w-4" /> Loto Tech
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent"
          >
            <Sparkles className="h-3.5 w-3.5" /> Nueva división
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Loto{" "}
            <span className="text-accent glow-neon-text">Gaming</span>{" "}
            <span className="text-primary glow-neon-text">Tech</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            La división gaming de Loto Tech. Un espacio dedicado a los jugadores:
            consolas, accesorios, configuraciones y experiencias para llevar tu
            gaming al siguiente nivel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <div className="mx-auto inline-flex items-center gap-3 rounded-2xl border border-accent/30 bg-card/50 px-6 py-4 backdrop-blur">
              <Gamepad2 className="h-6 w-6 text-accent" />
              <p className="font-display text-sm font-semibold text-foreground">
                Próximamente más información
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder content area */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 text-center"
          >
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Estamos preparando algo épico
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Esta es la página oficial de Loto Gaming Tech. Pronto encontrarás aquí
              servicios especializados, productos, torneos y mucho más contenido para
              la comunidad gamer.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
