"use client";

import { useEffect, useRef, useState } from "react";
import s from "./moment.module.css";

const IMAGES = [
  "/images/hero-banner/banner-1.png",
  "/images/hero-banner/banner-2.png",
  "/images/hero-banner/banner-4.png",
  "/images/hero-banner/banner-5.png",
  "/images/hero-banner/banner-6.png",
  "/images/hero-banner/banner-7.png",
  "/images/hero-banner/banner-3.png",
  "/images/AI-images/ai-9.png",
];

// Fixed rotations and offsets so each card has an organic look
const TRANSFORMS = [
  { rotate: -6,  x: 8,  y: 6  },
  { rotate: 3,   x: -10, y: -4 },
  { rotate: -2,  x: 5,  y: 8  },
  { rotate: 7,   x: -6, y: 3  },
  { rotate: -4,  x: 10, y: -7 },
  { rotate: 5,   x: -4, y: 5  },
  { rotate: -8,  x: 7,  y: -3 },
  { rotate: 2,   x: -8, y: 6  },
];

export default function PolaroidStack() {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const tick = () => {
            setActive(i);
            if (i < IMAGES.length - 1) {
              i++;
              setTimeout(tick, 800);
            }
          };
          setTimeout(tick, 300);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={s.mPolaroidStack} ref={ref}>
      {IMAGES.map((src, i) => {
        const t = TRANSFORMS[i % TRANSFORMS.length];
        const isActive = i === active;
        const isPlaced = i < active;
        return (
          <div
            key={i}
            className={`${s.mPolaroidCard} ${isActive ? s.mPolaroidCardActive : ""} ${isPlaced ? s.mPolaroidCardPlaced : ""}`}
            style={{
              zIndex: isActive ? 20 : i + 1,
              "--rot": `${t.rotate}deg`,
              "--tx": `${t.x}px`,
              "--ty": `${t.y}px`,
            } as React.CSSProperties}
          >
            <img src={src} alt="" loading="lazy" style={i === IMAGES.length - 1 ? { objectPosition: "center 20%" } : undefined} />
          </div>
        );
      })}
    </div>
  );
}
