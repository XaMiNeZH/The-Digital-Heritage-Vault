# CUSTODIX — AI Agent Build Prompt
## Full Specification: Scroll-Driven Cinematic Presentation Website

---

> **READ THIS BEFORE YOU WRITE A SINGLE LINE OF CODE.**
> This is not a website. This is a theatrical performance rendered in a browser. It will be displayed full-screen in front of a classroom as the visual backdrop to a live speech. It must be breathtaking — a senior creative studio level of craft. Every other group will submit basic slides or a generic website. This must look like nothing else in the room. No cards. No grids. No navbar. No AI slop. Every design decision must be intentional and unforgettable.

---

## 1. PROJECT CONTEXT

**Project name:** Custodix  
**Tagline:** *"When Technology Made Culture Fade — And How It Chose to Make It Right"*  
**What it is:** A community-first digital preservation platform for endangered languages, traditional crafts, and oral histories.  
**Presented by:** Group 6, ENSET Mohammedia, Morocco — 1ère GLSID, English Communication class.  
**Presentation format:** One person scrolls the website slowly while other teammates deliver a live speech. The website IS the slides. It must be synchronized with the speech narrative.  
**Narrative arc:** Technology as the Villain → Technology confronts what it did → Technology earns redemption → Custodix is the hero.

The app is called **Custodix**. It is a cross-platform mobile app (Expo / React Native) with a "night museum" aesthetic — sophisticated, dark, guardian-like. The website must feel like the cinematic universe that the app lives inside.

---

## 2. TECH STACK — NON-NEGOTIABLE

```
Framework:        Next.js 14 (App Router)
Language:         TypeScript
Styling:          Tailwind CSS + inline CSS-in-JS for advanced effects
Animation:        Framer Motion (scroll-driven) + GSAP (complex timelines)
3D / Canvas:      React Three Fiber + @react-three/drei (particle systems, threads)
Fonts:            Google Fonts — Cormorant Garamond + IM Fell English (display)
                               + Crimson Pro (body)
                  BANNED: Inter, Roboto, Arial, Helvetica, system-ui
Images:           next/image — use real Unsplash URLs listed below
Icons:            Only custom inline SVGs — no icon libraries
Cursor:           Custom animated cursor (amber dot + trailing ring)
Scroll:           GSAP ScrollTrigger for pinned sections and scrub animations
Deployment:       Vercel
```

---

## 3. DESIGN SYSTEM

### 3.1 Color Palette

```css
--black:           #080705;
--charcoal:        #100e0b;
--ash:             #1a1612;
--earth:           #26190f;
--clay:            #6b3f1e;
--amber:           #c8860a;
--gold:            #e8a020;
--flame:           #d4541a;
--terracotta:      #a84422;
--sand:            #c4a06a;
--parchment:       #e8d4b0;
--cream:           #f5ede0;
--forest-deep:     #0d1a0d;
--forest:          #1a3020;
--sage:            #3d6030;
--mint:            #5a8c48;
--smoke:           rgba(255, 255, 255, 0.03);
```

**Color temperature journey across the page:**
- Acts I–II: Near-black, charcoal, cold dark blues → despair, loss
- Act III: Dark earth tones, flickers of amber → reckoning, heat
- Act IV: Warm amber and forest green → hope entering
- Act V–VI: Rich gold and sage → redemption, solution
- Act VII: Deep black with golden text → solemnity, weight of the close

### 3.2 Typography

```
Display (headlines):     "IM Fell English", serif — irregular, humanist, feels hand-set
Display (numbers/stats): "Cormorant Garamond", weight 200 — enormous, ghostly thin
Body text:               "Crimson Pro", weight 300, line-height 1.9
Labels / chapter tags:   "Crimson Pro" small-caps, letter-spacing 0.4em, 10–11px
Quotes / emotional text: "IM Fell English" italic — raw, personal
```

All sizes use `clamp()`. Nothing fixed.  
Example: `font-size: clamp(3.5rem, 8vw, 7rem)`

Never use `font-weight: bold`. Use size and spacing to create hierarchy.

### 3.3 Global Texture System

Apply these as fixed layers over the entire page (`position: fixed`, `pointer-events: none`, `z-index` layered):

**Layer 1 — Grain (z-index: 9999):**
```css
/* SVG fractal noise at 30% opacity — makes everything feel aged, physical, not digital */
background: url("data:image/svg+xml,...feTurbulence baseFrequency='0.75' numOctaves='4'...");
opacity: 0.30;
mix-blend-mode: overlay;
```

**Layer 2 — Vignette (z-index: 9998):**
```css
background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%);
```

These two layers must be present at all times. They are what separates this from AI slop.

### 3.4 Woven Thread Motif

The visual identity of Custodix is **threads** — warp and weft, the act of weaving. This motif appears:
- As a subtle grid in section backgrounds (1px lines, 12–20px spacing, very low opacity)
- As an animated Three.js particle system in Act I
- As a literal loom simulation in the X-Factor section
- As decorative horizontal rules between sections (a 1px amber line that draws itself left-to-right on scroll)

---

## 4. GLOBAL UI ELEMENTS

