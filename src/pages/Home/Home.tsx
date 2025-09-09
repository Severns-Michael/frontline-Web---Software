import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <SEO
        title="Custom Web & Software"
        description="Professional websites and lightweight web apps for small businesses. Fast, accessible, SEO-ready."
      />

      <main className={'snapContainer'}>
        {/* HERO */}
        <section id="hero" className={`${styles.hero} vh snap anchor`}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.badgeRow}>
                  <div className={styles.badge}>Veteran Owned and Operated</div>
                  <div className={styles.badge}>Based in USA</div>
                </div>
                
                <h1>Custom-Coded Websites & Software for Small Businesses</h1>
                <p className={styles.sub}>
                  Transform your business with custom websites and lightweight web apps.
                  Performance, accessibility, and SEO baked in — no page builders, no bloat.
                </p>
                <div className={styles.ctaRow}>
                  <Link to="/contact" className="button">Start Your Project</Link>
                  <Link to="/portfolio" className={styles.secondaryCta}>View Our Work</Link>
                </div>
              </div>

              {/* Visual */}
              <div className={styles.heroVisual} aria-hidden>
                <div className={styles.deviceStack}>
                  <div className={styles.laptopFrame} />
                  <img
                    className={styles.deviceImgLaptop}
                    src="/assets/mockups/laptop-home.webp"
                    alt=""
                    loading="eager"
                  />
                  <div className={styles.phoneFrame} />
                  <img
                    className={styles.deviceImgPhone}
                    src="/assets/mockups/phone-home.webp"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMS WE SOLVE */}
<section id="problems" className={`${styles.bandSoft} vh snap anchor`} aria-labelledby="problems-title">
  <div className="container">
    <h2 id="problems-title" className={styles.h2}>Fix the stuff that hurts revenue</h2>
    <p className={styles.lead}>Most small businesses lose customers to slow sites, clunky forms, and poor Google visibility. We fix that.</p>

    <ul className={styles.miniProof} role="list">
      <li>Slow load times</li>
      <li>Hard to use on phones</li>
      <li>Low Google rankings</li>
      <li>DIY builders that break</li>
      <li>No clear analytics</li>
    </ul>
  </div>
</section>

{/* WHAT YOU GET */}
<section id="capabilities" className={`${styles.bandDark}  vh snap anchor`} aria-labelledby="capabilities-title">
  <div className="container">
    <h2 id="capabilities-title" className={styles.h2}>What you get with every build</h2>
    <p className={styles.lead}>Fast, mobile-ready websites with clean code, built to rank — and support after launch.</p>

    <div className={styles.tileGrid}>
      <article className="card">
        <div className={styles.cardHead}><h3>Looks great on every device</h3></div>
        <p>Designed mobile-first so customers can browse and book from phones, tablets, and desktops without pinching or zooming.</p>
      </article>

      <article className="card">
        <div className={styles.cardHead}><h3>Clean, custom code</h3></div>
        <p>No page-builder bloat. Modern React/TypeScript (or Vue/JS) and best-practice markup so your site stays fast and easy to maintain.</p>
      </article>

      <article className="card">
        <div className={styles.cardHead}><h3>SEO from day one</h3></div>
        <p>Proper titles, meta, schema, sitemap, robots.txt, and Search Console/Analytics set-up so customers actually find you.</p>
      </article>

      <article className="card">
        <div className={styles.cardHead}><h3>Post-launch care</h3></div>
        <p>We don’t launch and disappear. Updates, uptime checks, backups, and quick support to keep things humming.</p>
      </article>
    </div>
  </div>
</section>

