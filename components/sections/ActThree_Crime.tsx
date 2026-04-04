"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const columns = [
  {
    title: "Language",
    stat: "60% of all web content is in English",
    text: "Out of 7,000 languages. One dominates. The rest starve for digital oxygen.",
    icon: (
      <svg className="h-10 w-10 text-terracotta" fill="none" viewBox="0 0 64 64">
        <path d="M8 34c6-8 11-12 16-12s10 4 16 12 11 12 16 12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 42h40" stroke="currentColor" strokeDasharray="3 4" strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "Craft",
    stat: "Mass production killed the market",
    text: "When a factory can make in minutes what takes an artisan months, the artisan cannot compete.",
    icon: (
      <svg className="h-10 w-10 text-terracotta" fill="none" viewBox="0 0 64 64">
        <path d="M18 18c4 2 6 8 6 14v10M46 18c-4 2-6 8-6 14v10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 46c4 0 8-2 16-2s12 2 16 2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "Memory",
    stat: "Short-form content replaced oral storytelling",
    text: "The 60-second world has no patience for a grandmother's story.",
    icon: (
      <svg className="h-10 w-10 text-terracotta" fill="none" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M44 20 20 44" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
];

export function ActThreeCrime() {
  return (
    <section
      id="act-crime"
      className="section-shell bg-[radial-gradient(circle_at_top_left,_rgba(107,63,30,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,68,34,0.16),_transparent_40%),#1a1612]"
      data-cursor-theme="amber"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-16 h-[2px] animate-flicker bg-terracotta/35" />
        <div className="absolute right-0 top-0 h-full w-[42vw] opacity-10">
          <Image
            alt=""
            className="ambient-image object-cover"
            fill
            sizes="42vw"
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=75&auto=format"
          />
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-[16vh] text-center lg:px-10">
        <span className="chapter-tag text-terracotta">ACT II — THE CRIME</span>
        <motion.div
          className="mx-auto mt-12 max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="headline-display text-[clamp(2.5rem,6vw,5rem)] italic text-parchment">
            The villain didn&apos;t carry a weapon.
          </p>
          <p className="headline-display text-[clamp(2.5rem,6vw,5rem)] italic text-terracotta">
            It carried an algorithm.
          </p>
        </motion.div>
        <div className="mt-20 grid gap-12 text-left lg:grid-cols-3">
          {columns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.14 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mb-5">{column.icon}</div>
              <p className="font-body text-[10px] uppercase tracking-[0.42em] text-clay">{column.title}</p>
              <h3 className="headline-display mt-4 text-[clamp(1.6rem,3vw,2.25rem)] text-parchment">
                {column.stat}
              </h3>
              <p className="body-copy mt-5 text-lg text-sand">{column.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.blockquote
          className="mx-auto mt-24 max-w-3xl border-l-[3px] border-terracotta pl-10 text-left"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true, amount: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="headline-display text-[clamp(1.4rem,3vw,2.2rem)] italic leading-[1.5] text-parchment/75">
            Technology didn&apos;t set out to erase culture.
            <br />
            But it built a system where speed, scale, and uniformity won —
            <br />
            and culture, which is slow, local, and deeply human,
            <br />
            could not compete.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
