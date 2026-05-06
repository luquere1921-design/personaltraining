import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { easeOutQuint, easeSnappy } from "@/lib/motion";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 2500);

    const onScroll = () => {
      const scrolled = window.scrollY > 200;
      setVisible(scrolled);
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* WhatsApp floating button */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href="https://wa.me/34600000000?text=Hola,%20quiero%20información%20sobre%20entrenamiento%20personal"
            target="_blank"
            rel="noopener"
            aria-label="Contactar por WhatsApp"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-24 md:bottom-8 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow animate-pulse-ring"
          >
            <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 md:bottom-8 right-24 z-40 flex h-10 w-10 items-center justify-center rounded-full glass-elevated border border-white/12 text-muted-foreground hover:text-foreground"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky mobile CTA bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.1 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-30 px-4 pb-5 pt-2 bg-gradient-to-t from-background via-background/90 to-transparent"
          >
            <motion.a
              href="#contacto"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-glow btn-shimmer"
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground/60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
              </span>
              Reservar llamada gratuita
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
