import { motion } from "framer-motion";
import { ArrowRight, Star, Shield } from "lucide-react";
import {
  easeOutQuint,
  staggerContainer,
  headerReveal,
  viewportOnce,
} from "@/lib/motion";

const trustItems = [
  { icon: Star, text: "4.9/5 en reseñas verificadas" },
  { icon: Shield, text: "Garantía de resultados en Elite" },
];

export function FinalCTA() {
  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: easeOutQuint }}
          className="relative overflow-hidden rounded-[2rem] glass-elevated border border-white/10 p-10 md:p-16 text-center"
        >
          {/* Animated background orbs */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
            {/* Primary orb — slow drift */}
            <div className="absolute top-[-30%] left-[20%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] animate-drift-slow" />
            {/* Accent orb — reverse drift */}
            <div className="absolute bottom-[-20%] right-[15%] h-[400px] w-[400px] rounded-full bg-accent/12 blur-[100px] animate-drift-reverse" />
            {/* Center glow — static */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/6 via-transparent to-transparent" />
          </div>

          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

          {/* Eyebrow */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.span
              variants={headerReveal}
              className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.18em]"
            >
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
              Empieza hoy
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
            </motion.span>

            <motion.h2
              variants={headerReveal}
              className="mt-5 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black tracking-[-0.04em] leading-[1.02] text-gradient"
            >
              Tu transformación empieza{" "}
              <br className="hidden sm:block" />
              con una{" "}
              <span className="text-gradient-primary">decisión</span>.
            </motion.h2>

            <motion.p
              variants={headerReveal}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Reserva una llamada gratuita de 20 minutos y descubre tu plan
              ideal. Sin compromiso, sin venta agresiva.
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.35, duration: 0.65, ease: easeOutQuint }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href="https://wa.me/34600000000?text=Hola,%20quiero%20información%20sobre%20entrenamiento%20personal"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow btn-shimmer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              Reservar llamada gratuita
              <motion.span
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
            <motion.a
              href="mailto:hola@alex-performance.com"
              className="inline-flex items-center rounded-xl glass-elevated px-8 py-4 text-base font-semibold text-foreground border border-white/10"
              whileHover={{ scale: 1.02, borderColor: "oklch(0.76 0.20 145 / 0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              hola@alex-performance.com
            </motion.a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.5, duration: 0.5, ease: easeOutQuint }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            {trustItems.map((ti) => (
              <div key={ti.text} className="flex items-center gap-2">
                <ti.icon className="h-4 w-4 text-primary shrink-0" />
                {ti.text}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-lg">💳</span>
              Pago seguro
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
