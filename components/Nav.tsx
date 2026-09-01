"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      nav.style.boxShadow =
        window.scrollY > 20 ? "0 2px 20px rgba(0,0,0,.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav ref={navRef} className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          <Image src="/images/logo-black.png" alt="Studio Kjellemo" width={140} height={40} />
        </Link>
        <ul className={styles.navLinks}>
          <li className={styles.navHasDropdown}>
            <a href="#services">Services</a>
            <ul className={styles.navDropdown}>
              <li><Link href="/web-design">Web Design</Link></li>
              <li><Link href="/branding-identity">Branding &amp; Identity</Link></li>
              <li><Link href="/visual-content">Visual Content</Link></li>
              <li><Link href="/graphic-design">Graphic Design</Link></li>
            </ul>
          </li>
          <li><a href="#work">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Pricing</a></li>
        </ul>
        <a href="#contact" className={styles.navCta}>Contact</a>
        <button
          className={`${styles.navHamburger}${isOpen ? " " + styles.open : ""}`}
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu}${isOpen ? " " + styles.open : ""}`}>
        <button className={styles.mobileMenuCloseBtn} aria-label="Close menu" onClick={close} />
        <ul>
          <li>
            <a href="#services" onClick={close}>Services</a>
            <ul className={styles.mobileMenuSub}>
              <li><Link href="/web-design" onClick={close}>Web Design</Link></li>
              <li><Link href="/branding-identity" onClick={close}>Branding &amp; Identity</Link></li>
              <li><Link href="/visual-content" onClick={close}>Visual Content</Link></li>
              <li><Link href="/graphic-design" onClick={close}>Graphic Design</Link></li>
            </ul>
          </li>
          <li><a href="#work" onClick={close}>Portfolio</a></li>
          <li><a href="#about" onClick={close}>About</a></li>
          <li><a href="#contact" onClick={close}>Pricing</a></li>
        </ul>
        <div className={styles.mobileMenuCta}>
          <a href="#contact" className="btn btn-dark" onClick={close}>Contact</a>
        </div>
      </div>
    </>
  );
}
