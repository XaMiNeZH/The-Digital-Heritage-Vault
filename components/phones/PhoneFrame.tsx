import { ReactNode } from "react";

import Reveal from "@/components/Reveal";

type PhoneFrameProps = {
  children: ReactNode;
  label: string;
  className?: string;
};

export function PhoneFrame({ children, label, className = "" }: PhoneFrameProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="phone-frame phone-gloss">
        <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-parchment/10" />
        <div className="absolute inset-[10px] rounded-[24px] border border-white/5 bg-[linear-gradient(180deg,_rgba(18,14,10,0.92),_rgba(8,6,4,0.96))]">
          {children}
        </div>
      </div>
      <Reveal delay={0.2} effect="rise">
        <p className="font-body text-[9px] uppercase tracking-[0.42em] text-clay">{label}</p>
      </Reveal>
    </div>
  );
}
