"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/mgaeoydk", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerTop}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <Image src="/images/logo-white.png" alt="Studio Kjellemo" width={140} height={40} />
          </div>
          <p className={styles.footerTagline}>Let&apos;s build something you&apos;re proud to put your name on.</p>
          <ul className={styles.footerLinks}>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Portfolio</a></li>
            <li><a href="#contact">Pricing</a></li>
            <li><a href="https://www.instagram.com/studiokjellemo/" target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>Start a project.</h3>
          <p className={styles.footerContactSub}>
            Tell me a little about your brand and what you&apos;re looking for — I&apos;ll get back to you with a tailored quote.
          </p>
          <p className={styles.footerPricingNote}>
            Wondering about pricing? Every project is different — reach out and I&apos;ll put together something that fits your needs and budget.
          </p>

          {status === "success" ? (
            <div className={styles.formSuccess}>
              <div className={styles.formSuccessIcon}>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <path d="M2 10L8.5 16.5L22 2" stroke="#1a1a18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Message sent!</h4>
              <p>Thank you for reaching out. I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className={styles.formField}>
                <label htmlFor="service">What are you looking for?</label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Branding &amp; Identity</option>
                  <option>Content Creation</option>
                  <option>Creative Direction</option>
                  <option>Campaigns &amp; Launches</option>
                  <option>Monthly Retainer</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label htmlFor="message">Tell me about your project</label>
                <textarea id="message" name="message" rows={5} placeholder="What's your brand, what do you need, and when do you need it?" />
              </div>
              <div className={styles.formSubmit}>
                <button type="submit" className={styles.btnSubmit} disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>
              {status === "error" && (
                <p className={styles.formError}>Something went wrong. Please try again or email sara.kjellemo@live.se directly.</p>
              )}
            </form>
          )}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerCopy}>&copy; 2026 Studio Kjellemo. All rights reserved.</p>
        <div className={styles.footerSocial}>
          <a href="https://www.instagram.com/studiokjellemo/" target="_blank" rel="noopener" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
