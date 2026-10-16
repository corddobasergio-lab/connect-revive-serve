import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import LotiAvatar from "./LotiAvatar";

type Topic = { id: string; label: string; keywords: string[]; text: string; list?: string[]; button?: { label: string; href: string } };
type Msg = { from: "loti" | "user"; text: string; list?: string[]; button?: { label: string; href: string } };

const WA = "https://wa.me/573017998302";

export const TOPICS: Topic[] = [
  { id: "servicios", label: "Servicios", keywords: ["servicio", "hacen", "ofrecen", "reparan", "mantenimiento", "upgrade", "ram", "ssd", "datos", "instalacion"],
    text: "Hacemos mantenimiento y reparación de computadores, portátiles y consolas. Esto es lo que ofrecemos:",
    list: ["Mantenimiento preventivo: limpieza, pasta térmica y optimización", "Mantenimiento correctivo: equipos que no encienden, pantallas azules, virus", "Upgrade de componentes: más RAM, disco SSD, tarjeta gráfica", "Reparación de PlayStation, Xbox y Nintendo Switch", "Recuperación de datos de discos, USB y tarjetas SD", "Instalación de sistemas, drivers, programas, impresoras y WiFi"] },
  { id: "precios", label: "Precios", keywords: ["precio", "costo", "cuesta", "cuanto", "valor", "tarifa", "cobran", "virus", "formate"],
    text: "Estos son los precios de referencia para computadores y portátiles. El valor final se confirma tras el diagnóstico, que es gratis.",
    list: ["Mantenimiento preventivo: $30.000 – $50.000", "Eliminación de virus: $40.000 – $70.000", "Formateo e instalación de SO: $50.000 – $80.000, con drivers", "Recuperación de datos: $60.000 – $150.000 según complejidad", "Diagnóstico de hardware: gratis"] },
  { id: "consolas", label: "Consolas", keywords: ["consola", "playstation", "ps4", "ps5", "xbox", "switch", "nintendo", "joystick", "control", "gamer", "gaming"],
    text: "Reparamos PlayStation, Xbox y Nintendo Switch. Precios de referencia:",
    list: ["Limpieza preventiva: $40.000 – $70.000", "Reparación de control o joystick: $25.000 – $60.000 de mano de obra, repuestos aparte", "Actualización de firmware o software: $20.000 – $40.000"] },
  { id: "donar", label: "Donar componentes", keywords: ["donar", "donacion", "dono", "reciclar", "reciclaje", "componentes", "basura"],
    text: "Si tienes memorias RAM, discos, fuentes, tarjetas gráficas u otras piezas que ya no usas, puedes donarlas. Les damos una segunda vida y evitamos que terminen como residuo electrónico. Escríbele a Sergio y coordinan la recogida.",
    button: { label: "Donar por WhatsApp", href: `${WA}?text=Hola%20Sergio%2C%20quiero%20donar%20componentes%20electr%C3%B3nicos.%20%C2%BFC%C3%B3mo%20puedo%20hacerlo%3F` } },
  { id: "horario", label: "Horario y cobertura", keywords: ["horario", "hora", "abren", "abierto", "donde", "soacha", "domicilio", "cobertura", "telefono", "ubicacion", "contacto", "llamar"],
    text: "Atendemos de lunes a sábado, de 8:00 AM a 7:00 PM, con cobertura en Soacha. También hay servicio a domicilio.",
    list: ["Técnico: Sergio Córdoba", "Teléfono y WhatsApp: 301 799 8302"] },
  { id: "garantia", label: "Garantía", keywords: ["garantia", "diagnostico", "repuesto", "confianza", "seguro"],
    text: "Todas las reparaciones tienen garantía, el diagnóstico no cuesta y usamos repuestos de calidad garantizada. El precio final se confirma después de revisar tu equipo." },
  { id: "agendar", label: "Agendar", keywords: ["agendar", "cita", "solicitar", "reservar", "whatsapp", "quiero", "necesito"],
    text: "Para agendar, escríbele a Sergio por WhatsApp. Cuéntale qué equipo tienes y qué le pasa, y te confirma el diagnóstico.",
    button: { label: "Agendar por WhatsApp", href: `${WA}?text=Hola%20Sergio%2C%20quisiera%20agendar%20un%20servicio` } },
];

