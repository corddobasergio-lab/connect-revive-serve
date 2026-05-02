import logo from "@/assets/loto-tech-logo.png";

export default function FooterSection() {
  return (
    <footer id="contacto" className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <a href="#inicio" className="inline-flex items-center gap-3 font-display text-xl font-black text-primary glow-neon-text">
          <img src={logo} alt="Loto Tech logo" className="h-12 w-12 drop-shadow-[0_0_15px_oklch(0.70_0.22_330_/_60%)]" />
          Loto Tech
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          Técnico: Sergio Córdoba — Mantenimiento de equipos y consolas
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Tel:{" "}
          <a href="tel:+573203366580" className="text-primary hover:underline">
            320 336 6580
          </a>
        </p>
        <p className="mt-4 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Loto Tech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