### 4.1 Custom Cursor
```tsx
// Small amber filled circle (10px) + larger hollow ring (32px) that lags behind
// On hover over interactive elements: cursor expands, ring disappears
// On dark sections: amber. On cream/light: dark charcoal
```

### 4.2 Progress Bar
- 2px tall, position: fixed top-0 left-0
- Background: `linear-gradient(90deg, #a84422, #c8860a, #e8a020)`
- Width: tracks `window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100%`
- No label, no percentage — just the bar

### 4.3 Chapter Navigation
- Fixed right side, vertically centered
- 7 dots, 5px diameter each, 14px gap
- Inactive: `rgba(200, 134, 10, 0.25)`, 1px amber border
- Active: amber fill, glow (`box-shadow: 0 0 10px #c8860a`), scale 1.6
- On hover: show chapter name as a label sliding in from the right (Crimson Pro, small, letter-spaced)
- Clicking a dot smooth-scrolls to that section

### 4.4 Sound Toggle (Optional Enhancement)
- Bottom-left corner, fixed
- Small icon (waveform SVG)
- If clicked, plays a very quiet ambient audio loop (distant weaving sounds, subtle wind)
- Default: OFF

---

## 5. THE SEVEN ACTS — DETAILED SECTION SPECS

---

### ACT I — "SILENCE" (The Hook)

**Speech line it accompanies:** *"Every two weeks... a language disappears. Not evolves. Not changes. Disappears. Forever."*

**Full-screen section. Height: 100vh. Pinned for scroll.**

**Background:** Pure near-black `#080705`. A Three.js particle system renders 400 small white/amber particles that drift slowly upward and dissolve — they represent lost words, escaping smoke. Particles have slight random velocity, fade in opacity as they rise, respawn from the bottom. This is the ONLY background element.

**Center content (vertically + horizontally centered):**

```
[LARGE TYPEWRITER TEXT]
Font: IM Fell English, italic
Size: clamp(2rem, 5vw, 3.8rem)
Color: rgba(232, 212, 176, 0.85)
Animation: Characters appear one by one, 55ms delay each
Cursor: blinking amber vertical bar at the end while typing

Text renders in 3 beats with pauses between:
  Beat 1: "Every two weeks..."         [1.5s pause after]
  Beat 2: "a language disappears."     [1.0s pause after]
  Beat 3: "Not evolves. Not changes."  [0.8s pause after]
  Beat 4: "Disappears. Forever."       [2s pause, then counter fades in]
```

**After typewriter completes — counter fades in below:**

```
[LABEL] — small caps, letter-spaced, clay color:
"seconds since you opened this page"

[NUMBER] — Cormorant Garamond, weight 200
Size: clamp(5rem, 12vw, 9rem)
Color: amber #c8860a
Animation: counts up from 0 in real time using Date.now()
Subtle amber glow: text-shadow: 0 0 60px rgba(200,134,10,0.3)

[SUBLABEL] — Crimson Pro, italic, small
"Every 40 of these seconds, humanity loses a word it will never recover."
Color: rgba(196, 160, 106, 0.5)
Fades in 1s after number appears
```

**Scroll indicator at bottom:**
- "scroll" label, 0.5em letter-spacing, 9px, clay color
- 1px vertical line, 48px tall, animated: draws down then fades, loops
- Fades out once user has scrolled 50px

---

### ACT II — "THE VILLAIN'S RISE" (Evidence)

**Speech lines:** *"According to UNESCO, nearly 40% of the world's 7,000 languages are currently endangered..."*

**Background:**
- Base: `#100e0b`
- Radial glow from bottom-left: `radial-gradient(ellipse at 0% 100%, rgba(107,63,30,0.25) 0%, transparent 60%)`
- Very faint woven grid overlay (SVG pattern, 18px spacing, 0.04 opacity)

**Layout: full-width, generous vertical padding (15vh top and bottom)**

**Chapter tag — top left:**
```
"ACT I — THE EVIDENCE"
Font: Crimson Pro small-caps
Size: 11px, letter-spacing: 0.4em
Color: #a84422 (terracotta)
Left border: 2px solid #a84422, padding-left: 1rem
Animation: slides in from left on scroll enter, 0.6s ease
```

**Headline — left-aligned:**
```
"The world is
forgetting itself."

Font: IM Fell English
Size: clamp(4rem, 9vw, 7.5rem)
Color: #e8d4b0
Line-height: 0.95
"itself." rendered in amber italic
Animation: each line slides up from 30px below, staggered 0.15s delay
```

**Statistics — NOT cards, NOT a grid. Each stat is a full-width horizontal strip:**

