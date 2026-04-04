"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useTypewriter } from "@/hooks/useTypewriter";

const ParticleSystem = dynamic(
  () => import("@/components/canvas/ParticleSystem").then((module) => module.ParticleSystem),
  { ssr: false }
);

const beats = [
  { text: "Every two weeks...\n", pauseAfter: 1500 },
  { text: "a language disappears.\n", pauseAfter: 1000 },
  { text: "Not evolves. Not changes.\n", pauseAfter: 800 },
  { text: "Disappears. Forever.", pauseAfter: 2000 }
];

export function ActOneSilence() {
  const { displayText, isComplete } = useTypewriter(beats, 55);
  const [seconds, setSeconds] = useState(0);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const interval = window.setInterval(() => {
      setSeconds((Date.now() - start) / 1000);
    }, 100);

    const onScroll = () => {
      setShowScrollPrompt(window.scrollY < 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="act-silence"
      className="section-shell relative min-h-[160vh] bg-black"
      data-cursor-theme="amber"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ParticleSystem />
        </div>
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <p className="headline-display whitespace-pre-line text-[clamp(2rem,5vw,3.8rem)] italic text-parchment/85">
            {displayText}
            <span className="ml-1 inline-block h-[0.95em] w-px animate-blink bg-amber align-middle" />
          </p>
          <motion.div
            animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 24 }}
            className="mt-12"
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-body text-[10px] uppercase tracking-[0.42em] text-clay">
              seconds since you opened this page
            </p>
            <p
              className="stat-number mt-4 text-[clamp(5rem,12vw,9rem)] text-amber"
              style={{ textShadow: "0 0 60px rgba(200,134,10,0.3)" }}
            >
              {seconds.toFixed(1)}
            </p>
            <p className="mt-4 font-body text-sm italic text-sand/55">
              Every 40 of these seconds, humanity loses a word it will never recover.
            </p>
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: showScrollPrompt ? 1 : 0, y: showScrollPrompt ? 0 : 20 }}
          className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
          transition={{ duration: 0.4 }}
        >
          <span className="font-body text-[9px] uppercase tracking-[0.5em] text-clay">scroll</span>
          <span className="mt-3 h-12 w-px origin-top animate-scroll-line bg-clay/70" />
        </motion.div>
      </div>
    </section>
  );
}
