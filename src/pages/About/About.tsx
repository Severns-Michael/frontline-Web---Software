import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO";
import styles from "./About.module.css";
import aboutPic from '../../assets/aboutPicture.webp';
import { webPageJsonLd, localBusinessJsonLd, canonicalFor, normalizeImageUrl } from '../../lib/seo';



export default function About() {
  const ABOUT_IMAGE = '/about-picture.webp';
  
  return (
    <>
<SEO
  title="About"
  description="Veteran-owned, USA-based. Michael Severns builds fast, accessible websites and small web apps—clean code, no bloat."
  canonical={canonicalFor('/about')}
  image={normalizeImageUrl(ABOUT_IMAGE)}
  jsonLd={[
    webPageJsonLd({
      path: '/about',
      name: 'About',
      description:
        'Veteran-owned, USA-based. Michael Severns builds fast, accessible websites and small web apps—clean code, no bloat.',
      image: ABOUT_IMAGE,
    }),
    localBusinessJsonLd(),
  ]}
/>

      {/* HERO (personal intro + photo) */}
        <section id="about-hero" className={`${styles.bioHero} vh snap anchor`}>
          <div className="container">
            <div className={styles.bioGrid}>
              {/* Left: copy */}
              <div className={styles.bioCopy}>
                <div className="badgeRow">
                
              </div>

                <p className={styles.kicker}>Frontline Web & Software</p>
                <h1 className={styles.h1}>
                  <span className={'accent'}>Veteran</span>-built websites for <span className={'accent'}>Local Business</span>
                </h1>

                          <p>
                          I’m <strong>Michael Severns</strong>, founder & lead developer of Frontline Web & Software. 
                          I served in the Marine Corps, and today I bring that same discipline 
                          and commitment to every project I take on.
                        </p>

                        <p>
                          I recently moved to Pocatello, Idaho from a small town in Ohio, and I’m focused on building 
                          high-quality websites for local small businesses. To keep quality high, I only take on 
                          1–2 projects per month.
                        </p>

                        <p>
                          My goal is simple: help small businesses get online with websites that are fast, accessible, 
                          and easy to update—without the bloat and complexity of big agencies. Too often, I see business 
                          owners overcharged for sites that are slow and frustrating to use. I want to change that by 
                          providing clear, honest service with no upsells or confusing jargon.
                        </p>

                        <p>
                          There are so many great local businesses out there doing amazing work but getting overlooked 
                          because they don’t have a strong online presence. I’m here to fix that. Let’s work together 
                          to create a website that truly represents your business and helps you reach more customers.
                        </p>

                <div className={styles.ctaRow}>
                  <Link to="/contact" className={`button ${styles.glowCta}`}>Book a 15-minute intro</Link>
                  <Link to="/services#pricing" className={styles.secondaryCta}>See packages & pricing</Link>
                </div>
              </div>

              {/* Right: portrait */}
              <figure className={styles.portraitWrap}>
                <img
                  src={aboutPic}
                  alt="Michael Severns, founder of Frontline Web & Software"
                  className={styles.portrait}
                  width={560}
                  height={680}
                  loading="eager"
                />
                <figcaption className={styles.caption}>Michael Severns — Founder & Developer</figcaption>
              </figure>
            </div>
          </div>
        </section>


        {/* PROCESS */}
        <section id="process" className={`${styles.section} ${styles.bandSoft}`} aria-labelledby="process-title">
          <div className="container">
            <h2 className={styles.h2}>Our process</h2>

            <ol className={styles.timeline} role="list">
              <li className={styles.stepItem}>
                <div className={styles.stepNum}>1</div>
                <div className={styles.stepBody}>
                  <h3>15-minute intro</h3>
                  <p className={styles.sub}>
                    We talk goals, pages, and budget. If it’s a fit, I outline scope and a simple timeline.
                  </p>
                </div>
              </li>

              <li className={styles.stepItem}>
                <div className={styles.stepNum}>2</div>
                <div className={styles.stepBody}>
                  <h3>Quick questionnaire</h3>
                  <p className={styles.sub}>
                    You share brand assets and priorities. I confirm a fixed price and what’s included.
                  </p>
                </div>
              </li>

              <li className={styles.stepItem}>
                <div className={styles.stepNum}>3</div>
                <div className={styles.stepBody}>
                  <h3>Design preview</h3>
                  <p className={styles.sub}>
                    Wireframe → visual pass. One focused revision round so we move fast without rework.
                  </p>
                </div>
              </li>

              <li className={styles.stepItem}>
                <div className={styles.stepNum}>4</div>
                <div className={styles.stepBody}>
                  <h3>Build &amp; launch</h3>
                  <p className={styles.sub}>
                    Staging link + weekly updates. Performance &amp; accessibility checks, analytics, and a clear handoff.
                  </p>
                </div>
              </li>
            </ol>

           {/* CTA */}
            <div className={styles.finalCard} style={{ marginTop: '5.5rem' }}>
              <h2>Want a quick plan for your site?</h2>
              <p>I’ll look at what you have and outline the three fastest wins.</p>
              <div className={styles.ctaRow}>
                <Link to="/contact" className="button">Book a 15-minute intro</Link>
                <Link to="/services" className={styles.secondaryCta}>See Services &amp; Pricing</Link>
              </div>
            </div>
          </div>
        </section>
    </>

  );
}