```
Layout: stacked vertically, 1px amber separator line between each
Each strip: 100% width, asymmetric layout — number left, explanation right

Strip 1:
  NUMBER:  "43%"
           Cormorant Garamond, weight 200, clamp(5rem, 10vw, 8rem)
           Color: amber
           Animates: counts up from 0% to 43% on scroll enter (1.5s duration)
  DIVIDER: thin vertical line (1px, amber, 60% opacity) between number and text  
  TEXT:    "of the world's 7,000 languages are currently endangered"
           Crimson Pro, weight 300, clamp(1rem, 2vw, 1.4rem), parchment
  SOURCE:  "— UNESCO, 2024" in small italic clay text below

Strip 2:
  NUMBER:  "Every"
           then "2 Weeks"
           "2" is enormous (Cormorant, 200 weight, 8rem), amber
           "Every" and "Weeks" are small Crimson Pro labels above/below
  TEXT:    "A language disappears. Not archived. Not replaced. Gone."

Strip 3:
  NUMBER:  "90%"
           Same treatment, animates counting up
  TEXT:    "of all languages could vanish by 2100 at current rates"
  SOURCE:  "— Living Tongues Institute"

Strip 4:
  NUMBER:  "230+"
  TEXT:    "languages have disappeared since 1950 alone"

Strip 5:
  NUMBER:  "75%"
  TEXT:    "of medicinal plant knowledge globally exists in only one language — when that language dies, the medicine dies"
  SOURCE:  "— Journal of Ethnopharmacology, 2021"
```

**Animations:** Each strip enters from opacity 0 + translateY(40px) when it enters the viewport. Stagger by 0.12s. The number counter animates ONCE using `useInView` from Framer Motion.

**Transition to next section:** A slow horizontal amber line (1px) draws across the full width of the screen from left to right over 1.2s before the next section begins.

---

### ACT III — "THE VILLAIN'S CRIME" (How Technology Did It)

**Speech lines:** *"Today, 5.4 billion people use the internet. And yet, over 90% of online content is produced in just 10 languages — out of 7,000."*

**This section has a distinct visual shift: a subtle glitch/fragmentation aesthetic.**

**Background:**
- `#1a1612` base
- Two overlapping radial gradients from opposite corners creating tension
- Occasional 1-frame glitch flash: a 2px horizontal line of terracotta flickers across the screen randomly every 4–8 seconds (CSS animation, very subtle)

**Layout: centered column, max-width 800px, centered on page**

**Chapter tag:** `"ACT II — THE CRIME"` in terracotta

**Opening line — full bleed text:**
```
"The villain didn't carry a weapon."

Font: IM Fell English, italic
Size: clamp(2.5rem, 6vw, 5rem)
Color: parchment
Centers with generous space above and below

Then on scroll:
"It carried an algorithm."

Same styling, but this line is in terracotta/flame color
Appears 0.3s after the first line
```

**Three-column layout for the evidence (after the opening lines):**

Not cards — three column sections with NO borders, just breathing room:

```
Column 1 — Language:
  Icon: A simple SVG of a soundwave fading into silence
  Stat: "60% of all web content is in English"
  Subtext: "Out of 7,000 languages. One dominates. The rest starve for digital oxygen."

Column 2 — Craft:
  Icon: SVG of hands, one full, one fading/dissolving
  Stat: "Mass production killed the market"
  Subtext: "When a factory can make in minutes what takes an artisan months, the artisan cannot compete."

Column 3 — Memory:
  Icon: SVG of a circle with a gap — broken oral chain
  Stat: "Short-form content replaced oral storytelling"
  Subtext: "TikTok. Reels. Shorts. The 60-second world has no patience for a grandmother's story."
```

**Full-width quote block below columns:**
```
"Technology didn't set out to erase culture.
But it built a system where speed, scale, and uniformity won —
and culture, which is slow, local, and deeply human,
could not compete."

Font: IM Fell English, italic
Size: clamp(1.4rem, 3vw, 2.2rem)
Color: rgba(232, 212, 176, 0.75)
Left border: 3px solid #a84422
Padding-left: 2.5rem
Max-width: 700px, centered
```

---

### ACT IV — "THE RECKONING" (The Turn — most dramatic section)

**Speech lines:** *"Here is where our story takes a turn. Because the same technology that accelerated cultural loss... began to understand what it had done. And it faced a choice."*

**This is the emotional pivot. The color temperature shifts here. Warm amber begins bleeding in from below.**

**Background:** Starts as `#1a1612`. As user scrolls through this section, the background SLOWLY transitions to `#1a2a14` (forest dark). Use GSAP ScrollTrigger `scrub: true` to lerp between the two colors based on scroll position within the section.

**A large, slow-moving amber gradient orb** (radial gradient, 600px diameter, 15% opacity) drifts from the bottom-right toward the center as the section scrolls.

**Layout: vertically stacked, centered, max-width 900px**

**Chapter tag:** `"ACT III — THE RECKONING"` in amber

**Main headline sequence (each line pinned and revealed separately via GSAP ScrollTrigger):**

```
Line 1 (appears first):
"The same technology..."
IM Fell English, weight normal, 4rem, parchment, opacity 0.6

Line 2 (appears as user scrolls further):
"...that broke the chain..."
IM Fell English, italic, 4rem, parchment, opacity 0.8

Line 3 (appears last — the turn):
"chose to mend it."
IM Fell English, italic, clamp(4rem, 9vw, 7rem)
Color: gold #e8a020
Text-shadow: 0 0 80px rgba(232,160,32,0.3)
Animation: fades in AND scales from 0.95 to 1.0
```

