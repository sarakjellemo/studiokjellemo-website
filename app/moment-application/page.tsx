import type { Metadata } from "next";
import MomentClient from "./MomentClient";
import ImageGallery from "@/components/ImageGallery";
import PolaroidStack from "./PolaroidStack";
import s from "./moment.module.css";


const AI_IMAGES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23];

export const metadata: Metadata = {
  title: "Application — Sara Kjellemo",
  robots: { index: false, follow: false },
};

// ── IMAGE CONFIG ─────────────────────────────────────────────────────────────
// Swap paths and alt text here without touching the layout below.
const IMAGES = {
  branding: [
    { src: "/images/branding-1.png", alt: "Brand identity work — logo design and visual elements", ratio: "ratio43" as const },
    { src: "/images/hero-banner/banner-5.png", alt: "Brand identity details", ratio: "ratio43" as const },
    { src: "/images/hero-banner/banner-3.png", alt: "Brand identity across formats", ratio: "ratio43" as const },
    { src: "/images/sk-logo.png", alt: "Studio Kjellemo logo", ratio: "ratio43" as const },
  ],
  visual: [
    { src: "/images/vc-ai.png",     alt: "AI-assisted imagery refined in Photoshop — composition and lighting", ratio: "ratio169" as const },
    { src: "/images/creative1.png", alt: "Visual design concept — creative direction", ratio: "ratio43" as const },
    { src: "/images/campaign.png",  alt: "Campaign visual design", ratio: "ratio43" as const },
  ],
  development: [
    { src: "/images/project-3.png", alt: "The Good Life Club — custom web design project", ratio: "ratio169" as const },
    { src: "/images/project-5.png", alt: "GC Solutions — web design and front-end development", ratio: "ratio169" as const },
    { src: "/images/project-1.png", alt: "Mad Sun Marketing — web design and branding", ratio: "ratio169" as const },
  ],
  overview: [
    { src: "/images/og-image.png",  alt: "Studio Kjellemo — overview of design and development work", ratio: "ratio169" as const },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

const r = s.mReveal;
const d = (n: number) => [s.mReveal, (s as Record<string,string>)[`mDelay${n}`]].join(" ");

export default function MomentApplication() {
  return (
    <>
      <MomentClient />

      {/* HEADER */}
      <header className={s.mHeader}>
        <a href="/" className={s.mHeaderLogo}>
          <img src="/images/logo-black.png" alt="Studio Kjellemo" />
        </a>
        <div className={s.mHeaderActions}>
          <a href="/Sara_Kjellemo_Resume.pdf" download className={s.mDownload}>Download resume</a>
          <a href="/Sara_Kjellemo_Resume.pdf" target="_blank" rel="noopener" className={`btn btn-dark ${s.mHeaderBtn}`}>Open resume</a>
        </div>
      </header>

      {/* HERO */}
      <section className={s.mHero}>
        <div className={s.mHeroInner}>
        <div className={s.mHeroLeft}>
        <p className={`${s.mHeroEyebrow} ${r}`}>Application · MOMENT</p>
        <h1 className={`${s.mHeroName} ${d(1)}`}>
          <span className={s.mHeroNameSmall}>SARA KJELLEMO <span className={s.mHeroFor}>FOR</span> </span>
          <svg className={s.mMomentLogo} width="74" height="13" viewBox="0 0 59 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MOMENT"><path d="M54.0464 1.352H53.2274C52.846 1.352 52.5211 1.38233 52.2524 1.443C51.9924 1.495 51.7757 1.57733 51.6024 1.69C51.4377 1.80267 51.3034 1.95 51.1994 2.132H51.1214V0.181999H58.8044V2.132H58.7264C58.6224 1.95 58.4837 1.80267 58.3104 1.69C58.137 1.56867 57.9204 1.482 57.6604 1.43C57.4004 1.378 57.0797 1.352 56.6984 1.352H55.8794V7.267C55.8794 7.58767 55.8924 7.85633 55.9184 8.073C55.9444 8.28967 55.9877 8.48467 56.0484 8.658C56.1177 8.83133 56.2131 8.996 56.3344 9.152V9.217H53.5914V9.152C53.7127 8.996 53.8037 8.83133 53.8644 8.658C53.9337 8.48467 53.9814 8.28967 54.0074 8.073C54.0334 7.85633 54.0464 7.58767 54.0464 7.267V1.352Z" fill="currentColor"/><path d="M42.4117 0.727999L42.0737 0.221V0.181999H44.7647L48.4957 6.682H48.5737V2.119C48.5737 1.807 48.5607 1.54267 48.5347 1.326C48.5174 1.10933 48.4784 0.914333 48.4177 0.741C48.3657 0.567666 48.2877 0.402999 48.1837 0.246999V0.181999H50.3287V0.246999C50.2247 0.402999 50.1424 0.567666 50.0817 0.741C50.0297 0.914333 49.9907 1.10933 49.9647 1.326C49.9474 1.54267 49.9387 1.807 49.9387 2.119V9.217H47.9757L43.8547 2.132H43.7767V7.267C43.7767 7.579 43.7854 7.84767 43.8027 8.073C43.8287 8.28967 43.8677 8.48467 43.9197 8.658C43.9804 8.83133 44.0627 8.996 44.1667 9.152V9.217H42.0217V9.152C42.1257 8.996 42.2037 8.83133 42.2557 8.658C42.3164 8.48467 42.3554 8.28967 42.3727 8.073C42.3987 7.84767 42.4117 7.579 42.4117 7.267V0.727999Z" fill="currentColor"/><path d="M34.5693 2.119C34.5693 1.807 34.5563 1.54267 34.5303 1.326C34.513 1.10933 34.474 0.914333 34.4133 0.741C34.3613 0.567666 34.2833 0.402999 34.1793 0.246999V0.181999H40.7703V1.989H40.6923C40.5623 1.833 40.415 1.71167 40.2503 1.625C40.0857 1.53833 39.8777 1.47333 39.6263 1.43C39.3837 1.38667 39.0717 1.365 38.6903 1.365H36.4023V4.082H38.1573C38.4953 4.082 38.7727 4.06467 38.9893 4.03C39.2147 3.99533 39.3967 3.94333 39.5353 3.874C39.674 3.80467 39.804 3.71367 39.9253 3.601H40.0033V5.733H39.9253C39.8127 5.62033 39.6827 5.53367 39.5353 5.473C39.3967 5.40367 39.2147 5.35167 38.9893 5.317C38.764 5.28233 38.4867 5.265 38.1573 5.265H36.4023V8.034H38.8983C39.2537 8.034 39.5527 8.01233 39.7953 7.969C40.038 7.92567 40.246 7.84767 40.4193 7.735C40.6013 7.61367 40.7573 7.44467 40.8873 7.228H40.9653V9.217H34.1793V9.152C34.2833 8.996 34.3613 8.83133 34.4133 8.658C34.474 8.48467 34.513 8.28967 34.5303 8.073C34.5563 7.84767 34.5693 7.579 34.5693 7.267V2.119Z" fill="currentColor"/><path d="M23.9793 2.054H23.9013V7.267C23.9013 7.579 23.91 7.84767 23.9273 8.073C23.9533 8.28967 23.9923 8.48467 24.0443 8.658C24.105 8.83133 24.1873 8.996 24.2913 9.152V9.217H22.1853V9.152C22.2893 8.996 22.3673 8.83133 22.4193 8.658C22.48 8.48467 22.519 8.28967 22.5363 8.073C22.5623 7.84767 22.5753 7.579 22.5753 7.267V2.119C22.5753 1.807 22.5623 1.54267 22.5363 1.326C22.519 1.10933 22.48 0.914333 22.4193 0.741C22.3673 0.567666 22.2893 0.402999 22.1853 0.246999V0.181999H25.1233L27.5413 6.968H27.6193L30.0113 0.181999H32.8063V0.246999C32.7023 0.402999 32.62 0.567666 32.5593 0.741C32.5073 0.914333 32.4683 1.10933 32.4423 1.326C32.425 1.54267 32.4163 1.807 32.4163 2.119V7.267C32.4163 7.579 32.425 7.84767 32.4423 8.073C32.4683 8.28967 32.5073 8.48467 32.5593 8.658C32.62 8.83133 32.7023 8.996 32.8063 9.152V9.217H30.2453V9.152C30.3146 9.03933 30.371 8.92667 30.4143 8.814C30.4663 8.70133 30.5096 8.57567 30.5443 8.437C30.579 8.281 30.6006 8.112 30.6093 7.93C30.6266 7.73933 30.6353 7.51833 30.6353 7.267V2.171H30.5573L28.0743 9.217H26.5403L23.9793 2.054Z" fill="currentColor"/><path d="M16.401 9.399C15.5084 9.399 14.7067 9.204 13.996 8.814C13.294 8.41533 12.7437 7.86067 12.345 7.15C11.9464 6.43067 11.747 5.616 11.747 4.706C11.747 3.796 11.9464 2.98567 12.345 2.275C12.7437 1.55567 13.294 0.996667 13.996 0.598C14.7067 0.199334 15.5084 0 16.401 0C17.2937 0 18.091 0.199334 18.793 0.598C19.5037 0.996667 20.0584 1.55567 20.457 2.275C20.8557 2.98567 21.055 3.796 21.055 4.706C21.055 5.616 20.8557 6.43067 20.457 7.15C20.0584 7.86067 19.5037 8.41533 18.793 8.814C18.091 9.204 17.2937 9.399 16.401 9.399ZM16.401 8.151C16.9557 8.151 17.4324 8.01233 17.831 7.735C18.2384 7.449 18.546 7.046 18.754 6.526C18.962 6.006 19.066 5.395 19.066 4.693C19.066 3.99967 18.9577 3.393 18.741 2.873C18.533 2.353 18.2297 1.95 17.831 1.664C17.4324 1.378 16.9557 1.235 16.401 1.235C15.8464 1.235 15.3697 1.378 14.971 1.664C14.5724 1.95 14.2647 2.353 14.048 2.873C13.84 3.393 13.736 3.99967 13.736 4.693C13.736 5.395 13.84 6.006 14.048 6.526C14.256 7.046 14.5594 7.449 14.958 7.735C15.3654 8.01233 15.8464 8.151 16.401 8.151Z" fill="currentColor"/><path d="M1.794 2.054H1.716V7.267C1.716 7.579 1.72467 7.84767 1.742 8.073C1.768 8.28967 1.807 8.48467 1.859 8.658C1.91967 8.83133 2.002 8.996 2.106 9.152V9.217H0V9.152C0.104 8.996 0.182 8.83133 0.234 8.658C0.294667 8.48467 0.333667 8.28967 0.351 8.073C0.377 7.84767 0.39 7.579 0.39 7.267V2.119C0.39 1.807 0.377 1.54267 0.351 1.326C0.333667 1.10933 0.294667 0.914333 0.234 0.741C0.182 0.567666 0.104 0.402999 0 0.246999V0.181999H2.938L5.356 6.968H5.434L7.826 0.181999H10.621V0.246999C10.517 0.402999 10.4347 0.567666 10.374 0.741C10.322 0.914333 10.283 1.10933 10.257 1.326C10.2397 1.54267 10.231 1.807 10.231 2.119V7.267C10.231 7.579 10.2397 7.84767 10.257 8.073C10.283 8.28967 10.322 8.48467 10.374 8.658C10.4347 8.83133 10.517 8.996 10.621 9.152V9.217H8.06V9.152C8.12933 9.03933 8.18567 8.92667 8.229 8.814C8.281 8.70133 8.32433 8.57567 8.359 8.437C8.39367 8.281 8.41533 8.112 8.424 7.93C8.44133 7.73933 8.45 7.51833 8.45 7.267V2.171H8.372L5.889 9.217H4.355L1.794 2.054Z" fill="currentColor"/></svg>
        </h1>

        <p className={`${s.mHeroGreeting} ${s.mHeroGreetingBold} ${d(2)}`}>
          Hi MOMENT team,
        </p>
        <p className={`${s.mHeroBody} ${s.mHeroBodyBold} ${d(3)}`}>
          Your three roles describe different parts of a process I already work across. I would love to explore where my combination of creative and technical skills could be most useful to your team, whether within one of your existing roles or a more tailored collaboration.
        </p>
        <p className={`${s.mHeroBody} ${d(4)}`}>
          I&rsquo;m Sara, a designer and front-end developer based in Sweden, running my own creative studio. My background spans branding, visual design, web design and front-end development, and I&rsquo;m writing because I&rsquo;d love to join your team.
        </p>
        <p className={`${s.mHeroBody} ${d(5)}`}>
          You write about designing the moment when someone thinks, &ldquo;Yes, this is real.&rdquo; I love that way of thinking about design, and it&rsquo;s the standard I hold myself to. Good design makes things feel intuitive, considered and right. I pay attention to the details that make the difference: spacing, typography, color, composition and the small things that affect how a design feels.
        </p>

        <p className={`section-label ${s.mSectionLabel} ${d(5)}`} style={{ marginBottom: 10 }}>Skills &amp; tools</p>
        <div className={`${s.mToolTags} ${d(5)}`}>
          <span className={s.mToolTag}>Figma</span>
          <span className={s.mToolTag}>Illustrator</span>
          <span className={s.mToolTag}>Photoshop</span>
          <span className={s.mToolTag}>Adobe XD</span>
          <span className={s.mToolTag}>Lightroom</span>
          <span className={s.mToolTag}>Firefly</span>
          <span className={s.mToolTag}>Canva</span>
          <span className={s.mToolTag}>React</span>
          <span className={s.mToolTag}>TypeScript</span>
          <span className={s.mToolTag}>JavaScript</span>
          <span className={s.mToolTag}>HTML &amp; CSS</span>
          <span className={s.mToolTag}>Next.js</span>
          <span className={s.mToolTag}>Node.js</span>
          <span className={s.mToolTag}>Git &amp; GitHub</span>
          <span className={s.mToolTag}>WordPress</span>
          <span className={s.mToolTag}>Shopify</span>
          <span className={s.mToolTag}>Wix</span>
          <span className={s.mToolTag}>Claude Code</span>
          <span className={s.mToolTag}>Lovable</span>
          <span className={s.mToolTag}>CapCut</span>
        </div>
        </div>{/* /mHeroLeft */}
        <div className={`${s.mHeroRight} ${d(3)}`}>
          <PolaroidStack />
        </div>
        </div>{/* /mHeroInner */}
      </section>

      {/* LETTER BODY */}
      <div className={s.mContent}>

        {/* BRANDING & VISUAL IDENTITY */}
        <section className={s.mSection} aria-labelledby="section-branding">
          <div className={`${s.mSectionInner} ${s.mSectionInnerBranding}`}>
            <div className={r}>
              <p className={`section-label ${s.mSectionLabel}`}>Branding &amp; visual identity</p>
              <h2 className={s.mSectionHeading} id="section-branding">From pencil sketch to finished identity.</h2>
              <div className={s.mSectionBody}>
                <p>I draw and paint, so a logo can start as a pencil sketch and develop into a clean vector in Illustrator. I enjoy exploring different directions, finding the right combination of typography, color and form, and developing identities that work beyond the logo itself.</p>
                <p>I also carry the visual identity through websites and marketing materials, creating a consistent look and feel across different formats.</p>
              </div>
            </div>
            <div className={`${s.mImgArea} ${d(2)}`}>
              <div className={`${s.mImgGrid} ${s.g2}`}>
                {IMAGES.branding.map((img) => (
                  <div key={img.src} className={`${s.mImgWrap} ${s[img.ratio]}`}>
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL DESIGN & IMAGERY */}
        <section className={s.mSection} aria-labelledby="section-visual">
          <div className={`${s.mVisualText} ${r}`}>
            <p className={`section-label ${s.mSectionLabel}`}>Visual design &amp; imagery</p>
            <h2 className={s.mSectionHeading} id="section-visual">Ideas turned into visuals.</h2>
            <div className={`${s.mSectionBody} ${s.mVisualBody}`}>
              <p>I enjoy turning ideas into visual concepts, whether that&rsquo;s marketing materials, digital layouts or translating abstract ideas into something tangible. I work across Photoshop, Illustrator, Figma, Canva and other tools, and I&rsquo;m comfortable picking up new workflows.</p>
              <p>I also work with AI-assisted imagery, refining composition, lighting and visual consistency in Photoshop to create polished, believable results. AI is a tool in my hands, never the driver. The creative direction always comes from my own judgment.</p>
            </div>
          </div>
          <div className={`${s.mMarqueeHeader} ${r}`}>
            <p className={s.mMarqueeLabel}>AI-generated imagery, directed and refined in Photoshop</p>
            <ImageGallery
              images={AI_IMAGES.map((n) => `/images/AI-images/ai-${n}.png`)}
              buttonLabel="See all images"
            />
          </div>
          <div className={s.mMarqueeRow}>
            <div className={s.mMarqueeTrack}>
              {[...AI_IMAGES, ...AI_IMAGES].map((n, i) => (
                <div key={i} className={s.mMarqueeItem}>
                  <img src={`/images/AI-images/ai-${n}.png`} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN & DEVELOPMENT */}
        <section className={s.mSection} aria-labelledby="section-dev">
          <div className={s.mSectionInner}>
            <div className={r}>
              <p className={`section-label ${s.mSectionLabel}`}>Design &amp; development</p>
              <h2 className={s.mSectionHeading} id="section-dev">From design to working website.</h2>
              <div className={s.mSectionBody}>
                <p>I&rsquo;m trained in front-end development, with experience in HTML, CSS, JavaScript and React. I enjoy working with both the visual and technical sides of a project, from designing a website to building it and making sure it works across different screen sizes.</p>
                <p>My technical background also helps me understand how designs translate into real interfaces, and how to make considered decisions when the original design doesn&rsquo;t answer every question.</p>
              </div>
            </div>
            <div className={`${s.mImgArea} ${d(2)}`}>
              <div className={s.mBrowserMockup}>
                <div className={s.mBrowserBar}>
                  <div className={s.mBrowserDots}>
                    <div className={s.mBrowserDot} />
                    <div className={s.mBrowserDot} />
                    <div className={s.mBrowserDot} />
                  </div>
                  <div className={s.mBrowserUrl} />
                </div>
                <div className={s.mBrowserScreen}>
                  <img src={IMAGES.development[0].src} alt={IMAGES.development[0].alt} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING / SIGN-OFF */}
        <section className={s.mSectionDark} aria-labelledby="section-closing">
          <div className={s.mClosingGrid}>
            {/* Left: text */}
            <div className={s.mClosingLeft}>
              <p className={`section-label ${s.mSectionLabel}`}>Let&rsquo;s talk</p>
              <h2 className={s.mClosingHeading} id="section-closing">I&rsquo;d love to<br/>explore this<br/>together.</h2>
            </div>

            {/* Right: body + contact */}
            <div className={s.mClosingRight}>
              <div className={s.mClosingBody}>
                <p>My studio is a good overview of how I work. I designed the website, created the logo, developed the visual direction and produced the imagery. I also built it using Claude Code, React and TypeScript.</p>
                <p>Your three roles describe different parts of a process I already work across. I&rsquo;d love to explore where my combination of creative and technical skills fits best, whether within one of your existing roles or a more tailored collaboration.</p>
              </div>

              <p className={s.mSignOffName}>Sara Kjellemo</p>

              <div className={s.mClosingContact}>
                <a href="mailto:sara.kjellemo@live.se" className={s.mClosingLink}>
                  <span className={s.mClosingLinkLabel}>Email</span>
                  sara.kjellemo@live.se
                </a>
                <a href="https://studiokjellemo.com/" target="_blank" rel="noopener" className={s.mClosingLink}>
                  <span className={s.mClosingLinkLabel}>Portfolio</span>
                  studiokjellemo.com
                </a>
              </div>

              <div className={s.mClosingActions}>
                <a href="/Sara_Kjellemo_Resume.pdf" target="_blank" rel="noopener" className={s.mBtnYellow}>
                  Open resume
                </a>
                <a href="/Sara_Kjellemo_Resume.pdf" download className={s.mDownload}>
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>{/* /mContent */}

    </>
  );
}
