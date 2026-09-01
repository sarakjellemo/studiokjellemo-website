"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ImageGallery.module.css";

interface Props {
  images: string[];
  buttonLabel: string;
}

export default function ImageGallery({ images, buttonLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((p) => (p! + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((p) => (p! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <>
      <button className={styles.openBtn} onClick={() => setOpen(true)}>
        {buttonLabel}
      </button>

      {mounted && open && createPortal(
        <div className={styles.overlay}>
          <div className={styles.header}>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕ Close</button>
          </div>
          <div className={styles.grid}>
            {images.map((src, i) => (
              <div key={i} className={styles.thumb} onClick={() => setActive(i)}>
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}

      {mounted && active !== null && createPortal(
        <div className={styles.lightbox} onClick={() => setActive(null)}>
          <button className={styles.lbClose} onClick={() => setActive(null)}>✕</button>
          <button className={styles.lbPrev} onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length); }}>‹</button>
          <img
            src={images[active]}
            alt=""
            className={styles.lbImg}
            onClick={(e) => e.stopPropagation()}
          />
          <button className={styles.lbNext} onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length); }}>›</button>
        </div>,
        document.body
      )}
    </>
  );
}