**Below the headline — the ethical confrontation:**
```
"This is not a story about technology saving culture."
Crimson Pro, 1.3rem, sand color

[small gap]

"This is a story about technology earning that right."
IM Fell English, italic, 1.6rem, parchment
```

**Visual element — a breaking/reforming thread:**
A canvas element or SVG animation here:
- Shows 7 vertical threads (amber/terracotta colored, 1px each)
- First: they snap and fray apart (CSS animation, 1.5s, triggered on scroll enter)
- Then: they slowly reform and weave together (CSS animation, 2s delay)
- This is the single most important visual on the page. Make it beautiful.

---

### ACT V — "CUSTODIX" (The Solution — introducing the platform)

**Speech lines:** *"We asked ourselves: what would it look like if technology made amends? Not by archiving culture like a museum exhibit. Not by turning traditions into content. But by rebuilding the connection."*

**Background:** `#0d1a0d` (deep forest dark). This is the greenest section — life, growth, nature returning.
- Subtle radial amber glow from center: `radial-gradient(ellipse at 50% 50%, rgba(200,134,10,0.08) 0%, transparent 70%)`
- The woven grid motif at 0.06 opacity — most visible here

**Section structure: Two halves**

**Left half (40% width):**

Chapter tag: `"ACT IV — THE SOLUTION"` in sage green

```
"Custodix."
Font: IM Fell English
Size: clamp(5rem, 11vw, 9rem)
Color: parchment
Letter-spacing: -0.02em
Animation: slides in from the left, 0.8s ease-out
```

```
Tagline below:
"A community-first platform to preserve what the world 
is forgetting — on the communities' own terms."

Font: Crimson Pro, italic, weight 300
Size: clamp(1.1rem, 2.2vw, 1.5rem)
Color: sand
Line-height: 1.8
Animation: fades in 0.3s after the name
```

**Right half (60% width) — The Three Pillars:**

Three vertically stacked sections. NOT cards. Each is a horizontal strip with a large number label:

```
PILLAR 01 — "Living Language Modules"
Large "01" in Cormorant Garamond, weight 200, 5rem, amber at 25% opacity (decorative)
Title: IM Fell English, 1.6rem, parchment
Body: Crimson Pro, weight 300, 1rem, sand, line-height 1.8
"AI-assisted voice recording and transcription that communities 
use to document their own language — in context, in story, in 
song. Not isolated vocabulary. Living speech."
Separator: 1px line, amber at 15% opacity

PILLAR 02 — "Craft Documentation Studio"
Same treatment
"A guided video workflow where artisans record their techniques 
step by step. The output isn't a YouTube video — it's a 
structured knowledge file, linked to cultural context and oral 
explanation, preserved and owned by the community."

PILLAR 03 — "The Story Web"
"An interconnected oral history archive that maps relationships 
between objects, places, practices, and language. A user doesn't 
just hear a story — they see how it connects to a craft, a region, 
a ritual."
```

**Animation:** Each pillar enters from the right (translateX 50px → 0) with 0.15s stagger on scroll.

---

### ACT VI — "THE APP" (Custodix Mobile Experience)

**Speech context:** This section visually demonstrates the Custodix app — its 5 modules and its "night museum" aesthetic.

**Background:** Dark, near-black with warm amber undertones. `#100e0b`.

**Section headline:**
```
"Built for the hands of guardians."
IM Fell English, italic
Size: clamp(2rem, 4.5vw, 3.5rem)
Color: parchment
Centered, max-width 700px
Margin-bottom: 5rem
```

**Three phone mockups displayed in a row, angled:**

The phones are displayed with CSS `perspective` and slight rotateY tilt:
- Left phone: `rotateY(12deg)` (slightly tilted left)
- Center phone: `rotateY(0deg)` (straight, larger, in front)
- Right phone: `rotateY(-12deg)` (slightly tilted right)

Each phone is a styled `div` with:
- Width: 200px (center: 220px)
- Height: 420px (center: 450px)
- Border-radius: 30px
- Border: 1.5px solid `rgba(200,134,10,0.35)`
- Background: `#0a0806`
- Box-shadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.4), inset 0 0 30px rgba(0,0,0,0.4)`

Phones enter from below (translateY 80px → 0) with stagger on scroll.

**Phone 1 — "The Nexus" (Home)**

Screen content (tiny UI, must be pixel-perfect and realistic):
```
App header bar:
  Left: "CUSTODIX" in 10px Cormorant Garamond, amber
  Right: small circular avatar placeholder

Interactive Globe widget:
  A small canvas (or CSS sphere illusion using border-radius + gradients)
  Deep blue-green, showing landmass outlines in amber
  Rotating slowly (CSS animation, 30s rotate)
  Label below: "Cultural Risk Map — Live"

Heritage Token carousel below:
  Two small horizontal "token" cards:
  Card 1: amber circular icon + "Tamazight — Morocco" + "URGENT" badge in terracotta
  Card 2: sage green icon + "Fez Zellij Craft" + "NEW" badge
  Cards scroll horizontally (implied with fade-out edge)

