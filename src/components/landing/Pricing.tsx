import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useState } from "react";
import {
  easeOutQuint,
  staggerContainer,
  staggerItem,
  headerReveal,
  viewportOnce,
  viewportLarge,
} from "@/lib/motion";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "149",
    annualPrice: "119",
    desc: "Perfecto para empezar con bases sólidas.",
    features: [
      "Evaluación completa",
      "Plan de entrenamiento 4 semanas",
      "Guía nutricional básica",
      "1 revisión incluida",
    ],
  },
  {
    name: "Performance",
    monthlyPrice: "349",
    annualPrice: "279",
    desc: "Coaching mensual con seguimiento total.",
    features: [
      "Todo lo anterior",
      "Coaching mensual 1:1",
      "App de seguimiento",
      "Check-in semanal",
      "Ajustes ilimitados",
    ],
    featured: true,
  },
  {
    name: "Elite Transformation",
    monthlyPrice: "799",
    annualPrice: "639",
    desc: "Mentoría premium para máximos resultados.",
    features: [
      "Todo lo anterior",
      "Plan de nutrición avanzado",
      "Soporte WhatsApp 24/7",
      "Coaching mental incluido",
      "Garantía de resultados",
    ],
  },
];

const containerVars = staggerContainer(0.12, 0.1);

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precios" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.span
            variants={headerReveal}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.18em]"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            Programas
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.span>
          <motion.h2
            variants={headerReveal}
            className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
          >
            Invierte en la mejor versión de ti.
          </motion.h2>
          <motion.p
            variants={headerReveal}
            className="mt-5 text-muted-foreground text-lg"
          >
            Tres niveles de compromiso. Un solo estándar: excelencia.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            variants={headerReveal}
            className="mt-8 inline-flex items-center glass rounded-2xl p-1.5 gap-1 border border-white/8"
          >
            <button
              onClick={() => setAnnual(false)}
              className="relative rounded-xl px-5 py-2 text-sm font-semibold transition-colors duration-200"
            >
              {!annual && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 bg-primary rounded-xl shadow-glow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${!annual ? "text-primary-foreground" : "text-muted-foreground"}`}>
                Mensual
              </span>
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="relative rounded-xl px-5 py-2 text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5"
            >
              {annual && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 bg-primary rounded-xl shadow-glow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${annual ? "text-primary-foreground" : "text-muted-foreground"}`}>
                Anual
              </span>
              <span className="relative z-10 text-[0.6rem] font-black bg-accent/20 text-accent rounded-full px-1.5 py-0.5">
                -20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={viewportLarge}
          className="mt-14 grid md:grid-cols-3 gap-6 items-end"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={staggerItem}
              whileHover={!p.featured ? { y: -8, scale: 1.01 } : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`relative rounded-3xl p-8 flex flex-col border overflow-hidden ${
                p.featured
                  ? "glass-elevated border-primary/45 shadow-glow md:-translate-y-4"
                  : "glass border-white/7 hover:border-primary/25"
              }`}
            >
              {/* Featured top gradient */}
              {p.featured && (
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
              )}

              {/* Featured badge */}
              {p.featured && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              )}
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-black text-primary-foreground flex items-center gap-1.5 animate-badge-glow">
                  <Zap className="h-3 w-3" />
                  Recomendado
                </div>
              )}

              <h3 className="relative z-10 text-xl font-bold text-foreground">{p.name}</h3>
              <p className="relative z-10 mt-2 text-sm text-muted-foreground">{p.desc}</p>

              {/* Price */}
              <div className="relative z-10 mt-7 flex items-baseline gap-1">
                <span className="text-[0.875rem] font-semibold text-muted-foreground">€</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={annual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: easeOutQuint }}
                    className="text-5xl font-black text-gradient"
                  >
                    {annual ? p.annualPrice : p.monthlyPrice}
                  </motion.span>
                </AnimatePresence>
                <span className="text-muted-foreground text-sm">/mes</span>
              </div>

              {annual && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="relative z-10 mt-1 text-xs text-primary font-semibold"
                >
                  Facturado anualmente — ahorras €{(parseInt(p.monthlyPrice) - parseInt(p.annualPrice)) * 12}/año
                </motion.div>
              )}

              {/* Features */}
              <ul className="relative z-10 mt-7 space-y-3 flex-1">
                {p.features.map((f, fi) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fi * 0.06, duration: 0.35, ease: easeOutQuint }}
                    className="flex items-start gap-2.5 text-sm text-foreground/90"
                  >
                    <div className="mt-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary/15 shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#contacto"
                className={`relative z-10 mt-8 block text-center rounded-xl px-5 py-3.5 text-sm font-bold transition-colors ${
                  p.featured
                    ? "bg-primary text-primary-foreground shadow-glow btn-shimmer"
                    : "glass-elevated text-foreground border border-white/10 hover:border-primary/30"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Empezar ahora
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-center text-xs text-muted-foreground"
        >
          💳 Pago seguro · Sin permanencia · Cancela cuando quieras · Garantía de resultados en Elite
        </motion.p>
      </div>
    </section>
  );
}
