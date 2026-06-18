"use client";

import Reveal from "@/components/Reveal";

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
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <img
          alt=""
          src="/school-of-athens.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 60%",
            filter: "brightness(0.11) contrast(1.32) sepia(0.48)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 60%, rgba(12,8,5,0.5) 0%, rgba(12,8,5,0.93) 100%)"
          }}
        />
        <div className="woven-grid absolute inset-0" />
        <div className="absolute inset-x-0 top-16 h-[2px] animate-flicker bg-terracotta/35" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-[16vh] text-center lg:px-10">
        <Reveal effect="wipe">
          <span className="chapter-tag text-terracotta">ACT II — THE CRIME</span>
        </Reveal>
        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          <Reveal delay={0.15} effect="curtain">
            <p className="headline-display text-[clamp(2.5rem,6vw,5rem)] italic text-parchment">
              The villain didn&apos;t carry a weapon.
            </p>
          </Reveal>
          <Reveal delay={0.3} effect="curtain">
            <p className="headline-display text-[clamp(2.5rem,6vw,5rem)] italic text-terracotta">
              It carried an algorithm.
            </p>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-12 text-left lg:grid-cols-[0.95fr_1.08fr_0.9fr]">
          {columns.map((column, index) => (
            <div key={column.title}>
              <Reveal delay={index * 0.15} effect="rise">
                <div className="mb-5">{column.icon}</div>
              </Reveal>
              <Reveal delay={index * 0.15} effect="wipe">
                <p className="font-body text-[10px] uppercase tracking-[0.42em] text-clay">{column.title}</p>
              </Reveal>
              <Reveal delay={index * 0.15 + 0.1} effect="curtain">
                <h3 className="headline-display mt-4 text-[clamp(1.6rem,3vw,2.25rem)] text-parchment">
                  {column.stat}
                </h3>
              </Reveal>
              <Reveal delay={index * 0.15 + 0.18} effect="rise">
                <p className="body-copy mt-5 text-lg text-sand">{column.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
        <Reveal delay={0.25} effect="drift">
          <blockquote className="mx-auto mt-24 max-w-3xl border-l-[3px] border-terracotta pl-10 text-left">
            <p className="headline-display text-[clamp(1.4rem,3vw,2.2rem)] italic leading-[1.5] text-parchment/75">
              Technology didn&apos;t set out to erase culture.
              <br />
              But it built a system where speed, scale, and uniformity won —
              <br />
              and culture, which is slow, local, and deeply human,
              <br />
              could not compete.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