Bottom tab bar:
  5 tabs: home, explore, record, learn, profile
  Active tab (home) has amber underline indicator
  Icons: minimal SVG glyphs, 16px
```

**Phone 2 (CENTER) — "The Sentinel" (Record)**

This is the most important screen. The "recording" interface.
```
Header: "← Back" + "The Sentinel" centered in IM Fell English, 14px
Subtitle: "Document a Memory" in 9px small-caps, letter-spaced

Mode selection (3 horizontal pills — NOT cards):
  [Oral History] [Craft] [Language]
  Active: amber filled pill, parchment text
  Inactive: transparent with 1px amber border

A large centered record button:
  80px diameter circle
  Background: radial gradient amber → terracotta
  Inner white circle, 30px
  Pulsing glow animation: box-shadow expands and contracts, 2s loop

Metadata fields below:
  "Region" — text input, minimal, 1px bottom border only (amber)
  "Language/Craft Name" — same style
  "Cultural Context" — same

A small text at bottom:
  "This memory will be stored in your community's private vault."
  8px, italic, sand color
```

**Phone 3 — "The Catalyst" (Learn)**

```
Header: "The Catalyst" + AI companion icon

A simple chat-style interface:
  AI bubble (left): "Welcome, Guardian. Which tradition shall we explore today?"
  Styling: dark background bubble, small amber dot avatar
  
  User bubble (right): "Tell me about Tamazight weaving patterns"
  Styling: forest green bubble, right-aligned

AI response bubble:
  "Tamazight textile traditions carry encoded meaning in every 
   geometric pattern. The diamond motif (azeggagh) represents 
   protection. Shall I show you the documentation archive?"
  
  Two action buttons below:
  [View Archive] [Start Recording]
  Minimal pill buttons, amber border

Bottom: simple text input bar
```

**Labels below each phone (outside the frame):**
```
Phone 1: "The Nexus" — 9px, small-caps, clay
Phone 2: "The Sentinel" — same style
Phone 3: "The Catalyst" — same style
```

---

### ACT VII — "THE X-FACTOR" (Technology's Apology — The Acknowledgment)

**Speech lines:** *"When a community elder opens our platform for the first time, they don't see a dashboard. They see this..."*

**This is the most dramatic section. Full-screen, slow, deliberate.**

**Background:**
- Deep near-black `#080705`
- A single large amber radial gradient orb, centered, very low opacity (0.06), 800px diameter
- The grain texture is most visible here

**Section structure: centered, everything maxed at 680px width**

**Chapter tag:** `"THE X-FACTOR — TECHNOLOGY'S APOLOGY"` in amber

**Slow reveal sequence (GSAP timeline, triggered on scroll enter):**

```
Step 1 — Context line fades in (0.8s):
"When a community elder opens Custodix for the first time,"
Crimson Pro, italic, 1.2rem, sand, opacity 0.7

Step 2 — "they don't see a dashboard." fades in (0.5s delay after step 1):
Same styling

Step 3 — "They see this:" fades in (0.5s delay)
Same styling

Step 4 — THE ACKNOWLEDGMENT SCREEN (1s delay, fades in with scale from 0.96 to 1.0):
```

**The Acknowledgment — styled as an actual in-app screen, centered, max-width 480px:**

```css
/* The acknowledgment "modal" styling */
background: #0f0c08;
border: 1px solid rgba(200,134,10,0.25);
border-radius: 16px;
padding: 3rem 2.5rem;
box-shadow: 0 0 0 1px rgba(0,0,0,0.5), 0 60px 120px rgba(0,0,0,0.6), 0 0 80px rgba(200,134,10,0.04);
```

Inside the modal:

```
[Small amber horizontal line — decorative, 40px, centered, margin-bottom 2rem]

[Icon — a simple SVG of two hands, one offering something to the other]
[32px, amber, centered, margin-bottom 1.5rem]

[Headline]
"Before we begin."
Font: IM Fell English, 1.8rem, parchment, centered

[Body text — this is the most important copy on the entire site]
"This tool was built by the same world
that nearly took your language from you.

We know that.

We are not here to take anything else.

Everything that follows belongs to you.
You decide what is shared.
You decide what is kept.
You decide what is forgotten.

We are only here to help you hold it."

Font: Crimson Pro, weight 300, 1.05rem
Line-height: 2.0
Color: rgba(232,212,176,0.85)
Centered
Each paragraph separated by visible whitespace

[Below text — two minimal buttons]
[  I understand. Continue.  ]   [  Learn how we protect your data  ]

Button 1: amber text, 1px amber border, no fill, padding 0.6rem 1.5rem
Button 2: clay text, no border, underline only
Font: Crimson Pro small-caps, 10px, letter-spaced
```

**Below the modal — a label:**
```
"We call this The Acknowledgment."
IM Fell English, italic, 1.3rem, sand

"It is not a legal disclaimer.
It is not a marketing message.
It is technology, for once, choosing to begin
with humility instead of confidence."

Crimson Pro, weight 300, 1rem, sand, line-height 1.9
Max-width 560px, centered
```

---

