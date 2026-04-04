"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const chapters = [
  { id: "act-silence", label: "Silence" },
  { id: "act-evidence", label: "Evidence" },
  { id: "act-crime", label: "The Crime" },
  { id: "act-reckoning", label: "Reckoning" },
  { id: "act-solution", label: "Custodix" },
  { id: "act-app", label: "The App" },
  { id: "act-xfactor", label: "X-Factor" },
  { id: "act-promise", label: "The Promise" }
];

export function ChapterNav() {
  const [activeId, setActiveId] = useState(chapters[0].id);

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 z-[9996] hidden -translate-y-1/2 xl:block">
      <ul className="flex flex-col gap-[14px]">
        {chapters.map((chapter) => {
          const isActive = chapter.id === activeId;

          return (
            <li key={chapter.id} className="group relative">
              <button
                aria-label={`Go to ${chapter.label}`}
                className="flex items-center justify-end gap-3"
                onClick={() =>
                  document.getElementById(chapter.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  })
                }
                type="button"
              >
                <motion.span
                  className="pointer-events-none whitespace-nowrap font-body text-[10px] uppercase tracking-[0.35em] text-sand/80 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ x: isActive ? 0 : 8, opacity: isActive ? 1 : 0 }}
                >
                  {chapter.label}
                </motion.span>
                <motion.span
                  className="block h-[5px] w-[5px] rounded-full border border-amber/60 bg-amber/25"
                  animate={{
                    scale: isActive ? 1.6 : 1,
                    backgroundColor: isActive ? "rgba(200, 134, 10, 1)" : "rgba(200, 134, 10, 0.25)",
                    boxShadow: isActive ? "0 0 10px rgba(200, 134, 10, 0.8)" : "0 0 0 rgba(0,0,0,0)"
                  }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
