type CSSModule = Record<string, string>;
export default function Focus({ styles }: { styles: CSSModule }) {
  return (
    <section id="focus" className={`${styles.bandDark} snap anchor`} aria-labelledby="focus-title">
      <div className="container">
        <div className={styles.focusGrid}>
          <aside className={styles.stickyCol}>
            <h2 id="focus-title" className={styles.h1}>
              What we <span className="accent">do:</span>
            </h2>
            <p className={styles.sub}>
              With every build, we focus on the six pillars of a successful website that drives real business results.
            </p>
          </aside>

          <ol className={styles.focusList} role="list">
            <li className={`${styles.focusItem} ${styles.pushL}`}>
              <span className={styles.kicker}>Clean, custom code</span>
              <h3>Made just for you</h3>
              <p className={styles.sub}>
                No page-builder bloat or templates. Modern React/TypeScript and best-practice markup so your site stays fast and easy to maintain.
              </p>
            </li>

            <li className={`${styles.focusItem} ${styles.pushL}`}>
              <span className={styles.kicker}>Mobile responsive</span>
              <h3>looks great on every device</h3>
              <p className={styles.sub}>
                Designed mobile-first so customers can browse and book from phones, tablets, and desktops without pinching or zooming.
              </p>
            </li>

            <li className={`${styles.focusItem} ${styles.pushR}`}>
              <span className={styles.kicker}>Speed</span>
              <h3>Shave off the wait</h3>
              <p className={styles.sub}>
                Image + asset optimization, route-level code-splitting, and caching. Goal: mobile LCP ≲ 2.5s.
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
                Titles, meta, schema, sitemap, robots.txt, plus Search Console/Analytics so customers actually find you.
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
  );
}
