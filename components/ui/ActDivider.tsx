"use client";

import Reveal from "@/components/Reveal";

export function ActDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem 0",
        background: "rgba(6,4,3,0.95)",
        position: "relative",
        zIndex: 2
      }}
    >
      <Reveal effect="wipe">
        <div style={{ width: "80px", height: "1px", background: "rgba(200,134,10,0.2)" }} />
      </Reveal>
      <Reveal delay={0.05} effect="rise">
        <div style={{ fontSize: "8px", color: "rgba(200,134,10,0.4)", letterSpacing: "0.15em" }}>✦</div>
      </Reveal>
      <Reveal effect="wipe">
        <div style={{ width: "80px", height: "1px", background: "rgba(200,134,10,0.2)" }} />
      </Reveal>
    </div>
  );
}
