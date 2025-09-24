import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './Services.module.css'
import { useState } from 'react'
import { canonicalFor, webPageJsonLd, } from '../../lib/seo'



export default function Services() {
  const [active, setActive] = useState<'websites' | 'ecommerce' | 'apps'>('websites')

  return (
    <>
        <SEO
  title="Services & Pricing | Frontline Web & Software"
  description="Custom-coded websites, e-commerce, and web apps for small business. Fast, accessible, SEO-ready."
  canonical={canonicalFor('/services')}
  jsonLd={[
    // Describe the page itself
    webPageJsonLd({
      path: '/services',
      name: 'Services & Pricing',
      description: 'Custom-coded websites, e-commerce, and web apps for small business. Fast, accessible, SEO-ready.',
    }),
    // List your services (each a Service with a simple Offer)
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${canonicalFor('/services')}#services`,
      'name': 'Service lineup',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'Service',
            'name': 'Websites',
            'description': 'Clean, fast marketing sites with mobile-first design, performance/accessibility checks, and SEO hygiene.',
            'offers': [
              {
                '@type': 'Offer',
                'name': 'Lump Sum',
                'price': 3000,
                'priceCurrency': 'USD',
                'priceSpecification': {
                  '@type': 'PriceSpecification',
                  'priceCurrency': 'USD',
                  'price': 3000
                }
              },
              {
                '@type': 'Offer',
                'name': 'Website Monthly',
                'price': 165,
                'priceCurrency': 'USD',
                'category': 'subscription'
              }
            ]
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'Service',
            'name': 'E-commerce',
            'description': 'Shopify or WooCommerce—kept lean with the essentials.',
            'offers': [
              {
                '@type': 'Offer',
                'name': 'Starter Store',
                'priceCurrency': 'USD',
                'price': 1500,
                'priceSpecification': {
                  '@type': 'PriceSpecification',
                  'priceCurrency': 'USD',
                  'minPrice': 1500,
                  'maxPrice': 3000
                }
              },
              {
                '@type': 'Offer',
                'name': 'Standard Store',
                'priceCurrency': 'USD',
                'price': 3500,
                'priceSpecification': {
                  '@type': 'PriceSpecification',
                  'priceCurrency': 'USD',
                  'minPrice': 3500,
                  'maxPrice': 7500
                }
              }
            ]
          }
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'Service',
            'name': 'Web Apps / Software',
            'description': 'Scope-based builds for portals, dashboards, bookings, payments, and integrations.',
            'offers': [
              {
                '@type': 'Offer',
                'name': 'Scope-based',
                'priceCurrency': 'USD',
                'price': 5000
              },
              {
                '@type': 'Offer',
                'name': 'Discovery Sprint',
                'priceCurrency': 'USD',
                'price': 750,
                'priceSpecification': {
                  '@type': 'PriceSpecification',
                  'priceCurrency': 'USD',
                  'minPrice': 750,
                  'maxPrice': 1500
                }
              }
            ]
          }
        }
      ]
    }
  ]}
