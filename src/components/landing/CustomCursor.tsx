import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);

  // Ring follows with spring lag
  const springConfig = { stiffness: 180, damping: 28, mass: 0.6 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  // Scale springs
  const ringScale = useSpring(1, { stiffness: 300, damping: 25 });
  const dotScale  = useSpring(1, { stiffness: 400, damping: 28 });
  const ringOpacity = useSpring(0.6, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isLink =
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.closest("a") ||
        el.closest("button") ||
        el.getAttribute("role") === "button";
      if (isLink) {
        isHovering.current = true;
        ringScale.set(2.2);
        dotScale.set(0.4);
        ringOpacity.set(0.9);
      }
    };

    const onLeave = () => {
      if (isHovering.current) {
        isHovering.current = false;
        ringScale.set(1);
        dotScale.set(1);
        ringOpacity.set(0.6);
      }
    };

    const onDown = () => {
      ringScale.set(isHovering.current ? 1.8 : 0.75);
      dotScale.set(0.6);
    };
    const onUp = () => {
      ringScale.set(isHovering.current ? 2.2 : 1);
      dotScale.set(isHovering.current ? 0.4 : 1);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout",  onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout",  onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, [cursorX, cursorY, ringScale, dotScale, ringOpacity]);

  // Only render on non-touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring — spring-lagged */}
      <motion.div
        ref={dotRef}
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          opacity: ringOpacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 rounded-full border border-primary/70 mix-blend-difference"
        aria-hidden
      />

      {/* Inner dot — direct follow */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          scale: dotScale,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-primary"
        aria-hidden
      />
    </>
  );
}
