type CSSModule = Record<string, string>;

export default function Trust({ styles }: { styles: CSSModule }) {
  return (
    <section
      id="trust"
      className={`${styles.trustFull} snap anchor`}   // ⬅ remove `vh`
      aria-labelledby="trust-title"
    >
      <div className={styles.trustContainer}>         {/* ⬅ wider container just for this section */}
        <div className={styles.trustGrid}>
          {/* LEFT: proof image */}
          <figure className={styles.proofFigure}>
            <img
              src="/lighthouse-100.webp"
              alt="Google PageSpeed Insights: 100/100 scores for Performance, Accessibility, Best Practices, and SEO"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.proofCaption}>
              Measured on mobile for the homepage
            </figcaption>
          </figure>

          {/* RIGHT: copy */}
          <div className={styles.proofCopy}>
            <h2 id="trust-title" className={styles.h2}>
              Real-world performance, not just promises
            </h2>
            <p className={styles.lede}>
              We design and build sites that are <strong>fast</strong>, <strong>accessible</strong>, and <strong>SEO-ready</strong> from day one.
              No page builders or heavy themes—clean React/TypeScript, modern bundling, and the right schema.
            </p>

            <ul className={styles.proofList} role="list">
              <li><strong>Performance:</strong> image optimization, preloads, code-splitting, HTTP/2 hints.</li>
              <li><strong>Accessibility:</strong> semantic HTML, keyboard focus, color contrast, ARIA where needed.</li>
              <li><strong>Best Practices:</strong> security headers, lazy loading, CLS/INP-safe interactions.</li>
              <li><strong>SEO:</strong> canonical URLs, Open Graph/Twitter, JSON-LD (LocalBusiness, FAQ, Service), sitemaps.</li>
            </ul>

            <div className={styles.kpis}>
              <div className={styles.kpi}><div className={styles.kpiNum}>100</div><div className={styles.kpiLabel}>Performance</div></div>
              <div className={styles.kpi}><div className={styles.kpiNum}>100</div><div className={styles.kpiLabel}>Accessibility</div></div>
              <div className={styles.kpi}><div className={styles.kpiNum}>100</div><div className={styles.kpiLabel}>Best Practices</div></div>
              <div className={styles.kpi}><div className={styles.kpiNum}>100</div><div className={styles.kpiLabel}>SEO</div></div>
            </div>

            <div className={styles.ctaRow}>
              <a href="/portfolio" className="button">See projects</a>
              <a href="/contact" className={styles.secondaryCta}>Get a performance plan</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}