type CSSModule = Record<string, string>;
import { Link } from 'react-router-dom';

export default function Pricing({ styles, }: { styles: CSSModule;  }) {
  return (
    <section id="pricing" className={`${styles.bandSoft} vh snap anchor`} aria-labelledby="pricing-title">
      <div className="container">
        <h2 id="pricing-title" className={styles.h1}>
          <span className={`${styles.h3} accent`}>Simple</span> Packages
        </h2>
        <p className={styles.lead}>
          Transparent pricing with multiple options. Every build includes mobile-first design, SEO built in, and a launch checklist.
        </p>

        <div className={styles.priceGrid}>
          {/* Starter */}
          <article className="card">
            <div className={styles.price}>Lump sum</div>
            <h3>Website Lump Sum</h3>
            <ul className={styles.bullets}>
              <li>Up to 5 pages</li><li>Mobile-first + fast load</li><li>SEO+ analytics</li><li>Contact form</li>
              <li>Google Business setup</li><li>Launch checklist</li><li>+40/mo unlimted edits</li><li>+25/mo hosting</li>
            </ul>
            <div className={styles.metaRow}>
              <span className={styles.priceTag}><strong>from $3000</strong></span>
            </div>
            <Link to="/contact" className="button">Get exact quote</Link>
          </article>

          {/* Pro */}
          <article className={`card ${styles.popular}`}>
            <div className={styles.ribbon}>Most Popular</div>
            <div className={styles.price}>Monthly</div>
            <h3>Website Monthly</h3>
            <ul className={styles.bullets}>
              <li>Up to 5 pages</li><li>Mobile-first + fast load</li><li>SEO + analytics</li><li>Contact form</li>
              <li>Google Business setup</li><li>Launch checklist</li><li>lifetime updates</li><li>unlimted edits</li><li>24/7 support</li>
            </ul>
            <div className={styles.metaRow}>
              <span className={styles.priceTag}><strong>$160 /mo for 12 months</strong></span>
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
              <li>Web apps, portals, dashboards</li><li>Cart/checkout & payments</li>
              <li>CRM/POS/email integrations</li><li>Support & SLAs</li>
            </ul>
            <div className={styles.metaRow}>
              <span className={styles.priceTag}><strong>from $3k</strong> (scope-based)</span>
            </div>
            <Link to="/contact" className="button">Discuss your build</Link>
          </article>
        </div>

        <div className={styles.pricingFoot}>
          <p><strong className='accent'>Satisfaction Guarantee:</strong> If you’re not happy with the finished product, we don't move foward - no hard feelings.</p>
          <p className={styles.muted}>Not sure where you land? <Link to="/services">Compare packages</Link> or <Link to="/contact">ask for a free 15-minute consult</Link>.</p>
        </div>
      </div>
    </section>
  );
}
