import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './Services.module.css'
import { useState } from 'react'

export default function Services() {
  const [active, setActive] = useState<'websites' | 'ecommerce' | 'apps'>('websites')

  return (
    <>
      <SEO
        title="Services & Pricing | Frontline Web & Software"
        description="Custom-coded websites, e-commerce, and web apps for local business. One-time build or simple subscription."
      />

      {/* HERO + LINEUP (tabs) */}
      <section className={`${styles.hero} anchor`}>
        <div className="container">
          <div className={styles.badgeRow}>
            <span className={styles.badge}>Veteran-owned</span>
            <span className={styles.badge}>USA-based</span>
            <span className={styles.badge}>No page builders</span>
          </div>

          <h1 className={styles.h1}>Services &amp;<span className="accent"> Pricing</span></h1>
          <p className={styles.sub}>Custom-coded websites, e-commerce, and web apps—fast and accessible.</p>

          {/* Tabs */}
          <div className={styles.segmented} role="tablist" aria-label="Service categories">
            <button
              role="tab"
              aria-selected={active === 'websites'}
              className={`${styles.segment} ${active === 'websites' ? styles.active : ''}`}
              onClick={() => setActive('websites')}
            >
              Websites
            </button>
            <button
              role="tab"
              aria-selected={active === 'ecommerce'}
              className={`${styles.segment} ${active === 'ecommerce' ? styles.active : ''}`}
              onClick={() => setActive('ecommerce')}
            >
              E-commerce
            </button>
            <button
              role="tab"
              aria-selected={active === 'apps'}
              className={`${styles.segment} ${active === 'apps' ? styles.active : ''}`}
              onClick={() => setActive('apps')}
            >
              Web Apps
            </button>
          </div>

          {/* Tab container card */}
          <div className={styles.tabShell} role="tabpanel" aria-label="Selected service">
            {/* WEBSITES */}
            {active === 'websites' && (
              <>
                <header className={styles.panelHead}>
                  <h2 className={styles.panelTitle}>Websites</h2>
                  <p className={styles.panelSub}>Clean, fast, and built to last</p>
                </header>

                <div className={styles.plansRow}>
                  {/* Lump Sum */}
                  <article className={styles.plan}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Lump Sum</h3>
                    </div>

                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>Design</li>
                        <li>Development</li>
                        <li>+25/mo hosting</li>
                        <li>+40/mo unlimted edits</li>

                      </ul>
                    </div>

                    <div className={styles.pricePill}>$3,500</div>
                  </article>

                  {/* Subscription */}
                  <article className={`${styles.plan} ${styles.planEmphasis}`}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Website Monthly</h3>
                    </div>

                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>Design</li>
                        <li>Development</li>
                        <li>hosting</li>
                        <li>unlimted edits</li>
                        <li>SSL, backups, updates</li>
                        <li>24/7 Spport</li>

                      </ul>
                    </div>

                    <div className={styles.pricePill}>$165 Per Month</div>
                  </article>
                </div>
              </>
            )}

            {/* E-COMMERCE */}
            {active === 'ecommerce' && (
              <>
                <header className={styles.panelHead}>
                  <h2 className={styles.panelTitle}>E-commerce</h2>
                  <p className={styles.panelSub}>Shopify or WooCommerce—kept lean</p>
                </header>

                <div className={styles.plansRow}>
                  <article className={styles.plan}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Starter Store</h3>
                    </div>

                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>10–20 products, simple catalog</li>
                        <li>Stripe/PayPal checkout</li>
                        <li>Design & Development</li>
                        <li>+25/mo hosting</li>
                        <li>+40/mo unlimted edits</li>
                      </ul>
                    </div>

                    <div className={styles.pricePill}>$1.5k–$3k</div>
                  </article>

                  <article className={styles.plan}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Standard Store</h3>
                    </div>

                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>20–200 products, categories &amp; filters</li>
                        <li>Search, advanced shipping &amp; taxes</li>
                        <li>Order emails &amp; notifications</li>
                        <li>Optional customer accounts</li>
                        <li>Design & Development</li>
                        <li>+25/mo hosting</li>
                        <li>+40/mo unlimted edits</li>

                      </ul>
                    </div>

                    <div className={styles.pricePill}>$3.5k–$7.5k</div>
                  </article>
                </div>
              </>
            )}

            {/* WEB APPS */}
            {active === 'apps' && (
              <>
                <header className={styles.panelHead}>
                  <h2 className={styles.panelTitle}>Web Apps / Software</h2>
                  <p className={styles.panelSub}>Tailored tools for your workflow</p>
                </header>

                <div className={styles.plansRow}>
                  <article className={styles.plan}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Scope-based</h3>
                    </div>

                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>Client portals, bookings, quote calculators</li>
                        <li>Dashboards, simple CRMs, payments</li>
                        <li>Integrations: Stripe, QuickBooks, Shopify</li>
                        <li>Clean code, maintainable stack</li>
                        <li>Security &amp; basic audit logging</li>
                      </ul>
                    </div>

                    <div className={styles.pricePill}>from $5k+</div>
                  </article>

                  <article className={styles.plan}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Discovery Sprint</h3>
                    </div>

                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>1–2 weeks to map scope &amp; wireframes</li>
                        <li>Clickable prototype + estimate</li>
                        <li>Tech choices &amp; risk notes</li>
                        <li>Roadmap &amp; next steps</li>
                        <li>Yours to keep—no lock-in</li>
                      </ul>
                    </div>

                    <div className={styles.pricePill}>$750–$1.5k</div>
                  </article>
                </div>
              </>
            )}
          </div>

          {/* Page-level CTA under the lineup */}
          <div className={styles.ctaRow}>
            <Link to="/contact" className={`button ${styles.ctaPrimary}`}>Start your Project</Link>
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
              <h3>New Features</h3>
              <p className={styles.cardSub}><strong>Qutoed on work</strong></p>
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
              <ul className={styles.featureList}>
                <li>Uptime monitoring</li>
                <li>Weekly backups &amp; security updates</li>
              </ul>
              <p className={styles.cardSub}><strong>$25/mo</strong></p>
            </article>

            <article className={styles.card}>
              <h3>Basic Care</h3>
              <p className={styles.cardSub}>Includes hosting</p>
              <ul className={styles.featureList}>
                <li>Everything in Hosting-only</li>
                <li><strong>30 min/mo</strong> small edits</li>
                <li>Business-day response; typical ≤48h</li>
              </ul>
              <p className={styles.cardSub}><strong>$75/mo</strong></p>
            </article>

            <article className={styles.card}>
              <h3>Pro Care</h3>
              <p className={styles.cardSub}>Includes hosting</p>
              <ul className={styles.featureList}>
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