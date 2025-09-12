
import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'
import styles from './Home.module.css'
import FeaturedHeroProjects from '../../components/FeaturedHeroProjects/FeaturedHeroProjects'

export default function Home() {
  return (
    <>
      <SEO //use on every page a little differently
        title="Custom Web & Software"
        description="Professional websites and lightweight web apps for small businesses. Fast, accessible, SEO-ready."
        canonical="https://frontline.example/"
        image="/og.jpg"
        jsonLd={{
          "@context":"https://schema.org",
          "@type":"LocalBusiness",
          "name":"Frontline Web & Software",
          "url":"https://frontline.example",
          "image":"https://frontline.example/og.jpg",
          "telephone":"+1-208-555-1234",
          "address":{
            "@type":"PostalAddress",
            "streetAddress":"123 Example St",
            "addressLocality":"Idaho Falls",
            "addressRegion":"ID",
            "postalCode":"83401",
            "addressCountry":"US"
          },
          "areaServed":["Idaho Falls","Pocatello","Rexburg"],
          "sameAs":[
            "https://www.facebook.com/yourpage",
            "https://www.linkedin.com/company/yourcompany"
          ]
        }}
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
                
                <h1>Custom-Coded Websites & Software for </h1>
                <h1 className={`accent`}> Small Businesses</h1>
                <p className={styles.sub}>
                  Transform your business with a custom website and lightweight web app.
                  Performance, accessibility, and SEO built in — no page builders, no bloat.
                </p>
                <div className={styles.ctaRow}>
                  <Link to="/contact" className="button">Start Your Project</Link>
                  <Link to="/portfolio" className={styles.secondaryCta}>View Our Work</Link>
                </div>
              </div>

              {/* Visual */}
              <div className={styles.heroVisual}>
                <FeaturedHeroProjects />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMS WE SOLVE */}
<section id="problems" className={`${styles.bandSoft} vh snap anchor`} aria-labelledby="problems-title">
  <div className="container">
    <h1 id="problems-title" className={`${styles.h1}`}><span className={`${styles.h1} accent`}> Fix</span> the stuff that hurts<span className={`${styles.h1} accent`}> revenue</span></h1>
  
    <p className={styles.sub}>Most small businesses lose customers to slow sites, clunky forms, and poor Google visibility. We can fix that.</p>

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
<section id="capabilities" className={`${styles.bandDark} vh snap anchor`} aria-labelledby="capabilities-title">
  <div className="container">
    <div className={`${styles.sectionHead} ${styles.alignCenter}`}>
      <h2 id="capabilities-title" className={styles.h1}>What you get with every <span className={`accent ${styles.h1}`}>build:</span></h2>
      <p className={styles.sub}>Fast, mobile-ready websites or software with clean code, built to last.</p>
    </div>

    <ul className={styles.featureList} role="list">
      <li className={styles.feature}>
        <div className={styles.featureIcon} aria-hidden>
          {/* icon */}
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 5h18v14H3zM7 9h10v2H7zM7 13h6v2H7z"/></svg>
        </div>
        <div className={styles.featureBody}>
          <h3>Looks great on every device</h3>
          <p className={styles.sub}>Designed mobile-first so customers can browse and book from phones, tablets, and desktops without pinching or zooming.</p>
        </div>
      </li>

      <li className={styles.feature}>
        <div className={styles.featureIcon} aria-hidden>
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 6h16v12H4zM6 8h12v2H6zM6 12h8v2H6z"/></svg>
        </div>
        <div className={styles.featureBody}>
          <h3>Clean, custom code</h3>
          <p className={styles.sub}>No page-builder bloat. Modern React/TypeScript and best-practice markup so your site stays fast and easy to maintain.</p>
        </div>
      </li>

      <li className={styles.feature}>
        <div className={styles.featureIcon} aria-hidden>
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h16v4H4zM4 10h10v4H4zM4 16h14v4H4z"/></svg>
        </div>
        <div className={styles.featureBody}>
          <h3>SEO from day one</h3>
          <p className={styles.sub}>Titles, meta, schema, sitemap, robots.txt, plus Search Console/Analytics so customers actually find you.</p>
        </div>
      </li>

      <li className={styles.feature}>
        <div className={styles.featureIcon} aria-hidden>
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l4 4-4 4-4-4 4-4zm-6 10h12v8H6z"/></svg>
        </div>
        <div className={styles.featureBody}>
          <h3>Post-launch care</h3>
          <p className={styles.sub}>Updates, uptime checks, backups, and quick support to keep things humming.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

{/* PROCESS */}
<section id="process" className={`${styles.bandSoft}  vh snap anchor`} aria-labelledby="process-title">
  <div className="container">
    <h2 id="process-title" className={styles.h1}>A Simple, <span className={`${styles.h1} accent`}>No-Stress</span> Process</h2>
    <div className={styles.processGrid}>
      <article className="card">
        <h2 className="accent">Plan</h2>
        <p className={styles.lead}>Intro call to learn your goals, pages, and must-haves. We ensure a fixed scope and timeline so there are no surprises.</p>
      </article>
      <article className="card">
        <h2 className="accent">Build</h2>
        <p className={styles.lead}>Design & development in weekly check-ins. You"ll see progress as we go and can give feedback early.</p>
      </article>
      <article className="card">
        <h2 className="accent">Launch & grow</h2>
        <p className={styles.lead}>Performance tuned, SEO active, and tracked with analytics. We iterate post-launch to keep results climbing.</p>
      </article>
    </div>
    <div className={styles.sectionFoot}>
      <Link to="/contact" className="button">Get a 15-minute intro call</Link>
    </div>
  </div>
</section>



{/* PRICING PREVIEW */}
<section id="pricing" className={`${styles.bandSoft} vh snap anchor`} aria-labelledby="pricing-title">
  <div className="container">
    <h2 id="pricing-title" className={styles.h1}><span className={`${styles.h3} accent`} >Simple</span> Packages</h2>
    <p className={styles.lead}>Transparent pricing with multiple options. Every build includes mobile-first design, SEO built in, and a launch checklist.</p>

    <div className={styles.priceGrid}>
      {/* Starter */}
      <article className="card">
        <div className={styles.price}>Lump sum</div>
        <h3>Website Lump Sum</h3>
        <ul className={styles.bullets}>
          <li>Up to 5 pages</li>
          <li>Mobile-first + fast load</li>
          <li>SEO+ analytics</li>
          <li>Contact form</li>
          <li>Google Business setup</li>
          <li>Launch checklist</li>
          <li>+40/mo unlimted edits</li>
          <li>+25/mo hosting</li>
        </ul>
        <div className={styles.metaRow}>
          <span className={styles.priceTag}><strong>from $3000</strong> </span>
        </div>
        <Link to="/contact" className="button">Get exact quote</Link>
      </article>

      {/* Pro (Most Popular) */}
      <article className={`card ${styles.popular}`}>
        <div className={styles.ribbon}>Most Popular</div>
        <div className={styles.price}>Monthly</div>
        <h3>Website Monthly</h3>
        <ul className={styles.bullets}>
          <li>Up to 5 pages</li>
          <li>Mobile-first + fast load</li>
          <li>SEO + analytics</li>
          <li>Contact form</li>
          <li>Google Business setup</li>
          <li>Launch checklist</li>
          <li>lifetime updates</li>
          <li>unlimted edits</li>
          <li>24/7 support</li>
          
        </ul>
        <div className={styles.metaRow}>
          <span className={styles.priceTag}><strong>$160 /mo for 12 months</strong> </span>
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
          <span className={styles.priceTag}><strong>from $3k</strong> (scope-based)</span>
        </div>
        <Link to="/contact" className="button">Discuss your build</Link>
      </article>
    </div>

    {/* Risk reversal + tiny FAQ hook */}
    <div className={styles.pricingFoot}>
      <p><strong className='accent'>Satisfaction Guarantee:</strong> If you’re not happy with the finished product, we don't move foward - no hard feelings.</p>
      <p className={styles.muted}>Not sure where you land? <Link to="/services">Compare packages</Link> or <Link to="/contact">ask for a free 15-minute consult</Link>.</p>
    </div>
  </div>
</section>


{/* FOCUS / SCROLLYTELLLING */}
<section id="focus" className={`${styles.bandDark} snap anchor`} aria-labelledby="focus-title">
  <div className="container">
    <div className={styles.focusGrid}>
      <aside className={styles.stickyCol}>
        <h2 id="focus-title" className={styles.h1}>
          What we <span className="accent">do:</span>
        </h2>
        <p className={styles.sub}>
          Speed. Conversion. Findability. Everything else is tactics.
        </p>
      </aside>

      <ol className={styles.focusList} role="list">
        <li className={`${styles.focusItem} ${styles.pushR}`}>
          <span className={styles.kicker}>Speed</span>
          <h3>Shave off the wait</h3>
          <p className={styles.sub}>
            Image + asset optimization, route-level code-splitting, and caching. 
            Goal: mobile LCP ≲ 2.5s.
          </p>
        </li>

        <li className={`${styles.focusItem} ${styles.pushL}`}>
          <span className={styles.kicker}>Conversion</span>
          <h3>Make the next step obvious</h3>
          <p className={styles.sub}>
            Clear page hierarchy, sticky CTAs, and frictionless forms that don’t ask for the world.
          </p>
        </li>

        <li className={`${styles.focusItem} ${styles.pushR}`}>
          <span className={styles.kicker}>Findability</span>
          <h3>Show up where it matters</h3>
          <p className={styles.sub}>
            Structured data, local landing pages, Search Console + analytics wired from day one.
          </p>
        </li>

        <li className={`${styles.focusItem} ${styles.pushL}`}>
          <span className={styles.kicker}>Care</span>
          <h3>Keep it running</h3>
          <p className={styles.sub}>
            Updates, uptime checks, backups, and small improvements so performance doesn’t drift.
          </p>
        </li>
      </ol>
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