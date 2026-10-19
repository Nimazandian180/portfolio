---
name: Nima Zandian Portfolio
description: A dark developer portfolio with sculptural 3D motion and a horizontal work showcase.
colors:
  primary: "#a3efca"
  neutral-bg: "#0c0f10"
  surface: "#14191b"
  foreground: "#ebefed"
  muted: "#9ba7a3"
  line: "#2b3333"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(44px, 5.7vw, 82px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
spacing:
  compact: "8px"
  regular: "16px"
  roomy: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#10231c"
    padding: "14px 22px"
---

## Overview
The October 2026 redesign replaces the earlier warm paper direction at the user's request. A near-black studio setting gives the developer's work and animated mechanical hands priority. Real project facts, bilingual routes, contact links, and resume downloads are retained.

## Colors
Mint highlights primary actions, the current development year, and 3D lighting. Muted green-gray carries supporting copy. Project illustrations use subdued material colors within the dark world.

## Typography
Locally hosted Geist remains the English face; Vazirmatn is the Persian face. Persian headings use relaxed line-height and no negative tracking. Project descriptions and contributions remain readable text, not artwork.

## Layout
The desktop container is capped at 1320px. The opening combines introduction and 3D scene. Projects use the locally installed shadcn/ui carousel backed by Embla for a horizontal showcase with a partial next slide on desktop and one full slide on mobile. The timeline orders 2023–2026 left to right while Persian descriptions retain RTL reading order. Mobile collapses the hero and about area to single columns.

## Elevation & Depth
The skills area adds six pastel paper sheets with CSS perspective, layered paper edges, folded corners, hover lift, and gentle floating motion. CSS keeps the sheets visible without WebGL. Reduced motion stops floating and pointer tilt. Three.js models the keyboard and articulated hands with local geometry. No external 3D models or textures load. Illustration depth stays inside project artwork; content surfaces remain flat and divided by fine rules.

## Shapes
Square buttons, thin dividers, rounded keycaps, and small status dots. Keep the work presentation spacious rather than arranging projects as a product catalog.

## Components
The project slider delegates drag, touch, snap positioning, and click suppression to Embla through shadcn/ui. Buttons, project selectors, reduced-motion jumps, and RTL directional keyboard navigation remain available. Project contributions use native disclosures. The loader waits for fonts and the first scene render, then fades out; skip, timeout, no-WebGL, and no-JavaScript fallbacks preserve access. Reduced motion stops decorative animation. The scene pauses outside the viewport and when the document is hidden.

## Do's and Don'ts
Preserve actual project statuses and URLs. Keep project illustrations explicitly labeled as illustrative. Do not fabricate yearly milestones or metrics. Maintain keyboard focus indicators and both language layouts. Do not reintroduce the superseded light commerce-style treatment.
