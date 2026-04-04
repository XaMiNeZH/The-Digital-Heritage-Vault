"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function supportsHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 24, stiffness: 220, mass: 0.2 });
  const ringY = useSpring(y, { damping: 24, stiffness: 220, mass: 0.2 });

  useEffect(() => {
    if (!supportsHover()) {
      return;
    }

    setEnabled(true);

    const updateTheme = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const zone = target.closest<HTMLElement>("[data-cursor-theme]");
      setDarkMode(zone?.dataset.cursorTheme === "charcoal");
    };

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      updateTheme(document.elementFromPoint(event.clientX, event.clientY));
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, textarea, [data-cursor-hover]");
      setExpanded(Boolean(interactive));
      updateTheme(target);
    };

    document.body.classList.add("cursor-none");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [ringX, ringY, x, y]);

  if (!enabled) {
    return null;
  }

  const tone = darkMode ? "#100e0b" : "#c8860a";

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x,
          y,
          backgroundColor: tone,
          mixBlendMode: darkMode ? "normal" : "screen"
        }}
        animate={{ scale: expanded ? 1.9 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          borderColor: tone
        }}
        animate={{
          opacity: expanded ? 0 : 1,
          scale: expanded ? 0.8 : 1
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}
