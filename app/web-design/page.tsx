import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import s from "@/styles/service.module.css";

export const metadata: Metadata = {
  title: "Web Design — Studio Kjellemo | Freelance Web Designer Sweden",
  description: "Custom, responsive web design by Studio Kjellemo. Websites that bring your brand to life online — designed around your business, not a template.",
  alternates: { canonical: "https://www.studiokjellemo.com/web-design" },
};

export default function WebDesign() {
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
            <h1>Web Design</h1>
            <p className={s.heroTagline}>Websites that bring your brand to life.</p>
            <p className={s.heroBody}>
              Your website is often the first real interaction someone has with your business. It should look good, feel intuitive and make people want to stay. I design and build custom websites that combine strong visual direction, thoughtful user experience and clean, responsive design.
            </p>
            <a href="#contact" className="btn btn-dark" style={{ alignSelf: "flex-start" }}>Start your website project</a>
          </div>
          <div className={s.serviceHeroMockup}>
            <div className={s.browserMockup}>
              <div className={s.browserBar}>
                <div className={s.browserDots}>
                  <div className={s.browserDot} />
                  <div className={s.browserDot} />
                  <div className={s.browserDot} />
                </div>
                <div className={s.browserUrl} />
              </div>
              <div className={s.browserScreen}>
                <img src="/images/web-mockup-hero.png" alt="Website mockup" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className={s.included}>
        <div className={s.includedHeader}>
          <p className="section-label">What&apos;s included</p>
          <h2>Custom websites, built for your business.</h2>
        </div>
        <div className={s.includedLayout}>
          {[
            { n: "01", name: "Custom Website Design", desc: "Designed from scratch to match your brand — no templates, no generic layouts. Every element is intentional and tailored to you.", span: false },
            { n: "02", name: "Up to 6 Pages", desc: "Home, About, Services, Portfolio, Contact and one more — structured to guide your visitors naturally through your offering.", span: false },
            { n: "03", name: "Responsive Design", desc: "Your website works beautifully on every screen — from wide desktop monitors to the phone your next client is browsing on right now.", span: false },
            { n: "04", name: "Mobile & Desktop Layouts", desc: "Both layouts are designed with equal care. Mobile is not an afterthought — it's designed intentionally alongside the desktop experience.", span: false },
            { n: "05", name: "Contact Forms", desc: "Simple, well-designed contact forms that feel native to your site and make it easy for potential clients to reach you.", span: false },
            { n: "06", name: "Basic SEO Structure", desc: "Clean page titles, meta descriptions, heading hierarchy and semantic HTML — a solid foundation for your site to be found.", span: false },
            { n: "07", name: "Brand Asset Integration", desc: "Your logo, color palette, typography and imagery — existing or newly created — are integrated cohesively into the design from the start.", span: true },
          ].map((item) => (
            <div key={item.n} className={`${s.includedFeature}${item.span ? " " + s.spanTwo : ""}`}>
              <div className={s.featureNum}>{item.n}</div>
              <div>
                <p className={s.featureName}>{item.name}</p>
                <p className={s.featureDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={s.includedNote}>
          <div className={s.noteIcon}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v6M7 10v.5" stroke="#1a1a18" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p><strong>Please note:</strong> E-commerce and online shops are not currently included in my web design offering. If you&apos;re looking for a shop, I&apos;m happy to point you in the right direction.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className={s.process}>
        <div className={s.processHeader}>
          <p className="section-label">My approach</p>
          <h2>How a website project works.</h2>
        </div>
        <div className={s.processSteps}>
          {[
            { n: "01", name: "Discover", desc: "Understanding the business, goals, audience and visual direction." },
            { n: "02", name: "Design", desc: "Creating the structure, layout and visual experience." },
            { n: "03", name: "Build", desc: "Turning the approved design into a responsive, functional website." },
            { n: "04", name: "Refine", desc: "Testing, polishing and making sure everything feels right before launch." },
          ].map((step) => (
            <div key={step.n} className={s.processStep}>
              <div className={s.stepNumber}>{step.n}</div>
              <p className={s.stepName}>{step.name}</p>
              <p className={s.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className={s.selectedWork}>
        <div className={s.workHeader}>
          <div>
            <p className="section-label">Selected work</p>
            <h2>Websites I&apos;ve designed.</h2>
          </div>
          <Link href="/#work" className="btn btn-outline">View all work</Link>
        </div>
        <div className={s.workGrid}>
          {[
            { img: "project-1.png", tags: "Web Design · Branding", title: "Mad Sun Marketing" },
            { img: "project-2.png", tags: "Web Design · Visual Identity", title: "HållöExpressen" },
          ].map((item) => (
            <div key={item.title} className={s.workItem}>
              <div className={s.workBrowser}>
                <div className={s.workBrowserBar}>
                  <div className={s.workDots}>
                    <div className={s.workDot} /><div className={s.workDot} /><div className={s.workDot} />
                  </div>
                  <div className={s.workUrlBar} />
                </div>
                <div className={s.workScreen}>
                  <img src={`/images/${item.img}`} alt={item.title} />
                </div>
              </div>
              <p className={s.workTags}>{item.tags}</p>
              <p className={s.workTitle}>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NO BRIEF */}
      <section className={s.noBrief}>
        <div className={s.noBriefContent}>
          <p className={s.sectionLabelLight}>Not sure where to start?</p>
          <h2>A website doesn&apos;t have to start with a perfect brief.</h2>
          <p>Most clients I work with don&apos;t arrive with a fully formed brief — and that&apos;s completely fine. You don&apos;t need to know exactly what you want before getting in touch.</p>
          <p>We can work through the structure, content and visual direction together. I&apos;ll ask the right questions, help shape the ideas and guide you through the decisions — so the result feels like you, not like a template someone else filled in.</p>
          <a href="#contact" className="btn btn-dark" style={{ alignSelf: "flex-start", marginTop: 8 }}>Let&apos;s talk</a>
        </div>
        <div className={s.nbCards}>
          {[
            { label: "You might say", text: '"I need a website but I don\'t really know what pages I need or what it should look like."' },
            { label: "That's fine", text: "We figure out the structure together in the discovery phase." },
            { label: "Also fine", text: "Starting without a brand, without copy, without photos — we can build toward all of it." },
          ].map((card) => (
            <div key={card.label} className={s.nbCard}>
              <p className={s.nbCardLabel}>{card.label}</p>
              <p className={s.nbCardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={s.serviceCta}>
        <p className="section-label">Ready to start?</p>
        <h2>Let&apos;s build a website your business is proud of.</h2>
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
