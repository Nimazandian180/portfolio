"use client";
import { Children, useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

export function ProjectSlider({
  children,
  locale,
  count,
  projectNames,
}: {
  children: ReactNode;
  locale: Locale;
  count: number;
  projectNames: string[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!api) return;
    const update = () => setIndex(api.selectedScrollSnap());
    update();
    api.on("select", update).on("reInit", update);
    return () => {
      api.off("select", update).off("reInit", update);
    };
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        direction: locale === "fa" ? "rtl" : "ltr",
        containScroll: false,
        watchDrag: (_api, event) =>
          !(
            event.target instanceof Element &&
            event.target.closest("a, button, summary, input")
          ),
      }}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="project-slider"
      tabIndex={0}
      aria-label={locale === "en" ? "Selected projects" : "پروژه‌های منتخب"}
    >
      <div className="slider-toolbar">
        <span>
          {locale === "en" ? "Drag to explore" : "برای دیدن پروژه‌ها بکشید"}
        </span>
        <div className="slider-controls">
          <span className="slide-counter" dir="ltr" aria-live="polite">
            {String(index + 1).padStart(2, "0")}{" "}
            <span>/ {String(count).padStart(2, "0")}</span>
          </span>
          <CarouselPrevious
            aria-label={locale === "en" ? "Previous project" : "پروژه قبلی"}
          />
          <CarouselNext
            aria-label={locale === "en" ? "Next project" : "پروژه بعدی"}
          />
        </div>
      </div>
      <CarouselContent className="slider-track">
        {Children.map(children, (child, position) => (
          <CarouselItem
            className="project-slide"
            aria-label={`${position + 1} / ${count}: ${projectNames[position]}`}
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className="slider-position"
        aria-label={locale === "en" ? "Choose a project" : "انتخاب پروژه"}
      >
        {projectNames.map((name, position) => (
          <button
            key={name}
            onClick={() =>
              api?.scrollTo(
                position,
                window.matchMedia("(prefers-reduced-motion: reduce)").matches,
              )
            }
            aria-label={locale === "en" ? `Show ${name}` : `نمایش ${name}`}
            aria-current={position === index ? "true" : undefined}
          >
            <span />
          </button>
        ))}
      </div>
    </Carousel>
  );
}
