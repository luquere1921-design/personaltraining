import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { easeOutQuint, viewportOnce } from "@/lib/motion";
import { TrendingUp } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString("es"));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 100,  suffix: "+",    label: "Clientes transformados",     icon: "🏆" },
  { value: 1850, suffix: " kg",  label: "Grasa perdida total",        icon: "🔥" },
  { value: 420,  suffix: " kg",  label: "Masa muscular ganada",       icon: "💪" },
  { value: 9,    suffix: " años",label: "Experiencia profesional",    icon: "⭐" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutQuint } },
};

export function Stats() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: easeOutQuint }}
          className="flex items-center gap-2 mb-5 justify-center"
        >
          <TrendingUp className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
            En números
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass-elevated rounded-3xl border border-white/8 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 divide-y md:divide-y-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={itemVariants}
                className="relative group p-8 md:p-10 text-center"
                whileHover={{ backgroundColor: "oklch(0.76 0.20 145 / 0.04)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                </div>

                <div className="text-2xl mb-2 select-none">{s.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-gradient-primary leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground font-medium leading-snug">
                  {s.label}
                </div>

                {/* Bottom accent for featured item */}
                {i === 0 && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