{/* PROCESS */}
<section id="process" className={`${styles.bandSoft}  vh snap anchor`} aria-labelledby="process-title">
  <div className="container">
    <h2 id="process-title" className={styles.h2}>A simple, no-stress process</h2>
    <div className={styles.processGrid}>
      <article className="card">
        <div className={styles.step}>1</div>
        <h3>Plan</h3>
        <p>Quick call to learn your goals, pages, and must-haves. We share a fixed scope and timeline so there are no surprises.</p>
      </article>
      <article className="card">
        <div className={styles.step}>2</div>
        <h3>Build</h3>
        <p>Design + development in weekly check-ins. You see progress as we go and give feedback early.</p>
      </article>
      <article className="card">
        <div className={styles.step}>3</div>
        <h3>Launch & grow</h3>
        <p>Performance tuned, SEO-ready, tracked with analytics. We iterate post-launch to keep results climbing.</p>
      </article>
    </div>
    <div className={styles.sectionFoot}>
      <Link to="/contact" className="button">Get a 15-minute intro call</Link>
    </div>
  </div>
</section>

{/* PORTFOLIO */}
<section id="work" className={`${styles.bandDark} vh snap anchor`} aria-labelledby="work-title">
  <div className="container">
    <h2 id="work-title" className={styles.h2}>Recent work</h2>
    <p className={styles.lead}>A few projects showing speed, clarity, and conversions.</p>

    <div className={styles.portfolioGrid}>
      <article className="card">
        <img src="/assets/portfolio/site-a.webp" alt="Project A homepage screenshot" className={styles.thumb}/>
        <h3>Local Barber — bookings that convert</h3>
        <p>Mobile booking + fast load times. Increased appointment requests ~40% after launch.</p>
        <Link to="/portfolio/barber" className={styles.secondaryCta}>See case study</Link>
      </article>

      <article className="card">
        <img src="/assets/portfolio/site-b.webp" alt="Project B homepage screenshot" className={styles.thumb}/>
        <h3>Café — online menu & orders</h3>
        <p>Clear menu UX and simple checkout. Reduced abandoned orders and boosted repeat visits.</p>
        <Link to="/portfolio/cafe" className={styles.secondaryCta}>See case study</Link>
      </article>

      <article className="card">
        <img src="/assets/portfolio/site-c.webp" alt="Project C homepage screenshot" className={styles.thumb}/>
        <h3>Contractor — lead generation</h3>
        <p>SEO landing pages for each service + neighborhood. More qualified calls, fewer tire-kickers.</p>
        <Link to="/portfolio/contractor" className={styles.secondaryCta}>See case study</Link>
      </article>
    </div>
  </div>
</section>

{/* PRICING PREVIEW */}
<section id="pricing" className={`${styles.bandSoft} vh snap anchor`} aria-labelledby="pricing-title">
  <div className="container">
    <h2 id="pricing-title" className={styles.h2}>Simple packages — clear outcomes</h2>
    <p className={styles.lead}>Transparent pricing with options to spread payments. Every build includes mobile-first design, SEO basics, and launch checklist.</p>

    <ul className={styles.miniProof} role="list" aria-label="pricing notes">
      <li>Payment plan available</li>
      <li>Fixed scope before we start</li>
      <li>2–4 week typical timeline</li>
    </ul>

    <div className={styles.priceGrid}>
      {/* Starter */}
      <article className="card">
        <div className={styles.price}>Starter</div>
        <h3>Essentials Site</h3>
        <p className={styles.cardSub}>Great for new businesses</p>
        <ul className={styles.bullets}>
          <li>Up to 5 pages</li>
          <li>Mobile-first + fast load</li>
          <li>SEO basics + analytics</li>
          <li>Launch checklist</li>
        </ul>
        <div className={styles.metaRow}>
          <span className={styles.priceTag}><strong>from $999</strong> or $199/mo × 6</span>
        </div>
        <Link to="/contact" className="button">Get exact quote</Link>
      </article>

      {/* Pro (Most Popular) */}
      <article className={`card ${styles.popular}`}>
        <div className={styles.ribbon}>Most Popular</div>
        <div className={styles.price}>Pro</div>
        <h3>Growth Site</h3>
        <p className={styles.cardSub}>Built to rank and convert</p>
        <ul className={styles.bullets}>
          <li>8–12 pages + blog</li>
          <li>Core Web Vitals targets</li>
          <li>Local SEO landing pages</li>
          <li>Monthly updates option</li>
        </ul>
        <div className={styles.metaRow}>
          <span className={styles.priceTag}><strong>from $2,499</strong> or $249/mo × 12</span>
        </div>
        <div className={styles.ctaRow}>
          <Link to="/contact" className="button">Start your estimate</Link>
          <Link to="/portfolio" className={styles.secondaryCta}>See results</Link>
        </div>
      </article>

      {/* Custom */}
      <article className="card">
        <div className={styles.price}>Custom</div>
        <h3>Apps & E-commerce</h3>
        <p className={styles.cardSub}>Tailored features & integrations</p>
        <ul className={styles.bullets}>
          <li>Web apps, portals, dashboards</li>
          <li>Cart/checkout & payments</li>
          <li>CRM/POS/email integrations</li>
          <li>Support & SLAs</li>
        </ul>
        <div className={styles.metaRow}>
          <span className={styles.priceTag}><strong>from $5k</strong> (scope-based)</span>
        </div>
        <Link to="/contact" className="button">Discuss your build</Link>
      </article>
    </div>

    {/* Risk reversal + tiny FAQ hook */}
    <div className={styles.pricingFoot}>
      <p><strong>Guarantee:</strong> If you’re not happy with the first milestone, you don’t move forward—no hard feelings.</p>
      <p className={styles.muted}>Not sure where you land? <Link to="/services">Compare packages</Link> or <Link to="/contact">ask for a free 15-minute consult</Link>.</p>
    </div>
  </div>
