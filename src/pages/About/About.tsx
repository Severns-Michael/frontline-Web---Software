import { SEO } from '../../components/SEO/SEO'
import styles from './About.module.css'

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="We build amazing software for small businesses—fast, accessible, and SEO-ready."
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.badge}>About Frontline Web & Software</div>
          <h1>
            We’re Passionate About Building <span className={styles.accent}>Amazing Software</span>
          </h1>
          <p className={styles.sub}>
            Since 2019, we’ve helped small businesses leverage technology to grow faster, serve
            customers better, and compete with larger companies.// new missong statement
          </p>
        </div>
      </section>

      {/* STORY + STATS */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <h2 className={styles.h2}>Our Story</h2>
              <p>
                Frontline Web & Software was founded with a simple mission: make enterprise-level technology
                accessible to small businesses. Too many great teams were stuck with outdated
                websites and manual workflows that slowed them down.
              </p>
              <p>
                What started as a small dev shop has grown into a full-service web development
                partner. We’ve helped restaurants streamline orders, contractors capture more
                leads, and local brands scale online with lightweight, maintainable software. // need reworked
              </p>
              <p>
                Today, we’re proud to have completed 50+ projects and helped clients generate real// needs reworked
                results through better technology and clean code.
              </p>
            </div>

            <ul className={styles.statCards}>
              <li className={styles.card}>
                <span className={styles.statNum}>0 </span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </li>
              <li className={styles.card}>
                <span className={styles.statNum}>0%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </li>
              <li className={styles.card}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </li>
              <li className={styles.card}>
                <span className={styles.statNum}>0</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className="container">
          <h2 className={styles.h2}>Our Values</h2>
          <p className={styles.kicker}>The principles that guide everything we do</p>

          <div className={styles.valueGrid}>
            <article className={styles.valueCard}>
              <h3>Quality First</h3>
              <p>We never compromise on code quality, testing, or user experience.</p>
            </article>
            <article className={styles.valueCard}>
              <h3>Client Success</h3>
              <p>Your success is our success. We’re invested in your long-term growth.</p>
            </article>
            <article className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>We stay ahead of trends to give you a competitive advantage.</p>
            </article>
            <article className={styles.valueCard}>
              <h3>Reliability</h3>
              <p>Clear communication, dependable delivery, and ongoing support.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.team}>
        <div className="container">
          <h2 className={styles.h2}>Meet Our Team</h2>
          <p className={styles.kicker}>
            Experienced developers and designers passionate about your success
          </p>

          <div className={styles.teamGrid}>
            <article className={styles.teamCard}>
              <div className={styles.avatar}>MS</div>
              <h3>Michael Severns</h3>
              <p className={styles.role}>Founder & Lead Developer</p>
              <p className={styles.bio}>
                2+ years building scalable web apps for startups and small businesses.
              </p>
              <ul className={styles.chips}>
                <li>React</li> <li>Vue</li>
                <li>TypeScript</li> <li> javaScript</li> <li>java</li> <li>Node.js</li> <li>Html</li> <li>Css</li>
                <li>Postgres</li><li>Suprabase</li> <li>Prisma</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}