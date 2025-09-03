import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <SEO
        title="Custom Web & Software"
        description="Professional websites and lightweight web apps for small businesses. Fast, accessible, SEO-ready."
      />

      {/* HERO  need to add visual on right side laptop/ phone */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.badge}>Veteran Owned and Operated</div>
              <h1>Custom-Coded Websites & Software for Small Businesses</h1>
              <p className={styles.sub}>
                Transform your business with custom websites, mobile apps, and SaaS platforms.
                Performance, accessibility, and SEO baked in — no page builders, no bloat.
              </p>
              <div className={styles.ctaRow}>
                <Link to="/contact" className="button">Start Your Project</Link>
                <Link to="/portfolio" className={styles.secondaryCta}>View Our Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (VALUES) redfine scope of work/  */}
      <section className={`${styles.values} ${styles.bandSoft}`} aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title" className={styles.h2}>Everything You Need to Grow Online</h2>
          <p className={styles.lead}>
            From concept to launch, we provide end-to-end development services tailored for small businesses ready to scale.
          </p>

          <div className={styles.serviceGrid}>
            <article className="card">
              <h3>Website Development</h3>
              <p>Modern, responsive websites that convert visitors into customers.</p>
              <ul className={styles.bullets}>
                <li>Responsive Design</li>
                <li>SEO Optimized</li>
                <li>Fast Loading</li>
              </ul>
            </article>

            <article className="card">
              <h3>Mobile Apps</h3>
              <p>iOS and Android apps with stunning user experiences.</p>
              <ul className={styles.bullets}>
                <li>Native Performance</li>
                <li>Push Notifications</li>
                <li>Offline Support</li>
              </ul>
            </article>

            <article className="card">
              <h3>SaaS Platforms</h3>
              <p>Scalable software solutions for your growing business.</p>
              <ul className={styles.bullets}>
                <li>Cloud Infrastructure</li>
                <li>API Integration</li>
                <li>Analytics Dashboard</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* STATS STRIP  change to something to give more trust since im new and dont have costmers*/ }
      <section className={`${styles.stats} ${styles.bandDark}`} aria-label="Key stats">
        <div className="container">
          <ul className={styles.statsRow}>
            <li><strong>50+</strong><span>Projects Completed</span></li>
            <li><strong>30+</strong><span>Happy Clients</span></li>
            <li><strong>5+</strong><span>Years Experience</span></li>
            <li><strong>24/7</strong><span>Support Available</span></li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCard}>
            <h2>Ready to Transform Your Business?</h2>
            <p>Join successful businesses who’ve accelerated their growth with our solutions.</p>
            <div className={styles.ctaRow}>
              <Link to="/contact" className="button">Start Your Project Today</Link>
              <Link to="/services" className={styles.secondaryCta}>Learn More About Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}