import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './Services.module.css' // use the CSS you pasted

export default function Services() {
  return (
    <>
      <SEO
        title="Services & Pricing | Frontline Web & Software"
        description="Starter websites, business websites with SEO, e-commerce stores, and custom web apps. Veteran-owned. Clean code, no bloat."
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.badge}>Veteran Owned • Clean, Custom Code</p>
          <h1>
            What We <span className={styles.accent}>Build</span>
          </h1>
          <p className={styles.sub}>
            Starter sites, business sites with SEO, online stores, and custom web apps—built fast,
            accessible, and SEO-ready. No page builders or cookie-cutter templates.
          </p>
        </div>
      </section>

      {/* WEBSITES */}
      <section className={styles.bandSoft}>
        <div className="container">
          <h2>Websites</h2>
          <div className={styles.grid}>
            {/* Starter Website */}
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>🌐</span>
                <div>
                  <h3>Starter Website</h3>
                  <p className={styles.cardSub}>Entry point for small businesses</p>
                </div>
              </div>

              <ul className={styles.bullets}>
                <li>1–5 pages (Home, About, Services, Contact)</li>
                <li>Mobile-friendly, SEO-ready, fast load times</li>
                <li>Google Analytics + Business Profile setup</li>
                <li>Hosting & domain setup</li>
              </ul>

              <ul className={styles.meta}>
                <li>Budget: $500–1,500</li>
                <li>Timeline: ~1–2 weeks</li>
              </ul>

              <div className={styles.actionBar}>
                <Link to="/contact" className={styles.ctaPrimary}>Get a Free Quote</Link>
              </div>
            </article>

            {/* Business Website + SEO (Popular) */}
            <article className={`${styles.card} ${styles.popular}`}>
              <span className={styles.ribbon}>Most Popular</span>
              <div className={styles.cardHead}>
                <span className={styles.icon}>🚀</span>
                <div>
                  <h3>Business Website + SEO</h3>
                  <p className={styles.cardSub}>For growing teams and local rank</p>
                </div>
              </div>

              <ul className={styles.bullets}>
                <li>5–10+ pages, custom branding</li>
                <li>Advanced SEO (keywords, metadata, performance)</li>
                <li>Lead capture forms & email integration</li>
                <li>Optional blog/news section</li>
                <li>Maintenance plan ($50–200/mo)</li>
              </ul>

              <ul className={styles.meta}>
                <li>Budget: $2,000–4,000</li>
                <li>Timeline: ~2–4 weeks</li>
              </ul>

              <div className={styles.actionBar}>
                <Link to="/contact" className={styles.ctaPrimary}>Start a Project</Link>
                <Link to="/portfolio" className={styles.cta}>See Work</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* E-COMMERCE */}
      <section className={styles.bandSoft}>
        <div className="container">
          <h2>E-Commerce</h2>
          <div className={styles.grid}>
            {/* Starter Store */}
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>🛒</span>
                <div>
                  <h3>Starter Online Store</h3>
                  <p className={styles.cardSub}>Simple catalog with checkout</p>
                </div>
              </div>

              <ul className={styles.bullets}>
                <li>10–20 products</li>
                <li>Shopify or WooCommerce setup</li>
                <li>Stripe/PayPal checkout</li>
                <li>Basic SEO & analytics</li>
                <li>Maintenance ($50–100/mo)</li>
              </ul>

              <ul className={styles.meta}>
                <li>Budget: $1,500–3,000</li>
                <li>Timeline: ~2–3 weeks</li>
              </ul>

              <div className={styles.actionBar}>
                <Link to="/contact" className={styles.ctaPrimary}>Get a Free Quote</Link>
              </div>
            </article>

            {/* Standard Store */}
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>🏬</span>
                <div>
                  <h3>Standard Online Store</h3>
                  <p className={styles.cardSub}>Scalable store with filters & accounts</p>
                </div>
              </div>

              <ul className={styles.bullets}>
                <li>20–200 products, categories, filters, search</li>
                <li>Shipping rules & taxes</li>
                <li>Customer accounts (optional)</li>
                <li>Order emails & notifications</li>
                <li>Maintenance ($100–250/mo)</li>
              </ul>

              <ul className={styles.meta}>
                <li>Budget: $3,500–7,500</li>
                <li>Timeline: ~3–6 weeks</li>
              </ul>

              <p className={styles.cardSub}>
                Advanced stores (subscriptions, custom dashboards, deep integrations) start at $8k+.
              </p>

              <div className={styles.actionBar}>
                <Link to="/contact" className={styles.ctaPrimary}>Plan My Store</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WEB APPS & CUSTOM SOFTWARE */}
      <section className={styles.bandSoft}>
        <div className="container">
          <h2>Web Apps & Custom Software</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>⚙️</span>
                <div>
                  <h3>Common Builds</h3>
                  <p className={styles.cardSub}>Tailored tools for your workflow</p>
                </div>
              </div>

              <div className="block">
                <h4>Use Cases</h4>
                <ul className={styles.bullets}>
                  <li>Client/Customer Portals (logins, invoices, documents)</li>
                  <li>Booking & Scheduling Systems</li>
                  <li>Quote Calculators & Smart Forms</li>
                  <li>Dashboards (analytics, KPIs, simple CRMs)</li>
                  <li>Invoice & Payment Systems</li>
                </ul>
              </div>

              <ul className={styles.meta}>
                <li>Integrations: Stripe, QuickBooks, Shopify, etc.</li>
                <li>Pricing from $5k+ (scope-based)</li>
              </ul>

              <div className={styles.actionBar}>
                <Link to="/contact" className={styles.ctaPrimary}>Discuss Your App</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className={styles.bandSoft}>
        <div className="container">
          <h2>Marketing & Growth Add-Ons</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>📈</span>
                <div>
                  <h3>SEO, Analytics & Campaigns</h3>
                  <p className={styles.cardSub}>Upsells that move the needle</p>
                </div>
              </div>

              <ul className={styles.bullets}>
                <li>SEO optimization (on-page, speed, metadata, keywords)</li>
                <li>Google Analytics & event tracking setup</li>
                <li>Email capture + automations (Mailchimp, Resend, Postmark)</li>
                <li>Basic ad setup (Google/Facebook)</li>
                <li>Local SEO boost (maps, reviews, directories)</li>
              </ul>

              <div className={styles.actionBar}>
                <Link to="/contact" className={styles.ctaPrimary}>Add to My Build</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.h2}>How We Work</h2>
          <p className={styles.kicker}>Simple, transparent, and fast.</p>
          <ul className={styles.processRow}>
            <li>
              <div className={styles.stepNum}>01</div>
              <strong>Discovery</strong>
              <p className={styles.cardSub}>Clarify goals, scope, and success metrics.</p>
            </li>
            <li>
              <div className={styles.stepNum}>02</div>
              <strong>Design</strong>
              <p className={styles.cardSub}>Wireframes & UI—fast feedback loops.</p>
            </li>
            <li>
              <div className={styles.stepNum}>03</div>
              <strong>Build & Test</strong>
              <p className={styles.cardSub}>Clean code, accessibility, performance.</p>
            </li>
            <li>
              <div className={styles.stepNum}>04</div>
              <strong>Launch & Support</strong>
              <p className={styles.cardSub}>Deploy + optional care plans.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2>Ready to get started?</h2>
          <p className={styles.sub}>Tell us about your project—get a free quote and timeline.</p>
          <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className={styles.ctaPrimary}>Start Your Project</Link>
            <Link to="/portfolio" className={styles.cta}>View Our Work</Link>
          </div>
        </div>
      </section>
    </>
  )
}