"use client";

import Reveal from "@/components/Reveal";

const commitments = [
  {
    index: "01",
    title: "Community Sovereignty Protocol",
    body: "Every community controls their own data vault. They decide what is public, what is shared only within the community, and what is permanently private. We never override this."
  },
  {
    index: "02",
    title: "No Commercial Extraction",
    body: "Content uploaded to our platform cannot be licensed, sold, or used for AI training without explicit, renewed community consent — not a one-time checkbox."
  },
  {
    index: "03",
    title: "Co-Design, Not Consultation",
    body: "We did not build this platform and then ask communities if they liked it. We built it with pilot communities from the start — their feedback shaped the architecture."
  }
];

const closingLines = [
  "We are living at a unique intersection.",
  "For the first time in history, we have tools powerful enough\nto preserve culture at global scale.",
  "And we are simultaneously watching culture disappear\nat its fastest rate ever.",
  "That is not a coincidence.\nThat is a consequence.",
  "Will we choose to build technology\nthat repairs what it broke?"
];

export function ActEightPromise() {
  return (
    <section
      id="act-promise"
      className="section-shell bg-[#060503]"
      data-cursor-theme="amber"
      style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <img
          alt=""
          src="/school-of-athens.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            filter: "sepia(0.9) brightness(0.09) contrast(1.28)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(6,4,3,0.8) 0%, rgba(6,4,3,0.75) 50%, rgba(6,4,3,0.95) 100%)"
          }}
        />
        <div className="woven-grid absolute inset-0" />
      </div>

      <div className="relative z-[1] mx-auto max-w-6xl px-6 py-[16vh] lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <Reveal effect="wipe">
              <span className="chapter-tag text-terracotta">THE ETHICAL DEFENSE</span>
            </Reveal>
            <Reveal delay={0.15} effect="curtain">
              <h2 className="headline-display mt-10 text-[clamp(2.5rem,6vw,4.5rem)] italic text-parchment">
                Every solution carries a shadow.
              </h2>
            </Reveal>
            <Reveal delay={0.3} effect="rise">
              <p className="body-copy mt-6 max-w-2xl text-lg text-sand">
                Digital preservation can become digital extraction. We designed our platform to confront
                this directly.
              </p>
            </Reveal>
          </div>
          <div className="space-y-8">
            {commitments.map((commitment, index) => (
              <article key={commitment.title} className="border-b border-amber/10 pb-8">
                <div className="flex items-start gap-4">
                  <Reveal delay={index * 0.2} effect="wipe">
                    <span className="mt-2 inline-flex items-center gap-2 text-[8px] text-amber">
                      ◆
                      <span className="stat-number text-[2rem] text-amber/20">{commitment.index}</span>
                    </span>
                  </Reveal>
                  <div>
                    <Reveal delay={index * 0.2 + 0.1} effect="curtain">
                      <h3 className="headline-display text-[1.35rem] text-parchment">{commitment.title}</h3>
                    </Reveal>
                    <Reveal delay={index * 0.2 + 0.18} effect="rise">
                      <p className="body-copy mt-3 text-base text-sand">{commitment.body}</p>
                    </Reveal>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-4xl text-center">
          <div className="space-y-8">
            {closingLines.map((line, index) => (
              <Reveal key={line} delay={index * 0.28} effect="curtain">
                <p
                  className={`headline-display whitespace-pre-line italic ${
                    index === 2
                      ? "text-terracotta"
                      : index === 3
                        ? "text-amber"
                        : index === 4
                          ? "text-gold"
                          : "text-parchment"
                  } ${
                    index === 4
                      ? "text-[clamp(3rem,7vw,6rem)]"
                      : index === 3
                        ? "text-[clamp(2rem,5vw,4rem)]"
                        : "text-[clamp(1.8rem,4vw,3rem)]"
                  }`}
                  style={
                    index === 4
                      ? { textShadow: "0 0 120px rgba(232,160,32,0.25)", maxWidth: "900px", margin: "0 auto" }
                      : index === 3
                        ? { textShadow: "0 0 60px rgba(200,134,10,0.3)" }
                        : undefined
                  }
                >
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal effect="wipe">
            <div className="mx-auto mt-20 h-px w-[40%] bg-amber/80" />
          </Reveal>
          <Reveal delay={1.0} effect="emerge">
            <p className="headline-display mt-12 text-[clamp(3rem,8vw,6rem)] text-parchment">Custodix.</p>
          </Reveal>
          <Reveal delay={1.25} effect="rise">
            <p className="body-copy mt-4 text-[1.2rem] italic tracking-[0.15em] text-sand">
              Hold it. Share it. Pass it on.
            </p>
          </Reveal>
          <Reveal delay={1.5} effect="rise">
            <p className="mt-8 font-body text-[10px] uppercase tracking-[0.3em] text-clay/70">
              Group 6 · ENSET Mohammedia · 1ère GLSID · 2025–2026
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
