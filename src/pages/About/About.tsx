import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO";
import styles from "./About.module.css";

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
                  I’m <strong>Michael Severns</strong>, founder & lead developer. I create fast, accessible
                  websites and small web apps with clean, maintainable code—no bloat and no lock-in.
                </p>

                <div className={styles.ctaRow}>
                  <Link to="/contact" className={`button ${styles.glowCta}`}>Book a 15-minute intro</Link>
                  <Link to="/services#pricing" className={styles.secondaryCta}>See packages & pricing</Link>
                </div>
              </div>

              {/* Right: portrait */}
              <figure className={styles.portraitWrap}>
                <img
                  src="/assets/team/michael-severns.webp"
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

      {/* WHAT I DO (teaser) */}
      <section className={`${styles.section} ${styles.bandDark} vh snap anchor`}>
        <div className="container">
          <h2 className={styles.h2}>What I do</h2>
          <ul className={styles.gridList} role="list">
            <li className={styles.card}>
              <h3>Websites</h3>
              <p className={styles.sub}>Fast on real phones with clear paths to calls, bookings, or orders.</p>
            </li>
            <li className={styles.card}>
              <h3>Small web apps & Software</h3>
              <p className={styles.sub}>Dashboards, forms, simple portals—kept lean and maintainable.</p>
            </li>
          </ul>

          <div className={styles.linkRow}>
            <Link to="/services#website-builds">Services</Link>
            <span aria-hidden>•</span>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>
      </section>

      {/* HOW I WORK (promises) */}
      <section className={`${styles.section} ${styles.bandSoft} vh snap anchor`}>
        <div className="container">
          <h2 className={styles.h2}>How I work</h2>
          <ul className={styles.checkList} role="list">
            <li><strong>Clear scope &amp; price</strong> before we start.</li>
            <li><strong>Weekly updates</strong> and a staging link you can click anytime.</li>
            <li><strong>Performance &amp; accessibility first</strong> (Core Web Vitals + keyboard/screen-reader checks).</li>
            <li><strong>You own it</strong>—no lock-in; plain-English handoff.</li>
          </ul>
        </div>
      </section>


      {/* CTA */}
      <section className={`${styles.finalCta} anchor`}>
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