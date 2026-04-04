"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SectionDivider } from "@/components/ui/SectionDivider";

type StatCounterProps = {
  target: number;
  suffix?: string;
};

function StatCounter({ target, suffix = "" }: StatCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest))
    });

    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className="stat-number text-[clamp(5rem,10vw,8rem)] text-amber">
      {value}
      {suffix}
    </span>
  );
}

const strips = [
  {
    number: <StatCounter suffix="%" target={43} />,
    text: "of the world's 7,000 languages are currently endangered",
    source: "— UNESCO, 2024"
  },
  {
    number: (
      <div className="flex flex-col leading-none">
        <span className="font-body text-[12px] uppercase tracking-[0.4em] text-sand/70">Every</span>
        <span className="stat-number text-[clamp(5rem,10vw,8rem)] text-amber">2</span>
        <span className="font-body text-[12px] uppercase tracking-[0.4em] text-sand/70">Weeks</span>
      </div>
    ),
    text: "A language disappears. Not archived. Not replaced. Gone."
  },
  {
    number: <StatCounter suffix="%" target={90} />,
    text: "of all languages could vanish by 2100 at current rates",
    source: "— Living Tongues Institute"
  },
  {
    number: (
      <span className="stat-number text-[clamp(5rem,10vw,8rem)] text-amber">
        230<span className="text-[0.5em] align-top">+</span>
      </span>
    ),
    text: "languages have disappeared since 1950 alone"
  },
  {
    number: <StatCounter suffix="%" target={75} />,
    text: "of medicinal plant knowledge globally exists in only one language — when that language dies, the medicine dies",
    source: "— Journal of Ethnopharmacology, 2021"
  }
];

export function ActTwoEvidence() {
  return (
    <section
      id="act-evidence"
      className="section-shell overflow-hidden bg-[radial-gradient(ellipse_at_0%_100%,_rgba(107,63,30,0.25)_0%,_transparent_60%),_#100e0b]"
      data-cursor-theme="amber"
    >
      <div className="thread-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-[15vh] lg:px-10">
        <motion.span
          className="chapter-tag text-terracotta"
          initial={{ opacity: 0, x: -32 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          ACT I — THE EVIDENCE
        </motion.span>
        <motion.h2
          className="headline-display mt-10 max-w-4xl text-left text-[clamp(4rem,9vw,7.5rem)] text-parchment"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          The world is
          <br />
          forgetting <span className="italic text-amber">itself.</span>
        </motion.h2>
        <div className="mt-20 space-y-4">
          {strips.map((strip, index) => (
            <motion.article
              key={strip.text}
              className="soft-line grid gap-8 py-10 lg:grid-cols-[minmax(260px,34%)_1px_minmax(0,1fr)] lg:items-center"
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>{strip.number}</div>
              <div className="hidden h-24 bg-amber/60 lg:block" />
              <div>
                <p className="body-copy text-[clamp(1rem,2vw,1.4rem)] text-parchment">{strip.text}</p>
                {strip.source ? (
                  <p className="mt-4 font-body text-sm italic text-clay">{strip.source}</p>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
        <SectionDivider className="mt-16" />
      </div>
    </section>
  );
}
