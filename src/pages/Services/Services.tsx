import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './Services.module.css'
import { useState } from 'react';

export default function Services() {
  const [active, setActive] = useState<'websites' | 'ecommerce' | 'apps'>('websites');

  return (
    <>
      <SEO
        title="Services & Pricing | Frontline Web & Software"
        description="Custom-coded websites, e-commerce, and web apps for local business. One-time build or simple subscription."
      />

      {/* HERO */}
      <section className={`${styles.hero} anchor`}>
        <div className="container">
          <div className={styles.badgeRow}>
            <span className={styles.badge}>Veteran-owned</span>
            <span className={styles.badge}>USA-based</span>
            <span className={styles.badge}>No page builders</span>
          </div>
          <h1 className={styles.h1}>Services <span className="accent">&amp; Pricing</span></h1>
          <p className={styles.sub}>
            Custom-coded websites, e-commerce, and web apps—fast, accessible, SEO-ready.
          </p>
          <nav className={styles.quickNav} aria-label="Section links">
            <a href="#lineup">Lineup</a>
            <a href="#addons">Add-ons</a>
            <a href="#care">Care &amp; Hosting</a>
            <a href="#process">Process</a>
          </nav>
        </div>
      </section>

      {/* LINEUP */}
      <section id="lineup" className={`${styles.bandSoft} anchor`}>
        <div className="container">
          <h2 className={styles.h2}>Pick what fits your business</h2>
          <p className={styles.lead}>Same quality across the board—different shapes to match your goals.</p>

          {/* Segmented control */}
          <div className={styles.segmented} role="tablist" aria-label="Service categories">
            <button
              role="tab"
              aria-selected={active === 'websites'}
              className={`${styles.segment} ${active === 'websites' ? styles.active : ''}`}
              onClick={() => setActive('websites')}
            >Websites</button>

            <button
              role="tab"
              aria-selected={active === 'ecommerce'}
              className={`${styles.segment} ${active === 'ecommerce' ? styles.active : ''}`}
              onClick={() => setActive('ecommerce')}
            >E-commerce</button>

            <button
              role="tab"
              aria-selected={active === 'apps'}
              className={`${styles.segment} ${active === 'apps' ? styles.active : ''}`}
              onClick={() => setActive('apps')}
            >Web Apps</button>
          </div>

          {/* Tab body */}
          <div style={{ marginTop: '1rem' }}>
            {/* Websites */}
            {active === 'websites' && (
              <article className={`${styles.card} ${styles.panel}`}>
                <header className={styles.cardHead}>
                  <div>
                    <h3>Websites</h3>
                    <p className={styles.cardSub}>Clean, fast, and built to convert</p>
                  </div>
                </header>

                <div className={styles.planGrid} role="list">
                  {/* Lump Sum */}
                  <div className={styles.plan} role="listitem">
                    <div className={styles.planHead}>
                      <span className={styles.planTitle}>Lump Sum</span>
                      <span className={styles.pricePill}>Typical: $3,000</span>
                    </div>
                    <ul className={styles.bullets}>
                      <li>Up to <strong>5 pages</strong></li>
                      <li>Performance, accessibility, SEO hygiene</li>
                      <li>Analytics &amp; Search Console</li>
                      <li>Weekly updates; clear handoff</li>
                    </ul>
                    <ul className={styles.meta}>
                      <li>Timeline: ~1–2 weeks (after content)</li>
                      <li>Ownership: <strong>you own the code</strong></li>
                    </ul>
                    <div className={styles.actionBar}>
                      <Link to="/contact" className={`button ${styles.ctaPrimary}`}>Start Lump Sum</Link>
                    </div>
                  </div>

                  {/* Subscription */}
                  <div className={`${styles.plan} ${styles.planEmphasis}`} role="listitem">
                    <div className={styles.planHead}>
                      <span className={styles.planTitle}>Subscription</span>
                      <span className={styles.pricePill}>$165/mo × 12</span>
                    </div>
                    <ul className={styles.bullets}>
                      <li>Up to <strong>5 pages</strong></li>
                      <li>Hosting included (the $25 is baked in)</li>
                      <li><strong>30 min/mo</strong> small edits</li>
                      <li>Monitoring, backups, updates</li>
                    </ul>
                    <ul className={styles.meta}>
                      <li>Ownership: licensed while subscribed</li>
                      <li><strong>No buyout</strong>; month-to-month after 12</li>
                    </ul>
                    <div className={styles.actionBar}>
                      <Link to="/contact" className={`button ${styles.ctaPrimary}`}>Start Subscription</Link>
                    </div>
                  </div>
                </div>

                <div>
                  <p className={styles.addonNote}>Add-ons: <strong>+$100/page</strong> • <strong>+$300 blog</strong> (listing + post template)</p>
                  <p className={styles.termsNote}>
                    Lump Sum → you own the code at final payment. Subscription → license to use while active; Frontline owns the code; no buyout.
                    We’ll export your content/assets on request.
                  </p>
                </div>
              </article>
            )}

            {/* E-commerce */}
            {active === 'ecommerce' && (
              <article className={`${styles.card} ${styles.panel}`}>
                <header className={styles.cardHead}>
                  <div>
                    <h3>E-commerce</h3>
                    <p className={styles.cardSub}>Shopify or WooCommerce—kept lean</p>
                  </div>
                </header>

                <div className={styles.planGrid} role="list">
                  <div className={styles.plan} role="listitem">
                    <div className={styles.planHead}>
                      <span className={styles.planTitle}>Starter Store</span>
                      <span className={styles.pricePill}>$1.5k–$3k</span>
                    </div>
                    <ul className={styles.bullets}>
                      <li>10–20 products, simple catalog</li>
                      <li>Stripe/PayPal checkout</li>
                      <li>Basic SEO &amp; Analytics</li>
                    </ul>
                    <div className={styles.actionBar}>
                      <Link to="/contact" className={`button ${styles.ctaPrimary}`}>Plan my store</Link>
                    </div>
                  </div>

                  <div className={styles.plan} role="listitem">
                    <div className={styles.planHead}>
                      <span className={styles.planTitle}>Standard Store</span>
                      <span className={styles.pricePill}>$3.5k–$7.5k</span>
                    </div>
                    <ul className={styles.bullets}>
                      <li>20–200 products, filters, search</li>
                      <li>Shipping rules, taxes, emails</li>
                      <li>Optional customer accounts</li>
                    </ul>
                    <div className={styles.actionBar}>
                      <Link to="/contact" className={`button ${styles.ctaPrimary}`}>Get a quote</Link>
                    </div>
                  </div>
                </div>

                <div /> {/* empty foot keeps panel layout consistent */}
              </article>
            )}

            {/* Web Apps */}
            {active === 'apps' && (
              <article className={`${styles.card} ${styles.panel}`}>
                <header className={styles.cardHead}>
                  <div>
                    <h3>Web Apps / Software</h3>
                    <p className={styles.cardSub}>Tailored tools for your workflow</p>
                  </div>
                </header>

                <div className={styles.planGrid} role="list">
                  <div className={styles.plan} role="listitem">
                    <div className={styles.planHead}>
                      <span className={styles.planTitle}>Scope-based</span>
                      <span className={styles.pricePill}>from $5k+</span>
                    </div>
                    <ul className={styles.bullets}>
                      <li>Client portals, bookings, quote calculators</li>
                      <li>Dashboards, simple CRMs, payments</li>
                      <li>Integrations: Stripe, QuickBooks, Shopify</li>
                    </ul>
                    <div className={styles.actionBar}>
                      <Link to="/contact" className={`button ${styles.ctaPrimary}`}>Discuss your app</Link>
                    </div>
                  </div>

                  {/* Optional second tile balances the grid nicely */}
                  <div className={styles.plan} role="listitem">
                    <div className={styles.planHead}>
                      <span className={styles.planTitle}>Discovery Sprint</span>
                      <span className={styles.pricePill}>$750–$1.5k</span>
                    </div>
                    <ul className={styles.bullets}>
                      <li>1–2 weeks to outline scope & wireframes</li>
                      <li>Clickable prototype + estimate</li>
                    </ul>
                    <div className={styles.actionBar}>
                      <Link to="/contact" className={`button ${styles.ctaPrimary}`}>Start a sprint</Link>
                    </div>
                  </div>
                </div>

                <div />
              </article>
            )}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section id="addons" className={`${styles.bandDark} anchor`}>
        <div className="container">
          <h2 className={styles.h2}>Add-ons &amp; upgrades</h2>
        </div>
        <div className="container">
          <ul className={styles.grid} role="list">
            <li className={styles.card}>
              <h3>Extra pages</h3>
              <p className={styles.cardSub}><strong>$100/page</strong></p>
            </li>
            <li className={styles.card}>
              <h3>Blog setup</h3>
              <p className={styles.cardSub}><strong>$300</strong> (listing + post template)</p>
            </li>
            <li className={styles.card}>
              <h3>Email &amp; automations</h3>
              <p className={styles.cardSub}>Mailchimp/Resend basics — quoted</p>
            </li>
            <li className={styles.card}>
              <h3>Photos &amp; stock</h3>
              <p className={styles.cardSub}>Shot list + stock curation — quoted</p>
            </li>
          </ul>
        </div>
      </section>

      {/* CARE & HOSTING */}
      <section id="care" className={`${styles.bandSoft} anchor`}>
        <div className="container">
          <h2 className={styles.h2}>Care &amp; Hosting</h2>
          <p className={styles.lead}>
            “Small edits” = quick changes ≲20 minutes (copy, hours, images). Unused time doesn’t roll over.
          </p>

          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>Hosting-only</h3>
              <p className={styles.cardSub}>Managed hosting + SSL</p>
              <ul className={styles.bullets}>
                <li>Uptime monitoring</li>
                <li>Weekly backups &amp; security updates</li>
              </ul>
              <p className={styles.cardSub}><strong>$25/mo</strong></p>
            </article>

            <article className={styles.card}>
              <h3>Basic Care</h3>
              <p className={styles.cardSub}>Includes hosting</p>
              <ul className={styles.bullets}>
                <li>Everything in Hosting-only</li>
                <li><strong>30 min/mo</strong> small edits</li>
                <li>Business-day response; typical ≤48h</li>
              </ul>
              <p className={styles.cardSub}><strong>$75/mo</strong></p>
            </article>

            <article className={styles.card}>
              <h3>Pro Care</h3>
              <p className={styles.cardSub}>Includes hosting</p>
              <ul className={styles.bullets}>
                <li>Everything in Basic</li>
                <li><strong>2 hrs/mo</strong> improvements</li>
                <li>Priority queue; next-business-day start</li>
              </ul>
              <p className={styles.cardSub}><strong>$100/mo</strong></p>
            </article>
          </div>

          <p className={styles.termsNote}>
            <strong>Subscription websites include</strong> hosting + 30 min/mo small edits. Upgrade to Pro Care for
            <strong> +$25/mo</strong> if you need ongoing improvements.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className={`${styles.process} anchor`}>
        <div className="container">
          <h2 className={styles.h2}>How we work</h2>
          <p className={styles.kicker}>Simple, transparent, and fast.</p>
          <ul className={styles.processRow}>
            <li>
              <div className={styles.stepNum}>01</div>
              <strong>15-minute intro</strong>
              <p className={styles.cardSub}>Goals, pages, budget. Fit check.</p>
            </li>
            <li>
              <div className={styles.stepNum}>02</div>
              <strong>Quick questionnaire</strong>
              <p className={styles.cardSub}>Assets &amp; priorities, fixed scope/price.</p>
            </li>
            <li>
              <div className={styles.stepNum}>03</div>
              <strong>Design preview</strong>
              <p className={styles.cardSub}>Wireframe → visual; one focused revision.</p>
            </li>
            <li>
              <div className={styles.stepNum}>04</div>
              <strong>Build &amp; launch</strong>
              <p className={styles.cardSub}>Staging link, perf &amp; a11y checks, handoff.</p>
            </li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '.8rem' }}>
            <Link to="/contact" className="button">Start your project</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.finalCta} anchor`}>
        <div className="container">
          <h2>Ready to get started?</h2>
          <p className={styles.sub}>Tell me about your project—get a clear quote and timeline.</p>
          <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="button">Start Your Project</Link>
            <Link to="/portfolio" className={styles.ctaLink}>View Work</Link>
          </div>
        </div>
      </section>
    </>
  )
}