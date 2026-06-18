"use client";

import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";

import { PhoneFrame } from "@/components/phones/PhoneFrame";
import { ScreenCatalyst } from "@/components/phones/ScreenCatalyst";
import { ScreenNexus } from "@/components/phones/ScreenNexus";
import { ScreenSentinel } from "@/components/phones/ScreenSentinel";

const WeavingCanvas = dynamic(
  () => import("@/components/canvas/WeavingCanvas").then((module) => module.WeavingCanvas),
  { ssr: false }
);

export function ActSixApp() {
  return (
    <section
      id="act-app"
      className="section-shell bg-[radial-gradient(circle_at_center,_rgba(200,134,10,0.12),_transparent_38%),_#100e0b]"
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
            filter: "sepia(0.6) brightness(0.12) contrast(1.18)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(170deg, rgba(8,6,4,0.8) 0%, rgba(8,6,4,0.7) 100%)"
          }}
        />
        <div className="woven-grid absolute inset-0" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-[15vh] lg:px-10">
        <div className="text-center">
          <Reveal effect="wipe">
            <span className="chapter-tag text-amber">ACT V — THE APP</span>
          </Reveal>
          <Reveal delay={0.15} effect="curtain">
            <h2 className="headline-display mx-auto mt-10 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] italic text-parchment">
              Built for the hands of guardians.
            </h2>
          </Reveal>
        </div>
        <div className="phones-container mt-20">
          <Reveal delay={0} effect="emerge">
            <PhoneFrame className="phone-left" label="The Nexus">
              <ScreenNexus />
            </PhoneFrame>
          </Reveal>
          <Reveal delay={0.2} effect="emerge">
            <PhoneFrame className="phone-center" label="The Sentinel">
              <ScreenSentinel />
            </PhoneFrame>
          </Reveal>
          <Reveal delay={0.4} effect="emerge">
            <PhoneFrame className="phone-right" label="The Catalyst">
              <ScreenCatalyst />
            </PhoneFrame>
          </Reveal>
        </div>
        <div className="mt-20">
          <Reveal delay={0.6} effect="rise">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px flex-1 bg-amber/20" />
              <span className="font-body text-[10px] uppercase tracking-[0.42em] text-sand/70">
                Woven Knowledge
              </span>
              <span className="h-px flex-1 bg-amber/20" />
            </div>
          </Reveal>
          <Reveal delay={0.7} effect="emerge">
            <div className="h-[220px] overflow-hidden rounded-[28px] border border-amber/15 bg-black/20">
              <WeavingCanvas />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
