import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO";
import styles from "./About.module.css";
import aboutPic from '../../assets/aboutPicture.webp';

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Veteran-owned, USA-based. Michael Severns builds fast, accessible websites and small web apps—clean code, no bloat."
      />

      {/* HERO (personal intro + photo) */}
        <section id="about-hero" className={`${styles.bioHero} vh snap anchor`}>
          <div className="container">
            <div className={styles.bioGrid}>
              {/* Left: copy */}
              <div className={styles.bioCopy}>
                <div className={styles.badgeRow}>
                  <span className={styles.badge}>Veteran-owned</span>
                  <span className={styles.badge}>USA-based</span>
                  <span className={styles.badge}>No page builders</span>
                </div>

                <p className={styles.kicker}>Frontline Web & Software</p>
                <h1 className={styles.h1}>
                  <span className={'accent'}>Veteran</span>-built websites for <span className={'accent'}>Local Business</span>
                </h1>

                <p className={styles.intro}>
                    I’m <strong>Michael Severns</strong>, founder & lead developer. I was active duty Marine Corps for 4 years, now im currently in college for computer science. 
                  I Just moved to Pocaltello Idaho from a small town in Ohio. I am available for 1-2 projects per month to keep quality high. My focus is on small business sites that are
                   fast, accessible, and easy to update at an affordable price. My goal is to help local businesses get online and grow with a website that works as hard as you do, 
                    without the bloat and complexity of big agencies. I find more often than not, small businesses are overcharged for websites that are slow and hard to use. 
                    I want to change that by providing clear, honest service with no upsells or confusing jargon. There are so many great local businesses out there doing awesome things,
                    but they get overlooked because they don't have a good online presence. I'm here to fix that. Let's work together to create a website that truly represents your business
                     and helps you reach more customers. 


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
        <section id="process" className={`${styles.section} ${styles.bandSoft} vh snap anchor`}>
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

            <div className={styles.ctaRow} style={{ marginTop: '.8rem' }}>
              <Link to="/contact" className={`button ${styles.glowCta}`}>Book a 15-minute intro</Link>
            </div>
          </div>
        </section>


      {/* CTA */}
      <section className={`${styles.finalCta} vh snap anchor`}>
        <div className="container">
          <div className={styles.finalCard}>
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