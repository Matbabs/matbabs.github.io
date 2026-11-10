---
name: A BLOC
description: L'app des sports outdoor. The public site wears the mobile app's own design system.
colors:
  primary: "#fbbf24"
  primary-light: "#f5d76e"
  primary-dark: "#c9a830"
  primary-flat: "#fbbf241a"
  secondary: "#6d28d9"
  secondary-flat: "#6d28d914"
  dark: "#1a0f2b"
  ink-muted: "#4a3f5c"
  light: "#ffffff"
  dark-flat: "#f2f2f2"
  line: "#1a0f2b14"
  dark-yellow: "#b45309"
  dark-red: "#b91c1c"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.3
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1
rounded:
  sm: "5px"
  md: "15px"
  panel: "32px"
  phone: "44px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  container: "1200px"
  reading: "760px"
  section: "clamp(64px, 9vw, 120px)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
  store-badge:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.light}"
    rounded: "{rounded.md}"
    padding: "11px 20px 11px 16px"
    width: "190px"
  chip-sport:
    backgroundColor: "{colors.primary-flat}"
    textColor: "{colors.dark-yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  chip-fact:
    backgroundColor: "{colors.secondary-flat}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.sm}"
    padding: "5px 10px"
  note-panel:
    backgroundColor: "{colors.secondary-flat}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: "18px 20px"
  phone-frame:
    backgroundColor: "{colors.dark}"
    rounded: "{rounded.phone}"
    padding: "10px"
    width: "300px"
---

# Design System: A BLOC

## Overview

**Creative North Star: "The App, Walked Through"**

The site is the A BLOC mobile app laid flat on a white page. Every token is pinned to the React Native app's design system (`app/(tabs)/styles/styles.tsx`): the same white ground, the same deep violet-black ink, the same sun-yellow and royal-purple pair, the same 15px and 5px radii, the same Inter at two weights. Proof is never illustrated. It is real app screenshots inside a true phone frame, and on the landing page that phone stays put while the story scrolls past it.

Density is calm and editorial: large tight-tracked bold headlines, generous section breathing, muted violet-grey body copy capped at readable measures. Colour stays mostly in reserve on white, then arrives at full strength in two drenched bands, one purple and one yellow, so the page has two loud moments rather than constant noise. The site is light-only, like the app. The confirmed anti-reference is the generic app-launch template: a dark-gradient split hero with floating emoji badges.

**Key Characteristics:**

