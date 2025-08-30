import { useState } from 'react'
import { SEO } from '../../components/SEO/SEO'
import styles from './Portfolio.module.css'

const categories = ['All', 'Websites', 'Web Apps / Portals', 'E-commerce', 'Integrations & Automation'] as const
type Category = typeof categories[number]
type Project = {
  title: string
  category: Exclude<Category, 'All'>
  result?: string
  features: string[]
  tech: string[]
  timeline?: string
  year?: number
  link?: string
}

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
]

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All')
  const filtered = projects.filter(p => active === 'All' ? true : p.category === active)

  return (
    <>
      <SEO title="Projects" description="Selected projects across Websites, Web Apps/Portals, E-commerce, and Integrations." />

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Projects</h1>
          <p className={styles.sub}>Real results across four simple categories. Click a filter to explore.</p>
        </div>
      </section>

      {/* FILTERS */}
      <section className={styles.filters}>
        <div className="container">
          <ul className={styles.chips} role="tablist" aria-label="Project categories">
            {categories.map(cat => (
              <li key={cat}>
                <button
                  role="tab"
                  aria-selected={active === cat}
                  className={`${styles.chip} ${active === cat ? styles.chipActive : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.gridBand}>
        <div className="container">
          <div className={styles.grid}>
            {filtered.map((p) => (
              <article key={p.title} className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <span className={styles.badge}>{p.category}</span>
                  {p.year && <span className={styles.meta}>{p.year}{p.timeline ? ` · ${p.timeline}` : ''}</span>}
                </div>

                <h3 className={styles.title}>{p.title}</h3>
                {p.result && <p className={styles.result}>{p.result}</p>}

                <ul className={styles.featureChips}>
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>

                <div className={styles.stackRow}>
                  {p.tech.map(t => <span key={t} className={styles.stack}>{t}</span>)}
                </div>

                <div className={styles.cardActions}>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer" className={styles.cta}>View case study →</a>
                  ) : (
                    <a href="/contact" className={styles.cta}>Get a similar build →</a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className={styles.empty}>No projects in this category yet. <a href="/contact">Let’s build one.</a></p>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCard}>
            <h2>Have something similar in mind?</h2>
            <p>Tell us about your goals and we’ll map the quickest path to a launch.</p>
            <a href="/contact" className="button">Start Your Project</a>
          </div>
        </div>
      </section>
    </>
  )
}