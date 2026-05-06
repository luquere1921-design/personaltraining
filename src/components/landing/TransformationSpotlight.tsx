import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import spotlightImg from "@/assets/transformation-slider.png";
import { easeOutQuint, viewportOnce } from "@/lib/motion";

export function TransformationSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden glass-elevated border border-white/10 shadow-elevated">
          {/* Background Image with Parallax */}
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <img
              src={spotlightImg}
              alt="Caso de éxito destacado"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>

          {/* Content Overlay */}
          <div className="relative h-full flex flex-col justify-center p-8 md:p-16 max-w-2xl">
            <motion.div
              style={{ y: textY }}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOutQuint } },
              }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-primary border border-primary/30 mb-6">
                CASO DE ÉXITO #42
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                "Cambié mi cuerpo, <br />
                <span className="text-gradient-primary">recuperé mi vida.</span>"
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                En solo 16 semanas, pasamos de una vida sedentaria a un rendimiento de élite.
                Sin dietas milagro. Solo ciencia y compromiso.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-black text-white">-14 kg</div>
                  <div className="text-xs font-bold text-white/50 uppercase tracking-widest mt-1">Grasa corporal</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">+6 kg</div>
                  <div className="text-xs font-bold text-white/50 uppercase tracking-widest mt-1">Masa muscular</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">16 sem</div>
                  <div className="text-xs font-bold text-white/50 uppercase tracking-widest mt-1">Tiempo total</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
