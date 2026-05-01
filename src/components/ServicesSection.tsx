import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Gamepad2, HardDrive, Fan, Bug } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Mantenimiento Preventivo",
    description:
      "Limpieza interna y externa, cambio de pasta térmica, revisión de ventiladores, actualización de software y optimización del sistema para prevenir fallos futuros.",
  },
  {
    icon: Bug,
    title: "Mantenimiento Correctivo",
    description:
      "Diagnóstico y reparación de fallas de hardware y software: pantallas azules, equipos que no encienden, lentitud extrema, virus y errores del sistema.",
  },
  {
    icon: Cpu,
    title: "Upgrade de Componentes",
    description:
      "Ampliación de memoria RAM, cambio de disco duro a SSD, actualización de tarjeta gráfica y mejora general del rendimiento de tu equipo.",
  },
  {
    icon: Gamepad2,
    title: "Reparación de Consolas",
    description:
      "Servicio técnico para PlayStation, Xbox y Nintendo Switch: limpieza, cambio de pasta térmica, reparación de puertos HDMI, joysticks y lectoras.",
  },
  {
    icon: HardDrive,
    title: "Recuperación de Datos",
    description:
      "Recuperación de archivos de discos duros dañados, memorias USB y tarjetas SD. Respaldo seguro de tu información importante.",
  },
  {
    icon: Fan,
    title: "Instalación y Configuración",
    description:
      "Instalación de sistemas operativos (Windows, Linux), drivers, programas, impresoras, redes WiFi y configuración general de equipos nuevos.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Nuestros <span className="text-primary glow-neon-text">Servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Ofrecemos soluciones completas para que tus equipos y consolas funcionen como nuevos.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass rounded-2xl p-6 transition-all"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:glow-neon group-hover:bg-primary/20">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
