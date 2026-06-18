import type { Metadata } from "next";

import { CustomCursor } from "@/components/ui/CustomCursor";
import { ChapterNav } from "@/components/ui/ChapterNav";
import { ProgressBar } from "@/components/ui/ProgressBar";
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
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: "none",
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Cfilter id=\'g\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23g)\'/%3E%3C/svg%3E")',
            opacity: 0.06,
            mixBlendMode: "overlay"
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            pointerEvents: "none",
            background: "radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(0,0,0,0.78) 100%)"
          }}
        />
        <ProgressBar />
        <ChapterNav />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
