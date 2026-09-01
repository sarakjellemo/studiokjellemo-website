import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import s from "@/styles/service.module.css";

export const metadata: Metadata = {
  title: "Graphic Design — Studio Kjellemo | Freelance Graphic Designer Sweden",
  description: "Graphic design for every part of your business — presentations, social media, posters, marketing materials and more. Studio Kjellemo, based in Sweden.",
  alternates: { canonical: "https://www.studiokjellemo.com/graphic-design" },
};

const CANVAS_ITEMS = [
  { img: "gd-hero-1.png", label: "Poster" },
  { img: "gd-hero-2.png", label: "Social media" },
  { img: "gd-hero-3.png", label: "Presentation" },
  { img: "gd-hero-4.png", label: "Print" },
  { img: "gd-hero-5.png", label: "Campaign" },
];

export default function GraphicDesign() {
  return (
    <>
      {/* HERO */}
      <section className={s.gdHero}>
        <div className={s.gdHeroText}>
          <div className={s.gdHeroLeft}>
            <p className={s.breadcrumb}>
              <Link href="/">Home</Link>
              <span>→</span>
              Services
            </p>
            <h1>Graphic Design</h1>
            <p className={s.gdHeroTagline}>The details that make your brand feel complete.</p>
          </div>
          <div>
            <p className={s.heroBody} style={{ marginTop: 40 }}>
              From social media graphics and presentations to posters, marketing materials and digital documents, I create thoughtful designs that make your brand look polished and consistent across every touchpoint.
            </p>
            <a href="#contact" className="btn btn-dark">Discuss a design project</a>
          </div>
        </div>
        <div className={s.gdHeroCanvas}>
          {CANVAS_ITEMS.map((item) => (
            <div key={item.img} className={s.hcItem}>
              <img src={`/images/${item.img}`} alt="" />
              <span className={s.hcLabel}>{item.label}</span>
            </div>
          ))}
        </div>
        <div className={s.heroBar} />
      </section>

      {/* MORE THAN */}
      <section className={s.moreThan}>
        <div className={s.moreThanContent}>
          <span className="section-label">Graphic design for every part of your business</span>
          <h2>A brand is more than a logo and a website.</h2>
          <p>Every day, businesses interact with their customers through dozens of small touchpoints — a social post, a presentation, a PDF, a flyer, a document. These are the moments where the brand either holds together or starts to drift.</p>
          <p>Graphic design brings the brand into all those smaller details and communication pieces. It&apos;s what makes everything feel like it belongs to the same world — not like it was thrown together last minute.</p>
        </div>
      </section>

      {/* WHAT I DESIGN */}
      <section className={s.whatIDesign}>
        <div className={s.widHeader}>
          <span className="section-label">What I design</span>
          <h2>Design that works across every format.</h2>
        </div>
        <div className={s.widGrid}>
          {[
            { name: "Presentations", desc: "Professional and visually engaging presentations that make information easier to understand and remember — for clients, investors or internal use.", full: false },
            { name: "Social Media Graphics", desc: "Branded visuals for Instagram, LinkedIn and other social platforms — from single posts and stories to full content templates.", full: false },
            { name: "Posters & Flyers", desc: "Eye-catching designs for events, promotions, campaigns and announcements — ready for print or digital use in the correct formats.", full: false },
            { name: "Marketing Materials", desc: "Visual assets for campaigns, launches, promotions and everyday marketing — designed to communicate clearly and feel on-brand.", full: false },
            { name: "Digital Documents", desc: "Guides, PDFs, brochures, proposals and other digital materials designed around your brand — structured, readable and visually strong.", full: false },
            { name: "Print Design", desc: "Business cards, printed materials and other physical brand touchpoints designed to feel as considered as everything else you put your name on.", full: false },
            { name: "Custom Projects", desc: "Have something specific in mind? Bring me the idea and we can develop the visual solution together — whatever the format or brief.", full: true },
          ].map((card) => (
            <div key={card.name} className={`${s.widCard}${card.full ? " " + s.widCardFull : ""}`}>
              <p className={s.widName}>{card.name}</p>
              <p className={s.widDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRING IT */}
      <section className={s.bringIt}>
        <div className={s.biContent}>
          <span className={s.sectionLabelLight}>Need something designed?</span>
          <h2>Bring the problem.<br />I&apos;ll bring the solution.</h2>
          <p>You don&apos;t need to arrive with a complete brief. You might have rough materials, an existing design that needs reworking, a specific idea or simply a problem you need solved visually.</p>
          <p>Tell me what you&apos;re working on. We can figure out the approach together and I&apos;ll help turn it into something polished and on-brand.</p>
          <a href="#contact" className="btn btn-dark" style={{ marginTop: 8 }}>Get in touch</a>
        </div>
        <div className={s.biCards}>
          {[
            { tag: "For example", text: '"I have an event coming up and need a poster and social graphics that match our brand."' },
            { tag: "Or maybe", text: "An investor pitch deck that needs to look as good as the idea behind it." },
            { tag: "Or simply", text: "A PDF brochure that finally does justice to what you're offering." },
            { tag: "Or perhaps", text: "A set of social media templates your team can actually use consistently." },
          ].map((card) => (
            <div key={card.tag} className={s.biCard}>
              <span className={s.biTag}>{card.tag}</span>
              <p className={s.biText}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={s.serviceCta}>
        <span className="section-label">Ready to start?</span>
        <h2>Let&apos;s design something worth looking at.</h2>
        <p>Tell me about your project and what you need.</p>
        <div className={s.ctaActions}>
          <a href="#contact" className="btn btn-lime">Get in touch</a>
          <a href="#contact" className={s.btnOutlineLight}>View pricing</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
