"use client";

import type { CSSProperties, PointerEvent } from "react";
import type { Locale } from "@/lib/content";

const sheets = [
  {
    name: "Next.js",
    mark: "N",
    note: "THE FRAMEWORK",
    color: "#e5e8e2",
    angle: -9,
  },
  {
    name: "React",
    mark: "react",
    note: "THE INTERFACE",
    color: "#c8e4e8",
    angle: 5,
  },
  {
    name: "JavaScript",
    mark: "JS",
    note: "THE LANGUAGE",
    color: "#ede1aa",
    angle: -5,
  },
  {
    name: "TypeScript",
    mark: "TS",
    note: "THE STRUCTURE",
    color: "#cbdced",
    angle: 7,
  },
  {
    name: "HTML & CSS",
    mark: "</>",
    note: "THE FOUNDATION",
    color: "#ddd2e8",
    angle: -6,
  },
  {
    name: "Git",
    mark: "git",
    note: "THE WORKFLOW",
    color: "#e6cdc1",
    angle: 8,
  },
];

export function SkillPapers({ locale }: { locale: Locale }) {
  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--paper-tilt-y",
      `${((event.clientX - bounds.left) / bounds.width - 0.5) * 12}deg`,
    );
    event.currentTarget.style.setProperty(
      "--paper-tilt-x",
      `${8 - ((event.clientY - bounds.top) / bounds.height - 0.5) * 8}deg`,
    );
  }
  return (
    <div
      className="paper-gallery"
      onPointerMove={tilt}
      onPointerLeave={(event) => {
        event.currentTarget.style.removeProperty("--paper-tilt-y");
        event.currentTarget.style.removeProperty("--paper-tilt-x");
      }}
    >
      <p className="paper-intro">
        {locale === "en"
          ? "The tools I reach for, from the first line to the final detail."
          : "ابزارهایی که با آن‌ها می‌سازم؛ از اولین خط کد تا آخرین جزئیات."}
      </p>
      <ul
        className="paper-stage"
        dir="ltr"
        aria-label={locale === "en" ? "My core skills" : "مهارت‌های اصلی من"}
      >
        {sheets.map((sheet, i) => (
          <li
            className="skill-sheet"
            key={sheet.name}
            style={
              {
                "--sheet-color": sheet.color,
                "--sheet-angle": `${sheet.angle}deg`,
                "--sheet-delay": `${i * -1.3}s`,
              } as CSSProperties
            }
          >
            <div className="paper-face">
              <span className="paper-note" aria-hidden="true">
                {sheet.note}
              </span>
              <div className="paper-symbol" aria-hidden="true">
                {sheet.mark === "react" ? (
                  <svg
                    viewBox="-55 -55 110 110"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <ellipse rx="49" ry="19" />
                    <ellipse rx="49" ry="19" transform="rotate(60)" />
                    <ellipse rx="49" ry="19" transform="rotate(120)" />
                    <circle r="7" fill="currentColor" stroke="none" />
                  </svg>
                ) : (
                  <span>{sheet.mark}</span>
                )}
              </div>
              <h3>{sheet.name}</h3>
              <div className="paper-rules" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span className="paper-signature" aria-hidden="true">
                n.z. / development
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
