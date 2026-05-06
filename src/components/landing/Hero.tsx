import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Shield, Zap } from "lucide-react";
import heroImg from "@/assets/hero-trainer.jpg";
import {
  easeOutQuint,
  easeSnappy,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

// Word-level split animation for the headline
const wordVariants = {
  hidden: { opacity: 0, y: 56, rotateX: -20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.75, ease: easeOutQuint },
  }),
};

const containerVariants = staggerContainer(0.10, 0.1);

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutQuint } },
};

// Badge pill animation
const badgeVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOutQuint, delay: 0.15 },
  },
};

const headlineWords = [
  { text: "Transforma", highlight: false },
  { text: "tu", highlight: false },
  { text: "cuerpo.", highlight: false },
];
const headlineWords2 = [
  { text: "Domina", highlight: false },
  { text: "tu", highlight: false },
  { text: "disciplina.", highlight: true },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves up as user scrolls
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  // Parallax: content fades slightly as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100svh] pt-32 md:pt-44 pb-24 overflow-hidden flex items-center"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[130px] animate-drift-slow" />
        <div className="absolute bottom-[-5%] left-[-8%] h-[500px] w-[500px] rounded-full bg-accent/7 blur-[120px] animate-drift-reverse" />
        <div className="absolute top-[40%] left-[35%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-20 items-center w-full">
        {/* ─── Left column: copy ─── */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-xs font-semibold text-muted-foreground border border-primary/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            Aceptando 5 nuevos clientes este mes
          </motion.div>

          {/* Headline — word by word */}
          <div
            className="mt-6 text-[2.8rem] sm:text-[3.8rem] lg:text-[5rem] xl:text-[5.5rem] font-black tracking-[-0.03em] leading-[1.02]"
            style={{ perspective: "800px" }}
          >
            <div className="flex flex-wrap gap-x-[0.25em]">
              {headlineWords.map((w, i) => (
                <motion.span
                  key={`h1-${i}`}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="show"
                  className={w.highlight ? "text-gradient-primary" : "text-gradient"}
                >
                  {w.text}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-[0.25em] mt-1">
              {headlineWords2.map((w, i) => (
                <motion.span
                  key={`h2-${i}`}
                  custom={headlineWords.length + i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="show"
                  className={w.highlight ? "text-gradient-primary" : "text-gradient"}
                >
                  {w.text}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Entrenamiento personalizado diseñado para profesionales que quieren
            resultados reales, sin perder tiempo. Método probado. Seguimiento
            1:1. Resultados medibles.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href="#contacto"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-glow btn-shimmer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Reserva tu diagnóstico gratuito
              <motion.span
                className="inline-flex"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#resultados"
              className="inline-flex items-center gap-2.5 rounded-xl glass-elevated px-7 py-4 text-base font-semibold text-foreground border border-white/10"
              whileHover={{ scale: 1.02, borderColor: "oklch(0.76 0.20 145 / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15"
                whileHover={{ scale: 1.12, backgroundColor: "oklch(0.76 0.20 145 / 0.25)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Play className="h-3.5 w-3.5 text-primary fill-primary" />
              </motion.span>
              Ver casos reales
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="mt-10 pt-8 border-t border-white/8 flex flex-wrap items-center gap-5 text-sm"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.1 + i * 0.07,
                      type: "spring",
                      stiffness: 500,
                      damping: 18,
                    }}
                  >
                    <Star className="h-4 w-4 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>
              <span className="text-muted-foreground font-medium">
                4.9/5 · 120+ reseñas
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>+100 transformaciones</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-4 w-4 text-primary" />
              <span>Seguimiento 1:1</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Right column: image ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: easeOutQuint, delay: 0.2 }}
          className="relative hidden sm:block"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-8 bg-gradient-to-tr from-primary/25 to-accent/15 blur-3xl opacity-70 -z-10 rounded-full" />

          <div className="relative rounded-[2rem] overflow-hidden glass-elevated p-2 shadow-elevated">
            <motion.div
              style={{ y: imageY }}
              className="relative rounded-[1.5rem] overflow-hidden aspect-[3/4]"
            >
              <img
                src={heroImg}
                alt="Personal trainer profesional en sesión de entrenamiento"
                width={1080}
                height={1440}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Floating card — bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: easeSnappy }}
            style={{
              animation: "float 5.5s ease-in-out infinite",
              animationDelay: "0s",
            }}
            className="absolute -left-6 bottom-14 glass-elevated rounded-2xl p-4 shadow-card border border-white/12 min-w-[130px]"
          >
            <div className="text-xs text-muted-foreground font-medium">Pérdida de grasa</div>
            <div className="text-2xl font-black text-gradient-primary mt-0.5">-12 kg</div>
            <div className="text-xs text-muted-foreground">en 16 semanas</div>
          </motion.div>

          {/* Floating card — top right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7, ease: easeSnappy }}
            style={{
              animation: "float 6s ease-in-out infinite",
              animationDelay: "-2.5s",
            }}
            className="absolute -right-6 top-14 glass-elevated rounded-2xl p-4 shadow-card border border-white/12 min-w-[120px]"
          >
            <div className="text-xs text-muted-foreground font-medium">Adherencia</div>
            <div className="text-2xl font-black text-foreground mt-0.5">96%</div>
            <div className="text-xs text-muted-foreground">clientes activos</div>
          </motion.div>

          {/* Floating card — middle left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.6, ease: easeSnappy }}
            className="absolute -left-4 top-[45%] glass-elevated rounded-xl px-3 py-2 shadow-card border border-primary/25 flex items-center gap-2"
          >
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-foreground">En sesión ahora</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/50 uppercase tracking-widest font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
