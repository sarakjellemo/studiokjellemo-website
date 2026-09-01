"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const hamburger = hamburgerRef.current;
    const menu = menuRef.current;
    if (!nav || !hamburger || !menu) return;

    // Nav shadow on scroll
    const onScroll = () => {
      nav.style.boxShadow =
        window.scrollY > 20 ? "0 2px 20px rgba(0,0,0,.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Hamburger toggle
    const toggleMenu = () => {
      const isOpen = menu.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    };
    hamburger.addEventListener("click", toggleMenu);

    // Close on link click
    const closeLinks = menu.querySelectorAll<HTMLElement>(".mobileMenuClose");
    const close = () => {
      menu.classList.remove("open");
      hamburger.classList.remove("open");
      document.body.style.overflow = "";
    };
    closeLinks.forEach((el) => el.addEventListener("click", close));
    const closeBtn = menu.querySelector<HTMLButtonElement>(".mobileMenuCloseBtn");
    closeBtn?.addEventListener("click", close);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
        <button ref={hamburgerRef} className={styles.navHamburger} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      <div ref={menuRef} className={styles.mobileMenu} id="mobileMenu">
        <button className={`${styles.mobileMenuCloseBtn} mobileMenuCloseBtn`} aria-label="Close menu" />
        <ul>
          <li>
            <a href="#services" className="mobileMenuClose">Services</a>
            <ul className={styles.mobileMenuSub}>
              <li><Link href="/web-design" className="mobileMenuClose">Web Design</Link></li>
              <li><Link href="/branding-identity" className="mobileMenuClose">Branding &amp; Identity</Link></li>
              <li><Link href="/visual-content" className="mobileMenuClose">Visual Content</Link></li>
              <li><Link href="/graphic-design" className="mobileMenuClose">Graphic Design</Link></li>
            </ul>
          </li>
          <li><a href="#work" className="mobileMenuClose">Portfolio</a></li>
          <li><a href="#about" className="mobileMenuClose">About</a></li>
          <li><a href="#contact" className="mobileMenuClose">Pricing</a></li>
        </ul>
        <div className={styles.mobileMenuCta}>
          <a href="#contact" className="btn btn-dark mobileMenuClose">Contact</a>
        </div>
      </div>
    </>
  );
}
