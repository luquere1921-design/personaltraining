import { motion } from "framer-motion";

const keywords = [
  "DISCIPLINA",
  "TRANSFORMACIÓN",
  "RENDIMIENTO",
  "CONSTANCIA",
  "ÉLITE",
  "RESULTADOS",
  "PERSONALIZADO",
  "CIENCIA",
  "MÉTODO",
  "HABILIDADES",
];

export function TrustBar() {
  const loop = [...keywords, ...keywords, ...keywords];

  return (
    <section className="relative py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden select-none">
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 sm:gap-20"
        >
          {loop.map((k, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-3xl sm:text-5xl font-black italic text-white/[0.04]"
              style={{ WebkitTextStroke: "1px oklch(1 0 0 / 10%)" }}
            >
              <span className="text-primary/10">/</span>
              {k}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
