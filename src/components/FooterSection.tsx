import { Gamepad2 } from "lucide-react";

export default function FooterSection() {
  return (
    <footer id="contacto" className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <a href="#inicio" className="inline-flex items-center gap-2 font-display text-lg font-bold text-primary glow-neon-text">
          <Gamepad2 className="h-5 w-5" />
          Loto Gaming Tech
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Sergio Córdoba · Técnico en mantenimiento de equipos y consolas
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Tel:{" "}
          <a href="tel:+573017998302" className="text-primary hover:underline">
            301 799 8302
          </a>
        </p>
        <p className="mt-4 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Loto Gaming Tech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
