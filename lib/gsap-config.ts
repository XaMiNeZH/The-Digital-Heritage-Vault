"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let configured = false;

export function registerGsap() {
  if (configured || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger, useGSAP);
  configured = true;
}

export { gsap, ScrollTrigger };
