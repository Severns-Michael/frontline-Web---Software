import { useState } from 'react';
import { SEO } from '../../components/SEO/SEO';
import styles from './Portfolio.module.css';
import { webPageJsonLd, breadcrumbJsonLd, canonicalFor } from '../../lib/seo';


const categories = ['All', 'Websites', 'Web Apps / Portals', 'E-commerce', 'Integrations & Automation'] as const;
type Category = typeof categories[number];

type Project = {
  title: string;
  category: Exclude<Category, 'All'>;
  result?: string;
  features: string[];
  tech: string[];
  timeline?: string;
  year?: number;
  link?: string;
};

// --- Launch offer config ---
const launchOffer = {
  headline: "Founder's Launch Offer",
  sub: 'New company, big results—intro pricing for first 5 clients.',
  bullets: [
    'Priority kickoff in 3 days',
    'up to 5 pages',
    'SEO + analytics',
    'lump sum website 30% off first 3 clients or',
    'Subscription based website option will be discounted 30% the first 12 month contract',
  ],
  badge: 'Limited seats',
  code: 'LAUNCH25',
  footnote: 'Available through Nov 30, 2025 or until seats fill, type code in the contact form.',
  ctaHref: '/contact?offer=LAUNCH25',
  ctaText: 'Claim the Offer',
};

// --- Toggles 
// const PROMO_ENABLED = false;   // true = show promo card
// const PROMO_ONLY_MODE = false; // true = hide the grid (promo-only mode)

const PROMO_ENABLED = true;   // true = show promo card
const PROMO_ONLY_MODE = true;

const projects: Project[] = [
  // Websites
  { title: 'RiverStone Construction', category: 'Websites', result: '+120% leads in 60 days', features: ['SEO pages', 'Quote form', 'Reviews'], tech: ['React', 'Vite', 'Postgres'], timeline: '3 weeks', year: 2025 },
  { title: 'Harbor Legal', category: 'Websites', result: 'Bounce rate -28%', features: ['Blog', 'Schema', 'Analytics'], tech: ['React', 'MDX'], timeline: '4 weeks', year: 2024 },

  // Web Apps / Portals
  { title: 'InvoiceHub Portal', category: 'Web Apps / Portals', result: '-40% support tickets', features: ['Auth + roles', 'Invoices', 'Messaging'], tech: ['React', 'Node', 'Postgres'], timeline: '8 weeks', year: 2025 },
  { title: 'ClinicFlow (SaaS MVP)', category: 'Web Apps / Portals', result: '-20% no-shows', features: ['Bookings', 'Reminders', 'Stripe billing'], tech: ['React', 'Node', 'Stripe'], timeline: '10 weeks', year: 2025 },

  // E-commerce
  { title: 'BlueFin Sushi Ordering', category: 'E-commerce', result: '+35% online orders', features: ['Menu', 'Checkout', 'Pickup windows'], tech: ['Stripe', 'React'], timeline: '5 weeks', year: 2024 },
  { title: 'Trailhead Gear', category: 'E-commerce', result: 'AOV +18%', features: ['Catalog', 'Discounts', 'Tax/Shipping'], tech: ['Shopify', 'Hydrogen'], timeline: '6 weeks', year: 2024 },

  // Integrations & Automation
  { title: 'QuickBooks Sync', category: 'Integrations & Automation', result: '5 hrs/week saved', features: ['Invoices', 'Payouts', 'Webhook retries'], tech: ['Node', 'QuickBooks'], timeline: '2 weeks', year: 2025 },
  { title: 'Ops Automation', category: 'Integrations & Automation', result: 'Manual entry -90%', features: ['CSV import', 'ETL to sheets', 'Email alerts'], tech: ['Node', 'Google APIs'], timeline: '3 weeks', year: 2025 },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');
  const filtered = projects.filter(p => (active === 'All' ? true : p.category === active));
  const shouldShowGrid = !PROMO_ONLY_MODE;

  return (
    <>
      <SEO
  title="Portfolio"
  description="Selected projects across Websites, Web Apps/Portals, E-commerce, and Integrations."
  canonical={canonicalFor('/portfolio')}
  jsonLd={[
    // WebPage
    webPageJsonLd({
      path: '/portfolio',
      name: 'Portfolio',
      description:
        'Selected projects across Websites, Web Apps/Portals, E-commerce, and Integrations.',
    }),

    // Breadcrumbs via helper
    breadcrumbJsonLd([
      { name: 'Home', url: 'https://frontlinewebsoftware.com' },
      { name: 'Portfolio', url: 'https://frontlinewebsoftware.com/portfolio' },
    ]),

    // CollectionPage (grid)
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${canonicalFor('/portfolio')}#collection`,
      url: canonicalFor('/portfolio'),
      name: 'Portfolio projects',
      hasPart: projects.map((p) => ({
        '@type': 'CreativeWork',
        name: p.title,
        ...(p.year ? { datePublished: String(p.year) } : {}),
        ...(p.result ? { abstract: p.result } : {}),
        ...(p.features?.length ? { keywords: p.features.join(', ') } : {}),
        ...(p.link ? { url: p.link } : {}),
      })),
    },

    // ItemList (explicit order)
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${canonicalFor('/portfolio')}#items`,
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        ...(p.link ? { url: p.link } : { url: canonicalFor('/portfolio') }),
      })),
    },
  ]}
