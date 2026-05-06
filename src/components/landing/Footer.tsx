import { motion } from "framer-motion";
import { Dumbbell, Instagram, Youtube, Linkedin } from "lucide-react";
import { easeOutQuint } from "@/lib/motion";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#precios", label: "Programas" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 mt-12">
      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row gap-10 md:items-start md:justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutQuint }}
          >
            <a href="#hero" className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary"
              >
                <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
              </motion.div>
              <span className="font-black tracking-tight text-foreground text-[0.9rem]">
                ALEX <span className="text-gradient-primary">PERFORMANCE</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-[240px] leading-relaxed">
              Entrenamiento personal premium para profesionales que buscan
              resultados reales.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-2.5">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl glass border border-white/6 text-muted-foreground"
                  whileHover={{
                    scale: 1.1,
                    color: "oklch(0.76 0.20 145)",
                    borderColor: "oklch(0.76 0.20 145 / 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: easeOutQuint }}
            className="flex flex-col sm:flex-row gap-8 text-sm"
          >
            {/* Nav links */}
            <div>
              <p className="text-xs font-bold text-foreground/50 uppercase tracking-[0.15em] mb-4">
                Navegación
              </p>
              <div className="flex flex-col gap-2.5">
                {navLinks.map((l) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-bold text-foreground/50 uppercase tracking-[0.15em] mb-4">
                Contacto
              </p>
              <div className="flex flex-col gap-2.5">
                <motion.a
                  href="mailto:hola@alex-performance.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  hola@alex-performance.com
                </motion.a>
                <motion.a
                  href="tel:+34600000000"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  +34 600 000 000
                </motion.a>
                <span className="text-muted-foreground">Madrid · Online global</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Alex Performance. Todos los derechos reservados.</p>
          <p>Hecho con disciplina en Madrid.</p>
        </motion.div>
      </div>
    </footer>
  );
}
