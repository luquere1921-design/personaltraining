import { motion } from "framer-motion";
import { Dumbbell, Laptop, Sparkles, ArrowUpRight } from "lucide-react";
import {
  easeOutQuint,
  staggerContainer,
  staggerItem,
  headerReveal,
  viewportOnce,
  viewportLarge,
} from "@/lib/motion";

const services = [
  {
    icon: Dumbbell,
    title: "Entrenamiento Presencial",
    desc: "Coaching 1:1 en sala privada. Técnica perfecta, intensidad calibrada y máxima rendición.",
    items: ["Sesiones 1:1 supervisadas", "Análisis biomecánico", "Plan progresivo semanal"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Laptop,
    title: "Coaching Online",
    desc: "Programación a medida y accountability remoto para profesionales sin tiempo que perder.",
    items: ["App de seguimiento", "Check-in semanal", "Vídeo-corrección de técnica"],
    featured: true,
    color: "from-primary/30 to-accent/15",
  },
  {
    icon: Sparkles,
    title: "Transformación Integral",
    desc: "El paquete élite: entrenamiento + nutrición + mindset. Resultados máximos garantizados.",
    items: ["Plan nutricional personalizado", "Coaching mental", "Soporte 24/7"],
    color: "from-accent/20 to-accent/5",
  },
];

const containerVars = staggerContainer(0.12, 0.15);

export function Services() {
  return (
    <section id="servicios" className="relative py-28 overflow-hidden">
      {/* Subtle background gradient for section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <motion.span
            variants={headerReveal}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.18em]"
          >
            <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
            Servicios
          </motion.span>
          <motion.h2
            variants={headerReveal}
            className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
          >
            Tres caminos. Un solo objetivo: resultados.
          </motion.h2>
          <motion.p
            variants={headerReveal}
            className="mt-5 text-muted-foreground text-lg leading-relaxed"
          >
            Elige el formato que mejor se adapta a tu vida y tu nivel de exigencia.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={viewportLarge}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className={`group relative rounded-3xl p-8 flex flex-col overflow-hidden ${
                s.featured
                  ? "glass-elevated border border-primary/40 shadow-glow"
                  : "glass border border-white/7 hover:border-primary/25"
              }`}
            >
              {/* Card top gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-[140px] bg-gradient-to-b ${s.color} opacity-50 pointer-events-none`}
              />

              {/* Featured badge */}
              {s.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground animate-badge-glow">
                  Más popular
                </div>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
                className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-primary transition-all ${
                  s.featured ? "bg-primary/20" : "bg-primary/12 group-hover:bg-primary/20"
                }`}
              >
                <s.icon className="h-7 w-7" strokeWidth={2.0} />
              </motion.div>

              <h3 className="relative z-10 mt-7 text-2xl font-bold text-foreground">{s.title}</h3>
              <p className="relative z-10 mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>

              <ul className="relative z-10 mt-7 space-y-2.5 flex-1">
                {s.items.map((it, idx) => (
                  <motion.li
                    key={it}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07, duration: 0.4, ease: easeOutQuint }}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {it}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contacto"
                className="relative z-10 mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-primary"
                whileHover={{ gap: "8px" }}
                transition={{ duration: 0.2 }}
              >
                Más información
                <motion.span
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
