"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionDividerProps = {
  className?: string;
};

export function SectionDivider({ className = "" }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  return (
    <div ref={ref} className={`relative h-px overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-y-0 left-0 bg-amber"
        initial={{ width: 0, opacity: 0.6 }}
        animate={inView ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0.6 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}
