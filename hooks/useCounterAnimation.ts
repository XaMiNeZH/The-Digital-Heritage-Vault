"use client";

import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function useCounterAnimation(inView: boolean, target: number, duration = 1.5) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(count, target, {
      duration,
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [count, duration, inView, target]);

  return rounded;
}
