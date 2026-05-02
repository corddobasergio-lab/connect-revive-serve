import { motion } from "framer-motion";
import { Recycle, Leaf, Heart, Gift, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Recycle,
    title: "Reciclaje responsable",
    description:
      "Los componentes electrónicos contienen materiales que pueden ser recuperados y reutilizados, reduciendo la necesidad de extraer nuevos recursos naturales.",
  },
  {
    icon: Leaf,
    title: "Reducción de residuos tóxicos",
    description:
      "Baterías, placas y pantallas contienen sustancias dañinas. Al donar, evitas que terminen en vertederos contaminando suelos y fuentes de agua.",
  },
  {
    icon: Heart,
    title: "Impacto social",
    description:
      "Tus componentes usados pueden dar vida a equipos que benefician a estudiantes, emprendedores y familias que necesitan acceso a tecnología.",
  },
  {
    icon: Gift,
    title: "Segunda vida para tu hardware",
    description:
      "Memorias RAM, discos duros, fuentes de poder, tarjetas gráficas... muchos componentes aún sirven y pueden ayudar a otros a seguir funcionando.",
  },
];

const stats = [
  { value: "50M", label: "Toneladas de e-waste generadas al año en el mundo" },
  { value: "80%", label: "De los residuos electrónicos NO se reciclan correctamente" },
  { value: "∞", label: "Vidas que puedes impactar con una simple donación" },
];

export default function DonationSection() {
  return (
    <section id="donaciones" className="py-24 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            <Leaf className="h-3.5 w-3.5" />
            🌍 Cuidemos el planeta juntos
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Dona tus componentes{" "}
            <span className="text-accent glow-neon-text">electrónicos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            ¿Tienes piezas de computador o consola que ya no usas? No las tires.
            En <strong className="text-foreground">Loto Tech</strong> les damos una segunda vida,
            ayudando al medio ambiente y a quienes más lo necesitan.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-black text-primary glow-neon-text">
                {s.value}
              </p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Benefits grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-6 transition hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:scale-110">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="mb-6 text-muted-foreground">
            ¿Quieres donar componentes? Escríbenos y coordinaremos la recogida. ¡Cada pieza cuenta! ♻️
          </p>
          <a
            href="https://wa.me/573017998302?text=Hola%20Sergio%2C%20quiero%20donar%20componentes%20electr%C3%B3nicos.%20%C2%BFC%C3%B3mo%20puedo%20hacerlo%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-display text-sm font-bold text-accent-foreground transition glow-neon hover:scale-105 hover:brightness-110"
          >
            <Recycle className="h-5 w-5" />
            Donar componentes
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
