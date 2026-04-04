"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

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
      <div className="relative mx-auto max-w-7xl px-6 py-[15vh] lg:px-10">
        <div className="text-center">
          <span className="chapter-tag text-amber">ACT V — THE APP</span>
          <h2 className="headline-display mx-auto mt-10 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] italic text-parchment">
            Built for the hands of guardians.
          </h2>
        </div>
        <div className="mt-20 [perspective:1800px]">
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-end">
            {[
              {
                component: <ScreenNexus />,
                emphasized: false,
                label: "The Nexus",
                tilt: 12
              },
              {
                component: <ScreenSentinel />,
                emphasized: true,
                label: "The Sentinel",
                tilt: 0
              },
              {
                component: <ScreenCatalyst />,
                emphasized: false,
                label: "The Catalyst",
                tilt: -12
              }
            ].map((phone, index) => (
              <motion.div
                key={phone.label}
                initial={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.9, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <PhoneFrame emphasized={phone.emphasized} label={phone.label} tilt={phone.tilt}>
                  {phone.component}
                </PhoneFrame>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px flex-1 bg-amber/20" />
            <span className="font-body text-[10px] uppercase tracking-[0.42em] text-sand/70">
              Woven Knowledge
            </span>
            <span className="h-px flex-1 bg-amber/20" />
          </div>
          <div className="h-[220px] overflow-hidden rounded-[28px] border border-amber/15 bg-black/20">
            <WeavingCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
