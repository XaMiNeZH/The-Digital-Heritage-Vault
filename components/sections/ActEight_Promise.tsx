"use client";

import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { useRef } from "react";

import { registerGsap, gsap } from "@/lib/gsap-config";

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

export function ActEightPromise() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();

      const ctx = gsap.context(() => {
        gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".closing-sequence",
            start: "top 75%",
            end: "bottom 30%",
            scrub: 1
          }
        })
          .fromTo(".closing-line-1", { opacity: 0.2, y: 20 }, { opacity: 0.7, y: 0 })
          .fromTo(".closing-line-2", { opacity: 0.15, y: 20 }, { opacity: 0.92, y: 0 }, ">0.18")
          .fromTo(".closing-line-3", { opacity: 0.15, y: 20 }, { opacity: 0.92, y: 0 }, ">0.18")
          .fromTo(".closing-line-4", { opacity: 0.15, y: 20 }, { opacity: 1, y: 0 }, ">0.18")
          .fromTo(".closing-line-5", { opacity: 0.15, y: 24 }, { opacity: 1, y: 0 }, ">0.2");
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      id="act-promise"
      ref={rootRef}
      className="section-shell bg-[#060503]"
      data-cursor-theme="amber"
    >
      <div className="mx-auto max-w-6xl px-6 py-[16vh] lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <span className="chapter-tag text-terracotta">THE ETHICAL DEFENSE</span>
            <h2 className="headline-display mt-10 text-[clamp(2.5rem,6vw,4.5rem)] italic text-parchment">
              Every solution carries a shadow.
            </h2>
            <p className="body-copy mt-6 max-w-2xl text-lg text-sand">
              Digital preservation can become digital extraction. We designed our platform to confront
              this directly.
            </p>
          </div>
          <div className="space-y-8">
            {commitments.map((commitment, index) => (
              <motion.article
                key={commitment.title}
                className="border-b border-amber/10 pb-8"
                initial={{ opacity: 0, y: 32 }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-2 text-[8px] text-amber">◆</span>
                  <span className="stat-number text-[2rem] text-amber/20">{commitment.index}</span>
                  <div>
                    <h3 className="headline-display text-[1.35rem] text-parchment">{commitment.title}</h3>
                    <p className="body-copy mt-3 text-base text-sand">{commitment.body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="closing-sequence mx-auto mt-28 max-w-4xl text-center">
          <div className="space-y-8">
            <p className="closing-line-1 headline-display text-[clamp(1.8rem,4vw,3rem)] italic text-parchment">
              We are living at a unique intersection.
            </p>
            <p className="closing-line-2 headline-display text-[clamp(1.8rem,4vw,3rem)] italic text-parchment">
              For the first time in history, we have tools powerful enough
              <br />
              to preserve culture at global scale.
            </p>
            <p className="closing-line-3 headline-display text-[clamp(1.8rem,4vw,3rem)] italic text-terracotta">
              And we are simultaneously watching culture disappear
              <br />
              at its fastest rate ever.
            </p>
            <p
              className="closing-line-4 headline-display text-[clamp(2rem,5vw,4rem)] italic text-amber"
              style={{ textShadow: "0 0 60px rgba(200,134,10,0.3)" }}
            >
              That is not a coincidence.
              <br />
              That is a consequence.
            </p>
            <p
              className="closing-line-5 headline-display text-[clamp(2.5rem,6vw,4.5rem)] italic text-gold"
              style={{ textShadow: "0 0 100px rgba(232,160,32,0.2)" }}
            >
              Will we choose to build technology
              <br />
              that repairs what it broke?
            </p>
          </div>
          <div className="mx-auto mt-20 h-px w-[40%] bg-amber/80" />
          <p className="headline-display mt-12 text-[clamp(3rem,8vw,6rem)] text-parchment">Custodix.</p>
          <p className="body-copy mt-4 text-[1.2rem] italic tracking-[0.15em] text-sand">
            Hold it. Share it. Pass it on.
          </p>
          <p className="mt-8 font-body text-[10px] uppercase tracking-[0.3em] text-clay/70">
            Group 6 · ENSET Mohammedia · 1ère GLSID · 2025–2026
          </p>
        </div>
      </div>
    </section>
  );
}