</section>


        {/* PROOF */}
        <section
          id="proof"
          className={`${styles.proof} ${styles.bandDark} vh snap anchor`}
          aria-labelledby="proof-title"
        >
          <div className="container">
         <h2 id="proof-title" className={styles.h2}>Outcomes we build for</h2>
            <ul className={styles.proofGrid} role="list">
              <li className={styles.proofItem}>
                <strong>More calls & bookings</strong>
                <p>Clear contact paths and fewer steps mean more inquiries.</p>
              </li>
              <li className={styles.proofItem}>
                <strong>Higher trust</strong>
                <p>Professional design + reviews + social proof = confidence.</p>
              </li>
              <li className={styles.proofItem}>
                <strong>Local traffic</strong>
                <p>Service pages that target your city and neighborhoods.</p>
              </li>
              <li className={styles.proofItem}>
                <strong>Better conversion</strong>
                <p>Focused pages, better headlines, and stronger CTAs.</p>
              </li>
              <li className={styles.proofItem}>
                <strong>Shorter load times</strong>
                <p>Fast sites keep people from bouncing and help rankings.</p>
              </li>
              <li className={styles.proofItem}>
                <strong>Less upkeep</strong>
                <p>Simple tools and a support plan that keeps things smooth.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
<section id="faq" className={`${styles.bandDark} vh snap anchor`} aria-labelledby="faq-title">
  <div className="container">
    <h2 id="faq-title" className={styles.h2}>Questions we get a lot</h2>
    <div className={styles.faq}>
      <details>
        <summary>How long does a project take?</summary>
        <p>Most sites launch in 3–6 weeks depending on pages, features, and how quickly we get content/feedback.</p>
      </details>
      <details>
        <summary>Do you work with templates?</summary>
        <p>We custom-code for speed and flexibility. If a high-quality base theme saves you money, we’ll suggest it honestly.</p>
      </details>
      <details>
        <summary>Can you help with content and photos?</summary>
        <p>Yes. We can draft copy, structure pages for SEO, and guide brand photography so your site looks professional.</p>
      </details>
      <details>
        <summary>What happens after launch?</summary>
        <p>We offer ongoing care: updates, uptime checks, backups, and small improvements so your site keeps performing.</p>
      </details>
    </div>
  </div>
</section>


        {/* FINAL CTA */}
        <section id="cta" className={`${styles.finalCta}`}>
          <div className="container">
            <div className={styles.finalCard}>
              <h2>Ready to Transform Your Business?</h2>
              <p>Join successful businesses who’ve accelerated their growth with our solutions.</p>
              <div className={styles.ctaRow}>
                <Link to="/contact" className="button">Start Your Project Today</Link>
                <Link to="/services" className={styles.secondaryCta}>Learn More About Our Services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}