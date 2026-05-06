import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  easeOutQuint,
  staggerContainer,
  headerReveal,
  viewportOnce,
  viewportLarge,
} from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Diagnóstico inicial",
    desc: "Evaluamos tu composición corporal, hábitos y objetivos en una sesión gratuita.",
    icon: "🔍",
  },
  {
    n: "02",
    title: "Estrategia personalizada",
    desc: "Diseño un plan a medida: entrenamiento, nutrición y rutinas integradas.",
    icon: "📋",
  },
  {
    n: "03",
    title: "Seguimiento semanal",
    desc: "Ajustes basados en datos. Comunicación directa. Cero improvisación.",
    icon: "📊",
  },
  {
    n: "04",
    title: "Transformación sostenible",
    desc: "Construyes hábitos que perduran. Resultados que se mantienen para siempre.",
    icon: "🏆",
  },
];

const stepVars = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.7, ease: easeOutQuint },
  }),
};

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // The connecting line fills in as you scroll into the section
  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section id="proceso" ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute right-1/4 top-1/3 h-[350px] w-[350px] rounded-full bg-accent/6 blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <motion.span
            variants={headerReveal}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.18em]"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            El proceso
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.span>
          <motion.h2
            variants={headerReveal}
            className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
          >
            De la primera llamada a tu mejor versión.
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connecting line — desktop */}
          <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-[1px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <motion.div
              style={{ scaleX: lineScaleX, originX: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/70"
            />
          </div>

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute top-6 left-[2rem] bottom-6 w-[1px] overflow-hidden">
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportLarge}
              transition={{ duration: 1.2, ease: easeOutQuint }}
              className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
            />
          </div>

          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            whileInView="show"
            viewport={viewportLarge}
            className="grid lg:grid-cols-4 gap-10 lg:gap-6"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                custom={i}
                variants={stepVars}
                className="relative pl-14 lg:pl-0 lg:text-center"
              >
                {/* Step number bubble */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="relative z-10 mb-4 lg:mx-auto flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-2xl glass-elevated border border-primary/30 shadow-glow-sm"
                >
                  <span className="text-2xl leading-none">{s.icon}</span>
                  <span className="text-[0.6rem] font-black text-primary/70 tracking-widest mt-0.5">
                    {s.n}
                  </span>
                </motion.div>

                {/* Mobile — absolute number bubble on the left line */}
                <div className="lg:hidden absolute top-0 left-0 flex h-[4.5rem] w-[4.5rem] items-center justify-center" />

                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                {/* Step connector dot — desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[2.1rem] -right-3 h-1.5 w-1.5 rounded-full bg-primary/40 z-20" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5, duration: 0.6, ease: easeOutQuint }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow btn-shimmer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            Empieza con tu diagnóstico gratuito →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