/>

      {/* PAGE-WIDE BACKGROUND */}
      <div className={styles.pageBg}>
        {/* HERO */}
        <section className={`${styles.hero} snap anchor`}>
          <div className="container">
            <h1 className="accent">Projects</h1>
            <p className={styles.sub}>Real results across four simple categories. Click a filter to explore.</p>

            {/* FILTERS */}
            <section className={`${styles.filters} anchor`}>
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={styles.segmented} role="tablist" aria-label="Project categories">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      role="tab"
                      aria-selected={active === cat}
                      className={`${styles.segment} ${active === cat ? styles.active : ''}`}
                      onClick={() => setActive(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* PROMO (gated) */}
            {PROMO_ENABLED && (
              <aside className={`${styles.promo} ${styles.promoGlow} card`} aria-labelledby="launch-offer-title">
                <div className={styles.promoTop}>
                  <span className={styles.promoBadge}>{launchOffer.badge}</span>
                  <span className={styles.promoCode}>
                    Use code <strong>{launchOffer.code}</strong>
                  </span>
                </div>
                <h3 id="launch-offer-title" className={styles.promoTitle}>
                  {launchOffer.headline}
                </h3>
                <p className={styles.promoSub}>{launchOffer.sub}</p>
                <ul className={styles.promoBullets}>
                  {launchOffer.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className={styles.promoActions}>
                  <a href={launchOffer.ctaHref} className="button">
                    {launchOffer.ctaText}
                  </a>
                  <span className={styles.promoFootnote}>{launchOffer.footnote}</span>
                </div>
              </aside>
            )}
          </div>
        </section>

        {/* GRID */}
        <section className={styles.gridBand}>
          <div className="container">
            <div className={styles.grid}>
              {shouldShowGrid &&
                filtered.map(p => (
                  <article key={p.title} className={`card ${styles.card}`}>
                    <div className={styles.cardTop}>
                      <span className={styles.badge}>{p.category}</span>
                      <span className={styles.meta}>
                        {p.timeline ? p.timeline : ''} {p.year ? `• ${p.year}` : ''}
                      </span>
                    </div>
                    <h3 className={styles.title}>{p.title}</h3>
                    {p.result && <p className={styles.result}>{p.result}</p>}

                    <ul className={styles.featureChips} role="list">
                      {p.features.map(f => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>

                    <div className={styles.stackRow}>
                      {p.tech.map(t => (
                        <span key={t} className={styles.stack}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={styles.cardActions}>
                      <a className={styles.cta} href={p.link || '/portfolio'}>
                        View details →
                      </a>
                    </div>
                  </article>
                ))}
            </div>

            {!shouldShowGrid && (
              <p className={styles.empty}>
                Case studies are being prepared. Be one of the first and get the {launchOffer.headline.toLowerCase()} —
                <a href={launchOffer.ctaHref}> claim code {launchOffer.code}</a>.
              </p>
            )}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <div className="container">
            <div className={styles.finalCard}>
              <h2>Have something similar in mind?</h2>
              <p>Tell us about your goals and we’ll map the quickest path to a launch.</p>
              <a href="/contact" className="button">
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
