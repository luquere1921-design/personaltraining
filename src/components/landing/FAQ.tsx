import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import {
  easeOutQuint,
  easeInOutExpo,
  staggerContainer,
  headerReveal,
  viewportOnce,
} from "@/lib/motion";

const faqs = [
  {
    q: "¿Necesito experiencia previa?",
    a: "No. Trabajo con personas en cualquier nivel — desde principiantes absolutos hasta atletas avanzados. El plan se adapta a tu punto de partida.",
  },
  {
    q: "¿Cuánto tardan los resultados?",
    a: "Los primeros cambios visibles aparecen en 4–6 semanas. Transformaciones completas suelen lograrse entre 12 y 24 semanas dependiendo del objetivo.",
  },
  {
    q: "¿Incluye nutrición?",
    a: "Los planes Performance y Elite incluyen guía nutricional completa. Starter incluye recomendaciones básicas para acompañar el entrenamiento.",
  },
  {
    q: "¿Online o presencial?",
    a: "Ambos. Trabajo presencialmente en mi sala privada y de forma remota con clientes en cualquier parte del mundo a través de mi app.",
  },
  {
    q: "¿Hay garantía de resultados?",
    a: "El plan Elite incluye garantía: si sigues el método y no ves cambios, ajustamos sin coste hasta lograrlos.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: easeOutQuint },
  }),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      {/* Ambient */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[300px] w-[700px] rounded-full bg-primary/5 blur-[130px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-14"
        >
          <motion.span
            variants={headerReveal}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.18em]"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            FAQ
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.span>
          <motion.h2
            variants={headerReveal}
            className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
          >
            Preguntas frecuentes.
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`glass rounded-2xl overflow-hidden border transition-colors duration-300 ${
                open === i ? "border-primary/35 shadow-glow-sm" : "border-white/7 hover:border-white/12"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              >
                <span className="font-semibold text-foreground group-hover:text-white transition-colors duration-200">
                  {f.q}
                </span>
                <motion.div
                  animate={{
                    rotate: open === i ? 45 : 0,
                    backgroundColor:
                      open === i ? "oklch(0.76 0.20 145 / 0.2)" : "oklch(1 0 0 / 0.05)",
                  }}
                  transition={{ duration: 0.3, ease: easeInOutExpo }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                >
                  <Plus className="h-4 w-4 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easeOutQuint }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent mb-4" />
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {f.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.6, ease: easeOutQuint }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            ¿Tienes otra pregunta?{" "}
            <motion.a
              href="#contacto"
              className="text-primary font-semibold hover:text-primary-hover inline-flex items-center gap-1"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Escríbeme directamente →
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
