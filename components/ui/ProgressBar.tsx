"use client";

import { motion } from "framer-motion";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[9997] h-[2px] origin-left bg-[linear-gradient(90deg,_#a84422,_#c8860a,_#e8a020)]"
      style={{ scaleX: progress, width: "100%" }}
    />
  );
}