/>

      {/* HERO + LINEUP (tabs) */}
      <section id="services-hero" className={`${styles.hero}`}>
        <div className="container">
            <div className={'badgeRow center-row'}>
                  <ul className={'miniProof center-row'} role="list">
                    <li>Veteran owned & operated</li>
                    <li>Based in USA</li>
                    <li>No Page builders or templates</li>
                  </ul>
                </div>
          

          <h1 className={styles.h1}>
            Services &nbsp;<span className="accent">and Pricing</span>
          </h1>
          <p className={styles.sub}>
            Custom-coded websites, e-commerce, and web apps — fast, accessible, SEO-ready.
          </p>

          {/* Segmented tabs */}
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

          {/* Tab body (card shell) */}
          <div className={`${styles.tabShell} card`} role="tabpanel" aria-label="Selected service">
            {/* WEBSITES */}
            {active === 'websites' && (
              <>
                <header className={styles.panelHead}>
                  <h2 className={styles.panelTitle}>Websites</h2>
                  <p className={styles.panelSub}>Clean, fast, and built to last</p>
                </header>

                <div className={styles.plansRow}>
                  {/* Lump Sum */}
                  <article className={`${styles.plan} card`}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Lump Sum</h3>
                    </div>

                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>Design</li>
                        <li>Development</li>
                        <li>+ $25/mo hosting</li>
                        <li>+ $40/mo unlimited edits</li>
                      </ul>
                    </div>

                    <div className={styles.price}>from $3,000</div>
                  </article>

                  {/* Subscription */}
                  <article className={`${styles.plan} card`}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Website Monthly</h3>
                    </div>

                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>Design</li>
                        <li>Development</li>
                        <li>Hosting</li>
                        <li>Unlimited edits</li>
                        <li>SSL, backups, updates</li>
                        <li>24/7 support</li>
                      </ul>
                    </div>

                    <div className={styles.price}>$165 / month</div>
                  </article>
                </div>
              </>
            )}

            {/* E-COMMERCE */}
            {active === 'ecommerce' && (
              <>
                <header className={styles.panelHead}>
                  <h2 className={styles.panelTitle}>E-commerce</h2>
                  <p className={styles.panelSub}>Shopify or WooCommerce — kept lean</p>
                </header>

                <div className={styles.plansRow}>
                  <article className={`${styles.plan} card`}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Starter Store</h3>
                    </div>
                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>10–20 products, simple catalog</li>
                        <li>Stripe/PayPal checkout</li>
                        <li>Design &amp; development</li>
                      </ul>
                    </div>
                    <div className={styles.price}>$1.5k–$3k</div>
                  </article>

                  <article className={`${styles.plan} card`}>
                    <div className={styles.planHead}>
                      <h3 className={styles.planTitle}>Standard Store</h3>
                    </div>
                    <div className={styles.planMain}>
                      <div className={styles.planKicker}>Includes</div>
                      <ul className={styles.featureList}>
                        <li>20–200 products, categories &amp; filters</li>
                        <li>Search, shipping &amp; taxes</li>
                        <li>Order emails &amp; notifications</li>
                        <li>Optional customer accounts</li>
                        <li>Design &amp; development</li>
                      </ul>
                    </div>
                    <div className={styles.price}>$3.5k–$7.5k</div>
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
                  <article className={`${styles.plan} card`}>
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
                    <div className={styles.price}>from $5k+</div>
                  </article>

                  <article className={`${styles.plan} card`}>
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
                        <li>Yours to keep — no lock-in</li>
                      </ul>
                    </div>
                    <div className={styles.price}>$750–$1.5k</div>
                  </article>
                </div>
              </>
            )}
                            {/* Add-ons & upgrades (inline on the same view) */}
<div className={styles.addonsInline}>
  <h2 className={styles.addonsTitle}>
    <span className="accent">Add-ons</span> & upgrades
  </h2>
  <p className={styles.addonsSub}>
    Pick extras when you need them — all optional.
  </p>

  <ul className={styles.addonGrid} role="list">
    <li className={`${styles.addonCard} card`}>
      <h3>Extra pages</h3>
      <p className={styles.cardSub}><strong className={styles.priceInline}>$100/page</strong></p>
    </li>
    <li className={`${styles.addonCard} card`}>
      <h3>Blog setup</h3>
      <p className={styles.cardSub}><strong className={styles.priceInline}>$300</strong> (listing + post template)</p>
    </li>
    <li className={`${styles.addonCard} card`}>
      <h3>Email &amp; automations</h3>
      <p className={styles.cardSub}>Mailchimp/Resend basics — quoted</p>
    </li>
    <li className={`${styles.addonCard} card`}>
      <h3>New features</h3>
      <p className={styles.cardSub}><strong className={styles.priceInline}>Scoped &amp; quoted</strong></p>
    </li>
  </ul>
</div>
          </div>

          {/* Page CTA under lineup */}
          <div className={styles.pageCtas}>
            <Link to="/contact" className="button">Start Your Project</Link>
            <Link to="/portfolio" className={styles.secondaryCta}>View Our Work</Link>
          </div>
        </div>
      </section>

    </>
  )
}
