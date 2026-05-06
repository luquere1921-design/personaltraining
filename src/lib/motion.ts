// ─── Shared easing constants ───────────────────────────────────────────────
export const easeSnappy     = [0.16, 1, 0.3, 1]     as const;
export const easeOutQuint   = [0.22, 1, 0.36, 1]    as const;
export const easeInOutExpo  = [0.87, 0, 0.13, 1]    as const;
export const easeOutBack    = [0.34, 1.56, 0.64, 1] as const;

// ─── Spring presets ────────────────────────────────────────────────────────
export const springSnappy = { type: "spring", stiffness: 400, damping: 28 } as const;
export const springBouncy = { type: "spring", stiffness: 300, damping: 18 } as const;
export const springSmooth = { type: "spring", stiffness: 200, damping: 30 } as const;

// ─── Reusable variants ─────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.7, ease: easeOutQuint } },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6, ease: easeOutQuint } },
} as const;

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.7, ease: easeOutQuint } },
} as const;

// Container that staggers children at 120 ms
export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  show:   { transition: { staggerChildren: stagger, delayChildren } },
});

// Per-card stagger item
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOutQuint } },
} as const;

// Section header block
export const headerReveal = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOutQuint } },
} as const;

// Viewport settings
export const viewportOnce   = { once: true, amount: 0.25 } as const;
export const viewportLarge  = { once: true, amount: 0.15 } as const;
export const viewportStrict = { once: true, amount: 0.35 } as const;
