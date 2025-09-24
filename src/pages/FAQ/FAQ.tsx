import { useState, type JSX } from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './FAQ.module.css'
import { webPageJsonLd, canonicalFor } from '../../lib/seo';

type QA = { q: string; a: string | JSX.Element }
type GroupKey = 'General' | 'Websites' | 'E-commerce' | 'Web Apps' | 'Process' 

const GROUPS: Record<GroupKey, QA[]> = {
  General: [
    { q: 'What do you actually build?', a: 'Custom-coded marketing websites, e-commerce stores, and lightweight web apps/portals. No page builders; modern React/TypeScript, accessible and fast.' },
    { q: 'Do you work with small businesses?', a: 'Yes—that’s our sweet spot. Local service businesses, clinics, trades, nonprofits, boutiques, and solo founders.' },
    { q: 'Do you work with individuals?', a: 'Of course our aim is to help people get an online platform without all the hassle of todays market.' },
    { q: 'What’s included in hosting/care?', a: 'Uptime monitoring, SSL, backups, security updates. Care plans add small monthly edits and priority response.' },
    { q: 'How fast do you respond?', a: 'Business-day replies (typically ≤48h).' },
    { q: 'Can we leave later?', a: 'Of course. We’ll export your content/assets and help you transition cleanly.' },
    { q: 'How do we start?', a: <>Book a 15-minute intro on the <Link to="/contact">contact page</Link>. If we’re a fit, we’ll send a short questionnaire and a fixed-scope quote.</> },
  ],
  Websites: [
    { q: 'How long does a website take?', a: 'Typical 2–4 weeks depending on pages, assets, and feedback speed. We give a clear timeline up front.' },
    { q: 'What’s included in a website build?', a: 'Mobile-first design, clean code, performance & accessibility checks, SEO hygiene (meta, schema, sitemap), Analytics/Search Console, and a launch checklist.' },
    { q: 'Who owns the code?', a: 'For lump-sum projects, you own the code at final payment. For the monthly website, you license it while subscribed (we’ll always export your content/assets on request).' },
  ],
  'E-commerce': [
    { q: 'Which platforms do you use?', a: 'Shopify or WooCommerce depending on catalog complexity, integrations, and budget.' },
    { q: 'What’s the difference between Starter and Standard stores?', a: 'Starter: smaller catalogs with simple checkout and basics. Standard: larger catalogs with filters/search, shipping rules, taxes, emails, and optional customer accounts.' },
    { q: 'Can you migrate products?', a: 'Yes. We can import products & customers from CSV or an existing platform and map variants/options.' },
  ],
  'Web Apps': [
    { q: 'What kinds of apps do you build?', a: 'Dashboards, client portals, simple CRMs, bookings, quote calculators, Stripe billing, and integrations (QuickBooks, Google, Shopify, etc.).' },
    { q: 'How do you price an app?', a: 'Scope-based. We usually start with a short Discovery Sprint to define flows, wireframes, and an estimate, then build in milestones.' },
    { q: 'Can you maintain our existing app?', a: 'Often, yes—after a brief audit to understand stack, risks, and handoff needs.' },
  ],
  'Process': [
    { q: 'What’s the process like?', a: 'Intro call → questionnaire → fixed scope/quote → design preview → build in weekly check-ins → launch → care/hosting.' },
    { q: 'Do you offer payment options?', a: 'Yes. Websites can be lump-sum or monthly. Apps/e-commerce are milestone-based. We keep it straightforward—no gotchas.' },
    { q: 'Do you guarantee your work?', a: 'If you’re not happy with the finished product, you don’t move forward—no hard feelings.' },
  ],
  
}

const GROUP_ORDER: GroupKey[] = [
  'General',
  'Websites',
  'E-commerce',
  'Web Apps',
  'Process'
  
]


export default function Faq() {
  const [active, setActive] = useState<GroupKey>('General')

  return (
    <>
<SEO
  title="FAQs"
  description="Common questions about timelines, hosting, editing your site, and how projects run."
  canonical={canonicalFor('/faq')}
  jsonLd={[
    webPageJsonLd({
      path: '/faq',
      name: 'FAQs',
      description: 'Common questions about timelines, hosting, editing your site, and how projects run.',
    }),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${canonicalFor('/faq')}#faq`,
      mainEntity: GROUPS[active].map(({ q, a }: QA) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: typeof a === 'string' ? a : '' },
      })),
    },
  ]}
/>

      {/* SINGLE HERO that contains centered selector above the box */}
      <section className={`${styles.hero} `}>
        <div className="container">
          <h1><span className='accent'>Questions</span> we get a lot</h1>
          <p className={styles.sub}>
            Straight answers about scope, timelines, pricing, and how we work. If you don’t see it, just ask.
          </p>

          {/* Selector ABOVE the card + centered */}
          <div className={styles.segmentWrap}>
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

          {/* Glowing card with the questions */}
          <div className={styles.heroCard} aria-label="FAQ browser">
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
        </div>
      </section>

      {/* Final CTA stays as-is (optional) */}
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