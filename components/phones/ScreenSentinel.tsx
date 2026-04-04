export function ScreenSentinel() {
  return (
    <div className="flex h-full flex-col gap-4 p-5">
      <div className="text-center">
        <p className="font-body text-[10px] text-sand/70">← Back</p>
        <p className="mt-1 font-display text-[14px] text-parchment">The Sentinel</p>
        <p className="mt-1 font-body text-[8px] uppercase tracking-[0.38em] text-sand/60">
          Document a Memory
        </p>
      </div>
      <div className="flex justify-center gap-2 text-[8px] uppercase tracking-[0.18em]">
        {["Oral History", "Craft", "Language"].map((mode, index) => (
          <span
            key={mode}
            className={`rounded-full px-3 py-1 ${
              index === 0 ? "bg-amber text-charcoal" : "border border-amber/35 text-sand/80"
            }`}
          >
            {mode}
          </span>
        ))}
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,_#e8a020,_#a84422)] animate-pulse-glow">
          <div className="h-7 w-7 rounded-full bg-cream/95" />
        </div>
      </div>
      <div className="space-y-3">
        {["Region", "Language/Craft Name", "Cultural Context"].map((field) => (
          <div key={field} className="border-b border-amber/30 pb-2">
            <p className="font-body text-[8px] uppercase tracking-[0.32em] text-sand/55">{field}</p>
          </div>
        ))}
      </div>
      <p className="mt-auto text-center font-body text-[8px] italic leading-4 text-sand/70">
        This memory will be stored in your community&apos;s private vault.
      </p>
    </div>
  );
}
