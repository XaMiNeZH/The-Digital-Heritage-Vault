import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        charcoal: "var(--charcoal)",
        ash: "var(--ash)",
        earth: "var(--earth)",
        clay: "var(--clay)",
        amber: "var(--amber)",
        gold: "var(--gold)",
        flame: "var(--flame)",
        terracotta: "var(--terracotta)",
        sand: "var(--sand)",
        parchment: "var(--parchment)",
        cream: "var(--cream)",
        "forest-deep": "var(--forest-deep)",
        forest: "var(--forest)",
        sage: "var(--sage)",
        mint: "var(--mint)",
        smoke: "var(--smoke)"
      },
      fontFamily: {
        display: "var(--font-im-fell)",
        body: "var(--font-crimson)",
        stat: "var(--font-cormorant)"
      },
      boxShadow: {
        ember: "0 0 40px rgba(200, 134, 10, 0.24)",
        shrine: "0 60px 120px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 0, 0, 0.4)"
      },
      backgroundImage: {
        weave:
          "linear-gradient(rgba(232, 160, 32, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 160, 32, 0.04) 1px, transparent 1px)"
      },
      keyframes: {
        flicker: {
          "0%, 92%, 100%": { opacity: "0" },
          "93%, 94%": { opacity: "0.35" },
          "95%, 99%": { opacity: "0" }
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "25%": { transform: "scaleY(1)", opacity: "1" },
          "85%": { transform: "scaleY(1)", opacity: "0.3" },
          "100%": { transform: "scaleY(0)", opacity: "0" }
        },
        shimmer: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" }
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(200, 134, 10, 0.35), 0 0 40px rgba(200, 134, 10, 0.2)"
          },
          "70%": {
            boxShadow: "0 0 0 20px rgba(200, 134, 10, 0), 0 0 60px rgba(200, 134, 10, 0.35)"
          }
        },
        slowDrift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-3%, -5%, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" }
        }
      },
      animation: {
        flicker: "flicker 6s infinite",
        blink: "blink 1s steps(1) infinite",
        "scroll-line": "scrollLine 2.2s infinite",
        shimmer: "shimmer 3.8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s infinite",
        "slow-drift": "slowDrift 14s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
