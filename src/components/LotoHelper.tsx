import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Cpu, Gamepad2, MessageCircle, Recycle, Tag, X } from "lucide-react";
import mascot from "@/assets/loto-helper.png";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const topics = [
  { id: "equipos", label: "Mi computador", icon: Cpu, text: "¿Tu computador está lento o necesita una limpieza? Tenemos mantenimiento preventivo, eliminación de virus, formateo y mejoras de componentes.", section: "servicios", action: "Ver servicios", message: "Hola Sergio, necesito ayuda con mi computador o portátil." },
  { id: "consolas", label: "Mi consola", icon: Gamepad2, text: "Cuidamos tu PlayStation, Xbox o Nintendo Switch: limpieza preventiva, reparación de controles y actualización de software.", section: "precios", action: "Ver tarifas de consolas", message: "Hola Sergio, necesito un servicio para mi consola." },
  { id: "precios", label: "Precios y diagnóstico", icon: Tag, text: "¡El diagnóstico de hardware es gratis! Los precios de los servicios son referenciales; el valor final se confirma después del diagnóstico.", section: "precios", action: "Consultar precios", message: "Hola Sergio, quisiera solicitar un diagnóstico de hardware gratis." },
  { id: "donaciones", label: "Quiero donar", icon: Recycle, text: "Dale una segunda vida a tus componentes electrónicos. Puedes donar memorias RAM, discos, fuentes y tarjetas gráficas. Coordina tu donación con Sergio por WhatsApp.", section: "donaciones", action: "Ver donaciones", message: "Hola Sergio, quiero donar componentes electrónicos. ¿Cómo puedo hacerlo?" },
] as const;

export default function LotoHelper() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const topic = topics.find((item) => item.id === selected);
  const message = topic?.message ?? "Hola Sergio, necesito ayuda para elegir un servicio de Loto Tech.";

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" aria-label="Abrir ayuda de Loto" title="Habla con Loto" className="group relative h-28 w-24 p-0 hover:bg-transparent sm:h-32 sm:w-28">
            <motion.img src={mascot} alt="" width={816} height={816} loading="lazy" className="h-full w-full object-contain loto-helper-image" animate={reducedMotion || open ? { y: 0 } : { y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
            <span className="absolute -top-1 right-0 rounded-md border border-accent/40 bg-card px-2 py-1 text-xs font-semibold text-accent">¿Te ayudo?</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" sideOffset={12} collisionPadding={16} aria-label="Ayuda de Loto" className="w-[340px] max-w-[calc(100vw-32px)] max-h-[calc(100dvh-180px)] overflow-y-auto border-primary/40 bg-card p-0 shadow-lg">
          <header className="flex items-center gap-3 border-b border-border px-4 py-3">
            <img src={mascot} alt="" width={816} height={816} loading="lazy" className="h-12 w-12 object-contain" />
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-sm font-bold text-foreground">Loto</h2>
              <p className="text-xs text-accent">Tu compañero tech</p>
            </div>
            <Button variant="ghost" size="icon" aria-label="Cerrar ayuda" title="Cerrar ayuda" onClick={() => setOpen(false)}><X /></Button>
          </header>
          <div className="space-y-4 p-4">
            <p aria-live="polite" className="text-sm leading-relaxed text-foreground">{topic?.text ?? "¡Hola! Soy Loto. ¿Qué necesita tu equipo hoy?"}</p>
            <div className="grid grid-cols-2 gap-2">
              {topics.map((item) => (
                <Button key={item.id} variant="outline" aria-pressed={selected === item.id} onClick={() => setSelected(item.id)} className="h-auto min-h-14 justify-start whitespace-normal border-border bg-secondary/40 px-3 py-2 text-left text-xs leading-relaxed text-foreground aria-pressed:border-accent aria-pressed:bg-accent/10 aria-pressed:text-accent"><item.icon className="shrink-0" />{item.label}</Button>
              ))}
            </div>
            {topic && <Button asChild variant="link" className="h-auto justify-start whitespace-normal p-0 text-accent"><a href={`#${topic.section}`} onClick={() => setOpen(false)}>{topic.action}<ArrowRight /></a></Button>}
            <div className="border-t border-border pt-3">
              <p className="mb-3 text-xs leading-relaxed text-muted-foreground">Soacha · Lun – Sab<br />8:00 AM – 7:00 PM</p>
              <Button asChild className="w-full whitespace-normal"><a href={`https://wa.me/573017998302?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"><MessageCircle />{selected === "donaciones" ? "Coordinar donación" : "Hablar con Sergio"}</a></Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}