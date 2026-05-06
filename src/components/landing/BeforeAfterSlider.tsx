import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/transformation_before.png";
import afterImg from "@/assets/transformation-slider.png";
import { viewportOnce, headerReveal, staggerContainer } from "@/lib/motion";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX : (event as MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="relative py-28 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.span
            variants={headerReveal}
            className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.18em]"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            Evolución
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.span>
          <motion.h2
            variants={headerReveal}
            className="mt-4 text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-black tracking-[-0.03em] leading-[1.05] text-gradient"
          >
            Control total sobre tu cambio.
          </motion.h2>
          <motion.p
            variants={headerReveal}
            className="mt-5 text-muted-foreground text-lg"
          >
            Desliza para ver la diferencia real entre el punto de partida y el resultado final.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-5xl aspect-[16/10] sm:aspect-[16/9] rounded-[2rem] overflow-hidden glass-elevated border border-white/10 shadow-elevated select-none touch-none"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img
              src={afterImg}
              alt="After Transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-8 glass px-4 py-2 rounded-xl text-xs font-bold text-white tracking-widest uppercase border border-white/10 backdrop-blur-md">
              Después
            </div>
          </div>

          {/* Before Image (Clipping Layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeImg}
              alt="Before Transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-8 glass-elevated px-4 py-2 rounded-xl text-xs font-bold text-primary tracking-widest uppercase border border-primary/20 backdrop-blur-md">
              Antes
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm cursor-ew-resize group"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-elevated border-2 border-white/20 flex items-center justify-center shadow-glow-sm group-hover:scale-110 transition-transform duration-200">
              <MoveHorizontal className="w-5 h-5 text-white" />
            </div>

            {/* Animated Glow Line */}
            <div className="absolute inset-y-0 -left-px w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
          </div>
        </motion.div>

        {/* Footer Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-xs text-muted-foreground/60 flex items-center justify-center gap-2"
        >
          <MoveHorizontal className="w-3 h-3" />
          Desliza el control para comparar
        </motion.p>
      </div>
    </section>
  );
}
