"use client";

import { useEffect, useRef } from "react";

export function HeroAtmosphere() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const place = () => {
      const rect = root.getBoundingClientRect();
      x = rect.width * 0.28;
      y = rect.height * 0.42;
      targetX = x;
      targetY = y;
      root.style.setProperty("--glow-x", `${x}px`);
      root.style.setProperty("--glow-y", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
    };

    const tick = () => {
      x += (targetX - x) * 0.05;
      y += (targetY - y) * 0.05;
      root.style.setProperty("--glow-x", `${x}px`);
      root.style.setProperty("--glow-y", `${y}px`);
      frame = window.requestAnimationFrame(tick);
    };

    place();
    window.addEventListener("pointermove", onMove);
    window.addEventListener("resize", place);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", place);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="hero-atmosphere pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-glow absolute" />
      <div className="hero-grain absolute inset-0" />
    </div>
  );
}