const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function matchTopic(input: string) {
  const t = norm(input);
  return TOPICS.find((tp) => tp.keywords.some((k) => t.includes(k)));
}

const FALLBACK: Msg = { from: "loti", text: "Eso lo resuelve mejor Sergio, el técnico. Escríbele por WhatsApp o elige uno de los temas de abajo.", button: { label: "Escribir por WhatsApp", href: WA } };

export default function LotiChat() {
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "loti", text: "¡Hola! Soy Loti, el asistente de Loto Tech. ¿En qué te puedo ayudar?" }]);
  const endRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { const t = setTimeout(() => setBubble(true), 3000); return () => clearTimeout(t); }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ block: "end" }); }, [msgs, typing]);
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const reply = (userText: string, m: Msg) => {
    setMsgs((p) => [...p, { from: "user", text: userText }]);
    setTyping(true);
    setTimeout(() => { setTyping(false); setMsgs((p) => [...p, m]); }, 350);
  };
  const pick = (tp: Topic) => reply(tp.label, { from: "loti", text: tp.text, list: tp.list, button: tp.button });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = input.trim();
    if (!v) return;
    setInput("");
    const tp = matchTopic(v);
    reply(v, tp ? { from: "loti", text: tp.text, list: tp.list, button: tp.button } : FALLBACK);
  };

  return (
    <>
      {!open && (
        <div className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-2 sm:right-6">
          {bubble && (
            <div className="glass rounded-2xl rounded-br-sm px-4 py-2 font-display text-sm text-foreground border border-primary/40">¿Te ayudo?</div>
          )}
          <button
            ref={btnRef}
            onClick={() => { setOpen(true); setBubble(false); }}
            aria-label="Abrir chat con Loti"
            className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card p-1.5 glow-neon transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <LotiAvatar small className="h-full w-full" />
          </button>
        </div>
      )}

      {open && (
        <div role="dialog" aria-modal="false" aria-label="Chat con Loti"
          className="fixed inset-2 z-[60] flex flex-col overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-2xl sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[560px] sm:max-h-[calc(100vh-8rem)] sm:w-[380px]">
          <div className="flex items-center gap-3 border-b border-border bg-background/60 px-4 py-3">
            <div className="h-10 w-10 rounded-full border border-primary/60 bg-background p-1"><LotiAvatar small className="h-full w-full" /></div>
            <div className="flex-1">
              <p className="font-display font-bold text-foreground">Loti</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-green-500" />Asistente de Loto Tech</p>
            </div>
            <button onClick={() => { setOpen(false); setTimeout(() => btnRef.current?.focus(), 0); }} aria-label="Cerrar chat"
              className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${m.from === "user" ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm bg-muted text-foreground"}`}>
                  <p>{m.text}</p>
                  {m.list && <ul className="mt-2 list-disc space-y-1 pl-4">{m.list.map((l) => <li key={l}>{l}</li>)}</ul>}
                  {m.button && (
                    <a href={m.button.href} target="_blank" rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 font-semibold text-accent-foreground hover:opacity-90">
                      <MessageCircle className="h-4 w-4" />{m.button.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
            {typing && <div className="w-14 rounded-2xl bg-muted px-3 py-2 text-sm text-muted-foreground">…</div>}
            <div ref={endRef} />
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-border px-3 pt-3">
            {TOPICS.map((tp) => (
              <button key={tp.id} onClick={() => pick(tp)}
                className="rounded-full border border-primary/50 px-3 py-1 text-xs text-foreground hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                {tp.label}
              </button>
            ))}
          </div>
          <form onSubmit={submit} className="flex gap-2 p-3">
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu pregunta…" aria-label="Escribe tu pregunta"
              className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
            <button type="submit" aria-label="Enviar" className="rounded-lg bg-primary px-3 text-primary-foreground hover:opacity-90"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      )}
    </>
  );
}
