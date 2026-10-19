"use client";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/content";
export function HeroScene({ locale }: { locale: Locale }) {
  const host = useRef<HTMLDivElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    if (!loading) return;
    const previous = document.activeElement;
    skip.current?.focus({ preventScroll: true });
    const trap = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        event.preventDefault();
        skip.current?.focus({ preventScroll: true });
      }
      if (event.key === "Escape") setLoading(false);
    };
    document.addEventListener("keydown", trap);
    return () => {
      document.removeEventListener("keydown", trap);
      if (previous instanceof HTMLElement)
        previous.focus({ preventScroll: true });
    };
  }, [loading]);
  useEffect(() => {
    let cancelled = false,
      dispose: (() => void) | undefined;
    let exitTimer: number;
    const reveal = () => {
      if (cancelled) return;
      setExiting(true);
      exitTimer = window.setTimeout(() => {
        if (!cancelled) setLoading(false);
      }, 400);
    };
    const timeout = window.setTimeout(reveal, 7000);
    async function start() {
      try {
        const [{ mountTypingScene }] = await Promise.all([
          import("./typing-scene"),
          document.fonts.ready,
        ]);
        if (cancelled || !host.current) return;
        dispose = mountTypingScene(host.current, reveal);
      } catch {
        if (!cancelled) {
          setFailed(true);
          reveal();
        }
      } finally {
        clearTimeout(timeout);
      }
    }
    void start();
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      clearTimeout(exitTimer);
      dispose?.();
    };
  }, []);
  return (
    <>
      {loading && (
        <div
          className={`loading-screen${exiting ? " is-leaving" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={locale === "en" ? "Setting the scene" : "آماده‌سازی صحنه"}
        >
          <div className="loader-logo">
            nz<span>.</span>
          </div>
          <div className="loader-track">
            <i />
          </div>
          <p>{locale === "en" ? "Setting the scene" : "آماده‌سازی صحنه"}</p>
          <span className="loader-note">
            {locale === "en"
              ? "A few things coming together."
              : "همه‌چیز در حال آماده شدن است."}
          </span>
          <button ref={skip} onClick={() => setLoading(false)}>
            {locale === "en" ? "Skip intro" : "رد کردن مقدمه"} ↗
          </button>
        </div>
      )}
      <div
        className="scene-host"
        ref={host}
        role="img"
        aria-label={
          locale === "en"
            ? "Animated 3D mechanical hands typing on a keyboard"
            : "دست‌های مکانیکی سه‌بعدی در حال تایپ روی کیبورد"
        }
      />
      <div
        className={`scene-fallback${failed ? " is-visible" : ""}`}
        aria-hidden="true"
      >
        <span>&lt;/&gt;</span>
        <div className="fallback-keys">
          {"⌘  N I M A  ↵".split(" ").map((k, i) => (
            <i key={i}>{k}</i>
          ))}
        </div>
      </div>
      <div className="scene-caption">
        <span>
          <i />
          {locale === "en" ? "Always building." : "همیشه در حال ساختن."}
        </span>
        <span>CODE → EXPERIENCE</span>
      </div>
    </>
  );
}
