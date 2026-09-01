import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import HomeClient from "./HomeClient";
import ImageGallery from "@/components/ImageGallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Studio Kjellemo — Freelance Designer | Web, Brand & Visual Design",
  alternates: { canonical: "https://www.studiokjellemo.com/" },
};

const AI_IMAGES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23];
const PHOTO_IMAGES = [
  { src: "photo-1.jpg" }, { src: "photo-2.jpg" }, { src: "photo-3.JPG" },
  { src: "photo-4.JPG" }, { src: "photo-5.JPG" }, { src: "photo-6.JPG" },
  { src: "photo-7.jpg" }, { src: "photo-9.jpg" }, { src: "photo-10.JPG" },
  { src: "photo-11.JPG" }, { src: "photo-12.JPG" }, { src: "photo-13.JPEG" },
  { src: "photo-14.JPEG" }, { src: "photo-15.JPEG" }, { src: "photo-16.JPEG" },
  { src: "photo-17.JPEG" },
];
const BANNER_IMAGES = [1,2,3,4,5,6,7,8,9,10];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image src="/images/cover_photo_hero.png" alt="Studio Kjellemo" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroH1}>Your brand deserves to<br />be seen.</h1>
          <p className={styles.heroSub}>You have a vision. I make it visible.</p>
          <p className={styles.heroBody}>
            I help growing businesses build a visual identity that actually feels like them, through{" "}
            <span className={styles.heroHighlight}>branding</span>,{" "}
            <span className={styles.heroHighlight}>websites</span> and{" "}
            <span className={styles.heroHighlight}>images</span> that stay with people.
          </p>
          <a href="#services" className="btn btn-lime" style={{ alignSelf: "flex-start" }}>View Services</a>
        </div>
      </section>

      {/* INTRO MARQUEE */}
      <div className={styles.introMarquee}>
        <HomeClient />
        <div className={styles.introMarqueeTrackWrap}>
          <div className={styles.introMarqueeTrack} id="introMarqueeTrack">
            {[...BANNER_IMAGES, ...BANNER_IMAGES].map((n, i) => (
              <div key={i} className={styles.introMarqueeItem}>
                <img src={`/images/hero-banner/banner-${n}.png`} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className={styles.problem} id="about">
        <div className={styles.problemContent}>
          <p className="section-label">The Problem</p>
          <h2>You know visuals matter.</h2>
          <p className={styles.problemLead}>But it takes too long, costs too much, and the result never quite feels like you.</p>
          <div className={styles.problemBody}>
            <p>You have something good to offer. You know it. But when potential customers land on your website or scroll past your post — they keep scrolling.</p>
            <p>Maybe you&apos;ve tried putting something together yourself. Maybe you paid for a logo that never quite sat right. Or maybe you&apos;re stuck with a visual identity that worked a few years ago, but no longer reflects where you&apos;re heading. It doesn&apos;t have to be this hard.</p>
          </div>
          <div className={styles.problemCta}>
            <p className={styles.problemCtaText}>Let&apos;s change that.</p>
            <div className={styles.problemCtaLinks}>
              <a href="#contact" className="btn btn-dark">Start a project</a>
              <a href="#services" className="btn btn-outline">See what I offer</a>
            </div>
          </div>
        </div>
        <div className={styles.problemImage}>
          <Image src="/images/sara-yellow.png" alt="Sara Kjellemo" fill style={{ objectFit: "cover" }} />
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services} id="services">
        <div className={styles.servicesHeader}>
          <p className="section-label">What I do</p>
          <h2>Creative solutions for every part of your brand.</h2>
        </div>
        <div className={styles.servicesGrid}>
          {[
            { img: "branding.png", name: "Branding & Visual Identity", desc: "Build a brand that looks, feels and communicates like you. From logos and color palettes to typography, moodboards, imagery and visual systems.", href: "/branding-identity" },
            { img: "content.png", name: "Web Design", desc: "Websites that bring your brand to life online. Thoughtful, responsive and visually engaging — designed around your business, not a template.", href: "/web-design", pos: "center 30%" },
            { img: "creative.png", name: "Visual Content", desc: "Custom visuals that make your brand stand out. AI-generated imagery, photo editing, photography and creative assets for your website, social media and marketing.", href: "/visual-content", pos: "center 30%" },
            { img: "campaign.png", name: "Graphic Design", desc: "The pieces that make your brand feel complete. Presentations, social media graphics, posters, marketing materials and other visual assets.", href: "/graphic-design" },
          ].map((s) => (
            <div key={s.name} className={styles.serviceCard}>
              <div className={styles.serviceThumb}>
                <img src={`/images/${s.img}`} alt={s.name} style={s.pos ? { objectPosition: s.pos } : undefined} />
              </div>
              <p className={styles.serviceName}>{s.name}</p>
              <p className={styles.serviceDesc}>{s.desc}</p>
              <Link href={s.href} className={styles.serviceLink}>Learn more</Link>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.processHeader}>
          <p className="section-label">The Process</p>
          <h2>From idea to impact.</h2>
        </div>
        <div className={styles.processSteps}>
          {[
            { n: "01", name: "Discover", desc: "We get to know your brand, your goals and your audience." },
            { n: "02", name: "Strategize", desc: "We define the direction and creative concept." },
            { n: "03", name: "Create", desc: "I bring the concept to life using the best mix of tools and skills." },
            { n: "04", name: "Deliver", desc: "You get polished, ready-to-use assets that make an impact." },
          ].map((s) => (
            <div key={s.n} className={styles.processStep}>
              <div className={styles.stepNumber}>{s.n}</div>
              <p className={styles.stepName}>{s.name}</p>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn btn-lime">Start Your Project</a>
      </section>

      {/* SELECTED WORK */}
      <section className={styles.selectedWork} id="work">
        <div className={styles.workHeader}>
          <div>
            <p className="section-label">Selected Work</p>
            <h2>A mix of what I do.</h2>
            <p className={styles.workHint}>Tap any image to explore that service.</p>
          </div>
        </div>
        <div className={styles.workGrid}>
          {[
            { img: "branding-1.png", cat: "Branding", name: "Brand identity", href: "/branding-identity", tall: true },
            { img: "print.png", cat: "Graphic Design", name: "Print & layout", href: "/graphic-design" },
            { img: "vc-campaign.png", cat: "Visual Content", name: "Campaign imagery", href: "/visual-content" },
            { img: "campaign.png", cat: "Visual Content", name: "Social media", href: "/visual-content" },
            { img: "gd-hero-5.png", cat: "Visual Content", name: "Visual identity", href: "/visual-content" },
            { img: "sk-logo.png", cat: "Branding", name: "Logo & marks", href: "/branding-identity" },
            { img: "AI-images/ai-13.png", cat: "Visual Content", name: "AI-directed imagery", href: "/visual-content#ai-images" },
            { img: "gd-hero-1.png", cat: "Graphic Design", name: "Posters & graphics", href: "/graphic-design" },
            { img: "vc-photo.jpg", cat: "Photography", name: "Portrait & lifestyle", href: "/visual-content#photography" },
            { img: "content.png", cat: "Web Design", name: "Web design", href: "/web-design", wide: true },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.workItem}${item.tall ? " " + styles.tall : ""}${item.wide ? " " + styles.wide : ""}`}
            >
              <div className={styles.workThumb}>
                <img src={`/images/${item.img}`} alt="" />
              </div>
              <div className={styles.workLabel}>
                <span className={styles.workLabelCat}>{item.cat}</span>
                <span className={styles.workLabelName}>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AI TOOLKIT */}
      <section className={styles.aiTool} id="ai-images">
        <div className={styles.aiToolInner}>
          <div className={styles.aiToolContent}>
            <span className="section-label">The toolkit</span>
            <h2>AI is one tool.<br />Creative direction is the work.</h2>
            <p>I use AI alongside traditional image editing and design to produce visuals that feel considered, cohesive and genuinely connected to your brand — not just generated, but directed.</p>
            <ImageGallery images={AI_IMAGES.map((n) => `/images/AI-images/ai-${n}.png`)} buttonLabel="See all images" />
          </div>
        </div>
        <div className={styles.aiMarqueeWrap}>
          <div className={styles.aiMarqueeTrack}>
            {[...AI_IMAGES, ...AI_IMAGES].map((n, i) => (
              <div key={i} className={styles.aiMarqueeItem}>
                <img src={`/images/AI-images/ai-${n}.png`} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY */}
      <section className={styles.photography} id="photography">
        <div className={styles.photographyInner}>
          <span className="section-label">Photography</span>
          <h2>Real moments,<br />carefully composed.</h2>
          <p>From team portraits and product shots for your business, to the moments in life you never want to forget — I offer photography for both companies and private clients. Whether you need fresh imagery of your employees, polished product photography, or a photographer for the most memorable days of your life, I bring the same attention to detail and creative eye to every shoot.</p>
          <ImageGallery images={PHOTO_IMAGES.map((p) => `/images/Photos/${p.src}`)} buttonLabel="See all photos" />
        </div>
        <div className={styles.photoMarqueeWrap}>
          <div className={styles.photoMarqueeTrack}>
            {[...PHOTO_IMAGES, ...PHOTO_IMAGES].map((p, i) => (
              <div key={i} className={styles.photoMarqueeItem}>
                <img src={`/images/Photos/${p.src}`} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
