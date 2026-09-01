"use client";

import { useEffect } from "react";

export default function BrandingClient() {
  useEffect(() => {
    const slides = document.querySelectorAll<HTMLElement>("[data-slide]");
    if (!slides.length) return;
    let current = 0;
    const timer = setInterval(() => {
      (slides[current] as HTMLElement).style.opacity = "0";
      current = (current + 1) % slides.length;
      (slides[current] as HTMLElement).style.opacity = "1";
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return null;
}
