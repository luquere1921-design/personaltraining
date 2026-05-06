import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Menu, X } from "lucide-react";
import { easeOutQuint, easeInOutExpo } from "@/lib/motion";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#resultados", label: "Resultados" },
  { href: "#proceso", label: "Proceso" },
  { href: "#precios", label: "Programas" },
  { href: "#faq", label: "FAQ" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: easeOutQuint },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.2, ease: easeInOutExpo },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: easeOutQuint },
  }),
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeOutQuint, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{ paddingTop: scrolled ? "12px" : "20px", paddingBottom: scrolled ? "12px" : "20px" }}
        transition={{ duration: 0.4, ease: easeInOutExpo }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "oklch(1 0 0 / 6.5%)"
              : "oklch(1 0 0 / 0%)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
            borderColor: scrolled ? "oklch(1 0 0 / 9%)" : "oklch(1 0 0 / 0%)",
            boxShadow: scrolled
              ? "0 8px 32px -12px oklch(0 0 0 / 0.5)"
              : "none",
          }}
          transition={{ duration: 0.45, ease: easeInOutExpo }}
          className="flex items-center justify-between rounded-2xl px-5 py-3 border"
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              whileHover={{ rotate: -8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary"
            >
              <Dumbbell className="h-5 w-5" strokeWidth={2.5} />
            </motion.div>
            <span className="font-black tracking-tight text-foreground text-[0.95rem]">
              ALEX <span className="text-gradient-primary">PERFORMANCE</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground"
                whileHover={{ color: "oklch(0.97 0.005 250)" }}
                transition={{ duration: 0.15 }}
              >
                {l.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease: easeOutQuint }}
                  style={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            href="#contacto"
            className="hidden md:inline-flex items-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm btn-shimmer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Reserva diagnóstico
          </motion.a>

          {/* Hamburger */}
          <motion.button
            className="md:hidden text-foreground p-1.5 rounded-lg glass"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="md:hidden mt-2 glass-elevated rounded-2xl p-5 flex flex-col gap-3 border border-white/10"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  custom={i}
                  variants={linkItemVariants}
                  initial="hidden"
                  animate="show"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 border-b border-white/5 last:border-0"
                  whileHover={{ x: 4, color: "oklch(0.97 0.005 250)" }}
                  transition={{ duration: 0.15 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground text-center shadow-glow-sm btn-shimmer"
                whileTap={{ scale: 0.97 }}
              >
                Reserva diagnóstico
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
