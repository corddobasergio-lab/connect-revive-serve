import { motion } from "framer-motion";
import { Laptop, Gamepad2, Tag } from "lucide-react";

type Service = {
  title: string;
  type: string;
  price: string;
  unit: string;
  description: string;
};

const computerServices: Service[] = [
  {
    title: "Mantenimiento preventivo",
    type: "Básico",
    price: "$30.000 – $50.000",
    unit: "por equipo",
    description:
      "Limpieza interna, pasta térmica, actualización de drivers, limpieza de archivos temporales y revisión general de hardware.",
  },
  {
    title: "Eliminación de virus / malware",
    type: "Correctivo",
    price: "$40.000 – $70.000",
    unit: "por equipo",
    description:
      "Escaneo completo, eliminación de amenazas, instalación de antivirus y configuración de protección.",
  },
  {
    title: "Formateo e instalación de SO",
    type: "Correctivo",
    price: "$50.000 – $80.000",
    unit: "incluye drivers",
    description:
      "Formateo, instalación de Windows 10/11, drivers, programas básicos y configuración inicial.",
  },
  {
    title: "Diagnóstico de hardware",
    type: "Diagnóstico",
    price: "$20.000 – $35.000",
    unit: "por equipo",
    description:
      "Identificación de fallas en RAM, disco duro, fuente de poder, tarjeta madre u otros componentes.",
  },
  {
    title: "Recuperación de datos",
    type: "Especializado",
    price: "$60.000 – $150.000",
    unit: "según complejidad",
    description:
      "Recuperación de archivos de discos con falla lógica. No aplica para daño físico severo.",
  },
];

const consoleServices: Service[] = [
  {
    title: "Limpieza preventiva de consola",
    type: "Básico",
    price: "$40.000 – $70.000",
    unit: "por consola",
    description:
      "Apertura, limpieza de polvo, cambio de pasta térmica, revisión de ventilador y puertos.",
  },
  {
    title: "Reparación de control / joystick",
    type: "Correctivo",
    price: "$25.000 – $60.000",
    unit: "mano de obra",
    description:
      "Reparación de drift, botones pegados, puerto de carga o joystick dañado. Repuestos por separado.",
  },
  {
    title: "Actualización de firmware / software",
    type: "Software",
    price: "$20.000 – $40.000",
    unit: "por consola",
    description:
      "Actualización del sistema, configuración de cuentas, solución de errores de software.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass flex flex-col rounded-2xl p-6 transition-all hover:border-primary/40"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h4 className="font-display text-base font-bold text-foreground">
          {service.title}
        </h4>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
          <Tag className="h-3 w-3" /> {service.type}
        </span>
      </div>
      <div className="mb-3">
        <p className="font-display text-2xl font-black text-primary glow-neon-text">
          {service.price}
        </p>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {service.unit}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section id="precios" className="relative py-24">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Tarifas y <span className="text-primary glow-neon-text">Servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Precios transparentes para mantenimiento y reparación de computadores,
            portátiles y consolas. Los valores pueden variar según el diagnóstico final.
          </p>
        </motion.div>

        {/* Computadores */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary glow-neon">
              <Laptop className="h-5 w-5" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Computadores y portátiles
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {computerServices.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>

        {/* Consolas */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Consolas
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {consoleServices.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-xs text-muted-foreground"
        >
          * Los precios son referenciales. El valor final se confirma tras el diagnóstico.
        </motion.p>
      </div>
    </section>
  );
}
