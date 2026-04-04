import { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  label: string;
  tilt: number;
  emphasized?: boolean;
};

export function PhoneFrame({ children, label, tilt, emphasized = false }: PhoneFrameProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`phone-gloss relative overflow-hidden rounded-[30px] border border-amber/35 bg-[#0a0806] ${
          emphasized ? "h-[450px] w-[220px]" : "h-[420px] w-[200px]"
        }`}
        style={{
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.4), inset 0 0 30px rgba(0,0,0,0.4)",
          transform: `rotateY(${tilt}deg) translateZ(${emphasized ? "28px" : "0px"})`
        }}
      >
        <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-parchment/10" />
        <div className="absolute inset-[10px] rounded-[24px] border border-white/5 bg-[linear-gradient(180deg,_rgba(18,14,10,0.92),_rgba(8,6,4,0.96))]">
          {children}
        </div>
      </div>
      <p className="font-body text-[9px] uppercase tracking-[0.42em] text-clay">{label}</p>
    </div>
  );
}
