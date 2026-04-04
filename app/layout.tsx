import type { Metadata } from "next";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { ChapterNav } from "@/components/ui/ChapterNav";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { VignetteOverlay } from "@/components/ui/VignetteOverlay";
import { bodyFont, displayFont, statFont } from "@/lib/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Custodix — The Digital Heritage Vault",
  description: "When Technology Made Culture Fade — And How It Chose to Make It Right",
  openGraph: {
    title: "Custodix",
    description: "A community-first digital preservation platform",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${displayFont.variable} ${bodyFont.variable} ${statFont.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="bg-black font-body text-parchment antialiased">
        <ProgressBar />
        <ChapterNav />
        <GrainOverlay />
        <VignetteOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
