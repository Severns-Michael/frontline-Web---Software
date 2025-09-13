
import { useState, type JSX } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './FAQ.module.css'

type QA = { q: string; a: string | JSX.Element }
type GroupKey = 'General' | 'Websites' | 'E-commerce' | 'Web Apps' | 'Process & Pricing' | 'Care & Hosting'

const GROUPS: Record<GroupKey, QA[]> = {
  General: [
    {
      q: 'What do you actually build?',
      a: 'Custom-coded marketing websites, e-commerce stores, and lightweight web apps/portals. No page builders; modern React/TypeScript, accessible and fast.',
    },
    {
      q: 'Do you work with small businesses?',
      a: 'Yes—that’s our sweet spot. Local service businesses, clinics, trades, nonprofits, boutiques, and solo founders.'
    },
    {
      q: 'How do we start?',
      a: (
        <>
          Book a 15-minute intro on the <Link to="/contact">contact page</Link>. If we’re a fit, we’ll send a short questionnaire and a fixed-scope quote.
        </>
      ),
    },
  ],

  Websites: [
    {
      q: 'How long does a website take?',
      a: 'Typical 3–6 weeks depending on pages, assets, and feedback speed. We give a clear timeline up front.'
    },
    {
      q: 'What’s included in a website build?',
      a: 'Mobile-first design, clean code, performance & accessibility checks, SEO hygiene (meta, schema, sitemap), Analytics/Search Console, and a launch checklist.'
    },
    {
      q: 'Who owns the code?',
      a: 'For lump-sum projects, you own the code at final payment. For the monthly website, you license it while subscribed (we’ll always export your content/assets on request).'
    },
  ],

  'E-commerce': [
    {
      q: 'Which platforms do you use?',
      a: 'Shopify or WooCommerce depending on catalog complexity, integrations, and budget.'
    },
    {
      q: 'What’s the difference between Starter and Standard stores?',
      a: 'Starter: smaller catalogs with simple checkout and basics. Standard: larger catalogs with filters/search, shipping rules, taxes, emails, and optional customer accounts.'
    },
    {
      q: 'Can you migrate products?',
      a: 'Yes. We can import products & customers from CSV or an existing platform and map variants/options.'
    },
  ],

  'Web Apps': [
    {
      q: 'What kinds of apps do you build?',
      a: 'Dashboards, client portals, simple CRMs, bookings, quote calculators, Stripe billing, and integrations (QuickBooks, Google, Shopify, etc.).'
    },
    {
      q: 'How do you price an app?',
      a: 'Scope-based. We usually start with a short Discovery Sprint to define flows, wireframes, and an estimate, then build in milestones.'
    },
    {
      q: 'Can you maintain our existing app?',
      a: 'Often, yes—after a brief audit to understand stack, risks, and handoff needs.'
    },
  ],

  'Process & Pricing': [
    {
      q: 'What’s the process like?',
      a: 'Intro call → questionnaire → fixed scope/quote → design preview → build in weekly check-ins → launch → care/hosting.'
    },
    {
      q: 'Do you offer payment options?',
      a: 'Yes. Websites can be lump-sum or monthly. Apps/e-commerce are milestone-based. We keep it straightforward—no gotchas.'
    },
    {
      q: 'Do you guarantee your work?',
      a: 'If you’re not happy with the finished product, you don’t move forward—no hard feelings.'
    },
  ],

  'Care & Hosting': [
    {
      q: 'What’s included in hosting/care?',
      a: 'Uptime monitoring, SSL, backups, security updates. Care plans add small monthly edits and priority response.'
    },
    {
      q: 'How fast do you respond?',
      a: 'Business-day replies (typically ≤48h). Pro Care gets next-business-day start on scheduled improvements.'
    },
    {
      q: 'Can we leave later?',
      a: 'Of course. We’ll export your content/assets and help you transition cleanly.'
    },
  ],
}

const GROUP_ORDER: GroupKey[] = [
  'General',
  'Websites',
  'E-commerce',
  'Web Apps',
  'Process & Pricing',
  'Care & Hosting',
]

const faqs = [
  { q: 'How long does a typical website take?', a: 'Most sites launch in 3–5 weeks depending on scope and content readiness.' },
  { q: 'Do you offer hosting?', a: 'Yes, we set up modern hosting and connect your domain.' },
];

export default function Faq() {
  const [active, setActive] = useState<GroupKey>('General')

  return (
    <>
     <SEO
        title="FAQs"
        description="Common questions about timelines, hosting, editing your site, and more."
        canonical="https://frontline.example/faq"
        jsonLd={{
          "@context":"https://schema.org",
          "@type":"FAQPage",
          "mainEntity": faqs.map(({q,a}) => ({
            "@type":"Question",
            "name": q,
            "acceptedAnswer": { "@type":"Answer", "text": a }
          }))
        }}
      />

      {/* HERO */}
      <section className={`${styles.hero} vh snap anchor`}>
        <div className="container">
          <h1>Questions we get a lot</h1>
          <p className={styles.sub}>
            Straight answers about scope, timelines, pricing, and how we work. If you don’t see it, just ask.
          </p>
        </div>
      </section>

      {/* FILTERS / SEGMENTS */}
      <section className={`${styles.filters} anchor`}>
        <div className="container" style={{ display:'flex', justifyContent:'center' }}>
          <div className={styles.segmented} role="tablist" aria-label="FAQ categories">
            {GROUP_ORDER.map((g) => (
              <button
                key={g}
                role="tab"
                aria-selected={active === g}
                className={`${styles.segment} ${active === g ? styles.active : ''}`}
                onClick={() => setActive(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className={`${styles.faqBand} snap anchor`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{active}</h2>
            <p className={styles.lead}>A few of the most common questions in this area.</p>
          </div>

          <div className={styles.faq}>
            {GROUPS[active].map(({ q, a }) => (
              <details key={q} className={styles.item}>
                <summary>{q}</summary>
                <div className={styles.answer}>
                  {typeof a === 'string' ? <p>{a}</p> : a}
                </div>
              </details>
            ))}
          </div>

          <div className={styles.footCta}>
            <Link to="/contact" className="button">Didn’t see your question? Contact us</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCard}>
            <h2>Ready to get unstuck?</h2>
            <p>Tell us what you’re trying to achieve and we’ll map the quickest path to launch.</p>
            <Link to="/contact" className="button">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  )
}

