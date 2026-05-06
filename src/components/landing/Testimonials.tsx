import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  staggerContainer,
  headerReveal,
  viewportOnce,
} from "@/lib/motion";

const testimonials = [
  {
    name: "Marina S.",
    role: "CEO",
    quote: "Después de años probando métodos, este fue el único que se adaptó a mi vida. Resultados visibles en 8 semanas.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Javier P.",
    role: "Consultor",
    quote: "Profesionalidad absoluta. Cada sesión tiene un propósito claro. Mi rendimiento ha cambiado por completo.",
    rating: 5,
    initials: "JP",
  },
  {
    name: "Ana T.",
    role: "Médica",
    quote: "Como sanitaria valoro la base científica. Es entrenamiento serio, no ejercicio aleatorio.",
    rating: 5,
    initials: "AT",
  },
  {
    name: "Roberto V.",
    role: "Abogado",
    quote: "Pensaba que no tenía tiempo. Alex me demostró que el problema era el método, no la agenda.",
    rating: 5,
    initials: "RV",
  },
  {
    name: "Clara D.",
    role: "Directora",
    quote: "El seguimiento es obsesivo, en el mejor sentido. Sientes que de verdad le importa tu progreso.",
    rating: 5,
    initials: "CD",
  },
  {
    name: "Tomás L.",
    role: "Inversor",
    quote: "Vale cada euro. No es un gasto, es la mejor inversión en salud que he hecho.",
    rating: 5,
    initials: "TL",
  },
];

// Second row items (slightly different order for visual variety)
const testimonialsRow2 = [
  testimonials[3],
  testimonials[4],
  testimonials[5],
  testimonials[0],
  testimonials[1],
  testimonials[2],
];

interface TestimonialCardProps {
  t: (typeof testimonials)[0];
}

function TestimonialCard({ t }: TestimonialCardProps) {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 glass-elevated rounded-2xl p-6 border border-white/8 hover:border-primary/25 transition-colors duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex gap-0.5">
          {[...Array(t.rating)].map((_, j) => (
            <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
          ))}
        </div>
        <Quote className="h-5 w-5 text-primary/25 group-hover:text-primary/50 transition-colors" />
      </div>
      <p className="mt-4 text-sm text-foreground/90 leading-relaxed">
        "{t.quote}"
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-primary text-sm font-bold shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const loop1 = [...testimonials, ...testimonials];
  const loop2 = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Ambient */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[300px] w-[600px] rounded-full bg-primary/6 blur-[120px] pointer-events-none -z-10" />

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
            Testimonios
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.span>
          <motion.h2
            variants={headerReveal}
            className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
          >
            Lo que dicen mis clientes.
          </motion.h2>
          <motion.p
            variants={headerReveal}
            className="mt-5 text-muted-foreground text-lg"
          >
            120+ reseñas verificadas. Valoración media de 4.9/5.
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee — Row 1 (left) */}
      <div className="mt-14 relative">
        {/* Edge masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
            className="marquee-track flex gap-5"
          >
            {loop1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee — Row 2 (right, reverse) */}
      <div className="mt-5 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
            className="marquee-track flex gap-5"
          >
            {loop2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
