"use client";

import { useInView } from "framer-motion";
import { RefObject, useMemo } from "react";

export function useInViewAnimation<T extends HTMLElement>(
  ref: RefObject<T>,
  amount = 0.2
) {
  const inView = useInView(ref, {
    once: true,
    amount
  });

  return useMemo(
    () => ({
      initial: "hidden" as const,
      animate: inView ? "visible" : "hidden"
    }),
    [inView]
  );
}
