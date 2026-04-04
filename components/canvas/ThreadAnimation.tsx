"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function ThreadAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) {
      return;
    }

    controls.start((index) => ({
      pathLength: [1, 0.1, 1],
      pathOffset: [0, 0.35, 0],
      stroke: ["#c8860a", "#a84422", "#5a8c48"],
      x: [0, index % 2 === 0 ? 20 : -20, 0],
      transition: {
        duration: 4,
        times: [0, 0.36, 1],
        ease: "easeInOut",
        delay: index * 0.08
      }
    }));
  }, [controls, inView]);

  return (
    <div ref={ref} className="relative mx-auto h-[260px] w-full max-w-3xl overflow-hidden">
      <svg className="h-full w-full" viewBox="0 0 800 260">
        {Array.from({ length: 7 }).map((_, index) => {
          const x = 120 + index * 90;

          return (
            <motion.path
              key={x}
              animate={controls}
              custom={index}
              d={`M ${x} 0 C ${x + (index % 2 === 0 ? 14 : -14)} 80, ${x + (index % 2 === 0 ? -18 : 18)} 180, ${x} 260`}
              fill="none"
              initial={{ opacity: 0.9, pathLength: 1, pathOffset: 0, stroke: "#c8860a" }}
              stroke="#c8860a"
              strokeLinecap="round"
              strokeWidth="2"
              style={{ filter: "drop-shadow(0 0 14px rgba(200, 134, 10, 0.18))" }}
            />
          );
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,160,32,0.08),_transparent_60%)]" />
    </div>
  );
}
