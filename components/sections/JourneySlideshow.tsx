"use client";

import { useEffect, useState } from "react";
import { GalleryImage } from "./GalleryImage";

type Stage = { label: string; local_path: string };

function Card({
  name,
  stage,
  index,
  width,
  height,
  bordered,
  labelPosition,
}: {
  name: string;
  stage: Stage;
  index: number;
  width: number;
  height?: number;
  bordered: boolean;
  labelPosition: "below" | "overlay";
}) {
  return (
    <div style={{ width }} className="shrink-0">
      <div
        style={height ? { height } : undefined}
        className={`relative w-full overflow-hidden bg-white shadow-2xl transition-transform duration-300 ease-out hover:-rotate-2 hover:shadow-[0_35px_60px_-15px_rgba(42,21,16,0.45)] ${
          bordered ? "border-8 border-white" : "rounded-md"
        } ${height ? "" : "aspect-[3/4]"}`}
      >
        <GalleryImage
          src={`/${stage.local_path}`}
          alt={`${name} — ${stage.label}`}
          index={index}
          sizes={`${width}px`}
        />
        {labelPosition === "overlay" && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-nav-ink/85 py-1.5 text-center font-nav text-sm font-bold text-white">
            {stage.label}
          </div>
        )}
      </div>

      {labelPosition === "below" && (
        <p className="mt-2 text-center font-nav text-sm text-nav-ink">
          {stage.label}
        </p>
      )}
    </div>
  );
}

export function JourneySlideshow({
  name,
  stages,
  width,
  height,
  bordered = true,
  labelPosition = "below",
  visibleCount = 3,
  gap = 16,
}: {
  name: string;
  stages: Stage[];
  width: number;
  height?: number;
  bordered?: boolean;
  labelPosition?: "below" | "overlay";
  visibleCount?: number;
  gap?: number;
}) {
  const visible = Math.min(visibleCount, stages.length);
  const canSlide = stages.length > visible;

  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);

  const track = canSlide ? [...stages, ...stages.slice(0, visible)] : stages;

  useEffect(() => {
    if (!canSlide) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearInterval(id);
  }, [canSlide]);

  useEffect(() => {
    if (!canSlide || index !== stages.length) return;
    const timeout = setTimeout(() => {
      setAnimated(false);
      setIndex(0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [index, canSlide, stages.length]);

  useEffect(() => {
    if (animated) return;
    const raf = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(raf);
  }, [animated]);

  const step = width + gap;
  const containerWidth = visible * width + (visible - 1) * gap;
  const activeDot = index % stages.length;

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: containerWidth }} className="overflow-hidden">
        <div
          className={`flex ${animated ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ gap, transform: `translateX(-${index * step}px)` }}
        >
          {track.map((stage, i) => (
            <Card
              key={`${stage.local_path}-${i}`}
              name={name}
              stage={stage}
              index={i % stages.length}
              width={width}
              height={height}
              bordered={bordered}
              labelPosition={labelPosition}
            />
          ))}
        </div>
      </div>

      {canSlide && (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {stages.map((stage, i) => (
            <button
              key={stage.local_path}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${stage.label}`}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                i === activeDot ? "bg-nav-accent" : "bg-nav-ink/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
