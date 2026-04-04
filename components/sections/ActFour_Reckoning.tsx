"use client";

import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { registerGsap, gsap } from "@/lib/gsap-config";

const ThreadAnimation = dynamic(
  () => import("@/components/canvas/ThreadAnimation").then((module) => module.ThreadAnimation),
  { ssr: false }
);

export function ActFourReckoning() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();

      const ctx = gsap.context(() => {
        gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=200%",
            pin: stageRef.current,
            scrub: 1,
            anticipatePin: 1
          }
        })
          .fromTo(".reckoning-line-1", { opacity: 0, y: 30 }, { opacity: 0.6, y: 0, duration: 1 })
          .fromTo(".reckoning-line-2", { opacity: 0, y: 30 }, { opacity: 0.8, y: 0, duration: 1 }, ">0.35")
          .fromTo(
            ".reckoning-line-3",
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2 },
            ">0.3"
          );

        gsap.to(rootRef.current, {
          backgroundColor: "#1a2a14",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 2
          }
        });

        gsap.fromTo(
          orbRef.current,
          { xPercent: 12, yPercent: 18 },
          {
            xPercent: -10,
            yPercent: -20,
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 2
            }
          }
        );
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      id="act-reckoning"
      ref={rootRef}
      className="section-shell min-h-[100vh] bg-ash"
      data-cursor-theme="amber"
    >
      <div
        ref={stageRef}
        className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 lg:px-10"
      >
        <div
          ref={orbRef}
          className="absolute bottom-[-120px] right-[-120px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(232,160,32,0.15),_transparent_65%)] blur-3xl"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="chapter-tag self-start text-amber">ACT III — THE RECKONING</span>
          <div className="mt-16 space-y-6">
            <p className="reckoning-line-1 headline-display text-[clamp(3rem,6vw,4.2rem)] text-parchment">
              The same technology...
            </p>
            <p className="reckoning-line-2 headline-display text-[clamp(3rem,6vw,4.2rem)] italic text-parchment">
              ...that broke the chain...
            </p>
            <p
              className="reckoning-line-3 headline-display text-[clamp(4rem,9vw,7rem)] italic text-gold"
              style={{ textShadow: "0 0 80px rgba(232,160,32,0.3)" }}
            >
              chose to mend it.
            </p>
          </div>
          <div className="mt-14 space-y-4">
            <p className="body-copy text-xl text-sand">
              This is not a story about technology saving culture.
            </p>
            <p className="headline-display text-[clamp(1.5rem,2.8vw,2rem)] italic text-parchment">
              This is a story about technology earning that right.
            </p>
          </div>
          <div className="mt-14 w-full">
            <ThreadAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