- Light-only white ground, ink #1a0f2b, never pure black text.
- Tokens mirror the app 1:1 (custom property names keep the app's `PRIMARY`, `SECONDARY_FLAT` casing).
- Inter 400 and 700 only, loaded from Google Fonts.
- Real screenshots in a dark phone bezel are the only product imagery. The app's own characters (the ExploRider piments and Coach Moustache) are the only illustration.
- Soft, low, violet-tinted shadows. Nothing hard-edged.
- Map-pin markers carry the outdoor-map language into the UI.

## Colors

A two-accent app palette, yellow for action and highlight, purple for guidance and structure, both sitting on white with violet-tinted ink.

### Primary

- **Sun Yellow** (primary): the action colour. Header "Télécharger" button fill, the highlighter stripe under the key word of the hero headline, text selection, and the full-bleed closing CTA band. Text on it is always ink.
- **Pale Sun** (primary-light): hover fill of the yellow button only.
- **Ochre Edge** (primary-dark): the coloured glow under a hovered yellow button.
- **Yellow Wash** (primary-flat): fill of the sport chips, always paired with a 1px Sun Yellow border.
- **Burnt Amber** (dark-yellow): the readable text colour on Yellow Wash. Yellow itself is never used as text on white.

### Secondary

- **Royal Purple** (secondary): guidance and structure. Focus rings, active map-pin markers, list markers, document links, FAQ chevrons, training icons, fact-chip text, and the drenched manifesto band (where white and #ede6fb text sit on it and the emphasised word turns Sun Yellow).
- **Lilac Veil** (secondary-flat): tinted panels. Note boxes, fact chips, the soft backdrop slab behind the hero phone, and the story rail line.

### Neutral

- **Night Violet** (dark): all primary text, the phone bezel, the store badges, the skip link. The darkest thing on the page and the base of every shadow tint.
- **Dusk Grey** (ink-muted): secondary text. Ledes, step paragraphs, nav links at rest, footer, document meta and intro.
- **White** (light): page ground and the inner fill of icon tiles and rest-state markers.
- **Mist** (dark-flat): the one tonal section ground (training band) and the empty screen fill behind phone screenshots.
- **Hairline** (line): 1px dividers. Header bottom, alert strip, list rows, FAQ rows, footer fine print.

### Semantic

- **Alarm Red** (dark-red): bold inline warnings on document pages (irreversible deletion, retention deadlines). Nowhere else.

Hazard chips in the alert strip carry per-category dot colours taken from the app's alert types. They are data, set inline per item, not palette tokens.

### Named Rules

**The Mirror Rule.** A colour enters this site only if it exists in the app's `styles.tsx`. The site does not invent brand colours; Dusk Grey and Hairline are the only web-side additions, both derived from Night Violet.

**The Two Bands Rule.** Full-strength colour fills a whole section exactly twice on the landing page: Royal Purple for the manifesto, Sun Yellow for the close. Everything else rests on White or Mist.

**The Ink-On-Yellow Rule.** Anything set on Sun Yellow is Night Violet. Anything that must read as yellow on white uses Burnt Amber.

## Typography

**Display Font:** Inter (with system-ui, sans-serif)
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** One family, two weights, exactly as the app ships it. Hierarchy comes from size and negative tracking, not from weight variety: headings get tighter as they get bigger.

### Hierarchy

- **Display** (700, clamp(2.75rem, 6.4vw, 5.5rem), 0.98, -0.04em): hero headline; the closing CTA headline runs the same voice at clamp(2.4rem, 5.6vw, 4.75rem). Balanced wrapping.
- **Headline** (700, clamp(2rem, 4vw, 3.25rem), 1.05, -0.035em): section heads, max 22ch. The manifesto quote is a larger headline (clamp(1.9rem, 4.6vw, 4rem), 1.06, max 20ch). Document page titles run clamp(2.25rem, 5vw, 3.5rem).
- **Title** (700, clamp(1.6rem, 2.6vw, 2.25rem), 1.1, -0.03em): story step titles. Smaller titles (19-22px, -0.02em, 1.3) for training rows, document h2 and FAQ questions (18px).
- **Body** (400, 17px, 1.6; 16px under 640px): paragraphs in Dusk Grey, capped at 42-52ch on the landing page and 68ch on document pages. Ledes step up to 18-21px at 1.5.
- **Label** (400, 13-14px): chips, meta lines, fine print. Sentence case, no tracking, no uppercase.
- **Button** (700, 15px, 1): button and badge labels.

### Named Rules

**The Two Weights Rule.** Inter 400 and 700 only. No 500, no 600, no italic (emphasis inside a headline is a colour change, not a style change).

**The Tighter-As-Bigger Rule.** Letter-spacing scales with size: -0.01em at 18px, -0.02em around 20px, -0.03em for titles, -0.035em for headlines, -0.04em for display.

## Layout

A centred 1200px container with a fluid gutter (clamp(16px, 4vw, 40px)); document pages narrow it to a 760px reading column. Section padding is fluid, typically clamp(64px, 9vw, 120px) block, with the story and manifesto running larger (up to 136-150px). Grids are two-column with `minmax(0, …fr)` tracks: hero 1.15fr/0.85fr, training and CTA 1fr/1fr or 1fr/auto, gaps scaled with clamp.

The landing story is a scrollytelling grid: a step column (each step at least 78vh tall, text max 560px, a 2px Lilac Veil rail on the left) beside a sticky phone vertically centred in the viewport.

Responsive: at 960px every two-column grid collapses to one, the sticky phone is removed and each step shows its own inline screenshot phone instead. At 640px the header nav hides (the yellow button stays), store badges go full-width, and body drops to 16px. The sticky header is 68px with an 88px scroll-padding offset for anchors.

## Elevation & Depth

Mostly flat, with soft violet-tinted shadows reserved for the objects that stand in for the physical app: buttons, store badges, icon tiles, the phone. Shadows use negative spread so they pool below the object rather than haloing it. Tonal layering (Mist band, Lilac Veil panels) does the rest.

### Shadow Vocabulary

- **Bottom** (`0 1px 5px #80808026`): rest state of the yellow button and the white icon tiles. The app's resting card shadow.
- **Raised** (`0 18px 40px -18px #1a0f2b40, 0 2px 6px #1a0f2b14`): store badges at rest.
- **Raised Hover** (`0 22px 40px -16px #1a0f2b66, 0 2px 6px #1a0f2b1f`): store badges on hover, with a 2px lift.
- **Yellow Glow** (`0 6px 16px -6px` Ochre Edge): yellow button on hover, with a 1px lift.
- **Phone** (`0 40px 80px -30px #1a0f2b73, 0 0 0 1px #1a0f2b, inset 0 0 0 2px #3a2d4f`): the phone bezel; long drop plus a hairline outer edge and an inner bevel.

The sticky header uses a translucent white (`#ffffffe6`) with `saturate(1.4) blur(12px)` backdrop filter over a Hairline border.

### Named Rules

**The Soft-Pool Rule.** Every shadow is blurred, negatively spread and tinted from Night Violet (or neutral grey at rest). Zero-blur offset shadows do not exist in this world.

## Shapes

Gentle app corners: 15px on buttons, badges, icon tiles and note panels; 5px on small data chips; full pills on sport and hazard chips. Large soft slabs (32px) sit behind hero imagery. The phone frame is its own silhouette: 44px outer, 35px screen (smaller phones scale to 28-32px outer, 22-26px screen).

Two recurring geometries come from the outdoor map: the map-pin teardrop (a square with three 50% corners and one square corner, rotated -45deg) used as step markers, and the round 10px hazard dot inside alert chips. FAQ disclosure uses a drawn two-border chevron, rotating on open.

## Components

### Buttons

Confident and app-native.

- **Shape:** gently rounded (15px), minimum 44px tall.
- **Primary:** Sun Yellow fill, Night Violet 700 15px label, 10px 20px padding, Bottom shadow. Used for the header "Télécharger" only; on mobile it deep-links to the right store.
- **Hover / Focus:** fill shifts to Pale Sun, 1px lift, Yellow Glow, 0.2s on the shared ease-out. Focus is the global 3px Royal Purple outline at 3px offset.

### Store Badges (primary action)

The real download action, so they carry more weight than the button.

- Night Violet fill, white text, 15px radius, min 190px wide, 26px store glyph image, two-line label (11px at 75% opacity over an 18px 700 store name).
- Raised shadow at rest; 2px lift with Raised Hover on hover (0.25s ease-out).
- Always shown as a pair (App Store, Google Play). Row in the hero, stacked column in the yellow CTA band on desktop, full-width each under 640px.

### Chips

- **Sport chips:** pill, 1px Sun Yellow border, Yellow Wash fill, Burnt Amber 14px text. Static labels, not filters. (The landing hero now uses the Mascot Crew instead.)
- **Hazard chips:** pill, white with Hairline border, 14px ink text, led by a 10px round dot in the hazard's own colour.
- **Fact chips:** 5px corners, Lilac Veil fill, Royal Purple 13px text; list the data a feature shows.

### Cards / Containers

- **Note panel:** 15px radius, Lilac Veil fill, Royal Purple text, 18px 20px padding, bold links in the same colour. Used for help and contact asides.
- **Rows, not cards:** training steps and FAQ items are Hairline-divided rows, not boxed cards. A training row is a 48px white icon tile (15px radius, Bottom shadow, Royal Purple 2px-stroke line icon) beside a title and Dusk Grey line.

### Navigation

- Sticky translucent header, 68px, logo + "A BLOC" wordmark (700, 18px, -0.02em) left, links right in Dusk Grey 15px 400 turning ink on hover or `aria-current`, yellow button last. Links hide under 640px.
- Footer repeats the brand, a wrapped link row in Dusk Grey (ink + underline on hover) and a 13px fine-print line above a Hairline.

### FAQ Disclosure

Native `details`/`summary` rows divided by Hairlines; 18px 700 question, Royal Purple drawn chevron that rotates from down to up over 0.3s.

### Phone Frame (signature)

A true device: Night Violet bezel (10px padding, 44px radius, Phone shadow) around a 945:2048 screen holding a real app screenshot cropped to cover. On the landing story it is sticky and swaps screens per step with a bottom-up clip-path wipe (0.8s, with a 1.04 scale settling to 1); the outgoing screen stays fully opaque underneath until the wipe ends, so no blank flash ever shows. Reduced motion removes the wipe.

### Map-Pin Step Marker (signature)

16px teardrop on the story rail. At rest: white fill, 2px Royal Purple border at 40% alpha. Active step: solid Royal Purple, scaled 1.25, over 0.4s ease-out.

### Mascot Crew (signature)

Two characters, both from the app, never redrawn and never geometric-masked:

- **Les piments** are the ExploRiders' own map avatars (`app/(tabs)/assets/online/map/Piment-N.png`). They carry the community. Never use a flame-crowned piment (reserved for level 10).
- **Coach Moustache** (a moustached brain in a green trail cap) is the AI coach, and appears only beside the coach phone.

Assets are trimmed WebP cut-outs in `assets/piments/` and `assets/mascots/coach.webp`.

- **Hero crew:** the sport list. Six-column grid (max 620px), one full-body piment per sport in its gear (47 Grimpe, 25 Gravel, 9 Trail, 43 Surf, 41 Skate, 35 Ski), up to 104px over a 12-14px Dusk Grey label, soft violet drop-shadow; hover tilts it (-5px, -6deg, 0.35s ease-out). Stays on one row down to 320px.
- **Coach lean-in:** Coach Moustache (alt "Coach Moustache, la mascotte d'A BLOC") overlaps the right edge of the coach-section phone, 120-200px.
- **Band peek:** six plain piment heads (2, 45, 3, 31, 1, 17) rise from behind the yellow CTA band's top edge (bodies hidden by an overflow clip), staggered 60ms, 0.9s ease-out, once on first view. Visible by default without JS; reduced motion skips the rise.

### Highlighter Mark

The key word of the hero headline gets a Sun Yellow band from 62% to 92% of its line height, like a marker stroke. One word per headline.

## Do's and Don'ts

### Do:

- **Do** take every colour, radius and weight from the app's `styles.tsx`; check there before adding a token.
- **Do** put Night Violet text on Sun Yellow, and use Burnt Amber when yellow-family text must sit on white.
- **Do** show the product only through real app screenshots inside the phone frame.
- **Do** let the piments and Coach Moustache carry personality, in at most three places per page: the hero crew, beside the coach phone, peeking over the yellow band.
- **Do** make the store badge pair the primary action wherever download is the goal.
- **Do** use Lilac Veil panels and fact chips for guidance and data, Yellow Wash chips for identity labels.
- **Do** keep shadows soft, negatively spread and violet-tinted (see Shadow Vocabulary).
- **Do** let headings stand alone: no kicker or eyebrow line above them.
- **Do** honour `prefers-reduced-motion`: all transitions and the screen wipe switch off.

### Don't:

- **Don't** load or use Inter weights other than 400 and 700.
- **Don't** add a dark theme or put a whole page on a dark ground; Night Violet is for ink, the phone bezel and the store badges.
- **Don't** drench more than the two bands (purple manifesto, yellow close) on one page.
- **Don't** set Sun Yellow text on white.
- **Don't** use mock UI, illustrated phones or stock imagery in place of real screenshots.
- **Don't** use emoji or icon-font glyphs as icons; icons are inline 24px line SVGs at 2px stroke.
- **Don't** use zero-blur offset shadows.
