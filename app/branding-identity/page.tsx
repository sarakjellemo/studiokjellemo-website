import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import BrandingClient from "./BrandingClient";
import s from "@/styles/service.module.css";

export const metadata: Metadata = {
  title: "Branding & Identity — Studio Kjellemo | Freelance Brand Designer Sweden",
  description: "Strategic branding and visual identity by Studio Kjellemo. Logos, colour systems, typography and brand guidelines that make your business unforgettable.",
  alternates: { canonical: "https://www.studiokjellemo.com/branding-identity" },
};

export default function BrandingIdentity() {
  return (
    <>
      {/* HERO */}
      <section className={s.serviceHero}>
        <div className={s.serviceHeroInner}>
          <div className={s.serviceHeroContent}>
            <p className={s.breadcrumb}>
              <Link href="/">Home</Link>
              <span>→</span>
              Services
            </p>
            <h1>Branding &amp; Visual Identity</h1>
            <p className={s.heroTagline}>Build a brand that feels like you.</p>
            <p className={s.heroBody}>
              Your brand is more than a logo. It&apos;s the colors, typography, imagery and details that make people recognise you, and remember you. I create visual identities that turn your ideas, personality and ambitions into a cohesive brand that feels uniquely yours.
            </p>
            <a href="#contact" className="btn btn-dark" style={{ alignSelf: "flex-start" }}>Start your brand project</a>
          </div>
          <div className={s.serviceHeroImage}>
            <BrandingClient />
            {["branding-1.png", "branding-2.png", "branding-3.png", "branding-4.png"].map((src, i) => (
              <img
                key={src}
                src={`/images/${src}`}
                alt=""
                data-slide="true"
                className={s.heroSlide}
                style={{ opacity: i === 0 ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={s.intro}>
        <div className={s.introVisual}>
          <img src="/images/branding-intro.png" alt="" />
          <div className={s.introVisualAccent} />
        </div>
        <div className={s.introContent}>
          <p className="section-label">Why it matters</p>
          <h2>A logo is a start.<br />A brand is everything else.</h2>
          <p>Strong branding isn&apos;t just about looking good — it&apos;s about creating instant recognition and building trust before you&apos;ve even said a word. It&apos;s the difference between a business that gets scrolled past and one that gets remembered.</p>
          <p>When your visuals are consistent, intentional and authentically yours, your audience feels it. They trust you more, remember you longer, and choose you over the competition — even when the price is higher.</p>
        </div>
      </section>

      {/* INCLUDED */}
      <section className={s.included}>
        <div className={s.includedHeader}>
          <p className="section-label">What&apos;s included</p>
          <h2>Everything your brand needs<br />to show up with confidence.</h2>
        </div>
        <div className={s.includedGrid}>
          {[
            { n: "01", name: "Logo Design", desc: "A primary logo plus variations — horizontal, stacked, icon-only — for every context from business cards to billboard." },
            { n: "02", name: "Brand Colors", desc: "A thoughtfully chosen color palette with primary, secondary and neutral tones — with HEX, RGB and CMYK codes for every use case." },
            { n: "03", name: "Typography", desc: "Font pairings that reflect your brand personality — with clear hierarchy rules for headings, body text and accent copy." },
            { n: "04", name: "Moodboard", desc: "A curated visual direction that sets the tone — imagery style, textures, mood and aesthetic references that guide every future creative decision." },
            { n: "05", name: "Visual Direction", desc: "Guidelines for how your brand looks in practice — layout principles, spacing, imagery usage and do's & don'ts." },
            { n: "06", name: "Icons", desc: "A custom icon set or curated library that matches your brand's visual language — consistent, scalable and ready to use." },
            { n: "07", name: "AI Imagery", desc: "Custom AI-generated visuals trained on your brand's aesthetic — unique imagery that you own and can use across all channels." },
            { n: "08", name: "Social Media Covers", desc: "Profile images, story covers and highlight icons sized and styled for Instagram, LinkedIn and beyond — ready to go from day one." },
          ].map((item) => (
            <div key={item.n} className={s.includedItem}>
              <p className={s.includedNumber}>{item.n}</p>
              <p className={s.includedName}>{item.name}</p>
              <p className={s.includedDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className={s.addons}>
        <div className={s.addonsHeader}>
          <p className={s.sectionLabelLight}>Optional add-ons</p>
          <h2>Take your brand further.</h2>
          <p>Complement your brand identity with additional creative services — built on the same visual language, so everything stays consistent.</p>
        </div>
        <div className={s.addonsGrid}>
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="6" stroke="#1a1a18" strokeWidth="1.5" />
                  <path d="M6 9l2 2 4-4" stroke="#1a1a18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              name: "Custom AI Imagery",
              desc: "Bespoke AI-generated visuals trained on your brand's aesthetic. Unique, ownable imagery you can use across your website, social media and campaigns — without a photoshoot.",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="1" stroke="#1a1a18" strokeWidth="1.5" />
                  <circle cx="6" cy="8" r="1.5" fill="#1a1a18" />
                  <path d="M2 13l4-4 3 3 2-2 5 5" stroke="#1a1a18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              name: "Photography",
              desc: "Brand photography that captures your product, space or personality in a way that's consistent with your new visual identity. Shot and edited to match your brand palette and tone.",
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 15l4-4 2 2 6-8" stroke="#1a1a18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14" cy="4" r="2" stroke="#1a1a18" strokeWidth="1.5" />
                </svg>
              ),
              name: "Image Editing",
              desc: "Professional retouching, colour grading and compositing of existing photos — adjusted to align with your brand's palette and visual style for a polished, cohesive look.",
            },
          ].map((item) => (
            <div key={item.name} className={s.addonCard}>
              <div className={s.addonIcon}>{item.icon}</div>
              <p className={s.addonName}>{item.name}</p>
              <p className={s.addonDesc}>{item.desc}</p>
              <span className={s.addonBadge}>Add-on</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={s.serviceCta}>
        <p className="section-label">Ready to start?</p>
        <h2>Let&apos;s build a brand you&apos;re proud to put your name on.</h2>
        <p>Tell me about your business and what you&apos;re looking for.</p>
        <div className={s.ctaActions}>
          <a href="#contact" className="btn btn-dark">Get in touch</a>
          <a href="#contact" className={s.btnOutlineLight}>View pricing</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
