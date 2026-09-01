"use client";

import { useEffect } from "react";

export default function HomeClient() {
  useEffect(() => {
    // rAF-driven intro marquee (never paused by iOS)
    const track = document.getElementById("introMarqueeTrack") as HTMLElement | null;
    if (!track) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const speed = isMobile ? 0.4 : 0.7;
    let x = 0;
    let raf: number;

    function step() {
      const half = track!.scrollWidth / 2;
      x -= speed;
      if (Math.abs(x) >= half) x = 0;
      track!.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    }

    function start() { if (!raf) raf = requestAnimationFrame(step); }
    function stop() { cancelAnimationFrame(raf); raf = 0; }

    start();
    document.addEventListener("visibilitychange", () => {
      document.hidden ? stop() : start();
    });

    // Sticky hero — hide once past services section
    const hero = document.querySelector<HTMLElement>(".hero-sticky");
    const services = document.querySelector<HTMLElement>("#services");
    if (hero && services) {
      function onScroll() {
        const bottom = services!.getBoundingClientRect().bottom;
        hero!.style.display = bottom <= 0 ? "none" : "";
      }
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