### ACT VIII — "THE PROMISE" (Ethical Defense + Close)

**Speech lines:** *"Before you invest in this idea — we owe you honesty. There is a major risk in what we're building: digital preservation can become digital extraction."*

**Background:** Transition from the previous near-black to an even deeper, more solemn near-black. `#060503`. This is the finale.

**Layout: Two halves, then full-width close**

**TOP HALF — Ethical Defense:**

Chapter tag: `"THE ETHICAL DEFENSE"` in clay/terracotta

```
Headline:
"Every solution carries a shadow."
IM Fell English, italic, clamp(2.5rem, 6vw, 4.5rem), parchment

Subline:
"Digital preservation can become digital extraction.
We designed our platform to confront this directly."
Crimson Pro, 1.1rem, sand
```

**Three commitments — stacked vertically, NO cards, just text with decorative element:**

```
Each commitment:
  [Small amber diamond ◆ — 8px] + [Number "01" / "02" / "03" in Cormorant, 200 weight, 2rem, amber, 20% opacity]
  [Title in IM Fell English, 1.2rem, parchment]
  [Body in Crimson Pro, weight 300, 0.95rem, sand, line-height 1.8]
  [Thin separator line, 1px, amber 10% opacity]

Commitment 01 — "Community Sovereignty Protocol"
"Every community controls their own data vault. They decide 
what is public, what is shared only within the community, 
and what is permanently private. We never override this."

Commitment 02 — "No Commercial Extraction"
"Content uploaded to our platform cannot be licensed, sold, 
or used for AI training without explicit, renewed community 
consent — not a one-time checkbox."

Commitment 03 — "Co-Design, Not Consultation"
"We did not build this platform and then ask communities 
if they liked it. We built it with three pilot communities 
from the start — their feedback shaped the architecture."
```

**BOTTOM HALF — The Close (full width, centered):**

The closing speech becomes the visual close. Each line appears as the user scrolls through it — GSAP ScrollTrigger `scrub: 1`:

```
Line 1 (appears first, fades slightly as line 2 appears):
"We are living at a unique intersection."
IM Fell English, italic, clamp(1.8rem, 4vw, 3rem), parchment, opacity 0.7, centered

Line 2:
"For the first time in history, we have tools powerful enough
to preserve culture at global scale."
Same styling, slightly larger opacity

Line 3:
"And we are simultaneously watching culture disappear
at its fastest rate ever."
Same — terracotta tint on this one. The darkness returns briefly.

Line 4 (the pivot — full amber):
"That is not a coincidence.
That is a consequence."
IM Fell English, italic, clamp(2rem, 5vw, 4rem), amber #c8860a
Text-shadow: 0 0 60px rgba(200,134,10,0.3)

Line 5 (the question — the close):
"Will we choose to build technology
that repairs what it broke?"
IM Fell English, italic, clamp(2.5rem, 6vw, 4.5rem), gold #e8a020
This line should feel enormous and quiet at the same time.
Text-shadow: 0 0 100px rgba(232,160,32,0.2)
```

**Final element — below the close:**

```
[Thin amber horizontal line across 40% of the page width, centered]

"Custodix."
IM Fell English, clamp(3rem, 8vw, 6rem), parchment
Letter-spacing: 0.05em
Margin: 3rem auto

Tagline below:
"Hold it. Share it. Pass it on."
Crimson Pro, italic, weight 300, 1.2rem, sand, letter-spacing 0.15em

[Small separator]

Team credit (minimal, dignified):
"Group 6 · ENSET Mohammedia · 1ère GLSID · 2025–2026"
Crimson Pro, small-caps, 10px, letter-spacing 0.3em, clay, opacity 0.5
```

---

## 6. IMAGERY — USE THESE UNSPLASH URLS

Use `next/image` with these real URLs. These are freely licensed.

```
Cultural portraiture (faces, elders):
https://images.unsplash.com/photo-1583623025817-d180a2221d0a  (Moroccan woman, market)
https://images.unsplash.com/photo-1560707303-4e980ce876ad  (elder hands weaving)
https://images.unsplash.com/photo-1504711434969-e33886168f5c  (Berber woman portrait)
https://images.unsplash.com/photo-1595867818082-083862f3d630  (West African craft)

Weaving / textiles / craft:
https://images.unsplash.com/photo-1558618666-fcd25c85cd64  (hands on loom)
https://images.unsplash.com/photo-1544161515-4ab6ce6db874  (textile patterns, geometric)
https://images.unsplash.com/photo-1564419320461-6870880221ad  (pottery hands)
https://images.unsplash.com/photo-1590736969955-71cc94901144  (weaving detail)

Landscapes / place:
https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e  (Morocco landscape)
https://images.unsplash.com/photo-1518998053901-5348d3961a04  (ancient architecture)

Abstract / texture:
https://images.unsplash.com/photo-1557180295-76eee20ae8aa  (aged paper texture)
https://images.unsplash.com/photo-1506905925346-21bda4d32df4  (cracked earth)
```

