import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import s from "@/styles/service.module.css";

export const metadata: Metadata = {
  title: "Visual Content — Studio Kjellemo | AI Imagery, Photography & Creative Visuals",
  description: "Custom visual content by Studio Kjellemo — AI-generated imagery, photography, image editing and creative assets for websites, social media and campaigns.",
  alternates: { canonical: "https://www.studiokjellemo.com/visual-content" },
};

const AI_IMAGES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23];
const PHOTO_IMAGES = [
  "photo-1.jpg","photo-2.jpg","photo-3.JPG","photo-4.JPG","photo-5.JPG",
  "photo-6.JPG","photo-7.jpg","photo-9.jpg","photo-10.JPG","photo-11.JPG",
  "photo-12.JPG","photo-13.JPEG","photo-14.JPEG","photo-15.JPEG","photo-16.JPEG","photo-17.JPEG",
];

export default function VisualContent() {
  return (
    <>
      {/* HERO */}
      <section className={s.vcHero}>
        <div className={s.vcHeroText}>
          <div className={s.vcHeroLeft}>
            <p className={s.breadcrumb} style={{ color: "rgba(255,255,255,.4)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,.4)" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,.2)" }}>→</span>
              Services
            </p>
            <h1>Visual Content</h1>
            <p className={s.vcHeroTagline}>Images that make your brand impossible to ignore.</p>
          </div>
          <div>
            <p className={s.vcHeroBody}>
              The right visuals can make a brand feel more memorable, more professional and more alive. I create custom imagery and visual assets for websites, social media, campaigns and marketing — from AI-generated visuals and creative image editing to photography.
            </p>
            <a href="#contact" className="btn btn-dark">Discuss a visual project</a>
          </div>
        </div>
        <div className={s.heroImageStrip}>
          <div className={s.heroStripPanel}>
            <img src="/images/vc-hero-1.png" alt="" />
          </div>
          <div className={s.heroStripPanel} style={{ background: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/images/logo-white.png" alt="Studio Kjellemo" style={{ height: 80, width: "auto", opacity: 0.85 }} />
          </div>
          <div className={s.heroStripPanel}>
            <img src="/images/vc-hero-3.png" alt="" />
          </div>
        </div>
      </section>

      {/* WHAT I CREATE */}
      <section className={s.whatICreate}>
        <div className={s.wicHeader}>
          <span className="section-label">What I create</span>
          <h2>Custom visuals for every part of your brand.</h2>
        </div>
        <div className={s.wicGrid}>
          {[
            { img: "vc-ai.png", name: "AI-Generated Imagery", desc: "Custom visuals created around your brand, concept or campaign. Unique, ownable imagery that would be difficult or costly to produce any other way." },
            { img: "vc-editing.png", name: "Image Editing & Retouching", desc: "Editing, compositing, retouching, background removal and creative image manipulation. Taking good photos and making them brand-ready." },
            { img: "vc-photo.jpg", name: "Photography", desc: "Brand and lifestyle photography for businesses in southern Sweden. Shot and edited with your brand's visual identity in mind from start to finish." },
            { img: "vc-campaign.png", name: "Campaign Imagery", desc: "Creative visuals designed around launches, campaigns, promotions or specific concepts — built to capture attention and communicate clearly." },
            { img: "vc-social.png", name: "Social Media Content", desc: "Visual assets created specifically for social platforms — sized, styled and optimised for your channels and your audience." },
          ].map((item) => (
            <div key={item.name} className={s.wicItem}>
              <div className={s.wicImage}>
                <img src={`/images/${item.img}`} alt={item.name} />
              </div>
              <div className={s.wicBody}>
                <p className={s.wicName}>{item.name}</p>
                <p className={s.wicDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI TOOLKIT */}
      <section className={s.aiTool} id="ai-images">
        <div className={s.aiToolInner}>
          <div className={s.aiToolContent}>
            <span className="section-label">The toolkit</span>
            <h2>AI is one tool.<br />Creative direction is the work.</h2>
            <p>I use AI alongside traditional image editing and design to produce visuals that feel considered, cohesive and genuinely connected to your brand — not just generated, but directed.</p>
            <ImageGallery
              images={AI_IMAGES.map((n) => `/images/AI-images/ai-${n}.png`)}
              buttonLabel="See all images"
            />
          </div>
        </div>
        <div className={s.aiMarqueeWrap}>
          <div className={s.aiMarqueeTrack}>
            {[...AI_IMAGES, ...AI_IMAGES].map((n, i) => (
              <div key={i} className={s.aiMarqueeItem}>
                <img src={`/images/AI-images/ai-${n}.png`} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY */}
      <section className={s.photography} id="photography">
        <div className={s.photographyInner}>
          <span className="section-label">Photography</span>
          <h2>Real moments,<br />carefully composed.</h2>
          <p>From team portraits and product shots for your business, to the moments in life you never want to forget — I offer photography for both companies and private clients. Whether you need fresh imagery of your employees, polished product photography, or a photographer for the most memorable days of your life, I bring the same attention to detail and creative eye to every shoot.</p>
          <ImageGallery
            images={PHOTO_IMAGES.map((src) => `/images/Photos/${src}`)}
            buttonLabel="See all photos"
          />
        </div>
        <div className={s.photoMarqueeWrap}>
          <div className={s.photoMarqueeTrack}>
            {[...PHOTO_IMAGES, ...PHOTO_IMAGES].map((src, i) => (
              <div key={i} className={s.photoMarqueeItem}>
                <img src={`/images/Photos/${src}`} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRING THE IDEA */}
      <section className={s.bringIdea}>
        <div className={s.bringInner}>
          <div className={s.bringContent}>
            <span className="section-label">Need visuals for something specific?</span>
            <h2>Bring the idea.<br />I&apos;ll help develop it.</h2>
            <p>You don&apos;t need to arrive with a fully formed brief. You might know you need something that looks better — without knowing exactly what type of visual that is or how to make it happen.</p>
            <p>Tell me what you&apos;re working on and what you&apos;re hoping to achieve. We can figure out the approach together.</p>
            <a href="#contact" className="btn btn-dark" style={{ marginTop: 8 }}>Get in touch</a>
          </div>
          <div className={s.useCases}>
            {[
              "A hero image for your website that actually reflects your brand",
              "A collection of campaign images for an upcoming launch",
              "Ongoing social media visuals that stay consistent with your brand",
              "Product imagery that stands out",
              "Creative visuals for a presentation or marketing campaign",
              "Images for a launch you want to feel memorable",
            ].map((text) => (
              <div key={text} className={s.useCase}>
                <div className={s.useCaseDot} />
                <p className={s.useCaseText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.serviceCta}>
        <span className="section-label">Ready to start?</span>
        <h2>Let&apos;s create something worth looking at.</h2>
        <p>Tell me about your brand and what you need.</p>
        <div className={s.ctaActions}>
          <a href="#contact" className="btn btn-lime">Get in touch</a>
          <a href="#contact" className={s.btnOutlineLight}>View pricing</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
