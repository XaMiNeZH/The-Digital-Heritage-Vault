"use client";

import Reveal from "@/components/Reveal";

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
  const acknowledgmentParagraphs = [
    <>
      This tool was built by the same world
      <br />
      that nearly took your language from you.
    </>,
    <>We know that.</>,
    <>
      We are not here to take anything else.
      <br />
      Everything that follows belongs to you.
      <br />
      You decide what is shared.
      <br />
      You decide what is kept.
      <br />
      You decide what is forgotten.
    </>,
    <>We are only here to help you hold it.</>
  ];

  return (
    <section
      id="act-xfactor"
      className="section-shell bg-[radial-gradient(circle_at_center,_rgba(232,160,32,0.06),_transparent_55%),_#080705]"
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
            filter: "brightness(0.08) contrast(1.35) sepia(0.24)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 35%, rgba(6,4,3,0.5) 0%, rgba(6,4,3,0.96) 75%)"
          }}
        />
        <div className="woven-grid absolute inset-0" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-[18vh] text-center lg:px-10">
        <Reveal effect="wipe">
          <span className="chapter-tag text-amber">THE X-FACTOR — TECHNOLOGY&apos;S APOLOGY</span>
        </Reveal>
        <div className="mt-14 space-y-4">
          <Reveal delay={0.2} effect="rise">
            <p className="body-copy text-[1.2rem] italic text-sand/70">
              When a community elder opens Custodix for the first time,
            </p>
          </Reveal>
          <Reveal delay={0.4} effect="rise">
            <p className="body-copy text-[1.2rem] italic text-sand/70">they don&apos;t see a dashboard.</p>
          </Reveal>
          <Reveal delay={0.6} effect="rise">
            <p className="body-copy text-[1.2rem] italic text-sand/70">They see this:</p>
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-12 w-full max-w-[520px]" delay={0.5} effect="emerge">
          <div
            style={{
              background: "linear-gradient(155deg, #0e0a06 0%, #090705 100%)",
              border: "1px solid rgba(200,134,10,0.16)",
              borderRadius: "3px",
              padding: "clamp(3rem, 5vw, 5rem) clamp(2.5rem, 4vw, 4.5rem)",
              maxWidth: "520px",
              width: "100%",
              margin: "0 auto",
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.8), 0 80px 160px rgba(0,0,0,0.9), inset 0 0 80px rgba(0,0,0,0.4)",
              position: "relative"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "rgba(200,134,10,0.45)",
                margin: "0 auto 2.5rem"
              }}
            />
          <div className="mb-6">
            <HandsIcon />
          </div>
          <Reveal delay={0.7} effect="rise">
            <h3
              style={{
                fontFamily: '"IM Fell English", serif',
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                fontWeight: "normal",
                color: "#e8d4b0",
                textAlign: "center",
                marginBottom: "2.5rem",
                letterSpacing: "0.01em"
              }}
            >
              Before we begin.
            </h3>
          </Reveal>
          <div className="mt-8">
            {acknowledgmentParagraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.7 + index * 0.22} effect="rise">
                <p
                  style={{
                    fontFamily: '"Crimson Pro", serif',
                    fontWeight: 300,
                    fontSize: "1.1rem",
                    lineHeight: 2.1,
                    color: "rgba(232,212,176,0.8)",
                    marginBottom: "1.4rem",
                    textAlign: "center",
                    fontStyle: index === 0 || index === 2 ? "italic" : "normal"
                  }}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10" delay={1.5} effect="rise">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                className="border border-amber px-6 py-3 font-body text-[10px] uppercase tracking-[0.34em] text-amber transition hover:bg-amber/10"
                type="button"
                style={{ borderRadius: "0px" }}
              >
                I understand. Continue.
              </button>
              <button
                className="font-body text-[10px] uppercase tracking-[0.34em] text-clay underline transition hover:text-sand"
                type="button"
              >
                Learn how we protect your data
              </button>
            </div>
          </Reveal>
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "rgba(200,134,10,0.3)",
                margin: "2.5rem auto 2rem"
              }}
            />
          </div>
        </Reveal>
        <div className="mx-auto mt-12 max-w-2xl">
          <Reveal delay={0.3} effect="rise">
            <p className="headline-display text-[1.3rem] italic text-sand">We call this The Acknowledgment.</p>
          </Reveal>
          <Reveal delay={0.5} effect="rise">
            <p className="body-copy mt-4 text-lg text-sand">
              It is not a legal disclaimer. It is not a marketing message. It is technology, for once,
              choosing to begin with humility instead of confidence.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