**Image usage rules:**
- Images appear only as background parallax elements, at 10–20% opacity, behind text
- NEVER as hero images or in cards
- Always use `?w=1200&q=75&auto=format` query params for optimization
- Apply CSS: `filter: sepia(0.4) brightness(0.4)` for the dark moody treatment
- Use `next/image` with `fill` layout and `object-fit: cover`

---

## 7. ANIMATIONS — TECHNICAL SPECS

### 7.1 GSAP ScrollTrigger Setup

```tsx
// Install: npm install gsap @gsap/react
// Register: gsap.registerPlugin(ScrollTrigger)

// Pin Act IV (The Reckoning) for dramatic reveal:
gsap.timeline({
  scrollTrigger: {
    trigger: "#act-reckoning",
    start: "top top",
    end: "+=200%",
    pin: true,
    scrub: 1,
  }
})
.fromTo(".reckoning-line-1", { opacity: 0, y: 30 }, { opacity: 0.6, y: 0 })
.fromTo(".reckoning-line-2", { opacity: 0, y: 30 }, { opacity: 0.8, y: 0 })
.fromTo(".reckoning-line-3", { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 })

// Scrub background color transition (Act IV):
gsap.to("#act-reckoning", {
  backgroundColor: "#1a2a14",
  scrollTrigger: {
    trigger: "#act-reckoning",
    start: "top center",
    end: "bottom center",
    scrub: 2,
  }
})
```

### 7.2 Framer Motion — Scroll-Triggered Reveals

```tsx
// For every stat strip, pillar, and commitment block:
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
}

// Use useInView hook — trigger ONCE, do not re-trigger on scroll back
const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

// Stat counter animation:
const count = useMotionValue(0);
const rounded = useTransform(count, (v) => Math.round(v));
useEffect(() => {
  if (inView) animate(count, targetValue, { duration: 1.5, ease: "easeOut" });
}, [inView]);
```

### 7.3 Three.js Particle System (Act I)

```tsx
// Use @react-three/fiber + @react-three/drei
// 400 particles, each:
//   - Random position in a 10x10x2 unit box centered on camera
//   - Random drift velocity: x ±0.003, y +0.005 to +0.012, z ±0.001
//   - Opacity cycles: 0 → 0.6 → 0 over 4–8 second random lifetime
//   - Color: lerp between #c8860a and #e8d4b0 per particle
//   - Size: 0.015 to 0.035 units, random
//   - On lifetime end: reset to random bottom position
// Camera: perspective, position [0, 0, 5], fov 75
// Background: transparent (section bg handles it)
// Frame loop: update all particle positions in useFrame
```

### 7.4 The Breaking/Reforming Threads (Act IV)

```tsx
// 7 SVG lines, each 1px wide, full section height
// Phase 1 — Break (triggered on scroll enter):
//   Each line: animate pathLength 1→0 from bottom up, staggered by 0.08s
//   Each line also gets strokeDasharray animation that creates a "fraying" effect
//   Color: shifts from amber → terracotta during break
// Phase 2 — Reform (0.8s delay after break completes):
//   Lines weave across each other (x position animates in sine wave pattern)
//   Then settle back to vertical positions
//   pathLength 0→1 from top down, staggered 0.08s
//   Color: shifts from terracotta → sage green
// Total animation: ~4 seconds
// This is a Framer Motion SVG animation
```

### 7.5 Loom Weaving Canvas

```tsx
// HTML5 Canvas element inside Act VI (App section) OR a standalone section
// Canvas size: fills its container (responsive)
// What it draws each frame:
//   1. N vertical "warp" threads (amber, 1px, equally spaced)
//   2. An animated horizontal "weft" thread (shuttling back and forth, 1.5px, terracotta)
//   3. Where weft has passed: fills in the woven "cells" with alternating over/under pattern
//   4. The weaving advances by 1 row every 40 frames (filling from top to bottom)
//   5. When fully woven: brief pause, then canvas fades out and resets
// Colors cycle through: amber → terracotta → sage → parchment → clay (thread palette)
// This runs at 60fps using requestAnimationFrame
// Subtle glow on the active shuttle: blurred amber point
```

---

## 8. COMPONENT ARCHITECTURE

```
/app
  /page.tsx                    ← root page, assembles all sections
  /layout.tsx                  ← fonts, metadata, grain overlay, cursor

/components
  /ui
    CustomCursor.tsx            ← amber dot + trailing ring
    ProgressBar.tsx             ← 2px scroll progress
    ChapterNav.tsx              ← fixed right dots
    SectionDivider.tsx          ← amber line that draws across
    GrainOverlay.tsx            ← fixed SVG noise layer
    VignetteOverlay.tsx         ← fixed radial dark vignette

  /sections
    ActOne_Silence.tsx          ← typewriter + particle system + counter
    ActTwo_Evidence.tsx         ← stats strips with counters
    ActThree_Crime.tsx          ← glitch + three columns + quote
    ActFour_Reckoning.tsx       ← GSAP pinned, background color scrub
    ActFive_Solution.tsx        ← Custodix name + three pillars
    ActSix_App.tsx              ← three phone mockups
    ActSeven_XFactor.tsx        ← The Acknowledgment screen
    ActEight_Promise.tsx        ← ethics + closing scroll reveal

  /canvas
    ParticleSystem.tsx          ← Three.js / R3F particles (Act I)
    WeavingCanvas.tsx           ← HTML5 canvas loom animation
    ThreadAnimation.tsx         ← SVG breaking/reforming threads

  /phones
    PhoneFrame.tsx              ← reusable phone mockup wrapper
    ScreenNexus.tsx             ← home screen UI
    ScreenSentinel.tsx          ← record screen UI
    ScreenCatalyst.tsx          ← chat/learn screen UI

/hooks
  useScrollProgress.ts
  useInViewAnimation.ts
  useTypewriter.ts
  useCounterAnimation.ts

/lib
  gsap-config.ts               ← GSAP + ScrollTrigger registration
  fonts.ts                     ← next/font/google setup

/styles
  globals.css                  ← grain texture, cursor hiding, selection color
```

