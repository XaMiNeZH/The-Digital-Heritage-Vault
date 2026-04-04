"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function HandsIcon() {
  return (
    <svg className="mx-auto h-8 w-8 text-amber" fill="none" viewBox="0 0 48 48">
      <path
        d="M10 28c2-4 5-6 8-6 3 0 5 2 7 6m13 0c-2-4-5-6-8-6-3 0-5 2-7 6m-9 2c2 4 6 8 10 8s8-4 10-8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ActSevenXFactor() {
  return (
    <section
      id="act-xfactor"
      className="section-shell bg-[radial-gradient(circle_at_center,_rgba(232,160,32,0.06),_transparent_55%),_#080705]"
      data-cursor-theme="amber"
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          alt=""
          className="ambient-image object-cover"
          fill
          sizes="100vw"
          src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=1200&q=75&auto=format"
        />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-[18vh] text-center lg:px-10">
        <span className="chapter-tag text-amber">THE X-FACTOR — TECHNOLOGY&apos;S APOLOGY</span>
        <motion.div
          className="mt-14 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="body-copy text-[1.2rem] italic text-sand/70">
            When a community elder opens Custodix for the first time,
          </p>
          <p className="body-copy text-[1.2rem] italic text-sand/70">they don&apos;t see a dashboard.</p>
          <p className="body-copy text-[1.2rem] italic text-sand/70">They see this:</p>
        </motion.div>
        <motion.div
          className="mx-auto mt-12 max-w-[480px] rounded-2xl border border-amber/25 bg-[#0f0c08] px-8 py-12 shadow-shrine"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 1, delay: 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="mx-auto mb-8 h-px w-10 bg-amber" />
          <div className="mb-6">
            <HandsIcon />
          </div>
          <h3 className="headline-display text-[1.8rem] text-parchment">Before we begin.</h3>
          <div className="body-copy mt-8 space-y-6 text-[1.05rem] leading-[2] text-parchment/85">
            <p>
              This tool was built by the same world
              <br />
              that nearly took your language from you.
            </p>
            <p>We know that.</p>
            <p>
              We are not here to take anything else.
              <br />
              Everything that follows belongs to you.
              <br />
              You decide what is shared.
              <br />
              You decide what is kept.
              <br />
              You decide what is forgotten.
            </p>
            <p>We are only here to help you hold it.</p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              className="rounded-full border border-amber px-6 py-3 font-body text-[10px] uppercase tracking-[0.34em] text-amber transition hover:bg-amber/10"
              type="button"
            >
              I understand. Continue.
            </button>
            <button
              className="font-body text-[10px] uppercase tracking-[0.34em] text-clay transition hover:text-sand"
              type="button"
            >
              Learn how we protect your data
            </button>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto mt-12 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="headline-display text-[1.3rem] italic text-sand">We call this The Acknowledgment.</p>
          <p className="body-copy mt-4 text-lg text-sand">
            It is not a legal disclaimer. It is not a marketing message. It is technology, for once,
            choosing to begin with humility instead of confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
