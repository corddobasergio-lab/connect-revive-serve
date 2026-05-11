import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Recycle, Gamepad2 } from "lucide-react";
import logo from "@/assets/loto-tech-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Donaciones", href: "#donaciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3 font-display text-xl font-black text-primary glow-neon-text">
          <img src={logo} alt="Loto Tech logo" className="h-10 w-10 drop-shadow-[0_0_12px_oklch(0.70_0.22_330_/_60%)]" />
          Loto Tech
        </a>

        {/* Desktop */}
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/573017998302?text=Hola%20Sergio%2C%20quiero%20donar%20componentes%20electr%C3%B3nicos.%20%C2%BFC%C3%B3mo%20puedo%20hacerlo%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20 hover:brightness-110"
          >
            <Recycle className="h-4 w-4" /> Donar
          </a>
          <a
            href="https://wa.me/573017998302"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition glow-neon hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden glass md:hidden"
          >
            <ul className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-foreground transition hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/573017998302?text=Hola%20Sergio%2C%20quiero%20donar%20componentes%20electr%C3%B3nicos.%20%C2%BFC%C3%B3mo%20puedo%20hacerlo%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent"
                >
                  <Recycle className="h-4 w-4" /> Donar
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573017998302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground glow-neon"
                >
                  <Phone className="h-4 w-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