---

## 9. PERFORMANCE RULES

- All Three.js and canvas components: use `dynamic()` with `ssr: false`
- All images: `loading="lazy"` except the very first visible image
- All GSAP ScrollTriggers: clean up in `useEffect` return
- The grain overlay SVG: inline data URI, no network request
- Font subsets: only load Latin + Latin-Extended
- No external image requests except Unsplash with width/quality params

---

## 10. METADATA & DEPLOYMENT

```tsx
// app/layout.tsx metadata:
export const metadata = {
  title: "Custodix — The Digital Heritage Vault",
  description: "When Technology Made Culture Fade — And How It Chose to Make It Right",
  openGraph: {
    title: "Custodix",
    description: "A community-first digital preservation platform",
    type: "website",
  }
}
```

```bash
# Deploy command:
vercel --prod

# The presentation URL will be: https://custodix.vercel.app
# Or custom: https://custodix-pitch.vercel.app
```

---

## 11. THE SPEECH — SCROLL SYNC GUIDE

This table tells the person scrolling WHEN to advance to each section relative to the speech:

| Speech Beat | Section to be on | Visual that should be visible |
|---|---|---|
| "Every two weeks... a language disappears." | Act I — Silence | Typewriter completing, counter running |
| "UNESCO... 40% of languages endangered" | Act II — Evidence | Stats strips appearing |
| "90% of online content in 10 languages" | Act III — Crime | The three columns + quote |
| "Here is where our story takes a turn." | Act IV — Reckoning | Lines beginning to reform |
| "Introducing Custodix." | Act V — Solution | Custodix name + pillars |
| "What does this look like in practice?" | Act VI — App | Phone mockups visible |
| "When an elder opens our platform..." | Act VII — X-Factor | Acknowledgment modal appearing |
| "Before you invest — we owe you honesty." | Act VIII — Promise top | Ethical defense commitments |
| "Will we choose to build technology..." | Act VIII — Promise bottom | Closing lines scrolling |
| "Thank you." | Act VIII — end | "Custodix." + team credit |

---

## 12. WHAT MAKES THIS DIFFERENT FROM AI SLOP

You must enforce these rules throughout the build:

1. **No cards** — EVER. No `rounded` div with a shadow containing an icon + title + text. Every content block is part of the page, not a floating object.

2. **No equal columns** — Asymmetric layouts only. 40/60, 30/70, full-bleed, centered narrow column.

3. **No icon libraries** — Every icon is a custom inline SVG, designed for this context.

4. **No color gradients going purple** — The gradient direction is always: dark earth → amber → gold. Never purple, never blue-purple, never the default Tailwind gradient presets.

5. **No generic section headers** — No "Our Features" or "How It Works". Chapter tags only. Act labels only.

6. **No hover underlines on links** — Interactive elements respond to hover with opacity shift or scale, not underline.

7. **Whitespace is content** — The design should breathe. Sections have generous vertical padding. Not everything needs to fill every pixel.

8. **Text is the hero** — The typography carries the emotion. Visuals support it. Never the reverse.

9. **Every animation has a reason** — If an animation doesn't reinforce the narrative (loss, reform, hope), remove it.

10. **The grain is mandatory** — Without the grain overlay, the site looks digital and artificial. The grain makes it feel aged, physical, and respectful of what it is about.

---

## 13. FINAL CHECKLIST BEFORE PRESENTING

- [ ] All 8 sections scroll without jank on a laptop at 60fps
- [ ] Typewriter completes correctly in under 12 seconds
- [ ] All stat counters animate on first scroll into view
- [ ] GSAP pinned section (Act IV) holds for long enough to feel dramatic
- [ ] Three phone mockups are readable at the screen's actual resolution
- [ ] The Acknowledgment modal text is legible from 2 meters away
- [ ] Closing lines are legible from 3 meters away (large classroom)
- [ ] No horizontal scroll on any screen width ≥ 1280px
- [ ] Custom cursor visible and smooth
- [ ] Chapter dots accurately reflect current section
- [ ] Team credit and section labels are correct
- [ ] Deployed to Vercel, URL tested on presentation device

---

*Built for Group 6 · ENSET Mohammedia · English Communication · 1ère GLSID*
*"Hold it. Share it. Pass it on."*
