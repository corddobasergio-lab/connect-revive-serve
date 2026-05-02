import { motion } from "framer-motion";
import { CheckCircle, Clock, MapPin, Phone } from "lucide-react";

const highlights = [
  "Atención personalizada y honesta",
  "Servicio a domicilio disponible",
  "Diagnóstico sin costo",
  "Garantía en todas las reparaciones",
  "Precios accesibles y transparentes",
  "Repuestos de calidad garantizada",
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Nosotros
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Somos un emprendimiento dedicado al cuidado de tus equipos y consolas. En Loto Tech
              creemos que cada dispositivo merece un servicio de calidad sin importar su tamaño.
              Nos enfocamos en la confianza, la transparencia y en dar lo mejor para que tus equipos
              rindan al máximo.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground">Información de contacto</h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono / WhatsApp</p>
                  <a href="tel:+573017998302" className="font-semibold text-foreground hover:text-primary transition">
                    301 799 8302
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horario</p>
                  <p className="font-semibold text-foreground">Lun – Sáb · 8:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cobertura</p>
                  <p className="font-semibold text-foreground">Servicio a domicilio</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/573017998302?text=Hola%20Sergio,%20quisiera%20agendar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display text-sm font-bold text-primary-foreground transition glow-neon hover:scale-105 hover:brightness-110"
            >
              Agendar servicio por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
