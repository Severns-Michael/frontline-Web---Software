import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './Services.module.css'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Complete digital solutions for growing businesses — websites, mobile apps, SaaS, and e-commerce."
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.badge}>Our Services</div>
          <h1>
            Complete Digital Solutions <br />
            <span className={styles.accent}>For Growing Businesses</span>
          </h1>
          <p className={styles.sub}>
            From simple websites to complex SaaS platforms, we build technology that helps your
            business scale and compete.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className={styles.bandSoft} aria-label="Service packages">
        <div className={`container ${styles.grid}`}>
          {/* Websites */}
          <article className={styles.card}> 
            <header className={styles.cardHead}>
              <div className={styles.icon}>🌐</div>
              <div>
                <h3>Website Development</h3>
                <p className={styles.cardSub}>Professional websites for a indvidual or buisness</p>
              </div>
            </header>

            <ul className={styles.meta}>
              <li>Starting at <strong>$2,500</strong></li>
              <li>2–4 weeks</li>
            </ul>

            <p>
              Custom websites built with modern technologies, optimized for performance and
              conversions.
            </p>

            <div className={styles.block}>
              <h4>What’s Included:</h4>
              <ul className={styles.bullets}>
                <li>Responsive mobile-first design</li>
                <li>SEO optimization</li>
                <li>Content management system</li>
                <li>Contact forms & lead capture</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h4>Technologies:</h4>
              <ul className={styles.chips}>
                <li>React</li><li>TypeScript</li><li>Html</li><li>Css</li> <li>Netlify</li> <li>vite</li>
              </ul>
            </div>

            <div className={styles.actionBar}>
              <Link to="/contact" className={styles.cta}>Get Started →</Link>
            </div>
          </article>

          {/* Mobile (Most popular) */}
          <article className={`${styles.card} ${styles.popular}`} aria-label="Most popular">
            <div className={styles.ribbon}>Most Popular</div>

            <header className={styles.cardHead}>
              <div className={styles.icon}>📱</div>
              <div>
                <h3>Mobile App Development</h3>
                <p className={styles.cardSub}>Native iOS & Android apps</p>
              </div>
            </header>

            <ul className={styles.meta}>
              <li>Starting at <strong>$8,000</strong></li>
              <li>6–12 weeks</li>
            </ul>

            <p>Native mobile applications with smooth performance and great user experience.</p>

            <div className={styles.block}>
              <h4>What’s Included:</h4>
              <ul className={styles.bullets}>
                <li>iOS and Android development</li>
                <li>React Native option for cross-platform</li>
                <li>App Store / Play submission assistance</li>
                <li>Push notifications</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h4>Technologies:</h4>
              <ul className={styles.chips}>
                <li>React Native</li><li>Swift</li><li>Kotlin</li><li>Firebase</li>
              </ul>
            </div>

            <div className={styles.actionBar}>
              <Link to="/contact" className={styles.ctaPrimary}>Get Started →</Link>
            </div>
          </article>

          {/* SaaS */}
          <article className={styles.card}>
            <header className={styles.cardHead}>
              <div className={styles.icon}>☁️</div>
              <div>
                <h3>SaaS Platform Development</h3>
                <p className={styles.cardSub}>Scalable software solutions</p>
              </div>
            </header>

            <ul className={styles.meta}>
              <li>Starting at <strong>$15,000</strong></li>
              <li>8–16 weeks</li>
            </ul>

            <p>
              Custom SaaS platforms with user management, billing, and advanced features.
            </p>

            <div className={styles.block}>
              <h4>What’s Included:</h4>
              <ul className={styles.bullets}>
                <li>Multi-tenant architecture</li>
                <li>User management & authentication</li>
                <li>Subscription billing integration</li>
                <li>Admin dashboard & API development</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h4>Technologies:</h4>
              <ul className={styles.chips}>
                <li>React</li><li>Node.js</li><li>PostgreSQL</li><li>AWS</li>
              </ul>
            </div>

            <div className={styles.actionBar}>
              <Link to="/contact" className={styles.cta}>Get Started →</Link>
            </div>
          </article>

          {/* E-commerce */}
          <article className={styles.card}>
            <header className={styles.cardHead}>
              <div className={styles.icon}>🛒</div>
              <div>
                <h3>E-commerce Solutions</h3>
                <p className={styles.cardSub}>Online stores that sell</p>
              </div>
            </header>

            <ul className={styles.meta}>
              <li>Starting at <strong>$4,000</strong></li>
              <li>3–6 weeks</li>
            </ul>

            <p>
              Complete e-commerce builds with secure payments and inventory management.
            </p>

            <div className={styles.block}>
              <h4>What’s Included:</h4>
              <ul className={styles.bullets}>
                <li>Product catalog management</li>
                <li>Secure payment processing</li>
                <li>Inventory & order management</li>
                <li>Email marketing integration</li>
              </ul>
            </div>

            <div className={styles.block}>
              <h4>Technologies:</h4>
              <ul className={styles.chips}>
                <li>Shopify</li><li>Stripe</li><li>WooCommerce</li><li>PayPal</li>
              </ul>
            </div>

            <div className={styles.actionBar}>
              <Link to="/contact" className={styles.cta}>Get Started →</Link>
            </div>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.h2}>Our Development Process</h2>
          <p className={styles.kicker}>
            A proven approach that ensures quality results and happy clients
          </p>
          <ul className={styles.processRow}>
            <li>
              <span className={styles.stepNum}>01</span>
              <strong>Discovery & Planning</strong>
              <p>Consultation to define goals, scope, and technical requirements.</p>
            </li>
            <li>
              <span className={styles.stepNum}>02</span>
              <strong>Design & Prototyping</strong>
              <p>Wireframes → high-fidelity UI and interactive prototypes.</p>
            </li>
            <li>
              <span className={styles.stepNum}>03</span>
              <strong>Development & Testing</strong>
              <p>Best practices, clean code, and thorough QA at every stage.</p>
            </li>
            <li>
              <span className={styles.stepNum}>04</span>
              <strong>Launch & Support</strong>
              <p>Deployment, analytics, and ongoing support to keep you growing.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* SUPPORT BAND */}
      <section className={styles.support}>
        <div className="container">
          <div className={styles.supportIcon}>🎧</div>
          <h2 className={styles.h2}>Ongoing Support & Maintenance</h2>
          <p className={styles.kicker}>
            We don’t just build and disappear. Every project includes options for continuous care.
          </p>
          <ul className={styles.supportRow}>
            <li><strong>24/7 Monitoring</strong><p>Uptime and performance oversight.</p></li>
            <li><strong>Security Updates</strong><p>Regular patches and dependency updates.</p></li>
            <li><strong>Technical Support</strong><p>Direct access to our dev team.</p></li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2 className={styles.h2}>Ready to Start Your Project?</h2>
          <p className={styles.kicker}>Let’s discuss requirements and tailor a solution for your business.</p>
          <Link to="/contact" className="button">Get a Free Consultation →</Link>
        </div>
      </section>
    </>
  )
}