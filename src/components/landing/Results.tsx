import { motion } from "framer-motion";
import t1 from "@/assets/transformation-1.jpg";
import t2 from "@/assets/transformation-2.jpg";
import t3 from "@/assets/transformation-3.jpg";
import {
  easeOutQuint,
  staggerContainer,
  staggerItem,
  headerReveal,
  viewportOnce,
  viewportLarge,
} from "@/lib/motion";

const cases = [
  {
    img: t1,
    name: "Carlos M.",
    role: "Ejecutivo, 38",
    metric: "-14 kg",
    time: "20 semanas",
    quote: "Recuperé energía y confianza. Por fin un método sostenible.",
    accent: "from-primary/60 to-primary/20",
  },
  {
    img: t2,
    name: "Laura G.",
    role: "Abogada, 32",
    metric: "-9 kg / +4kg músculo",
    time: "16 semanas",
    quote: "Sin dietas extremas. Solo estructura y constancia.",
    accent: "from-accent/60 to-accent/20",
  },
  {
    img: t3,
    name: "Diego R.",
    role: "Fundador, 41",
    metric: "+8 kg músculo",
    time: "24 semanas",
    quote: "El mejor estado físico de mi vida, con agenda imposible.",
    accent: "from-primary/60 to-primary/20",
  },
];

const containerVars = staggerContainer(0.14, 0.1);

const socialProof = [
  { value: "96%", label: "Adherencia promedio" },
  { value: "4.9★", label: "Valoración media" },
  { value: "0", label: "Métodos extremos" },
  { value: "100%", label: "Resultados documentados" },
];

export function Results() {
  return (
    <section id="resultados" className="relative py-28 overflow-hidden">
      {/* Ambient light */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/8 blur-[120px] pointer-events-none -z-10" />

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
            Resultados
          </motion.span>
          <motion.h2
            variants={headerReveal}
            className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
          >
            Resultados que hablan por sí solos.
          </motion.h2>
          <motion.p
            variants={headerReveal}
            className="mt-5 text-muted-foreground text-lg leading-relaxed"
          >
            Transformaciones reales de clientes reales. Sin atajos. Sin filtros.
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
          {cases.map((c) => (
            <motion.div
              key={c.name}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl glass-elevated border border-white/8"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={c.img}
                  alt={`Transformación de ${c.name}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.55, ease: easeOutQuint }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

                {/* Metric badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -6 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, ease: easeOutQuint }}
                  className={`absolute top-4 right-4 rounded-full bg-gradient-to-r ${c.accent} backdrop-blur-md px-3 py-1.5 text-xs font-black text-white border border-white/20`}
                >
                  {c.metric}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{c.quote}"
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {c.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.role}</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1.5">
                    {c.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof row */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socialProof.map((sp) => (
            <motion.div
              key={sp.label}
              variants={staggerItem}
              className="glass rounded-2xl p-5 text-center border border-white/6 hover:border-primary/25 transition-colors duration-300"
            >
              <div className="text-2xl font-black text-gradient-primary">{sp.value}</div>
              <div className="mt-1.5 text-xs text-muted-foreground font-medium">{sp.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
