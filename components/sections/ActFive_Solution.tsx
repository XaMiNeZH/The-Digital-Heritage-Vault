"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    index: "01",
    title: "Living Language Modules",
    body: "AI-assisted voice recording and transcription that communities use to document their own language — in context, in story, in song. Not isolated vocabulary. Living speech."
  },
  {
    index: "02",
    title: "Craft Documentation Studio",
    body: "A guided video workflow where artisans record their techniques step by step. The output isn't a YouTube video — it's a structured knowledge file, linked to cultural context and oral explanation, preserved and owned by the community."
  },
  {
    index: "03",
    title: "The Story Web",
    body: "An interconnected oral history archive that maps relationships between objects, places, practices, and language. A user doesn't just hear a story — they see how it connects to a craft, a region, a ritual."
  }
];

export function ActFiveSolution() {
  return (
    <section
      id="act-solution"
      className="section-shell bg-[radial-gradient(ellipse_at_50%_50%,_rgba(200,134,10,0.08)_0%,_transparent_70%),_#0d1a0d]"
      data-cursor-theme="amber"
    >
      <div className="thread-grid absolute inset-0 opacity-60" />
      <div className="absolute left-0 top-0 h-full w-[34vw] opacity-10">
        <Image
          alt=""
          className="ambient-image object-cover"
          fill
          sizes="34vw"
          src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=75&auto=format"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-[16vh] lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="chapter-tag text-sage">ACT IV — THE SOLUTION</span>
            <h2 className="headline-display mt-10 text-[clamp(5rem,11vw,9rem)] text-parchment">
              Custodix.
            </h2>
            <p className="body-copy mt-8 max-w-xl text-[clamp(1.1rem,2.2vw,1.5rem)] italic text-sand">
              A community-first platform to preserve what the world is forgetting — on the
              communities&apos; own terms.
            </p>
          </motion.div>
          <div className="space-y-10">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="border-b border-amber/15 pb-10"
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="grid gap-5 lg:grid-cols-[88px_minmax(0,1fr)]">
                  <span className="stat-number text-6xl text-amber/25">{pillar.index}</span>
                  <div>
                    <h3 className="headline-display text-[1.8rem] text-parchment">{pillar.title}</h3>
                    <p className="body-copy mt-4 text-lg text-sand">{pillar.body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
