function GlobeGlyph() {
  return (
    <svg className="h-24 w-24" viewBox="0 0 100 100">
      <defs>
        <radialGradient id="globe" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#214038" />
          <stop offset="100%" stopColor="#0a1514" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" fill="url(#globe)" opacity="0.96" r="42" stroke="#c8860a" strokeOpacity="0.45" />
      <path d="M25 44 C36 28, 62 28, 74 42" fill="none" stroke="#c8860a" strokeOpacity="0.5" />
      <path d="M28 60 C40 54, 58 57, 73 50" fill="none" stroke="#c8860a" strokeOpacity="0.6" />
      <path d="M45 15 C35 35, 38 69, 48 84" fill="none" stroke="#d7a64d" strokeOpacity="0.4" />
      <path d="M58 18 C62 34, 61 62, 54 84" fill="none" stroke="#d7a64d" strokeOpacity="0.35" />
    </svg>
  );
}

export function ScreenNexus() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-amber/80">
        <span className="font-stat">CUSTODIX</span>
        <span className="h-5 w-5 rounded-full border border-amber/20 bg-white/5" />
      </div>
      <div className="rounded-[22px] border border-amber/15 bg-[linear-gradient(180deg,_rgba(18,31,28,0.82),_rgba(10,17,15,0.92))] px-4 py-5">
        <div className="flex justify-center">
          <div className="animate-[spin_30s_linear_infinite]">
            <GlobeGlyph />
          </div>
        </div>
        <p className="mt-2 text-center font-body text-[9px] uppercase tracking-[0.35em] text-sand/70">
          Cultural Risk Map — Live
        </p>
      </div>
      <div className="space-y-2">
        <div className="rounded-[18px] border border-amber/15 bg-white/5 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-amber/25" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-body text-[10px] text-parchment">Tamazight — Morocco</p>
              <p className="font-body text-[8px] uppercase tracking-[0.28em] text-terracotta">Urgent</p>
            </div>
          </div>
        </div>
        <div className="rounded-[18px] border border-sage/20 bg-white/5 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-sage/25" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-body text-[10px] text-parchment">Fez Zellij Craft</p>
              <p className="font-body text-[8px] uppercase tracking-[0.28em] text-mint">New</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto flex items-end justify-between border-t border-amber/10 pt-3 text-[8px] uppercase tracking-[0.24em] text-sand/70">
        {["home", "explore", "record", "learn", "profile"].map((tab, index) => (
          <div key={tab} className="flex flex-col items-center gap-1">
            <span className="h-3 w-3 rounded-full border border-amber/20 bg-white/5" />
            <span>{tab}</span>
            <span className={`h-px w-5 ${index === 0 ? "bg-amber" : "bg-transparent"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
