import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Dumbbell } from "lucide-react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after a short delay to ensure assets are ready
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.1, 0.05],
                rotate: [0, -90, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[10%] -left-[10%] h-[400px] w-[400px] rounded-full bg-accent/15 blur-[100px]"
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary/10 border border-primary/25 shadow-glow"
            >
              <Dumbbell className="h-10 w-10 text-primary" strokeWidth={2.5} />
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <span className="block text-2xl font-black tracking-tighter text-foreground uppercase">
                ALEX <span className="text-primary">PERFORMANCE</span>
              </span>
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary/40" />
                <span className="text-[0.65rem] font-bold text-muted-foreground uppercase tracking-[0.3em]">
                  Transformación de Élite
                </span>
                <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary/40" />
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-12 h-[1px] w-48 overflow-hidden bg-white/5 rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
