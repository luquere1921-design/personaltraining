import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2, User, Mail, MessageSquare, Target } from "lucide-react";
import {
  easeOutQuint,
  staggerContainer,
  staggerItem,
  headerReveal,
  viewportOnce,
  viewportLarge,
} from "@/lib/motion";
import { useState } from "react";

const schema = z.object({
  name:  z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email no válido"),
  goal:  z.enum(["fat-loss", "muscle", "performance", "other"], {
    required_error: "Selecciona un objetivo",
  }),
  message: z.string().min(10, "Cuéntame un poco más (mín. 10 caracteres)").max(500),
});

type FormData = z.infer<typeof schema>;

const goals = [
  { value: "fat-loss",    label: "Pérdida de grasa",   emoji: "🔥" },
  { value: "muscle",      label: "Ganar músculo",       emoji: "💪" },
  { value: "performance", label: "Alto rendimiento",    emoji: "⚡" },
  { value: "other",       label: "Otro objetivo",       emoji: "🎯" },
];

const highlights = [
  { emoji: "🕐", text: "Respuesta en menos de 24h" },
  { emoji: "🎁", text: "Diagnóstico inicial gratuito" },
  { emoji: "🔒", text: "Sin compromisos ni venta agresiva" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const selectedGoal = watch("goal");

  const onSubmit = async (_data: FormData) => {
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1400));
    setSent(true);
  };

  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
      <div className="absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-primary/8 blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-accent/6 blur-[120px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

          {/* ─── Left: copy ─── */}
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
              <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
              Contacto
            </motion.span>

            <motion.h2
              variants={headerReveal}
              className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
            >
              El primer paso<br />
              <span className="text-gradient-primary">empieza aquí.</span>
            </motion.h2>

            <motion.p
              variants={headerReveal}
              className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md"
            >
              Cuéntame tu objetivo y dónde estás ahora. Te respondo personalmente
              con un plan de acción concreto. Sin coste, sin compromiso.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              variants={staggerContainer(0.08, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 space-y-4"
            >
              {highlights.map((h) => (
                <motion.li
                  key={h.text}
                  variants={staggerItem}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="text-xl">{h.emoji}</span>
                  {h.text}
                </motion.li>
              ))}
            </motion.ul>

            {/* WhatsApp direct link */}
            <motion.a
              variants={headerReveal}
              href="https://wa.me/34600000000?text=Hola,%20quiero%20información%20sobre%20entrenamiento%20personal"
              target="_blank"
              rel="noopener"
              className="mt-10 inline-flex items-center gap-2.5 rounded-xl glass border border-white/10 px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/35 transition-colors duration-300"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="text-lg">💬</span>
              También por WhatsApp
            </motion.a>
          </motion.div>

          {/* ─── Right: form ─── */}
          <motion.div
            variants={staggerContainer(0.08, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewportLarge}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                /* Success state */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easeOutQuint }}
                  className="glass-elevated rounded-3xl border border-primary/30 p-10 md:p-14 text-center shadow-glow"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 280, damping: 18 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 border border-primary/30"
                  >
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: easeOutQuint }}
                    className="mt-7 text-2xl font-black text-foreground"
                  >
                    ¡Mensaje recibido!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.5, ease: easeOutQuint }}
                    className="mt-4 text-muted-foreground leading-relaxed"
                  >
                    Te respondo personalmente en menos de 24 horas.<br />
                    Revisa tu bandeja de entrada (y el spam, por si acaso).
                  </motion.p>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass-elevated rounded-3xl border border-white/8 p-7 md:p-10 space-y-5"
                >
                  {/* Name */}
                  <motion.div variants={staggerItem} className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em]">
                      Nombre
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                      <input
                        {...register("name")}
                        placeholder="Tu nombre"
                        className="w-full rounded-xl glass border border-white/8 pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={staggerItem} className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em]">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full rounded-xl glass border border-white/8 pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </motion.div>

                  {/* Goal selector */}
                  <motion.div variants={staggerItem} className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em] flex items-center gap-1.5">
                      <Target className="h-3.5 w-3.5" />
                      Objetivo principal
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {goals.map((g) => (
                        <motion.button
                          key={g.value}
                          type="button"
                          onClick={() => setValue("goal", g.value as FormData["goal"], { shouldValidate: true })}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium text-left border transition-all duration-200 ${
                            selectedGoal === g.value
                              ? "bg-primary/15 border-primary/50 text-foreground shadow-glow-sm"
                              : "glass border-white/7 text-muted-foreground hover:border-white/15"
                          }`}
                        >
                          <span className="text-base">{g.emoji}</span>
                          {g.label}
                        </motion.button>
                      ))}
                    </div>
                    {errors.goal && (
                      <p className="text-xs text-red-400">{errors.goal.message}</p>
                    )}
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={staggerItem} className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em] flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5" />
                      Cuéntame más
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="¿Dónde estás ahora? ¿Qué has intentado antes? ¿Qué te impide avanzar?"
                      className="w-full rounded-xl glass border border-white/8 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors duration-200 resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={staggerItem}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-glow btn-shimmer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Enviando…
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </motion.button>
                    <p className="mt-3 text-center text-xs text-muted-foreground/60">
                      🔒 Tus datos son privados y nunca se comparten con terceros.
                    </p>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
