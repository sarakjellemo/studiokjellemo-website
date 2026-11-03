"use client";

import { useEffect } from "react";
import s from "./moment.module.css";

export default function MomentClient() {
  useEffect(() => {
    document.body.classList.add("moment-page");
    return () => document.body.classList.remove("moment-page");
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const els = document.querySelectorAll<HTMLElement>(`.${s.mReveal}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.mVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
