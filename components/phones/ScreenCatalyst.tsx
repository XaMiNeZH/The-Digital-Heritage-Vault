export function ScreenCatalyst() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="text-center">
        <p className="font-display text-[14px] text-parchment">The Catalyst</p>
        <p className="font-body text-[8px] uppercase tracking-[0.32em] text-sand/60">AI Companion</p>
      </div>
      <div className="space-y-2">
        <div className="max-w-[85%] rounded-[16px] rounded-tl-[4px] bg-white/5 px-3 py-2 text-[9px] leading-4 text-parchment">
          <span className="mb-1 block h-2 w-2 rounded-full bg-amber/70" />
          Welcome, Guardian. Which tradition shall we explore today?
        </div>
        <div className="ml-auto max-w-[78%] rounded-[16px] rounded-tr-[4px] bg-sage/35 px-3 py-2 text-right text-[9px] leading-4 text-parchment">
          Tell me about Tamazight weaving patterns
        </div>
        <div className="max-w-[88%] rounded-[16px] rounded-tl-[4px] bg-white/5 px-3 py-2 text-[9px] leading-4 text-parchment">
          Tamazight textile traditions carry encoded meaning in every geometric pattern. The diamond
          motif represents protection. Shall I show you the documentation archive?
        </div>
      </div>
      <div className="flex gap-2 pt-1 text-[8px] uppercase tracking-[0.18em] text-sand/80">
        <button className="rounded-full border border-amber/35 px-3 py-1" type="button">
          View Archive
        </button>
        <button className="rounded-full border border-amber/35 px-3 py-1" type="button">
          Start Recording
        </button>
      </div>
      <div className="mt-auto rounded-full border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-sand/45">
        Ask The Catalyst...
      </div>
    </div>
  );
}
