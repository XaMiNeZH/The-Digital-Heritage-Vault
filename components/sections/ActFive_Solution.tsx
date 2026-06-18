"use client";

import Reveal from "@/components/Reveal";

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
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <img
          alt=""
          src="/gilded-ceiling.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "sepia(0.48) brightness(0.15) contrast(1.08) saturate(0.85)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 100%, rgba(13,20,10,0.5) 0%, rgba(13,20,10,0.88) 70%)"
          }}
        />
        <div className="woven-grid absolute inset-0" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-[16vh] lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)]">
          <div>
            <Reveal effect="wipe">
              <span className="chapter-tag text-sage">ACT IV — THE SOLUTION</span>
            </Reveal>
            <Reveal delay={0.15} effect="curtain">
              <h2 className="headline-display mt-10 text-[clamp(5rem,11vw,9rem)] text-parchment">
                Custodix.
              </h2>
            </Reveal>
            <Reveal delay={0.3} effect="rise">
              <p className="body-copy mt-8 max-w-xl text-[clamp(1.1rem,2.2vw,1.5rem)] italic text-sand">
                A community-first platform to preserve what the world is forgetting — on the
                communities&apos; own terms.
              </p>
            </Reveal>
          </div>
          <div className="space-y-10">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="border-b border-amber/15 pb-10">
                <div className="grid gap-5 lg:grid-cols-[88px_minmax(0,1fr)]">
                  <Reveal delay={index * 0.18} effect="curtain">
                    <span className="stat-number text-6xl text-amber/25">{pillar.index}</span>
                  </Reveal>
                  <div>
                    <Reveal delay={index * 0.18 + 0.1} effect="rise">
                      <h3 className="headline-display text-[1.8rem] text-parchment">{pillar.title}</h3>
                    </Reveal>
                    <Reveal delay={index * 0.18 + 0.18} effect="rise">
                      <p className="body-copy mt-4 text-lg text-sand">{pillar.body}</p>
                    </Reveal>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
