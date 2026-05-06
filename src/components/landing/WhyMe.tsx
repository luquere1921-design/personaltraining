import { motion } from "framer-motion";
import {
  Target,
  UserCheck,
  Calendar,
  MessageSquare,
  FlaskConical,
  TrendingUp,
} from "lucide-react";
import {
  easeOutQuint,
  staggerContainer,
  staggerItem,
  headerReveal,
  viewportOnce,
  viewportLarge,
} from "@/lib/motion";

const benefits = [
  {
    icon: Target,
    title: "Método probado",
    desc: "Sistema refinado en +100 transformaciones documentadas.",
  },
  {
    icon: UserCheck,
    title: "Atención personalizada",
    desc: "Cero plantillas. Cada plan se construye desde cero para ti.",
  },
  {
    icon: Calendar,
    title: "Plan adaptado a tu agenda",
    desc: "Sesiones que encajan en la vida de un profesional ocupado.",
  },
  {
    icon: MessageSquare,
    title: "Seguimiento real",
    desc: "Comunicación directa. Ajustes semanales basados en datos.",
  },
  {
    icon: FlaskConical,
    title: "Ciencia aplicada",
    desc: "Programación basada en evidencia, no en modas pasajeras.",
  },
  {
    icon: TrendingUp,
    title: "Resultados sostenibles",
    desc: "No transformamos por 12 semanas. Construimos hábitos para décadas.",
  },
];

const containerVars = staggerContainer(0.08, 0.05);

export function WhyMe() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
      <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[130px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span
            variants={headerReveal}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.18em]"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            Por qué yo
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.span>
          <motion.h2
            variants={headerReveal}
            className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
          >
            La diferencia entre entrenar y transformarte.
          </motion.h2>
          <motion.p
            variants={headerReveal}
            className="mt-5 text-muted-foreground text-lg leading-relaxed"
          >
            Cada detalle importa. Así es como trabajo y por qué funciona.
          </motion.p>
        </motion.div>

        {/* Benefit cards */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={viewportLarge}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              whileHover={{
                y: -7,
                scale: 1.015,
                borderColor: "oklch(0.76 0.20 145 / 0.35)",
              }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="group glass rounded-2xl p-7 border border-white/7 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 6, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary group-hover:bg-primary/20 transition-colors duration-300"
              >
                <b.icon className="h-6 w-6" strokeWidth={1.8} />
              </motion.div>

              {/* Step number */}
              <div className="absolute top-5 right-5 text-[3rem] font-black text-white/[0.03] select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="relative z-10 mt-5 text-lg font-bold text-foreground">
                {b.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4, duration: 0.6, ease: easeOutQuint }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Descubre el método →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
