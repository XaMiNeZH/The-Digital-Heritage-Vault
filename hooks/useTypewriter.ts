"use client";

import { useEffect, useMemo, useState } from "react";

type Beat = {
  text: string;
  pauseAfter?: number;
};

type TypewriterState = {
  displayText: string;
  isComplete: boolean;
};

export function useTypewriter(beats: Beat[], characterDelay = 55): TypewriterState {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const script = useMemo(
    () =>
      beats.flatMap((beat, beatIndex) => {
        const chars = beat.text.split("").map((character) => ({
          kind: "character" as const,
          value: character
        }));

        if (!beat.pauseAfter) {
          return chars;
        }

        return [
          ...chars,
          {
            kind: "pause" as const,
            value: beat.pauseAfter,
            beatIndex
          }
        ];
      }),
    [beats]
  );

  useEffect(() => {
    let timeoutId: number | undefined;
    let cursor = 0;

    const run = () => {
      if (cursor >= script.length) {
        setIsComplete(true);
        return;
      }

      const action = script[cursor];
      cursor += 1;

      if (action.kind === "character") {
        setDisplayText((current) => current + action.value);
        timeoutId = window.setTimeout(run, characterDelay);
        return;
      }

      timeoutId = window.setTimeout(run, action.value);
    };

    run();

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [characterDelay, script]);

  return { displayText, isComplete };
}
