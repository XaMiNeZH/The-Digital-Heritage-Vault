"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Reveal from "@/components/Reveal";
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
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <img
          alt=""
          src="/school-of-athens.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 48%",
            filter: "sepia(0.8) brightness(0.13) contrast(1.18) saturate(0.55)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(160deg, rgba(10,7,4,0.76) 0%, rgba(10,7,4,0.92) 100%)"
          }}
        />
        <div className="woven-grid absolute inset-0" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-[15vh] lg:px-10">
        <Reveal effect="wipe">
          <span className="chapter-tag text-terracotta">ACT I — THE EVIDENCE</span>
        </Reveal>
        <div className="mt-10 max-w-4xl text-left text-[clamp(4rem,9vw,7.5rem)] text-parchment">
          <Reveal delay={0.15} effect="curtain">
            <h2 className="headline-display">The world is</h2>
          </Reveal>
          <Reveal delay={0.25} effect="curtain">
            <h2 className="headline-display">
              forgetting <span className="italic text-amber">itself.</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-20 space-y-4">
          {strips.map((strip, index) => (
            <div
              key={strip.text}
              className="grid gap-y-6 py-[2.8rem] lg:grid-cols-[260px_1px_1fr] lg:items-center lg:gap-x-12"
              style={{ borderBottom: "1px solid rgba(200,134,10,0.1)" }}
            >
              <Reveal delay={index * 0.12} effect="curtain">
                <div>{strip.number}</div>
              </Reveal>
              <div
                className="hidden w-px self-center lg:block"
                style={{
                  height: "60%",
                  background: "linear-gradient(to bottom, transparent, rgba(200,134,10,0.35), transparent)"
                }}
              />
              <div>
                <Reveal delay={index * 0.12 + 0.1} effect="rise">
                  <p className="body-copy text-[clamp(1.05rem,2vw,1.35rem)] text-sand/85">{strip.text}</p>
                </Reveal>
                {strip.source ? (
                  <Reveal delay={index * 0.12 + 0.18} effect="rise">
                    <p className="mt-4 font-body text-[0.8rem] italic tracking-[0.05em] text-sand/35">
                      {strip.source}
                    </p>
                  </Reveal>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <Reveal className="mt-16" effect="wipe">
          <SectionDivider />
        </Reveal>
      </div>
    </section>
  );
}
